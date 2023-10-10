//https://teachablemachine.withgoogle.com/models/B6f8EMflw/  Ana

//https://teachablemachine.withgoogle.com/models/DQQPaRdA5/   lalo


camera = document.getElementById("camera");

Webcam.set({
    with:350,
    height:300,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/y2eBBoawG/model.json',modelLoaded);

function modelLoaded(){
    console.log("Modelo cargado");
}

function check(){
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error)
    } else {
        console.log(results[0].confidence);
        console.log(results[0].label);

        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);

        document.getElementById("result_object").innerHTML = results[0].label;
    }
}
