$('#home').on('pageinit', function(){
	//code needed for home page goes here

});	

$('form').submit(function() {
  console.log($(this).serializeArray());
  return false;
});