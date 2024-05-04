// Import Dependencies 

import mysql2 from 'mysql2';
import express from 'express';

// Declare Varibles

const app = express();
const PORT = 9876;

// Create MySQL Database Connection

const connection =  mysql2.createConnection({
   host: "localhost", // 127.0.0.1
   database: "five_db",
   user: "root",
   password: "TrenA100!!"

});

// Use Express Listen Method To Indicate Server in Live by Logging Output In Terminal

app.listen(PORT, () => {
    console.log(`Dark Web Server Live on: http://localhost:${PORT}`);
    connection.connect((err) => {
        if (err) throw err;
        console.log("Database Connected");
    })
});

app.use("/na", (req, res) => {
    const sql_query = `select * from five_table`
    connection.query(sql_query, (err, result) => {
        if (err) throw err;
        res.send(result);
    });

});
