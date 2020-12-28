//=============================================================================\\
//                          Background video changer JS                         \\
//                              made by nullcheats                               \\
//================================================================================\\

/*
As you can see here we have a bool "RemoveVideo" & and array called "Videos"
The array "Videos" simply has video paths (currently Videos\video.mp4)
The bool "RemoveVideo" simply just means should that video be allowed to play again
with the bool RemoveVideo = true will not allow it to be re played | false = able to replay
*/
var RemoveVideo = false;
const Videos = ['Videos\\fightXX.mp4', 'Videos\\HXH AMV.mp4' , 'Videos\\Kod.mp4','Videos\\LogEdit.mp4','Videos\\Naruto.mp4', 'Videos\\owo.mp4']

/*
As you can see in this function this just simply locates video ID
This will also invoke the other function "GetRandomVideo"
*/
const LoadVideo = () => {
    BG_video = document.getElementById("Video");
    GetRandomVideo();
}

/*
This function simply plays the video upon being invoked
This function is called by a button click (play button)
*/
const PlayVideo = () => {
    BG_video.play();
}

/*
This function simply pauses the video upon being invoked
This function is called by a button click (pause button)
*/
const PauseVideo = () => {
    BG_video.pause();
}

/*
This is the main function where the video is selected at random
The video is selected at random via the array contents
As you can see here this will also replace the file extension / path for the video name
As you can also see 2 functions are invoked here also "UpdatedVideoSource" & "UpdatevideoTitle"
UpdateVideoSource takes 1 parameter "filename" this is the video to play
UpdateVideoTitle takes 1 parameter "name" 
At the bottom you can see that is the RemoveVideo is true it will remove that video from array
*/
const GetRandomVideo = () => {
    var VideoIndex = Math.floor((Math.random() * Videos.length));
    var VideoInformation = Videos[VideoIndex];
    var VideoName = VideoInformation.replace(".mp4", "").replace("Videos\\", "");
    var VideoFile = VideoInformation;
    UpdateVideoSource(VideoFile);
    UpdateVideoTitle(VideoName);
    if (RemoveVideo)
    Videos.splice(VideoIndex);
}

/*
This is a simple function that will update the video source to the newer video
This function is called from "GetRandomVideo"
*/
const UpdateVideoSource = (filename) => {
    BG_video.src = filename;
}

/*
This is a simple function that will update the title tag with video name
This function is called from "GetRandomVideo"
*/
const UpdateVideoTitle = (name) => {
    document.getElementById("Name").innerText = name;
}

/*
This is a simple function that will simply change the volume according to the slider value
This is called upon the onchange event from the rangeslider
The audio value is dividied by 100 as volume is from 0-1 and slider is 0-100
*/
function ChangeVolume(val) {
    BG_video.volume = val / 100;
}
