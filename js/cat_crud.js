let raw_data=[];


function CreateTble(){
    let str="";
    for(let line of raw_data){
        str+="<tr>";
        str+=`<td><button onclick="editLine(${line.id});">edit</button></td>`;
        str+="<td>"+line.name+"</td>";
        str+=`<td><button onclick="deleteLine(${line.id});">delete</button></td>`;
        str+="</tr>";
    }
    document.getElementById("mainTable").innerHTML=str;
}

async function getList() {
let response = await fetch('/List');
// console.log("response=",response);
let data = await response.json();
console.log("data=",data);
raw_data = data;
CreateTble();
}

async function addNewLine() {
let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let pob=document.getElementById("pob").value;
let response = await fetch('/Add', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({name: name, phone: phone, pob: pob})
}
);
// let data = await response.json();
// console.log(data);
getList();
}
async function deleteLine(id) {
let objToServer={};
objToServer.idx=id;
let response = await fetch('/Delete', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(objToServer)
}
);
// let data = await response.json();
// console.log(data);
getList();
}
async function editLine(id) {
let objToServer={};
objToServer.idx=id;
objToServer.name=document.getElementById("name").value;
objToServer.phone=document.getElementById("phone").value;
objToServer.pob=document.getElementById("pob").value;
let response = await fetch('/Update', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(objToServer)
}
);
// let data = await response.json();
// console.log(data);
getList();
}

getList();
