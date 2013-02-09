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
							$("<section>" + "<ul id='myDisp' data-role='listview'>" + 
								"<li>" + myJSON.events + "</li>" + 
								"<li>" + myJSON.evdate + "</li>" + 
								"<li>" + myJSON.evinfo + "</li>" + 
								"<li>" + myJSON.importance + "</li>" + 
								"<li>" + myJSON.attend + "</li>" + 
								"<li>" + myJSON.details + "</li>" + 
								"</ul>" + "</section>").appendTo("#dispData");
				}
			}
		})
	});
	
});	
		
$('#addItem').on('pageinit', function(){

		var myForm = $('#formId');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

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
						details = $(this).contents("details").text();
										
						$("<div>" + "<ul id='myDisp' data-role='listview'>" + 
							"<li>" + events + "</li>" +
							"<li>" + evdate + "</li>" +
							"<li>" + evinfo + "</li>" +
							"<li>" + importance + "</li>" +
							"<li>" + attend + "</li>" +
							"<li>" + details + "</li>" +
							"</ul>" + "</div>").appendTo("#dispData");
			});
		}
	});	
});
