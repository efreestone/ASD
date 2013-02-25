function(doc) {
	if (doc._id.substr(0,9) === "birthday:") {
		emit(doc._id.substr(9), {
			"events": doc.events,
			"evdate": doc.evdate,
			"evinfo": doc.evinfo,
			"attend": doc.attend,
			"details": doc.details
		});
	}
};