function showName(){
  let name = JSON.parse(localStorage.getItem("userName"))
  console.log(name[name.length-1])
  document.getElementById("userName").innerText = name[name.length-1]
}
showName();
document.getElementById("calculate").addEventListener('click', cal)
function cal() {
    event.preventDefault()
    
    var weigth;
    weigth = +document.getElementById('cweigth').value;


    var feet = +document.getElementById('feet').value
    var inch = +document.getElementById('inch').value
    
  var bmi=weigth/( ((feet*0.3048)+(inch*0.02))**2)

  console.log("bmi", bmi);

  var leftSpace;

  if(bmi>50){
    leftSpace = "605";
  }else{
    leftSpace = (600/50)*bmi;
  }
 var bm=bmi.toFixed(1)
 console.log(bm)
  console.log("leftspace", leftSpace);

  var bmibox= document.createElement('div')
   var h=document.createElement('h3')
   h.innerText="Your BMI is "+bm
   var p=document.createElement("p")
   p.innerText="Target weigth range: 56.8 kg - 76.8 kg";
   p.style.marginBottom="50px";
   bmibox.append(h,p)
    var arrow = document.createElement("div");
    // arrow.style.width? = "10px";
    // arrow.style.height = "10px";
    // arrow.style.backgroundColor = "black";
    arrow.style.position = "absolute";
    arrow.style.left = `${leftSpace}px`;
    arrow.style.top = "-70px";
    arrow.setAttribute("id","arrow")

    var line = document.createElement("div")
    line.style.width = "600px";
    // line.style.height = "50px";
    line.style.backgroundColor = "white";
    line.style.position = "relative";

    line.appendChild(arrow);
    var table= document.createElement('table')
    // table.style.border="1px solid red"
    var thead= document.createElement('thead')
    var tr=document.createElement("tr")
    var th=document.createElement('th')
    // th.setAttribute("id","cth")
    th.style.backgroundColor="#f7b966"
    th.innerText="Under"
    
    var tha=document.createElement('th')
    tha.innerText="Healthy"
    tha.style.color="#fff"
    tha.style.backgroundColor="#0c9a30"
    
    var thaa=document.createElement('th')
    thaa.innerText="Over"
    thaa.style.backgroundColor="#f0f361"
    
    var thaaa=document.createElement('th')
    thaaa.style.backgroundColor="#f8812a"
    thaaa.innerText="Obese"
    thaaa.style.color="#fff"
    tr.append(th,tha,thaa,thaaa)
    thead.append(tr)
    table.append(thead)
    var tbody=document.createElement('tbody')
    var tra= document.createElement('tr')
    var td=document.createElement('td')
    td.innerText="less - 18.5"
    var tda=document.createElement('td')
    tda.innerText="18.5 - 25.0"
    var tdaa=document.createElement('td')
    tdaa.innerText="25.0 - 30.0"
    var tdaaa=document.createElement('td')
    tdaaa.innerText="30.0 - more"
    tra.append(td,tda,tdaa,tdaaa)
    tbody.append(tra)
    table.append(tbody)

    var button= document.createElement('button')
    button.innerText="Recalculate"
    var a =document.createElement('a')
    a.href="bmi.html"
    a.append(button)
    a.setAttribute("id","calculate")
    document.getElementById('main').remove()
    document.getElementById("container").append(bmibox,line, table,a);
    
 console.log(bmi)
    // console.log(weigth, feet, inch, age, sex)
}