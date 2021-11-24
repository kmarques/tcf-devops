const express = require("express");
const UserRouter = require("./routes/user");

const app = express();

app.use(express.json());
app.use(UserRouter);

//const obj1 = { foo: "bar" };
//const obj2 = { foobar: "toto" };
//const obj2 = { foobar: "toto" };

// Restructuration de l'objet
//const obj3 = Object.assign({}, obj1, obj2);
//const obj4 = { ...obj1, ...obj2 };

// Destructuration de l'objet
//const { foobar, ...obj5 } = obj4;
//const foobar = obj4.foobar;
//const obj5 = Object.assign({},obj4);
//delete obj5.foobar;
module.exports = app;
