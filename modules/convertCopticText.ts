import { convertCopticText } from "./@stmarkus/coptic-font-unicode-converter/index.mjs";

convertCopticFontFromNPMPackage("èfcmarwout `nje ~P_ V; `m`pIcrahl > vhet`iri `nan`]vhri `mmauatf > `f`cmarwout `nje piran eqouab  `nte pefw`ou ]a `èene > ec`èe]wpi ec`e]wpi >");

export async function convertCopticFontFromNPMPackage(text:string, fontName:string ='ATHANASIUS') {
    let convertedText = await convertCopticText(
      fontName,
      text,
      "COMBINE_WITH_CHAR_AFTER"
    );
    console.log("convertedText: ", convertedText);
  }