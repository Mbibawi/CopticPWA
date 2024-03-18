const JIMKIN_UNICODE = "\u0300";

export const JimkinCombining = {
  COMBINE_WITH_CHAR_BEFORE: "COMBINE_WITH_CHAR_BEFORE",
  COMBINE_WITH_CHAR_AFTER: "COMBINE_WITH_CHAR_AFTER",
  NONE: "NONE",
};

export const switchCharForJimkin = (copticUnicode, jimkinCombining) => {
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
        case JimkinCombining.COMBINE_WITH_CHAR_BEFORE:
          try {
            chr = copticUnicode.substring(i - 1, i) + JIMKIN_UNICODE;
            stringbuffer.length = stringbuffer.length - 1; // remove last char
            stringbuffer.push(chr);
          } catch (error) {
            stringbuffer.push(chr);
          }
          break;

        case JimkinCombining.COMBINE_WITH_CHAR_AFTER:
          chr = copticUnicode.substring(i + 1, i + 2) + JIMKIN_UNICODE;
          i++;
          stringbuffer.push(chr);
          break;

        default:
          break;
      }
    } else {
      stringbuffer.push(chr);
    }
  }
  return stringbuffer.join("");
};
