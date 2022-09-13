let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

//  Model Schema
let resultDetailSchema = require("../models/resultDetails");
let resultMasterSchema = require("../models/resultMaster");

// insert data to tables
router.post("/create-result",(req, res, next) => {
    console.log(req.body["student_id"]);
    student_master_data = {
      student_id: req.body["student_id"],
      date: req.body["date"],
    };
    // result table
    var master_id;
    //TODO create master table and get inserted record id assign that to another variable for later use
    resultMasterSchema.create(student_master_data, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log("created");
        res.json(data);
        resultMaster_id = data["_id"].toString();
        req.body["resultDetail"].forEach((element) => { 
          resultDetail = {
            resultMaster_id: element['resultMaster_id'],
            subject_id: element["subject_id"],
            totalMarks: element['totalMarks'],
            obtainMarks: element['obtainMarks'],
          };
          resultDetailSchema.create(req.body, (error, data) => {
            if (error) {
              return next(error);
            } else {
              console.log(data);
              res.json(data);
            }
          });
          console.log(element);
        });
      }
      console.log(master_id);
    });
  }, []);


// fetch data from tables
router.get("/", (req, res) => {
  resultDetailSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// UPDATE
router
  .route("/update-result/:id")
  .get((req, res) => {
    resultDetailSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })

  // Update  Data
  .put((req, res, next) => {
    resultDetailSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
          console.log("result-details updated successfully !");
        }
      }
    );
  });

// Delete data
router.delete("/delete-result/:id", (req, res, next) => {
  resultDetailSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
