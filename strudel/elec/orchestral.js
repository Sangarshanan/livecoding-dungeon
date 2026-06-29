setcps(0.3)

_$: chord("<G# Eb>").voicing().room(.8).phaser(0.4)
  .scale("G#3:major")
  .sound("gm_synth_choir")

_string_ensemble: n("<[1 3 5] <0 5>>*2").scale("G#3:major")
  .s("gm_string_ensemble_1").gain(0.8).slow(4)

_bass: n(irand(8).add(1).seg(8)).scale("G#2:major").s("gm_acoustic_bass")

piano: n(irand(32).add(8).seg(4)).scale("G#3:major")
  .s("gm_piano").room(.2).gain(1)

_vocals: n("<1 [5 2] 4 [4 2] <5 2>>*2").scale("G#3:major")
  .s("gm_choir_aahs").room(.8).gain(0.5).attack(0.3)

_harmonium: n("<[0,2,4] [4,6,8] [1,3,5]>").scale("G#3:major")
  .s("gm_accordion").room(.4).gain(0.7).attack(0.2).release(0.8)

kick: s("bd*4, ~ sd").bank("RolandTR909")
  .gain(0.8).room(0.35)
  .orbit(2).duckattack(0.2)

hats: s("[hh:2 ~]*4, ~ ~ rim ~").bank("RolandTR909").delay(0.9).clip(0.08)
  .gain(0.8).room(0.35).orbit(2).duckattack(0.2)
