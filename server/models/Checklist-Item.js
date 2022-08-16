const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const checklistItemSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    desc: {
        type: String,
        trim: true,
        maxlength: 100,
    },
    createdAt: {
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
    }
    
});

const ChecklistItem = mongoose.model('ChecklistItem', checklistItemSchema);

module.exports = ChecklistItem;