const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    // id: this.db.id.find().count() + 1,
id: {
	type: Schema.Types.ObjectId,
},
name: {
	type: String,
    required:true
},

}, {
	collection: 'student'
})

module.exports = mongoose.model('Student', studentSchema)