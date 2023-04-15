function showName(){
    let name = JSON.parse(localStorage.getItem("userName"))
    console.log(name[name.length-1])
    document.getElementById("userName").innerText = name[name.length-1]
 }
 showName();
function getSum(){
    let cardio = JSON.parse(localStorage.getItem("exerciseDairy"));
    let strength = JSON.parse(localStorage.getItem("exerciseDairyStrength"));
    // append cardio
    let ct =  Number(cardio.time);
    let cc = Number(cardio.cal)
    let st = Number(strength.time)
    let sc = Number(strength.cal)
       let Ctr = document.createElement("tr");
    let Cname = document.createElement("td");
    Cname.innerText = cardio.exname;
    let Ctime = document.createElement("td");
    Ctime.innerText = cardio.time;
    let Ccal = document.createElement("td");
    Ccal.innerText = cardio.cal;
    Ctr.append(Cname,Ctime,Ccal);
    document.getElementById("tableBody").append(Ctr);
   //appen strength
    let Str = document.createElement("tr");
    let Sname = document.createElement("td");
    Sname.innerText = strength.exname;
    let Stime = document.createElement("td");
    Stime.innerText = strength.time;
    let Scal = document.createElement("td");
    Scal.innerText = strength.cal;
    Str.append(Sname,Stime,Scal);
    document.getElementById("tableBody").append(Str);
    // total
    let Ttr = document.createElement("tr");
    let Tname = document.createElement("td");
    Tname.innerText = "TOTAL";
    let Ttime = document.createElement("td");
    Ttime.innerText = 10+10+ct+st;
    let Tcal = document.createElement("td");
    Tcal.innerText = 90+198+cc+sc;
    Ttr.append(Tname,Ttime,Tcal);
    Ttr.style.fontWeight ="bold"
    document.getElementById("tableBody").append(Ttr);
}
getSum();