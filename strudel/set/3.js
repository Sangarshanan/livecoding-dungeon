// Entropy

setcps(0.5)
let sc = "e:major"

await initHydra({feedStrudel:1})

// Visuals
s0.initImage('https://i.imgur.com/s7h4kM3.png')
src(s0)
  .mult(s0)
  .brightness(-0.65)
  .hue(() => Math.sin(time * 0.5) * 0.5)
  .scale(() => 1 + Math.sin(time * 0.4) * 0.15)
  // .scrollX(0.3, -0.2)
  // .rotate(2, -0.4)
  // .modulateRotate(osc(3, 0.1).kaleid(4), () => Math.sin(time * 0.3) * 2)
  // .modulateScale(noise(2, 0.1).kaleid(3), 0.4)
  // .repeat(2, 2)
  // .kaleid(6)
  // .kaleid(() => 3 + Math.floor((Math.sin(time * 0.2) + 1) * 3))
  // .modulateKaleid(osc(4, 0.05), 1.5)
  .out()


$: s("pink/2")
      .attack(3).release(4)
      .hpf(200).lpf(sine.range(300, 1200).slow(17))
      .pan(perlin.slow(9))
      .room(0.9).roomsize(9)
      .gain(perlin.range(0.45, 0.55).slow(3))

$:  note("<[e2,e3] [e2,e2,e3]>/4")
      .s("sine").vib(0.2).vibmod(0.06)
      .attack(5).release(8)
      .room(0.85).roomsize(9)
      .gain(0.6).o(2)._punchcard()

_$: chord("<E C#-7 F#2 Bsus E>")
      .anchor("e4")
      .voicing()
      .s("sawtooth")
      .attack(1.2).release(2)
      .lpf(1000)
      .room(0.85).roomsize(8)
      .gain(0.4).o(2).punchcard().color("cyan")


_$: n("<0@2 1*2 2 3 <3 1> 4@2>*2")
  .s("gm_bird_tweet").slow(8)
  .clip(sine.range(.2,.5))
  .gain(rand.range(0.5, 0.7))
  .jux(rev)
  .room(2)


_weird_hats: s("hh*8")
  .fast(2)
  .degradeBy(0.6)
  .n(irand(8))
  .speed(rand.range(0.5, 2))
  .crush(rand.range(4, 10))
  .pan(rand)
  .gain(0.8)
  .delay(0.4).delaytime(0.1875).delayfeedback(0.5)


_$: note("[e3,g#3,b3,c#4, ~]").s("gm_choir_aahs")
  .n(0) // Voice
  .attack(0.5).release(1.5).jux(rev)
  .arpu("<3 1 2 0 <1 4 3 2 0>>").room(rand.range(0.5, 1))


_drum1: s("drums")
  .n(0)
  .ifit(4)
  .accent(2)
  .colorparty(0.21)
  .duck(2)
  .duckattack(0.07)
  .lpf(2000)
  ._scope()

nice_hats: s("white!8")
  .decay(0.03)
  .lpf(3000)
  .almostNever(
    ply("4 | 2")
  )
  .gain(.4)

all(x => x.hpf(800))

// 2

let kick2 = s("bd*4")
  .duck(2)
  .delay(0.2)
  .lpf(2000) // kick intensity 
  // .struct("<x x*2>") // 8, 16
  .duckattack(0.07)
  .decay("<.5>")
  .fm(100)
  .fmh(10)._scope()

let rim2 = s("~ rim ~ sd:1 ~ ~ rim:1 ~")
    .speed("1.5 1.3")
    .delay(0.1)
    .room(0.3)

let clap2 = s("[~ cp]*4").sometimes(x => x.delay(0.125).delayfeedback(0.5)).lpf(1000)

let chord2 = chord("<E [Eadd9 Bsus] C#-7 [C#-7 B2] E [Eadd9 Bsus] F#2 [E2 Bsus]>")
  .dict('ireal')
  .voicing()
  .s("saw")
  .lpf(1000)
  .postgain(.7)


let synth_arp2 = chord("<E [Eadd9 Bsus] C#-7 [C#-7 B2] E [Eadd9 Bsus] F#2 [E2 Bsus]>")
  .voicing().o(2)
  .s("supersaw") // gm_synth_strings
  .lpf("<2000 3000 <1000 1500>>*16")
  .struct("<x x - x < - x>>*16") // 8, 16
  .dec(perlin.range(.1,.15))
  .room(.5)
  .jux(rev)
  // .hpf(slider(8000,100,8000))
  .detune(perlin.range(.3,.6).slow(4))
  // .lpenv(6)
  .lpa("<.3 .2 .1 .03>/2").punchcard().color("<purple green cyan>")


let hyper_arp2 = note("<[e1 g#1 b1 c#1] [f#1 g#1 c#1 f#1]>" )
  // "<e1 f#1>"  "<[e1 g#1 b1 c#1] [f#1 g#1 c#1 f#1]>" "<[e3,g#3,b3,c#4] [f#3,g#3,b3,c#4]>"
  .sound("sawtooth")
  .lpf(sine.range(2000,3000).slow(8))
  .resonance(0.3)
  .room(0.3)
  // .lpf(slider(100, 100, 5000))
  .arpu("0 2 -1 4 3 1 -2 -3".fast(2))

// all(x => x.hpf(2000))

_$: kick2
_$: rim2
_$: clap2
_$: chord2
_$: synth_arp2
_$: hyper_arp2


// 3

_bassline3: note("<[e1 e1 e1 e1]>")
  .sound("sawtooth")
  .lpf("<400 600 800 600>")
  .lpenv("<3 2 4 5>")
  .lpd(0.1)
  .decay(0.2)
  .gain(1.5).o(2).punchcard().color("<blue red orange pink cyan>")


_synth3: n("<0!2 1!2 0!2 4@2>/1".add(-10)).scale(sc).s("supersaw!16").lpenv(irand(5)).lpd(0.4).orbit(2)
  .fm(1).fmwave("brown")


_$: s("pads")
  .scale(sc)
  .begin("<0.4 0.4 0.1 0.1 0.25 0.25 0.7 0.7>")
  .clip(2)
  .rel(0)
  .gain(1.2)
  .o(2)._scope()


_drum3: s("drums")
  .n(2)
  .ifit(1.5)
  .accent(2)
  .colorparty(0.21)
  .duck(2)
  .duckattack(0.07)
  .lpf(slider(100, 100, 5000))
  ._scope()

// all(x => x.hpf(2000))
