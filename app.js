let employeeSection=document.querySelector(".main__employees");
let form=document.getElementById("main__form");
let cardsCont=document.getElementById("main__cards");
let viewBtn=document.getElementById("view__btn");
let employeesArr=[]
let seedData=[
{id:1000,name:"Ghazi Samer",department:"Administration",level:"senior",imgUrl:'./assets/Administration.jpg'},
{id:1002,name:"Tamara Ayoub",department:"Marketing",level:"senior",imgUrl:'./assets/marketing.png'},
{id:1003,name:"Safi Walid",department:"Administration",level:"mid-senior" ,imgUrl:'./assets/Administration.jpg'},
{id:1004,name:"Omar Zaid",department:"Development",level:"senior" ,imgUrl:'./assets/Developer.webp'},
{id:1005,name:"Rana Saleh",department:"Development",level:"Junior" ,imgUrl:'./assets/Developer.webp'},
{id:1006,name:"Hadi Ahmad",department:"Finance,",level:"mid-senior" ,imgUrl:'./assets/finance.jpg'},
{id:1001,name:"Lana Ali",department:"Finance",level:"senior" ,imgUrl:'./assets/finance.jpg'}
];
let data=[];
function Employees(id,name,department,level,imgUrl="baseUrl"){
    this.id=id; 
    this.name=name;
    this.department=department;
    this.level=level;
    this.imgUrl=imgUrl;
    this.salary=0;
    this.calcSalary(this.level)
}
Employees.prototype.calcSalary=function(level){
    switch (level){
        case "senior":{
            this.salary=Math.floor((Math.random()*(2000-1500)+1500)*.7);
    break;
        }
        case "mid-senior":{
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
    for(let i=0;i<seedData.length;i++){
        data.push(new Employees(seedData[i].id,seedData[i].name,seedData[i].department,seedData[i].level,seedData[i].imgUrl))
    }
  
     function getFromLocal(){
        let localData=JSON.parse(localStorage.getItem('employees'))
        if(localData!==null) {
            for(let i=0;i<localData.length;i++){
                let employee=new Employees(localData[i].id,localData[i].name,localData[i].department,localData[i].level,localData[i].imgUrl)
             employeesArr.push(employee)
            } 
            employeesArr.concat(data);
        }else employeesArr=data;
      return employeesArr;
    }
    getFromLocal();
    createCards(employeesArr)
    form.addEventListener("submit",handleSubmit)
    function handleSubmit(event){
        event.preventDefault();
       let employeesData={
        id:generateId(),
        fullName:event.target.fullname.value,
        department:event.target.departments.value,
        level:event.target.levels.value,
        imgUrl:event.target.imgUrl.value
       };
       let employee=new Employees(employeesData.id,employeesData.fullName,employeesData.department,employeesData.level,employeesData.imgUrl);
       employeesArr.push(employee)
       addToLocal();
       createCards(employeesArr);
    }
    function generateId(){
        return Math.floor(Math.random()*10000)  
    }
    function addToLocal(){
        console.log(employeesArr)
        let data=JSON.stringify(employeesArr);
        localStorage.setItem("employees",data);
    }    
    function createCards(employeesArr){
        cardsCont.innerHTML=""
        for(let i=0;i<employeesArr.length;i++){
            let card=document.createElement("div");
            card.classList.add("card");
            let imageCont=document.createElement("div");
            let cardDescCont=document.createElement("div");
            let nameCont=document.createElement("h1");
            let levelCont=document.createElement("p");
            let departmentCont=document.createElement("p");
            let img=document.createElement("img");
            let idCont=document.createElement("p");
            let salaryCont=document.createElement('p');
            salaryCont.innerText=employeesArr[i].salary;
            idCont.innerText=generateId();
            nameCont.innerText=employeesArr[i].name;
            departmentCont.innerText=employeesArr[i].department;
            levelCont.innerText=employeesArr[i].level;
            img.src=employeesArr[i].imgUrl;
            imageCont.classList.add("image");
            imageCont.appendChild(img);
            cardDescCont.classList.add("card__desc");
            cardDescCont.append(nameCont,idCont,levelCont,salaryCont,departmentCont)
            card.append(imageCont,cardDescCont);
           cardsCont.append(card);
        }
        
    }

