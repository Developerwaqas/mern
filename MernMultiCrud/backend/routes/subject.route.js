let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Subject Model
let subjectSchema = require("../models/Subject");

// CREATE Subject
router.post("/create-subject", (req, res, next) => {
subjectSchema.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	console.log(data);
	res.json(data);
	}
});
});

// READ Subject
router.get("/", (req, res) => {
subjectSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// UPDATE subject
router
.route("/update-subject/:id")
// Get Single Subject
.get((req, res) => {
	subjectSchema.findById(
		req.params.id, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})

// Update Subject Data
.put((req, res, next) => {
	subjectSchema.findByIdAndUpdate(
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
		console.log("Subject updated successfully !");
		}
	}
	);
});

// Delete Subject
router.delete("/delete-subject/:id",
(req, res, next) => {
subjectSchema.findByIdAndRemove(
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
