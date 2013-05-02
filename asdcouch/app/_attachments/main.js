$(document).on('pageinit', '#home', function(){
	$.couch.db("asdproject").view("asdproject/subject", {
		success: function(data){
			console.log(data);
			$('#savedList').empty();
			$.each(data.rows, function(index, value){
				var item = (value.value || value.doc);
				$('#savedList').append(
					$('<li>').append(
						$('<a>')
							.attr("href", "assignment.html?course=" + item.subject)
							.text(item.subject)
					)
				);
			});
			$('#savedList').listview('refresh');
		}
	});
});

var urlVars = function(){
	var urlData = $($.mobile.activePage).data("url");
	var urlParts = urlData.split('?');
	var urlPairs = urlParts[1].split('&');
	var urlValues = {};
	for (var pair in urlPairs){
		var keyValue = urlPairs[pair].split('=');
		var key = decodeURIComponent(keyValue[0]);
		var value = decodeURIComponent(keyValue[1]);
		urlValues[key] = value;
	}
	console.log(urlValues);
	return urlValues;
}

$(document).on('pageinit', '#assignment', function(){
	var subject = urlVars()["subject"];
	console.log(subject);
});