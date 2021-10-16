require("dotenv").config()
const Discord = require("discord.js")

const https = require('follow-redirects').https;

var fs = require('fs');

const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
let clientId = process.env.CLIENT_ID;
let coingeckoId = process.env.COINGECKO_ID;
let discriminator = process.env.DISCRIMINATOR;

let totalSupply = 2000000;
let circulatingsupply = 20000000;


setInterval(function () {

    client.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get(clientId).setNickname("Circulating Supply");
            value.members.cache.get(clientId).user.setActivity(numberWithCommas(circulatingsupply)+ " "+discriminator, {type: 'PLAYING'});
        } catch (e) {
            console.log(e);
        }
    });


}, 60 * 1000);


function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

function getNumberLabel(labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

        ? Math.round(Math.abs(Number(labelValue)) / 1.0e+9) + "B"
        // Six Zeroes for Millions
        : Math.abs(Number(labelValue)) >= 1.0e+6

            ? Math.round(Math.abs(Number(labelValue)) / 1.0e+6) + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(labelValue)) >= 1.0e+3

                ? Math.round(Math.abs(Number(labelValue)) / 1.0e+3) + "K"

                : Math.abs(Number(labelValue));

}

setInterval(function () {
    https.get('https://api.coingecko.com/api/v3/coins/' + coingeckoId, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
                let result = JSON.parse(data);
                circulatingsupply = result.market_data.circulating_supply*1.0;
                circulatingsupply = circulatingsupply.toFixed(0);
                console.log("circ supply is: "+circulatingsupply);
                totalSupply = result.market_data.max_supply*1.0;
                totalSupply = totalSupply.toFixed(0);
            } catch (e) {
                console.log(e);
            }

        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}, 60 * 1000);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


