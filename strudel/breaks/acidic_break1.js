setcps(170/60/4)

await initHydra({feedStrudel:1})

voronoi(5, 0.3, 0.3)
  .invert([0, 1].fast(3).smooth(0.8))
  .modulateScale(src(o0), [0, 5].fast(1))
  .repeatY([2, 10, 0, 3], [1, 0, 0.5, 5, 2, 3])
  .modulateScale(gradient(), 8, 0.1)
  .repeatX([5, 1, 0], [1, 4, 2])
  .rotate(Math.PI / 4)
  .kaleid([1, 2, 3, 4, 1, 5, 2].fast(1))
  .out(o0)

const GAIN = slider(0.55, 0, 2, 0.05);

_$bass: n(irand(16).sub(2).seg(16)).scale('c#:minor')
  // .rib("<20 15 18 1 16>",1)
  .rib(20, 1)
  .almostNever( // trigger very few times per cycle
    ply("4 | 2") // repeat each event 2 or 4 times
  )
  .distort("2.2:.3")
  .s("sawtooth").lpf(200).lpenv(slider(6.544, 0, 8))
  .duckorbit(2).duckdepth(0.4)
  .lpq(12).orbit(2).gain(GAIN)._pianoroll()

$pads: n("<[[0,4]]*2>")
  .scale("c#1:minor").s("supersaw").transpose("<0 2 [3 1]>/8")
  .lpa(0).lpe(10).lpd(0.2).lpr(1).lpf("<[10 10 100]>").dist("8:0.18").dly(.1).gain(0.01)

_$: "sd".ply("<4>").s().decay(0.08).lpf(2500)

_$: s(`<
  bd@2 ~@2
  ~ bd ~@2
  bd@2 ~ [bd:0:0.7 bd:0:0.9]
  ~ bd ~@2
  bd@2 ~@2
  ~ bd ~@2
  bd@2 ~ ~
  ~ [~ bd] ~ bd
>*8`).duck(2).duckatt(0.3).duckdepth(0.7)

_$: s("wt_digital").note("F1")
  .fm(1.3).fmh(0.99).fmwave("sawtooth")
  .room(0.9)

_$: s("bd*4").gain(0.8).duck(2).duckatt(0.9).duckdepth(0.7)

_$: s("~ sd:2 ~ sd:2").gain(0.5).lpf(2500)

white: s("white!4")
  .decay(0.05)
  .delay(0.2)
  .lpf(2500)
  .almostNever(
    ply("4 | 2")
  )
  .gain(.8)


perc: s("rim ~ rim rim*4")
  .bank("RolandTR808")
  .n("<0 1 2 3>")
  .sometimes(x => x.chop(8))
  .pan("0 1 0.5")
  .gain(0.8)
