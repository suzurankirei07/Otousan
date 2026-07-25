script.js
function selectMessage(message) {

    document.getElementById("result").innerHTML = message;

    // iPad読み上げ
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance();

    speech.text = message;

    speech.lang = "ja-JP";

    speech.rate = 0.8;

    speech.volume = 1;

    window.speechSynthesis.speak(speech);

}