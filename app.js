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
    let form=document.getElementById("main__form");
    let cardsCont=document.getElementById("main__cards");
    form.addEventListener("submit",handleSubmit)
    function handleSubmit(event){
        event.preventDefault();
       let employeeData={
        fullName:event.target.fullname.value,
        department:event.target.departments.value,
        level:event.target.levels.value,
        imgUrl:event.target.imgUrl.value
       }
        createCard(employeeData)
    }
    function createCard(employeeData){
        let card=document.createElement("div")
        card.classList.add("card");
        let imageCont=document.createElement("div");
        let cardDescCont=document.createElement("div");
        let nameCont=document.createElement("h1");
        let levelCont=document.createElement("p");
        let departmentCont=document.createElement("p");
        let img=document.createElement("img");
        nameCont.innerText=employeeData.fullName;
        departmentCont.innerText=employeeData.department;
        levelCont.innerText=employeeData.level;
        img.src=employeeData.imgUrl;
        imageCont.classList.add("image")
        imageCont.appendChild(img);
        cardDescCont.classList.add("card__desc");
        cardDescCont.append(nameCont,levelCont,departmentCont)
        card.append(imageCont,cardDescCont);
       cardsCont.append(card);
    }


