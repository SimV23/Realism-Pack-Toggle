// ==UserScript==
// @name GeoFS realism addon
// @namespace http://tampermonkey.net/
// @version 1
// @description An addon for GeoFS that adds new features and fixes realism issues
// @author NVB9
// @match http:///geofs.php
// @match https:///geofs.php
// @run-at document-end
// @grant none
// ==/UserScript==
let itv = setInterval(
function(){
try{
if(window.ui && window.flight){
main();
clearInterval(itv);}
}catch(err){}
}
,500);
function main() {
var realismScript = document.createElement('script'); realismScript.src="https://raw.githack.com/SimV23/Realism-Pack-Toggle/main/main.js";document.body.appendChild(realismScript);
};
