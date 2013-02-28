function(doc) {
	if (doc._id.substr(0,9) === "Birthday:") {
		emit(doc._id, {
			"key": doc._id,
			"events": doc.events,
			"evdate": doc.evdate,
			"evinfo": doc.evinfo,
			"attend": doc.attend,
			"details": doc.details
		});
	}
};