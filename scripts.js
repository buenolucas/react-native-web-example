const swatches = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const colors = ['grey'];

for (k in colors) {
  for (s in swatches) {
    console.log(`${colors[k]}${swatches[s]}: ColorValue`);
  }
}
