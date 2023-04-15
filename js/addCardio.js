function showName(){
    let name = JSON.parse(localStorage.getItem("userName"))
    console.log(name[name.length-1])
    document.getElementById("userName").innerText = name[name.length-1]
 }
 showName();
let excerciseName;
let time;
let calBurnt;
let exArr = [];
async function fetchAndDisplay(){
    let inputExe = document.getElementById("inputExercise").value;
    let url = `http://localhost:3000/cardio?q=${inputExe}`;
    try {
        let data = await getdata(url)
    } catch (error) {
        console.log(error)
    }
}
async function getdata(url){
    try {
        let data = await fetch(url);
        let res = await data.json();
        display(res);
    } catch (error) {
        console.log(error)
    }
}
function display(data){
    data.forEach(exercise => {
        let name = document.createElement("p")
        name.innerText = exercise.name;
        document.getElementById("searchedDataDiv").append(name)
        name.addEventListener("click" , function(){
            localStorage.setItem("addedExercise" ,"")
            localStorage.setItem("addedExercise" ,JSON.stringify(exercise))
            document.getElementById("exerciseName").append(exercise.name)
        })
    })
}
function addData(){
    let obj = 
        {
            "exname": excerciseName,
            "time" : time,
            "cal":calBurnt,
        }
    localStorage.setItem("exerciseDairy",JSON.stringify(obj))
    window.location.href ="exerciseDairy.html"

}

function displayCal(){
    let min = document.getElementById("time").value;
    time = min;
    let data = JSON.parse(localStorage.getItem("addedExercise"));
    excerciseName = data.name;
    let met = data.met;
    calBurnt =~~(( min *(met*3.5*50))/200)+1;
    document.getElementById("calBurnt").innerHTML = calBurnt + "cal";

}