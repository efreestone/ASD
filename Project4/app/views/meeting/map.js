function(doc) {
	if (doc._id.substr(0,8) === "Meeting:") {
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