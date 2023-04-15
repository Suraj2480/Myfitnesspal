// let p = document.createElement("p")
// p.innerText = `Friday,May 27 ,2022 `

// document.getElementById("diplayDate").append(p);

function showName(){
    let name = JSON.parse(localStorage.getItem("userName"))
    console.log(name[name.length-1])
    document.getElementById("userName").innerText = name[name.length-1]
 }
 showName();
function dateDec(ele) {
    ele--;
    document.getElementById("displayDate").innerText = `Friday,May ${ele} ,2022 `;
    return ele;
    // document.getElementById("displayDate").append(ele)
}
function dateInc(ele) {
    ele++;
    document.getElementById("displayDate").innerText = `Friday,May ${ele} ,2022 `;
    return ele;
}
function dispTableCardio() {
    let data = JSON.parse(localStorage.getItem("exerciseDairy"));
    console.log(data)
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    tdName.innerText = data.exname;
    let tdtime = document.createElement("td")
    tdtime.innerText = data.time;
    let tdcal = document.createElement("td");
    tdcal.innerText = data.cal;
    let tdButton = document.createElement("td");
    let button = document.createElement("button");
    button.innerText = "-";
    button.addEventListener("click", function () {
        localStorage.setItem("exerciseDairy", "")
        window.location.reload();
    })


    tdButton.append(button);
    tr.append(tdName, tdtime, tdcal, tdButton);
    document.getElementById("cardio").append(tr)
}
dispTableCardio();
function dispTableStrength() {
    let data = JSON.parse(localStorage.getItem("exerciseDairyStrength"));
    console.log(data + "data in func")
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    tdName.innerText = data.exname;
    let tdtime = document.createElement("td")
    tdtime.innerText = data.time;
    let tdcal = document.createElement("td");
    tdcal.innerText = data.cal;
    let tdButton = document.createElement("td");
    let button = document.createElement("button");
    button.innerText = "-";
    button.addEventListener("click", function () {
        localStorage.setItem("exerciseDairyStrength", "")
        window.location.reload();
    })


    tdButton.append(button);
    tr.append(tdName, tdtime, tdcal, tdButton);
    document.getElementById("strengthTraining").append(tr)
}
dispTableStrength();
function Showreport(){
    window.location.href= "report.html"
   let cardio =  JSON.parse(localStorage.getItem("addedExercise"));
   let strength = JSON.parse(localStorage.getItem("addedExercise"));
}