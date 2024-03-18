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
    const supported = await (0, index_mjs_1.fontSupported)("NEW_ATHANASIUS");
    test("Testing fontSupported method. Expecting NEW_ATHANASIUS to be in the list", () => {
        expect(supported).toBeTruthy();
    });
    const fonts = await (0, index_mjs_1.getSupportedCopticFonts)();
    test("Testing getSupportedCopticFonts method. Should return CS as first font.", () => {
        expect("CS").toBe(fonts.next().value);
    });
    const jMethod = (0, index_mjs_1.jimkinMethodValid)("NONE");
    console.log("jMethod: ");
    test("Testing jimkinMethodValid method. NONE is a valid Method", () => {
        expect(jMethod).toBeTruthy();
    });
    const jMethods = (0, index_mjs_1.getJimkinCombiningMethods)();
    test("Testing getJimkinCombiningMethods method. Should return 3 items", () => {
        expect("COMBINE_WITH_CHAR_BEFORE").toBe(jMethods.COMBINE_WITH_CHAR_BEFORE);
        expect("COMBINE_WITH_CHAR_AFTER").toBe(jMethods.COMBINE_WITH_CHAR_AFTER);
        expect("NONE").toBe(jMethods.NONE);
    });
    let convertNEWATH = await (0, index_mjs_1.convertCopticText)("NEW_ATHANASIUS", "Ten y/nou ;e;pswi ;nte ;e;P_ ;nte nijom. Hiten nieu,/ ;nte ni= : P_ ;ari;hmot nan : ;pse ;nte pi+", "COMBINE_WITH_CHAR_AFTER");
    test("Testing converting NEW_ATHANASIUS text.", () => {
        expect("Ⲧⲉⲛ ⲑⲏⲛⲟⲩ ⲉ̀ⲡ̀ϣⲱⲓ ⲛ̀ⲧⲉ ⲉ̀Ⲡ̀⳪ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ. Ϩⲓⲧⲉⲛ ⲛⲓⲉⲩⲭⲏ ⲛ̀ⲧⲉ ⲛⲓ⳥ : Ⲡ⳪ ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ : ⲡ̀ϣⲉ ⲛ̀ⲧⲉ ⲡⲓⳮ").toBe(convertNEWATH);
    });
    let convertCOPTIC1 = await (0, index_mjs_1.convertCopticText)("COPTIC1", "P/rp ety~ro m~p~h/t m~v~rwmi e~ounof: e~p~jiny~re pefho rasi qen ouneh: m~v~r/] e~tauernis] n~je nekh~b/oui~ Po#c#: k~yamio~ n~hwb niben qen oucovia~. a#l#.", "COMBINE_WITH_CHAR_BEFORE");
    test("Testing converting COPTIC1 text.", () => {
        expect("Ⲡⲏⲣⲡ ⲉⲧⲑ̀ⲣⲟ ⲙ̀ⲡ̀ϩⲏⲧ ⲙ̀ⲫ̀ⲣⲱⲙⲓ ⲉ̀ⲟⲩⲛⲟϥ: ⲉ̀ⲡ̀ϫⲓⲛⲑ̀ⲣⲉ ⲡⲉϥϩⲟ ⲣⲁϣⲓ ϧⲉⲛ ⲟⲩⲛⲉϩ: ⲙ̀ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁⲩⲉⲣⲛⲓϣϯ ⲛ̀ϫⲉ ⲛⲉⲕϩ̀ⲃⲏⲟⲩⲓ̀ Ⲡⲟ̅ⲥ̅: ⲕ̀ⲑⲁⲙⲓⲟ̀ ⲛ̀ϩⲱⲃ ⲛⲓⲃⲉⲛ ϧⲉⲛ ⲟⲩⲥⲟⲫⲓⲁ̀. ⲁ̅ⲗ̅.").toBe(convertCOPTIC1);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvQHN0bWFya3VzL2NvcHRpYy1mb250LXVuaWNvZGUtY29udmVydGVyL3Rlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFBQSwyQ0FNcUI7SUFFckIsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFBLHlCQUFhLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RCxJQUFJLENBQUMsMEVBQTBFLEVBQUUsR0FBRyxFQUFFO1FBQ3BGLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBQSxtQ0FBdUIsR0FBRSxDQUFDO0lBQzlDLElBQUksQ0FBQyx5RUFBeUUsRUFBRSxHQUFHLEVBQUU7UUFDbkYsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLE9BQU8sR0FBRyxJQUFBLDZCQUFpQixFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekIsSUFBSSxDQUFDLDBEQUEwRCxFQUFFLEdBQUcsRUFBRTtRQUNwRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLFFBQVEsR0FBRyxJQUFBLHFDQUF5QixHQUFFLENBQUM7SUFDN0MsSUFBSSxDQUFDLGlFQUFpRSxFQUFFLEdBQUcsRUFBRTtRQUMzRSxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDM0UsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxhQUFhLEdBQUcsTUFBTSxJQUFBLDZCQUFpQixFQUN6QyxnQkFBZ0IsRUFDaEIsbUdBQW1HLEVBQ25HLHlCQUF5QixDQUMxQixDQUFDO0lBQ0YsSUFBSSxDQUFDLHlDQUF5QyxFQUFFLEdBQUcsRUFBRTtRQUNuRCxNQUFNLENBQ0osbUdBQW1HLENBQ3BHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxjQUFjLEdBQUcsTUFBTSxJQUFBLDZCQUFpQixFQUMxQyxTQUFTLEVBQ1QsOEpBQThKLEVBQzlKLDBCQUEwQixDQUMzQixDQUFDO0lBQ0YsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsRUFBRTtRQUM1QyxNQUFNLENBQ0osOEpBQThKLENBQy9KLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDIn0=