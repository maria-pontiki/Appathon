var express = require("express");
const MongoClient = require('mongodb').MongoClient
var router = express.Router();

const url = 'mongodb://localhost:27017/clinicalTrialsTwo';


MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('clinicalTrialsTwo')
    const trialsCollection = db.collection('trialDataTwo')

    router.post("/clinical_trial", function (req, res, next) {
        var condition = req.body.condition;
        var country = req.body.country;
	var query_dict = {"clinical_study.condition" : condition,
                                  "clinical_study.location_countries.country" : country,
		                  "clinical_study.enrollment.@type" : "Actual",
                                  $or:[
                                         {"clinical_study.overall_status" : "Completed"},
                                         {"clinical_study.overall_status" : "Terminated"}
                                      ]}

        trialsCollection.find(query_dict).toArray(function(err, documents) {
		var i;
		var sum = 0;
                for (i = 0; i < documents.length; i++) {
                    if ("enrollment" in documents[i].clinical_study){
		        sum = sum + parseInt(documents[i].clinical_study.enrollment["#text"]);
		    }
                }
		console.log(sum.toString());
		return res.json({result: sum.toString()});
        });
    });
	  
  })
  .catch(console.error)



router.get("/",function(req,res){

	res.render("index");
});

router.get("/clinical_trial", function (req, res) {
   res.render("clinical_trial")
});



module.exports = router;

