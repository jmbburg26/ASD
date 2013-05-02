function(doc) {
  if (doc._id.substr(0, 8) === "subject:") {
    emit(doc._id.substr(8), {
    	"subject": doc.subject,
    	"title": doc.title
    });
  }
};