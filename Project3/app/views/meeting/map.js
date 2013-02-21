function(doc) {
	if (doc._id.substr(0,8) === "meeting:") {
		emit(doc._id.substr(8), {
			"events": doc.events,
			"evdate": doc.evdate,
			"evinfo": doc.evinfo,
			"attend": doc.attend,
			"details": doc.details
		});
	}
};