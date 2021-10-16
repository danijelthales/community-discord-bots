require("dotenv").config()
const Discord = require("discord.js")


const replaceString = require('replace-string');
const https = require('follow-redirects').https;

var fs = require('fs');

const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
let clientId = process.env.CLIENT_ID;
let coingeckoId = process.env.COINGECKO_ID;

let tokenPrice = 2.68;
let tokenMarketcap = 700000;


setInterval(function () {

    client.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get(clientId).setNickname("$" + tokenPrice);
            value.members.cache.get(clientId).user.setActivity("marketcap=$" + getNumberLabel(tokenMarketcap), {type: 'PLAYING'});
            console.log("Updating price at: " + tokenPrice)
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
                tokenPrice = result.market_data.current_price.usd;
                tokenPrice = Math.round(((tokenPrice * 1.0) + Number.EPSILON) * 1000) / 1000;
                tokenMarketcap = result.market_data.market_cap.usd;
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


