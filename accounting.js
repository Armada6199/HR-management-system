let table=document.getElementById("main__table");
let employeesArr=JSON.parse(localStorage.getItem("emplyees"));
function createTable(){
    employeesArr.filter((e)=>e.department==="")
    for(let i =0;i<employeesArr.length;i++){
        let tr=document.createElement("tr");
        let td=document.createElement("td");
    }
}