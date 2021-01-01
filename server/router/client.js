const express = require('express');
const router = express.Router();
const user = require('../controller/user')
const path = require('path');

router.use(express.json());

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

    // const firstname = req.query.username;
    // const lastname = req.query.lastname;
    // const age = req.query.age;
    // const city = req.query.city;

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const numberPhone = req.body.numberPhone;

    let arr;
    let result;

    try {

        arr = await user.createClient(firstname, lastname, email, password, numberPhone);
        console.log(arr);

        if (arr != null) {
            result = true;
            res.send({ result });
        } else {
            result = false;
            res.send({ result });
        }

    } catch (error) {

        console.log('That did not go well.' + arr);

    }
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

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    // console.log(firstname + "  " + lastname);
    console.log(req.body);
    let arr;
    let result;

    try {

        arr = await user.loginUser(firstname, lastname);

        if (arr === null) {

            result = false;

            // arr = null mean  the user not find in the DASTA BASE
            res.send({ result });

        } else {
            result = true;

            res.send({ result });
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