var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "exceljs", "path", "url", "./Jimkin.js", "./Overline.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertCopticText = exports.getJimkinCombiningMethods = exports.jimkinMethodValid = exports.getSupportedCopticFonts = exports.fontSupported = void 0;
    const exceljs_1 = __importDefault(require("exceljs"));
    const path_1 = __importDefault(require("path"));
    const url_1 = require("url");
    const Jimkin_js_1 = require("./Jimkin.js");
    const Overline_js_1 = require("./Overline.js");
    // to reference the excel-file correctly
    const __filename = (0, url_1.fileURLToPath)(import.meta.url);
    const __dirname = path_1.default.dirname(__filename);
    // CONSTANTS
    const COPTIC_FONT_COL_START = 6;
    const COPTIC_FONT_COL_END = 34;
    const COPTIC_FONT_ROW_START = 2;
    const COPTIC_FONT_ROW_END = 113;
    const COPTIC_FONT_UNICODE_COL = 5;
    const workbook = new exceljs_1.default.Workbook();
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
            for (let colInd = COPTIC_FONT_COL_START; colInd < COPTIC_FONT_COL_END; colInd++) {
                let fontName = worksheet.getRow(1).getCell(colInd).value;
                // create a map to hold the column data for this row
                let rowData = new Map();
                // loop through the columns of the row
                for (let rowInd = COPTIC_FONT_ROW_START; rowInd < COPTIC_FONT_ROW_END; rowInd++) {
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
        }
        catch (error) { }
        return copticFontsMap;
    }
    /**
     * check if provided coptic non-unicode font is valid
     *
     * @param {*} font to check
     * @returns true if font is supported and can be converted, else false
     */
    async function fontSupported(fontToCheck) {
        const fontMatrix = await getCopticFontMatrix();
        if (fontMatrix.get(fontToCheck) === undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    exports.fontSupported = fontSupported;
    /**
     * returns a list of supported non-unicode fonts which can be converted to unicode
     *
     * @returns list of font-names
     */
    async function getSupportedCopticFonts() {
        const fontList = await getCopticFontMatrix();
        return fontList.keys();
    }
    exports.getSupportedCopticFonts = getSupportedCopticFonts;
    /**
     * check if provided jimkin combining method is valid
     *
     * @param {*} method name to check
     * @returns true if provided jimkin combining method is valid, else false
     */
    function jimkinMethodValid(jimkin) {
        if (jimkin !== Jimkin_js_1.JimkinCombining.NONE &&
            jimkin !== Jimkin_js_1.JimkinCombining.COMBINE_WITH_CHAR_BEFORE &&
            jimkin !== Jimkin_js_1.JimkinCombining.COMBINE_WITH_CHAR_AFTER) {
            console.error(`Provided jimkin combining method ${jimkin} is not supported!`);
            console.log("Supported Methods: ", Jimkin_js_1.JimkinCombining);
            return false;
        }
        else {
            return true;
        }
    }
    exports.jimkinMethodValid = jimkinMethodValid;
    /**
     * returns a list of valid jimkin combining methods
     *
     * @returns list of valid jimkin combining methods
     */
    function getJimkinCombiningMethods() {
        return Jimkin_js_1.JimkinCombining;
    }
    exports.getJimkinCombiningMethods = getJimkinCombiningMethods;
    /**
     * converts the given string into coptic unicode characters if they match characters of the supported non-unicode fonts
     * @param {*} non-unicode font name of the provided coptic non-unicode text
     * @param {*} coptic non-unicode text
     * @param {*} jimkin jimkin combining method (COMBINE_WITH_CHAR_BEFORE, COMBINE_WITH_CHAR_AFTER, NONE)
     * @returns converted text
     */
    async function convertCopticText(font, copticPhrase, jimkin) {
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
        if (jimkin !== Jimkin_js_1.JimkinCombining.NONE) {
            postJimkinCombining = (0, Jimkin_js_1.switchCharForJimkin)(sb.join(""), jimkin);
        }
        else {
            postJimkinCombining = sb.join("");
        }
        // Overline - remove char after overline, because its empty
        let postOverlineHandling = (0, Overline_js_1.removeCharAfterOverline)(postJimkinCombining);
        return postOverlineHandling;
    }
    exports.convertCopticText = convertCopticText;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy9Ac3RtYXJrdXMvY29wdGljLWZvbnQtdW5pY29kZS1jb252ZXJ0ZXIvaW5kZXgubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFBLHNEQUE4QjtJQUM5QixnREFBd0I7SUFDeEIsNkJBQW9DO0lBQ3BDLDJDQUFtRTtJQUNuRSwrQ0FBd0Q7SUFFeEQsd0NBQXdDO0lBQ3hDLE1BQU0sVUFBVSxHQUFHLElBQUEsbUJBQWEsRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sU0FBUyxHQUFHLGNBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFM0MsWUFBWTtJQUNaLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sbUJBQW1CLEdBQUcsRUFBRSxDQUFDO0lBQy9CLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxDQUFDO0lBQ2hDLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxDQUFDO0lBRWxDLE1BQU0sUUFBUSxHQUFHLElBQUksaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QyxNQUFNLFVBQVUsR0FBRyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7SUFDdEQsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBRTVCOzs7O09BSUc7SUFDSCxLQUFLLFVBQVUsbUJBQW1CO1FBQ2hDLElBQUksY0FBYyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDO1lBQ0gsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6QyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25ELEVBQUU7WUFDRixLQUNFLElBQUksTUFBTSxHQUFHLHFCQUFxQixFQUNsQyxNQUFNLEdBQUcsbUJBQW1CLEVBQzVCLE1BQU0sRUFBRSxFQUNSLENBQUM7Z0JBQ0QsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUN6RCxvREFBb0Q7Z0JBQ3BELElBQUksT0FBTyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ3hCLHNDQUFzQztnQkFDdEMsS0FDRSxJQUFJLE1BQU0sR0FBRyxxQkFBcUIsRUFDbEMsTUFBTSxHQUFHLG1CQUFtQixFQUM1QixNQUFNLEVBQUUsRUFDUixDQUFDO29CQUNELElBQUksVUFBVSxHQUFHLFNBQVM7eUJBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUM7eUJBQ2QsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsS0FBSyxDQUFDO29CQUMxQyxJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQzlELElBQUksQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO3dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDcEMsQ0FBQztvQkFDRCxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQzt3QkFDNUQsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3hDLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUM7UUFDbEIsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxVQUFVLGFBQWEsQ0FBQyxXQUFXO1FBQzdDLE1BQU0sVUFBVSxHQUFHLE1BQU0sbUJBQW1CLEVBQUUsQ0FBQztRQUMvQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDOUMsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFQRCxzQ0FPQztJQUVEOzs7O09BSUc7SUFDSSxLQUFLLFVBQVUsdUJBQXVCO1FBQzNDLE1BQU0sUUFBUSxHQUFHLE1BQU0sbUJBQW1CLEVBQUUsQ0FBQztRQUM3QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBSEQsMERBR0M7SUFFRDs7Ozs7T0FLRztJQUNILFNBQWdCLGlCQUFpQixDQUFDLE1BQU07UUFDdEMsSUFDRSxNQUFNLEtBQUssMkJBQWUsQ0FBQyxJQUFJO1lBQy9CLE1BQU0sS0FBSywyQkFBZSxDQUFDLHdCQUF3QjtZQUNuRCxNQUFNLEtBQUssMkJBQWUsQ0FBQyx1QkFBdUIsRUFDbEQsQ0FBQztZQUNELE9BQU8sQ0FBQyxLQUFLLENBQ1gsb0NBQW9DLE1BQU0sb0JBQW9CLENBQy9ELENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLDJCQUFlLENBQUMsQ0FBQztZQUNwRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7YUFBTSxDQUFDO1lBQ04sT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQWRELDhDQWNDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQWdCLHlCQUF5QjtRQUN2QyxPQUFPLDJCQUFlLENBQUM7SUFDekIsQ0FBQztJQUZELDhEQUVDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksS0FBSyxVQUFVLGlCQUFpQixDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTTtRQUNoRSxNQUFNLGNBQWMsR0FBRyxNQUFNLG1CQUFtQixFQUFFLENBQUM7UUFFbkQsRUFBRTtRQUNGLHNCQUFzQjtRQUN0QixFQUFFO1FBQ0YsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1osSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDN0MsSUFBSSxVQUFVLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLFVBQVUsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDdEIsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixTQUFTO1lBQ1gsQ0FBQztZQUNELFNBQVMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUQsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFLENBQUM7Z0JBQzVCLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckIsQ0FBQztRQUNILENBQUM7UUFFRCxtQkFBbUI7UUFDbkIsSUFBSSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxNQUFNLEtBQUssMkJBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQyxtQkFBbUIsR0FBRyxJQUFBLCtCQUFtQixFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakUsQ0FBQzthQUFNLENBQUM7WUFDTixtQkFBbUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFFRCwyREFBMkQ7UUFDM0QsSUFBSSxvQkFBb0IsR0FBRyxJQUFBLHFDQUF1QixFQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFeEUsT0FBTyxvQkFBb0IsQ0FBQztJQUM5QixDQUFDO0lBaENELDhDQWdDQyJ9