const GetGoogleFonts = require('get-google-fonts');

const fonts = async () => {
  // Setup of the library instance by setting where we want
  // the output to go. CSS is relative to output font directory
  const instance = new GetGoogleFonts({
    outputDir: './dist/fonts',
    cssFile: './fonts.css',
  });

  const googleFontUrl = GetGoogleFonts.constructUrl({
    Bellefair: [400, 700],
    'Barlow Condensed': [400, 700],
  });

  // Grabs fonts and CSS from google and puts in the dist folder
  const result = await instance.download(googleFontUrl);

  return result;
};

module.exports = fonts;
