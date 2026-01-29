setcpm(170 / 4)
samples('github:Sangarshanan/strudel-samples')

// 1

$dro: s("triangle")
  .seg(8)
  .fm(sine.range(1,8).slow(4))
  .fmh(slider(0.8, 0.1, 0.8))
  .adsr("0.3:0.1:0.5:1")
  .room(0.5)
  .phaser(0.3)
  .pan(perlin.slow(4))
  ._scope()


_pads: n("[2,4,6] [3,5,7]")
    .scale(`<F3:minor:pentatonic!9 
             F3:major:pentatonic!9
             F3:dorian!9>`)
    .slow(4)
    .pan(perlin.slow(4))
    .sound("sawtooth")
    .room("1.3")
    .gain("0.8").sustain("0.2")
    // .lpf("<400 2400 800 1200>")
    .hpf(2000)
    .fm(1)

_notes: n("[1 2 3 5 2 3 5 7] <[5 3 6 2] [7]!2>")
    .sound("gm_acoustic_guitar_nylon")
    .slow(4)
    .scale(`<F3:minor:pentatonic!9
             F3:major:pentatonic!9
             F3:dorian!9>`)
    .delay(".25:.10")


_p3: sound("[hh:2 hh:4]")
    .pan(perlin.slow(2))
    .bank("RolandTR808")
    .room("0.6")

_$: s(`<bd@2>*8`).s("bd")
  .duck(4).duckatt(0.3).duckdepth(0.7)

// 2

$: s("wt_digital").note("F1")
  .fm(1.3).fmh(0.99).fmwave("sawtooth")
  .room(0.9).gain(2)

$: s(`<
  bd@2 ~@2
  ~ bd ~@2
  bd@2 ~ [bd:0:0.7 bd:0:0.9]
  ~ bd ~@2
  bd@2 ~@2
  ~ bd ~@2
  bd@2 ~ ~
  ~ [~ bd] ~ bd
>*8`).s("bd")
  .duck(4).duckatt(0.3).duckdepth(0.7)

_$: s(`<
  ~ sd
>*4`).s("sd").gain(0.3)

$: s("hh*4").bank("tr909").n(9)


fastarp: n("<0 2 5 7>*4").scale("F3:major")
  .s("supersaw").lpf(tri.range(1000, 2500).slow(8)).decay(0.2).fast(2).gain(tri.range(0.5, 1.2).slow(16))


percs: n("[0 0 0 0] [2 5] [2 3] [2 3]".slow(1).add("<0 0 3 2 -3>".fast(2)))
  .scale("F2:major")
  .sound("casio")
  .degradeBy("0 0.7 0.7 0.7 0.7") 
  .lpf(perlin.range(1300,2200))
  .lpq(0.3)
  .room(0.5).sz(1)
  .delay(0.5)
  .delaysync("<3 2 4>".div(8))
  .cut(0.4)

  _$: all(x => x.reset
   ("<x@4 x*[4 [8 16]] x@4>")
)
