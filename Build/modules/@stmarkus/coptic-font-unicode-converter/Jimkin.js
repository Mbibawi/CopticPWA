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
    exports.switchCharForJimkin = exports.JimkinCombining = void 0;
    const JIMKIN_UNICODE = "\u0300";
    exports.JimkinCombining = {
        COMBINE_WITH_CHAR_BEFORE: "COMBINE_WITH_CHAR_BEFORE",
        COMBINE_WITH_CHAR_AFTER: "COMBINE_WITH_CHAR_AFTER",
        NONE: "NONE",
    };
    const switchCharForJimkin = (copticUnicode, jimkinCombining) => {
        if (copticUnicode === null || copticUnicode == "") {
            return copticUnicode;
        }
        // Traverse the string
        let stringbuffer = [];
        let chr = {};
        for (let i = 0; i < copticUnicode.length; i++) {
            chr = copticUnicode.substring(i, i + 1);
            if (chr.includes("`")) {
                switch (jimkinCombining) {
                    case exports.JimkinCombining.COMBINE_WITH_CHAR_BEFORE:
                        try {
                            chr = copticUnicode.substring(i - 1, i) + JIMKIN_UNICODE;
                            stringbuffer.length = stringbuffer.length - 1; // remove last char
                            stringbuffer.push(chr);
                        }
                        catch (error) {
                            stringbuffer.push(chr);
                        }
                        break;
                    case exports.JimkinCombining.COMBINE_WITH_CHAR_AFTER:
                        chr = copticUnicode.substring(i + 1, i + 2) + JIMKIN_UNICODE;
                        i++;
                        stringbuffer.push(chr);
                        break;
                    default:
                        break;
                }
            }
            else {
                stringbuffer.push(chr);
            }
        }
        return stringbuffer.join("");
    };
    exports.switchCharForJimkin = switchCharForJimkin;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSmlta2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy9Ac3RtYXJrdXMvY29wdGljLWZvbnQtdW5pY29kZS1jb252ZXJ0ZXIvSmlta2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFBLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQztJQUVuQixRQUFBLGVBQWUsR0FBRztRQUM3Qix3QkFBd0IsRUFBRSwwQkFBMEI7UUFDcEQsdUJBQXVCLEVBQUUseUJBQXlCO1FBQ2xELElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQztJQUVLLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLEVBQUU7UUFDcEUsSUFBSSxhQUFhLEtBQUssSUFBSSxJQUFJLGFBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUNsRCxPQUFPLGFBQWEsQ0FBQztRQUN2QixDQUFDO1FBQ0Qsc0JBQXNCO1FBQ3RCLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlDLEdBQUcsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3RCLFFBQVEsZUFBZSxFQUFFLENBQUM7b0JBQ3hCLEtBQUssdUJBQWUsQ0FBQyx3QkFBd0I7d0JBQzNDLElBQUksQ0FBQzs0QkFDSCxHQUFHLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQzs0QkFDekQsWUFBWSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjs0QkFDbEUsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDekIsQ0FBQzt3QkFBQyxPQUFPLEtBQUssRUFBRSxDQUFDOzRCQUNmLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3pCLENBQUM7d0JBQ0QsTUFBTTtvQkFFUixLQUFLLHVCQUFlLENBQUMsdUJBQXVCO3dCQUMxQyxHQUFHLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUM7d0JBQzdELENBQUMsRUFBRSxDQUFDO3dCQUNKLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3ZCLE1BQU07b0JBRVI7d0JBQ0UsTUFBTTtnQkFDVixDQUFDO1lBQ0gsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsQ0FBQztRQUNILENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0lBbkNXLFFBQUEsbUJBQW1CLHVCQW1DOUIifQ==