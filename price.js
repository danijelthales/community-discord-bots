require("dotenv").config()
const Discord = require("discord.js")


const replaceString = require('replace-string');
const https = require('follow-redirects').https;

var fs = require('fs');

const clientSushi = new Discord.Client();
clientSushi.login(process.env.BOT_TOKEN_SUSHI);

let sushiPrice = 2.68;
let sushiMarketcap = 700000;


setInterval(function () {

    clientSushi.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("789837740245254145").setNickname("$" + sushiPrice);
            value.members.cache.get("789837740245254145").user.setActivity("marketcap=$" + getNumberLabel(sushiMarketcap), {type: 'PLAYING'});
            console.log("Updating Sushi price at: " + sushiPrice)
        } catch (e) {
            console.log(e);
        }
    });


}, 30 * 1000);


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
    https.get('https://api.coingecko.com/api/v3/coins/sushi', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
                let result = JSON.parse(data);
                sushiPrice = result.market_data.current_price.usd;
                sushiPrice = Math.round(((sushiPrice * 1.0) + Number.EPSILON) * 1000) / 1000;
                sushiMarketcap = result.market_data.market_cap.usd;
            } catch (e) {
                console.log(e);
            }

        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}, 30 * 1000);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


