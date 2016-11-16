function caterpillar()
{
	var width  = 460;
	var height = 268;
	dataPath = 'https://kuochiacheng.github.io/D3-201611/';
	dataFile = 'table.csv';
	dataUrl = dataPath + dataFile;

d3.csv(dataUrl, function(data) {
	console.log(data);
	data.forEach(function(d) {
		console.log(d.Open);
		console.log(d.High);
		console.log(d.Low);
		console.log(d.Close);
	});
	var maxHigh = d3.max(data, function(d) { return d.High; });
	var ln = data.length;
	var ctrl  = d3.select("#kuo").append("svg").attr("width", width).attr("height", height);
	//定義Open畫線的規則
	var linesOpen = d3.line().
	x(function(d,i){ return i * (width/ln); }).  //寬值平均分配
	y(function(d){ return height - d.Open * (height/maxHigh); });
	//定義High畫線的規則
	var linesHigh = d3.line().
	x(function(d,i){ return i * (width/ln); }).  //寬值平均分配
	y(function(d){ return height - d.High * (height/maxHigh); });
	//定義Low畫線的規則
	var linesLow = d3.line().
	x(function(d,i){ return i * (width/ln); }).  //寬值平均分配
	y(function(d){ return height - d.Low * (height/maxHigh); });
	//定義Close畫線的規則
	var linesClose = d3.line().
	x(function(d,i){ return i * (width/ln); }).  //寬值平均分配
	y(function(d){ return height - d.Close * (height/maxHigh); });
	//開始Open畫線
	ctrl.append("path").data([data]).
	attr("class", "pathline").  //補上pathline屬性讓CSS控制
	attr("id", "pathlineOpen").
	attr("d", linesOpen);
	//開始High畫線
	ctrl.append("path").data([data]).
	attr("class", "pathline").  //補上pathline屬性讓CSS控制
	attr("id", "pathlineHigh").
	attr("d", linesHigh);
	//開始Low畫線
	ctrl.append("path").data([data]).
	attr("class", "pathline").  //補上pathline屬性讓CSS控制
	attr("id", "pathlineLow").
	attr("d", linesLow);
	//開始Close畫線
	ctrl.append("path").data([data]).
	attr("class", "pathline").  //補上pathline屬性讓CSS控制
	attr("id", "pathlineClose").
	attr("d", linesClose);
});

}