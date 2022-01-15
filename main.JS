function preload() {
}


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5poseNet(viedo, modelLoaded)
    poseNet.on('pose', gotposses);
}
    function modelLoaded() {
        console.log('poseNet Is Initialized');
    }

    function gotPoses(results)
 {
     if(results.length > 0)
     {
         console.log(results);
         console.log("nose")
     }
 }

function draw() {
}

function take_snapshot() {
    save('myFilterImage.png');
}


 

 