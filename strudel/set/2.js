// just techno

await import('https://glossing.dev/scripts.js')
await (async () => { (0, eval)(await (await fetch('https://raw.githubusercontent.com/switchangel/strudel-scripts/refs/heads/main/prebake.strudel')).text()); })();

setCps(0.5)
setScale("Eb:dorian")

$: s("bd*4").duck("2").duckattack(.07).decay("<.5>").fm(100).fmh(10)

$:  s("[sd]*2").decay(.1).delay(1).bpenv(0.5).gain(0.6)

// you can hh*4 to make it hard and *2 for soft
$:  s("9000_hh*4").decay(.1).delay(1).lpf(3000)


_$: n(irand(32).add(23)).sound("saw").room(1).decay(0.5).seg(16).acidenv(0.5).gain(1.5).orbit(2)

_$: n("[ 0 -5]!1/2 | [0 3]!1/2")
.scale(scale)
.s("gm_electric_guitar_jazz").distort(0.5)


_$: n("[ 3 -2]!1/2 | [3 8]!1/2")
.scale(scale)
.s("gm_trombone").orbit(2)

_$: n(irand(8).add(12).scale("major")
   .struct("<0@.25 0.125> <1@2 1 1@.5> 1@.6 1@1.9 1 <1@1 1 1@2>"))
   .scale(scale)
   .s("piano")
  .orbit(2)


// 

setcps(120 / 4)

_$: chord("<E C#m A B>").voicing().room(.5).slow(64)
  .decay(0.8) //
  .s("gm_fx_soundtrack")
  
_$: n("0 3 1 2").chord("<C#m < E A B>>").voicing().slow(64) // 
  .clip("4 3 2 1").room(.1)
  .s("gm_lead_6_voice")

_$: n("<0 2 1 3 2 <0, 1, 2>>(1, 16)!4".sub(sine.range(20, 21)))
  .scale("e:major").s("casio!16")
  .lpenv(irand(2)).orbit(2).decay(0.8).slow(16)

// all(x => x.lpf(2000).hpf(1000))

_$: s("bd(2, 8)/32").duck("2").duckattack(0.05).decay("<.5>").fm(900).fmh(99).room(.4)
_$:  s("~ [cp]/32").decay(.1).delay(1).bpenv(0.5).lpf(1500)
_$:  s("ace_hh/8").delay(1).lpf(3000).clip(sine.range(0.05, 0.07)).sometimes(ply(2)).decay(2)


_$: n("0!4".sub(14)).scale("e:major").s("supersaw!16")
  .lpenv(irand(2)).o(2).decay(0.9).slow(16)


/////


setcpm(120 / 4)

let sc = "E:major"

_ambience: note("<0, 4, 8> <6 2 4 3>*2")
  .scale(sc)
  .s("sine, triangle")
  .attack(0.1).release(2)
  .rlpf(0.3).lpq(2).phaser(0.1)
  .slow(2).postgain(1.5)
  .duck(0.7)


_$: sound("<[Casio:6*5 Casio:6]>/2")
  .room(5).size(5)
  .gain(0.2)

_$: s("bd(4, 8)").orbit(2).duck(1).duckattack(0.1)

_$:  s("~ [sd]/2").decay(.1).delay(1).bpenv(0.5)
_$:  s("ace_hh")
  .delay(1)
  .lpf(3000)
  .clip(sine.range(0.05, 0.08)).sometimes(ply(2)).decay(2).gain(1.5)

all(x => x.lpf(2000).hpf(1000))

_$:s("sawtooth,tri,saw,sine")
  .scale(sc)
  .gain(saw.rev().range(3,1))
  .lpf(saw.rangex(200,2200).slow(8))
  .beat("3,7,9",16).vib(2,.5)
  .clip(.7)
  .delay(1/2)
  .diode("1:.5")
  .acidenv(slider(0.713))


_bg2: s("<shaktimaan>")
  .ifit(2)
  .scale(sc)
  .slow(12).chop("10")
  .postgain(1)
  // .orbit(2)

_bg1: s("<shaktimaan>")
  .n(1).ifit(2.8)
  // .duck(1)
  .scrub(irand(16).div(8).seg(4))
  .rib("<4 7 2>", 1) // <-2 2> <4 2> <4 7 2>

