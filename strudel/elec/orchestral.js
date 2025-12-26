setcps(0.3)

$: chord("<G# Eb>").voicing().room(.5)
  .scale("G#3:major")
  .sound("gm_synth_choir")

_$: n(irand(8).add(5).seg(4)).scale("G#3:major")
  .s("gm_piano").room(.8).gain(1)

string_ensemble: n("<[1 3 5] <0 5>>*2").scale("G#3:major")
  .s("gm_tenor_sax").gain(0.5).slow(4)

bass: n(irand(8).add(1).seg(8))
  .scale("G#2:major").s("gm_acoustic_bass").room(.2)

_vocals: n("<1 [5 2] 4 [4 2] <5 2>>*2").scale("G#3:major")
  .s("gm_choir_aahs").room(.8).gain(0.5).attack(0.3)

_harmonium: n("<[0,2,4] [4,6,8] [1,3,5]>").scale("G#3:major")
  .s("gm_accordion").room(.4).gain(0.4).attack(0.2).release(0.8)

_drums: s("bd*2 ~ sd, [hh ~]*4, ~ ~ rim ~").bank("RolandTR909")
  .gain(0.8).room(0.35)
