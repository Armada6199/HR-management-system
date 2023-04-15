const data=[
    {id:1000,fullName:"Ghazi Samer",department:"Administration",level:"Senior"},
    {id:1002,fullName:"Tamara Ayoub",department:"Marketing",level:"Senior"},
    {id:1003,fullName:"Safi Walid",department:"Administration",level:"Mid-Senior"},
    {id:1004,fullName:"Omar Zaid",department:"Development",level:"Senior"},
    {id:1005,fullName:"Rana Saleh",department:"Development",level:"Junior"},
    {id:1006,fullName:"Hadi Ahmad",department:"Finance,",level:"Mid-Senior"},
    {id:1001,fullName:"Lana Ali",department:"Finance",level:"Senior"},
]
function Employees(id,name,department,level,imgUrl="baseUrl"){
    this.id=id;
    this.name=name;
    this.department=department;
    this.level=level;
    this.imgUrl=imgUrl;
    this.salary;
    this.minSalary;
    this.maxSalary;
    this.netSalary;
}
Employees.prototype.calcSalary=function (level){
    switch (level){
        case "Senior":{
            this.maxSalary=2000;
            this.minSalary=1500;
            this.salary=Math.floor(Math.random()*(this.maxSalary-this.minSalary)+this.minSalary)
            this.netSalary=this.salary*0.7;
    break;
        }
        case "Mid-Senior":{
            this.minSalary=1000;
            this.maxSalary=1500;
            this.salary=Math.floor(Math.random()*(this.maxSalary-this.minSalary)+this.minSalary)
            this.netSalary=this.netSalary=this.salary*0.7;
            break;
        }
        case "Junior":{
            this.minSalary=500;
            this.maxSalary=1000;
            this.salary=Math.floor(Math.random()*(this.maxSalary-this.minSalary)+this.minSalary);
            this.netSalary=this.salary*0.7;
            break;
        }
    }
    }
    Employees.prototype.renderUi=function(){
        let employeeSection=document.querySelector(".main__employees");
        this.calcSalary(this.level);
        let employee=document.createElement("h1");
        employee.innerText=`FullName : ${this.name} ----- Salary : ${this.salary}`;
        employeeSection.append(employee);
    }
    function handleView(){
        let viewBtn=document.getElementById("view__btn");
        viewBtn.addEventListener("click",(event)=>{
            for(let i=0;i<data.length;i++){
                let newEmployee=new Employees(data[i].id,data[i].fullName,data[i].department,data[i].level)
                newEmployee.renderUi();
                console.log("Clicked")
            }
        })
    }
