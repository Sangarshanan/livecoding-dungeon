setcpm(113/4)

await initHydra({feedStrudel:1})

src(s0).kaleid(H("<2 4 8>"))
.diff(osc(1.2,0.4,7))
.modulateScale(osc(2.2,-0.28,1.2))
.rotate(0.5,0.1)
.thresh(0.6)
.invert()
.out()


let start_synth_full = sound("covers")
  .n(1)
  .note("a3")
  .fit()
  .speed(0.055)
  .slow(30)
  .gain(2)

let start_synth_beep = sound("covers")
  .n(2)
  .note("a3")
  .begin(0.8)
  .end(1)

let chords = note(
  "<[a3,c4,e4]!2 [e3,g3,b3]!2>"
)
  .s("sawtooth")
  .lpf(1000)
  .gain(0.3)
  .room(0.5)
  .orbit(2)

let bassline = note(
  "<[a1 a1 a2 a1 a1 a1 a2 a1] [a1 a1 a2 a1 a1 a1 a2 a1] [e1 e1 e2 e1 e1 e1 e2 e1] [e1 e1 e2 e1 e1 e1 e2 e1] [a1 a1 a2 a1 a1 a1 a2 a1] [a1 a1 a2 a1 a1 a1 a2 a1] [e1 e1 e2 e1 e1 e1 e2 e1] [e1 e1 e2 e1 e1 e1 e2 e1] [f1 f1 f2 f1 f1 f1 f2 f1] [g1 g1 g2 g1 g1 g1 g2 g1] [d1 d1 d2 d1 d1 d1 d2 d1] [e1 e1 e2 e1 e1 e1 e2 e1] [f1 f1 f2 f1 f1 f1 f2 f1] [g1 g1 g2 g1 g1 g1 g2 g1] [e1 e1 e2 e1 e1 e1 e2 e1] [e1 e1 e2 e1 e1 e1 e2 e1]>")
  .s("gm_acoustic_bass")
  .gain(2)
  .lpf(1000)

let breaks = s(
  "breaks/2"
).fit().gain(2)

let broken_breaks = s("breaks/2").fit()
  .scrub(irand(16).div(16).seg(8)
  .n(irand(2))
).orbit(2).gain(2)

let drums = stack(
  sound("bd*2"),
  sound("~ cp"),
)
  .bank("compurhythm1000")
  .gain(1)
  .fast(2)
  ._scope()

let melody = note("<[a3 - c4 - b3 - c4 e4 - a3 c4 - b3 - c4 a3] [- a3 c4 - b3 - c4 e4 - a3 c4 - b3 - c4 a3] [e3 - g3 - f#3 - g3 b3 - e3 g3 - f#3 - g3 e3] [- e3 g3 - f#3 - g3 b3 - e3 g3 - f#3 - g3 e3] [a3 - c4 - b3 - c4 e4 - a3 c4 - b3 - c4 a3] [- a3 c4 - b3 - c4 e4 - a3 c4 - b3 - c4 a3] [e3 - g3 - f#3 - g3 b3 - e3 g3 - f#3 - g3 e3] [- e3 g3 - f#3 - g3 b3 - e3 g3 - f#3 - g3 e3] [f3 f3 a3 f3 g3 f3 a3 c4 f3 f3 a3 f3 g3 f3 a3 f3] [g3 g3 b3 g3 a3 g3 b3 d4 g3 g3 b3 g3 a3 g3 b3 g3] [d3 d3 f3 d3 e3 d3 f3 a3 d3 d3 f3 d3 e3 d3 f3 d3] [e3 e3 g3 e3 f#3 e3 g3 b3 e3 e3 g3 e3 f#3 e3 g3 e3] [f3 f3 a3 f3 g3 f3 a3 c4 f3 f3 a3 f3 g3 f3 a3 f3] [g3 g3 b3 g3 a3 g3 b3 d4 g3 g3 b3 g3 a3 g3 b3 g3] [e3 e3 g3 e3 f#3 e3 g3 b3 e3 e3 g3 e3 f#3 e3 g3 e3] [e3 e3 g3 e3 f#3 e3 g3 b3 e3 e3 g3 e3 f#3 e3 g3 a3]>")
  .s("supersaw")
  .lpf(2000)
  .lpenv(irand(2))
  .duck("3:4")
  .duckdepth(0.8)
  .orbit(2)
  .decay(0.9)

$: arrange(
  [2.4, stack(start_synth_full)],
  [12, stack(bassline, chords, drums, melody)],
  [10, stack(bassline, chords, breaks, melody)],
  [10, stack(bassline, chords, broken_breaks, melody)],
  [12, stack(bassline, chords, drums, melody)],
)

all(x=>x.fft(4).scope({pos:0,smear:.95}))