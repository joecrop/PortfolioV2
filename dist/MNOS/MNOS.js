var connections = new Array(0);
var averageBandwidth = 40;
var cost = 0;
var power = 0;
var speed = 0;
var bestconn = 0;
var bestConns = new Array(0);
var bestConns_last = new Array(0);

function updateConnections()
{
	for(var i=0; i<connections.length; i++)
	{
		var tmp_speed = document.getElementById("conn_speed_"+i).value;
		var tmp_cost = document.getElementById("conn_cost_"+i).value;
		var tmp_power = document.getElementById("conn_power_"+i).value;
		connections[i]['speed'] = parseInt(tmp_speed);
		connections[i]['cost'] = parseInt(tmp_cost);
		connections[i]['power'] = parseInt(tmp_power);
	}
}

function toggleButtons(name)
{
	if(name =='power')
	{
		if(power == 0)
		{
			$('select_power').src = "images/power_on.png";
			power = 1;
		}
		else
		{
			$('select_power').src = "images/power_off.png";
			power = 0;
		}
	}
	else if(name == 'speed')
	{
		if(speed == 0)
		{
			$('select_speed').src = "images/speed_on.png";
			speed = 1;
		}
		else
		{
			$('select_speed').src = "images/speed_off.png";
			speed = 0;
		}
	}
	else if(name == 'cost')
	{
		if(cost == 0)
		{
			$('select_cost').src = "images/cost_on.png";
			cost = 1;
		}
		else
		{
			$('select_cost').src = "images/cost_off.png";
			cost = 0;
		}
	}
}

function updateConnectivity()
{

	$('phoneContentInner').style.opacity = 0.7;
	$('phoneContentInner').style.filter = 'alpha(opacity=70)';
	
	$('connection_zigbee').style.opacity = 1;
	$('connection_zigbee').style.filter = 'alpha(opacity=100)';
	$('connection_wifi').style.opacity = 1;
	$('connection_wifi').style.filter = 'alpha(opacity=100)';
	$('connection_3g').style.opacity = 1;
	$('connection_3g').style.filter = 'alpha(opacity=100)';
	$('connection_bluetooth').style.opacity = 1;
	$('connection_bluetooth').style.filter = 'alpha(opacity=100)';
		
		
	for(var i=0; i<connections.length; i++)
	{
		connections[i]['connected'] = 0;
		for(var j=0; j<bestConns.length; j++)
		{
			if(bestConns[j] == i)
			{
				connections[i]['connected'] = 1;
			}
		}
		if(connections[i]['connected'] == 1)
		{
			document.getElementById("connection_"+connections[i]['name'].toLowerCase()).src="images/"+connections[i]['name'].toLowerCase()+"_on.png";
		}
		else
		{
			document.getElementById("connection_"+connections[i]['name'].toLowerCase()).src="images/"+connections[i]['name'].toLowerCase()+"_off.png";
		}
	}
	if(!bestConns_last.compare(bestConns) && bestConns.length > 0)
	{
		$('message_inner').innerHTML = "Connecting to " + connections[bestConns[0]]['name'];
		Effect.SlideDown('message');
		for(var i=0; i<bestConns.length; i++)
		{
			Effect.Pulsate("connection_"+connections[bestConns[i]]['name'].toLowerCase(), { pulses: 5, duration: 1.5 });
		}
		var effectTimer = setTimeout("Effect.SlideUp('message');", 3000);
	}
	bestConns_last = bestConns;
}

Array.prototype.compare = function(testArr) {
    if (this.length != testArr.length) return false;
    for (var i = 0; i < testArr.length; i++) {
        if (this[i].compare) { 
            if (!this[i].compare(testArr[i])) return false;
        }
        if (this[i] !== testArr[i]) return false;
    }
    return true;
}


function Draggable(element)
{
  var xDelta = 0, yDelta = 0;
  var xStart = 0, yStart = 0;
  var div = element.id;
  function enddrag(e)
  {
    e = e || window.event;
    document.onmouseup = null;
    document.onmousemove = null;
  }
  function drag(e)
  {
    e = e || window.event;
    xDelta = xStart - parseInt(e.clientX);
    yDelta = yStart - parseInt(e.clientY);
    xStart = parseInt(e.clientX);
    yStart = parseInt(e.clientY);
    updateUsage(xDelta, yDelta);
  }
  function move(e)
  {
    e = e || window.event;
    xStart = parseInt(e.clientX);
    yStart = parseInt(e.clientY);
    document.onmouseup = enddrag;
    document.onmousemove = drag;
    return false;
  }
  element.onmousedown = move;
}

function updateUsage(xDelta, yDelta)
{
	//if((parseInt(document.getElementById("bandwidthCover").style.left) <= 100 && xDelta < 0) || (parseInt(document.getElementById("bandwidthCover").style.left) >= 0 && xDelta > 0))
		document.getElementById("bandwidthCover").style.left = parseInt(document.getElementById("bandwidthCover").style.left) - xDelta + 'px';
	if(parseInt(document.getElementById("bandwidthCover").style.left) < 0)
		document.getElementById("bandwidthCover").style.left = "0px";
	else if(parseInt(document.getElementById("bandwidthCover").style.left) > 100)
		document.getElementById("bandwidthCover").style.left = "100px";
	document.getElementById("bandwidthText").innerHTML = "SPEED: " + parseInt(document.getElementById("bandwidthCover").style.left) + " Mbps";
	averageBandwidth = parseInt(document.getElementById("bandwidthCover").style.left);
}

function addRow(name, speed, cost, power, id)
{
	connections[id] = new Array();
	connections[id]['name'] = name;
	connections[id]['speed'] = speed;
	connections[id]['cost'] = cost;
	connections[id]['power'] = power;
	connections[id]['available'] = 1;
	connections[id]['connected'] = 0;
	
    var tbody = document.getElementById("connectionsTable").getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR");
    var td1 = document.createElement("TD");
    td1.innerHTML = name;
    var td2 = document.createElement("TD");
    td2.innerHTML = "<input type='text' value='"+speed+"' id='conn_speed_"+id+"' style='width:100%'>";
    var td3 = document.createElement("TD");
    td3.innerHTML = "<input type='text' value='"+cost+"' id='conn_cost_"+id+"' style='width:100%'>";
    var td4 = document.createElement("TD");
    td4.innerHTML = "<input type='text' value='"+power+"' id='conn_power_"+id+"' style='width:100%'>";
    var td5 = document.createElement("TD");
    td5.innerHTML = "<input type='checkbox' id='available_"+id+"' CHECKED onclick='activateConnection("+id+")'></input>";
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    tbody.appendChild(row);
}

function showMenu()
{
	if($('phoneContentInner').style.display == "none")
	{
		Effect.Appear('phoneContentInner');
	}
	else
	{
		Effect.SwitchOff('phoneContentInner');
	}
}

function activateConnection(id)
{
	if($("available_"+id).checked == true)
	{
		connections[id]['available'] = 1;
	}
	else
	{
		connections[id]['available'] = 0;
	}
}

window.onload = function()
{
	new Draggable(document.getElementById("bandwidthImage"));
	//addRow(tmp_name, tmp_speed, tmp_cost, tmp_power, id);
	addRow("Wifi", 22, 0, 780, 0);
	addRow("3G", 14, 1, 1000, 1);
	addRow("bluetooth", 2, 0, 81, 2);
	addRow("zigbee", 1, 0, 1, 3);
	var updateTimer = setTimeout("algorithm();", 1000);
}







function algorithm()
{
	var i = 1;
	var bestconn = 0;
	bestConns = new Array(0);
	if(connections.length) {
		if((cost && !power && !speed) || (cost == power && cost == speed)) {
			while(i < connections.length) {
				if(connections[i]['available']) {
					if(connections[i]['cost'] < connections[bestconn]['cost'])
						bestconn = i;
					else if(connections[i]['cost']  == connections[bestconn]['cost'] && connections[i]['speed'] > connections[bestconn]['speed'])
							bestconn = i;
					else if(connections[i]['cost']  == connections[bestconn]['cost'] && connections[i]['speed'] == connections[bestconn]['speed'] && connections[i]['power'] < connections[bestconn]['power'])
							bestconn = i;
					else if(!connections[bestconn]['available'])
						bestconn = i;
				}
				i++;
			}
			if(connections[bestconn]['available'])
				bestConns[0] = bestconn;
			
		} else if(cost && speed) {
			var bcnum = 0;
			var j = 0;
			while(j < connections.length) {
				if(connections[j]['available'] && !connections[j]['cost']) {
					bestConns[bcnum] = j;
					bcnum++;
				}
				else if(connections[j]['available'] && !bcnum && connections[j]['cost'] < connections[bestconn]['cost'])
					bestconn = j;
			j++;
			}
			if(!bcnum)
				bestConns[0] = bestconn;
		} else if(cost && power) {
			while(i < connections.length) {
				if(connections[i]['available']){
					if(connections[bestconn]['cost'] > connections[i]['cost'])
						bestconn = i;
					else if(connections[i]['cost'] == connections[bestconn]['cost'] && connections[i]['power'] < connections[bestconn]['power'])
						bestconn = i;
					else if(connections[i]['cost'] == connections[bestconn]['cost'] && connections[i]['power'] == connections[bestconn]['power'] && connections[i]['speed'] > connections[bestconn]['speed'])
						bestconn = i;
					if(!connections[bestconn]['available'])
						bestconn = i;
				}
				i++;
			}
			if(connections[bestconn]['available'])
				bestConns[0] = bestconn;
		} else if(speed && power) {
			var j = 0;
			var k = 1;
			var pwrc = new Array(0);
			var pwrctemp = new Array(0);
			var pwrinc = new Array(0);
			var powerrm = 0;
			var totalbw = 0;
			var lowpwr = 0;
			while(j < connections.length) {
				pwrctemp[j] = j;
				j++;
			}
			j = 0;
			while(j < connections.length) {
				k=0;
				lowpwr=pwrctemp[0];
				while(k < connections.length - j){
					if(connections[pwrctemp[k]]['power'] < connections[pwrctemp[lowpwr]]['power'])
						lowpwr = pwrctemp[k];
					k++;
				}
				pwrinc[j] = lowpwr;
				var l = 0;
				var m = 0;
				while(l < connections.length - j) {
					if(pwrctemp[l] != lowpwr) {
						pwrctemp[m] = pwrctemp[l];
						m++;
					}
					l++;
				}
				j++;
			}
			j = 0;
			k = 0;
			while(j < connections.length && totalbw < averageBandwidth) {
				if(connections[pwrinc[j]]['available']) {
					pwrc[k] = pwrinc[j];
					totalbw += connections[pwrc[k]]['speed'];
					k++;
				}
				j++;
			}
			j = 0;
			var tbwtemp = totalbw;
			if(totalbw == averageBandwidth){
				while(j < pwrc.length) {
					bestConns[j] = pwrc[j];
					j++;
				}
			} else if(totalbw > averageBandwidth) {
				j = 0;
				while(j < pwrc.length && (tbwtemp - averageBandwidth) >= connections[pwrc[j]]['speed']) {
					powerrm++;
					tbwtemp -= connections[pwrc[j]]['speed'];
					j++;
				}
				j = 0;
				if(!powerrm) {
					while(j < pwrc.length) {
						bestConns[j] = pwrc[j];
						j++;
					}
				} else {
					while(j < pwrc.length - powerrm) {
						bestConns[j] = pwrc[j+powerrm];
						j++;
					}
				}
			} else {
				j = 0;
				k = 0;
				m = 0;
				while(k < connections.length) {
					if(connections[k]['available']) {
						bestConns[m] = k;
						m++;
					}
					k++;
				}
			}
		 } else if(!cost && speed && !power) {
			var bcnum = 0;
			var j = 0;
			while(j < connections.length) {
				if(connections[j]['available']) {
					bestConns[bcnum] = j;
					bcnum++;
				}
				j++;
			}
		} else if(!cost && !speed && power) {
			while(i < connections.length) {
				if(connections[i]['available']) {
					if(connections[i]['power'] < connections[bestconn]['power'])
						bestconn = i;
					else if(connections[i]['power'] == connections[bestconn]['power'] && connections[i]['speed'] > connections[bestconn]['speed'])
						bestconn = i;
					else if(connections[i]['power'] == connections[bestconn]['power'] && connections[i]['speed'] == connections[bestconn]['speed'] && connections[i]['cost'] < connections[bestconn]['cost'])
						bestconn = i;
					else if(!connections[bestconn]['available'])
						bestconn = i;
				}
				i++;
			}	
			if(connections[bestconn]['available'])
				bestConns[0] = bestconn;
		}
	}

	updateConnectivity();
	var updateTimer = setTimeout("algorithm();", 1000);
}
