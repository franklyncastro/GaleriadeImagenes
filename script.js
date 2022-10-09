const fulImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("ful-img");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
}

function closeImg(){
    fulImgBox.style.display = "none";
}

