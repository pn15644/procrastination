var mySQL = require ("mySQL");

var con = mySQL.createConnection ();
con.connect(function(err) {
  if (err) {
    console.log('Cannot connect to my database');
    return;
  }
  console.log('Connection established');
});

con.end(function(err){});
