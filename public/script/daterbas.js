var sqlite3 = require('sqlite3').verbose();

try {
  var db = new sqlite3.Database("/data.db");
} catch (err) {
  console.log(err);
}

const users = ["Sara", "Mike", "James", "David", "Emily"];

db.serialize(function() {
    db.run("CREATE TABLE mytable (id, name)");
});

db.close();

function insertData(){
    var insertQuery = db.prepare("INSERT INTO mytable VALUES (?,?)");
    for (var i = 0; i < users.length; i++) {
        insertQuery.run(i, users[i]);
        console.log("Data inserted successfully...");
    }
    insertQuery.finalize();
}

function accessData(){
    db.each("SELECT * FROM mytable", function(err, row) {
        if(error) return console.log(err.message);
        console.log(row.id + ": " + row.name);
    });
}

function deleteData(name){
    db.run("DELETE FROM mytable WHERE name=?",name, err =>{
        if(err) return console.log(err.message);
        console.log(`${name} deleted successfully...`);
    });
}

db.serialize(function() {
    db.run("CREATE TABLE mytable (id, name)");

    insertData();
    accessData();
    deleteData("James");
});

db.close();