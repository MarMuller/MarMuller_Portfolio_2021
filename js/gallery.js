let galleryArt= new Array();
let i = 0
while(i<=30){
  if (i<=9) {
    galleryArt[i]="../../images/art/preview/gallery_00"+i+".png";
    i++;
  } else {
    galleryArt[i]="../../images/art/preview/gallery_0"+i+".png";
    i++;
  }
}

let galleryDesign= new Array();
let a = 0
while(a<=30){
  if (a<=9) {
    galleryDesign[a]="../../images/design/preview/gallery_00"+a+".png";
    a++;
  } else {
    galleryDesign[a]="../../images/design/preview/gallery_0"+a+".png";
    a++;
  }
}

let galleryCoding= new Array();
let e = 0
while(e<=30){
  if (e<=9) {
    galleryCoding[e]="../../images/coding/preview/gallery_00"+e+".png";
    e++;
  } else {
    galleryCoding[e]="../../images/codign/preview/gallery_0"+e+".png";
    e++;
  }
}


//Pick up Image Number
function pickImage(num) {
  let imageNum = num;
  var imgLarge = document.getElementById("imgLarge");
  imgLarge.className = "img-large-view"+imageNum;
}
