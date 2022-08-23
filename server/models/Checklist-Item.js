const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const checklistItemSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  completeBy: {
    // date and time
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    required: true,
  },
  completed: {
    type: Boolean,
  },
});

const ChecklistItem = model('ChecklistItem', checklistItemSchema);

module.exports = ChecklistItem;
