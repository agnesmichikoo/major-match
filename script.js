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
    professions: ["Insinyur", "Mekanik", "Ahli Agronomi", "Pilot", "Atlet"],
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

  // --- Deteksi kasus skor seimbang (semua 6 kategori bernilai sama) ---
  const isBalanced = sorted.every(function (s) { return s.score === sorted[0].score; });

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
    "<p>" + paragraph1 + "</p><p>" + paragraph2 + "</p><p>" + paragraph3 + "</p>";
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

  html2canvas(target, { scale: 2, backgroundColor: "#ffffff", useCORS: true }).then(function (canvas) {
    const imgData = canvas.toDataURL("image/png");
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

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
let musicOscillators = [];
let musicPlaying = false;
let musicMuted = false;
let firstInteractionHandled = false;

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

// Musik latar calming: pad lembut beberapa nada dengan modulasi volume pelan (efek "breathing")
function startBackgroundMusic() {
  const ctx = getAudioContext();
  if (!ctx || musicPlaying) return;

  musicMasterGain = ctx.createGain();
  musicMasterGain.gain.value = musicMuted ? 0 : 0.045;
  musicMasterGain.connect(ctx.destination);

  // Akor lembut: C4, E4, G4, B4 (Cmaj9-ish pad)
  const notes = [261.63, 329.63, 392.0, 493.88];

  notes.forEach(function (freq, i) {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;

    const noteGain = ctx.createGain();
    noteGain.gain.value = 0.7 / notes.length;

    // LFO pelan untuk efek "napas" pada volume tiap nada
    const lfo = ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.06 + i * 0.015;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.12;

    lfo.connect(lfoGain);
    lfoGain.connect(noteGain.gain);

    osc.connect(noteGain);
    noteGain.connect(musicMasterGain);

    osc.start();
    lfo.start();

    musicOscillators.push(osc, lfo);
  });

  musicPlaying = true;
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
    musicMasterGain.gain.linearRampToValueAtTime(musicMuted ? 0 : 0.045, ctx.currentTime + 0.4);
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
