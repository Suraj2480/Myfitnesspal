function showName(){
    let name = JSON.parse(localStorage.getItem("userName"))
    console.log(name[name.length-1])
    document.getElementById("userName").innerText = name[name.length-1]
 }
 showName();
let slideDivBox = document.getElementById("slideDivBox");
let rightArrow = document.querySelector(".fa-angle-right");
let leftArrow = document.querySelector(".fa-angle-left");
leftArrow.style.color = "grey";

let circleParent = document.querySelector("#circularBox");

var i = 0;

document.querySelectorAll("#circularBox div").forEach(function(circle , index){
    circle.addEventListener("click" , function(){
        i = index;
        leftArrow.style.color = "black";
        rightArrow.style.color = "black";
        document.querySelector("#circularBox .selected").classList.remove("selected");
        circle.classList.add("selected");
        slideDivBox .style.transform = `translate(${-16.92*i}%)`;

        if(i == 0){
            leftArrow.style.color = "grey";
        }
        if(i == 4){
            rightArrow.style.color = "grey";
        }
        
    })
});


leftArrow.addEventListener("click" , function(){
    rightArrow.style.color = "black";
    if(i > 0){
        i  = i-1;
    }else {
        i = 0;
    }
    document.querySelector("#circularBox .selected").classList.remove("selected");
    circleParent.children[i].classList.add("selected");
    slideDivBox .style.transform = `translate(${-16.92*i}%)`;

    if(i == 0){
        leftArrow.style.color = "grey";
    }
})

rightArrow.addEventListener("click" , function(){
    leftArrow.style.color = "black";
    if(i < 4){
        i  = i+1;
    }else {
        i = 4;
    }
    document.querySelector("#circularBox .selected").classList.remove("selected");
    circleParent.children[i].classList.add("selected");

    slideDivBox .style.transform = `translate(${-16.92*i}%)`;

    if(i == 4){
        rightArrow.style.color = "grey";
    }
})


    let dropParaDiv = document.querySelectorAll("#dropDownContainer >.dropParaDiv");
      console.log(dropParaDiv);
        
       var flag = false;
document.querySelectorAll("#dropDownContainer >.dropDiv >div:last-child" ).forEach((arrowDiv , index) => {
            
        arrowDiv.addEventListener("click" , function(){
              dropParaDiv[index].style.display = "block";
              flag = true;
                
              if(flag){
                arrowDiv.addEventListener("click" , function(){
                    dropParaDiv[index].style.display = "none";
                    flag = false;
                    window.location.reload();
              })
            }
        })

    })

    document.getElementById("annualSubscribe").addEventListener("click" , function(){
         window.location.href = "./payment.html";
    })
     
    document.getElementById("monthlySubscribe").addEventListener("click" , function(){
        window.location.href = "./monthlyPayment.html";
   })
    






