samples('github:Sangarshanan/strudel-samples')

setcps(170/60/4)

const GAIN = slider(1.1, 0, 2, 0.05);

_$bass: n(irand(10).sub(4).seg(8)).scale('c#:minor')
  .rib("<20 15 18 1 16>",1)
  // .rib(46, 1)
  .almostNever( // trigger very few times per cycle
    ply("4 | 2") // repeat each event 2 or 4 times
  )
  .distort("2.2:.3")
  .s("sawtooth").lpf(200).lpenv(slider(0, 0, 8))
  .duckorbit(2).duckdepth(0.4)
  .lpq(12).orbit(2).gain(GAIN)._pianoroll()

$pads: n("<[[0,4]]*2>")
  .scale("c#1:minor").s("supersaw").transpose("<0 2 [3 1]>/8")
  .lpa(0).lpe(10).lpd(0.2).lpr(1).lpf("<[10 10 100]>").dist("8:0.18").dly(.1).gain(0.01)


$: s("pulse")
  .orbit(4).seg(8)
  .dec(.1)
  .lpq(10)
  .fm(time)
  .fmh(time)
  .gain(GAIN)


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

_$: n("<[0 [0 3] [5 7] [3 5]]!4 ~ [0!16]>").scale("c#:minor")
  .s("<gm_lead_6_voice!4 ~ gm_fx_brightness>".slow(4))  
  .lpf(sine.range(30, 5000).fast(2))
  .resonance("<1!4 ~ 35!2>".slow(4))  
  .gain("<0.8!4 ~ 1.0!2>".slow(4))
  .room("<0.8!4 ~ 0.9!2>".slow(4))

_$: s("bd*4").gain(0.8).duck(2).duckatt(0.9).duckdepth(0.7)

_$: s("~ sd:2 ~ sd:2").gain(0.5).lpf(1500)

_white: s("white!8")
  .decay(0.1)
  .lpf(3000)
  .almostNever(
    ply("4 | 2")
  )
  .gain(.8)


