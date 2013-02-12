/*
Elijah Freestone
ASD 1302
Project 2
2-8-13
*/

$('#index').on('pageinit', function(){

	//Function to load JSON dummy data from data.json
	$("#loadJSON").on("click", function() {
		
		$.ajax({
			url: "js/data.json",
			type: "GET",
			dataType: "json",
			success: function(data) {
				alert("Here's JSON!");
					for (var i=0, j=data.dates.length; i<j; i++){
						var myJSON = data.dates[i];
						
							$("<ul id='myDisp' data-role='listview'>" + 
								"<li>" + myJSON.events + "</li>" + 
								"<li>" + myJSON.evdate + "</li>" + 
								"<li>" + myJSON.evinfo + "</li>" + 
								"<li>" + myJSON.importance + "</li>" + 
								"<li>" + myJSON.attend + "</li>" + 
								"<li>" + myJSON.details + "</li>" + 
								"</ul>").appendTo("#dispData");
								console.log("id");
				}
			}
		})
	});
	
});	
		
$('#addItem').on('pageinit', function(){

	var myForm = $("#eventForm"),
		popErrors = $('#popErrors');
			
		myForm.validate({
		invalidHandler: function(form, validator) {
			popErrors.click(); //Pop up error dialog box
			var html = '';
				for(var key in validator.submitted) {
					var label = $('label[for^="'+ key +'"]') // Selector search for required labels not filled out
					var legend = label.closest('fieldset').find('ui-controlgroup-label');
					var fieldName = legend.length ? legend.text() : label.text();
					html += '<li>'+ fieldName +'</li>';
				};
				$("#formErrors ul").html(html); // Fill out Pop up error text
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			saveData(data);
			//console.log(key);
		}
	});
	
	$("submit").on("click", function() {
		saveData();
	});

//Function to add key and save data to local storage
	function saveData(key) {
   		//If there is no key, this means this is a brand new item and we need a new key.
	   	if(!key) {
			var id = Math.floor(Math.random()*100000001);
		}else{
			//Set the id to the existing key that we're editing so it will save over the data.
			//The key is the same key that has been passed along form the editSubmit handler
			//to the validate function, and then passed here, into the storeData finction.
			id = key;
		}
        //Gather up all our form field values and store in an object.
        //Object properties contain array with the form label and input value.
    //getSelectedRadio();
        var item         = {};
            item.events   = ["Event:", $("#eventType").val()]; //Event type selector
            item.evdate  = ["Date:", $("#evDate").val()]; //Event Date
            item.evinfo  = ["Info:", $("#evInfo").val()]; //Event Info
            item.importance = ["Importance:", $("#importance").val()]; //Event Importance Slider
            //item.attend = ["Is attendance required?:", attendValue]; //Attendance Radio Buttons
            item.details = ["Event Details:", $("#details").val()]; //Event Details
            
        //Save Data into Local Storage: Use Stringify to convert object to a string.
        localStorage.setItem(id, JSON.stringify(item));
        alert("Date Saved!");
        //window.location.reload();
    };
	
		
}); //End of addItem pageinit

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	//The actual JSON object data required for this is coming from json.js, which is loaded from our HTML page
	//Store the JSON object into Local Storage
	    for(var n in json) {
		    var id = Math.floor(Math.random()*100000001);
		    localStorage.setItem(id, JSON.stringify(json[n]));	    
		} 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

//Function to load XML dummy data from data.xml
$("#loadXML").on("click", function() {
		
	$.ajax({
		url: "js/data.xml",
		type: "GET",
		dataType: "xml",
		success: function(data) {
			alert("Here's XML!");
				$(data).find("dates").each(function(){
					var events = $(this).contents("events").text();
						evdate = $(this).contents("evdate").text();
						evinfo = $(this).contents("evinfo").text();
						importance = $(this).contents("importance").text();
						attend = $(this).contents("attend").text();
						details = $(this).contents("details").text()
									
						$("<ul id='myDisp' data-role='listview'>" + 
							"<li>" + events + "</li>" +
							"<li>" + evdate + "</li>" +
							"<li>" + evinfo + "</li>" +
							"<li>" + importance + "</li>" +
							"<li>" + attend + "</li>" +
							"<li>" + details + "</li>" +
							"</ul>").appendTo("#dispData");
			});
		}
	});	
});

//Clear all stored data
$("#clearData").on("click", function() {
	if(localStorage.length === 0) {
    	alert("No data to clear.");
    }else{
    	var ask = confirm("Are you sure you want to delete all events?");
    	localStorage.clear();
    	alert("All events have been removed!");
        window.location.reload();
        	return false;     
    }
});


