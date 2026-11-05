/*
  PENGATURAN UNDANGAN
  1. Ganti nilai di bawah sesuai data acara.
  2. Ganti nomor WhatsApp dengan kode negara, tanpa tanda + atau spasi.
  3. Isi mapsUrl dengan tautan Google Maps lokasi acara.
*/
const CONFIG = {
  graduateName: "Bagas Aditya Silalahi, S.Kom.",
  graduateDegree: "Sarjana Komputer (S.Kom)",
  university: "STMIK Methodist Binjai",
  eventDate: "2026-11-07T10:00:00+07:00",
  eventTime: "Pukul 08.00 WIB – selesai",
  venue: "Gedung Selecta",
  address: "Jl. Listrik No. 2, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20212",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gedung+Selecta%2C+Jl.+Listrik+No.2%2C+Petisah+Tengah%2C+Medan%2C+Sumatera+Utara+20212",
  // Nama penerima dibaca dari URL: ?untuk=Nama%20Penerima
};

const params = new URLSearchParams(window.location.search);
const recipient = params.get("untuk")?.trim() || "Tamu Undangan";
const $ = (id) => document.getElementById(id);

$("coverRecipient").textContent = recipient;
$("mainRecipient").textContent = recipient;
$("graduateName").textContent = CONFIG.graduateName;
$("footerGraduate").textContent = CONFIG.graduateName;
$("graduateDegree").textContent = CONFIG.graduateDegree;
$("graduateUniversity").textContent = CONFIG.university;
$("eventTime").textContent = CONFIG.eventTime;
$("eventTimeDetail").textContent = CONFIG.eventTime;
$("eventVenue").textContent = CONFIG.venue;
$("eventAddress").textContent = CONFIG.address;
$("mapsButton").href = CONFIG.mapsUrl;
$("year").textContent = new Date().getFullYear();

const eventDate = new Date(CONFIG.eventDate);
const dateOptions = { weekday:"long", day:"numeric", month:"long", year:"numeric", timeZone:"Asia/Jakarta" };
const fullDate = new Intl.DateTimeFormat("id-ID", dateOptions).format(eventDate);
const parts = new Intl.DateTimeFormat("id-ID", { weekday:"long", day:"2-digit", month:"long", year:"numeric", timeZone:"Asia/Jakarta" }).formatToParts(eventDate);
const part = (type) => parts.find(p => p.type === type)?.value || "";
$("eventDay").textContent = part("weekday").toUpperCase();
$("eventDate").textContent = part("day");
$("eventMonthYear").textContent = `${part("month").toUpperCase()} ${part("year")}`;
$("eventDateDetail").textContent = fullDate;


const audio = $("backgroundMusic");
const musicToggle = $("musicToggle");
const musicLabel = $("musicToggle").querySelector("span");

let musicStarted = false;

$("openInvitation").addEventListener("click", async () => {
  $("cover").classList.add("hidden");
  $("invitation").classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });

  try {
    await audio.play();
    musicStarted = true;
    musicLabel.textContent = "Jeda";
  } catch (error) {
    musicLabel.textContent = "Putar";
    console.log("Musik gagal diputar:", error);
  }
});
async function toggleMusic() {
  if (audio.paused) {
    try {
      await audio.play();
      musicStarted = true;
      musicLabel.textContent = "Jeda";
    } catch (error) {
      musicLabel.textContent = "Putar";
    }
  } else {
    audio.pause();
    musicLabel.textContent = "Putar";
  }
}
musicToggle.addEventListener("click", toggleMusic);
function updateCountdown() {
  const distance = eventDate.getTime() - Date.now();
  if (distance <= 0) {
    ["days","hours","minutes","seconds"].forEach(id => $(id).textContent = "00");
    return;
  }
  $("days").textContent = String(Math.floor(distance / 86400000)).padStart(2,"0");
  $("hours").textContent = String(Math.floor((distance % 86400000) / 3600000)).padStart(2,"0");
  $("minutes").textContent = String(Math.floor((distance % 3600000) / 60000)).padStart(2,"0");
  $("seconds").textContent = String(Math.floor((distance % 60000) / 1000)).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown, 1000);
