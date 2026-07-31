/* ==========================================================================
   MY CAREER CAMPUS — RIASEC Career Interest Test
   script.js
   ========================================================================== */

/* ============================================================
   1. DATA: PERTANYAAN & MAPPING KATEGORI RIASEC
   ============================================================ */

// 42 pernyataan tes, index array 0 = soal nomor 1, dst.
const QUESTIONS = [
  "Saya suka pekerjaan yang berkaitan dengan mesin/kendaraan.",
  "Saya suka dengan teka-teki.",
  "Saya mampu bekerja secara mandiri.",
  "Saya suka bekerja dalam kelompok.",
  "Saya adalah seorang yang ambisius, saya menetapkan tujuan untuk diri sendiri.",
  "Saya suka mengorganisir suatu hal (dokumen, meja/alat kerja).",
  "Saya suka untuk membuat/membangun sesuatu.",
  "Saya suka membaca tentang kesenian dan musik.",
  "Saya menyukai instruksi yang jelas untuk diikuti.",
  "Saya suka untuk mempengaruhi/meyakinkan orang lain.",
  "Saya suka bereksperimen.",
  "Saya suka mengajar dan melatih orang.",
  "Saya suka mencoba untuk membantu orang lain dalam menyelesaikan/memecahkan masalah.",
  "Saya suka merawat binatang.",
  "Saya tidak keberatan bekerja 8 jam dalam satu hari di kantor.",
  "Saya suka menjual berbagai macam barang.",
  "Saya menggemari menulis kreatif.",
  "Saya menyukai/memiliki minat pada bidang sains.",
  "Saya cepat beradaptasi dengan tanggung jawab baru.",
  "Saya tertarik untuk menyembuhkan orang lain.",
  "Saya senang mencari tahu bagaimana segala sesuatu dapat berfungsi.",
  "Saya suka menyusun atau merakit sesuatu.",
  "Saya adalah orang yang kreatif.",
  "Saya memperhatikan hal-hal secara terperinci/detail.",
  "Saya suka melakukan pengarsipan atau mengetik data.",
  "Saya suka menganalisis sesuatu (permasalahan atau situasi).",
  "Saya suka memainkan instrumen musik atau menyanyi.",
  "Saya suka mempelajari budaya lain.",
  "Saya ingin memulai bisnis saya sendiri.",
  "Saya suka memasak.",
  "Saya suka bermain peran/akting.",
  "Saya merupakan orang yang praktis.",
  "Saya suka bekerja dengan angka dan grafik.",
  "Saya suka berdiskusi mengenai berbagai permasalahan.",
  "Saya mampu menyimpan catatan pekerjaan saya dengan baik.",
  "Saya suka memimpin.",
  "Saya suka bekerja di luar ruangan.",
  "Saya lebih menginginkan bekerja di dalam kantor.",
  "Saya pandai dalam bidang matematika.",
  "Saya suka menolong orang lain.",
  "Saya suka menggambar.",
  "Saya suka memberi ceramah/berbicara di depan umum."
];

// Mapping nomor soal (1-based) ke masing-masing kategori RIASEC
const RIASEC_MAPPING = {
  R: [1, 7, 14, 22, 30, 32, 37],
  I: [2, 11, 18, 21, 26, 33, 39],
  A: [8, 17, 23, 27, 31, 41],
  S: [4, 12, 13, 20, 28, 34, 40],
  E: [5, 10, 16, 19, 29, 36, 42],
  C: [6, 9, 15, 24, 25, 35, 38]
};

// Informasi deskriptif tiap kategori RIASEC, digunakan pada halaman hasil
const CATEGORY_INFO = {
  R: {
    name: "Realistic",
    color: "#7C3AED",
    desc: "Kamu menyukai kegiatan praktis, menggunakan alat, mesin, atau bekerja dengan tangan. Kamu cenderung menyukai aktivitas fisik, suka bekerja di luar ruangan, serta lebih menyukai hal-hal konkret dibanding teori.",
    majors: ["Teknik Mesin", "Teknik Sipil", "Pertanian", "Teknik Otomotif", "Kehutanan"],
    professions: [
      "Robotics Engineer", "Automation Engineer", "Mechatronics Engineer",
      "IoT (Internet of Things) Specialist", "Renewable Energy Engineer",
      "Cybersecurity Specialist", "Network Engineer", "Cloud Infrastructure Engineer",
      "Drone Pilot / Drone Specialist", "AR/VR Developer", "Smart Manufacturing Engineer",
      "Automotive Engineer (Electric Vehicle)", "Industrial Engineer",
      "Field Service Engineer", "Technical Support Engineer"
    ],
    trait: "menyukai aktivitas praktis dan bekerja dengan tangan"
  },
  I: {
    name: "Investigative",
    color: "#7C3AED",
    desc: "Kamu senang berpikir logis, menganalisis sesuatu, memecahkan masalah, serta memiliki rasa ingin tahu yang tinggi. Kamu menyukai kegiatan yang membutuhkan penelitian, pengamatan, dan pemikiran yang mendalam.",
    majors: ["Digital Psychology", "Psikologi", "Kedokteran", "Informatika", "Biologi", "Farmasi"],
    professions: [
      "Data Scientist", "AI Engineer", "Machine Learning Engineer", "UX Researcher",
      "Behavioral Scientist", "Digital Psychology Research Scientist", "Bioinformatician",
      "Data Analyst", "AI Ethics Researcher"
    ],
    trait: "menyukai aktivitas analitis dan penelitian mendalam"
  },
  A: {
    name: "Artistic",
    color: "#7C3AED",
    desc: "Kamu memiliki jiwa kreatif dan ekspresif. Kamu menyukai seni, musik, tulisan, dan hal-hal yang memungkinkanmu berimajinasi bebas tanpa terikat aturan yang kaku.",
    majors: ["Digital Psychology", "Desain Komunikasi Visual", "Seni Rupa", "Sastra", "Film", "Musik"],
    professions: [
      "UI/UX Designer", "Product Designer", "Content Creator", "Digital Illustrator",
      "Motion Graphic Designer", "Game Designer", "Creative Director", "Brand Strategist",
      "Video Producer", "Prompt Designer (Creative AI)"
    ],
    trait: "menyukai ekspresi kreatif dan hal-hal artistik"
  },
  S: {
    name: "Social",
    color: "#7C3AED",
    desc: "Kamu senang membantu, mengajar, dan berinteraksi dengan orang lain. Kamu peduli terhadap kesejahteraan orang di sekitarmu dan senang bekerja dalam tim.",
    majors: ["Digital Psychology", "Psikologi", "Pendidikan", "Keperawatan", "Pekerjaan Sosial", "Bimbingan Konseling"],
    professions: [
      "Psychologist", "Counselor", "Teacher/Lecturer", "Career Coach",
      "HR Development Specialist", "Learning Experience Designer", "Community Manager",
      "Customer Success Manager", "Mental Health Practitioner", "Digital Psychologist",
      "UX Researcher", "Behavioral Researcher", "Digital Well-being Specialist",
      "People Experience Specialist", "Human-AI Interaction Specialist",
      "Behavioral Insights Consultant", "Digital Mental Health Specialist"
    ],
    trait: "senang membantu dan berinteraksi dengan orang lain"
  },
  E: {
    name: "Enterprising",
    color: "#7C3AED",
    desc: "Kamu adalah pribadi yang ambisius, suka memimpin, dan pandai meyakinkan orang lain. Kamu tertarik pada bisnis, kepemimpinan, dan tantangan untuk mencapai suatu tujuan.",
    majors: ["Manajemen", "Bisnis", "Hukum", "Ilmu Komunikasi", "Hubungan Internasional"],
    professions: [
      "Entrepreneur", "Tech Entrepreneur", "Startup Founder", "Product Manager",
      "Business Development Manager", "Growth Marketing Manager", "Digital Marketing Strategist",
      "Brand Manager", "Product Marketing Manager", "Innovation Consultant",
      "Management Consultant", "E-commerce Manager", "Sales Manager", "Partnership Manager",
      "Customer Experience (CX) Manager", "Venture Capital Analyst",
      "Corporate Innovation Specialist", "Business Intelligence Consultant",
      "AI Product Manager", "Digital Transformation Consultant"
    ],
    trait: "memiliki potensi memimpin dan berkomunikasi persuasif"
  },
  C: {
    name: "Conventional",
    color: "#7C3AED",
    desc: "Kamu menyukai keteraturan, data, dan hal-hal yang terstruktur. Kamu teliti, rapi, dan nyaman bekerja dengan sistem, angka, maupun administrasi.",
    majors: ["Digital Psychology", "Akuntansi", "Administrasi Bisnis", "Sistem Informasi", "Perbankan", "Statistika"],
    professions: [
      "Business Analyst", "People Analytics Specialist", "Financial Analyst",
      "Project Management Officer (PMO)", "Data Governance Specialist",
      "Risk & Compliance Analyst", "AI Operations (AI Ops) Specialist", "HRIS Specialist",
      "Digital Assessment Specialist", "Operations Analyst"
    ],
    trait: "menyukai keteraturan, data, dan ketelitian administratif"
  }
};

const STORAGE_KEY = "myCareerCampus_riasecData";

/* ============================================================
   2. STATE APLIKASI
   ============================================================ */

let state = {
  answers: {}      // { "1": "ya", "2": "tidak", ... }
};


/* ============================================================
   3. LOCAL STORAGE HELPERS
   ============================================================ */

function saveStateToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("Gagal menyimpan data ke localStorage:", e);
  }
}

function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.answers) {
        state = parsed;
      }
    }
  } catch (e) {
    console.warn("Gagal memuat data dari localStorage:", e);
  }
}

function clearStateStorage() {
  localStorage.removeItem(STORAGE_KEY);
  state = { answers: {} };
}

/* ============================================================
   4. NAVIGASI ANTAR HALAMAN
   ============================================================ */

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(function (el) {
    el.classList.remove("active");
  });
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

/* ============================================================
   5. HALAMAN TES — RENDER PERTANYAAN & PROGRESS
   ============================================================ */

function renderQuestions() {
  const container = document.getElementById("questions-container");
  container.innerHTML = "";

  QUESTIONS.forEach(function (text, idx) {
    const qNum = idx + 1;
    const savedAnswer = state.answers[qNum];

    const card = document.createElement("div");
    card.className = "question-card card" + (savedAnswer ? " answered" : "");
    card.id = "question-" + qNum;

    card.innerHTML =
      '<div class="question-top">' +
        '<span class="question-number">' + qNum + '</span>' +
        '<p class="question-text">' + text + '</p>' +
      '</div>' +
      '<div class="answer-options">' +
        '<label class="answer-option' + (savedAnswer === "ya" ? " selected" : "") + '" data-q="' + qNum + '" data-val="ya">' +
          '<input type="radio" name="q' + qNum + '" value="ya"' + (savedAnswer === "ya" ? " checked" : "") + '>' +
          '<span>Ya</span>' +
        '</label>' +
        '<label class="answer-option' + (savedAnswer === "tidak" ? " selected" : "") + '" data-q="' + qNum + '" data-val="tidak">' +
          '<input type="radio" name="q' + qNum + '" value="tidak"' + (savedAnswer === "tidak" ? " checked" : "") + '>' +
          '<span>Tidak</span>' +
        '</label>' +
      '</div>';

    container.appendChild(card);
  });

  // Delegasikan event perubahan jawaban
  container.addEventListener("change", handleAnswerChange);
  updateProgress();
}

function handleAnswerChange(e) {
  const input = e.target;
  if (input.type !== "radio") return;

  const qNum = input.name.replace("q", "");
  const value = input.value;

  state.answers[qNum] = value;
  saveStateToStorage();

  // Update tampilan kartu & opsi terpilih
  const card = document.getElementById("question-" + qNum);
  card.classList.add("answered");
  card.classList.remove("unanswered-flag");

  card.querySelectorAll(".answer-option").forEach(function (opt) {
    opt.classList.toggle("selected", opt.dataset.val === value);
  });

  updateProgress();
}

function updateProgress() {
  const total = QUESTIONS.length;
  const answered = Object.keys(state.answers).length;
  const percent = Math.round((answered / total) * 100);

  document.getElementById("progress-count").textContent = answered + " / " + total + " Pertanyaan";
  document.getElementById("progress-percent").textContent = percent + "%";
  document.getElementById("progress-bar-fill").style.width = percent + "%";
}

function handleLihatHasil() {
  const unanswered = [];
  for (let i = 1; i <= QUESTIONS.length; i++) {
    if (!state.answers[i]) unanswered.push(i);
  }

  if (unanswered.length > 0) {
    Swal.fire({
      icon: "warning",
      title: "Masih ada pertanyaan yang belum dijawab",
      text: "Terdapat " + unanswered.length + " pertanyaan yang belum Anda jawab. Mohon lengkapi seluruh pertanyaan terlebih dahulu.",
      confirmButtonColor: "#7C3AED"
    });

    // Tandai & scroll ke pertanyaan pertama yang belum dijawab
    const firstUnansweredCard = document.getElementById("question-" + unanswered[0]);
    document.querySelectorAll(".unanswered-flag").forEach(function (el) {
      el.classList.remove("unanswered-flag");
    });
    unanswered.forEach(function (num) {
      const c = document.getElementById("question-" + num);
      if (c) c.classList.add("unanswered-flag");
    });
    if (firstUnansweredCard) {
      firstUnansweredCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }

  computeAndRenderResults();
  playCompletionSound();
  showPage("page-hasil");
}

/* ============================================================
   7. PERHITUNGAN SKOR & HALAMAN HASIL
   ============================================================ */

function computeScores() {
  const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

  Object.keys(RIASEC_MAPPING).forEach(function (letter) {
    RIASEC_MAPPING[letter].forEach(function (qNum) {
      if (state.answers[qNum] === "ya") {
        scores[letter] += 1;
      }
    });
  });

  return scores;
}

function computeAndRenderResults() {
  // --- Skor & urutan ---
  const scores = computeScores();
  const sorted = Object.keys(scores)
    .map(function (letter) { return { letter: letter, score: scores[letter] }; })
    .sort(function (a, b) { return b.score - a.score; });

  const maxScore = Math.max.apply(null, sorted.map(function (s) { return s.score; })) || 1;

  // --- Deteksi kasus skor seimbang/berulang: jika skor peringkat ke-3 dan ke-4
  //     sama besar, artinya batas "3 tipe teratas" jadi ambigu (mis. 7-7-7-7-7-6) ---
  const isBalanced = sorted[2].score === sorted[3].score;

  // --- Kode RIASEC (3 huruf skor tertinggi), atau label khusus jika seimbang ---
  const code = isBalanced ? "SEIMBANG" : sorted.slice(0, 3).map(function (s) { return s.letter; }).join("");
  document.getElementById("riasec-code").textContent = code;

  // --- Daftar skor terurut ---
  const scoreListEl = document.getElementById("score-list");
  scoreListEl.innerHTML = sorted.map(function (s) {
    const info = CATEGORY_INFO[s.letter];
    const widthPercent = Math.round((s.score / maxScore) * 100);
    return (
      '<div class="score-row">' +
        '<span class="score-row-label">' + info.name + ' (' + s.letter + ')</span>' +
        '<div class="score-row-track"><div class="score-row-fill" style="width:' + widthPercent + '%"></div></div>' +
        '<span class="score-row-value">' + s.score + '</span>' +
      '</div>'
    );
  }).join("");

  // --- Kartu interpretasi (3 tertinggi), atau pesan khusus jika seimbang ---
  renderInterpretationCards(sorted.slice(0, 3), isBalanced);

  // --- Kesimpulan otomatis ---
  renderKesimpulan(sorted.slice(0, 3), code, isBalanced);
}

function renderInterpretationCards(top3, isBalanced) {
  const container = document.getElementById("interpretation-cards");

  if (isBalanced) {
    container.innerHTML =
      '<div class="balanced-message">' +
        '<p>Kamu memiliki minat yang seimbang pada beberapa bidang.</p>' +
        '<p>Artinya, kamu nyaman mempelajari berbagai jenis aktivitas, mulai dari praktik langsung, analisis, kreativitas, hingga bekerja sama dengan orang lain.</p>' +
        '<p>Hasil ini menunjukkan bahwa kamu memiliki banyak pilihan jurusan dan karier untuk dieksplorasi.</p>' +
      '</div>';
    return;
  }

  container.innerHTML = top3.map(function (s) {
    const info = CATEGORY_INFO[s.letter];
    return (
      '<div class="interpretation-card">' +
        '<div class="interp-letter-badge">' + s.letter + '</div>' +
        '<p class="interp-name">' + info.name + '</p>' +
        '<p class="interp-desc">' + info.desc + '</p>' +
        '<p class="interp-subheading">Recommended Majors</p>' +
        '<ul class="interp-list">' + info.majors.map(function (m) { return "<li>" + m + "</li>"; }).join("") + '</ul>' +
        '<p class="interp-subheading">Career Opportunities</p>' +
        '<ul class="interp-list">' + info.professions.map(function (p) { return "<li>" + p + "</li>"; }).join("") + '</ul>' +
      '</div>'
    );
  }).join("");
}

function renderKesimpulan(top3, code, isBalanced) {
  const kesimpulanEl = document.getElementById("kesimpulan-text");

  if (isBalanced) {
    kesimpulanEl.innerHTML =
      '<p>Kamu memiliki minat yang seimbang pada beberapa bidang.</p>' +
      '<p>Artinya, kamu nyaman mempelajari berbagai jenis aktivitas, mulai dari praktik langsung, analisis, kreativitas, hingga bekerja sama dengan orang lain.</p>' +
      '<p>Hasil ini menunjukkan bahwa kamu memiliki banyak pilihan jurusan dan karier untuk dieksplorasi.</p>';
    return;
  }

  const names = top3.map(function (s) { return CATEGORY_INFO[s.letter].name; });
  const traits = top3.map(function (s) { return CATEGORY_INFO[s.letter].trait; });

  const majorsSet = [];
  top3.forEach(function (s) {
    CATEGORY_INFO[s.letter].majors.slice(0, 2).forEach(function (m) {
      if (majorsSet.indexOf(m) === -1) majorsSet.push(m);
    });
  });

  const namesText = names.length === 3
    ? names[0] + ", " + names[1] + ", dan " + names[2]
    : names.join(", ");

  const traitsText = traits.length === 3
    ? traits[0] + ", " + traits[1] + ", serta " + traits[2]
    : traits.join(", ");

  const majorsText = majorsSet.slice(0, 5).join(", ");

  const paragraph1 =
    "Berdasarkan hasil tes, Anda memiliki kecenderungan minat jurusan pada tipe " + namesText + " (" + code + ").";
  const paragraph2 =
    "Hal ini menunjukkan bahwa Anda cenderung " + traitsText + ".";
  const paragraph3 =
    "Bidang studi seperti " + majorsText + " dapat menjadi pilihan yang sesuai dengan karakteristik Anda.";

  kesimpulanEl.innerHTML =
    "<p><strong>" + paragraph1 + "</strong></p><p>" + paragraph2 + "</p><p>" + paragraph3 + "</p>";
}

/* ============================================================
   8. AKSI HALAMAN HASIL: CETAK, DOWNLOAD PDF, ULANGI, BERANDA
   ============================================================ */

function handleCetak() {
  window.print();
}

function handleDownloadPDF() {
  const target = document.getElementById("hasil-print-area");

  Swal.fire({
    title: "Menyiapkan PDF...",
    allowOutsideClick: false,
    didOpen: function () { Swal.showLoading(); }
  });

  // scale 1.5 sudah cukup tajam untuk dibaca & dicetak, tapi jauh lebih ringan dari scale 2
  html2canvas(target, { scale: 1.5, backgroundColor: "#ffffff", useCORS: true }).then(function (canvas) {
    // JPEG kualitas 0.92 jauh lebih kecil ukurannya dibanding PNG, tanpa kehilangan kualitas yang terlihat
    const imgData = canvas.toDataURL("image/jpeg", 0.92);
    const { jsPDF } = window.jspdf;

    // Gunakan satu halaman PDF dengan ukuran yang menyesuaikan tinggi konten,
    // sehingga tidak ada bagian yang terpotong di antara halaman.
    const pdfWidthMM = 210; // lebar setara A4
    const pdfHeightMM = (canvas.height * pdfWidthMM) / canvas.width;

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [pdfWidthMM, pdfHeightMM]
    });

    pdf.addImage(imgData, "JPEG", 0, 0, pdfWidthMM, pdfHeightMM);

    const fileName = "Hasil_RIASEC_MajorMatch_" + new Date().toISOString().slice(0, 10) + ".pdf";
    pdf.save(fileName);
    Swal.close();
  }).catch(function (err) {
    console.error(err);
    Swal.fire({
      icon: "error",
      title: "Gagal membuat PDF",
      text: "Terjadi kesalahan saat membuat file PDF. Silakan coba lagi.",
      confirmButtonColor: "#7C3AED"
    });
  });
}

function handleUlangiTes() {
  Swal.fire({
    icon: "question",
    title: "Ulangi Tes?",
    text: "Seluruh jawaban Anda akan dihapus dan Anda akan memulai tes dari awal.",
    showCancelButton: true,
    confirmButtonText: "Ya, ulangi",
    cancelButtonText: "Batal",
    confirmButtonColor: "#7C3AED",
    cancelButtonColor: "#9CA3AF"
  }).then(function (result) {
    if (result.isConfirmed) {
      clearStateStorage();
      showPage("page-landing");
    }
  });
}

function handleKembaliBeranda() {
  showPage("page-landing");
}

/* ============================================================
   9. AUDIO ENGINE — MUSIK LATAR (CALMING) & BUNYI KLIK TOMBOL
   Dibuat menggunakan Web Audio API (disintesis langsung, tanpa
   file audio eksternal) supaya tetap ringan & bisa jalan offline.
   ============================================================ */

let audioCtx = null;
let musicMasterGain = null;
let musicTimeoutId = null;
let musicPlaying = false;
let musicMuted = false;
let firstInteractionHandled = false;

const MUSIC_VOLUME = 0.16;
// Tangga nada pentatonis (C-D-E-G-A + oktaf) — kombinasi nada apa pun tetap terdengar tenang & tidak dissonan
const CHIME_SCALE = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33];

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

// Bunyi klik pendek & lembut untuk setiap tombol
function playClickSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 680;

    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.14, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.12);
  } catch (e) {
    console.warn("Gagal memutar bunyi klik:", e);
  }
}

// Bunyi khusus (bukan klik) saat pengguna selesai menjawab seluruh soal
// dan berhasil masuk ke halaman hasil — chime lembut 3 nada naik.
function playCompletionSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 — chime "berhasil"

    notes.forEach(function (freq, i) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;

      const startTime = now + i * 0.13;
      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.16, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.55);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.6);
    });
  } catch (e) {
    console.warn("Gagal memutar bunyi selesai:", e);
  }
}

// Musik latar calming versi baru: wind-chime pentatonis yang lembut —
// beda karakter dari pad drone sebelumnya. Nada dipetik satu per satu
// dengan jeda santai & sedikit acak, seperti lonceng angin yang tenang.
function startBackgroundMusic() {
  const ctx = getAudioContext();
  if (!ctx || musicPlaying) return;

  musicMasterGain = ctx.createGain();
  musicMasterGain.gain.value = musicMuted ? 0 : MUSIC_VOLUME;
  musicMasterGain.connect(ctx.destination);

  musicPlaying = true;
  scheduleNextChime();
}

function playChimeNote() {
  const ctx = getAudioContext();
  if (!ctx || !musicMasterGain) return;

  const freq = CHIME_SCALE[Math.floor(Math.random() * CHIME_SCALE.length)];
  const now = ctx.currentTime;

  // Nada utama
  const osc = ctx.createOscillator();
  osc.type = "sine";
  osc.frequency.value = freq;

  // Overtone lembut supaya terdengar seperti lonceng, bukan nada datar
  const overtone = ctx.createOscillator();
  overtone.type = "sine";
  overtone.frequency.value = freq * 2.01;

  const noteGain = ctx.createGain();
  const overtoneGain = ctx.createGain();

  noteGain.gain.setValueAtTime(0.0001, now);
  noteGain.gain.exponentialRampToValueAtTime(0.5, now + 0.06);
  noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

  overtoneGain.gain.setValueAtTime(0.0001, now);
  overtoneGain.gain.exponentialRampToValueAtTime(0.1, now + 0.06);
  overtoneGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

  osc.connect(noteGain);
  overtone.connect(overtoneGain);
  noteGain.connect(musicMasterGain);
  overtoneGain.connect(musicMasterGain);

  osc.start(now);
  overtone.start(now);
  osc.stop(now + 3.3);
  overtone.stop(now + 2.3);
}

function scheduleNextChime() {
  if (!musicPlaying) return;
  playChimeNote();
  const nextDelay = 1800 + Math.random() * 1800; // 1.8–3.6 detik, santai & tidak monoton
  musicTimeoutId = setTimeout(scheduleNextChime, nextDelay);
}

function setMusicIcon() {
  const icon = document.getElementById("music-icon");
  const btn = document.getElementById("btn-music-toggle");
  if (!icon || !btn) return;
  icon.textContent = musicMuted ? "🔇" : "🔊";
  btn.classList.toggle("muted", musicMuted);
}

function toggleMusic() {
  if (!musicPlaying) {
    startBackgroundMusic();
    musicMuted = false;
  } else {
    musicMuted = !musicMuted;
  }
  const ctx = getAudioContext();
  if (musicMasterGain && ctx) {
    musicMasterGain.gain.linearRampToValueAtTime(musicMuted ? 0 : MUSIC_VOLUME, ctx.currentTime + 0.4);
  }
  setMusicIcon();
}

// Browser modern memblokir audio otomatis sebelum ada interaksi pengguna,
// jadi musik latar baru dimulai begitu pengguna melakukan klik pertama.
function handleFirstInteraction() {
  if (firstInteractionHandled) return;
  firstInteractionHandled = true;
  getAudioContext();
  if (!musicMuted) {
    startBackgroundMusic();
  }
  setMusicIcon();
}

/* ============================================================
   10. INISIALISASI & EVENT LISTENERS
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  loadStateFromStorage();
  renderQuestions();

  // Bunyi klik untuk semua tombol & opsi jawaban di seluruh halaman
  document.addEventListener("click", function (e) {
    handleFirstInteraction();
    const clickable = e.target.closest(".btn, .answer-option, .music-toggle");
    if (clickable) playClickSound();
  });

  document.getElementById("btn-mulai").addEventListener("click", function () {
    showPage("page-petunjuk");
  });

  document.getElementById("btn-kembali-2").addEventListener("click", function () {
    showPage("page-landing");
  });

  document.getElementById("btn-mulai-tes").addEventListener("click", function () {
    showPage("page-test");
  });

  document.getElementById("btn-lihat-hasil").addEventListener("click", handleLihatHasil);

  document.getElementById("btn-cetak").addEventListener("click", handleCetak);
  document.getElementById("btn-download-pdf").addEventListener("click", handleDownloadPDF);
  document.getElementById("btn-ulangi").addEventListener("click", handleUlangiTes);
  document.getElementById("btn-beranda").addEventListener("click", handleKembaliBeranda);
  document.getElementById("btn-music-toggle").addEventListener("click", toggleMusic);
});
