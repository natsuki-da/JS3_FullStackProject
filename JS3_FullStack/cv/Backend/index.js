const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'CRUD_DB',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//Fetch projects
app.post('/api/insert', (req, res) => {
    const projectName = req.body.projectName;
    const projectDescription = req.body.projectDescription;
    const sqlInsert = "INSERT INTO project (projectName, projectDescription) VALUES (?, ?);"
    db.query(sqlInsert, [projectName, projectDescription], (err, result) => {
        console.log(err);
    });
});

//Add skill
app.post('/api/insert_skill', (req, res) => {
    const skill = req.body.skill;
    const projectId = req.body.projectId;
    const sqlInsert = "INSERT INTO Skill (skill, projectId) VALUES (?, ?);"
    db.query(sqlInsert, [skill, projectId], (err, result) => {
        console.log(result);
    });
});

//Fetch project
app.get('/api/get', (req, res)  =>{
    const sqlSelect = "SELECT * FROM project";
   
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });


    
})

//Fetch skill
app.get('/api/get_skill', (req, res) =>{
    const sqlSelect = "SELECT * FROM Skill";
    db.query(sqlSelect, (err, result) => {
        // console.log(err, result);
        res.send(result);
    });
})



app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;
    const sqlDeleteSkill = "DELETE FROM Skill WHERE projectid = ?";
    db.query(sqlDeleteSkill, id, (err, result) => {
        if (err) console.log(err);
    });

    db.query("COMMIT", (err, result) => {
        if (err) console.log(err);
    });
    const sqlDeleteProject = "DELETE FROM project WHERE id = ?";
    db.query(sqlDeleteProject, id, (err, result) => {
        if (err) console.log(err);
    });
});

app.put('/api/update', (req, res) => {
    const id = req.body.id;
    const projectDescription = req.body.projectDescription;
    const sqlUpdate = "UPDATE project SET projectDescription = ? WHERE id = ?";
    
    
    db.query(sqlUpdate, [projectDescription, id], (err, result) => {
        console.log(projectDescription);
        if (err) console.log(err);
    });
});


// TEST 
// app.get('/', (req, res) =>{
//     const sqlInsert = "INSERT INTO project (projectName, projectDescription) VALUES ('Gift Card', 'G');"
//     db.query(sqlInsert, (err, result) => {
//         res.send(result);
//     })
// });

app.listen(3001, () => {
    console.log("running on port 3001");
});

