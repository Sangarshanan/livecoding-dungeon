// just techno

await import('https://glossing.dev/scripts.js')
await (async () => { (0, eval)(await (await fetch('https://raw.githubusercontent.com/switchangel/strudel-scripts/refs/heads/main/prebake.strudel')).text()); })();

setCps(0.5)
setScale("Eb:dorian")

$: s("bd*4").duck("2").duckattack(.07).decay("<.5>").fm(100).fmh(10)

$:  s("[sd]*2").decay(.1).delay(1).bpenv(0.5).lpf(1000)

// you can hh*4 to make it hard and *2 for soft
$:  s("9000_hh*4").decay(.1).delay(1).lpf(3000)


_$: n(irand(32).add(23)).sound("saw").room(1).decay(0.5).seg(16).acidenv(0.5).gain(1.5).orbit(2)

_$: n("[ 0 -5]!1/2 | [0 3]!1/2")
.scale(scale)
.s("gm_electric_guitar_jazz").distort(0.5)


$: n("[ 3 -2]!1/2 | [3 8]!1/2")
.scale(scale)
.s("gm_trombone").orbit(2)

_$: n(irand(8).add(12).scale("major")
   .struct("<0@.25 0.125> <1@2 1 1@.5> 1@.6 1@1.9 1 <1@1 1 1@2>"))
   .scale(scale)
   .s("piano")
  .orbit(2)
