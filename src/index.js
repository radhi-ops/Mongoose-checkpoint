const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// connect to database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database successufly");
  })
  .catch((err) => {
    console.error(err);
  });

/*******************************************/

// define Person schema
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

const PersonModel = mongoose.model("person", PersonSchema);

/*******************************************/

// Create and Save a Record of a Model

/*const createPerson = new PersonModel({
    name : "Radhi" ,
    age : 26 ,
    favoriteFoods : ["Brika","Burger","Patte"]
})
createPerson.save().then (doc => { console.log(doc)}) .catch(err => { console.error(err)})*/

/*******************************************/

//Create Many Records with model.create()

/*const people = [
    {
        name : "Sami" ,
        age : 14 ,
        favoriteFoods : ["Pizza","Fritte","Glace"]
    },
    {
        name : "Mariem" ,
        age : 22 ,
        favoriteFoods : ["Salade","Lazagne","Patte"]
    },
    {
        name : "Aymen" ,
        age : 45 ,
        favoriteFoods : ["Couscous","Soupe","Tajine"]
    }
]

PersonModel.create(people).then (doc => { console.log(doc)}) .catch(err => { console.error(err)})*/

/*******************************************/

//Use model.find() to Search Your Database

//PersonModel.find({name : { $exists: true }}).then (doc => { console.log(doc)}) .catch(err => { console.error(err)})

/*******************************************/

//Use model.findOne() to Return a Single Matching Document from Your Database

//PersonModel.findOne({favoriteFoods : {$in : ["Pizza"]}}).then (doc => { console.log(doc)}) .catch(err => { console.error(err)})

/*******************************************/

//Use model.findById() to Search Your Database By _id

//PersonModel.findById("5eed557e92ef980b2c960539").then (doc => { console.log(doc)}) .catch(err => { console.error(err)})

/*******************************************/

//Perform Classic Updates by Running Find, Edit, then Save

// PersonModel.findById('5eed557e92ef980b2c96053c').then(doc=>{doc.favoriteFoods.push("Humburger");
// doc.save()}).catch(err => { console.error(err)})

/*******************************************/

//Perform New Updates on a Document Using model.findOneAndUpdate()

//PersonModel.findOneAndUpdate({name : "Sami"}, {age : 20}, {new:true}).then (doc => { console.log(doc)}) .catch(err => { console.error(err)})

/*******************************************/

//Delete One Document Using model.findByIdAndRemove

//PersonModel.findByIdAndRemove('5eed557e92ef980b2c96053b').then (doc => { console.log(doc)}) .catch(err => { console.error(err)})

/*******************************************/

//MongoDB and Mongoose - Delete Many Documents with model.remove()

//PersonModel.remove({name:"Mary"}).then (() => { console.log("delete all peoples having Mary name")}) .catch(err => { console.error(err)})

/*******************************************/

//Chain Search Query Helpers to Narrow Search Results

PersonModel.find({ favoriteFoods: { $in: ["Pizza"] } })
  .sort({ name: 1 })
  .select("-age")
  .limit(2)
  .exec()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });
