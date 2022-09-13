const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let resultDetailSchema = new Schema({
   
id: {
	type: Schema.Types.ObjectId,
},
resultDetail:[{
		resultMaster_id:{
			type: Schema.Types.ObjectId,
			ref: 'resultMaster',
		},
		subject_id:{
			type: Schema.Types.ObjectId,
			ref: 'subject',
		},
		totalMarks:{
			type:Number,
		},
		obtainMarks:{
			type:Number,
		}
	}],

created_at:{
    type: Date,
    default: Date.now
},
updated_at:{
	type: Date,
    default: Date.now
}
}, {
	collection: 'resultDetail'
})

module.exports = mongoose.model('ResultDetail', resultDetailSchema)