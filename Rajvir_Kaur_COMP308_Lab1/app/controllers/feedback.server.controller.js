exports.render = function (req, res) {
    var session = req.session;
    if (session.username) {
        res.render('feedback', {
            title: "feedback-form",
            emailSession: session.username
        });
    }
    else 
    {
        res.render('login', {});
    }
};