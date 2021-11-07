// Created with Motiva Layama v1.5 LITE https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "recorrido final0000", a: "camara_1", p: new BABYLON.Vector3(1866.18, 262.061, 1010.12), l: new BABYLON.Vector3(1847.76, 271.958, 912.327)});
   layamaCameras.push({n: "recorrido final0001", a: "camara_002", p: new BABYLON.Vector3(1833.64, 258.837, 306.501), l: new BABYLON.Vector3(1755.84, 269.256, 244.547)});
   layamaCameras.push({n: "recorrido final0002", a: "camara_003", p: new BABYLON.Vector3(1911.33, 262.061, -132.21), l: new BABYLON.Vector3(1832.77, 277.153, -72.2091)});
   layamaCameras.push({n: "recorrido final0003", a: "camara_004", p: new BABYLON.Vector3(2175.44, 262.061, -160.182), l: new BABYLON.Vector3(2268.35, 270.916, -124.274)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

function getLayamaHotspots()
{
   var layamaHotspots = new BABYLON.SmartArray(0);
   layamaHotspots.push({n: "LayamaHotspot001", m: 1, u: "https://www.wilyportugal.com/", i: "./hotspots/InfoLogo.png", p: new BABYLON.Vector3(1738.77, 281.062, 7.14104), d: 310});
   return layamaHotspots;
}

