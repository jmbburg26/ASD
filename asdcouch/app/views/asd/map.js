function(doc) {
  if (doc._id.substr(0, 4) === "asd:") {
    emit(doc._id.substr(4), {
    	"fname": doc.fname,
    	"lname": doc.lname,
    	"email": doc.email,
    	"datedue": doc.datedue,
    	"notes": doc.notes
    });
  }
};