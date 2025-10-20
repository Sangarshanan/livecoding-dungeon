/* hi i am @roguentropy
this is my strudel set
open for anyone to use and modify
*/

setcps(170/60/4)

samples('github:Sangarshanan/strudel-samples')

// Track 1 //

/// Ambient Texture ////

chords: "<0@32 1@24>/2".pickRestart([
"<C@2 G Am F@2 C@2 F G C@2 F G C@2 F@2 G@2 C@2>/2",
"<D A G D A D G A D@3 G A D G A C G F C G F C G>/2"])
 .layer(x=>x.chord().anchor('b3').voicing().
   s("gm_shakuhachi").attack(0.1).release(1.2).room(1).rsize(4).gain(0.5),
  x=>n("<0!32>/2")
    .chord(x).anchor('c3').mode('root').voicing().s("gm_blown_bottle").room(1).rsize(4).gain(0.8),
  x=>n("<[0,[~ 1@20],[~@2 2@20],[~@3 3@20],[~@4 4@20]]>/2")
    .chord(x).anchor('e4').voicing().s("gm_acoustic_guitar_nylon").room(0.6).gain(0))

// Bass //
const bs = ["<C1@2 G1 A1 F1@2 C1@2 F1 G1 C1@2 F1 G1 C1@2 F1@2 G1@2 C1@2>/2"]
bass: "<0@30 1@30>".pickRestart(bs).note().s('sawtooth').cutoff("1000:0:10").gain(0.4)


// Drums //
drums: stack(
  // s("bd").struct("x - [x x] -").lpf(220).bank("tr909").rib(46, 1)
  // .almostNever(
  //   ply("2 | 4")
  // ),
  
  // s("sd:7").struct("- x - x").lpf(2000).bank("tr909")
  // .distort("2:.3"),

  // s("white!4")
  // .decay(0.08)
  // .lpf(4000)
  // .almostNever(
  //   ply("4 | 2")
  // )
  // .gain(.3),
)