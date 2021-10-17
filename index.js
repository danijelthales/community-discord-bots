require("dotenv").config()
const Discord = require("discord.js")


const https = require('follow-redirects').https;
const redis = require("redis");
let redisClient = null;

var fs = require('fs');

const clientTokenHolders = new Discord.Client();
clientTokenHolders.login(process.env.BOT_TOKEN_HOLDERS_COUNT);


const clientNecDao = new Discord.Client();
clientNecDao.login(process.env.BOT_TOKEN_NEC_DAO);

const clientBoosted = new Discord.Client();
clientBoosted.login(process.env.BOT_TOKEN_BOOSTED);

const clientDeversify = new Discord.Client();
clientDeversify.login(process.env.BOT_TOKEN_DEVERSIFY);

const clientSfi = new Discord.Client();
clientSfi.login(process.env.BOT_TOKEN_SFI);

const clientPickle = new Discord.Client();
clientPickle.login(process.env.BOT_TOKEN_PICKLE);

const clientCream = new Discord.Client();
clientCream.login(process.env.BOT_TOKEN_CREAM);

const clientCorn = new Discord.Client();
clientCorn.login(process.env.BOT_TOKEN_CORN);

const clientCover = new Discord.Client();
clientCover.login(process.env.BOT_TOKEN_COVER);

const clientBeehiveApy = new Discord.Client();
clientBeehiveApy.login(process.env.BOT_TOKEN_BEEHIVE_APY);

const clientBeehiveParticipants = new Discord.Client();
clientBeehiveParticipants.login(process.env.BOT_TOKEN_BEEHIVE_PARTICIPANTS);


const clientBac = new Discord.Client();
clientBac.login(process.env.BOT_TOKEN_BAC);

const clientBas = new Discord.Client();
clientBas.login(process.env.BOT_TOKEN_BAS);

const clientStrong = new Discord.Client();
clientStrong.login(process.env.BOT_TOKEN_STRONG);

let strongPrice = 17;
let strongMarketcap = 700000;


let creamPrice = 17;
let creamMarketcap = 700000;

let cornPrice = 17;
let cornMarketcap = 700000;

let picklePrice = 17;
let pickleMarketcap = 700000;

let coverPrice = 17;
let coverMarketcap = 700000;

let boostedPrice = 17;
let boostedMarketcap = 700000;

var sfiPrice = 361.02;
var sfiMarketcap = 11638814;

let bacPrice = 17;
let bacMarketcap = 700000;

let basPrice = 17;
let basMarketcap = 700000;

let necApy = 570;



setInterval(function () {

    clientBoosted.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("779759588538187808").setNickname("$" + boostedPrice);
            value.members.cache.get("779759588538187808").user.setActivity("marketcap=$" + getNumberLabel(boostedMarketcap), {type: 'PLAYING'});
        } catch (e) {
            console.log(e);
        }
    });

    clientSfi.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("781612897352024125").setNickname("$" + sfiPrice);
            value.members.cache.get("781612897352024125").user.setActivity("marketcap=$" + getNumberLabel(sfiMarketcap), {type: 'PLAYING'});
        } catch (e) {
            console.log(e);
        }
    });

    clientBas.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("785131451481849857").setNickname("$" + basPrice);
            value.members.cache.get("785131451481849857").user.setActivity("marketcap=$" + getNumberLabel(basMarketcap), {type: 'PLAYING'});
        } catch (e) {
            console.log(e);
        }
    });

    clientBac.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("785131333126324244").setNickname("$" + bacPrice);
            value.members.cache.get("785131333126324244").user.setActivity("marketcap=$" + getNumberLabel(bacMarketcap), {type: 'PLAYING'});
        } catch (e) {
            console.log(e);
        }
    });

    clientCorn.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("783117849211174933").setNickname("$" + cornPrice);
            value.members.cache.get("783117849211174933").user.setActivity("marketcap=$" + getNumberLabel(cornMarketcap), {type: 'PLAYING'});
        } catch (e) {
            console.log(e);
        }
    });

    clientCream.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("783117875878690846").setNickname("$" + creamPrice);
            value.members.cache.get("783117875878690846").user.setActivity("marketcap=$" + getNumberLabel(creamMarketcap), {type: 'PLAYING'});
        } catch (e) {
            console.log(e);
        }
    });


    clientStrong.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("788392623446163456").setNickname("$" + strongPrice);
            value.members.cache.get("788392623446163456").user.setActivity("marketcap=$" + getNumberLabel(strongMarketcap), {type: 'PLAYING'});
        } catch (e) {
            console.log(e);
        }
    });

    clientCover.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("783117934565392384").setNickname("$" + coverPrice);
            value.members.cache.get("783117934565392384").user.setActivity("marketcap=$" + getNumberLabel(coverMarketcap), {type: 'PLAYING'});
        } catch (e) {
            console.log(e);
        }
    });

    clientPickle.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("783117898641309707").setNickname("$" + picklePrice);
            value.members.cache.get("783117898641309707").user.setActivity("marketcap=$" + getNumberLabel(pickleMarketcap), {type: 'PLAYING'});
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

let necPrice = 0.17;
setInterval(function () {
    https.get('https://api.coingecko.com/api/v3/coins/nectar-token', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
                let result = JSON.parse(data);
                necPrice = result.market_data.current_price.usd;
                necPrice = Math.round(((necPrice * 1.0) + Number.EPSILON) * 1000) / 1000;
            } catch (e) {
                console.log(e);
            }

        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}, 60 * 1000 * 2);


setInterval(function () {
    https.get('https://api.coingecko.com/api/v3/coins/boosted-finance', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
                let result = JSON.parse(data);
                boostedPrice = result.market_data.current_price.usd;
                boostedPrice = Math.round(((boostedPrice * 1.0) + Number.EPSILON) * 1000) / 1000;
                boostedMarketcap = result.market_data.market_cap.usd;
            } catch (e) {
                console.log(e);
            }

        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}, 50 * 1000 * 1);

let sushiPrice = 3.14;
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

setInterval(function () {
    https.get('https://api.coingecko.com/api/v3/coins/cover-protocol', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
                let result = JSON.parse(data);
                coverPrice = result.market_data.current_price.usd;
                coverPrice = Math.round(((coverPrice * 1.0) + Number.EPSILON) * 1000) / 1000;
                coverMarketcap = result.market_data.market_cap.usd;
            } catch (e) {
                console.log(e);
            }

        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}, 50 * 1000 * 1);

setInterval(function () {
    https.get('https://api.coingecko.com/api/v3/coins/cornichon', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
                let result = JSON.parse(data);
                cornPrice = result.market_data.current_price.usd;
                cornPrice = Math.round(((cornPrice * 1.0) + Number.EPSILON) * 1000) / 1000;
                cornMarketcap = result.market_data.market_cap.usd;
            } catch (e) {
                console.log(e);
            }

        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}, 50 * 1000 * 1);

setInterval(function () {
    https.get('https://api.coingecko.com/api/v3/coins/cream-2', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
                let result = JSON.parse(data);
                creamPrice = result.market_data.current_price.usd;
                creamPrice = Math.round(((creamPrice * 1.0) + Number.EPSILON) * 1000) / 1000;
                creamMarketcap = result.market_data.market_cap.usd;
            } catch (e) {
                console.log(e);
            }

        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}, 50 * 1000 * 1);


setInterval(function () {
    https.get('https://api.coingecko.com/api/v3/coins/strong', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
                let result = JSON.parse(data);
                strongPrice = result.market_data.current_price.usd;
                strongPrice = Math.round(((strongPrice * 1.0) + Number.EPSILON) * 1000) / 1000;
                strongMarketcap = result.market_data.market_cap.usd;
            } catch (e) {
                console.log(e);
            }

        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}, 50 * 1000 * 1);

setInterval(function () {
    https.get('https://api.coingecko.com/api/v3/coins/pickle-finance', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
                let result = JSON.parse(data);
                picklePrice = result.market_data.current_price.usd;
                picklePrice = Math.round(((picklePrice * 1.0) + Number.EPSILON) * 1000) / 1000;
                pickleMarketcap = result.market_data.market_cap.usd;
            } catch (e) {
                console.log(e);
            }

        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}, 50 * 1000 * 1);

setInterval(function () {
    https.get('https://api.coingecko.com/api/v3/coins/saffron-finance', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
                let result = JSON.parse(data);
                sfiPrice = result.market_data.current_price.usd;
                sfiPrice = Math.round(((sfiPrice * 1.0) + Number.EPSILON) * 1000) / 1000;
                sfiMarketcap = result.market_data.market_cap.usd;
            } catch (e) {
                console.log(e);
            }

        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}, 60 * 1000 * 1);


setInterval(function () {
    https.get('https://api.coingecko.com/api/v3/coins/basis-cash', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
                let result = JSON.parse(data);
                bacPrice = result.market_data.current_price.usd;
                bacPrice = Math.round(((bacPrice * 1.0) + Number.EPSILON) * 1000) / 1000;
                bacMarketcap = result.market_data.market_cap.usd;
            } catch (e) {
                console.log(e);
            }

        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}, 60 * 1000 * 1);


setInterval(function () {
    https.get('https://api.coingecko.com/api/v3/coins/basis-share', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
                let result = JSON.parse(data);
                basPrice = result.market_data.current_price.usd;
                basPrice = Math.round(((basPrice * 1.0) + Number.EPSILON) * 1000) / 1000;
                basMarketcap = result.market_data.market_cap.usd;
            } catch (e) {
                console.log(e);
            }

        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}, 60 * 1000 * 1);


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// move the gas bot here
const clientgasPrice = new Discord.Client();
clientgasPrice.login(process.env.BOT_TOKEN_GAS);

setInterval(function () {
    clientgasPrice.guilds.cache.forEach(function (value, key) {
        try {
            if(fastGasPrice) {
                value.members.cache.get("745936096336019578").setNickname("Gas Price");
                value.members.cache.get("745936096336019578").user.setActivity("fast=" + fastGasPrice + " slow=" + lowGasPrice, {type: 'PLAYING'});
            }
        } catch (e) {
            console.log(e);
        }
    })
}, 10 * 1000);

let gasPrice = 20;
let fastGasPrice = 20;
let lowGasPrice = 20;
let instantGasPrice = 20;
setInterval(function () {
    try {
        https.get('https://api.etherscan.io/api?module=gastracker&action=gasoracle', (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                try {
                    let result = JSON.parse(data);
                    gasPrice = result.result.ProposeGasPrice
                    lowGasPrice = result.result.SafeGasPrice
                    fastGasPrice = result.result.FastGasPrice
                    instantGasPrice = result.result.FastGasPrice
                } catch (e) {
                    console.log(e);
                }
            });
        });
    }catch (e) {

    }

}, 5 * 1000);

setInterval(function () {
    https.get('https://api.deversifi.com/nectarPoolStats', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
                let result = JSON.parse(data);
                necApy = result.apy;
                necApy = necApy * 1.0;
                necApy = Math.round(((necApy * 1.0) + Number.EPSILON) * 10) / 10;
            } catch (e) {
                console.log(e);
            }
        });
    });

}, 30 * 1000);

const sushiData = require('@sushiswap/sushi-data');

const clientXSushi = new Discord.Client();
clientXSushi.login(process.env.BOT_TOKEN_XSUSHI);

let sushiDailyVolume = 0;
let sushiWeeklyVolume = 0;
let stakedSushiValue = 0;
let dailySushiApy = 0;
let weeklySushyApy = 0;

async function doXSusi() {
    sushiDailyVolume = 0;
    sushiWeeklyVolume = 0;
    stakedSushiValue = 0;
    dailySushiApy = 0;
    weeklySushyApy = 0;
    await sushiData.exchange.dayData(8).then(r => {
        for (var i = 0; i < 7; i++) {
            sushiWeeklyVolume += r[i + 1].volumeUSD;
        }
    })

    await sushiData.exchange.dayData(2).then(r => {
        sushiDailyVolume = r[1].volumeUSD;
    })


    await sushiData.bar.info().then(i => {
        xSushiSuply = i.totalSupply;
        xSushiRatio = i.ratio;
        stakedSushiValue = xSushiSuply * xSushiRatio * sushiPrice;
    })

    let dailyFees = sushiDailyVolume * 0.05 * 0.01;
    let weeklyFees = sushiWeeklyVolume * 0.05 * 0.01;
    let dailySushiApyRate = dailyFees / stakedSushiValue;
    dailySushiApy = Math.pow(1 + dailySushiApyRate, 365) - 1;
    dailySushiApy = dailySushiApy * 100;
    dailySushiApy = dailySushiApy.toFixed(2);
    let weeklySushiApyRate = weeklyFees / stakedSushiValue;
    weeklySushyApy = Math.pow(1 + weeklySushiApyRate, 52) - 1;
    weeklySushyApy = weeklySushyApy * 100;
    weeklySushyApy = weeklySushyApy.toFixed(2);
    //APY = (1 + Periodic Rate)Number of periods – 1
    clientXSushi.guilds.cache.forEach(function (value, key) {
        try {
            if (dailySushiApy > 0) {
                value.members.cache.get("791077082238681109").setNickname("volume 24h=$" + getNumberLabel(sushiDailyVolume) + " 7d=$" + getNumberLabel(sushiWeeklyVolume));
                value.members.cache.get("791077082238681109").user.setActivity("xSUSHI APY 24h=" + dailySushiApy + "% 7d=" + weeklySushyApy + '%', {type: 'PLAYING'});
            }
        } catch (e) {
            console.log(e);
        }
    });


}

setTimeout(doXSusi, 60 * 1000);
setInterval(doXSusi, 240 * 1000);


