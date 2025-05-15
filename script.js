const whatsappLink = "https://wa.me/6285156959662"; 
const instagramLink = "https://instagram.com/kirmangesta"; 


const pages = [
  {
    title: "Halo, Grasella Marsha Prayogo 👋",
    content: `Terima kasih sudah hadir di <b>Gereja Santa Clara, Bekasi Utara</b>.  
    <br><br>
    Aku nggak terlalu jago ngomong langsung, jadi aku coba pakai cara sederhana ini.
    <br><br>
    Sebenernya... <b>aku suka sama kamu</b>. Tapi jujur aja, aku bingung harus mulai dari mana. Gimana cara ngomongnya, kapan waktu yang pas. Semua itu sempat bikin aku ragu.
    <br><br>
    Makanya, pagi tadi aku iseng bikin begini wkwkwk. Bukan sesuatu yang wah, tapi ini <i>aku</i> yang coba jujur dan pelan-pelan mulai. 
    <br>
    Kalau kata SPBU "Mulai dari 0 ya kak"
    <br><br>
    Aku cuma pengen kamu tahu, ini <b>bukan cuma iseng</b>. Aku pengen kenal kamu lebih dekat, <i>kalau kamu berkenan</i> 😊
    <div class="buttons">
        <button onclick="handleConsent(true)">Saya Berkenan 😊</button>
        <button onclick="handleConsent(false)">Maaf, Tidak Berkenan 🙁</button>
      </div>`,
    theme: "blue"
  },
  {
    title: "Kenapa Aku Suka Sama Kamu? 💙",
    content: `<i>Jujur ya, ini semua tuh berawal dari pandangan pertama.</i><br><br>
    Waktu pertama kali lihat kamu, dalam hati langsung muncul satu reaksi:<br>
    <b>“Wah, ini cewek cantik bangettt cuyy 😳✨.”</b>
    <br><br>
    Tapi langsung muncul suara kedua di kepala:  
    <i>“Eh bro, jangan cuma liat cover-nya doang, hidup bukan Gramedia sale!”</i> 😆
    <br><br>
    Soalnya menurutku, <b>cantik itu baru pintu masuk doang</b>. Yang paling penting tuh isi dalamnya. (Anjayy)
    <br><br>
    Aku pengen tahu kamu lebih jauh:  
    <ul>
      Gimana kamu ngeliat hidup ini?
      Apa yang bikin kamu semangat setiap harinya?
      Hal apa yang kamu anggap penting dan bikin kamu bangga jadi diri sendiri?
      Kamu punya mimpi apa, dan lagi ngejar apa sekarang?
    </ul>
    <br>
    Kalau kata nabi Samuel:<br>
    <i>“Manusia melihat apa yang di depan mata, tetapi TUHAN melihat hati.”</i>
    <br><br>
    Aku pengen kenal kamu <b>lebih dalam</b> karena menurutku orang itu baru bener-bener keren kalau <i>hatinya juga secantik senyumnya</i>. Dan itu cuma bisa kelihatan kalau kita punya kesempatan buat ngobrol pelan-pelan. 🙂`,
    theme: "blue"
  },
  {
    title: "Fun Fact Tentang Kamu 🍵💚",
    content: `<i>Katanya kamu suka matcha?</i> 🍵 Info dari Intel nih~
    <br><br>
    Menurutku itu menarik banget! Matcha itu rasa yang <b>nggak semua orang suka</b>, tapi kalau udah suka, susah pindah ke yang lain 😄
    <br><br>
    Matcha itu kelihatannya simpel, tapi rasanya dalam: ada pahit, manis, dan tenang.
    <br><br>
    <b>Fun fact:</b> Matcha punya sejarah lebih dari 800 tahun!  
    Dulu digunakan oleh biksu Zen Jepang untuk bantu <i>fokus saat meditasi</i>.
    <br><br>
    Jadi kalau aku fokus terus ke kamu... mungkin efek matcha juga ya? 😌
    <br><br>
    Matcha itu nggak mencolok, tapi berkesan. Tenang, tapi dalam.  
    <b>Sama kayak kamu.</b> 💚`,
    theme: "matcha"
  },
  {
    title: "Warna Favorit 💙",
    content: `<i>Katanya kamu suka warna biru?</i>  Info dari Intel nih~ wkwkwk
    <br><br>
    <b>Aku juga!</b> 💙 
    <br> Karena kamu suka warna biru, jadi page ini berubah jadi warna biru 
    <br>Warna ini tenang, tapi punya daya tarik tersendiri.
    <br><br>
    <b>Fun fact:</b> Biru itu melambangkan <i>ketenangan, kedamaian, dan kebebasan</i>.
    <br><br>
    Biru itu warna <b>langit dan laut</b>—dua hal besar dan luas yang penuh kemungkinan.  
    Sama kayak <i>kita</i> yang masih punya banyak ruang buat kenal lebih dekat. 🌊☁️`,
    theme: "blue"
  },
  {
    title: "Tumbler Spesial Buat Kamu 💧✨",
    content: `<i>Katanya kamu suka lupa minum?</i> 😅  
    <br><br>
    Makanya aku pengen kasih kamu <b>tumbler ini ~900ml penuh perhatian~ 💙</b>
    <br><br>
    Karena minum cukup air itu penting banget, bukan cuma buat tubuh, tapi juga biar kamu tetap <i>fokus dan semangat</i>.
    <br><br>
    <b>Fun fact:</b>  
    Tubuh manusia itu 60% terdiri dari air!  
    Rata-rata butuh <b>2 liter (8 gelas)</b> per hari.
    <br><br>
    Dengan tumbler ini, kamu cuma perlu isi ulang 2x sehari. Gampang kan? 😉
    <br><br>
    Jadi... jangan sampai lupa ya.  
    Anggap aja tiap tegukan itu bukan cuma buat tubuh, tapi juga <i>isi ulang semangat</i>.  
    Mungkin... ada <b>sedikit rasa perhatian</b> dariku juga di setiap tegukan. 😌 (Mohon maaf sangatt lebayy)`,
    theme: "matcha"
  },
  {
    title: "Untuk Kamu 💖",
    content: "", // Ini akan diisi oleh animasi hati
    theme: "matcha",
    isLoveBuildPage: true
  },
  {
    title: "Hubungi Aku 💌",
    content: `Kalau kamu merasa <b>nyambung, lucu, atau cuma pengin ngobrol</b>...  
    <br><br>
    Klik salah satu aja yaa 💙🍵
    <br><br>
    <br>
    Jadi... kalau kamu merasa nyaman dan pengen lanjut ngobrol, aku tunggu ya 😊`,
    theme: "matcha",
    isContactPage: true
  }
];


// ============================================
// VARIABEL GLOBAL
// ============================================
let currentPage = 0;

// ============================================
// FUNGSI UTAMA: RENDER HALAMAN
// ============================================
function renderPage() {
  const contentEl = document.getElementById("content");
  const page = pages[currentPage];


  // Tampilkan konten
  contentEl.innerHTML = `<h2 class="slide-in-title">${page.title}</h2><p>${page.content}</p>`;

  // Jika halaman terakhir, tampilkan tombol kontak
  if (page.isContactPage) {
    const contactBtns = document.createElement("div");
    contactBtns.classList.add("contact-buttons");
    contactBtns.innerHTML = `
      <a href="${whatsappLink}" target="_blank" class="contact-btn whatsapp">💬 WhatsApp</a>
      <a href="${instagramLink}" target="_blank" class="contact-btn instagram">📷 Instagram</a>
    `;
    contentEl.appendChild(contactBtns);
  }

  // Ganti tema sesuai halaman
  document.body.classList.remove("theme-blue", "theme-matcha");
  document.body.classList.add(`theme-${page.theme}`);

  // Kontrol tombol navigasi
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");

  backBtn.style.display = currentPage === 0 ? "none" : "inline-block";
  nextBtn.style.display = currentPage === pages.length - 1 ? "none" : "inline-block";

  if (page.isLoveAnimationPage) {
  contentEl.innerHTML = `<div id="loveContainer" class="love-animation-wrapper"></div>`;
  generateFlyingHearts();
}
if (page.isLoveBuildPage) {
  contentEl.innerHTML = `<div id="loveBuildContainer" class="love-build-wrapper"></div>`;
  buildHeartFromHearts();
}
function buildHeartFromHearts() {
  const container = document.getElementById("loveBuildContainer");

  const heartMatrix = [
    "00100100",
    "01111110",
    "11111111",
    "11111111",
    "01111110",
    "00111100",
    "00011000",
    "00000000"
  ]; // 8x8 grid, 1 = tampilkan heart

  const delayPerHeart = 100;
  let index = 0;

  for (let y = 0; y < heartMatrix.length; y++) {
    for (let x = 0; x < heartMatrix[y].length; x++) {
      if (heartMatrix[y][x] === "1") {
        setTimeout(() => {
          const heart = document.createElement("div");
          heart.classList.add("tiny-heart");
          heart.textContent = "❤️";
          heart.style.top = `${y * 20}px`;
          heart.style.left = `${x * 20}px`;
          container.appendChild(heart);
        }, index * delayPerHeart);
        index++;
      }
    }
  }

  // Munculkan love besar setelah semua tiny heart muncul
  setTimeout(() => {
    const bigHeart = document.createElement("div");
    bigHeart.classList.add("center-big-heart");
    bigHeart.textContent = "💖";
    container.appendChild(bigHeart);
  }, index * delayPerHeart + 1000);
}



}

// ============================================
// EVENT LISTENER TOMBOL NAVIGASI
// ============================================
document.getElementById("backBtn").addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    renderPage();
  }
});


function updatePage() {
  const page = pages[currentPageIndex];

  // Update title dan konten
  titleElement.innerHTML = page.title;
  contentElement.innerHTML = page.content;

  // Ganti background theme
  document.body.className = page.theme;

  // Khusus halaman pertama, ganti tombol
  if (currentPageIndex === 0) {
    nextBtn.style.display = "none";

    const buttonContainer = document.getElementById("button-container");
    buttonContainer.innerHTML = `
      <button id="acceptBtn">💙 Berkenan</button>
      <button id="rejectBtn">💔 Tidak Berkenan</button>
    `;

    document.getElementById("acceptBtn").addEventListener("click", () => {
      currentPageIndex++;
      updatePage();
    });

    document.getElementById("rejectBtn").addEventListener("click", () => {
      showRejectAlertSequence();
    });
  } else {
    // Reset ke tampilan tombol biasa
    nextBtn.style.display = "inline-block";

    const buttonContainer = document.getElementById("button-container");
    buttonContainer.innerHTML = "";
  }

  // Sembunyikan tombol Prev di halaman pertama
  prevBtn.style.display = currentPageIndex === 0 ? "none" : "inline-block";

  // Sembunyikan tombol Next di halaman terakhir
  nextBtn.style.display =
    currentPageIndex === pages.length - 1 ? "none" : nextBtn.style.display;
}

function showRejectAlertSequence() {
  const messages = [
    "😥 Beneran nih nggak berkenan?",
    "😢 Yakin masih nggak berkenan?",
    "😶 Coba dipikir-pikir lagi dehh...",
    "😔 Masa iya segitunya...",
    "😩 Aku udah coba jujur lohh...",
    "😐 Yahh, beneran ditolak nih?",
    "😅 Nggak penasaran sama halaman selanjutnya?",
    "😬 Oke dehh, tapi inget ya... aku udah berani jujur :)",
    "🥺 Tapi... aku tetap doain yang terbaik buat kamu kok~",
    "😇 Semoga kamu bahagia dengan siapa pun yang kamu pilih ya!"
  ];

  let i = 0;

  function showNextAlert() {
    if (i < messages.length) {
      alert(messages[i]);
      i++;
      setTimeout(showNextAlert, 100); // kasih delay sedikit biar lucu
    }
  }

  showNextAlert();
}

// ============================================
// ANIMASI EMOJI JATUH
// ============================================
function createFloatingEmoji() {
  const emojis = ["🍵", "✨", "💖", "💙"];
  const emoji = document.createElement("div");

  emoji.classList.add("emoji");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = Math.random() * 16 + 16 + "px";
  emoji.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.getElementById("emojiContainer").appendChild(emoji);

  setTimeout(() => emoji.remove(), 7000);
}


// Jalankan emoji setiap 500ms
setInterval(createFloatingEmoji, 500);

// ============================================
// MULAI HALAMAN PERTAMA
// ============================================
renderPage();
