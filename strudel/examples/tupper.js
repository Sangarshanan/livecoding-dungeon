// "tupper class" @by eddyflux

samples('github:yaxu/clean-breaks')
samples('github:eddyflux/crate')
samples('github:eddyflux/wax')

setcps(68/60/4)

stack(
  s("loop4/4").fit()
  .layer(
    x=>x
      .chop("64 [32 64]")
      .juxBy(.6, rev)
      .hpf(500)
      .dec(sine.range(.05,.18).slow(8))
      .room(.5).sometimes(mul(speed("2 | -2")))
      .shape(.6).postgain(sine.range(0,.8).slow(16))
      .hush()
    ,
    x=>x.chop(64).lpf(400)
      .shape(.6).cut(4)
      .dec(.2).postgain(.9)
      .mask("<0!4 1!16>")
  )
  .hush()
  // .hpf(1000)
  ,
  s("riffin").fit().shape(.2).chop(32).dec(.1).postgain(.6)
  .sometimesBy("0 [0 .5] 0 0", x=>x.set.squeeze(gain(".9 .6 .2 .1")).room(.3))
  .sometimesBy("0 [0  0] 0 .5", x=>x.mul(speed("-2")))
  .hurry("<.5!4 1!16>")
  // .hush()
  ,
  s("useme/2").fit()
  .chop("<16 32>/32")//.rarely(ply("2"))
  .sometimesBy("0 [.2 0]",ply("3"))
  .dec(.19).room(.4).cut(9)
  .hpf(800)
  .mask("[1!4 0 1 1 0]*2")
  .hush()
  ,
  s("[bd rim:1 [~ bd] rim:2]*2").bank('crate')
)
  .reset("<x@3 x*[4 [8 [16 32]]] x@16>")
  .late("[0 .002]*16")

// @version 1.0