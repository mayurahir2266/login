var mongoose = require('mongoose')

// schema

var registerSchema = new mongoose.Schema({
     name: {
          type: String,
     },
     email: {
          type: String,
     },
     password:{
          type: String
     }
})

module.exports = mongoose.model('resterSchema', registerSchema)