/**

 routes.js

 Route setup

*/

// Include router.js exports to get the router
var router_exports = require('./router.js');
var router = router_exports.router;

// Include status
var Status = require('../models/status');

// -----------------------
// Set up routes
// -----------------------

// Root route /
router.get('/', function (req, res) {
    'use strict';

    res.json({message: 'Index route'});
});


// Routes for /status/:train
router.route('/status/:train')

    // Retrieve status for train :train (accessed at GET http://localhost:8080/api/status/:train)
    .get(function (req, res) {
        'use strict';
        Status.findByTrain(req.params.train, function (err, status) {
            if (err) {
                res.send(err);
            }
            res.json(status);
        });
    });