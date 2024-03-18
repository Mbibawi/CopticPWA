import { convertCopticText } from "./index.mjs";

let newAthanasius = await convertCopticText(
  "NEW_ATHANASIUS",
  "Ten y/nou ;e;pswi ;nte ;e;P_ ;nte nijom. Hiten nieu,/ ;nte ni= : P_ ;ari;hmot nan : ;pse ;nte pi+",
  "COMBINE_WITH_CHAR_AFTER"
);
console.log("convertedText: ", newAthanasius);

let coptic1 = await convertCopticText(
  "COPTIC1",
  "P/rp ety~ro m~p~h/t m~v~rwmi e~ounof: e~p~jiny~re pefho rasi qen ouneh: m~v~r/] e~tauernis] n~je nekh~b/oui~ Po#c#: k~yamio~ n~hwb niben qen oucovia~. a#l#.",
  "COMBINE_WITH_CHAR_BEFORE"
);
console.log("convertedText: ", coptic1);
