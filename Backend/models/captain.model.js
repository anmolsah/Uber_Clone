const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"firstname must be at least 3 characters long"]
        },
        lastname:{
            type:String,
            minlength:[3,"lastname must be at least 3 characters long"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid Email"],
        minlength:[5,"email must be at least 5 characters long"]
    },
    password:{
        type:String,
        required:true,
        minlength:[8,"password must be at least 8 characters long"],
        select:false
    },
    socketId:{
        type:String
    },

    status:{
        type:String,
        enum:["active","inactive"],
        default:"inactive"
    },
    
    vehicle:{
        color:{
            type:String,
            required:true, 
        },
        plate:{
            type:String,
            required:true
        },
        capacity:{
            type:Number,
            required:true
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto']
        }
    },

    location:{
        lat:{
            type:Number,
        },
        lon:{
            type:Number,
        }
    }
    
})


captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "24h",
    });
    return token;
  };

  captainSchema.methods.comparePassowrd = function (password) {
    return bcrypt.compare(password, this.password);
  };

  captainSchema.statics.hashPassword = function (password) {
    return bcrypt.hash(password, 10);
  };

const captainModel = mongoose.model("captain",captainSchema);

module.exports = captainModel;