const express = require('express');
const consign = require('consign');


module.exports = function(){
    const app = express();
    
    consign()
    .include('models')
    .then('controllers')
    .into(app);

    return app;
};