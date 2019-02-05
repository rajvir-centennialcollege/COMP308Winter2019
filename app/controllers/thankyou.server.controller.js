//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller

exports.render = function (req, res) {
    req.session.destroy(function (err) {
        res.render('thankyou', {});
    });
};