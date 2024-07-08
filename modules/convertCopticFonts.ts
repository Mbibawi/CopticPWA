// CONSTANTS
const fontName = "ATHANASIUS";
const JimkinCombining = {
  before: "COMBINE_WITH_CHAR_BEFORE",
  after: "COMBINE_WITH_CHAR_AFTER",
  none: "NONE",
};
const COPTIC_FONT_UNICODE_COL: number = 4;


async function convertFontWithoutAPI(text?: string, font: string = fontName, jimkin: string = JimkinCombining.before) {
  if (!fontsMap[0].includes(font)) {
    alert('Font: ' + font + ' is not supported');
    return undefined
  };
  //if (!text) text = prompt('Provide the text you want to convert');
  if (font === "ATHANASIUS")
    text = text.replaceAll('`è\\', String.fromCharCode(96) + '\\')
      .replaceAll('`è', String.fromCharCode(96))
      .replaceAll('` è', String.fromCharCode(96))
      .replaceAll(String.fromCharCode(160) + '?', '?')
      .replaceAll('  ', ' ');

  if (font === "COPTIC1") jimkin = JimkinCombining.after;
  console.log("font = ", font);
  text = text.
    replaceAll('\r', '\n')
    .split('\n')
    .map(parag => convertCopticText(
      font,
      parag,
      jimkin
    )
    )
    .join('\n');
  return text
}


/**
 * converts the given string into coptic unicode characters if they match characters of the supported non-unicode fonts
 * @param {*} non-unicode font name of the provided coptic non-unicode text
 * @param {*} coptic non-unicode text
 * @param {*} jimkin jimkin combining method (COMBINE_WITH_CHAR_BEFORE, COMBINE_WITH_CHAR_AFTER, NONE)
 * @returns converted text
 */
function convertCopticText(font: string, text: string, jimkin: string): string {
  const copticFontsMap: string[][] = fontsMap;
  let columnIndex: number = fontsMap[0].indexOf(font);
  let rowIndex: number;

  let sb = [];

  for (let i = 0; i < text.length; i++) {

    if (text[i] == " ") {
      sb.push(" ");
      continue;
    }
    rowIndex = fontsMap.indexOf(fontsMap.find(row => row[columnIndex] === text[i]));
    let unicode: string;

    if (rowIndex >= 0) unicode = fontsMap[rowIndex][COPTIC_FONT_UNICODE_COL];


    if (unicode) sb.push(unicode);
    else sb.push(text[i])
  }

  return removeCharAfterOverline(switchCharForJimkin(sb, jimkin));

  /**
   * Combines the Jimkin grave accet with either the letter before it or the letter after it. 
   * @param {string[]} textArray 
   * @param {string} jimkinCombining - the Jimkin combining options (with the letter before it, with the letter after it, or none). If none, it returns a string from textArray
   * @returns {string} - a string representing the text after combining the Jimkin accent
   */
  function switchCharForJimkin(textArray: string[], jimkinCombining: string): string {
    if (!textArray) return;
    const JIMKIN_UNICODE = "\u0300";
    if (jimkinCombining === JimkinCombining.none)
      return textArray.join('');
    // Traverse the string
    let stringbuffer = [];

    for (let i = 0; i < textArray.length; i++) {
      if (textArray[i] == '`') i = hasJimkin(i);
      else stringbuffer.push(textArray[i]);
    }

    //return stringbuffer.join("");
    return stringbuffer.join('')

    function hasJimkin(i: number): number {
      if (jimkinCombining === JimkinCombining.after) {
        stringbuffer.pop(); // remove last char
        stringbuffer.push(textArray[i - 1] + JIMKIN_UNICODE);
      } else if (jimkinCombining === JimkinCombining.before) {
        stringbuffer.push(textArray[i + 1] + JIMKIN_UNICODE);
        i++
      }
      return i
    }
  };
  /**
   * remove char after overline, because its empty
   *
   * @param {*} unicodeString
   * @returns
   */
  function removeCharAfterOverline(unicodeString: string): string {
    //if (font === 'ATHANASIUS') return unicodeString;
    const OVERLINE_UNICODE_VAL: number = 773;
    if (!unicodeString) return unicodeString;
    // Traverse the string
    let stringbuffer = [];
    for (let i = 0; i < unicodeString.length; i++) {
      stringbuffer.push(unicodeString[i]);
      if (unicodeString.charCodeAt(i) === OVERLINE_UNICODE_VAL) i++ // skip next char by incrementing

    }
    return stringbuffer.join("");
  };
}


const fontsMap = [
  [
    "CharName", "DEC", "Hex", "Code", "Unicode", "CS", "NEW_ATHANASIUS", "ATHANASIUS", "AVVA_SHENOUDA", "AVVA_MARCOS", "AVVA_BISHOY", "BISHOP_TADROS", "SAINT_ABRAHAM", "ANTONIOUS", "ANTONIOUS_THIN", "ANTONIOUSJ", "ANTONIOUSOL", "COPTIC", "COPTIC1", "COPTICII", "COPTONEW", "KOPTOS", "SAINTGEORGES", "KYRILLOS", "KOPTWI3", "KPTWI3B", "AVVA_KYRILLOS", "SAINT_MARINA", "SPACHMIM", "MENA1", "POPE_SHENOUDA_III", "NOPHER", "PISHOI",
  ],
  [
    "alpha_capital", "11392", "2C80", "\u2C80", "Ⲁ", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A",
  ],
  [
    "alpha_small", "11393", "2C81", "\u2C81", "ⲁ", "a", "a", "a", "a", "", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a",
  ],
  [
    "veeta_capital", "11394", "2C82", "\u2C82", "Ⲃ", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B",
  ],
  [
    "veeta_small", "11395", "2C83", "\u2C83", "ⲃ", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b",
  ],
  [
    "gamma_capital", "11396", "2C84", "\u2C84", "Ⲅ", "G", "G", "G", "J", "J", "J", "G", "J", "G", "G", "G", "G", "", "G", "G", "G", "G", "J", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G",
  ],
  [
    "gamma_small", "11397", "2C85", "\u2C85", "ⲅ", "g", "g", "g", "j", "g", "j", "g", "j", "g", "g", "g", "g", "g", "g", "g", "g", "g", "j", "g", "g", "g", "g", "g", "g", "g", "g", "g", "g",
  ],
  [
    "delta_capital", "11398", "2C86", "\u2C86", "Ⲇ", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D",
  ],
  [
    "delta_small", "11399", "2C87", "\u2C87", "ⲇ", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d",
  ],
  [
    "ei_capital", "11400", "2C88", "\u2C88", "Ⲉ", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
  ],
  [
    "ei_small", "11401", "2C89", "\u2C89", "ⲉ", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e",
  ],
  [
    "zeeta_capital", "11404", "2C8C", "\u2C8C", "Ⲍ", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z",
  ],
  [
    "zeeta_small", "11405", "2C8D", "\u2C8D", "ⲍ", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z",
  ],
  [
    "eeta_capital", "11406", "2C8E", "\u2C8E", "Ⲏ", "Y", "?", "H", "#", "#", "#", "H", "#", "?", "?", "?", "?", "", "?", "Y", "Y", "Y", "#", "?", "Y", "Y", "Y", "Y", "H", "H", "H", "?", "?",
  ],
  [
    "eeta_small", "11407", "2C8F", "\u2C8F", "ⲏ", "y", "/", "h", "3", "3", "3", "h", "3", "/", "/", "/", "8", "h", "/", "y", "y", "y", "3", ";", "y", "y", "y", "y", "h", "h", "h", "", "",
  ],
  [
    "theeta_capital", "11408", "2C90", "\u2C90", "Ⲑ", ":", "Y", "Q", ")", "0", ")", "Q", ")", "Y", "Y", "Y", "Y", "", "Y", "", ":", ":", ")", "Y", ":", ":", ":", ":", "q", "Q", "Q", "Y", "Y",
  ],
  [
    "theeta_small", "11409", "2C91", "\u2C91", "ⲑ", ";", "y", "q", "0", ")", "0", "q", "0", "y", "y", "y", "y", "c", "y", "", ";", ";", "0", "y", ";", ";", ";", ";", "", "q", "q", "y", "y",
  ],
  [
    "iota_capital", "11410", "2C92", "\u2C92", "Ⲓ", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I",
  ],
  [
    "iota_small", "11411", "2C93", "\u2C93", "ⲓ", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i",
  ],
  [
    "kappa_capital", "11412", "2C94", "\u2C94", "Ⲕ", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K",
  ],
  [
    "kappa_small", "11413", "2C95", "\u2C95", "ⲕ", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k",
  ],
  [
    "lavla_capital", "11414", "2C96", "\u2C96", "Ⲗ", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
  ],
  [
    "lavla_small", "11415", "2C97", "\u2C97", "ⲗ", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l",
  ],
  [
    "mei_capital", "11416", "2C98", "\u2C98", "Ⲙ", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M",
  ],
  [
    "mei_small", "11417", "2C99", "\u2C99", "ⲙ", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m",
  ],
  [
    "nei_capital", "11418", "2C9A", "\u2C9A", "Ⲛ", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N",
  ],
  [
    "nei_small", "11419", "2C9B", "\u2C9B", "ⲛ", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n",
  ],
  [
    "ksi_capital", "11420", "2C9C", "\u2C9C", "Ⲝ", "X", "X", "{", "&", "&", "&", "J", "&", "X", "X", "X", "X", "", "X", "X", "X", "X", "&", "X", "X", "X", "X", "X", "", "X", "J", "X", "X",
  ],
  [
    "ksi_small", "11421", "2C9D", "\u2C9D", "ⲝ", "x", "x", "[", "7", "x7", "7", "j", "7", "x", "x", "x", "x", "3", "x", "x", "x", "x", "7", "x", "x", "x", "x", "x", "", "x", "j", "x", "x",
  ],
  [
    "o_capital", "11422", "2C9E", "\u2C9E", "Ⲟ", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O",
  ],
  [
    "o_small", "11423", "2C9F", "\u2C9F", "ⲟ", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o",
  ],
  [
    "pi_capital", "11424", "2CA0", "\u2CA0", "Ⲡ", "P", "P", "P", "P", "P", "P", "U", "P", "P", "P", "P", "P", "", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "U", "P", "P",
  ],
  [
    "pi_small", "11425", "2CA1", "\u2CA1", "ⲡ", "p", "p", "p", "p", "p", "p", "u", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "u", "p", "p",
  ],
  [
    "ro_capital", "11426", "2CA2", "\u2CA2", "Ⲣ", "R", "R", "R", "R", "R", "R", "P", "R", "R", "R", "R", "R", "", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "P", "R", "R",
  ],
  [
    "ro_small", "11427", "2CA3", "\u2CA3", "ⲣ", "r", "r", "r", "r", "r", "r", "p", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "p", "r", "r",
  ],
  [
    "sima_capital", "11428", "2CA4", "\u2CA4", "Ⲥ", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C",
  ],
  [
    "sima_small", "11429", "2CA5", "\u2CA5", "ⲥ", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "s", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c",
  ],
  [
    "tav_capital", "11430", "2CA6", "\u2CA6", "Ⲧ", "T", "T", "T", "T", "T", "T", "+", "T", "T", "T", "T", "T", "", "T", "T", "T", "T", "T", "T", "T", "T", "T", "T", "T", "T", "+", "T", "T",
  ],
  [
    "tav_small", "11431", "2CA7", "\u2CA7", "ⲧ", "t", "t", "t", "t", "t", "t", "=", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "=", "t", "t",
  ],
  [
    "epsilon_capital", "11432", "2CA8", "\u2CA8", "Ⲩ", "U", "U", "U", "V", "V", "V", "Y", "V", "U", "U", "U", "U", "", "U", "U", "U", "U", "V", "U", "U", "U", "U", "U", "Y", "Y", "Y", "U", "U",
  ],
  [
    "epsilon_small", "11433", "2CA9", "\u2CA9", "ⲩ", "u", "u", "u", "v", "", "v", "y", "v", "u", "u", "u", "u", "u", "u", "u", "u", "u", "v", "u", "u", "u", "u", "u", "y", "y", "y", "u", "u",
  ],
  [
    "fey_capital", "11434", "2CAA", "\u2CAA", "Ⲫ", "V", "V", "V", "F", "F", "F", "F", "F", "V", "V", "V", "V", "", "V", "", "", "", "F", "V", "", "", "", "", "", "v", "F", "V", "V",
  ],
  [
    "fey_small", "11435", "2CAB", "\u2CAB", "ⲫ", "v", "v", "v", "f", "", "f", "f", "f", "v", "v", "v", "v", "v", "v", "v", "v", "v", "f", "v", "v", "v", "v", "v", "f", "U", "f", "v", "v",
  ],
  [
    "key_capital", "11436", "2CAC", "\u2CAC", "Ⲭ", "<", "<", "X", "X", "X", "X", "X", "X", "<", "<", "<", "<", "", "<", "", "", "", "X", "<", "", "", "", "", "X", "u", "X", "<", "<",
  ],
  [
    "key_small", "11437", "2CAD", "\u2CAD", "ⲭ", ",", ",", "x", "x", "", "x", "x", "x", ",", ",", ",", ",", "y", ",", "", "", "", "x", ",", "", "", "", "", "x", "", "x", ",", ",",
  ],
  [
    "psi_capital", "11438", "2CAE", "\u2CAE", "Ⲯ", "\"", "\"", "Y", "Y", "Y", "Y", "R", "Y", "\"", "\"", "\"", "\"", "", "\"", "\"", "\"", "\"", "Y", "\"", "\"", "\"", "\"", "\"", "\"", "", "R", "\"", "\"",
  ],
  [
    "psi_small", "11439", "2CAF", "\u2CAF", "ⲯ", "'", "'", "y", "y", "", "y", "r", "y", "'", "'", "'", "'", "", "'", "'", "'", "'", "y", "'", "'", "'", "'", "'", "'", "", "r", "'", "'",
  ],
  [
    "oou_capital", "11440", "2CB0", "\u2CB0", "Ⲱ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W",
  ],
  [
    "oou_small", "11441", "2CB1", "\u2CB1", "ⲱ", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w",
  ],
  [
    "shai_capital", "994", "03E2", "\u03E2", "Ϣ", "S", "S", "}", "@", "2", "@", "\\", "@", "S", "S", "S", "S", "", "S", "S", "S", "S", "@", "S", "S", "S", "S", "S", "S", "S", "\\", "S", "S",
  ],
  [
    "shai_small", "995", "03E3", "\u03E3", "ϣ", "s", "s", "]", "2", "s", "2", "|", "2", "s", "s", "s", "s", "", "s", "s", "s", "s", "2", "s", "s", "s", "s", "s", "s", "s", "|", "s", "s",
  ],
  [
    "fai_capital", "996", "03E4", "\u03E4", "Ϥ", "F", "F", "F", "$", "4", "$", "}", "$", "F", "F", "F", "F", "", "F", "F", "F", "F", "$", "F", "F", "F", "F", "F", "F", "F", "}", "F", "F",
  ],
  [
    "fai_small", "997", "03E5", "\u03E5", "ϥ", "f", "f", "f", "4", "$", "4", "]", "4", "f", "f", "f", "f", "f", "f", "f", "f", "f", "4", "f", "f", "f", "f", "f", "", "f", "]", "f", "f",
  ],
  [
    "khai_capital", "998", "03E6", "\u03E6", "Ϧ", "Q", "Q", "\"", "Q", "Q", "Q", "^", "Q", "Q", "Q", "Q", "Q", "", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", ":", "^", "Q", "Q",
  ],
  [
    "khai_small", "999", "03E7", "\u03E7", "ϧ", "q", "q", "'", "q", "q", "q", "~", "q", "q", "q", "q", "q", "", "q", "q", "q", "q", "q", "q", "q", "q", "q", "q", "", "", "~", "q", "q",
  ],
  [
    "hori_capital", "1000", "03E8", "\u03E8", "Ϩ", "H", "H", "|", "H", "H", "H", "S", "H", "H", "H", "H", "H", "", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "", "<", "S", "H", "H",
  ],
  [
    "hori_small", "1001", "03E9", "\u03E9", "ϩ", "h", "h", "\\", "h", "h", "h", "s", "h", "h", "h", "h", "h", "", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "6", ",", "s", "h", "h",
  ],
  [
    "jinja_capital", "1002", "03EA", "\u03EA", "Ϫ", "J", "J", "J", "G", "G", "G", "V", "G", "J", "J", "J", "J", "", "J", "J", "J", "J", "G", "J", "J", "J", "J", "J", "1", "J", "V", "J", "J",
  ],
  [
    "jinja_small", "1003", "03EB", "\u03EB", "ϫ", "j", "j", "j", "g", "j", "g", "v", "g", "j", "j", "j", "j", "j", "j", "j", "j", "j", "g", "j", "j", "j", "j", "j", "2", "j", "v", "j", "j",
  ],
  [
    "tcheema_capital", "1004", "03EC", "\u03EC", "Ϭ", "{", "{", "S", "S", "S", "S", "{", "S", "{", "{", "{", "{", "", "{", "{", "{", "{", "S", "{", "{", "{", "{", "{", "3", "{", "{", "{", "{",
  ],
  [
    "tcheema_small", "1005", "03ED", "\u03ED", "ϭ", "[", "[", "s", "s", "", "s", "[", "s", "[", "[", "[", "[", "", "[", "[", "[", "[", "s", "[", "[", "[", "[", "[", "4", "[", "[", "[", "[",
  ],
  [
    "tii_capital", "1006", "03EE", "\u03EE", "Ϯ", "}", "}", ":", "%", "5", "%", "T", "%", "}", "}", "}", "}", "", "}", "}", "}", "}", "%", "}", "}", "}", "}", "}", "", "}", "T", "}", "}",
  ],
  [
    "tii_small", "1007", "03EF", "\u03EF", "ϯ", "]", "]", ";", "5", "%", "5", "t", "5", "]", "]", "]", "]", "+", "]", "]", "]", "]", "5", "]", "]", "]", "]", "]", "5", "]", "t", "]", "]",
  ],
  [
    "cou_small", "11403", "2C8B", "\u2C8B", "ⲋ", "^", "6", "<", "6", "6", "", "*", "", "", "", "", "", "", "6", "", "", "", "", "", "", "", "", "", "", ">", "*", "", "",
  ],
  [
    "symbol_mi_ro", "11493", "2CE5", "\u2CE5", "", "", "", "", "", "^", "U", "", "u", "", "", "", "", "", "", "", "", "", "U", "", "", "", "", "", "=", ".", "", "%", "%",
  ],
  [
    "jinkim", "768", "0300", "\u0300", String.fromCharCode(96), String.fromCharCode(96), ";", String.fromCharCode(96), "", "", "", "", "", "", "", "ä", "ä", "~", "~", "", "", "", "", "ä", "ä", "ä", "ä", "ä", "", "ä", "", "ä", "ä",
  ],
  [
    "overline", "773", "0305", "\u0305", "̅ ", "=", "", "/", "", "", "", "", "", "", "", "ö", "ö", "", "#", "", "", "", "", "ö", "ö", "ö", "ö", "ö", "", "ö", "", "ö", "ö",
  ],
  [
    "overline_double", "", "033F", "\u033F", "̿ ", "", "?", "", "", "", "", "", "", "", "", "ü", "ü", "", "", "", "", "", "", "ü", "ü", "ü", "ü", "ü", "", "ü", "", "ü", "ü",
  ],
  [
    "thousands_mark", "66272", "102E1", "\u102E1", "𐋠", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
  ],
  [
    "digit_one", "66273", "102E1", "\u102E1", "ⲁ̅", "", "1", "", "", "", "", "1", "", "1", "", "Ä", "Ä", "A", "1", "", "", "", "", "1", "Ä", "Ä", "Ä", "Ä", "", "Ä", "1", "1", "1",
  ],
  [
    "digit_two", "66274", "102E2", "\u102E2", "ⲃ̅", "", "2", "", "", "", "", "2", "", "2", "", "Ö", "Ö", "B", "2", "", "", "", "", "2", "Ö", "Ö", "Ö", "Ö", "", "Ö", "2", "2", "2",
  ],
  [
    "digit_three", "66275", "102E3", "\u102E3", "ⲅ̅", "", "3", "", "", "", "", "3", "", "3", "", "Ü", "Ü", "G", "3", "", "", "", "", "3", "Ü", "Ü", "Ü", "Ü", "", "Ü", "3", "3", "3",
  ],
  [
    "digit_four", "66276", "102E4", "\u102E4", "ⲇ̅", "", "4", "", "ä", "", "", "4", "", "4", "+", "+", "+", "D", "4", "+", "+", "+", "", "4", "+", "+", "+", "+", "", "+", "4", "4", "4",
  ],
  [
    "digit_five", "66277", "102E5", "\u102E5", "ⲉ̅", "", "5", "", "", "", "", "5", "", "5", "*", "*", "*", "E", "5", "*", "*", "*", "", "5", "*", "*", "*", "*", "", "*", "5", "5", "5",
  ],
  [
    "digit_six", "66278", "102E6", "\u102E6", "ⲋ", "", "6", ",", "^", "", "", "6", "", "6", "#", "#", "#", "", "6", "#", "#", "#", "", "6", "#", "#", "#", "#", "", "#", "6", "6", "6",
  ],
  [
    "digit_seven", "66279", "102E7", "\u102E7", "ⲍ̅", "", "", "", "", "", "", "7", "", "7", "-", "-", "-", "Z", "7", "-", "-", "-", "", "7", "-", "-", "-", "-", "", "-", "7", "7", "7",
  ],
  [
    "digit_eight", "66280", "102E8", "\u102E8", "ⲏ̅", "", "8", "", "", "", "", "8", "", "8", "_", "_", "_", "H", "8", "_", "_", "_", "", "8", "_", "_", "_", "_", "", "_", "8", "8", "8",
  ],
  [
    "digit_nine", "66281", "102E9", "\u102E9", "ⲑ̅", "", "", "", "", "", "", "9", "", "9", ".", ".", ".", "C", "9", ".", ".", ".", "", "9", ".", ".", ".", ".", "", "", "9", "9", "9",
  ],
  [
    "number_ten", "66282", "102EA", "\u102EA", "ⲓ̅", "", "", "", "", "", "", "0", "", "0", ",", "", "", "I", "0", ",", ",", ",", "", "0", ",", ",", ",", ",", "", "\"", "0", "0", "0",
  ],
  [
    "number_twenty", "66283", "102EB", "\u102EB", "ⲕ̅", "", "", "", "", "", "", "", "", "", "1", "1", "1", "K", "k#", "1", "1", "1", "", "Ä", "1", "1", "1", "1", "", "'", "", "Ä", "Ä",
  ],
  [
    "number_thirty", "66284", "102EC", "\u102EC", "ⲗ̅", "", "", "", "", "", "", "", "", "", "2", "2", "2", "L", "l#", "2", "2", "2", "", "Ö", "2", "2", "2", "2", "", "2", "", "Ö", "Ö",
  ],
  [
    "number_forty", "66285", "102ED", "\u102ED", "ⲙ̅", "", "", "", "", "", "", "", "", "", "3", "3", "3", "M", "m#", "3", "3", "3", "", "Ü", "3", "3", "3", "3", "", "3", "", "Ü", "Ü",
  ],
  [
    "number_fifty", "66286", "102EE", "\u102EE", "ⲛ̅", "", "", "", "", "", "", ";", "", "ß", "4", "4", "4", "N", "n#", "4", "4", "4", "", "+", "4", "4", "4", "4", "", "4", "", "+", "+",
  ],
  [
    "number_sixty", "66287", "102EF", "\u102EF", "ⲝ̅", "", "", "", "", "", "", "ä", "", "´", "5", "5", "5", "#", "x#", "5", "5", "5", "", "*", "5", "5", "5", "5", "", "5", "", "*", "*",
  ],
  [
    "number_seventy", "66288", "102F0", "\u102F0", "ⲟ̅", "", "", "", "", "", "", "ö", "", "^", "6", "6", "6", "O", "o#", "6", "6", "6", "", "#", "6", "6", "6", "6", "", "6", "", "#", "#",
  ],
  [
    "number_eighty", "66289", "102F1", "\u102F1", "ⲡ̅", "", "", "", "", "", "", "ü", "", "°", "7", "7", "7", "P", "p#", "7", "7", "7", "", "-", "7", "7", "7", "7", "", "7", "", "-", "-",
  ],
  [
    "number_ninety", "66290", "102F2", "\u102F2", "ⲣ̅", "", "", "", "", "", "", "Ä", "", "!", "8", "8", "", "R", "r#", "8", "8", "8", "", "_", "8", "8", "8", "8", "", "8", "", "_", "_",
  ],
  [
    "number_100", "66291", "102F3", "\u102F3", "ϥ̅", "", "", "", "", "", "", "Ö", "", "§", "9", "9", "9", "F", "f#", "9", "9", "9", "", ".", "9", "9", "9", "9", "", "9", "", ".", ".",
  ],
  [
    "number_200", "66292", "102F4", "\u102F4", "ⲥ̅", "", "", "", "", "", "", "Ü", "", "$", "0", "0", "0", "S", "c#", "0", "0", "0", "", "", "0", "0", "0", "0", "", "0", "", "", "",
  ],
  [
    "number_300", "66293", "102F5", "\u102F5", "ⲧ̅", "", "", "", "", "", "", "#", "", "", "ß", "ß", "ß", "T", "t#", "ß", "ß", "ß", "", "ß", "ß", "ß", "ß", "ß", "", "ß", "ß", "ß", "ß",
  ],
  [
    "number_400", "66294", "102F6", "\u102F6", "ⲩ̅", "", "", "", "ö", "", "", "-", "", "&", "´", "´", "´", "U", "u#", "´", "´", "´", "", "´", "´", "´", "´", "´", "", "´", "", "´", "´",
  ],
  [
    "number_500", "66295", "102F7", "\u102F7", "ⲫ̅", "", "", "", "", "", "", "_", "", "(", "^", "^", "^", "V", "v#", "^", "^", "^", "", "^", "^", "^", "^", "^", "", "^", "", "^", "^",
  ],
  [
    "number_600", "66296", "102F8", "\u102F8", "ⲭ̅", "", "", "", "", "", "", ".", "", ")", "°", "°", "°", "Y", ",#", "°", "°", "°", "", "°", "°", "°", "°", "°", "", "°", "", "°", "°",
  ],
  [
    "number_700", "66297", "102F9", "\u102F9", "ⲯ̅", "", "9", "", "", "", "", "x", "", "=", "!", "!", "!", "", "'#", "!", "!", "!", "", "!", "!", "!", "!", "!", "", "!", "", "!", "!",
  ],
  [
    "number_800", "66298", "102FA", "\u102FA", "ⲱ̅", "", "", "", "", "", "", "", "", "", "§", "§", "§", "", "w#", "§", "§", "§", "", "§", "§", "§", "§", "§", "", "§", "", "§", "§",
  ],
  [
    "number_900", "66299", "102FB", "\u102FB", "ϣ̅", "", "7", "", "", "", "", "", "", "\\", "$", "$", "$", "", "s#", "$", "$", "$", "", "$", "$", "$", "$", "$", "", "$", "", "$", "$",
  ],
  [
    "number_1000", "", "", "", "ⲁ̿", "", "", "", "", "", "", "", "", "~", "%", "%", "%", "", "", "%", "%", "%", "", "%", "%", "%", "%", "%", "", "%", "", "", "",
  ],
  [
    "number_2000", "", "", "", "ⲃ̿", "", "", "", "", "", "", "", "", "|", "&", "&", "&", "", "", "&", "&", "&", "", "&", "&", "&", "&", "&", "", "&", "", "&", "&",
  ],
  [
    "number_3000", "", "", "", "ⲅ̿", "", "", "", "", "", "", "", "", "", "(", "(", "(", "", "", "(", "(", "(", "", "(", "(", "(", "(", "(", "", "(", "", "(", "(",
  ],
  [
    "number_4000", "", "", "", "ⲇ̿", "", "", "", "", "", "", "", "", "", ")", ")", ")", "", "", ")", ")", ")", "", ")", ")", ")", ")", ")", "", ")", "", ")", ")",
  ],
  [
    "number_5000", "", "", "", "ⲉ̿", "", "", "", "", "", "", "", "", "", "=", "=", "=", "", "", "=", "=", "=", "", "=", "=", "=", "=", "=", "", "=", "", "=", "=",
  ],
  [
    "number_6000", "", "", "", "ⲋ̿", "", "", "", "", "", "", "", "", "", "?", "?", "", "", "", "?", "?", "?", "", "", "?", "?", "?", "?", "", "", "", "", "",
  ],
  [
    "number_7000", "", "", "", "ⲍ̿", "", "", "", "", "", "", "", "", "", "\\", "²", "²", "", "", "²", "²", "²", "", "²", "²", "²", "²", "²", "", "²", "", "²", "²",
  ],
  [
    "number_8000", "", "", "", "ⲏ̿", "", "", "", "", "", "", "", "", "", "", "³", "³", "", "", "³", "³", "³", "", "³", "³", "³", "³", "³", "", "³", "", "³", "³",
  ],
  [
    "number_9000", "", "", "", "ⲑ̿", "", "", "", "", "", "", "", "", "", "|", "\\", "\\", "", "", "\\", "\\", "\\", "", "\\", "\\", "\\", "\\", "\\", "", "", "", "\\", "\\",
  ],
  [
    "colon", "", "", "", ":", "@", ":", ">", ":", "", "", "", "", ":", ":", ":", ":", ":", ":", ":", "", "", "u", "", "", "", "", "", ":", "?", "", ":", ":",
  ],
  [
    "semicolon", "", "", "", ";", "&", "", "^", ";", "", "", "", "", ";", ";", ";", ";", ";", ";", ";", "", "", "", "", "", "", "", "", ";", "", ":", "", "",
  ],
  [
    "dot", "", "", "", ".", "", ".", ".", "", "", "", "", "", "", "", "", "", ".", ".", "", "", "", "", "", "", "", "", "", ".", "\\", "\"", "", "",
  ],
  [
    "comma", "", "", "", ",", "", "", "%", "", "", "", "", "", ">", ">", ">", ">", "", "", "", "", "", "", ">", "", "", "", "", ",", "", "'", ">", ">",
  ],
  [
    "akr_martyrus", "", "", "", "⳥", "", String.fromCharCode(61), String.fromCharCode(61), "U", "", "u", "", "", ".", "", "", "", "&", "&", "", "", "", "", "", "", "", "", "", "", ";", "", "", "",
  ],
  [
    "akr_tchois", "", "", "", "⳪", "", String.fromCharCode(95), String.fromCharCode(95), "u", "", "", "", "", "%", "V", "", "", "%", "%", "V", "V", "V", "", "", "V", "V", "V", "V", "", "V", "", "", "",
  ],
  [
    "akr_pistavros", "", "", "", "ⳮ", "", "+", "+", "+", "", "", "", "", "", "~", "~", "~", "*", "*", "", "", "", "", "~", "", "", "", "", "", "", ".", "~", "~",
  ],
];


/**
 * Loops the fontsMap to find the character for a given font and either return the unicode value or replace wih another character
 * @param {string} fontName - the name of the font that we want to query 
 * @param {string} char - the character that needs to be replaced 
 * @param {string} replace - the  
 * @returns 
 */
function getOrReplaceCharacterForFont(fontName: string, char: string, replace: string = '') {
  let index = fontsMap[0].indexOf(fontName);
  if (!index) return console.log('font name not found');
  let unicode = 4;
  let row = fontsMap.find(row => row[index] === char);
  if (!row)
    return console.log('Character not found');
  if (!replace)
    return console.log('unicode =', row[unicode]);
  fontsMap[fontsMap.indexOf(row)][index] = replace;
  console.log(fontsMap)
}