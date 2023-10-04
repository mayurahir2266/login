var register_model = require('../model/registermodel');
var login_model = false;

//register

exports.register_user = async (req,res) => {
     var data = await register_model.findOne({email: req.body.email})

     if (data){
          res.status(200).json({
               status: 'user already registered'
          })
     }
     else{

          var data = await register_model.create(req.body)

          res.status(200).json({
               status: 'success',
               data
          })
     }
}

//login

exports.login_user = async (req,res) => {

     if(login_model == false){

     

     var data = await register_model.find({email: req.body.email})

     
     
     if(data.length == 1){
          if(data[0].password == req.body.password){
               login_model = true;

               res.status(200).json({
                    status: 'success',
                    data
               })
          }
          else{
               res.status(200).json({
                    status: 'check your password'
               })
          }
     } 

     else{
          res.status(200).json({
               status: 'user not found'
          })
     }
}

else{
     res.status(200).json({
          status: 'user is already logged in'
     })
}

    
}

exports.logout_user = (req,res) => {
     login_model = false;

     res.status(200).json({
          status: 'logged out successfully'
     })
}
