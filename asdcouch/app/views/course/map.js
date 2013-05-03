function(doc) {
  if (doc._id.substr(0, 7) === "course:") {
    emit(doc._id.substr(7), {
    	"fname": doc.fname,
    	"lname": doc.lname,
    	"email": doc.email,
    	"datedue": doc.datedue,
    	"notes": doc.notes,
    	"subject": doc.subject
    });
  }
};