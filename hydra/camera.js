// https://i.ibb.co/sJNNJxNR/Whats-App-Image-2026-04-02-at-20-15-38-1.jpg
// https://i.ibb.co/wFVShQVd/Whats-App-Image-2026-04-02-at-20-15-38.jpg
// https://i.ibb.co/HDQYdhXF/Whats-App-Image-2026-04-02-at-20-15-39-1.jpg
// https://i.ibb.co/4g01pFZc/Whats-App-Image-2026-04-02-at-20-15-39.jpg


// Camera
// s1.initCam()
//   .blend(src(s1).color(-2, 1, 1).hue(() => Math.sin(time * 1) * 0.10), 0.15)


// just image
// hush()
// s0.initImage("https://i.ibb.co/sJNNJxNR/Whats-App-Image-2026-04-02-at-20-15-38-1.jpg")
// src(s0).out()

// Zoom in out

// hush()
// s0.initImage("https://i.ibb.co/sJNNJxNR/Whats-App-Image-2026-04-02-at-20-15-38-1.jpg")

// src(o0)
//   .scale(() => 1 + Math.sin(time * 0.9) * 0.08)
//   .blend(src(s0), 0.04)
//   .out(o0)

// render(o0)

// remove blend for visual effect its needed for the image to render as as image
// slowly add the feedback loops methods


// feedback fractal loop

s0.initImage("https://i.ibb.co/sJNNJxNR/Whats-App-Image-2026-04-02-at-20-15-38-1.jpg")
src(o0)
  .scale(() => 1.005 + Math.sin(time * 0.05) * 0.002)
  .rotate(() => Math.sin(time * 0.03) * 0.004)
  .kaleid(() => Math.floor(3 + Math.abs(Math.sin(time * 0.07)) * 5))
  .pixelate(
    () => Math.floor(20 + Math.sin(time * 0.11) * 15),
    () => Math.floor(20 + Math.cos(time * 0.11) * 15)
  )
  .modulateScale(src(o0).brightness(-0.2), () => 0.05 + Math.sin(time * 0.1) * 0.025)
  .modulateHue(src(o0).hue(0.3), () => 0.3 + Math.sin(time * 0.07) * 0.15)
  .hue(() => 0.001 * Math.sin(time * 0.06))
  .colorama(() => 0.004 + Math.sin(time * 0.04) * 0.002)
  .brightness(-0.002)
  .blend(src(s0), 0.012)
  .out(o0)

render(o0)