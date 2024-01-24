
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/index', function (req, res) {
        res.render('index');
    });

    app.get('/products/csm', function (req, res) {
        res.render('csm');
    });

    app.get('/products/asm', function (req, res) {
        res.render('asm');
    });

    app.get('/products/apisec', function (req, res) {
        res.render('apisec');
    });

    app.get('/products/etm', function (req, res) {
        res.render('etm');
    });

    app.get('/products/masm', function (req, res) {
        res.render('masm');
    });

    app.get('/products/ps', function (req, res) {
        res.render('ps');
    });

    app.get('/products/smm', function (req, res) {
        res.render('smm');
    });


    app.get('/contact-us', function (req, res) {
        res.render('contact-us');
    });


    app.get('/services', function (req, res) {
        res.render('service');
    });

};




