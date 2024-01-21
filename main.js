function preload() {

}

function draw() {
    image(video, 0, 0, 800, 465);
}

function setup() {
    canvas = createCanvas(800, 465);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(800, 465);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotresults);

}

function take_snapshot() {
    save('sara.png');
}

function modelloaded() {
    console.log("posenet is initialized");
}

function gotresults(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nosex = " + results[0].pose.nose.x);
        console.log("nosey = " + results[0].pose.nose.y);
    }
}