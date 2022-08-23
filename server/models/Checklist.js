const { Schema, model } = require('mongoose');

const checklistSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    // timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
  // has an array of many items
  checklistItems: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ChecklistItem',
    },
  ],
});

const Checklist = model('Checklist', checklistSchema);

module.exports = Checklist;
