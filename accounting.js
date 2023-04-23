let mainTable=document.getElementById("main__table");
let employees=JSON.parse(localStorage.getItem("employees"));
let administrationObj={
    name:"administration",
    employeesNum:0,
    totalSalary:0,
};
let marketingObj={
    name:"Marketing",
    employeesNum:0,
    totalSalary:0,
};
let developerObj={
    name:"Development",
    employeesNum:0,
    totalSalary:0,
};
let financeObj={
    name:"Finance",
    employeesNum:0,
    totalSalary:0,
}
function createTable(department){
    let newTable=document.createElement("table");
    let thead=document.createElement("thead");
    let tbody=document.createElement("tbody");
    let departmentSec=document.createElement("tr");
    let departmentText=document.createElement("td");
    let departmentName=document.createElement("td");
    //the head
    departmentText.innerText="Department Name : ";
    departmentName.innerText=department.name;
    departmentSec.append(departmentText,departmentName);
    thead.append(departmentSec);
    //the body 
    //create employees sec
    let employeesSec=document.createElement("tr");
    let employees=document.createElement("td");
    let employeesNum=document.createElement("td");
    employees.innerText="Number Of Employees";
    employeesNum.innerText=department.employeesNum;
    employeesSec.append(employees,employeesNum);
    ///create Average salary sec
    let averageSalarySec=document.createElement("tr");
    let averageSalaryText=document.createElement("td");
    let averageSalary=document.createElement("td");
    averageSalaryText.innerText="Average Salary";
    averageSalary.innerText=department.employeesNum>=1?department.totalSalary/department.employeesNum:department.totalSalary;
    averageSalarySec.append(averageSalaryText,averageSalary)
    //create Total salary
    let totatlSalarySec=document.createElement("tr");
    let totalSalaryText=document.createElement("td");
    let totalSalary=document.createElement("td");
    totalSalaryText.innerText="Total Salary";
    totalSalary.innerText=department.totalSalary;
    totatlSalarySec.append(totalSalaryText,totalSalary)
    tbody.append(departmentSec,employeesSec,averageSalarySec,totatlSalarySec)
    newTable.append(thead,tbody);
    mainTable.append(newTable);
}  
function addToDepartment(){
    employees.forEach((e)=>{
        console.log(employees)
    switch (e.department){
        case "administration":{
            administrationObj.employeesNum++;
            administrationObj.totalSalary+=e.salary===undefined?0:e.salary;
            break;
        }
        case "marketing":{
            marketingObj.employeesNum= marketingObj.employeesNum+1;
            marketingObj.totalSalary+=e.salary===undefined?0:e.salary;;
            break;
        }
        case "finance":{
            financeObj.employeesNum=financeObj.employeesNum+1;
            financeObj.totalSalary=e.salary;
            break;
        }
        case "development":{
        developerObj.employeesNum=developerObj.employeesNum+1;
        developerObj.totalSalary+=e.salary===undefined?0:e.salary;;
  
        break;
        }
    }
})
function footerTable(){
    let footer=document.querySelector("footer");
    let newTable=document.createElement("table");
    let thead=document.createElement("thead");
    let mainTr=document.createElement("tr");
    let totalEmployees=document.createElement('td');
    let totalSalary=document.createElement("td");
    let averageSalary=document.createElement("td");
    averageSalary=()
}
createTable(administrationObj);
createTable(marketingObj);
createTable(developerObj);
createTable(financeObj)
}
addToDepartment()


