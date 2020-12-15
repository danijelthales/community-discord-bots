require("dotenv").config()
const Discord = require("discord.js")


const replaceString = require('replace-string');
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


const clientBac= new Discord.Client();
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
}, 60 * 1000 * 2);

let beehiveParticipants = 57;
setInterval(function () {
    try {
        https.get('https://api.bloxy.info/token/token_stat?token=0xb21e53d8bd2c81629dd916eeAd08d338e7fCC201&key=ACCVnTqQ9YRKK&format=structure', (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                try {
                    let result = JSON.parse(data);
                    beehiveParticipants = result[0].holders_count;
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
}, 60 * 1000 * 2);


setInterval(function () {

    clientTokenHolders.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("779508126843535381").setNickname("NEC holders=" + holdersCount);
            //value.members.cache.get("779508126843535381").user.setActivity("marketcap=$" + getNumberLabel(btcMarketCap), {type: 'PLAYING'});
        } catch (e) {
            console.log(e);
        }
    });


    clientNecDao.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("779720047769813013").setNickname("necDAO=" + daoHolders);
            value.members.cache.get("779720047769813013").user.setActivity("locked=$" + getNumberLabel(DAObalance) + " NEC=" + getNumberLabel(DAONecBalance), {type: 'PLAYING'});
        } catch (e) {
            console.log(e);
        }
    });


    clientBeehiveApy.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("784089122171519006").setNickname("APY=" + necApy + "%");
            //value.members.cache.get("784089122171519006").user.setActivity("locked=$" + getNumberLabel(DAObalance) + " NEC=" + getNumberLabel(DAONecBalance), {type: 'PLAYING'});
        } catch (e) {
            console.log(e);
        }
    });

    clientBeehiveParticipants.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("784089307044380732").setNickname("beehive=" + beehiveParticipants);
            //value.members.cache.get("784089307044380732").user.setActivity("locked=$" + getNumberLabel(DAObalance) + " NEC=" + getNumberLabel(DAONecBalance), {type: 'PLAYING'});
        } catch (e) {
            console.log(e);
        }
    });

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

    clientDeversify.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("779762860146032692").setNickname("TVL=$" + numberWithCommas(deversifyTVL));
        } catch (e) {
            console.log(e);
        }
    });

}, 60 * 1000);


var daoHolders = 130;

async function getDaoHolders() {
    try {
        console.log("Fetching Dao Holders");
        const browser = await puppeteer.launch({
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
            ],
        });
        const page = await browser.newPage();
        await page.setViewport({width: 1000, height: 926});
        await page.goto("https://alchemy.daostack.io/dao/0xe56b4d8d42b1c9ea7dda8a6950e3699755943de7/members/", {waitUntil: 'networkidle2'});
        await delay(15000);
        await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
        await delay(5000);
        await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
        await delay(5000);
        /** @type {string[]} */
        var prices = await page.evaluate(() => {
            var div = document.querySelectorAll('.A9766RuJrZ1KGQeSF-LoT');

            var prices = []
            div.forEach(element => {
                prices.push(element.textContent);
            });

            return prices
        })

        daoHolders = prices.length;
        browser.close()
    } catch (e) {
        console.log("Error happened on getting data from barnbridge.");
        console.log(e);
    }
}

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

setTimeout(getDaoHolders, 60 * 1000 * 60);
setInterval(getDaoHolders, 60 * 1000 * 60 * 5);

let DAObalance = 11000000;
let DAONecBalance = 66000000;
setInterval(function () {
    try {
        https.get('https://api.bloxy.info/address/balance?address=0xDa490e9acc7f7418293CFeA1FF2085c60d573626&chain=eth&key=ACCVnTqQ9YRKK&format=structure', (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                try {
                    let result = JSON.parse(data);
                    DAONecBalance = result[0].balance;
                    DAObalance = DAONecBalance * necPrice;
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
}, 60 * 1000 * 1);


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


let deversifyTVL = 3000000;
setInterval(function () {
    try {
        https.get('https://api.ethplorer.io/getAddressInfo/0x5d22045DAcEAB03B158031eCB7D9d06Fad24609b?apiKey=freekey', (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                try {
                    let result = JSON.parse(data);

                    let ethBalance = result.ETH.balance * result.ETH.price.rate;

                    let otherTokens = 0;
                    result.tokens.forEach(t => {
                        if (t.tokenInfo.price) {
                            let curValue = t.tokenInfo.price.rate * t.balance / Math.pow(10, t.tokenInfo.decimals);
                            otherTokens += curValue;
                        }
                    });

                    deversifyTVL = ethBalance + otherTokens;
                    deversifyTVL = Math.round(((deversifyTVL * 1.0) + Number.EPSILON) * 10) / 10;
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
}, 60 * 1000 * 2);


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// move the gas bot here
const clientgasPrice = new Discord.Client();
clientgasPrice.login(process.env.BOT_TOKEN_GAS);

setInterval(function () {
    clientgasPrice.guilds.cache.forEach(function (value, key) {
        try {
            value.members.cache.get("745936096336019578").setNickname(gasPrice + " gwei");
            value.members.cache.get("745936096336019578").user.setActivity("fast=" + fastGasPrice + " slow=" + lowGasPrice, {type: 'PLAYING'});
        } catch (e) {
            console.log(e);
        }
    })
}, 60 * 1000);

let gasPrice = 20;
let fastGasPrice = 20;
let lowGasPrice = 20;
let instantGasPrice = 20;
setInterval(function () {
    https.get('https://www.gasnow.org/api/v3/gas/price', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
                let result = JSON.parse(data);
                gasPrice = result.data.standard / 1000000000;
                fastGasPrice = result.data.fast / 1000000000;
                lowGasPrice = result.data.slow / 1000000000;
                instantGasPrice = result.data.rapid / 1000000000;
                gasPrice = Math.round(((gasPrice * 1.0) + Number.EPSILON) * 10) / 10;
                fastGasPrice = Math.round(((fastGasPrice * 1.0) + Number.EPSILON) * 10) / 10;
                lowGasPrice = Math.round(((lowGasPrice * 1.0) + Number.EPSILON) * 10) / 10;
                instantGasPrice = Math.round(((instantGasPrice * 1.0) + Number.EPSILON) * 10) / 10;
            } catch (e) {
                console.log(e);
            }
        });
    });

}, 30 * 1000);

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
