const request = require('request')
const dotenv = require('dotenv')
const express = require('express')
const app = express()

dotenv.config()

app.get('/:crypto', (req,res)=>{
    const crypto = req.params.crypto
    const url1 = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${crypto}`;
    const url2 = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${crypto}`;
    
    request.get({
        url: url2,
        json: true,
        headers:{
            "X-CMC_PRO_API_KEY": process.env.API_KEY,
        }
    }, (error, response, data)=>{
        if(error){
            return res.send({
                error: error
            })
        }
        
        res.send({
            data: data.data
        });
    });

    }) ;

app.listen(3000,()=>{
    console.log(`Server is running on port 3000`)
})