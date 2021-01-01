const mongodb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/Craftsman";

let db;
let arr;

//My final code for CURD from MongoDb
async function connectDb() {

    // create client passrell
    const userMongoDb = new mongodb(url);

    //wait to connect with database serveur
    await userMongoDb.connect();
    console.log('connect with DataBase serveur');

    //create data base similar to data base server
    db = userMongoDb.db();
}

//Plyde CURD tasks with MongoDB

//Task Create
async function createClient(firstname, lastname, email, password, numberPhone) {

    await connectDb();

    const collection = db.collection('client');

    const resul = await collection.insertOne({

        id: numberPhone,
        name: { firstname: firstname, lastname: lastname },
        age: email,
        city: password

    });

    //insertedId if the user it is inert or not if it is inserted so return th ObjectId or DtaBase created Authomaticly
    return resul.insertedId;
}

//Task Update
async function updateUser(firstname, lastname, newfirstname, newlastname) {
    await connectDb();
    const collection = db.collection('client');

    //UPDATE WITH ID USER OR EMAIL
    //db.client.updateOne({id:1234},{$set: {name:{firstname:"ayoubHamel"}, age:22, city:"skikda"}})

    //UPDATE WITH USER NAME
    //const result = 
    // await collection.updateOne(
    //{ name: { firstname: firstname, lastname: lastname } },
    // { $set: { name: { firstname: newlastname }, age: 22, city: "constantin" } })

    const result = await collection.updateOne({ name: { firstname: firstname, lastname: lastname } }, { $set: { name: { firstname: newfirstname, lastname: lastname } } })

    const numberOfdelet = result.matchedCount;
    //matched acount if the count existe or not and the modification it is run or not

    return numberOfdelet;
}

// Task Delete
async function deleteUser(username, email) {

    await connectDb();
    const collection = db.collection('client');

    const result = await collection.deleteOne({ age: username, city: email });

    const numberOfdelet = result.deletedCount;

    //number of deletCount 0 or 1

    return numberOfdelet;

}

//Task Read read a list of friends
async function readListFreind() {

    // wite to connect with data bases 

    await connectDb();

    const collection = db.collection('client');

    arr = collection.find({}).toArray();

    return arr;

}

//Task Login a user
async function loginUser(firstname, lastname) {

    await connectDb();
    const collection = db.collection('client');

      //db.client.findOne({name:{firstname:"ayoubHamel"}})

    const resul = await collection.findOne({ name: { firstname: firstname, lastname: lastname } });

    // the result equals null or json file

    return resul;
}

module.exports.createClient = createClient;

module.exports.updateUser = updateUser;

module.exports.deleteUser = deleteUser;

module.exports.readListFreind = readListFreind;

module.exports.loginUser = loginUser;

// module.exports.Inscription = async() => {


// };
// module.exports.Login = async() => {


// };
// module.exports.modifierInformation = async() => {


// };
// module.exports.modifierInformation = async() => {


// };