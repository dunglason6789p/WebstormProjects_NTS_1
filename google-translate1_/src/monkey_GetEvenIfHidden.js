// ==UserScript==
// @name         GTranslate
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://translate.google.com/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

const $_ = window.jQuery;



const allWordsToTranslate = ["vô tình","có","đánh"];

(function() {
    'use strict';

    $_(document).ready(()=>{
        translateAllWords();
    })
})();

async function translateAllWords(){
    let waitTimeVeryLong = 2000;
    let waitTimeLong = 1500;
    let waitTimeMedium = 1000;
    let waitTimeShort = 600;
    let waitTimeVeryShort = 400;
    let waitTimeSuperShort = 200;
    let waitTimeHyperShort = 100;
    let firstTimeTranslate = true;
    const NEWLINE_CHAR = "\r\n";

    let startJob = -1;
    let endJob = -1;

    const choosePart = 1;
    switch (choosePart) {
        case 1: startJob=0;endJob=1750;break;
        case 2: startJob=1751;endJob=3500;break;
        case 3: startJob=3501;endJob=5250;break;
        case 4: startJob=5251;endJob=7000;break;
        case 5: startJob=7001;endJob=8750;break;
        case 6: startJob=8751;endJob=10500;break;
        case 7: startJob=10501;endJob=12250;break;
        case 8: startJob=12251;endJob=14000;break;
        case 9: startJob=14001;endJob=15750;break;
        case 10: startJob=15751;endJob=17500;break;
        case 11: startJob=17501;endJob=19250;break;
        case 12: startJob=19251;endJob=21000;break;
        case 13: startJob=21001;endJob=22750;break;
        case 14: startJob=22751;endJob=24500;break;
        case 15: startJob=24501;endJob=26250;break;
        case 16: startJob=26251;endJob=28000;break;
        default: alert(choosePart);
    }

    let prevTranEng = "";
    for (let wordCount = 0; wordCount <= 0; wordCount++) {
        const word = allWordsToTranslate[wordCount];
        let dataToWrite = word + NEWLINE_CHAR + "#####" + NEWLINE_CHAR;
        $_('textarea#source').text(word);

        //await sleep(waitTimeVeryLong);



        //const $tranText = $_('span.tlid-translation.translation > span'); //.first().get(0); //.click();
        /*while($_('span.tlid-translation.translation > span').length === 0) {
            await sleep(waitTimeShort);
        }*/

        await sleep(waitTimeSuperShort);
        let loopCount = 0;
        while(true){
            try{
                const xxx = $_('span.tlid-translation.translation > span');
                if(xxx.length > 0){
                    const text = xxx.text();
                    if(text.length > 0){
                        if(prevTranEng !== text || loopCount > 5000){
                            break;
                        }
                    }
                }
            }catch(e){}
            await sleep(waitTimeHyperShort);
        }

        // const expandButtons = document.getElementsByClassName("cd-expand-button");
        // if(expandButtons.length > 0){//click if button exists.
        //     expandButtons[0].click();
        // }

        //await sleep(waitTimeHyperShort);

        $_('span.tlid-translation.translation > span').first().get(0).click();

        await sleep(waitTimeShort+waitTimeSuperShort);

        const last_goog_menu = $_('div.goog-menu.goog-menu-vertical.alt-menu').last();
        const $goog_menuitem = $_(last_goog_menu).find('.goog-menuitem > .goog-menuitem-content');
        $goog_menuitem.each((index,item)=>{
            const optionTran = $_(item).text();
            dataToWrite += optionTran + NEWLINE_CHAR;
            //console.log();
        });

        //console.log('-----------------------')
        dataToWrite += "------------------------" + NEWLINE_CHAR;
        //await sleep(waitTimeMedium);

        //const $round_trip_popup = $_('.round-trip-popup');
        let round_trip_popup__count = 1;
        $_($_('.round-trip-popup').get().reverse()).each((index, item)=>{
            if(round_trip_popup__count <= 5){
                const tempText = index+":"+$_(item).find('.goog-menu.round-trip-content').text();
                dataToWrite += tempText + NEWLINE_CHAR;
                //console.log();
            }
            round_trip_popup__count++;
        });

        //console.log('==========================================')
        dataToWrite += '==========================================' + NEWLINE_CHAR;
        //await sleep(waitTimeMedium);




        const $part_banDicCua = $_('.gt-cd.gt-cd-mbd.gt-cd-baf > .gt-cd-t > .gt-cd-tl > div > span');
        if($part_banDicCua.length > 0){//neu co phan "Ban dich cua".
            dataToWrite += "!BAN-DICH-CUA:\t" + $part_banDicCua.first().text() + NEWLINE_CHAR;
        }
        /*const $table = $_('table.gt-baf-table > tbody');
        if($table.length > 0){
            $table.first().find('tr').each((index,item)=>{
                dataToWrite += $_(item).innerText + NEWLINE_CHAR + "^^^^^" + NEWLINE_CHAR;
            })
        }*/
        //const $table = $_('table.gt-baf-table > tbody > tr');
        $_('table.gt-baf-table > tbody > tr').each((index, tr)=>{
            //dataToWrite += item.innerText + NEWLINE_CHAR + "^^^^^^^^^^" + NEWLINE_CHAR;
            const $eng = $_(tr).find('.gt-baf-word-clickable');
            if($eng.length > 0){
                dataToWrite += $eng.first().text() + "\t\t" + $_(tr).find('.gt-baf-translations').text() + NEWLINE_CHAR;
                /*$_(tr).find('.gt-baf-back').each((index,item)=>{
                    dataToWrite += $_(item).text() + ";"
                });*/
                //dataToWrite += NEWLINE_CHAR;
            }else{
                dataToWrite += "#" + $_(tr).find('.gt-cd-pos').text() + NEWLINE_CHAR;
            }
        });

        console.log(dataToWrite);
        //console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');

        await sleep(waitTimeHyperShort);
        //downloadNow(dataToWrite,choosePart+"-"+word);
        await sleep(waitTimeVeryShort);


    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function downloadNow(data, filename) {
    const file = new Blob([data], {type: 'text'});
    const a = document.createElement("a");
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename+'.txt';
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}