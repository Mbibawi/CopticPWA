import ExcelJS from "exceljs";
import path from "path";
import { fileURLToPath } from "url";
import { JimkinCombining, switchCharForJimkin } from "./Jimkin.js";
import { removeCharAfterOverline } from "./Overline.js";

// to reference the excel-file correctly
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CONSTANTS
const COPTIC_FONT_COL_START = 6;
const COPTIC_FONT_COL_END = 34;
const COPTIC_FONT_ROW_START = 2;
const COPTIC_FONT_ROW_END = 113;
const COPTIC_FONT_UNICODE_COL = 5;

const workbook = new ExcelJS.Workbook();
const EXCEL_FILE = __dirname + "/all2Unicode_v3.xlsx";
const SHEETNAME = "mapping";

/**
 * internal method for reading the Coptic Font and Character Matrix
 *
 * @returns
 */
async function getCopticFontMatrix() {
  let copticFontsMap = new Map();
  try {
    await workbook.xlsx.readFile(EXCEL_FILE);
    const worksheet = workbook.getWorksheet(SHEETNAME);
    //
    for (
      let colInd = COPTIC_FONT_COL_START;
      colInd < COPTIC_FONT_COL_END;
      colInd++
    ) {
      let fontName = worksheet.getRow(1).getCell(colInd).value;
      // create a map to hold the column data for this row
      let rowData = new Map();
      // loop through the columns of the row
      for (
        let rowInd = COPTIC_FONT_ROW_START;
        rowInd < COPTIC_FONT_ROW_END;
        rowInd++
      ) {
        let unicodeVal = worksheet
          .getRow(rowInd)
          .getCell(COPTIC_FONT_UNICODE_COL).value;
        let fontChar = worksheet.getRow(rowInd).getCell(colInd).value;
        if ((fontChar !== "") & (!unicodeVal !== "")) {
          rowData.set(fontChar, unicodeVal);
        }
        if (fontName !== null && !fontName == "" && rowData != null) {
          copticFontsMap.set(fontName, rowData);
        }
      }
    }
  } catch (error) {}
  return copticFontsMap;
}

/**
 * check if provided coptic non-unicode font is valid
 *
 * @param {*} font to check
 * @returns true if font is supported and can be converted, else false
 */
export async function fontSupported(fontToCheck) {
  const fontMatrix = await getCopticFontMatrix();
  if (fontMatrix.get(fontToCheck) === undefined) {
    return false;
  } else {
    return true;
  }
}

/**
 * returns a list of supported non-unicode fonts which can be converted to unicode
 *
 * @returns list of font-names
 */
export async function getSupportedCopticFonts() {
  const fontList = await getCopticFontMatrix();
  return fontList.keys();
}

/**
 * check if provided jimkin combining method is valid
 *
 * @param {*} method name to check
 * @returns true if provided jimkin combining method is valid, else false
 */
export function jimkinMethodValid(jimkin) {
  if (
    jimkin !== JimkinCombining.NONE &&
    jimkin !== JimkinCombining.COMBINE_WITH_CHAR_BEFORE &&
    jimkin !== JimkinCombining.COMBINE_WITH_CHAR_AFTER
  ) {
    console.error(
      `Provided jimkin combining method ${jimkin} is not supported!`
    );
    console.log("Supported Methods: ", JimkinCombining);
    return false;
  } else {
    return true;
  }
}

/**
 * returns a list of valid jimkin combining methods
 *
 * @returns list of valid jimkin combining methods
 */
export function getJimkinCombiningMethods() {
  return JimkinCombining;
}

/**
 * converts the given string into coptic unicode characters if they match characters of the supported non-unicode fonts
 * @param {*} non-unicode font name of the provided coptic non-unicode text
 * @param {*} coptic non-unicode text
 * @param {*} jimkin jimkin combining method (COMBINE_WITH_CHAR_BEFORE, COMBINE_WITH_CHAR_AFTER, NONE)
 * @returns converted text
 */
export async function convertCopticText(font, copticPhrase, jimkin) {
  const copticFontsMap = await getCopticFontMatrix();

  //
  // Traverse the string
  //
  let sb = [];
  let converted = "";
  for (let i = 0; i < copticPhrase.length; i++) {
    let copticChar = copticPhrase.charAt(i);
    if (copticChar == " ") {
      sb.push(" ");
      continue;
    }
    converted = copticFontsMap.get(font).get(copticChar + "");
    if (converted !== undefined) {
      sb.push(converted);
    }
  }

  // Jimkin combining
  let postJimkinCombining = "";
  if (jimkin !== JimkinCombining.NONE) {
    postJimkinCombining = switchCharForJimkin(sb.join(""), jimkin);
  } else {
    postJimkinCombining = sb.join("");
  }

  // Overline - remove char after overline, because its empty
  let postOverlineHandling = removeCharAfterOverline(postJimkinCombining);

  return postOverlineHandling;
}
