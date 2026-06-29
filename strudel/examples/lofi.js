// "Night ride" @by SLM // based on "coastline by eddyflux"

samples('github:eddyflux/crate')
setcps(.75)
let chords = chord("<Gm7 C7 Am7 D7>/4").dict('ireal')

stack(
  stack( 
    // DRUMS
    s("bd").struct("<[x*<1 2> [~@3 x]] x>"),
    s("~ [rim, sd:<2 3>]").room("<0 .2>"),
    n("[0 <1 3>]*<2!3 4>").s("hh"),
    s("rd:<1!3 2>*2").mask("<0 0 1 1>/16").gain(.5)
  ).bank('crate')
  .mask("<[0 1] 1 1 1>/16".early(.5))
  
  , // CHORDS
  chords.offset(-1).voicing().s("gm_epiano1:6")
  .phaser("<2 3>").room(.5)
    
  , // MELODY
  n("<0!3 1*2>").set(chords).mode("root:g2")
  .voicing().s("gm_acoustic_bass")
  
  , // BEEPS
  chords.n("[0 <4 3 <2 5>>*2](<3 5>,8)")
  .anchor("D5").voicing()
  .segment(4).clip(rand.range(.4,.8))
  .room(.75).shape(.3).delay(.25)
  .fm(sine.range(3,8).slow(8))
  .lpf(sine.range(500,1000).slow(8)).lpq(5)
  .rarely(ply("2")).chunk(4, fast(2))
  .gain(perlin.range(.6, .9))
  .mask("<0 1 1 0>/16")
  .pan(sine.slow(2))
)
.late("[0 .01]*4").late("[0 .01]*2").size(4)
