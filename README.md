This is a branch of the realism pack that allows for toggling features via a function. <br>
Default States:<br>
```js
var enabled = {
  "sounds": true,
  "rename": true,
  "hotfixes": true,
  "visuals": true,
  "physics": true,
  "chat": true,
  "practicalFX": true,
  "lag": true,
  "fbw": true,
  "utility": true
};
```
<br>

Can be changed via toggleFeature(feature), replacing "feature" with the parameter name. Eg. `toggleFeature("sounds");`
