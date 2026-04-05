let score = 0;

function checkAnswer(value) {
    if (value === 1) {
        score++;
    }

    document.getElementById("result").innerText =
        "Score : " + score;
}
