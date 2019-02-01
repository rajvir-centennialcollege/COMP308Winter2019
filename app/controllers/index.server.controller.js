//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller
exports.render = function (req, res) {
    //read the username from body property of request object
    var username = req.body.username;
    //make a reference to the session object
    var session = req.session;
    //store username in session object
    session.username = username;
    console.log("In index function - User name = " + session.username);
    //check if session object contains the username
    if (session.username) {
        res.render('feedback', {
            title: 'Feedback form'

          
        });
    }
    else {
        
        //display the ejs page
        res.render('index', {
            title: 'Login page'
        });
        
    }

    
    console.log("GET request - User name = " + session.username);

    
    
};