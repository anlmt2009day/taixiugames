document.getElementById('roll-btn').addEventListener('click', function() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const dice3 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice1').src = `dice${dice1}.png`;
    document.getElementById('dice2').src = `dice${dice2}.png`;
    document.getElementById('dice3').src = `dice${dice3}.png`;

    const total = dice1 + dice2 + dice3;
    let resultText = total >= 11 ? "Tài" : "Xỉu";
    document.getElementById('result').innerText = `Kết quả: ${resultText}`;
});
document.querySelectorAll('.dice').forEach(dice => {
    dice.classList.add('roll');
    setTimeout(() => dice.classList.remove('roll'), 500);
});
document.getElementById('shake-sound').play();
