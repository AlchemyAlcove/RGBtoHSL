export default function(rgb) {
  let r = rgb[0] / 255;
  let g = rgb[1] / 255;
  let b = rgb[2] / 255;
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let delta = max - min;
  let h;
  let s;
  let l;

  if(max === min) {
    h = 0;
  } else if(r === max) {
    h = (g - b) / delta;
  } else if(g === max) {
    h = 2 + (b - r) / delta;
  } else if(b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if(h < 0) {
    h += 360;
  }

  l = (min + max) / 2;

  if(max === min) {
    s = 0;
  } else if(l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return([h, Math.round(s * 100), Math.round(l * 100)]);
}