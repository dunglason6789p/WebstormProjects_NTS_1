// ==UserScript==
// @name         GTranslate-test-MutationObserver
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://translate.google.com/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

const $ = window.jQuery;

const arrRoundTripPopup = [];
const arrGoogMenuVertical = [];

(function() {
    'use strict';

    $(document).ready(()=>{
        theShow();
    });

})();

async function theShow(){
    console.log('START THE SHOW');
    await waitForDone__resolve_popupMenu();
    await sleep(100);
    for(let item of arrRoundTripPopup){
        console.log(item);
    }
    console.log('---------------');
    for(let item of arrGoogMenuVertical){
        console.log(item);
    }
    console.log('END THE SHOW');
}

function waitForDone__resolve_popupMenu(){
    return new Promise(resolve => resolve_popupMenu(resolve));
}

function resolve_popupMenu(resolve) {
    setTimeout(resolve,25000);//After 10 secs, this function will resolve even if no result done.
    const targetNode = document.getElementsByTagName('body')[0];//.getElementById('some-id');
    const config = { attributes: false, childList: true, subtree: false };
    const observerBODY = new MutationObserver((mutationsList, observer)=>{
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                for(let node of mutation.addedNodes){
                    //console.log(node);
                    const nodeClassName = node.className;
                    //console.log(nodeClassName);
                    if(nodeClassName.includes('round-trip-popup')){
                        const wantedNode = node.getElementsByClassName('round-trip-content')[0];
                        //console.log(wantedNode);
                        if(wantedNode != null) {
                            observerRoundTripPopup.observe(wantedNode, config);
                        }
                    }else if(nodeClassName.includes('goog-menu-vertical')){
                        const wantedNodeList = node.getElementsByClassName('goog-menuitem-content');
                        /*console.log(wantedNode);
                        if(wantedNode != null) {
                            observerRoundTripPopup.observe(wantedNode, config);
                        }*/
                        for(let wantedNode of wantedNodeList){
                            //console.log(wantedNode);
                            if(wantedNode != null) {
                                observerGoogMenuVertical.observe(wantedNode, config);
                            }
                        }
                    }
                }
            }
            else if (mutation.type === 'attributes') {
                console.log('The ' + mutation.attributeName + ' attribute was modified.');
            }
        }
    });
    const observerRoundTripPopup = new MutationObserver((mutationsList, observer)=>{
        //console.log('observerRoundTripPopup: mutationsList.length = '+mutationsList.length);
        /*for(let mutation of mutationsList) {
            //arrRoundTripPopup.push(mutation.addedNodes);
            for (let i = 0; i < mutation.addedNodes.length; i++) {
                console.log("RoundTripPopup: "+i+":"+mutation.addedNodes[i])
            }
            /!*if (mutation.type === 'childList') {
                for(let node of mutation.addedNodes){
                    console.log(node);
                    console.log(node.className);
                    console.log("textt:"+$(node).text());
                }
                //console.log('A child node has been added or removed.');
            }
            else if (mutation.type === 'attributes') {
                console.log('The ' + mutation.attributeName + ' attribute was modified.');
            }*!/
        }*/
        for (let i = 0; i < mutationsList.length; i++) {
            const node = mutationsList[i].addedNodes[0];
            const text = $(node).text();
            let allIsDots = true;
            if(text !== '...'){
                //console.log('observerRoundTripPopup: '+i+':'+text);
                arrRoundTripPopup.push('observerRoundTripPopup: '+i+':'+text);
                allIsDots = false;
            }
            if(!allIsDots){
                observerBODY.disconnect();
                observerRoundTripPopup.disconnect();
                observerGoogMenuVertical.disconnect();
                resolve();
            }
        }
    });
    const observerGoogMenuVertical = new MutationObserver((mutationsList, observer)=>{
        //console.log('observerGoogMenuVertical: mutationsList.length = '+mutationsList.length);
        /*for(let mutation of mutationsList) {
            //arrGoogMenuVertical.push(mutation.addedNodes);
            for (let i = 0; i < mutation.addedNodes.length; i++) {
                console.log("GoogMenuVertical: "+i+":"+mutation.addedNodes[i])
            }
            /!*if (mutation.type === 'childList') {
                for(let node of mutation.addedNodes){
                    console.log(node);
                    console.log(node.className);
                    console.log("textt:"+$(node).text());
                }
                //console.log('A child node has been added or removed.');
            }
            else if (mutation.type === 'attributes') {
                console.log('The ' + mutation.attributeName + ' attribute was modified.');
            }*!/
        }*/
        for (let i = 0; i < mutationsList.length; i++) {
            const node = mutationsList[i].addedNodes[0];
            const text = $(node).text();
            if(text !== '...'){
                //console.log('observerGoogMenuVertical: '+i+':'+text);
                arrGoogMenuVertical.push('observerGoogMenuVertical: '+i+':'+text);
            }
        }
    });
    observerBODY.observe(targetNode, config);
}
