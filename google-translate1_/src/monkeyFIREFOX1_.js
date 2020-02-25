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

(function() {
    'use strict';
    var $ = window.jQuery;

    $(document).ready(()=>{
        $('textarea#source').text('vô tình');
        setTimeout(()=>{
            //$('.cd-expand-button').first().click();
            //$('.cd-expand-button').click();
            document.getElementsByClassName("cd-expand-button")[0].click();
            setTimeout(()=>{
                console.log($('table.gt-baf-table').text());
                //document.getElementsByClassName('tlid-translation')[0].click();
                $('span.tlid-translation.translation > span').first().text();
                $('span.tlid-translation.translation > span').first().get(0).click();
            },3000);
        },4000);
    })
})();