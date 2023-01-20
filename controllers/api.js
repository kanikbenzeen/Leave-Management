const User  = require("../model/user")
const mongoose  = require("mongoose")



const connectDB = () =>{
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://kanika:kanik@ac-iw0u7pq-shard-00-00.5g4cwtw.mongodb.net:27017,ac-iw0u7pq-shard-00-01.5g4cwtw.mongodb.net:27017,ac-iw0u7pq-shard-00-02.5g4cwtw.mongodb.net:27017/?ssl=true&replicaSet=atlas-gbjlx4-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(() => {
        console.log("connection successful");
    }).catch((err) =>{
        console.log(err);
    })
}


async function api(req, res){
    sick = req.body.sick
    paid = req.body.paid
    casual = req.body.casual
      connectDB()
      const  user  = await User.create({sick_leaves:sick,paid_leaves:paid,casual_leaves:casual });
      await user.save()
  console.log( req.body)

    console.log("data send successfully");``
    
}

module.exports = {
    api
}