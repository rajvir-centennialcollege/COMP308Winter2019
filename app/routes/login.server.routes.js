module.exports = function (app) {
    var login = require('../controllers/login.server.controller');
    var thankyou = require('../controllers/thankyou.server.controller');
    var feedback = require('../controllers/feedback.server.controller');
    app.get('/', login.render);
    app.post('/', function (req, res) {
        login.render(req, res);
    });
    app.get('/feedback', feedback.render);
    app.post('/feedback', function (req, res) {
        thankyou.render(req, res);
    });
    app.get('/thankyou', thankyou.render);
};
