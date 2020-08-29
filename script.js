const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass to video elements, then play

async function selectMediaStream(){
    try{

        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }
    catch(error){
            //Catch Error Here
            console.log("Whoopss!!!", error);
    }
}


button.addEventListener('click', async () =>{
    // Disable the button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// Calling the function
selectMediaStream();