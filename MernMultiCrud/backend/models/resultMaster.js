const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let resultMasterSchema = new Schema({
id: {
	 type: Schema.Types.ObjectId,
},
date: {
	type: Date,
    required:true
},
student_id: {
    type: Schema.Types.ObjectId,
    ref: 'student'
},
created_date:{
    type: Date,
    default: Date.now
},
updated_at:{
	type: Date,
    default: Date.now
}
}, {
	collection: 'resultMaster'
})

module.exports = mongoose.model('ResultMaster',resultMasterSchema)