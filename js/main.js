$('#home').on('pageinit', function(){
	//code needed for home page goes here

});	

$('#add').on('pageinit', function(){	
	
	//Collect data from form
	$('form').submit(function() {
		var userValues		=Math.floor(Math.random()*100000001);
	  	var userData = $(":input").serializeArray();
    		jQuery.each(userData, function(i, field){
      		$("#view").append(field.value + " ");
  
    	});
    	var userItems = jQuery.makeArray(userData);
	  	localStorage.setItem(userValues, userItems);
	  	alert("Homework Added");
	});
});

$('#view').on('pageinit', function(){
	$.getJSON('js/json.js', function(data) {
  	var items = [];
 
  	$.each(data, function(key, val) {
    	items.push('<li id="' + key + '">' + val + '</li>');
  	});
 
  	$('<ul/>', {
    	'class': 'my-new-list',
   	 html: items.join('')
  	}).appendTo('body');
	});
});