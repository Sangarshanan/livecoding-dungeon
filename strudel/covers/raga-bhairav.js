setcpm(30)
/*
Charanjit Singh - Raga Bhairav
Ten Ragas to a Disco Beat
*/

let start_synth_full = sound("covers")
  .note("c#2")
  .slow(8)
  .clip(1)
  .lpenv(1.5, 0, 0)
  .gain(0.8)

let start_synth_loop = sound("covers")
  .note("c#2")
  .begin(0.844)
  .end(1)
  .loop(1)
  .lpenv(1.5, 0, 0)
  .gain(0.5)

let synth = cat(
  note("d3@2 d4@2 d3@2 d4 d3@2 d#4@2 d#3 d#4@2 d4@2"),
  note("a#3 c#4@2 a3 a#3@2 g3 a3@2 f#3 g3@2 d#3 f#3@3"),
  note("d3@2 d4@2 d3@2 d4 d3@2 d4@2 d3 d4@2 d3@2"),
  note("f#3 d#3@2 g3 f#3@2 a3 g3@2 a#3 a3@2 c#4 a#3@3"),
)
  .s("supersaw")
  .distort("1.5:.3")
  .lpf("800")
  .lpenv(2.5, 0, 0)
  .gain(2)
  .velocity(signal(x => Math.random()).range(0.4,0.7))
  ._pianoroll({
})

let bassline = cat(
  note("d2@2 d3@2 d2@5 d#3@2 d#2 d#3@2 d3@2"),
  note("a#2 c#3@2 a2@5 a2@2 f#2 g2@2 f#2@4"),
  note("d2@2 d3@2 d2@5 d3@2 d3@3 d2@2"),
  note("f#2 d#2@2 g2@5 g2@2 a#2 a2@5 a#2@3"),
)
  .s("gm_acoustic_bass")
  .lpf("100")
  .gain(1)
  .release(0.5)

let drums = stack(
  sound("bd*2"),
  sound("~ cp"),
  sound("<~ ~ ~ [~ oh ~ oh]>")
)
  .bank("RolandTR909")
  .gain(1)
  .fast(2)
  ._scope()

let up_down = note(
  "[c#2 d2 f2 f#2 g2 a2 c3 c#3 d3 f3 f#3 g3 a3 c4 c#4 d4 \
   c#4 c4 a3 g3 f#3 f3 d3 c#3 c3 a2 g2 f#2 f2 d2 c#2 d2]*0.5"
)
.s("sawtooth").lpf(400).lpenv(5, 4, 0).gain(0.8)
.pan(signal(x => Math.random()).pow(2).speed(0.1))
._pianoroll()

$: arrange(
  [6.5, stack(start_synth_full, start_synth_loop)],
  [4, stack(bassline, synth)],
  [4, stack(start_synth_loop, synth, bassline, drums)],
  [20, stack(start_synth_loop, synth, up_down, drums)],
)