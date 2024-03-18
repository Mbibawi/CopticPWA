import {
  jimkinMethodValid,
  getJimkinCombiningMethods,
  fontSupported,
  getSupportedCopticFonts,
  convertCopticText,
} from "./index.mjs";

const supported = await fontSupported("NEW_ATHANASIUS");
test("Testing fontSupported method. Expecting NEW_ATHANASIUS to be in the list", () => {
  expect(supported).toBeTruthy();
});

const fonts = await getSupportedCopticFonts();
test("Testing getSupportedCopticFonts method. Should return CS as first font.", () => {
  expect("CS").toBe(fonts.next().value);
});

const jMethod = jimkinMethodValid("NONE");
console.log("jMethod: ");
test("Testing jimkinMethodValid method. NONE is a valid Method", () => {
  expect(jMethod).toBeTruthy();
});

const jMethods = getJimkinCombiningMethods();
test("Testing getJimkinCombiningMethods method. Should return 3 items", () => {
  expect("COMBINE_WITH_CHAR_BEFORE").toBe(jMethods.COMBINE_WITH_CHAR_BEFORE);
  expect("COMBINE_WITH_CHAR_AFTER").toBe(jMethods.COMBINE_WITH_CHAR_AFTER);
  expect("NONE").toBe(jMethods.NONE);
});

let convertNEWATH = await convertCopticText(
  "NEW_ATHANASIUS",
  "Ten y/nou ;e;pswi ;nte ;e;P_ ;nte nijom. Hiten nieu,/ ;nte ni= : P_ ;ari;hmot nan : ;pse ;nte pi+",
  "COMBINE_WITH_CHAR_AFTER"
);
test("Testing converting NEW_ATHANASIUS text.", () => {
  expect(
    "Ⲧⲉⲛ ⲑⲏⲛⲟⲩ ⲉ̀ⲡ̀ϣⲱⲓ ⲛ̀ⲧⲉ ⲉ̀Ⲡ̀⳪ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ. Ϩⲓⲧⲉⲛ ⲛⲓⲉⲩⲭⲏ ⲛ̀ⲧⲉ ⲛⲓ⳥ : Ⲡ⳪ ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ : ⲡ̀ϣⲉ ⲛ̀ⲧⲉ ⲡⲓⳮ"
  ).toBe(convertNEWATH);
});

let convertCOPTIC1 = await convertCopticText(
  "COPTIC1",
  "P/rp ety~ro m~p~h/t m~v~rwmi e~ounof: e~p~jiny~re pefho rasi qen ouneh: m~v~r/] e~tauernis] n~je nekh~b/oui~ Po#c#: k~yamio~ n~hwb niben qen oucovia~. a#l#.",
  "COMBINE_WITH_CHAR_BEFORE"
);
test("Testing converting COPTIC1 text.", () => {
  expect(
    "Ⲡⲏⲣⲡ ⲉⲧⲑ̀ⲣⲟ ⲙ̀ⲡ̀ϩⲏⲧ ⲙ̀ⲫ̀ⲣⲱⲙⲓ ⲉ̀ⲟⲩⲛⲟϥ: ⲉ̀ⲡ̀ϫⲓⲛⲑ̀ⲣⲉ ⲡⲉϥϩⲟ ⲣⲁϣⲓ ϧⲉⲛ ⲟⲩⲛⲉϩ: ⲙ̀ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁⲩⲉⲣⲛⲓϣϯ ⲛ̀ϫⲉ ⲛⲉⲕϩ̀ⲃⲏⲟⲩⲓ̀ Ⲡⲟ̅ⲥ̅: ⲕ̀ⲑⲁⲙⲓⲟ̀ ⲛ̀ϩⲱⲃ ⲛⲓⲃⲉⲛ ϧⲉⲛ ⲟⲩⲥⲟⲫⲓⲁ̀. ⲁ̅ⲗ̅."
  ).toBe(convertCOPTIC1);
});
