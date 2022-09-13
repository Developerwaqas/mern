let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Student Model
let userSchema = require("../models/User");

// CREATE Student
router.post("/create-user", (req, res, next) => {
    userSchema.create(req.body, (error, data) => {
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
    userSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// UPDATE student
router
.route("/update-user/:id")
// Get Single Student
.get((req, res) => {
	userSchema.findById(
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
	userSchema.findByIdAndUpdate(
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
		console.log("user updated successfully !");
		}
	}
	);
});

// Delete Student
router.delete("/delete-user/:id",
(req, res, next) => {
    userSchema.findByIdAndRemove(
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
