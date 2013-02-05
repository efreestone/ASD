/*
Elijah Freestone
ASD 1301
Project 1
1-7-13
*/

var json = { //Needs 20 Events
	"event1": {
		"events": ["Event type:", "Birthday"],
		"evdate": ["Date:", "2012-11-21"],
		"evinfo": ["Info:", "My Birthday"],
		"importance": ["Importance:", "5"],
		"attend": ["Is attendance required?:", "Yes"],
		"details": ["Event details:", "Partay!!!"],
	},
	
	"event2": {
		"events": ["Event type:", "Anniversary"],
		"evdate": ["Date:", "2013-03-26"],
		"evinfo": ["Info:", "1 year in school"],
		"importance": ["Importance:", "2"],
		"attend": ["Is attendance required?:", "No"],
		"details": ["Event details:", "12 months down. 20 to go."],
	},
	
	"event3": {
		"events": ["Event type:", "Other"],
		"evdate": ["Date:", "2012-12-21"],
		"evinfo": ["Info:", "End of the world"],
		"importance": ["Importance:", "4"],
		"attend": ["Is attendance required?:", "Undecided"],
		"details": ["Event details:", "This should be interesting..."],
	},
	
	"event4": {
		"events": ["Event type:", "Appointment"],
		"evdate": ["Date:", "2013-06-10"],
		"evinfo": ["Info:", "Doctors Appointment"],
		"importance": ["Importance:", "5"],
		"attend": ["Is attendance required?:", "Yes"],
		"details": ["Event details:", "At Dr. Thompsons Fort Collins office, 10:30am."],
	},
	
	"event5": {
		"events": ["Event type:", "Meeting"],
		"evdate": ["Date:", "2012-12-24"],
		"evinfo": ["Info:", "Meeting with Santa Clause"],
		"importance": ["Importance:", "3"],
		"attend": ["Is attendance required?:", "Yes"],
		"details": ["Event details:", "Don't forget milk, cookies, and carrots!!"],
	},
	
	"event6": {
		"events": ["Event type:", "Birthday"],
		"evdate": ["Date:", "2013-06-21"],
		"evinfo": ["Info:", "Brothers Birthday"],
		"importance": ["Importance:", "3"],
		"attend": ["Is attendance required?:", "Undecided"],
		"details": ["Event details:", "BBQ at Dads. 4:30pm."],
	},
	
	"event7": {
		"events": ["Event type:", "Anniversary"],
		"evdate": ["Date:", "2012-02-14"],
		"evinfo": ["Info:", "Grandma and Grandpas 60th"],
		"importance": ["Importance:", "5"],
		"attend": ["Is attendance required?:", "No"],
		"details": ["Event details:", "Send White Lillies!!"],
	},
	
	"event8": {
		"events": ["Event type:", "Meeting"],
		"evdate": ["Date:", "2015-01-01"],
		"evinfo": ["Info:", "Meeting with Doc"],
		"importance": ["Importance:", "5"],
		"attend": ["Is attendance required?:", "Yes"],
		"details": ["Event details:", "Must fix the DeLorean first!!"],
	},
	
	"event9": {
		"events": ["Event type:", "Birthday"],
		"evdate": ["Date:", "2013-02-22"],
		"evinfo": ["Info:", "Dads Birthday"],
		"importance": ["Importance:", "5"],
		"attend": ["Is attendance required?:", "Yes"],
		"details": ["Event details:", "Suprise party at Dads house. Set-up starts at 4pm."],
	},
	
	"event10": {
		"events": ["Event type:", "Birthday"],
		"evdate": ["Date:", "2013-01-22"],
		"evinfo": ["Info:", "Moms Birthday"],
		"importance": ["Importance:", "5"],
		"attend": ["Is attendance required?:", "No"],
		"details": ["Event details:", "Don't forget to send flowers!!"],
	},
	
	"event11": {
		"events": ["Event type:", "Other"],
		"evdate": ["Date:", "2012-11-06"],
		"evinfo": ["Info:", "Election Day"],
		"importance": ["Importance:", "1"],
		"attend": ["Is attendance required?:", "No"],
		"details": ["Event details:", "Already voted."],
	},
	
	"event12": {
		"events": ["Event type:", "Other"],
		"evdate": ["Date:", "2012-12-31"],
		"evinfo": ["Info:", "New Years Eve"],
		"importance": ["Importance:", "4"],
		"attend": ["Is attendance required?:", "Yes"],
		"details": ["Event details:", "Gonna party like it's 1899!!"],
	},
	
	"event13": {
		"events": ["Event type:", "Other"],
		"evdate": ["Date:", "2012-10-31"],
		"evinfo": ["Info:", "Halloween"],
		"importance": ["Importance:", "2"],
		"attend": ["Is attendance required?:", "Undecided"],
		"details": ["Event details:", "Trick or treat!!"],
	},
	
	"event14": {
		"events": ["Event type:", "Birthday"],
		"evdate": ["Date:", "2013-09-24"],
		"evinfo": ["Info:", "Chars Birthday"],
		"importance": ["Importance:", "5"],
		"attend": ["Is attendance required?:", "Yes"],
		"details": ["Event details:", "Most likely going to dinner and a movie."],
	},
	
	"event15": {
		"events": ["Event type:", "Appointment"],
		"evdate": ["Date:", "2013-03-31"],
		"evinfo": ["Info:", "Appointment with Gag Commitee"],
		"importance": ["Importance:", "4"],
		"attend": ["Is attendance required?:", "Yes"],
		"details": ["Event details:", "Last years April Fools gag was good. May be hard to top."],
	},
	
	"event16": {
		"events": ["Event type:", "Meeting"],
		"evdate": ["Date:", "2012-12-10"],
		"evinfo": ["Info:", "Meeting with Elves Union"],
		"importance": ["Importance:", "4"],
		"attend": ["Is attendance required?:", "Yes"],
		"details": ["Event details:", "The elves want more money or they will strike!"],
	},
	
	"event17": {
		"events": ["Event type:", "Appointment"],
		"evdate": ["Date:", "2012-10-27"],
		"evinfo": ["Info:", "Haircut"],
		"importance": ["Importance:", "1"],
		"attend": ["Is attendance required?:", "Yes"],
		"details": ["Event details:", "Get my hair did."],
	},
	
	"event18": {
		"events": ["Event type:", "Birthday"],
		"evdate": ["Date:", "2013-02-20"],
		"evinfo": ["Info:", "Kurt Cobains birthday"],
		"importance": ["Importance:", "5"],
		"attend": ["Is attendance required?:", "Yes"],
		"details": ["Event details:", "Kurt would have been 46. Light a candle."],
	},
	
	"event19": {
		"events": ["Event type:", "Anniversary"],
		"evdate": ["Date:", "2013-04-05"],
		"evinfo": ["Info:", "Anniversary of Kurt Cobains Death"],
		"importance": ["Importance:", "4"],
		"attend": ["Is attendance required?:", "Yes"],
		"details": ["Event details:", "Gone too soon. Light a candle."],
	},
	
	"event20": {
		"events": ["Event type:", "Anniversary"],
		"evdate": ["Date:", "2013-07-04"],
		"evinfo": ["Info:", "4th of July"],
		"importance": ["Importance:", "4"],
		"attend": ["Is attendance required?:", "Yes"],
		"details": ["Event details:", "Yay!! I get to blow stuff up!!"],
	}
};
