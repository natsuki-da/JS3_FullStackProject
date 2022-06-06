import React, { useState, useEffect } from 'react';
import {Container} from 'react-bootstrap';
import axios from 'axios';

const Project = () => {
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectList, setProjectList] = useState([]);
    const [skill, setSkill] = useState("");
    const [skillList, setSkillList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    

    const submitProject = () => {
        axios.post("http://localhost:3001/api/insert", {
            projectName: projectName, 
            projectDescription: projectDescription,
        });

        setProjectList([...projectList, {
            projectName: projectName, 
            projectDescription: projectDescription},
        ]);
    };
    
    const fetchProjects = async () => {
        const req1 = axios.get('http://localhost:3001/api/get')
        const req2 = axios.get('http://localhost:3001/api/get_skill')
        await axios.all([req1, req2]).then(axios.spread(function(res1, res2) {
            let arr = []
            res1.data.forEach(function (project ) {  
                if (project.hasOwnProperty('skills') == false)  {
                        project['skills'] = [];
                }          
                res2.data.forEach(function (skill) {
                    
                    if (project.id == skill.projectId) {
                        project['skills'].push(skill);
                    }    
                       
                    }); 
                    arr.push(project)           
            }  );
          
            setProjectList(arr)
         } )); 
      };



    useEffect(()=>{
        const getProjects = async () => {
            await fetchProjects();
        }
        
        getProjects();
    }, []);

    const deleteProject = (projectid) => {
        axios.delete(`http://localhost:3001/api/delete/${projectid}`);
        setProjectList(projectList.filter((p) => p.id !== projectid ))
    };

    const updateProject = (projectDescription, id) => {
        axios.put("http://localhost:3001/api/update", {
            id: id, 
            projectDescription: projectDescription,
        });
        setProjectDescription(projectDescription);
        setProjectList(projectList.map((p) => p.id === id ? { ...p, projectDescription: projectDescription} : p ))
    };

    const addNewSkill = (projectId) => {
        const res = axios.post("http://localhost:3001/api/insert_skill", {
            skill: skill, 
            projectId: projectId,
        });
        projectList.forEach(function (p ) {
            if(p.hasOwnProperty('skills') === false ) {
                p['skills'] = [];
            }
        });
        setProjectList(projectList.map((p) => p.id === projectId ? { ...p, skills: [...p.skills, {id:res.data, projectId:projectId, skill: skill}]} : p ))
    };
    


    return (
        <Container>
            <div className="form">
                <h1>New Projects</h1>
                <label>Project Name: </label>
                <input type="text" name="projectName" onChange={(e)=>{
                    setProjectName(e.target.value);}}/>
                <label>Project Description: </label>
                <input type="text" name="projectDescription" onChange={(e) =>{
                    setProjectDescription(e.target.value);}}/>
                <button className="button" onClick={submitProject}>Submit</button>
            </div>
            
            <div className="search">
                    <input type="text" id="searchBar" placeholder="Search for a specific project..." onChange={(e) => {setSearchTerm(e.target.value);}}></input>
            </div>

            {projectList.map((val, index) => {
                let htmlCode = (
                    <div className="card" key={val.id}>
                        <h3>{val.projectName}</h3>
                        <div>Project Description: </div>
                        <div>{val.projectDescription}</div>
                        <div>Skills: </div>
                        
                        <div>{val.hasOwnProperty('skills') ? 
                                (val.skills.map((skill, index) => 
                            {return (<div key={index}>{skill.skill}</div>)})) 
                            : ( 'No skills added yet' ) }</div>
                      
                        <input type="text" id="updateInput" placeholder="Description" onChange={(e) => {
                            setProjectDescription(e.target.value)
                        }}></input>
                        <button className="button" onClick={() => {updateProject(projectDescription, val.id)}}>Update</button>
                        <button className="button" onClick={() => {deleteProject(val.id)}}>Delete</button>
                        
                        <label>Skills: </label>
                        <input type="text" id="skill" onChange={(e) =>{
                            setSkill(e.target.value);}}/>
                        <button className="button" onClick={() => {addNewSkill(val.id)}}>Add</button>
                    </div>
                );

                if (searchTerm == "") {
                    return htmlCode
                } else if (val.projectName.toLowerCase().includes(searchTerm.toLowerCase())){
                    return htmlCode
                }
                })}
            



        </Container>
    );
};

export default Project;

