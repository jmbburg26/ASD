$("#home").on('pageinit', function(){
	//Home page code	


	$('section form')


	//Save Data Function
		function $(x){
			var userElements = document.getElementById(x);
			return userElements;
		};
		
	//Get Data Function
		function storeData	(){
			var userValues			=Math.floor(Math.random()*100000001);
			
			var userItem			= {};
				userItem.fname		= ["First Name:", $('#fname').val];
				userItem.lname		= ["Last Name:", $('#lname').val];
				userItem.email		= ["Email:", $('#email').val];
				userItem.datedue	= ["Date:", $('#datedue').val];
				userItem.notes		= ["Notes:", $('#notes').val;
			//Save user data to local storage
			localStorage.setItem(id, JSON.stringify(userItem));
			alert("Homework Added!");
			resetForm();
		}	
		
		function getData(){
		toggleControls("on");

		//Write Data form Local Storage
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "userItem");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('userItem').style.display = "block";
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubli);
			var optSubText = obj[n][0]+" "+obj[n][1];
			makeSubli.innerHTML = optSubText;
			}
		}

	//Clear Data
		function clearData(){
			if(localStorage.length === 0){
				alert("There is no assignment.")
			}else{
				alert("All homework has been deleted!");
				window.location.reload();
				return false;	
			}
		};


	$("#add").on("pageinit", function(){
	//Click events for diaplsy, save, and clear
		var displayLink = $('#display');
		displayLink.on('click', getData);
		var clearLink = $('#clear');
		clearLink.on('click', clearData);
		var save = $('#save');
		save.on('click', storeData);

	});
});