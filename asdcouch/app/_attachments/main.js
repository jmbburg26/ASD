$(document).on('pageinit', '#view', function(){
	$.couch.db("asdproject").view("asdproject/course", {
		success: function(data){
			//console.log(data);
			$('#savedlist').empty();
			$.each(data.rows, function(index, value){
				var item = (value.value || value.doc);
				$('#savedlist').append(
					$('<li>').append(
						$('<a>').attr("href", "asd.html?course=" + item.)
							.text(item.title)
					)
				);
			});
			$('#savedlist').listview('refresh');
		}
	});
});

/*
var getData = function(){
  if(localStorage.length === 0){
      alert("There are no assignments in Local Storage so default data has been added.");
      defaultData();
    }else{
  for (var i=0, j=localStorage.length; i<j; i++) {
              var assign = localStorage[i];
              $(''+
                  '<div class="assignments">'+
                  '<h2>'+ assign.datedue +'</h2>'+
                  '<p>'+ assign.fname +'</p>'+
                  '<p>'+ assign.lname +'</p>'+
                  '<p>'+ assign.email +'</p>'+
                  '<p>'+ assign.notes +'</p>'+
                  '</div>'
                ).appendTo('#assignments');    
            };
    }
};

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




//Button links
    var displayLink = $('#view');
    displayLink.on("click", getData);
    //var clearLink = $('boom');
    //clearLink.on("click", boomData);
    //var save = $('save');
    //save.on("click", validate);
});
*/