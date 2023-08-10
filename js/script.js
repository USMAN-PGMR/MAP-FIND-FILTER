

let person = prompt("Please enter your name");
if (person != null) {
  document.getElementById("person").innerHTML =
  "Hi, <b>" + person+" !</b>" ;
}
// ----year
var now= new Date();
var year= now.getFullYear();
document.getElementById("year").innerText=year;


//---------output function
const showOutput = (output) =>{
    document.getElementById('output').innerHTML=output;
}

const showInput = (input) =>{
    document.getElementById('input').innerHTML=input;
}

// ---------show toastify-----
const showToastify=(msg,color)=>{
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:color, //"linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
// ------------
let users=[
    {name:"ahmad",email:"ahmad@gmail.com",city:"Faisalabad",age:"18",id:"1"},
    {name:"ali",email:"ali@gmail.com",city:"Lahore",age:"25",id:"2"},
    {name:"Zain",email:"zain@gmail.com",city:"Faisalabad",age:"19",id:"3"},
    {name:"Noman",email:"noman@gmail.com",city:"shakpura",age:"17",id:"4"},
    {name:"Murtaza",email:"murtaza@gmail.com",city:"sangla",age:"30",id:"5"},

]
const usersString=JSON.stringify(users)


// -------------------------------------below is not use in this design,just store and save the data/code------------------------------------------- 
let user={name:"ahmad",email:"ahmad@gmail.com",city:"Faisalabad",age:"18",id:"1"}
// ---simple method

// let name=user.name
// let email=user.email
// let city=user.city
// let age=user.age
// let id=user.id

// --- De structuring Method

let {name,email,city,age,id}=user
console.log(age,city)

// ---for of        (it works on array)
for(let user of users){
    console.log(user)
}

// ---for in        (works on object)        user or prop is an element like as variable
for(let prop in user){
    console.log(user[prop])
}

// ---NESTED
for(let user of users){
    for(let prop in user){
        console.log(user[prop])
    }
}

// -----Ternary operator
let userName="usman"
        // simple
// if(userName==="usman"){
//     console.log(userName)
// }else{
//     console.log("user is not usman")
// }
// ternary---
userName==="usman" ? console.log(userName):console.log("user is not usman");         //IF ELSE
userName==="usman" && console.log(userName);                      //only IF
// ---------------------------------------Now,According to design------------------------------------


// ---MAPS----
const map=()=>{
    const numbers=[10,20,30,40,50]

    const newNumbers=numbers.map((number,i)=>{                  //.map(1st number ya data from array and 2nd is index)
        return number*2
    })
    console.log(numbers)
    console.log(newNumbers)
    
    showInput("Numbers = ["+numbers+"]")
    showOutput("New Numbers = ["+newNumbers+"]<br><br> Multiply Using Map")
       

}
// ---Template literal----
const tampLiteral=()=>{
    let firstName =prompt("Please Enter Your First Name")
    if (firstName===""||firstName===('number')||firstName.length<3) return  showToastify("Enter the Name corectly." ,"linear-gradient(to right, pink, red)")
    let lastName=prompt("please Enter Your Last Name")
    fullName=`${firstName} ${lastName}`
    console.log(fullName)
    // console.log(typeof(firstName))
    showInput('First Name : '+firstName+"<br>Last Name : "+lastName)
    showOutput("<h3><span class=text-primary>Full Name : </span><span class='text-danger'>"+ fullName+"</span></h3>")
}


// ----Filter----
const filter=()=>{
    
    // openPopup("choose the data")
    showInput('Users = '+usersString)
    let newCity = prompt("Please enter the city name","Faisalabad")
    let newUser=users.filter((user,i)=>{
        return user.city===newCity;
    })

    
    const myJSON = JSON.stringify(newUser);
    
    console.log(newUser)
    console.log(myJSON)
    showOutput('Your user =<span>'+myJSON+"</span>")
}


// -----find method---
const find=()=>{
    
    // openPopup("choose the data")
    showInput('Users = '+usersString)
    let newid = prompt("Enter the id (1-5) & get the user")
    // newid >"5" && showToastify("now user found","red");
    if(newid>5){
        showToastify("enter the id")
    }
    let newUser=users.filter((user,i)=>{
        return user.id===newid;
    })

    
    const myJSON = JSON.stringify(newUser);
    
    console.log(newUser)
    console.log(myJSON)
    showOutput('Your user = '+myJSON)
}





const tampLiteral2=()=>{}
const tampLiteral3=()=>{}

