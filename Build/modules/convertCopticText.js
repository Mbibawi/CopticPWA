(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./@stmarkus/coptic-font-unicode-converter/index.mjs"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertCopticFontFromNPMPackage = void 0;
    const index_mjs_1 = require("./@stmarkus/coptic-font-unicode-converter/index.mjs");
    convertCopticFontFromNPMPackage("èfcmarwout `nje ~P_ V; `m`pIcrahl > vhet`iri `nan`]vhri `mmauatf > `f`cmarwout `nje piran eqouab  `nte pefw`ou ]a `èene > ec`èe]wpi ec`e]wpi >");
    async function convertCopticFontFromNPMPackage(text, fontName = 'ATHANASIUS') {
        let convertedText = await (0, index_mjs_1.convertCopticText)(fontName, text, "COMBINE_WITH_CHAR_AFTER");
        console.log("convertedText: ", convertedText);
    }
    exports.convertCopticFontFromNPMPackage = convertCopticFontFromNPMPackage;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydENvcHRpY1RleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL2NvbnZlcnRDb3B0aWNUZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFBLG1GQUF3RjtJQUV4RiwrQkFBK0IsQ0FBQyxnSkFBZ0osQ0FBQyxDQUFDO0lBRTNLLEtBQUssVUFBVSwrQkFBK0IsQ0FBQyxJQUFXLEVBQUUsV0FBaUIsWUFBWTtRQUM1RixJQUFJLGFBQWEsR0FBRyxNQUFNLElBQUEsNkJBQWlCLEVBQ3pDLFFBQVEsRUFDUixJQUFJLEVBQ0oseUJBQXlCLENBQzFCLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFQSCwwRUFPRyJ9