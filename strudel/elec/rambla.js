setcps(0.5)

const glide = register('glide', (time, p) => {
  let last = null
  return p.penv(p.fmap(x => {
    const r = x.note - (last ?? x.note)
    last = x.note
    return r
  })).pattack(time)
})


_melody: note("0 -1 0 2 4 2 4 2 -1 -3 -1 0 2 0 2 0 -3@3 -8 -3 -1 0 -3 -5@3 -3 -1 0 2 -1".add(60))
  .pace(16).s("gm_pan_flute")
  .attack(0.005).legato(0.9)
  .glide(0.05)


bass: note("<c1!2 a0!2 f0!2 g0!2>*4")
  .s("gm_synth_bass_1")
  .attack(0.01).decay(0.3).sustain(0.5).release(0.2)
  .lpf(500)
  .gain(0.7)


$: s("saw*1").lpf(200).lpq("10")
  .lfo({depth:4,rate:8})
  .lpenv("-3")
  .lpattack(1)

bass: note("<c1 eb1 f1 g1>*2")
  .s("saw")
  .lpf(200)
  .lpq("10")
  .lfo({depth:4, rate:8})
  .lpenv("-4")
  .lpattack(0.9)


crushed_mel: n("-4!6 -4#!2 -3!4 -1!2 0b!2").scale("a:minor:pentatonic").s("supersaw")
  .layer(x=>x.clip(0.5),
         x=>x.crush(3),
         x=>x.clip(0.025).dist(4).gain(0.15))
  .postgain(0.45)
  .glide(0.5)
  ._scope()

_kick: s("bd*2")
  .duck("3:4")
  .duckdepth(.8)
  .o(2)
  .decay("<.5@4 0.1@1>")
  .fm(2)
  .sustain(0)._scope()

basss: s("allobass").ifit(2)

allodrum2: s("allodrum").n(1).ifit(2)
