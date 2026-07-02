document.getElementById("regForm").onsubmit=function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let mobile=document.getElementById("mobile").value;
let dept=document.getElementById("dept").value;
let course=document.getElementById("course").value;
let dob=document.getElementById("dob").value;

if(name==""||email==""||mobile==""||dept==""||course==""||dob==""){
alert("Fill all fields");
return;
}

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
alert("Invalid Email");
return;
}

if(!/^[0-9]{10}$/.test(mobile)){
alert("Mobile must be 10 digits");
return;
}

let age=new Date().getFullYear()-new Date(dob).getFullYear();

if(age<18){
alert("Age must be above 18");
return;
}

let table=document.getElementById("tableBody");

table.innerHTML+=`
<tr>
<td>${name}</td>
<td>${course}</td>
<td>${dept}</td>
</tr>`;

document.getElementById("regForm").reset();

}