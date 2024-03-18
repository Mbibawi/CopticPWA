(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeCharAfterOverline = void 0;
    const OVERLINE_UNICODE_VAL = 773;
    /**
     * remove char after overline, because its empty
     *
     * @param {*} copticUnicode
     * @returns
     */
    const removeCharAfterOverline = (copticUnicode) => {
        if (copticUnicode === null || copticUnicode == "") {
            return copticUnicode;
        }
        // Traverse the string
        let stringbuffer = [];
        let chr = {};
        for (let i = 0; i < copticUnicode.length; i++) {
            chr = copticUnicode.substring(i, i + 1);
            if (copticUnicode.codePointAt(i) == OVERLINE_UNICODE_VAL) {
                // skip next char by incrementing
                i++;
            }
            stringbuffer.push(chr);
        }
        return stringbuffer.join("");
    };
    exports.removeCharAfterOverline = removeCharAfterOverline;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3ZlcmxpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL0BzdG1hcmt1cy9jb3B0aWMtZm9udC11bmljb2RlLWNvbnZlcnRlci9PdmVybGluZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQSxNQUFNLG9CQUFvQixHQUFHLEdBQUcsQ0FBQztJQUVqQzs7Ozs7T0FLRztJQUNJLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxhQUFhLEVBQUUsRUFBRTtRQUN2RCxJQUFJLGFBQWEsS0FBSyxJQUFJLElBQUksYUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ2xELE9BQU8sYUFBYSxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxzQkFBc0I7UUFDdEIsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDOUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksb0JBQW9CLEVBQUUsQ0FBQztnQkFDekQsaUNBQWlDO2dCQUNqQyxDQUFDLEVBQUUsQ0FBQztZQUNOLENBQUM7WUFDRCxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0lBaEJXLFFBQUEsdUJBQXVCLDJCQWdCbEMifQ==