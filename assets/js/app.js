import {
    startBtn,
    captureBtn,
    closeBtn,
    player,
    swtichBtn,
    canvas,
    restartBtn,
   
} from './constants.js' 

import {openCamera, closeCamera, changeMode} from './camera.js'

swtichBtn.addEventListener("click", ()=>{
    // mode = mode === "environment" ? "user" : "environment"
    changeMode()
    player.classList.add("d-none")
     const tracks = player.srcObject.getVideoTracks()
    for (let i = 0; i < tracks.length; i++) {
     tracks[i].stop()
    }
    openCamera()
})

startBtn.addEventListener("click", () => {
    console.log("Start button clicked");
    openCamera()
    // handleCamera start
   
    
 


    // player.setAttribute("src", "./1.mp4.mp4")

    player.classList.remove("d-none")
    captureBtn.classList.remove("d-none")
    closeBtn.classList.remove("d-none")
    startBtn.classList.add("d-none")
    swtichBtn.classList.remove("d-none")
 })
captureBtn.addEventListener("click", () => {
    const preview = canvas.getContext("2d")
    preview.drawImage(player, 0,0 , canvas.width, canvas.height )
    canvas.classList.remove("d-none")
    player.classList.add("d-none")
    captureBtn.classList.add("d-none")
    restartBtn.classList.remove("d-none")
 })
closeBtn.addEventListener("click", () => {
   closeCamera()
 })
 restartBtn.addEventListener("click", ()=> {
    closeCamera()
    openCamera()
 })




