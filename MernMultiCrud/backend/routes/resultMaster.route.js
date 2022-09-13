let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Result Model
let resultMasterSchema = require("../models/resultMaster");

// CREATE Student
router.post("/create-result", (req, res, next) => {
    resultMasterSchema.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	console.log(data);
	res.json(data);
	}
});
});

// READ Students
router.get("/", (req, res) => {
    resultMasterSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// UPDATE student
router
.route("/update-result/:id")
// Get Single Student
.get((req, res) => {
	resultMasterSchema.findById(
		req.params.id, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})

// Update Student Data
.put((req, res, next) => {
	resultMasterSchema.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
		return next(error);
		console.log(error);
		} else {
		res.json(data);
		console.log("result updated successfully !");
		}
	}
	);
});

// Delete Student
router.delete("/delete-result/:id",
(req, res, next) => {
    resultMasterSchema.findByIdAndRemove(
	req.params.id, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.status(200).json({
		msg: data,
	});
	}
});
});

module.exports = router;
