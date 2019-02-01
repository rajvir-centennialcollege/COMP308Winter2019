//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller
exports.render = function (req, res) {
    //make a reference to the session object
    var session = req.session;
    //store the username in session object
    session.username = req.body.username;
    console.log("username in session: " + session.username);
    res.render('thankyou', {
        title: 'Thankyou form'


    });
    //res.end('done');
    
    
};