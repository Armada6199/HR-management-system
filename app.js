const data=[
    {id:1000,fullName:"Ghazi Samer",department:"Administration",level:"Senior"},
    {id:1002,fullName:"Tamara Ayoub",department:"Marketing",level:"Senior"},
    {id:1003,fullName:"Safi Walid",department:"Administration",level:"Mid-Senior"},
    {id:1004,fullName:"Omar Zaid",department:"Development",level:"Senior"},
    {id:1005,fullName:"Rana Saleh",department:"Development",level:"Junior"},
    {id:1006,fullName:"Hadi Ahmad",department:"Finance,",level:"Mid-Senior"},
    {id:1001,fullName:"Lana Ali",department:"Finance",level:"Senior"},
]
let employeeSection=document.querySelector(".main__employees");
let viewBtn=document.getElementById("view__btn");
function Employees(id,name,department,level,imgUrl="baseUrl"){
    this.id=id;
    this.name=name;
    this.department=department;
    this.level=level;
    this.imgUrl=imgUrl;
    this.salary;
}
Employees.prototype.calcSalary=function (level){
    switch (level){
        case "Senior":{
            this.salary=Math.floor((Math.random()*(2000-1500)+1500)*.7);
    break;
        }
        case "Mid-Senior":{
            this.salary=Math.floor((Math.random()*(1500-1000)+1000)*.7);
            break;
        }
        case "Junior":{
            this.salary=Math.floor((Math.random()*(1000-500)+500)*.7);
            break;
        }
        default :console.log(this.level);
    }
    }
    Employees.prototype.renderUi=function(){
        this.calcSalary(this.level);
        let employee=document.createElement("tr");
        employee.innerText=`FullName : ${this.name} Salary : ${this.salary}`;
        employeeSection.append(employee);
    }
    let employeesInstances=[];
for(let i=0;i<data.length;i++){
    employeesInstances[i]=new Employees(data[i].id,data[i].fullName,data[i].department,data[i].level);
}
console.log(employeesInstances)
