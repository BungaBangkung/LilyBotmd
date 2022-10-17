//recode by @rifza.p.p 
const fetch = require('node-fetch')
const cheerio = require("cheerio");
const { JSDOM } = require('jsdom')
const fs = require('fs')
const ytdl = require('ytdl-core');

const yts = require('yt-search');

const ytM = require('node-youtube-music')

const moment = require('moment-timezone')
const time = moment().format('DD/MM HH:mm:ss')
const { color, bgcolor } = require('../function')
const axios = require('axios')

const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/

function INFOLOG(info) {
    return console.log('\x1b[1;34m~\x1b[1;37m>>', '[\x1b[1;33mINF\x1b[1;37m]', time, color(info))
}

function post(url, formdata) {
    INFOLOG(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "*/*",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
    })
}
function ytv(url) {
    return new Promise((resolve, reject) => {
        if (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url)
            url = 'https://youtu.be/' + ytId[1]
            post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                url,
                q_auto: 0,
                ajax: 1
            })
                .then(res => res.json())
                .then(res => {
                    INFOLOG('Scraping...')
                    document = (new JSDOM(res.result)).window.document
                    yaha = document.querySelectorAll('td')
                    filesize = yaha[yaha.length - 23].innerHTML
                    id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                    thumb = document.querySelector('img').src
                    title = document.querySelector('b').innerHTML

                    post('https://www.y2mate.com/mates/en60/convert', {
                        type: 'youtube',
                        _id: id[1],
                        v_id: ytId[1],
                        ajax: '1',
                        token: '',
                        ftype: 'mp4',
                        fquality: 360
                    })
                        .then(res => res.json())
                        .then(res => {
                            let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                            resolve({
                                dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                thumb,
                                title,
                                filesizeF: filesize,
                                filesize: KB
                            })
                        }).catch(reject)
                }).catch(reject)
        } else reject('URL INVALID')
    })
}

function yta(url) {
    return new Promise((resolve, reject) => {
        if (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url)
            url = 'https://youtu.be/' + ytId[1]
            post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                url,
                q_auto: 0,
                ajax: 1
            })
                .then(res => res.json())
                .then(res => {
                    let document = (new JSDOM(res.result)).window.document
                    let type = document.querySelectorAll('td')
                    let filesize = type[type.length - 10].innerHTML
                    let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                    let thumb = document.querySelector('img').src
                    let title = document.querySelector('b').innerHTML

                    post('https://www.y2mate.com/mates/en60/convert', {
                        type: 'youtube',
                        _id: id[1],
                        v_id: ytId[1],
                        ajax: '1',
                        token: '',
                        ftype: 'mp3',
                        fquality: 128
                    })
                        .then(res => res.json())
                        .then(res => {
                            let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                            resolve({
                                dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                thumb,
                                title,
                                filesizeF: filesize,
                                filesize: KB
                            })
                        }).catch(reject)
                }).catch(reject)
        } else reject('URL INVALID')
    })
}

//xfar-api
function youtube(link){
return new Promise((resolve, reject) => {
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
if (ytIdRegex.test(link)) {
let url =  ytIdRegex.exec(link)
let config = {
'url': 'https://www.youtube.be/' + url,
'q_auto': 0,
'ajax': 1
}
let headerss = {
"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
"Cookie": 'PHPSESSID=6jo2ggb63g5mjvgj45f612ogt7; _ga=GA1.2.405896420.1625200423; _gid=GA1.2.2135261581.1625200423; _PN_SBSCRBR_FALLBACK_DENIED=1625200785624; MarketGidStorage={"0":{},"C702514":{"page":5,"time":1625200846733}}'
}
axios('https://www.y2mate.com/mates/en68/analyze/ajax',{
method: 'POST',
data: new URLSearchParams(Object.entries(config)),
headers: headerss
})
.then(({ data }) => {
const $ = cheerio.load(data.result)
let img = $('div.thumbnail.cover > a > img').attr('src');
let title = $('div.thumbnail.cover > div > b').text();
let size = $('#mp4 > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
let size_mp3 = $('#audio > table > tbody > tr:nth-child(1) > td:nth-child(2)').text()
let id = /var k__id = "(.*?)"/.exec(data.result)[1]
let configs = {
type: 'youtube',
_id: id,
v_id: url[1],
ajax: '1',
token: '',
ftype: 'mp4',
fquality: 480
}
axios('https://www.y2mate.com/mates/en68/convert',{
method: 'POST',
data: new URLSearchParams(Object.entries(configs)),
headers: headerss 
})
.then(({data}) => {
const $ = cheerio.load(data.result)
let link = $('div > a').attr('href')
let configss = {
type: 'youtube',
_id: id,
v_id: url[1],
ajax: '1',
token: '',
ftype: 'mp3',
fquality: 128
}
axios('https://www.y2mate.com/mates/en68/convert',{
method: 'POST',
data: new URLSearchParams(Object.entries(configss)),
headers: headerss 
})
.then(({ data }) => {
const $ = cheerio.load(data.result)
let audio = $('div > a').attr('href')
resolve({
id: url[1],
title: title,
size: size,
quality: '480p',
thumb: img,
link: link,
size_mp3: size_mp3,
mp3: audio
})
})
})
})
.catch(reject)
}else reject('link invalid')
})
}


function searchResult(query) {
        return new Promise(async (resolve, reject) => {
            try {
                let ytMusic = await ytM.searchMusics(query || this.query);
                let result = []
                for (let i = 0; i < ytMusic.length; i++) {
                    result.push({
                        isYtMusic: true,
                        title: `${ytMusic[i].title} - ${ytMusic[i].artists.map(x => x.name).join(' ')}`,
                        artist: ytMusic[i].artists.map(x => x.name).join(' '),
                        id: ytMusic[i].youtubeId,
                        url: 'https://youtu.be/' + ytMusic[i].youtubeId,
                        album: ytMusic[i].album,
                        duration: {
                            seconds: ytMusic[i].duration.totalSeconds,
                            label: ytMusic[i].duration.label
                        },
                        image: ytMusic[i].thumbnailUrl.replace('w120-h120', 'w600-h600')
                    })                    
                }
                resolve(result)
            } catch (error) {
                reject(error)
            }
        })
    }
    
module.exports.searchResult = searchResult, 
module.exports.youtube = youtube

module.exports.yta = yta
module.exports.ytv = ytv