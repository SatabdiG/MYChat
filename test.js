var mongoclient=require('mongodb').MongoClient;

mongoclient.connect("mongodb://localhost:27017/test", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }

var cursor=db.collection('resturants').find({"name":"Bix"});
cursor.each(function(err, doc){
if(doc!=null)
console.log(doc.name);


}); 

});
