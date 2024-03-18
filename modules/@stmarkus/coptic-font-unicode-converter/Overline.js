const OVERLINE_UNICODE_VAL = 773;

/**
 * remove char after overline, because its empty
 *
 * @param {*} copticUnicode
 * @returns
 */
export const removeCharAfterOverline = (copticUnicode) => {
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
