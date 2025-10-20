setcps(1)

let k = s("bd*2,~ [cp,sd]").bank('SequentialCircuitsDrumtracks')._scope()

let h = s("hh:1*4").sometimes(fast("2"))
  .rarely(x=>x.speed(".5").delay(.5))
  .end(perlin.range(0.02,.05).slow(8))
  .bank('SequentialCircuitsDrumtracks').room(.5)
  .gain("0.8,0.9(5,8,-1)")

let m3 = "c3 eb3(3,8) c4/2 g3*2"
.superimpose(
  x=>x.slow(2).add(12),
  // x=>x.slow(4).sub(5)
).note().s('piano').clip(1)
.scale('c3:minor')
.release(.1).room(1).gain(0.3)
.pianoroll(
  {fold:0,autorange:0,vertical:0,cycles:12,smear:0,minMidi:40}
)

let p = s("pulse")
  .orbit(4).seg(8)
  .dec(.1)
  .lpq(10)
  .fm(time).fmh(time).gain(0.4)

let b = "<0@3 1 0 1@2 0@2 0*4 [2@25 3@7]@2 0 [0 ~@31]>/8".pickRestart([
  n("<7!3 [4 6] 7*2 7!2 6 9!3 [6 9] 11*2 11!2 10>*4"),
  n("<[9*2 9!2 [6 7]]!2 [11*2 11!2 [6 7]] [11 12# 13 14] >"),
  n("<[~ 9 12!2]!2 [~ 9 10!2] [~ 7 10!2] [7!2 14!2] [~ 7 11!2]!2>*2"),
  n("<[~ 6 13!2]!3>*2")
]).scale('c1:minor').s('sawtooth').clip(.95).lpf(300).lpe(1).gain(1).room(.2)

let pad = "<0 1 0@1 2 [3@25 4@7]@2 ~@2>/8".pickRestart([
  n("<[2,4,6] [-3,-1,1]>/2").lpf(1500).att(.4).rel(.5).gain(.7),
  n("<~@4 11 [9 10] 8 -1 [0@3 ~]@2 ~@2 11 [9 10] 8 13 >*2").lpf(1500).att(.4).rel(.5).gain(1.2),
  n("<[-3,0,2] [-3,-1,1]>/2").lpf(1500).gain(.5),
  n("<[5,7,9]@2 [5,7,10]@2 [[4,7,9] [4,7,8] [4,6]]@3>*2").lpf(500).gain(1),
  n("<[6,8,10]@3 ~@4>*2").gain(1),
]).scale('c4:minor').s('gm_pad_warm').room(.4)
  ._scope()

let vox = "<0 ~@3 0 ~@4 ~ ~@2 0 1>/8".pickRestart([
  n("<~ [4,7,9]@3 ~@4>*2"),n("<[4,7,9]@2 ~@6>")
]).scale('c5:minor').s('gm_ocarina').vib(5).vibmod(.9).gain(0.6).room(.8)

$:arrange(
  [8, stack(h, b, p)],
  [8, stack(b, m3, k)],
  [200, stack(b, m3, k, pad, vox)],
)