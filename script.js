script.js
function selectMessage(message) {

    document.getElementById("result").innerHTML = message;


    // 音声読み上げ
    const speech = new SpeechSynthesisUtterance(message);

    speech.lang = "ja-JP";

    speech.rate = 0.9;  // ゆっくり

    speech.pitch = 1.0;

    window.speechSynthesis.speak(speech);

}