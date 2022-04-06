	var geoip = require('geoip-lite');
	var readline = require('readline');
	const IPData = require('ipdata').default;
	const ipdata = new IPData("<Token Here>");
	var realIp = 0;
	var ipJson = '';
	var rl = readline.createInterface(
		process.stdin, process.stdout
	);
	rl.question("IP: ", (ip) =>{
		realIp = ip
			var geo = geoip.lookup(realIp)
		ipdata.lookup(ip)
			.then(function(info){

	console.log("  ▄████ ▓█████  ▒█████    ██████  ")
	console.log(" ██▒ ▀█▒▓█   ▀ ▒██▒  ██▒▒██    ▒  ")
	console.log("▒██░▄▄▄░▒███   ▒██░  ██▒░ ▓██▄    ")
	console.log("░▓█  ██▓▒▓█  ▄ ▒██   ██░  ▒   ██▒ ")
	console.log("░▒▓███▀▒░▒████▒░ ████▓▒░▒██████▒▒ ")
	console.log(" ░▒   ▒ ░░ ▒░ ░░ ▒░▒░▒░ ▒ ▒▓▒ ▒ ░ ")
	console.log("  ░   ░  ░ ░  ░  ░ ▒ ▒░ ░ ░▒  ░ ░ ")
	console.log("░ ░   ░    ░   ░ ░ ░ ▒  ░  ░  ░   ")
	console.log("      ░    ░  ░    ░ ░        ░   ")
	console.log("Geo-Lite: ");
	console.log(geo)

	console.log("------------------------------------");
	console.log("IPData: ")
	console.log(info)
	console.log("  ██▓     ▒█████   ▄████▄   ▄▄▄     ▄▄▄█████▓ ██▓ ▒█████   ███▄    █  ")
	console.log(" ▓██▒    ▒██▒  ██▒▒██▀ ▀█  ▒████▄   ▓  ██▒ ▓▒▓██▒▒██▒  ██▒ ██ ▀█   █  ")
	console.log(" ▒██░    ▒██░  ██▒▒▓█    ▄ ▒██  ▀█▄ ▒ ▓██░ ▒░▒██▒▒██░  ██▒▓██  ▀█ ██▒ ")
	console.log(" ▒██░    ▒██   ██░▒▓▓▄ ▄██▒░██▄▄▄▄██░ ▓██▓ ░ ░██░▒██   ██░▓██▒  ▐▌██▒ ")
	console.log(" ░██████▒░ ████▓▒░▒ ▓███▀ ░ ▓█   ▓██▒ ▒██▒ ░ ░██░░ ████▓▒░▒██░   ▓██░ ")
	console.log(" ░ ▒░▓  ░░ ▒░▒░▒░ ░ ░▒ ▒  ░ ▒▒   ▓▒█░ ▒ ░░   ░▓  ░ ▒░▒░▒░ ░ ▒░   ▒ ▒  ")
	console.log(" ░ ░ ▒  ░  ░ ▒ ▒░   ░  ▒     ▒   ▒▒ ░   ░     ▒ ░  ░ ▒ ▒░ ░ ░░   ░ ▒░ ")
	console.log("   ░ ░   ░ ░ ░ ▒  ░          ░   ▒    ░       ▒ ░░ ░ ░ ▒     ░   ░ ░  ")
	console.log("     ░  ░    ░ ░  ░ ░            ░  ░         ░      ░ ░           ░  ")
	console.log("                  ░                                                   ")
	console.log("Google Geos: https://maps.google.com/maps/search/?api=1&query="+geo.ll)
	console.log("IPData: https://maps.google.com/maps/search/?api=1&query="+info.latitude+","+info.longitude);
			});
	})
