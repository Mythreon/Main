console.log("Mythreon 2025")
const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const SEMITONES = {
  "1": 0, "b2": 1, "2": 2, "#2": 3, "b3": 3, "3": 4,
  "4": 5, "#4": 6, "b5": 6, "5": 7, "#5": 8,
  "b6": 8, "6": 9, "bb7": 9, "b7": 10, "7": 11,
  "8": 12, "9": 14, "11": 17, "13": 21
};

const chordFormulas = {
  "maj": ["1", "3", "5"],
  "min": ["1", "b3", "5"],
  "dim": ["1", "b3", "b5"],
  "aug": ["1", "3", "#5"],
  "sus2": ["1", "2", "5"],
  "sus4": ["1", "4", "5"],
  "5": ["1", "5"],

  "6": ["1", "3", "5", "6"],
  "min6": ["1", "b3", "5", "6"],

  "7": ["1", "3", "5", "b7"],
  "maj7": ["1", "3", "5", "7"],
  "min7": ["1", "b3", "5", "b7"],
  "m7b5": ["1", "b3", "b5", "b7"],
  "dim7": ["1", "b3", "b5", "bb7"],

  "9": ["1", "3", "5", "b7", "9"],
  "add9": ["1", "3", "5", "9"],
  "7add9": ["1", "3", "5", "b7", "9"],
  "11": ["1", "3", "5", "b7", "9", "11"],
  "13": ["1", "3", "5", "b7", "9", "13"]
};

const strings = ["E", "A", "D", "G", "B", "e"]; 

function getNoteIndex(note) {
  return NOTES.indexOf(note);
}

function transpose(rootIndex, semitone) {
  return NOTES[(rootIndex + semitone) % 12];
}

function normalizeChordType(rawType) {
  return rawType
    .replace(/^\+/, "aug")
    .replace(/^m(?!aj)/, "min")
    .replace(/^min/, "min")
    .replace(/^-/, "min")
    .replace(/maj7$/, "maj7")
    .replace(/m7$/, "min7")
    .replace(/dim7$/, "dim7")
    .replace(/dim$/, "dim")
    .replace(/aug$/, "aug")
    .replace(/6$/, "6")
    .replace(/7$/, "7")
    .replace(/9$/, "9")
    .replace(/11$/, "11")
    .replace(/13$/, "13");
}

function parseChord(chordName) {
  const match = chordName.match(/^([A-G][b#]?)(.*)$/i);
  if (!match) return null;

  let root = match[1].toUpperCase();
  root = root.replace("B#", "C").replace("E#", "F").replace("Cb", "B").replace("Fb", "E");

  const rawType = match[2].toLowerCase() || "maj";
  const type = normalizeChordType(rawType);

  return { root, type };
}

function getChordNotes(root, type) {
  const formula = chordFormulas[type] || chordFormulas["maj"];
  const rootIndex = getNoteIndex(root);
  return formula.map(interval => transpose(rootIndex, SEMITONES[interval]));
}

function getFretboard(root, type) {
  const chordNotes = getChordNotes(root, type);
  const shapes = [];  

  const openStrings = ["E", "A", "D", "G", "B", "E"];  
  for (let voicingIndex = 0; voicingIndex < 3; voicingIndex++) {
    const shape = [];
    for (let i = 0; i < openStrings.length; i++) {
      const openNote = openStrings[i];
      const openIndex = getNoteIndex(openNote);
      let foundFret = "x";

      for (let fret = 0 + voicingIndex * 3; fret <= (4 + voicingIndex * 3); fret++) {
        const note = transpose(openIndex, fret);
        if (chordNotes.includes(note)) {
          foundFret = fret;
          break;
        }
      }

      shape.push(foundFret);
    }

    shapes.push(shape); 
  }

  return shapes;
}

function generateChord() {
    const input = document.getElementById("chordInput").value.trim();
    const parsed = parseChord(input);
  
    if (!parsed) {
      document.getElementById("chordOutput").textContent = "ChordFormat MISSING (Line10-31)";
      return;
    }
  
    const { root, type } = parsed;
    const shapes = getFretboard(root, type);
    const stringNames = ["E", "A", "D", "G", "B", "e"]; 
    let output = `Chord: ${root}${type}\n\n`;
    
    shapes.forEach((shape, voicingIndex) => {
      output += `Voicing ${voicingIndex + 1}:\n`;
      for (let i = 0; i < 6; i++) {
        const fret = shape[i] === "x" ? " x " : ` ${shape[i]} `; 
        output += `${stringNames[i]}|${fret}\n`;
      }
      output += "\n" + "-".repeat(20) + "\n\n";
    });
    
    document.getElementById("chordOutput").textContent = output;
}    
