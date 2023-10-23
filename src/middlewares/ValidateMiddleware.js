module.exports ={

    validate: (req, res, next) => {
       console.log('this is middleware')
        next()
    },


}


// module.exports  = class UserController{
//     static home(req,res){
//         res.send('this is you home api');
//     }
// }