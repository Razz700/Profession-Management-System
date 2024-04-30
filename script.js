let array=[];
let disbtn;
let pos=0;
let data=document.getElementById("values");
let id=0,name,profession,age;
let submitBtn=document.getElementById("sub");
let nam=document.getElementById("name");
let prof=document.getElementById("prof");
let ag=document.getElementById("age");
let message=document.getElementById("msg");
let display=document.getElementById("values");
submitBtn.addEventListener("click",()=>{
if(nam.value=="" || prof.value=="" || ag.value==""){
message.innerHTML="Error : Please Make sure All the fields are filled before adding in an employee !";
message.style.color="#FF4343";}
else{id++;
    pos++;
    let obj={};
    obj.id=id;
    obj.name=nam.value;
    obj.profession=prof.value;
    obj.age=ag.value;
array.push(obj);
console.log(array);
message.innerHTML="Success : Employee Added!";
message.style.color="#43FF78";

document.getElementById("initial").innerHTML="";
display.innerHTML+=`<div id='0${id}'><div style="display:inline; color:white; border:1px solid white; border-radius:5px; padding:7px; font-size:medium;">${id}. Name:${array[pos-1].name}  Profession:${array[pos-1].profession}  Age:${array[pos-1].age}</div>
<button id=${id} onclick="func(id)">Delete User</button><div>`;
display.style.cssText="";
disbtn=document.getElementById(`${id}`);
disbtn.style.cssText="color:grey; border:none; border-radius:20px; width:auto; background-color:white; padding:10px; hover{background-color:gray;}";
nam.value="";
prof.value="";
ag.value="";
}
});
function func(id){
    pos--;
    let a=parseInt(id);
array.forEach((item,i)=>{
    if(item.id==a){
        array.splice(i,1);
    }
});
message.innerHTML="Success : Employee Deleted!";
message.style.color="yellow";
if(array.length==0){
    document.getElementById("initial").innerHTML="You have 0 Employees";
}
    console.log("Updated Array after Employee Removal",array);
    let b=document.getElementById(`0${a}`);
b.remove();
}
