
# coptic-font-unicode-converter

Converts Coptic non-unicode text to Coptic Unicode.

Coptic Unicode block was added to version 4.1 of the Unicode Standard to write the Coptic language.
More Information:
- [Coptic (Unicode block)](https://en.wikipedia.org/wiki/Coptic_(Unicode_block))
- [Coptic on symbl.cc](https://symbl.cc/en/unicode/blocks/coptic/)
- [Coptic Fonts and How-to type in Coptic (CopticChurch.net)](https://www.copticchurch.net/coptic_fonts)
- [Coptic Unicode Keyboard](https://www.lexilogos.com/keyboard/coptic.htm)



## Installation

```sh
npm install @stmarkus/coptic-font-unicode-converter
```

## Usage

```javascript
import { convertCopticText } from "@stmarkus/coptic-font-unicode-converter";

const copticPhrase = ";Ele;/con ;/mac ;o Yeoc";
const font = "NEW_ATHANASIUS";
const jimkin = "COMBINE_WITH_CHAR_AFTER";

const convertedText = await convertCopticText(font, copticPhrase, jimkin);
console.log("convertedText: ", convertedText);
```

### Supported Coptic Non-Unicode Fonts 

  - CS
  - NEW_ATHANASIUS
  - ATHANASIUS
  - AVVA_SHENOUDA
  - AVVA_MARCOS
  - AVVA_BISHOY
  - BISHOP_TADROS
  - SAINT_ABRAHAM
  - ANTONIOUS
  - ANTONIOUS_THIN
  - ANTONIOUSJ
  - ANTONIOUSOL
  - COPTIC
  - COPTIC1
  - COPTICII
  - COPTONEW
  - KOPTOS
  - SAINTGEORGES
  - KYRILLOS
  - KOPTWI3
  - KPTWI3B
  - AVVA_KYRILLOS
  - SAINT_MARINA
  - SPACHMIM
  - MENA1
  - POPE_SHENOUDA_III
  - NOPHER

### Jimkin combining method

| Method | Notes |
| ------ | ------ |
| COMBINE_WITH_CHAR_BEFORE | The charachter before the Jimkin gets combined |
| COMBINE_WITH_CHAR_AFTER | The charachter after the Jimkin gets combined |
| NONE | No combining method |

## Method overview

#### `async function convertCopticText(font, copticPhrase, jimkin)`
converts the given string into coptic unicode characters if they match characters of the supported non-unicode fonts

 * **Parameters:**
   * `font` — non-unicode font name of the provided coptic non-unicode text
   * `copticPhrase` — coptic non-unicode text
   * `jimkin` — jimkin jimkin combining method (COMBINE_WITH_CHAR_BEFORE, COMBINE_WITH_CHAR_AFTER, NONE)
 * **Returns:** converted text

#### `async function fontSupported(fontToCheck)`
check if provided coptic non-unicode font is valid
 * **Parameters:** `{*}` — font to check
 * **Returns:** true if font is supported and can be converted, else false

#### `async function getSupportedCopticFonts()`
returns a list of supported non-unicode fonts which can be converted to unicode
 * **Returns:** list of font-names

#### `function jimkinMethodValid(jimkin)`
check if provided jimkin combining method is valid
 * **Parameters:** `jimkin` — method name to check
 * **Returns:** true if provided jimkin combining method is valid, else false

#### `function getJimkinCombiningMethods()`
returns a list of valid jimkin combining methods
 * **Returns:** list of valid jimkin combining methods


## Release Notes
### 1.1.3
- corrected include of Font Matrix
### 1.1.2
- Updated Font Matrix (all2Unicode_v3.xlsx): added dot handling for fonts Coptic and Coptic1
### 1.1.1
- remove char after overline, because its empty
### 1.1.0
- added support for Coptic non-unicode font Coptic1
- added jest tests
### 1.0.3
- added handling of Coptic Symbols and Nomina Sacra 