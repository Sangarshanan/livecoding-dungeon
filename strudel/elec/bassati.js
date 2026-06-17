// WIP track

setcpm(160/4)

drone: s("square")
  .set.mix(`<0@3 1@3 3@4>`).scale("F:major")
  .lpf(200).lpa(1).lpe(3).lpenv(2).postgain(0.5)
  .delay(0.1)
  .detune(1)

white: s("white!8")
  .decay(0.09)
  .delay(0.6)
  .almostNever(ply("2"))
  .gain(0.4)

kick: sound("bd*4").gain(0.5)

saw: sound("supersaw").detune(1).rel(5).beat(2, 32).slow(4).fm(2)

_riser: riser(16, 8, (x, rise) => x.s("supersaw").detune(rise))

vibes :s("sawtooth,tri,saw,sine")
  .gain(saw.rev().range(3,1))
  .lpf(saw.rangex(200,2200).slow(8))
  .beat("3,7,9",16).vib(2,.5)
  .clip(.7)
  .delay(1/2)
  .diode("1:.5")
  .acidenv(slider(0.773))
