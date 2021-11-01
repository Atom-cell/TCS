let tinycolor = require("tinycolor2");

const colorInfo = (c) => {
  let color = tinycolor(c);
  console.log(color.toHexString());
  console.log(color.toHslString());
  console.log(color.toHsvString());
  console.log(color.toRgbString());
};

exports.colorInfo = colorInfo;
