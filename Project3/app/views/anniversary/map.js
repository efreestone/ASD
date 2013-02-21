function(doc) {
	if (doc._id.substr(0,12) === "anniversary:") {
		emit(doc._id.substr(12), {
			"events": doc.events,
			"evdate": doc.evdate,
			"evinfo": doc.evinfo,
			"attend": doc.attend,
			"details": doc.details
		});
	}
};