alert(`Selamat datang di GAME TEBAK ANGKA
Kamu diminta untuk menebak angka 1 - 3
dan kamu akan bermain dalam 5 ronde.
Player yang berhasil menebak terbanyak akan menang.
SELAMAT BERMAIN!!!`);

// Menentukan skor player
let skorPlayer1 = 0;
let skorPlayer2 = 0;
let ronde = 1;
let stop = true;


while (stop) {
  let player1 = parseInt(prompt("Player 1: masukan angka"));
  let player2 = parseInt(prompt("Player 2: masukan angka"));

// Meangkap pilihan random computer dan rules
  let comp = getRandom();
  let ulangi = validasi(player1, player2);

  if (!ulangi) {
    stop = window.confirm("Ulangi?");
  } else {
    if (player1 !== comp && player2 !== comp) {
      alert("Tidak ada yang benar. hasil SERI");
    } else {
      if (player1 === comp) {
        alert("Player 1 MENANG");
        skorPlayer1++;
      }
      if (player2 === comp) {
        alert("Player 2 MENANG");
        skorPlayer2++;
      }
    }

// Menampilkan hasil
    alert(`
    Nilai yang dicari: ${comp}
    -----------------------------------
    - Player 1: ${skorPlayer1}
    - Player 2: ${skorPlayer2}`
    );

// Menentukan rules ronde
    ronde++;
    if (ronde <= 5) {
      stop = window.confirm("Ronde " + ronde + "?");
    } else {
      if (skorPlayer1 > skorPlayer2) {
        alert("Selamat untuk Player 1");
        stop = false;
      } else if (skorPlayer1 < skorPlayer2) {
        alert("Selamat untuk Player 2");
        stop = false;
      } else {
        alert(`Wow pertarungan yang sangat sengit`);
        ronde = 1;
        skorPlayer1 = 0;
        skorPlayer2 = 0;
        stop = window.confirm("mau main lagi?");
      }
    }
  }
}

// 
function validasi(player01, player02) {
  if (player01 === player02) {
    alert("tebakan tidak boleh sama");
    return false;
  }

  if (player01 < 1 || player02 < 1) {
    alert("tebakan tidak boleh lebih kecil dari 1");
    return false;
  }

  if (player01 > 3 || player02 > 3) {
    alert("tebakan tidak boleh lebih besar dari 3");
    return false;
  }

  if (isNaN(player01) || isNaN(player02)) {
    alert("salah satu player belum menebak");
    return false;
  }

  return true;
}

function getRandom() {
  const range = [1, 2, 3];
  let isNotRandom = true;
  while (isNotRandom) {
    let comp = Math.floor(Math.random() * 10);
    let ketemu = range.find((r) => r === comp);
    if (ketemu) {
      isNotRandom = false;
      return comp;
    }
  }
}

console.log(getRandom());
