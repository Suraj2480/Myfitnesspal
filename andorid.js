
var about= document.createElement('div')
about.setAttribute("id","aboutcontainer")

var abouta= document.createElement('div')
var head=document.createElement('h3')
head.innerText="MyFitnessPal Android App"

var fp=document.createElement("p")
fp.innerText="Our Android app gives you full mobile access to your MyFitnessPal.com account — including our entire food and exercise database — so you can log your food and exercise from anywhere, at any time! All changes made on your phone will be synchronized with our website and vice versa. Best of all, it's FREE!"
 

var a=document.createElement('a')
a.href="https://play.google.com/store/apps/details?id=com.myfitnesspal.android&rdid=com.myfitnesspal.android"

var aimg= document.createElement("img")
aimg.src="https://developer.android.com/images/brand/en_generic_rgb_wo_45.png"
a.append(aimg)

var aboutimg= document.createElement('div')
aboutimg.setAttribute("id","imagecontainer")
var imgab=document.createElement('img')
imgab.src="https://d34yn14tavczy0.cloudfront.net/assets/mobile/iphone/en_device_iphone-1b54abc5ae562dfe19b9ccff0a0d394e35a06c67a6b13b1a0c2cee5bbbfc82f4.png"
aboutimg.append(imgab)
abouta.append(head,fp,a)
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

var and = [
    {
        imageurl: "https://d34yn14tavczy0.cloudfront.net/assets/mobile/android/en_diary-0da8e5edef428e94282630a496d7573d93cb6d15d12cacd584c8f903bf15615e.png",
    },
    

    {
        imageurl: "https://d34yn14tavczy0.cloudfront.net/assets/mobile/android/en_editentry-d23d12f9c9df4652d93a617e4910e95c0d317e5f4ff64d7501f48936132d2da2.png"
    },

    {
        imageurl: "https://d34yn14tavczy0.cloudfront.net/assets/mobile/android/en_progress-994bcf48d23fbe82da862e8e52fe9069bb250ecb45caaab851773adb69a7a9ff.png"
    },

    {
        imageurl: "https://d34yn14tavczy0.cloudfront.net/assets/mobile/android/en_progress-994bcf48d23fbe82da862e8e52fe9069bb250ecb45caaab851773adb69a7a9ff.png"
    }
]
  and.forEach(element => {
      var box=document.createElement("div")
      var img= document.createElement("img")
      img.src=element.imageurl
      img.style.width="200px"
      img.style.height="341px"
      box.append(img)
      console.log("hh")
      document.getElementById('screenshoots').append(box)
  });
//   width="200" height="343"