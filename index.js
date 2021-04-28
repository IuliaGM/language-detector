const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const phrase = process.argv[2];
const detectedLang = franc(phrase, { minLength: 2 });

if (detectedLang === 'und') {
  console.log("Sorry, couldn't figure it out! Try adding some more words.".brightRed)
} else {
  const language = langs.where('3', detectedLang);
  console.log(`Our best guess is: ${language.name}`.brightBlue)
}


