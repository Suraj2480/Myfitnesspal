function showName(){
    let name = JSON.parse(localStorage.getItem("userName"))
    console.log(name[name.length-1])
    document.getElementById("userName").innerText = name[name.length-1]
 }
 showName();
// image slider
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("featured-image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}



var featuresapps = [{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_1_10_0_45741.png",
    heading: "Fitbit",
    type: "Activity Tracker",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_1_10_0_9523.png",
    heading: "Garmin...",
    type: "Activity Trackers",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_389_1_10_0_31181.png",
    heading: "VeSync",
    type: " ",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_392_1_10_0_97000.png",
    heading: "Renpho...",
    type: " ",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_1_10_0_84885.png",
    heading: "Strava",
    type: "Fitness Apps",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_1_10_0_3668.png",
    heading: "MapMyRun",
    type: "Fitness Apps",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_102_1_10_0_44251.png",
    heading: "RunKeeper",
    type: "Fitness Apps",
    link: "GET"
}
]
featuresapps.forEach(element => {
    var box = document.createElement('div')
    box.setAttribute("class","flexpro")
    var box2= document.createElement('div')
    box2.setAttribute("class","imageclass")
    var box1= document.createElement('div')
    box1.setAttribute('class','content')
    var img = document.createElement('img')
    img.src = element.imageurl

    var head = document.createElement('h4')
    head.innerText = element.heading
    var type = document.createElement("p")
    type.innerText = element.type
    var a= document.createElement('a')
    a.href="appgallery.html"

    var link = document.createElement('button')
    link.innerText = element.link
    a.append(link)
    box1.append(head, type, a)
    box2.append(img)
    box.append(box2,box1)
    
    document.getElementById("submainapps").append(box)
});
var appmarket = [{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_1_10_0_45741.png",
    heading: "Fitbit",
    type: "Activity Tracker",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_1_10_0_9523.png",
    heading: "Garmin...",
    type: "Activity Trackers",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_110_1_10_0_74815.png",
    heading: "MapMyFitness",
    type: "Fitness Apps",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_182_1_10_0_90660.png",
    heading: "MapMyWall",
    type: "Fitness Apps",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_184_1_10_0_61431.png",
    heading: "MapMyRide",
    type: "Fitness Apps",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_139_1_10_0_10915.png",
    heading: "Withings...",
    type: "Activity Trackers",
    link: "GET"
},


{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_389_1_10_0_31181.png",
    heading: "VeSync",
    type: " ",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_392_1_10_0_97000.png",
    heading: "Renpho...",
    type: " ",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_1_10_0_84885.png",
    heading: "Strava",
    type: "Fitness Apps",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_1_10_0_3668.png",
    heading: "MapMyRun",
    type: "Fitness Apps",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_102_1_10_0_44251.png",
    heading: "RunKeeper",
    type: "Fitness Apps",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_331_1_10_0_52964.png",
    heading: "Polar Flow",
    type: "Activity Trackers",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_2_1_10_0_87968.png",
    heading: "Runtastic",
    type: "Fitness Apps",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_280_1_10_0_42653.png",
    heading: "Pacer...",
    type: "Activity Tracker",
    link: "GET"
},
{
    imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_86_1_10_0_19952.png",
    heading: "xID",
    type: "Fitness Apps",
    link: "GET"
}
]
appmarket.forEach(element => {
    var box = document.createElement('div')
    box.setAttribute("class","flexpro")
    var box2= document.createElement('div')
    box2.setAttribute("class","imageclass")
    var box1= document.createElement('div')
    box1.setAttribute('class','content')
    var img = document.createElement('img')
    img.src = element.imageurl

    var head = document.createElement('h4')
    head.innerText = element.heading
    var type = document.createElement("p")
    type.innerText = element.type
    var a=document.createElement("a")
    a.href="appgallery.html"
    var link = document.createElement('button')
    link.innerText = element.link
    a.append(link)
    box1.append(head, type, a)
    box2.append(img)
    box.append(box2,box1)
    
    document.getElementById("appmarket").append(box)

});

// var appmarket2 = [
//     {
//         imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_282_1_10_0_81543.png",
//         heading: "Misfit",
//         type: "Activity Trackers",
//         link: "GET"

//     },
//     {
//         imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_281_1_10_0_11521.png",
//         heading: "Accupedo Pedometer",
//         type: "Activity Trackers",
//         link: "GET"
//     },
//     {
//         imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_130_1_10_0_23647.png",
//         heading: "Glow",
//         type: "Fertility",
//         link: "GET"
//     },
//     {
//         imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_306_1_10_0_49537.png",
//         heading: "TrainingPeaks",
//         type: "Fitness Apps",
//         link: "GET"
//     },
//     {
//         imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_244_1_10_0_67858.png",
//         heading: "Runmeter",
//         type: "Fitness Apps",
//         link: "GET"
//     },
//     {
//         imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_246_1_10_0_32703.png",
//         heading: "Walkmeter",
//         type: "Fitness Apps",
//         link: "GET"
//     },
//     {
//         imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_247_1_10_0_36368.png",
//         heading: "Cyclemeter",
//         type: "Fitness Apps",
//         link: "GET",
//     },
//     {
//         imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_249_1_10_0_64451.png",
//         heading: "5K Runner",
//         type: "Fitness Apps",
//         link: "GET"
//     },
//     {
//         imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_164_1_10_0_23928.png",
//         heading: "Wahoo RFLKT",
//         type: "Wearables",
//         link: "GET"
//     },
//     {
//         imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_167_1_10_0_65358.png",
//         heading: "Wahoo Balance Scale",
//         type: "Scale",
//         link: "GET"
//     },
//     {
//         imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_client_62_1_10_0_1001.png",
//         heading: "Digifit",
//         type: "Fitness Apps",
//         link: "GET"
//     },
//     {
//         imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_131_1_10_0_56482.png",
//         heading: "RunDouble C25K",
//         type: "Fitness Apps",
//         link: "GET",
//     },
//     {
//         imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_168_1_10_0_67666.png",
//         heading: "PEAR Sports Training",
//         type: "Fitness Apps",
//         link: "GET"
//     },
//     {
//         imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_client_23_1_10_0_1001.png",
//         heading: "FINIS Swimsense",
//         type: "Wearables",
//         link: "Connect"
//     },
//     {
//         imageurl: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_25_1_10_0_53376.png",
//         heading: "RHYTHM+ Heart Rate Monitor",
//         type: "Wearables",
//         link: "Connect"
//     }

// ]
// appmarket2.forEach(element => {
//     var box = document.createElement('div')
//     var img = document.createElement('img')
//     img.src = element.imageurl
//     var head = document.createElement('h3')
//     head.innerText = element.heading
//     var type = document.createElement("p")
//     type.innerText = element.type
//     var link = document.createElement('button')
//     link.innerText = element.link
//     box.append(img, head, type, link)
//     document.getElementById("appmarket2").append(box)

// });
 