javascript: (() => {
lagReductionInterval = setInterval(function(){geofs.savePreferencesPanel();geofs.api.renderingSettings.degradedCollisions = true;geofs.api.renderingSettings.lowResRunways = true;if (geofs.preferences.graphics.advanced.fxaa = false) {flight.recorder.clear()};}, 100);function gBlackout() {if (geofs.animation.values.accZ >= 90) {ui.showCrashNotification();geofs.camera.animations.orbitHorizontal.active = !1}else{ui.hideCrashNotification()}};blackoutInt = setInterval(function(){gBlackout();},10);function fixSpin() {if (geofs.aircraft.instance.id == 2948|| geofs.aircraft.instance.id == 2581) {var pitch = geofs.animation.values.atilt;setTimeout(() => {if ((geofs.animation.values.atilt + 50 < pitch) || (geofs.animation.values.atilt - 50 > pitch)) {geofs.aircraft.instance.definition.minimumSpeed = 600;console.log("Spin detected");geofs.flyToCamera();console.log("Spin fixed");setTimeout(() => {geofs.aircraft.instance.definition.minimumSpeed = 250}, 5000)}}, 500)};if (geofs.aircraft.instance.id == 2808 || geofs.aircraft.instance.id == 3460) {var pitch = geofs.animation.values.atilt;setTimeout(() => {if ((geofs.animation.values.atilt + 50 < pitch) || (geofs.animation.values.atilt - 50 > pitch)) {geofs.aircraft.instance.definition.minimumSpeed = 200;console.log("Spin detected");geofs.flyToCamera();console.log("Spin fixed");setTimeout(() => {geofs.aircraft.instance.definition.minimumSpeed = 200}, 5000)}}, 500)};if (geofs.aircraft.instance.id == 2988) {var pitch = geofs.animation.values.atilt;setTimeout(() => {if ((geofs.animation.values.atilt + 50 < pitch) || (geofs.animation.values.atilt - 50 > pitch)) {geofs.aircraft.instance.definition.minimumSpeed = 1000;console.log("Spin detected");geofs.flyToCamera();console.log("Spin fixed");setTimeout(() => {geofs.aircraft.instance.definition.minimumSpeed = 250}, 5000)}}, 500)};};fixyFixy = setInterval(function(){fixSpin()}, 1000);geofs.aircraftList['1000'].dir = '|models|aircraft|generics|c182|';
var aircraftChecked = new Boolean(0);var script2 = document.createElement('script'); script2.src="https://cdn.jsdelivr.net/gh/NVB9ALT/GeoFS-Aircraft-Changes@main/Aircraft-fixesE.js";document.body.appendChild(script2);script2.onload = function(){realismify()};
function showTheStars() {if (geofs.aircraft.instance.altitude >= 80000 || geofs.isNight == 1) {geofs.api.viewer.scene.skyBox.show = 1}else {geofs.api.viewer.scene.skyBox.show = 0}};starsInterval = setInterval(function(){showTheStars()}, 1000);function runBladeCollisions() {if (geofs.animation.values.aroll > 70 || geofs.animation.values.aroll < -70) {if (geofs.animation.values.haglFeet <= 5 && geofs.preferences.crashDetection == 1) {if (geofs.aircraft.instance.id == 9 || geofs.aircraft.instance.id == 52 || geofs.aircraft.instance.id == 2840 || geofs.aircraft.instance.id == 4090) {geofs.aircraft.instance.crash();}}}};bladeCollisionInterval = setInterval(function(){runBladeCollisions()}, 1000);ui.notification.show("To turn off aileron-rudder linking, turn on Stunt Mode. You can do this in Options -> Graphics.");geofs.tiller = {};geofs.tiller.isEnabled = false;geofs.tiller.tillerUpdate = function() {if (geofs.tiller.isEnabled == true) {geofs.tiller.isEnabled = false;toggle.setAttribute("class", "mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded");} else {geofs.tiller.isEnabled = true;toggle.setAttribute("class", "mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked");}};let elementSel = document.getElementsByClassName('geofs-preference-list')[0].getElementsByClassName('geofs-advanced')[0].getElementsByClassName('geofs-stopMousePropagation')[0];let toggle = document.createElement("label");toggle.setAttribute("class", "mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded");toggle.setAttribute("for", "tiller");toggle.setAttribute("id", "tiller");toggle.setAttribute("tabindex", "0");toggle.setAttribute("dataUpgraded", ",MaterialSwitch,MaterialRipple");toggle.innerHTML = '<input type="checkbox" id="airports" class="mdl-switch__input" data-gespref="geofs.tiller.isEnabled"><span class="mdl-switch__label">Stunt Mode</span>';elementSel.appendChild(toggle);toggle.addEventListener("click", geofs.tiller.tillerUpdate);function runDynamicTiller() {if (geofs.tiller.isEnabled == false){if (geofs.animation.values.haglFeet <= 25) {controls.mixYawRoll = 0;controls.mixYawRollQuantity = 2;} else {controls.mixYawRoll = 1;controls.mixYawRollQuantity = 0.4;}} else {controls.mixYawRoll = 0;controls.mixYawRollQuantity = 2;};};tillerInterval = setInterval(function(){runDynamicTiller()},1000);function runTurbAccel() {if (geofs.aircraft.instance.definition.maxRPM == 10000) {if (geofs.animation.values.rpm < 5999) {geofs.aircraft.instance.definition.engineInertia = 0.2};if (geofs.animation.values.rpm >= 6000 && geofs.animation.values.rpm < 6999) {geofs.aircraft.instance.definition.engineInertia = 0.5};if (geofs.animation.values.rpm >= 7000) {geofs.aircraft.instance.definition.engineInertia = 1}}};turbAccelInt = setInterval(function(){runTurbAccel()},100);var scriptC = document.createElement('script'); scriptC.src="https://cdn.jsdelivr.net/gh/NVB9ALT/Weather-Mods@main/Advanced-2d-CloudsA.js";document.body.appendChild(scriptC);scriptC.onload = function(){fixCloudsDensity()};var scriptAS = document.createElement('script'); scriptAS.src="https://cdn.jsdelivr.net/gh/NVB9ALT/GeoFS-Autospoilers@main/autospoilersA.js";document.body.appendChild(scriptAS);scriptAS.onload = function(){autospoilers()};var scriptEJ = document.createElement('script'); scriptEJ.src="https://cdn.jsdelivr.net/gh/NVB9ALT/Fighter-jet-ejections@main/mainE.js";document.body.appendChild(scriptEJ);scriptEJ.onload = function(){runEjections()};var scriptAl = document.createElement('script'); scriptAl.src="https://cdn.jsdelivr.net/gh/NVB9ALT/Autoland@main/autoland.js";document.body.appendChild(scriptAl);scriptAl.onload = function(){justDoTheThing()};var scriptHMD = document.createElement('script'); scriptHMD.src="https://cdn.jsdelivr.net/gh/NVB9ALT/Helmet-Mounted-Displays@main/hmd.js";document.body.appendChild(scriptHMD);scriptHMD.onload = function(){runHMDs()};
})();
