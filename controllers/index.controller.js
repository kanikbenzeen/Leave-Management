var express = require('express');
var app = express();
const bodyParser = require("body-parser"); 
app.use(bodyParser.json());


async function home (req, res) {
    var a = 29;
    let data = req.body
    console.log(data);
    res.render('form',{ total_leaves: a })
}

async function login (req, res) {
    res.render('login')
}

async function user (req, res) {
    res.render('login')
}

module.exports = {
    home,
    login,
    user
};