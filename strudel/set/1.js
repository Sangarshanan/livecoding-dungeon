/* hi i am @roguentropy*/

setcps(140/60/4)

samples('github:Sangarshanan/strudel-samples')

// Track 1 //

const playKick = 1
const playMel = 0
const playHats = 0
const playClaps = 0
const playPercs = 0

// Ambience //
ambience: "<0@32 1@24>/2".pickRestart([
"<G#@2 D# Fm C#@2 G#@2 C# D# G#@2 C# D# G#@2 C#@2 D#@2 G#@2>/2",
"<A# F D# A# F A# D# F A#@3 D# F A# D# F G# D# C# G# D# C# G# D#>/2"])
 .layer(x=>x.chord().anchor('g3').voicing().
   s("gm_shakuhachi").attack(0.1).release(1.2).room(1).rsize(4).gain(0.5),
  x=>n("<0!32>/2")
    .chord(x).anchor('g#3').mode('root').voicing().s("gm_blown_bottle").room(1).rsize(4).gain(0.8),
  x=>n("<[0,[~ 1@20],[~@2 2@20],[~@3 3@20],[~@4 4@20]]>/2")
    .chord(x).anchor('b4').voicing().s("gm_acoustic_guitar_nylon").room(0.6).gain(0))

// Bass //
bass: "<0@30 1@30>"
  .pickRestart(["<G#1@2 D#1 F1 C#1@2 G#1@2 C#1 D#1 G#1@2 C#1 D#1 G#1@2 C#1@2 D#1@2 G#1@2>/2"])
  .note().s('sawtooth')
  .cutoff("1000:0:10")
  .gain(0.4)

// Drums //
drums: stack(
  // Kick
  s("bd").struct("x - [x x] -").lpf(220).bank("RolandTR909")
    .gain(playKick),
  
  // Hi-hats
  s("hh*16").bank("RolandTR909")
    .n("<0 1 2 3 4 5 6 7>")
    .gain(sine.range(0.1,0.3).fast(2).mul(playHats))
    .pan(perlin.range(0.3,0.7))
    .hpf(8000)
    .room(0.2),
  
  // Claps
  s("~ cp ~ ~").bank("RolandTR909")
    .gain(0.3 * playClaps)
    .delay(0.1).delaytime(0.125)
    .pan(saw.range(0.2,0.8).slow(8))
    .room(0.5),
  
  // Shaker
  s("hh*8").bank("RolandTR909")
    .n("2 3 4 5")
    .gain(perlin.range(0.2,0.4).mul(playHats))
    .pan(sine.range(0.2,0.8).fast(4))
    .hpf(8000)
    .speed(1.2)
    .room(0.3),
  
  // Ride
  s("[~ ~ ~ rd]*0.5").bank("RolandTR909")
    .gain(0.1 * playPercs)
    .pan(0.3)
    .lpf(4000)
    .room(0.8),
  
  // Toms
  s("~ ~ ~ [~ [lt ht]]").bank("RolandTR909")
    .gain(0.5 * playPercs)
    .pan("<0.2 0.8>")
    .room(0.4),
  
  // Rims
  s("~ [~ rim] ~ [rim ~]").bank("RolandTR909")
    .gain(0.1 * playPercs)
    .pan(rand.range(0.1,0.9))
    .hpf(2000)
    .delay(0.3).delaytime(0.1875)
    .room(0.6)
)

// Mel
melody: n("<[0 2 4 7] [4 2 0 -1] [0 4 7 9] [7 4 2 0] >*2") // <4 6>
  .scale("G#3:major")
  .s("supersaw")
  .unison(5)
  .detune(0.15)
  .lpf(sine.range(800, 3000).slow(8))
  .attack(0.05)
  .decay(0.2)
  .sustain(0.6)
  .release(0.4)
  .delay(0.3)
  .delaytime(0.125)
  .delayfeedback(0.4)
  .room(0.5)
  .gain(playMel / 2)
