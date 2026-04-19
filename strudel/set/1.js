setcps(0.5)

await initHydra()

osc(0, 0.5, 300)
.color(0.9, 0.7, 0.8)
.diff(
osc(45, 0.3, 100)
.color(0.9, 0.9, 0.9)
.rotate(0.18)
.pixelate(12)
.kaleid()
)
.scrollX(10)
.colorama()
.luma()
.repeatX(4)
.repeatY(4)
.modulate(
osc(1, -0.9, 300)
)
.scale(0.7)
.out()

let sc = "E3:major:pentatonic"

// roguentropy and code dungeon //
// operating on HDMI and milk //
// code is the music //

let gain1_low = slider(0, 0.1, 2)
let gain1_high = slider(0, 0.5, 2)

// we start with a drone (obviously)

$dro: s("triangle")
  .seg(8)
  .fm(sine.range(1,10).fast(2))
  .fmh(slider(0.5, 0.5, 10))
  .adsr("0.3:0.1:0.5:1")
  .room(0.5)
  .phaser(0.3)
  .pan(perlin.slow(2))
  .postgain(gain1_low) 
  .colorparty(0.12)
  ._scope()


_deep: s("saw*1").lpf("<200 100 300>" ).lpq("10") // 8, 10
  .o(1)
  .scale(sc)
  .lfo({depth:4,rate:8})
  .lpenv("0") // 0, -2, -3
  .lpattack(1)
  .postgain(gain1_low)
  .colorparty(0.73)
  ._spectrum()


_pads: n("[2,4,6] [3,5,7]")
    .scale(sc)
    .slow(1)
    .pan(perlin.slow(4))
    .sound("tubularbells")
    .room("1.3")
    .rlpf(0.5) // comment out & make it loud
    .fm(1)
    .postgain(gain1_high)
  .colorparty(0.31)
  ._spectrum()


_bass2: note("<c1 eb1 f1 g1>*2")
  .o(1)
  .scale(sc)
  .s("saw")
  .lpf(200)
  .lpq("10") // 10, 20
  .lpenv("-4")
  .lpattack(0.9)
  .postgain(gain1_high)
  .colorparty(0.44)
  ._scope()


_$: riser(4, 8, (x, rise) => x.s("supersaw").detune(rise))


_kick: s("bd*4")
  .duck("3:4")
  .duckdepth(.8)
  .o(1)
  .fm(5)
 .duckorbit(2).duckattack(0)
 .postgain(0.9)
  .colorparty(0.65)
  ._scope()


_bg1: s("<bg>")
  .scale(sc)
  .n(0)
  .begin(0.3)
  .slow(4) // 2, 4
  // .slow(4).late(0.09).chop(16) // comment out for action
  .postgain(1)
  .colorparty(0.09)
  ._spectrum()


// MUTE
_loop: s("drums")
  .n(0)
  .ifit(2)
  .accent(2)
  .postgain(1.5)
  .colorparty(0.21)
  ._scope()



// 2 Raga_Brv_7600 //

let gain2_drum = slider(0, 0.1, 2)
let gain2_melody = slider(0, 0.5, 4)

let synth = cat(
  note("d3@2 d4@2 d3@2 d4 d3@2 d#4@2 d#3 d#4@2 d4@2"),
  note("a#3 c#4@2 a3 a#3@2 g3 a3@2 f#3 g3@2 d#3 f#3@3"),
  note("d3@2 d4@2 d3@2 d4 d3@2 d4@2 d3 d4@2 d3@2"),
  note("f#3 d#3@2 g3 f#3@2 a3 g3@2 a#3 a3@2 c#4 a#3@3"),
)
  .s("supersaw")
  .distort("1.5:.3")
  .rlpf(0.55)
  .lpenv(2.5, 0, 0)
  .velocity(signal(x => Math.random()).range(1.2,1.5))
  .acidenv(slider(0.5, 0.1, 2))
  .postgain(gain2_melody)
  .colorparty(0.58)
  ._pianoroll()

let bassline = cat(
  note("d2@2 d3@2 d2@5 d#3@2 d#2 d#3@2 d3@2"),
  note("a#2 c#3@2 a2@5 a2@2 f#2 g2@2 f#2@4"),
  note("d2@2 d3@2 d2@5 d3@2 d3@3 d2@2"),
  note("f#2 d#2@2 g2@5 g2@2 a#2 a2@5 a#2@3"),
)
  .s("gm_acoustic_bass")
  .lpf("100")
  .release(0.5)
  .postgain(gain2_melody)
   .colorparty(0.36)
   ._scope()

let drums = stack(
  sound("bd*2"),
  sound("~ cp"),
  sound("<~ ~ ~ [~ oh ~ oh]>")
)
  .bank("RolandTR909")
  .fast(2)
  .postgain(gain2_drum)
  ._scope()
   .colorparty(0.77)

let up_down = note(
  "[c#2 d2 f2 f#2 g2 a2 c3 c#3 d3 f3 f#3 g3 a3 c4 c#4 d4 \
   c#4 c4 a3 g3 f#3 f3 d3 c#3 c3 a2 g2 f#2 f2 d2 c#2 d2]*0.5"
)
.s("sawtooth").lpf(400).lpenv(5, 4, 0)
.pan(signal(x => Math.random()).pow(2).speed(0.1))
.postgain(gain2_drum)
._pianoroll()
 .colorparty(0.49)

_$: bassline

_$: synth

_$: drums

_$: up_down

// The Rambla //

let gain3_crushed_mel = slider(0, 0.1, 1.5)
let gain3 = slider(0.1, 0.1, 2)

_crushed_mel: n("-4!6 -4#!2 -3!4 -1!2 0b!2")
  .scale(sc)
  .s("supersaw")
  .layer(x=>x.clip(0.5),
         x=>x.crush(3),
         x=>x.clip(0.025).dist(4).gain(0.15))
  .glide(0.5)
  .postgain(gain3_crushed_mel)
  ._scope()
  .colorparty(0.19)


// note(`[~ E4 A4@2 ~ F#4 A4@2]
//   [~ F#4 A4@2 G4 F#4 E4@2]
//   [~ E4 G4@2 D4 E4 G4@2]
//   [D4 E4 A4@2 F#4 ~ D4@2]`)

// 0 -1 0 2 4 2 4 2 -1 -3 -1 0 2 0 2 0 -3@3 -8 -3 -1 0 -3 -5@3 -3 -1 0 2 -1
_melody: note("0 -1 0 2".add(4))
  .fast(2) // .slow, fast
  .scale(sc)
  .s("gm_choir_aahs")
  .attack(0.005).legato(0.9).rlpf(0.5)
  .postgain(gain3)
  .glide(0.4) // Find out when less notes
  .colorparty(0.81)
  ._pianoroll()

_basss: s("allobass").ifit(2).postgain(gain3)
  .colorparty(0.27)
  ._scope()

_kick: s("bd*2")
  .duck("3:4")
  .duckdepth(.8)
  .o(2)
  .decay("<.5@2 01.5@1>")
  .fm(2)
  .postgain(gain3)
  .sustain(0)._scope()
  .colorparty(0.92)

_allomel: s("allomel")
  .scale(sc)
  .ifit(2)
  .rlpf(0.5)
  .slow(4).chop(16) // comment out for stability
  .postgain(gain3)
  .colorparty(0.53)
  ._spectrum()

_allodrum: s("allodrum")
  .n(1)
  .ifit(2)
  .postgain(2)
  .colorparty(0.38)
  ._scope()

// In the Clerb, We all Fam //

let gain3_drum = slider(0, 0.2, 2)
let gain3_hats = slider(0, 0.2, 2)
let gain3_melody = slider(0, 0.2, 2)
let gain3_pad = slider(0, 0.2, 1)

// bd*2 sd
drums1: s("<bd*2 sd ~ ~>")
  .speed(1.6)
  .lpf(sine.range(400, 2000))
  .delay(0.2)
  .gain(gain3_drum)

drums2: s("bd ~ sd ~ bd sd ~ ~").gain(gain3_drum)

bass: note("c2 ~ eb2 ~ f2 ~ g2 ab2")
  .s("sawtooth")
  .lpf(300)
  .gain(gain3_melody)

pad: note("[c2*4, g1*2, ~]/2")
  .s("sawtooth")
  .sometimesBy(0.2, rev)
  // .trancegate(0.45, 30, 1).set(roller()).dly(.2)
  // .rlpf(slider(0.1, 0.1, 0.5))
  .gain(gain3_pad)

_arp: n("<[0 2 5 7] [~ 5 2 0]>*0.5").scale(sc)
  .s("supersaw")
  .acidenv(0.5)
  .glide(0) // go up and come down i.e unstable to stable
  .lpf(tri.range(1000, 2500).slow(8)).decay(0.2).fast(8).gain(tri.range(0.3, 0.7).slow(16))
  .gain(gain3_melody)

t: n("[0 0 0 0] [2 5] [2 3] [2 3]".fast(2).add("<0 0 3 2 -3>".fast(2)))
  .scale("E1:major")
  .sound("casio")
  .degradeBy("0 0.7 0.7 0.7 0.7") 
  .lpf(perlin.range(1300,2200))
  .lpq(10)
  .room(0.5).sz(1)
  .delay(0.5)
  .delaysync("<3 2 4>".div(8))
  .cut(0.4)
  .postgain(gain3_melody)

hats: s("white!8")
  .decay(0.1)
  .lpf(3000)
  .almostNever(ply("4 | 2"))
  .gain(gain3_hats)

breaks: s("breaks")
  .n(irand(3)).ifit(2)

    // .scrub(irand(8).div(8).seg(4))
    // .rib("<4 0 3>", 1)

  .rlpf(slider(0.4, 0.1, 0.8))

  .accent(2)
  .gain(gain3_drum)

_clerb: s("clerb")
  .n(1)
  .ifit(16)
  .gain(2)
  .colorparty(0.14)
  ._spiral()
