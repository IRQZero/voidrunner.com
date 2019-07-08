const Hydra = require('hydra-synth')

window.onload = function () {
  let bgCanvasEl = document.getElementById('bgc')
  const bgHydra = new Hydra({
    canvas: bgCanvasEl,
    detectAudio: false,
    width: "100vw",
    height: "100vh"
  });

  osc([81]).kaleid(2).color(0.3,0.5).rotate([40]).scale(14, 0.5, 8)
  .kaleid(24)
  .scrollY(0.5, 1.4)
  .mask(
    osc(512,({time}) => Math.sin(time/24) + 0.9 ) // offset
    .kaleid(3), 1, 0.5)// end mask
  .rotate(0.4)
  .scrollX(1, 9)
  .out(o1);
osc([14], [2]).rotate([14], [.04].fast(0.5), [7], [0.02].fast(20)).blend(o1, 7).out(o2);
osc(36).modulatePixelate(o1, 18).scrollX(0.3, [0.3, 3]).mult(o2, 256).mult(o1, -8)

.kaleid(2).color(0.3,0.5).rotate([40]).scale(1, 5, 2)
  .mask(
    osc(512,({time}) => Math.sin(time/24) + 0.25 ) // offset
    .kaleid(3), 1, 0.9)// end mask
  .modulateRotate(o2, 0.4)
  .out(o3);
osc([1.4], [2]).rotate([1.4], [.4].fast(0.5), [17], [2].fast(200)).blend(o1, 7)
.blend(o3, 0.8).out(o0);

  let titleCanvasEl = document.getElementById('tbc')
  const titleBarHydra = new Hydra({
    canvas: titleCanvasEl,
    detectAudio: false,
    width: "100vw",
    height: "100%"
  });

  osc([24]).kaleid(2).color(0.3,0.5).rotate([40]).scale(1, 5, 0.8)
  .kaleid(12).mask(
    osc(512,({time}) => Math.sin(time/24) + 0.25 ) // offset
    .kaleid(3), 1, 0.9)// end mask
    .rotate(0.4)
    .out(o1);
osc([14], [2]).rotate([1.4], [.4].fast(0.5), [17], [2].fast(200)).blend(o1, 7).out(o2);
osc([8]).blend(o2, 0.8).out(o0);

}