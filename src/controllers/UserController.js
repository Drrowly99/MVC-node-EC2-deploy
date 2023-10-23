module.exports ={
    get: (req, res) => {
        res.send('hi');
    },

    me: (req, res) => {
        res.send('this is me');
    },

    you: (req, res) => {
        res.send('this is you api');
    },
}


module.exports  = class UserController{
    static home(req,res){
        res.send('this is you home api');
    }
}