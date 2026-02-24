setcpm(160/4)

drone: s("square")
  .set.mix(`<0@3 1@3 3@4>`).scale("F:major")
  .lpf(200).lpa(1).lpe(3).lpenv(2).postgain(0.5)
  .delay(0.1)
  .detune(1)

white: s("white!8")
  .decay(0.08)
  .almostNever(ply("2 | 4"))
  .gain(0.1)

kick: sound("bd*2").bank("RolandTR909")

saw: sound("supersaw").detune(1).rel(5).beat(2, 32).slow(4).fm(2).phaser(0.2)
