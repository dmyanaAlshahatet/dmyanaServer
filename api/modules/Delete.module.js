const mongoose = require('mongoose');

const deleteSchema = new mongoose.Schema({
    
  name: {
    type: String,
    required: true
  },
  // Add more fields as needed
});

const DeleteModel = mongoose.model('Delete', deleteSchema);

module.exports = DeleteModel;
