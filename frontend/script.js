let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

/* AUTHENTICATION */

function showRegister(){
document.getElementById("loginPage").classList.add("hidden");
document.getElementById("registerPage").classList.remove("hidden");
}

function showLogin(){
document.getElementById("registerPage").classList.add("hidden");
document.getElementById("loginPage").classList.remove("hidden");
}

function register(){

let username=document.getElementById("regUser").value;
let password=document.getElementById("regPass").value;

let user={
username:username,
password:password
};

localStorage.setItem("user",JSON.stringify(user));

alert("Registration successful");

showLogin();

}

function login(){

let username=document.getElementById("loginUser").value;
let password=document.getElementById("loginPass").value;

let storedUser=JSON.parse(localStorage.getItem("user"));

if(storedUser && username===storedUser.username && password===storedUser.password){

alert("Login successful");

document.getElementById("loginPage").classList.add("hidden");
document.getElementById("dashboard").classList.remove("hidden");

displayTasks();

}else{

alert("Invalid credentials");

}

}

function logout(){

document.getElementById("dashboard").classList.add("hidden");
document.getElementById("loginPage").classList.remove("hidden");

}


/* CRUD OPERATIONS */

function addTask(){

let task=document.getElementById("taskInput").value;

if(task===""){
alert("Enter a task");
return;
}

tasks.push(task);

localStorage.setItem("tasks",JSON.stringify(tasks));

document.getElementById("taskInput").value="";

displayTasks();

}

function displayTasks(){

let taskList=document.getElementById("taskList");

taskList.innerHTML="";

tasks.forEach((task,index)=>{

let li=document.createElement("li");

li.innerHTML=`
${task}
<button onclick="editTask(${index})">Edit</button>
<button onclick="deleteTask(${index})">Delete</button>
`;

taskList.appendChild(li);

});

}

function deleteTask(index){

tasks.splice(index,1);

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

}

function editTask(index){

let newTask=prompt("Edit task",tasks[index]);

if(newTask!==null){

tasks[index]=newTask;

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

}

}