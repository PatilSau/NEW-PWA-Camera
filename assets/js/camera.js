import {
    startBtn,
    captureBtn,
    closeBtn,
    player,
    swtichBtn,
    canvas,
    restartBtn,
    
} from './constants.js' 
// import { captureBtn, closeBtn, player, restartBtn, startBtn, swtichBtn } from "./constants.js"   
let mode = "user"


export const changeMode = (arg) =>{
   mode = mode === "user" ? "environment" : "user"
}


export const openCamera = async() => {
    if(navigator.mediaDevices){
    
    document.getElementById("loader").innerHTML= `Opening Camera <div class="spinner-border text-dark"></div>`
    startBtn.setAttribute("disabled",true)
   try {
    const strim = await navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: mode
        },
    })
    player.srcObject = strim
    
   } catch (error) {
    console.log(error);
   }
   
    document.getElementById("loader").innerHTML=""
    startBtn.removeAttribute("disabled")
}else{
    console.error("mediaDevices not supported");
}
   // handleCamera End
   player.classList.remove("d-none")
    captureBtn.classList.remove("d-none")
    closeBtn.classList.remove("d-none")
    startBtn.classList.add("d-none")
    swtichBtn.classList.remove("d-none")
 }
 export const closeCamera = () => {
    const tracks = player.srcObject.getVideoTracks()
    for (let i = 0; i < tracks.length; i++) {
     tracks[i].stop()
    }
    canvas.classList.add("d-none")

    restartBtn.classList.add("d-none")
    player.classList.add("d-none")
    captureBtn.classList.add("d-none")
    closeBtn.classList.add("d-none")
    startBtn.classList.remove("d-none")
    swtichBtn.classList.add("d-none")
 }