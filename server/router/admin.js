const express = require('express');
const router = express.Router();


router.get('/listAllClient', async(req, res, next) => {

    res.send("Fares Gasba Hamel");

});

router.get('/ListCraftsman', async(req, res, next) => {

    res.send("Fares Gasba Hamel");

});

module.exports = router;