$(document).ready(function() {
	var cache = new LastFMCache();
	var lastfm = new LastFM({
		apiKey: '83aca0e392f3a3521fe8f1377adc4b34',
		apiSecret: '4f3a578874a5c90044d285d9ab39ba6d'
	});

	var callback =function(data) {
		var weekchartcallback = function(data) {
			console.log(data);
		}

		data.weeklychartlist.chart.map(function(week) {
			return lastfm.user.getWeeklyTrackChart({
				user: "mmounirou",
				from: week.from,
				to: week.to
			},{
				success : weekchartcallback
			});
		});
	}

	lastfm.user.getWeeklyChartList({
		user: "mmounirou"
	}, {
		success: callback
	});
})