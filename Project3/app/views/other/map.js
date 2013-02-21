function(doc) {
	if (doc._id.substr(0,6) === "other:") {
		emit(doc._id.substr(6), {
			"events": doc.events,
			"evdate": doc.evdate,
			"evinfo": doc.evinfo,
			"attend": doc.attend,
			"details": doc.details
		});
	}
};