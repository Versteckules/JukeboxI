// state.js
// Spielfortschritt-Verwaltung (localStorage) – CODE VORHANDEN, ABER DEAKTIVIERT
// Status: DEAKTIVIERT (alle aktiven Zeilen auskommentiert)
// Aktivierung: Kommentare entfernen wenn Cache live geht
// Exports: window.State = { markSolved, isSolved, getSolvedCount, solvedSongs }

// ---------------------------------------------------------------------------
// 1. Interner State
// ---------------------------------------------------------------------------
let solvedSongs = new Set(); // IDs der gelösten Songs

// ---------------------------------------------------------------------------
// 2. Lade-Funktion (DEAKTIVIERT)
// ---------------------------------------------------------------------------
/*
function loadProgress() {
  const saved = localStorage.getItem('jukebox_progress');
  if (saved) {
    solvedSongs = new Set(JSON.parse(saved));
  }
}
*/

// ---------------------------------------------------------------------------
// 3. Speicher-Funktion (DEAKTIVIERT)
// ---------------------------------------------------------------------------
/*
function saveProgress() {
  localStorage.setItem('jukebox_progress', JSON.stringify([...solvedSongs]));
}
*/

// ---------------------------------------------------------------------------
// 4. Reset-Funktion (DEAKTIVIERT)
// ---------------------------------------------------------------------------
/*
function resetProgress() {
  localStorage.removeItem('jukebox_progress');
  solvedSongs = new Set();
}
*/

// ---------------------------------------------------------------------------
let usedJokerCodes = new Set();

function markSolved(id) {
  solvedSongs.add(id);
  // saveProgress(); // DEAKTIVIERT
}

function isSolved(id) {
  return solvedSongs.has(id);
}

function getSolvedCount() {
  return solvedSongs.size;
}

function isCodeUsed(code) {
  return usedJokerCodes.has(String(code).trim());
}

function markCodeUsed(code) {
  usedJokerCodes.add(String(code).trim());
}

function getUsedCodesCount() {
  return usedJokerCodes.size;
}

function isJokerUsed() {
  return usedJokerCodes.size > 0;
}

function setJokerUsed() {
  // Kompatibilitäts-Alias
}

// Initialisierung (DEAKTIVIERT):
// loadProgress();

// ---------------------------------------------------------------------------
// 6. Export
// ---------------------------------------------------------------------------
window.State = {
  markSolved,
  isSolved,
  getSolvedCount,
  solvedSongs,
  isCodeUsed,
  markCodeUsed,
  getUsedCodesCount,
  isJokerUsed,
  setJokerUsed
};
