// Creating a simple node application that guesses the language you write as an input.

import { franc, francAll } from 'franc';
import langs from "langs";
// const { langs } = pkg1;
import colors from "colors";
// const { colors } = pkg2;

// const langs = require("langs");
// const colors = require("colors");

try {
    const langInput = process.argv.slice(2);
    const data = langInput[0];
    const langCode = franc(data);
    const langName = langs.where("3", langCode).name;
    console.log(`Your detected language is: ${colors.green(langName)}`);
} catch (err) {
    console.error(`${colors.red("Please enter a longer text/input. Thank you.")}`);
}