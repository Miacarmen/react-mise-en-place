const {
  AuthenticationError,
  UserInputError,
} = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Checklist, ChecklistItem } = require('../models');
const { Types } = require('mongoose');

const resolvers = {
  Query: {
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    // find current logged in user
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id).populate('checklists');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // find user by id
    // populate with their checklists
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user.id).populate(
          'checklists'
        );
        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // find checklists by id
    // populate with it's checklistItems
    checklists: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate(
          'checklists'
        );
        // **** might need to do user?.checklists
        return user.checklists;
      }
      throw new AuthenticationError(
        'You must be logged in to see your checklists'
      );
    },
  },

  // CRUD actions
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create({
        firstName: args.firstName,
        email: args.email,
        password: args.password,
      });
      // create new token
      const token = signToken(user);
      return { token: token, user: user };
    },

    login: async (parent, args) => {
      // find a user with the inputted email
      const user = await User.findOne({ email: args.email });
      // if user doesn't exist, throw error
      if (!user) {
        throw new Error('No User Found With This Email!');
      }
      // Validate password input
      const correctPW = await user.isCorrectPassword(args.password);
      // if password isn't correct, throw error
      if (!correctPW) {
        throw new Error('Incorrect Password Entered!');
      }
      // create new token
      const token = signToken(user);
      return { token: token, user: user };
    },

    // Create new Checklist
    createChecklist: async (parent, args, context) => {
      if (context.user) {
        const checklist = await Checklist.create({
          title: args.title,
          user: context.user._id,
        });
        // const creator = await User.findById(context.user._id).populate('checklists');
        const creator = await User.findById(context.user._id);
        creator.checklists.push(checklist._id);
        await creator.save();

        return checklist;
      }
      throw new AuthenticationError(
        'You Must Be Logged In To Create Checklists!'
      );
    },

    // Delete a Checklist
    deleteChecklist: async (parent, args) => {
      const checklist = await Checklist.findByIdAndDelete(args.id);
      return checklist;
    },
  },

  // Add a Checklist Item
  addChecklistItem: async (parent, args, context) => {
    if (context.user) {
        // find current checklist by it's id
      const currChecklist = await Checklist.findById(args.id, context.user._id);

      const newChecklistItem = await ChecklistItem.create({
        name: args.name,
        completeBy: args.completeBy,
        completed: false,
        _id: new Types.ObjectId(),
      });

      currChecklist.items.push(newChecklistItem);
      await currChecklist.save();
      return currChecklist.items;
    }
  },

  // Delete a Checklist Item
  deleteChecklistItem: async (parent, args) => {
    const currChecklist = await getChecklist(args.checklistId);

    // currChecklist.items = currChecklist.items.filter(
    //   (item) => item._id.toString() != args.itemId
    // );
    // await currChecklist.save();
    // return currChecklist.items;
  },

  // Update a Checklist Item
  updateChecklistItem: async (parent, args) => {},
  // Check Item as Complete

  // Uncheck Item as Incomplete

  // Check/Uncheck All Items
};
