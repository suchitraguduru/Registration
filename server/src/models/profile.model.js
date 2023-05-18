const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  email:{
    type:String,
    unique:true,
    required: true,
  },
  name:{
    type:String,
    required: true,
  },
  linkedin:{
    type:String,
    required: true,
  },
  city:{
    type:String,
    required: true,
  }, 
  state:{
    type:String,
    required: true,
  }, 
  country:{
    type:String,
    required: true,
  }, 
  pin:{
    type:Number,
    required: true,
  },
  phone:{
    type:String,
    required: true,
  }
}
)
const Profile = mongoose.model('profile', profileSchema);

module.exports = Profile;
