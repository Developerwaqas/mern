const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let subjectSchema = new Schema({
    // id: this.db.id.find().count() + 1,
id: {
	type:Schema.Types.ObjectId,
},
name: {
	type: String,
    unique:true
},
created_date:{
    type: Date,
    default: Date.now
}

}, {
	collection: 'subject'
})

module.exports = mongoose.model('Subject', subjectSchema)
