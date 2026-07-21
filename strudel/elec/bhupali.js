await import('https://glossing.dev/scripts.js')
await (async () => { (0, eval)(await (await fetch('https://raw.githubusercontent.com/switchangel/strudel-scripts/refs/heads/main/prebake.strudel')).text()); })();

setcps(120 / 4)

$: chord("<E C#m A B>").voicing().room(.5).slow(64).lpf(2000)
  // .decay(0.5) //
  .s("gm_fx_soundtrack")

$: n("0 3 1 2").chord("<C#m < E A B>>").voicing().slow(64) // 
  .clip("4 3 2 1").room(.1)
  .s("gm_lead_6_voice")
  .orbit(2)

_$: n("<0 2 1 3 2>!4".sub(sine.range(20, 21)))
  .scale("e:major").s("casio!16").lpf(1500)
  .lpenv(irand(2)).decay(0.8).slow(16)
  .orbit(2)

// all(x => x.lpf(2000).hpf(1000))

_$: s("bd(1, 8)/32").duck("2").duckattack(0.05).decay("<.5>").fm(900).fmh(99).room(.4).clip(1)
_$:  s("~ [cp]/32").decay(.1).delay(1).bpenv(0.5).lpf(1500)

_$:  s("ace_hh/8").delay(1).lpf(4000).clip(sine.range(0.05, 0.09)).sometimes(ply("2")).decay(2)

