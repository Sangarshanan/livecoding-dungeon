### Cool Examples

Bird of feather: https://tinyurl.com/yckc54t6

Last night: https://www.youtube.com/watch?v=CNishpWbFx4i

Songs list: https://github.com/eefano/strudel-songs-collection


## Tutorial

Playing note patterns from a scale
```js
$: n("0@2 -7@3 <0 -3 2 1>@3")
  .scale("g:minor")
  .s("supersaw")
  .delay(.7).pan(rand)
```

Pulsating pattern

```js
$: s("pulse!8").dec(.1).fm(time).fmh(time)
```


#### Different Note Pattern Techniques

```js
1. Basic Sequences
Notes played one after another in a cycle:

note("c e g b")  // Plays 4 notes evenly spaced
note("c d e f g a b")  // 7 notes squeezed into one cycle


2. Sub-sequences with Brackets [ ]

// Group notes to play together in the time of one event
note("c [e g] a")  // c gets 1/3, [e g] share 1/3, a gets 1/3
note("c [e [g b]] d")  // More complex rhythmic subdivisions


3. Angle Brackets < > for Slow Sequences

Play one element per cycle:
note("<c e g b>") 
// Speed it up with multiplication
note("<c e g b>*4")  // Now plays all 4 notes in one cycle


4. Multiplication to Repeat patterns or speed them up

note("c*4 e*2 g")  // Plays: c c c c e e g
note("[c e g]*2")  // Plays the group twice as fast
sound("bd*32")  // Very fast becomes pitch-like


5. Division with /

note("[c e g b]/2")  // Takes 2 cycles to complete
// Alternative using angle brackets
note("<c e g b>")  // Same effect - one note per cycle


6. Elongation with @

note("c@3 eb")  
note("c@2 e g@2")  // c and g are twice as long as e


7. Replication with !
note("c!2 e g")  // Same as "c c e g"
// With chords
note("c!2 [eb,g]")


8. Euclidean Rhythms (x,y,z)
note("c(3,8)")  // 3 hits distributed over 8 steps
// Plays: c ~ ~ c ~ ~ c ~
note("c(5,8)")  // 5 hits over 8 steps
// More dense distribution
note("c(3,8,1)")  // Rotated by 1 step


9. Parallel Patterns simultaneously:

note("c e g, a f d")   // Two patterns at once
// Different lengths create polyrhythms
note("c e g, a f")  // 3 against 2
// Chords
note("[c,e,g]")  // All play together as a chord


10. Alternation with | (pipe)

note("c | e | g")  // Randomly choose between options each cycle
// With groups
note("[c e] | [g b] | [d f]")


11. Degradation with ?

note("c e g b?")  // b might not play (50% chance of playing)

// Custom probability (20% chance)
note("c e g b?0.2")  

// Apply to whole pattern
note("[c e g b]*8?")  // Randomly removes notes
Pattern Examples
Here are some musical patterns combining these techniques:
javascript// Jazz-like pattern with rests and variations
note("c ~ [eb g] ~ bb ~ g ~")
  .scale("C:minor")
  .s("piano")

// Polyrhythmic pattern
note("c*3, e*4, g*5")  // 3 vs 4 vs 5
  .s("sawtooth")
  .lpf(800)

// Complex arpeggio with euclidean rhythm
note("c(3,8) <e g> f(5,8,1)")
  .scale("C:major")
  .s("triangle")

// Shuffle pattern with elongation
n("<[4@2 4] [5@2 5] [6@2 6] [5@2 5]>*2")
  .scale("C2:mixolydian")
  .s("gm_acoustic_bass")

// Chord progression with rests
note("[c,e,g] ~ [d,f,a] ~ [e,g,b] ~ ~ [c,e,g]")
  .s("piano")
  .room(0.3)
```
