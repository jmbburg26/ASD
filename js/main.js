$("#home").on('pageinit', function(){
	//Home page code	
});

$("#add").on("pageinit", function(){

//Click events for diaplsy, save, and clear
	var displayLink = $('#display');
	displayLink.on('click', getData);
	var clearLink = $('#clear');
	clearLink.on('click', clearData);
	var save = $('#save');
	save.on('click', storeData);

	});


