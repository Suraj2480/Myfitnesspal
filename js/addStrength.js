function showName(){
    let name = JSON.parse(localStorage.getItem("userName"))
    console.log(name[name.length-1])
    document.getElementById("userName").innerText = name[name.length-1]
 }
 showName();
let excerciseName;
let time;
let calBurnt;
let weight;
let exArr = [];
async function fetchAndDisplay(){
    let inputExe = document.getElementById("inputExercise").value;
    let url = `http://localhost:3000/strength?q=${inputExe}`;
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
            localStorage.setItem("addedExerciseStrength" ,"")
            localStorage.setItem("addedExerciseStrength" ,JSON.stringify(exercise))
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
            "weight":weight
        }
    localStorage.setItem("exerciseDairyStrength",JSON.stringify(obj))
    window.location.href ="exerciseDairy.html";

}

function displayCal(){
    weight = document.getElementById("weight").value
    let min = document.getElementById("time").value;
    time = min;
    let data = JSON.parse(localStorage.getItem("addedExerciseStrength"));
    excerciseName = data.name;
    let met = data.met;
    calBurnt =~~(( min *(met*3.5*50))/200)+1;
    document.getElementById("calBurnt").innerHTML = calBurnt + "cal";

}