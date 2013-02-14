/*
Elijah Freestone
ASD 1302
Project 2
2-8-13
*/

$('#index').on('pageinit', function(){

	//Function to load JSON dummy data from data.json
	$("#loadJSON").on("click", function() {
		$.mobile.changePage($("#dispData"));
		
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
	
	//Function to load XML dummy data from data.xml
	$("#loadXML").on("click", function() {
		$.mobile.changePage($("#dispData"));
		
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
	
}); //End of index pageinit	
		
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
			saveData($('#submit').attr('key'));
			//console.log(key);
		}
	});
		
}); //End of addItem pageinit

//Function to autofill local storage for testing. REMOVE FROM FINAL APP!!
function autofillData(){
	//The actual JSON object data required for this is coming from json.js, which is loaded from our HTML page
	//Store the JSON object into Local Storage
	    for(var n in json) {
		    var id = Math.floor(Math.random()*100000001);
		    localStorage.setItem(id, JSON.stringify(json[n]));	    
		} 
};

//Event listener for "Save Date!" button on addItem
$("submit").on("click", function() { 
	//saveData(); //Not sure how this works with saveData commented out.
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
        //item.importance = ["Importance:", $("#importance").val()]; //Event Importance Slider
        //item.attend = ["Is attendance required?:", attendValue]; //Attendance Radio Buttons
        item.details = ["Event Details:", $("#details").val()]; //Event Details
            
    //Save Data into Local Storage: Use Stringify to convert object to a string.
    localStorage.setItem(id, JSON.stringify(item));
        
    alert("Date Saved!");
    //console.log(id);
    window.location.reload();
};

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

//Event listener for "See Saved Dates" button on index
$("#seeData").on("click", function() {
	showData();
});
//Event listener for "Display Data" button on addItem
$("#displayData").on("click", function() {
	showData();
});
//Event listener for "Add New Date" button on dispData
$("#addNew").on("click", function() {
	$.mobile.changePage($("#addItem"));
	window.location.reload();//Workaround to fix duplicate displayed data issue. Working on real fix.	
});
   
//Function to display items from local storage 
function showData() {
	$.mobile.changePage($("#dispData"));
    //Check if there are any items in local storage  
    if(localStorage.length === 0) {
    	alert("There are no dates to show so default data was added.");
    	autofillData();
    }
    //Write Data from Local Storage to the browser.
    var makeDiv = document.createElement("div");
    makeDiv.setAttribute("id", "items");
    $("#dispData").append(makeDiv);
    for(var i=0, len=localStorage.length; i<len; i++) {
        var linksLi = document.createElement("ul");
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
    //Convert the string from local storage value back to an object by using JSON.parse()
        var obj = JSON.parse(value);
        var makeSubList = document.createElement("ul");
        makeDiv.appendChild(makeSubList);
    getImage(obj.events[1], makeSubList);
        for(var n in obj) {
            var makeSubLi = document.createElement("li");
            makeSubList.appendChild(makeSubLi);
            var optSubText = obj[n][0]+" "+obj[n][1];
            makeSubLi.innerHTML = optSubText;
            makeSubList.appendChild(linksLi);
        }
        makeItemLinks(localStorage.key(i), linksLi); //Create edit and delete buttons/link for each item in local storage
    }
};

//Get and apply the image for the correct event category.
function getImage(catName, makeSubList) {
	var imageLi = document.createElement("li");
	makeSubList.appendChild(imageLi);
	var newImg = document.createElement("img");
	var setSrc = newImg.setAttribute("src", "img/"+ catName +".jpg");
	imageLi.appendChild(newImg);
};

//Create the edit and delete links for each stored item when displayed
function makeItemLinks(key, linksLi) {
	var editLink = $("<a></a>").attr({"href": "#", "id": "editLink", "key": key })
							   .html("Edit Date")
							   .appendTo(linksLi)
							   .on("click", editItem);
	
    //Add line break
    var breakTag = $("</br>").appendTo(linksLi);
    
    var deleteLink = $("<a></a>").attr({"href": "#", "id": "deleteLink", "key": key })
    							 .html("Delete Date")
    							 .appendTo(linksLi)
    							 .on("click", deleteItem);    
};

//Function for edit item link
function editItem() {
	$.mobile.changePage($("#addItem"));
	//Grab the data from our item from local storage
	var value = localStorage.getItem($(this).attr("key"));
	var item = $.parseJSON(value);    
	
	//Populate the form fields with current localStorage values.
	//[0] is the label. [1] is the value.
	$("#eventType").val(item.events[1]);
	$("#evDate").val(item.evdate[1]);
	$("#evInfo").val(item.evinfo[1]);
	//$("#importance").val(item.importance[1]);
	/*var radios = document.forms[0].attend;
	 	for(var i=0; i<radios.length; i++) {
		    if(radios[i].value == "Yes" && item.attend[1] == "Yes") {
		   		radios[i].setAttribute("checked", "checked");
		    }else if(radios[i].value == "No" && item.attend[1] == "No") {
			    radios[i].setAttribute("checked", "checked");
		    }else if(radios[i].value == "Undecided" && item.attend[1] == "Undecided") {
			    radios[i].setAttribute("checked", "checked");
			}
	    }*/
	$("#details").val(item.details[1]);
	//Change text on save button
	$('#submit').val("Edit Date");
	$('#submit').attr("key", $(this).attr("key")); 
};
    
//Delete single event 
function deleteItem() {
	
	//$.mobile.changePage("#dispData");
	
    var ask = confirm("Are you sure you want to delete this date?");
    if(ask) {
    	localStorage.removeItem($(this).attr("key"));
    	alert("You have successfully deleted the date!");
    	
    	//history.go(0);
    	//showData();
    	//$.mobile.changePage($("#dispData"));
    	//window.opener.updateContent();
    	//showData();
	    //localStorage.removeItem(this.key);
	    //alert("You have successfully deleted the date!")
	    window.location.reload();
	    //return false;
	    
    }else{
	    alert("Date was NOT deleted.")
    }
};