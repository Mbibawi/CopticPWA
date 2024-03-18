(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./index.mjs"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const index_mjs_1 = require("./index.mjs");
    let newAthanasius = await (0, index_mjs_1.convertCopticText)("NEW_ATHANASIUS", "Ten y/nou ;e;pswi ;nte ;e;P_ ;nte nijom. Hiten nieu,/ ;nte ni= : P_ ;ari;hmot nan : ;pse ;nte pi+", "COMBINE_WITH_CHAR_AFTER");
    console.log("convertedText: ", newAthanasius);
    let coptic1 = await (0, index_mjs_1.convertCopticText)("COPTIC1", "P/rp ety~ro m~p~h/t m~v~rwmi e~ounof: e~p~jiny~re pefho rasi qen ouneh: m~v~r/] e~tauernis] n~je nekh~b/oui~ Po#c#: k~yamio~ n~hwb niben qen oucovia~. a#l#.", "COMBINE_WITH_CHAR_BEFORE");
    console.log("convertedText: ", coptic1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvQHN0bWFya3VzL2NvcHRpYy1mb250LXVuaWNvZGUtY29udmVydGVyL2V4YW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFBQSwyQ0FBZ0Q7SUFFaEQsSUFBSSxhQUFhLEdBQUcsTUFBTSxJQUFBLDZCQUFpQixFQUN6QyxnQkFBZ0IsRUFDaEIsbUdBQW1HLEVBQ25HLHlCQUF5QixDQUMxQixDQUFDO0lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QyxJQUFJLE9BQU8sR0FBRyxNQUFNLElBQUEsNkJBQWlCLEVBQ25DLFNBQVMsRUFDVCw4SkFBOEosRUFDOUosMEJBQTBCLENBQzNCLENBQUM7SUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDIn0=