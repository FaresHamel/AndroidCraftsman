const express = require('express');
const app = express();
const client = require('./router/client')



app.use('/readData', client);

app.use("/login", client);

app.use("/create", client);

app.use("/update", client);

app.use('/removeUser', client);



app.listen(8081, () => {

    console.log(`Server started on port` + 8081);
});