function showName(){
    let name = JSON.parse(localStorage.getItem("userName"))
    console.log(name[name.length-1])
    document.getElementById("userName").innerText = name[name.length-1]
 }
 showName();
var about= document.createElement('div')
about.setAttribute("id","aboutcontainer")

var abouta= document.createElement('div')
var head=document.createElement('h3')
head.innerText="MyFitnessPal iPad App"

var fp=document.createElement("p")
fp.innerText="Reach your weight loss goals with MyFitnessPal, the best calorie counter on the iPhone. Set a daily calorie goal and record your daily food and exercise to make sure you stay on track. Then watch the pounds come off!"

var sp=document.createElement("p")
sp.innerText="Our iPhone app gives you full mobile access to your MyFitnessPal.com account, so you can log your food and exercise from anywhere, at any time. All changes made on your iPhone will be synchronized with our website and vice versa."

var tp=document.createElement("p")
tp.innerText="Best of all, both the iPhone app and our website are FREE! So don't wait - start changing your life today."

var a=document.createElement('a')
a.href="https://apps.apple.com/us/app/calorie-counter-diet-tracker/id341232718?ign-mpt=uo%3D4"

var aimg= document.createElement("img")
aimg.src="https://d34yn14tavczy0.cloudfront.net/assets/apps/badges/ios_appstore_en-be3d57a9ea437b2adbd683c03a0ad76603e3a4efff09ea2fee8cad932da3a855.png"
a.append(aimg)

var aboutimg= document.createElement('div')
aboutimg.setAttribute("id","imagecontainer")
var imgab=document.createElement('img')

imgab.src="https://d34yn14tavczy0.cloudfront.net/assets/mobile/ipad/en/en-top-ipad-d51e953a4a7929dd183264ce5657801d72727e03a9303ac10756328fbbf31e4d.png"
aboutimg.append(imgab)
abouta.append(head,fp,sp,tp,a)
about.append(abouta,aboutimg)
document.getElementById('maincontainer').append(about)
// mainbox.append(about,aboutimg)

var mainbox=document.createElement('div')
mainbox.setAttribute("id","screnderals")
var h=document.createElement('h3')
h.innerText="Screenshoots"
var imagebox=document.createElement('div')
imagebox.setAttribute("id","screenshoots")
mainbox.append(h,imagebox)
document.getElementById('maincontainer').appendChild(mainbox)

var ipad = [
    {
        imageurl:"https://d34yn14tavczy0.cloudfront.net/assets/mobile/ipad/en/en-diary-ipad-2db4b0b46b5b749fd6ffab3ab92c463f2e2d86edfb9e55fa0d67777f6db781f4.png"
    },
    

    {
        imageurl:"https://d34yn14tavczy0.cloudfront.net/assets/mobile/ipad/en/en-weekly-ipad-c6f2c8382307ca11303193f28ea06aeb9629a886198b38918248a620712b0777.png"
    },

    {
        imageurl: "https://d34yn14tavczy0.cloudfront.net/assets/mobile/ipad/en/en-edit-ipad-51ba81ededf51d054bb629978ed34aebfc3254d9f8f764f5456e8dc42b3d1e64.png"
    },

    {
        imageurl: "https://d34yn14tavczy0.cloudfront.net/assets/mobile/ipad/en/en-progress-ipad-9a6453c5b14a81355d9e86e4817f8794b0216637b499f207a0427b16c887ae50.png"
    }
]
  ipad.forEach(element => {
      var box=document.createElement("div")
      var img= document.createElement("img")
      img.src=element.imageurl
      img.style.width="400px"
      img.style.height="300px"
      box.append(img)
      console.log("hh")
      document.getElementById('screenshoots').append(box)
  });
//   width="200" height="343"