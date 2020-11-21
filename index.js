require("dotenv").config()
const Discord = require("discord.js")
const client = new Discord.Client();

const replaceString = require('replace-string');
const https = require('https');
const redis = require("redis");
let redisClient = null;

var fs = require('fs');

client.login(process.env.BOT_TOKEN_HOLDERS_COUNT);
const puppeteer = require('puppeteer');

let holdersCount = 853;
setInterval(function () {
    try {
        https.get('https://api.bloxy.info/token/token_stat?token=0xcc80c051057b774cd75067dc48f8987c4eb97a5e&key=ACCVnTqQ9YRKK&format=structure', (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                try {
                    let result = JSON.parse(data);
                    holdersCount = result[0].holders_count;
                } catch (e) {
                    console.log(e);
                }
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    } catch (e) {
        console.log(e);
    }
}, 5 * 1000);


setInterval(function () {

    clientBtcPrice.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("779508126843535381").setNickname("NEC holders=" + holdersCount);
            //value.members.cache.get("779508126843535381").user.setActivity("marketcap=$" + getNumberLabel(btcMarketCap), {type: 'PLAYING'});
        } catch (e) {
            console.log(e);
        }
    });

}, 45 * 1000);
