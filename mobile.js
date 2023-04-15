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
head.innerText="MyFitnessPal iPhone App"

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
imgab.src="https://d34yn14tavczy0.cloudfront.net/assets/mobile/iphone/en_device_iphone-1b54abc5ae562dfe19b9ccff0a0d394e35a06c67a6b13b1a0c2cee5bbbfc82f4.png"
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

var iphone = [
    {
        imageurl: "https://d34yn14tavczy0.cloudfront.net/assets/mobile/iphone/en_diary_iphone5-277623a4421e4904eda6ed2e18a6ad3099f2e702858192d4878a64e7c8434154.png",
    },
    

    {
        imageurl: "https://d34yn14tavczy0.cloudfront.net/assets/mobile/iphone/en_editentry_iphone5-cff8bfdde6fbfaaf3adf3c54c63ae636dd392b271e2e9e721bffcfbc18c5aa8c.png"
    },

    {
        imageurl: "https://d34yn14tavczy0.cloudfront.net/assets/mobile/iphone/en_progress_iphone5-dc92a60211ee1e4cf358eb32f6c9d68d8f959dfd38db700b04e84c220210d7f4.png"
    },

    {
        imageurl: "https://d34yn14tavczy0.cloudfront.net/assets/mobile/iphone/en_pie_iphone5-592e7c40ef103063522b5fc36001aced22a2037d30b26341e029ba4049f463cb.png"
    }
]
  iphone.forEach(element => {
      var box=document.createElement("div")
      var img= document.createElement("img")
      img.src=element.imageurl
      img.style.width="200px"
      img.style.height="343px"
      box.append(img)
      console.log("hh")
      document.getElementById('screenshoots').append(box)
  });
//   width="200" height="343"