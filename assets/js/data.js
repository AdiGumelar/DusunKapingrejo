// Data dari input
// Konfigurasi global Chart.js agar selaras dengan tema modern
if (window.Chart) {
  Chart.defaults.font.family = "'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";
  Chart.defaults.font.size = 12;
  Chart.defaults.color = "#5b7263";
  Chart.defaults.plugins.legend.display = false;
  Chart.defaults.elements.bar.borderRadius = 8;
  Chart.defaults.elements.bar.borderSkipped = false;
  Chart.defaults.elements.bar.borderWidth = 0;
}

const dataPendidikan = [
  5, 1, 4, 5, 5, 4, 5, 1, 1, 5, 4, 5, 4, 4, 1, 1, 1, 3, 3, 3, 8, 5, 3, 5, 3, 3, 3, 5, 4, 5, 5, 2, 5, 5, 5, 1, 2, 5, 2, 1, 5, 3, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 3, 5, 2, 1, 5, 5, 2, 1, 5, 5, 5, 5, 4, 2, 5, 5, 2, 4, 4, 5, 2, 7, 7, 3, 4, 3,
  2, 7, 8, 1, 5, 4, 2, 3, 5, 1, 3, 3, 5, 4, 3, 4, 4, 5, 5, 4, 2, 1, 5, 5, 1, 3, 3, 5, 5, 3, 2, 3, 3, 4, 5, 7, 1, 1, 5, 5, 1, 3, 3, 1, 5, 5, 5, 3, 5, 4, 5, 4, 5, 5, 5, 3, 1, 5, 5, 2, 1, 5, 5, 4, 3, 2, 1, 3, 3, 4, 4, 5, 5, 1, 5, 5, 1, 5, 8,
  1, 1, 3, 4, 2, 3, 5, 7, 1, 4, 4, 1, 1, 3, 1, 4, 3, 3, 4, 4, 7, 8, 5, 8, 5, 5, 4, 1, 4, 4, 2, 1, 5, 5, 3, 3, 5, 5, 4, 2, 1, 6, 4, 5,
];

const dataGender = [
  2, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 1, 1, 2,
  2, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 1, 2,
  1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1,
];

const pekerjaanData = [
  88, 1, 9, 9, 3, 88, 15, 1, 1, 9, 9, 15, 3, 3, 1, 1, 9, 2, 84, 2, 88, 15, 9, 2, 3, 3, 9, 2, 3, 6, 2, 3, 3, 15, 2, 1, 19, 2, 3, 1, 9, 9, 3, 1, 3, 9, 9, 1, 3, 15, 15, 1, 9, 9, 1, 3, 9, 15, 15, 3, 1, 9, 2, 88, 2, 3, 3, 15, 2, 3, 9, 2, 3, 3,
  5, 74, 3, 88, 88, 9, 16, 88, 1, 9, 1, 3, 88, 15, 1, 9, 2, 1, 1, 9, 2, 15, 15, 9, 2, 3, 1, 88, 15, 1, 19, 2, 15, 15, 3, 3, 9, 2, 15, 1, 15, 1, 1, 88, 15, 1, 9, 2, 1, 9, 9, 15, 2, 1, 3, 88, 2, 3, 15, 15, 1, 1, 15, 2, 3, 1, 6, 2, 1, 3, 3, 1,
  9, 2, 1, 1, 88, 88, 1, 6, 2, 1, 5, 2, 1, 1, 88, 9, 3, 9, 1, 15, 1, 88, 2, 1, 1, 9, 9, 1, 9, 2, 15, 15, 4, 2, 3, 1, 3, 7, 3, 9, 19, 19, 3, 1, 1, 15, 9, 2, 9, 2, 3, 3, 1, 4, 2, 88,
];

// Kategori pendidikan berdasarkan kode yang diberikan
const kategoriPendidikan = [
  "Tidak / Belum sekolah",
  "Belum tamat SD / Sederajat",
  "Tamat SD / Sederajat",
  "SLTP / Sederajat",
  "SLTA / Sederajat",
  "Diploma I / II",
  "Akademi / Diploma III / Sarjana Muda",
  "Diploma IV / Strata I",
  "Strata II",
  "Strata III",
];

// Kategori jenis kelamin
const kategoriGender = ["Laki-laki", "Perempuan"];

// Kategori pekerjaan berdasarkan keterangan yang diberikan
const kategoriPekerjaan = [
  "Belum / Tidak Bekerja", // 1
  "Pelajar / Mahasiswa", // 2
  "Petani / Pekebun", // 9
  "Mengurus Rumah Tangga", // 2
  "Karyawan Swasta", // 15
  "Wiraswasta", // 88
  "Buruh Harian Lepas", // 19
  "Tentara Nasional Indonesia (TNI)", // 6
  "Pegawai Negeri Sipil (PNS)", // 5
  "Pensiunan", // 4
  "Pedagang", // 84
  "Perawat", // 74
  "Karyawan BUMN", // 16
  "Kepolisian RI (POLRI)", // 7
];

// Menghitung jumlah orang per kategori pekerjaan
const kategoriCount = new Array(kategoriPekerjaan.length).fill(0);

pekerjaanData.forEach((pekerjaan) => {
  // Peta pekerjaan ke indeks kategori
  const indexMap = {
    1: 0, // Belum / Tidak Bekerja
    2: 1, // Pelajar / Mahasiswa
    9: 2, // Petani / Pekebun
    3: 3, // Mengurus Rumah Tangga (jika ada data 3)
    15: 4, // Karyawan Swasta
    88: 5, // Wiraswasta
    19: 6, // Buruh Harian Lepas
    6: 7, // Tentara Nasional Indonesia (TNI)
    5: 8, // Pegawai Negeri Sipil (PNS)
    4: 9, // Pensiunan
    84: 10, // Pedagang
    74: 11, // Perawat
    16: 12, // Karyawan BUMN
    7: 13, // Kepolisian RI (POLRI)
  };

  const index = indexMap[pekerjaan];
  if (index !== undefined) {
    kategoriCount[index]++;
  }
});

// Hitung jumlah orang di setiap kategori pendidikan
const jumlahPerKategoriPendidikan = new Array(10).fill(0);
dataPendidikan.forEach(function (pendidikan) {
  if (pendidikan >= 1 && pendidikan <= 10) {
    jumlahPerKategoriPendidikan[pendidikan - 1]++;
  }
});

// Hitung jumlah orang berdasarkan jenis kelamin
const jumlahPerKategoriGender = [0, 0]; // [Laki-laki, Perempuan]
dataGender.forEach(function (gender) {
  if (gender === 1) {
    jumlahPerKategoriGender[0]++; // Laki-laki
  } else if (gender === 2) {
    jumlahPerKategoriGender[1]++; // Perempuan
  }
});

// Data usia yang diberikan
const usiaData = [
  33, 10, 49, 43, 22, 39, 38, 18, 2, 54, 56, 27, 23, 22, 60, 58, 67, 64, 67, 62, 46, 45, 49, 44, 18, 16, 58, 56, 19, 55, 47, 13, 21, 30, 29, 2, 40, 35, 11, 8, 54, 55, 33, 26, 20, 62, 52, 26, 19, 29, 26, 3, 54, 47, 28, 19, 85, 51, 48, 20, 6,
  57, 58, 42, 42, 22, 9, 32, 30, 8, 50, 50, 26, 19, 47, 42, 15, 43, 40, 66, 32, 31, 4, 54, 29, 16, 32, 27, 4, 68, 63, 40, 33, 68, 72, 40, 33, 48, 40, 18, 8, 41, 31, 6, 53, 53, 29, 27, 21, 13, 72, 66, 42, 40, 38, 13, 7, 35, 36, 9, 44, 36, 8,
  62, 58, 60, 54, 27, 21, 52, 50, 28, 43, 45, 21, 10, 43, 41, 18, 10, 55, 56, 30, 27, 19, 14, 66, 64, 43, 33, 36, 43, 14, 45, 44, 18, 43, 39, 15, 14, 49, 44, 24, 74, 40, 38, 13, 48, 42, 14, 11, 72, 66, 43, 72, 66, 42, 40, 70, 58, 33, 33,
  32, 29, 25, 86, 46, 37, 15, 10, 45, 36, 80, 73, 54, 56, 33, 26, 20, 86, 82, 44,
];

// Rentang usia
const rentangUsia = ["0-10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70", "71-80", "81-90"];

// Menghitung jumlah orang per rentang usia
const rentangCount = new Array(rentangUsia.length).fill(0);

usiaData.forEach((usia) => {
  if (usia >= 0 && usia <= 10) rentangCount[0]++;
  else if (usia >= 11 && usia <= 20) rentangCount[1]++;
  else if (usia >= 21 && usia <= 30) rentangCount[2]++;
  else if (usia >= 31 && usia <= 40) rentangCount[3]++;
  else if (usia >= 41 && usia <= 50) rentangCount[4]++;
  else if (usia >= 51 && usia <= 60) rentangCount[5]++;
  else if (usia >= 61 && usia <= 70) rentangCount[6]++;
  else if (usia >= 71 && usia <= 80) rentangCount[7]++;
  else if (usia >= 81 && usia <= 90) rentangCount[8]++;
});

// Data agama yang diberikan
const agamaData = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 2, 3, 2, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3,
];

// Kategori agama berdasarkan keterangan yang diberikan
const kategoriAgama = [
  "Islam", // 1
  "Kristen", // 2
  "Katholik", // 3
  "Hindhu", // 4
  "Budha", // 5
  "Khonghucu", // 6
  "Lainnya", // 7
];

// Menghitung jumlah orang per kategori agama
const agamaCount = new Array(kategoriAgama.length).fill(0);

agamaData.forEach((agama) => {
  if (agama >= 1 && agama <= 7) {
    agamaCount[agama - 1]++; // Menyesuaikan indeks (1-7 menjadi 0-6)
  }
});

// Buat chart untuk pendidikan
const ctxPendidikan = document.getElementById("pendidikanChart").getContext("2d");
const pendidikanChart = new Chart(ctxPendidikan, {
  type: "bar",
  data: {
    labels: kategoriPendidikan, // Label untuk kategori pendidikan
    datasets: [
      {
        label: "Jumlah Orang",
        data: jumlahPerKategoriPendidikan, // Data jumlah orang per kategori
        backgroundColor: "rgba(46, 163, 89, 0.25)",
        borderColor: "rgba(17, 101, 48, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Buat chart untuk jenis kelamin
const ctxGender = document.getElementById("genderChart").getContext("2d");
const genderChart = new Chart(ctxGender, {
  type: "bar",
  data: {
    labels: kategoriGender, // Label untuk kategori gender
    datasets: [
      {
        label: "Jumlah Orang",
        data: jumlahPerKategoriGender, // Data jumlah orang berdasarkan gender
        backgroundColor: ["rgba(46, 163, 89, 0.25)", "rgba(144, 197, 114, 0.35)"],
        borderColor: ["rgba(17, 101, 48, 1)", "rgba(86, 142, 60, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Grafik Pekerjaan
const pekerjaanCtx = document.getElementById("pekerjaanChart").getContext("2d");
new Chart(pekerjaanCtx, {
  type: "bar",
  data: {
    labels: kategoriPekerjaan, // Menggunakan kategori pekerjaan sebagai label
    datasets: [
      {
        label: "Jumlah",
        data: kategoriCount, // Menggunakan kategoriCount sebagai data
        backgroundColor: "rgba(46, 163, 89, 0.55)",
        borderColor: "rgba(17, 101, 48, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Grafik Usia
const usiaCtx = document.getElementById("usiaChart").getContext("2d");
new Chart(usiaCtx, {
  type: "bar",
  data: {
    labels: rentangUsia, // Menggunakan rentang usia sebagai label
    datasets: [
      {
        label: "Jumlah",
        data: rentangCount, // Menggunakan rentangCount sebagai data
        backgroundColor: "rgba(93, 170, 111, 0.58)",
        borderColor: "rgba(35, 119, 58, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Grafik Agama
const agamaCtx = document.getElementById("agamaChart").getContext("2d");
new Chart(agamaCtx, {
  type: "bar",
  data: {
    labels: kategoriAgama, // Menggunakan kategori agama sebagai label
    datasets: [
      {
        label: "Jumlah",
        data: agamaCount, // Menggunakan agamaCount sebagai data
        backgroundColor: "rgba(46, 163, 89, 0.55)",
        borderColor: "rgba(17, 101, 48, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
