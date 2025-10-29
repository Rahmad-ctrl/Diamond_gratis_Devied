var warna = [
  '#e67e22', // Warna oranye
  '#3498db', // Warna biru
  '#9b59b6', // Warna ungu
  '#e74c3c', // Warna merah
];

// Pilih warna acak dari array
var warnaAcak = warna[Math.floor(Math.random() * warna.length)];

// Terapkan warna ke background body
document.body.style.backgroundColor = warnaAcak;

