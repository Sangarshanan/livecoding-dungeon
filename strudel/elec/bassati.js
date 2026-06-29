// Bassatti

setcpm(160/4)

_drone: s("square")
  .lpf(200).lpa(1).lpe(3).lpenv(2).postgain(0.8)
  .delay(0.1)
  .detune(1)

_white: s("white!8")
  .decay(0.09)
  .delay(0.6)
  .almostNever(ply("2"))
  .gain(0.4)

_kick: sound("bd*4").gain(0.7).orbit(2)

_saw: sound("supersaw").detune(1).rel(5).beat(2, 32).slow(4).fm(2)

_riser: riser(16, 4, (x, rise) => x.s("supersaw").detune(rise))

vibes :s("sawtooth,tri,saw,sine")
  .gain(saw.rev().range(3,1))
  .lpf(saw.rangex(200,2200).slow(8))
  .beat("3,7,9",16).vib(2,.5)
  .clip(.7)
  .delay(1/2)
  .diode("1:.5")
  .duckorbit(2)
  // .duckattack(0.4) // reduce for hit
  .acidenv(slider(0.823))


_$: n(irand(32).add(23))
  .sound("saw")
  .room(1).decay(0.5).seg(4).acidenv(0.5).gain(1.2)
  // .duckorbit(2).duckattack(0.9) // decrease duck


$:  s("didgeridoo").delay(1)


_$: n("<[4@2 4] [5@2 5] [6@2 6] [5@2 5]>*2")
  .s("sine").gain(1.5)


_arp: n("<[0 2 5 7] [~ 5 2 0]>*0.25 * 0.5 ") // *2, ? 2, *0.5
  .s("supersaw")
  .acidenv(0.9)
  .glide(0) // go up and come down i.e unstable to stable
  .lpf(tri.range(1000, 2500).slow(8)).decay(0.2).fast(8).gain(tri.range(0.3, 0.7).slow(16))
  .gain(1)
