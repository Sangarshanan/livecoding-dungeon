samples('github:Sangarshanan/strudel-samples')

setcps(170/60/4)

_$breaks: s("breaks/2").fit().scrub(irand(16).div(16).seg(8) // Create random divisions in the sample and cycle them into a loop
                          .rib("<20 15 18 1 16>",1) // Loops the pattern inside an offset for cycles
                          // .n(irand(2))
                          .almostNever( // trigger very few times per cycle
                            ply("4 | 8") // repeat each event 2 or 4 times
                          )
                         ).orbit(2)
  .gain(2)._scope()

$bass: n(irand(10).sub(4).seg(8)).scale('c#:minor')
  // .rib("<20 15 18 1 16>",1)
  .rib(46, 1)
  .almostNever( // trigger very few times per cycle
    ply("4 | 8") // repeat each event 2 or 4 times
  )
  .distort("2.2:.3")
  .s("sawtooth").lpf(200).lpenv(slider(0, 0, 8))
  .lpq(12).orbit(2).gain(1)._pianoroll()

$pads: n("<[[0,4]]*2>")
  .scale("c#2:minor").s("supersaw").transpose("<0 2 [3 1]>/8")
  .lpa(0).lpe(10).lpd(0.2).lpr(1).lpf("<[10 10 100]>").dist("8:0.18").gain(0.01)


$: s("pulse")
  .orbit(4).seg(16)
  .dec(.1)
  .lpq(10)
  .fm(time).fmh(time).gain(0.4)

