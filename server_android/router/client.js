const express = require('express');
const router = express.Router();
const user = require('../controller/user')
const path = require('path');

//GET LIST OF CONTACTS  ( READ TASK )
router.get('/ListFriends', async(req, res, next) => {

    let arr;
    try {

        arr = await user.readListFreind();
        console.log(arr);

    } catch (error) {

        console.log('That did not go well.');

    }

    res.send(arr);

});

// CREATE ROUTER
router.post('/createUser', async(req, res, next) => {

    const username = req.query.username;
    const lastname = req.query.lastname;
    const age = req.query.age;
    const city = req.query.city;
    let arr;

    try {

        arr = await user.createClient(username, lastname, age, city);
        console.log(arr);

    } catch (error) {

        console.log('That did not go well.' + arr);

    }

    res.send(arr);

});

//REMOVE  ROUTER
router.post('/delete', async(req, res, next) => {

    const username = req.query.username;
    const email = req.query.email;
    let arr;

    try {

        arr = await user.deleteUser(username, email);
        console.log(arr);

        if (arr === 1) {

            res.send("user is Deleted");

        } else {
            res.send("Ooops check out egain please");
        }

    } catch (error) {

        console.log('That did not go well.' + arr);

    }

});

// UPDATE ROUTER
router.post('/updateUser', async(req, res, next) => {

    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    const newfirstname = req.query.newfirstname;
    const newlastname = req.query.newlastname;
    let arr;

    try {

        arr = await user.updateUser(firstname, lastname, newfirstname, newlastname);

        console.log(arr);

        if (arr === 1) {

            res.send("user is Updated");

        } else {
            res.send("Ooops check out egain please");
        }

    } catch (error) {

        console.log('That did not go well.' + arr);

    }

});

// LOGIN ROUTER
router.post('/loginuser', async(req, res, next) => {

    const firstname = req.query.firstname;
    const lastname = req.query.lastname;

    let arr;

    try {

        arr = await user.loginUser(firstname, lastname);

        console.log(arr);

        if (arr === null) {

            // arr = null mean  the user not find in the DASTA BASE
            res.send("user not find");

        } else {
            res.send(arr);
        }

    } catch (error) {

        console.log('That did not go well.' + arr);

    }

});

//READ  ROUTER
router.post('/readDtauserInformation', async(req, res, next) => {

    res.send("Fares Gasba Hamel");

});



module.exports = router;