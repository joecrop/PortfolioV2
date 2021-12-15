// JavaScript Document

var cat_1 = 'cat_256.png';
var cat_10 = 'cat_256.png';
var cat_100 = 'cat_256.png';
var cat_1000 = 'cat_black_256.png';
var cat_large = 'cat_black_256.png';

  var unitTypes = [
      ["Length", 0],
      ["Temperature", 1], 
      ["Volume",2], 
      ["Energy", 3],
      ["Mass", 4],
      ["Speed", 5], 
      ["Currency", 6],
      ["Time", 7],
      ["Data", 8],
      ["Torque", 9],
      ["Other", 10]];

  var catTypes = [["Kitties", 1]];
      //,
      //["Cats", 0.5], 
      //["Panthers",0.01], 
      //["Lion Cubs", 0.2]];


var table = [];
table[0] = [                // Length
    ["meter", 1/0.4572], 
    ["foot", 1/1.5],
    ["fathom", 4/1],
    ["kilometer", 2170],
    ["mile", 2170*1.60934],
    ["furlongs", 2.17*201.168], 
    ["leagues", 2170*5.556],
    ["eiffel towers", 708 ],
    ["Burj Khalifas", 1814.66666 ],
    ["yards (suburban)",2],
    ["angstrom",1/(0.4572*Math.pow(10,10))],
    ["Lightyears", 2.17*9.4605284e15],
    ["Avg. Distance to Moon", 210232000],
    ["Rhinoceros Lengths", 12.5/1.5],
    ["Tyrannosaurus Rex", 26.6666666],
    ["Apatosaurus",50] ];

table[1] = [
    ["degrees Celcius", 1/38.6], 
    ["degrees Fahrenheit", 1/101.48], 
    ['degrees Kelvin', 1/311.75], 
    ["Dog-nights", 1/3]];

table[2] = [                // Volume
    ["US gallon", 1/1.32], 
    ["quart", 1/5.28],
    ["pint", 1/10.56],
    ["cup", 1/21.12],
    ["tablespoon", 1/337.92],
    ["teaspoon", 1/1013.76], 
    ["liter", 1/4.996],
    ["milliliter", 1/4996],
    ["ft^3", 1/0.1764], 
    ["m^3", 1/0.00378], 
    ["flagon (small)", 1/2.64],
    ["flagon (large)", 1/1.32]];

table[3] = [                // Energy  137 Kcal/100g
    ["calories", 1/6850000], 
    ["Calories", 1/6850], 
    ["joules", 1/28660400],
    ["cup of tea (100 C)", 0.01298657158431843240150172363261]];
    //["Red Bull", 7.2],
    //["hot pockets (boiling lava hot center)", 2e-1],
    //["hot pockets (ice cold center)", 2e1]];

table[4] = [                // Mass
    ["metric ton", 200], 
    ["gram", 1/5000], 
    ["pound", 1/11], 
    ["stone", 6.35029/5], 
    ["kilogram", 1/5],
    ["S*** Ton", 45],
    ["mole", 6.022e23],
    ["Black Rhinoceros (Male)", 1400/5],
    ["Black Rhinoceros (Female)", 800/5],
    ["White Rhinoceros (Male)", 2300/5],
    ["White Rhinoceros (Female)", 1700/5],
    ["Tyrannosaurus Rex",1360],
    ["Apatosaurus",7000]];

table[5] = [          // Speed
    ["meter per second",1/13.4], 
    ["miles per hour", 1/30],
    ["unladen african swallow", 11/13.4], 
    ["bullet train", 150/30], 
    ["US freight train", 49/30], 
    ["Boeing Dreamliner", 587.196/30]];
    
table[6] = [    // Currency
    ["USD", "priceless"],
    ["snuggles", 1e-9]];

table[7] = [    // Time 1 kitties = 14 years = 5113.39 days = 730.484 weeks = 122721 hours
    ["Seconds", 1/4.418e+8],
    ["Minutes", 1/7.363e+6],
    ["Hours", 1/122721],
    ["Days",1/5113.39],
    ["Weeks",1/730.484],
    ["Fortnights", 1/365.242199],
    ["Months",1/168],
    ["Years",1/14],
    ["Decade",1/1.4],
    ["Century", 1/0.14],
    ["Human Lifespan", 4.8],
    ["Rhinoceros Lifespan", 45/14]];
    
table[8] = [    // Data
	["GB", 1/2.7],
    ["Library of Congress", 3.703]];

table[9] = [    // Torque
	["lbf-ft", 1/16.5],
	["lbf-in", 1/198],
	["ozf-ft", 1/264],
	["ozf-in", 1/3168],
    ["N-m", 1/22.371],
    ["N-cm", 1/2237.1],
    ["N-mm", 1/22371],
    ["kN-m", 1/0.022370997],
    ["dyn-m", 1/2237099.7],
    ["dyn-cm", 1/223709970],
    ["dyn-mm", 1/2237099700],
    ["kgf-m", 1/2.281206834],
    ["kgf-cm", 1/228.120683414],
    ["kgf-mm", 1/2281.206834138],
    ["gf-m", 1/2281.206834138],
    ["gf-cm", 1/228120.68341381],
    ["gf-mm", 1/2281206.8341381]];
    
table[10] = [    // Other
	["F**ks Given", 1.7976931348623157E+10308]];

	var CONTENTS = 0;
	var VALUES = 1;
  
/*if (window.addEventListener) { // Mozilla, Netscape, Firefox
	window.addEventListener('load', WindowLoad, false);
}
else if (window.attachEvent)
{ // IE
	window.attachEvent('onload', WindowLoad);
}
*/
//function WindowLoad(event) {
	for(var i=0; i<unitTypes.length;i++)
	{
		var element = document.createElement("option");
		element.value = unitTypes[i][VALUES];
		element.text = unitTypes[i][CONTENTS];
		document.form1["unit_selector"].options[i]=element;
	}
	for(var i=0; i<catTypes.length;i++)
	{
		var element = document.createElement("option");
		element.value = catTypes[i][VALUES];
		element.text = catTypes[i][CONTENTS];
		document.form1["to_units"].options[i]=element;
	}

	UnitSelect();
//} 

function KittyCalc() {
	with (Math) {
		Amount = 0;
		if ((document.form1["from"].value !== null) && (document.form1["from"].value.length > 0)) {
			Amount = document.form1["from"].value;
		}
		Units = 1;
		for (i = 0; i < document.form1["from_units"].length; i++) {
			if (document.form1["from_units"].options[i].selected == true) {
				Units = document.form1["from_units"].options[i].value;
			}
		}
		for (i = 0; i < document.form1["to_units"].length; i++) {
			if (document.form1["to_units"].options[i].selected == true) {
				catFactor = document.form1["to_units"].options[i].value;
			}
		}

		var s1;
		if(isNaN(Units)){
			s1 = Units;
		}else{
			s1 = '' + (Amount * Units * catFactor);
		}
		// while (s1.length < 20) s1 = ' ' + s1;
		document.form1["to"].value = formatNumber(s1);
		
		CatIcons(s1);
	}
	return;
}

function formatNumber(num) {
	if(!isNaN(parseFloat(num)) && isFinite(num)) {
		var i = 0;
		while((num.toString().length > 16) && (i < 16)) {
			num = num.replace(/[0-9]e/,'e');
			i++;
		}
	}
	return num;
}

function UnitCalc() {
	with (Math) {
		Kitties = 0;
		if ((document.form1["to"].value != null) && (document.form1["to"].value.length > 0)) {
			Kitties = document.form1["to"].value;
		}
		Units = 1;
		for (i = 0; i < document.form1["from_units"].length; i++) {
			if (document.form1["from_units"].options[i].selected == true) {
				Units = document.form1["from_units"].options[i].value;
			}
		}
		for (i = 0; i < document.form1["to_units"].length; i++) {
			if (document.form1["to_units"].options[i].selected == true) {
				catFactor = document.form1["to_units"].options[i].value;
			}
		}

		var s1;
		if(isNaN(Units)){
			s1 = Units;
		}else{
			s1 = '' + (Kitties / Units) / catFactor;
		}
		// while (s1.length < 20) s1 = ' ' + s1;
		document.form1["from"].value = formatNumber(s1);
	}
	return;
}


function CatIcons(s1) {
	cell = document.getElementById("cat_icons");
	if ( cell.hasChildNodes() )
	{
		while ( cell.childNodes.length >= 1 )
		{
			cell.removeChild( cell.firstChild );       
		} 
	}
	if(s1 < 10000) {
		while(s1>0)
		{
			if(s1>1000)
			{
				var element = document.createElement("img");
				element.className = "cat_icon_1000";
				element.src = cat_1000;
				cell.appendChild(element);
				s1 = s1 - 1000;
			}

			else if(s1>100)
			{
				var element = document.createElement("img");
				element.className = "cat_icon_100";
				element.src = cat_100;
				cell.appendChild(element);
				s1 = s1 - 100;
			}
			else if(s1>10)
			{
				var element = document.createElement("img");
				element.className = "cat_icon_10";
				element.src = cat_10;
				cell.appendChild(element);
				s1 = s1 - 10;
			}
			else // s1>0
			{
				var element = document.createElement("img");
				element.className = "cat_icon";
				element.src = cat_1;
				cell.appendChild(element);
				s1 = s1 - 1;
			}
		}
	} else {
		var element = document.createElement("img");
		element.className = "cat_icon_large";
		element.src = cat_large;
		cell.appendChild(element);
	}
}


function UnitSelect() {
	if((document.form1["unit_selector"].value != null) && (document.form1["unit_selector"].value.length > 0)){
		var unitType = document.form1["unit_selector"].value;
		while(document.form1["from_units"].length > table[unitType].length){
			document.form1["from_units"].removeChild(document.form1["from_units"].lastChild);
		}
		for(var i=0; i< table[unitType].length; i++){
			var element = document.createElement("option");
			element.value = table[unitType][i][VALUES];
			element.text = table[unitType][i][CONTENTS];
			document.form1["from_units"].options[i]=element;
		}
	}
	KittyCalc();
}

function validateNumber(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

function SelectAll(id)
{
	document.getElementById(id).focus();
	document.getElementById(id).select();
}
