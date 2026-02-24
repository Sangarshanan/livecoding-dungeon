setcpm(34)

await initHydra({feedStrudel:1})

s0.initImage('https://upload.wikimedia.org/wikipedia/commons/2/2f/Psychedelic_eye.jpg')
src(s0)
  .kaleid()
  .scale(1, 1, window.width/window.height)
  .mult(s0)
  .add(src(s0).invert().modulate(noise(1, ()=>0.3)))
  .hue(0.9).scrollX(0, -0.3).rotate(0, -0.1)
  .diff(src(o0).scrollX(-0.1).scale(1.266))
  .out()

// Entertain Me

// Drums
$: s(`<
    - - - -
    - - - -
    [[oh,bd] - - - oh bd - - [sd,oh] - bd - oh - - bd] [oh - - - [oh,bd] - - bd [sd,oh] - bd - oh bd - -] [[oh,bd] - - bd oh - - - [sd,oh,bd] - - - oh bd - -] [oh - bd - oh - - bd [sd,oh] - bd - oh bd - -]
    [[oh,bd] - - bd oh - bd - [sd,oh] - - bd oh - - -] [[oh,bd] - - - oh bd - - [sd,oh] - bd - oh bd - -] [[bd,oh] - - bd oh - bd - [sd,oh] bd - - oh - bd -] [oh - - bd oh - - - [bd,sd,oh] - - - oh bd - -]
    [[bd,oh] - - bd oh - bd - [sd,oh] bd - - [bd,oh] - - -] [oh bd - - oh - bd - [sd,oh] - - bd oh - - -] [[bd,oh] - - bd oh - bd - [sd,oh] bd - - [bd,oh] - - bd] [oh - - - [oh,bd] - - - [sd,oh] bd - - oh - bd -]
    [oh - - bd oh - bd - [sd,oh] bd - - [oh,bd] - - bd] [oh - bd - oh - - bd [sd,oh] - - - [oh,bd] - - -] [oh bd - - oh - bd - [sd,oh] bd - - [oh,bd] - - bd] [oh - bd - oh bd - - [sd,oh] - bd - oh bd - -]
    [[oh,bd,cr,cr] - - - oh bd - - [sd,oh] - bd - oh - - bd] [oh - - - [oh,bd] - - bd [sd,oh] - bd - oh bd - -] [[oh,bd] - - bd oh - - - [sd,oh,bd] - - - oh bd - -] [oh - bd - oh - - bd [sd,oh] - bd - oh bd - -]
    [[oh,bd] - - bd oh - bd - [sd,oh] - - bd oh - - -] [[oh,bd] - - - oh bd - - [sd,oh] - bd - oh bd - -] [[bd,oh] - - bd oh - bd - [sd,oh] bd - - oh - bd -] [oh - - bd oh - - - [bd,sd,oh] - - - oh bd - -]
    [[bd,oh] - - bd oh - bd - [sd,oh] bd - - [bd,oh] - - -] [oh bd - - oh - bd - [sd,oh] - - bd oh - - -] [[bd,oh] - - bd oh - bd - [sd,oh] bd - - [bd,oh] - - bd] [oh - - - [oh,bd] - - - [sd,oh] bd - - oh - bd -]
    [oh - - bd oh - bd - [sd,oh] bd - - [oh,bd] - - bd] [oh - bd - oh - - bd [sd,oh] - - - [oh,bd] - - -] [oh bd - - oh - bd - [sd,oh] bd - - [oh,bd] - - bd] [oh - bd - oh bd - - [sd,oh] - bd - oh bd - -]>`)
  .bank("yamaharm50")
  .lpf("4000")

// Piano
$: note(`<
    [[F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4 [G#2,G#4,G#3,E3]] [- E4 - - [A1,F#4,F#3,A2] [B3,C#3] C#4 [A1,F#4,F#3,A2,C#3] B3 C#4 [A1,F#4,F#3,A2,C#3] B3 [C#4,C#3] [A1,F#4,F#3,A2] B3 [C#4,C#3]] [[A1,D#4,D#3,A2] [B3,C#3] C#4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4] [[G#4,C#3] A4 [G#2,G#4,G#3,E3] - E4 - - [A1,F#4,F#3,A2] [B3,C#3] C#4 [A1,F#4,F#3,A2,C#3] B3 C#4 [A1,F#4,F#3,A2,C#3] B3 [C#4,C#3]]
    [[A1,F#4,F#3,A2] B3 [C#4,C#3] [A1,D#4,D#3,A2] [B3,C#3] C#4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4] [[F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4 [G#2,B4,B3,E3] - E4 - - [A1,F#4,F#3,A2] [B3,C#3] C#4 [A1,F#4,F#3,A2,C#3] B3 C#4] [[A1,F#4,F#3,A2,C#3] B3 [C#4,C#3] [A1,F#4,F#3,A2] B3 [C#4,C#3] [A1,D#4,D#3,A2] [B3,C#3] C#4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4 [F#1,G#4,G#3,F#2] [B3,C#3]] [C#4 [G#4,C#3] A4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4 [G#2,G#4,E3,G#3] - E4 - - [A1,F#4,F#3,A2] [B3,C#3] C#4]
    [[A1,F#4,F#3,A2,C#3] B3 C#4 [A1,F#4,F#3,A2,C#3] B3 [C#4,C#3] [A1,F#4,F#3,A2] B3 [C#4,C#3] [A1,D#4,D#3,A2] [B3,C#3] C#4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3]] [A4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4 [G#2,G#4,G#3,E3] - E4 - -] [[A1,F#4,F#3,A2] [B3,C#3] C#4 [A1,F#4,F#3,A2,C#3] B3 C#4 [A1,F#4,F#3,A2,C#3] B3 [C#4,C#3] [A1,F#4,F#3,A2] B3 [C#4,C#3] [A1,D#4,D#3,A2] [B3,C#3] C#4 [F#1,G#4,G#3,F#2]] [[B3,C#3] C#4 [G#4,C#3] A4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4 [G#2,G#4,G#3,E3] -]
    [E4 - - [A1,F#4,F#3,A2] [B3,C#3] C#4 [A1,F#4,F#3,A2,C#3] B3 C#4 [A1,F#4,F#3,A2,C#3] B3 [C#4,C#3] [A1,F#4,F#3,A2] B3 [C#4,C#3] [A1,D#4,D#3,A2]] [[B3,C#3] C#4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3]] [A4 [G#2,B4,B3,E3] - E4 - - [A1,F#4,F#3,A2] [B3,C#3] C#4 [A1,F#4,F#3,A2,C#3] B3 C#4 [A1,F#4,F#3,A2,C#3] B3 [C#4,C#3] [A1,F#4,F#3,A2]] [B3 [C#4,C#3] [A1,D#4,D#3,A2] [B3,C#3] C#4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] A4 [F#1,G#4,G#3,F#2] [B3,C#3] C#4 [G#4,C#3] B3 C#4]
    [[F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [G#2,G#4,G#3,E3,G#5]] [- [E4,E5] - - [A1,F#4,F#3,A2,F#5] [B3,B4,C#3] [C#4,C#5] [A1,F#4,F#3,A2,F#5,C#3] [B3,B4] [C#4,C#5] [A1,F#4,F#3,A2,F#5,C#3] [B3,B4] [C#4,C#5,C#3] [A1,F#4,F#3,A2,F#5] [B3,B4] [C#4,C#5,C#3]] [[A1,D#4,D#3,A2,D#5] [B3,B4,C#3] [C#4,C#5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5]] [[G#4,G#5,C#3] [A4,A5] [G#2,G#4,G#3,E3,G#5] - [E4,E5] - - [A1,F#4,F#3,A2,F#5] [B3,B4,C#3] [C#4,C#5] [A1,F#4,F#3,A2,F#5,C#3] [B3,B4] [C#4,C#5] [A1,F#4,F#3,A2,F#5,C#3] [B3,B4] [C#4,C#5,C#3]]
    [[A1,F#4,F#3,A2,F#5] [B3,B4] [C#4,C#5,C#3] [A1,D#4,D#3,A2,D#5] [B3,B4,C#3] [C#4,C#5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5]] [[F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [G#2,B4,B3,E3,B5,B4] - [E4,E5] - - [A1,F#4,F#3,A2,F#5] [B3,B4,C#3] [C#4,C#5] [A1,F#4,F#3,A2,F#5,C#3] [B3,B4] [C#4,C#5]] [[A1,F#4,F#3,A2,F#5,C#3] [B3,B4] [C#4,C#5,C#3] [A1,F#4,F#3,A2,F#5] [B3,B4] [C#4,C#5,C#3] [A1,D#4,D#3,A2,D#5] [B3,B4,C#3] [C#4,C#5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3]] [[C#4,C#5] [G#4,G#5,C#3] [A4,A5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [G#2,G#4,E3,G#3,G#5] - [E4,E5] - - [A1,F#4,F#3,A2,F#5] [B3,B4,C#3] [C#4,C#5]]
    [[A1,F#4,F#3,A2,F#5,C#3] [B3,B4] [C#4,C#5] [A1,F#4,F#3,A2,F#5,C#3] [B3,B4] [C#4,C#5,C#3] [A1,F#4,F#3,A2,F#5] [B3,B4] [C#4,C#5,C#3] [A1,D#4,D#3,A2,D#5] [B3,B4,C#3] [C#4,C#5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3]] [[A4,A5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [G#2,G#4,G#3,E3,G#5] - [E4,E5] - -] [[A1,F#4,F#3,A2,F#5] [B3,B4,C#3] [C#4,C#5] [A1,F#4,F#3,A2,F#5,C#3] [B3,B4] [C#4,C#5] [A1,F#4,F#3,A2,F#5,C#3] [B3,B4] [C#4,C#5,C#3] [A1,F#4,F#3,A2,F#5] [B3,B4] [C#4,C#5,C#3] [A1,D#4,D#3,A2,D#5] [B3,B4,C#3] [C#4,C#5] [F#1,G#4,G#3,F#2,G#5]] [[B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [G#2,G#4,G#3,E3,G#5] -]
    [[E4,E5] - - [A1,F#4,F#3,A2,F#5] [B3,B4,C#3] [C#4,C#5] [A1,F#4,F#3,A2,F#5,C#3] [B3,B4] [C#4,C#5] [A1,F#4,F#3,A2,F#5,C#3] [B3,B4] [C#4,C#5,C#3] [A1,F#4,F#3,A2,F#5] [B3,B4] [C#4,C#5,C#3] [A1,D#4,D#3,A2,D#5]] [[B3,B4,C#3] [C#4,C#5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3]] [[A4,A5] [G#2,B4,B3,E3,B5,B4] - [E4,E5] - - [A1,F#4,F#3,A2,F#5] [B3,B4,C#3] [C#4,C#5] [A1,F#4,F#3,A2,F#5,C#3] [B3,B4] [C#4,C#5] [A1,F#4,F#3,A2,F#5,C#3] [B3,B4] [C#4,C#5,C#3] [A1,F#4,F#3,A2,F#5]] [[B3,B4] [C#4,C#5,C#3] [A1,D#4,D#3,A2,D#5] [B3,B4,C#3] [C#4,C#5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [A4,A5] [F#1,G#4,G#3,F#2,G#5] [B3,B4,C#3] [C#4,C#5] [G#4,G#5,C#3] [B3,B4] [C#4,C#5]]>`)
  .sound("piano").release(0.17).gain(0.57)

// Bass
$: note(`<
    [F#1 - - - - F#1 - - - - F#1 - - - - G#1] [- - - - A1 - - A1 - - A1 - - A1 - -] [A1 - - F#1 - - - - F#1 - - - - F#1 - -] [- - G#1 - - - - A1 - - A1 - - A1 - -]
    [A1 - - A1 - - F#1 - - - - F#1 - - - -] [F#1 - - - - G#1 - - - - A1 - - A1 - -] [A1 - - A1 - - A1 - - F#1 - - - - F#1 -] [- - - F#1 - - - - G#1 - - - - A1 - -]
    [A1 - - A1 - - A1 - - A1 - - F#1 - - -] [- F#1 - - - - F#1 - - - - G#1 - - - -] [A1 - - A1 - - A1 - - A1 - - A1 - - F#1] [- - - - F#1 - - - - F#1 - - - - G#1 -]
    [- - - A1 - - A1 - - A1 - - A1 - - A1] [- - F#1 - - - - F#1 - - - - F#1 - - -] [- G#1 - - - - A1 - - A1 - - A1 - - A1] [- - A1 - - F#1 - - - - F#1 - - - - -]
    [F#1 - - - - F#1 - - - - F#1 - - - - G#1] [- - - - A1 - - A1 - - A1 - - A1 - -] [A1 - - F#1 - - - - F#1 - - - - F#1 - -] [- - G#1 - - - - A1 - - A1 - - A1 - -]
    [A1 - - A1 - - F#1 - - - - F#1 - - - -] [F#1 - - - - G#1 - - - - A1 - - A1 - -] [A1 - - A1 - - A1 - - F#1 - - - - F#1 -] [- - - F#1 - - - - G#1 - - - - A1 - -]
    [A1 - - A1 - - A1 - - A1 - - F#1 - - -] [- F#1 - - - - F#1 - - - - G#1 - - - -] [A1 - - A1 - - A1 - - A1 - - A1 - - F#1] [- - - - F#1 - - - - F#1 - - - - G#1 -]
    [- - - A1 - - A1 - - A1 - - A1 - - A1] [- - F#1 - - - - F#1 - - - - F#1 - - -] [- G#1 - - - - A1 - - A1 - - A1 - - A1] [- - A1 - - F#1 - - - - F#1 - - - - -]>`)
  .sound("gm_acoustic_bass").release(0.2)

// Synthesizer
$: note(`<
    - - - -
    - - - -
    - - - -
    - - - -
    [G#4 B3 C#4 G#4 A4 G#4 B3 C#4 G#4 A4 G#4 B3 C#4 G#4 A4 G#4] [- E4 - - F#4 B3 C#4 F#4 B3 C#4 F#4 B3 C#4 F#4 B3 C#4] [D#4 B3 C#4 G#4 B3 C#4 G#4 A4 G#4 B3 C#4 G#4 A4 G#4 B3 C#4] [G#4 A4 G#4 - E4 - - F#4 B3 C#4 F#4 B3 C#4 F#4 B3 C#4]
    [F#4 B3 C#4 D#4 B3 C#4 G#4 B3 C#4 G#4 A4 G#4 B3 C#4 G#4 A4] [G#4 B3 C#4 G#4 A4 B4 - E4 - - F#4 B3 C#4 F#4 B3 C#4] [F#4 B3 C#4 F#4 B3 C#4 D#4 B3 C#4 G#4 B3 C#4 G#4 A4 G#4 B3] [C#4 G#4 A4 G#4 B3 C#4 G#4 A4 G#4 - E4 - - F#4 B3 C#4]
    [F#4 B3 C#4 F#4 B3 C#4 F#4 B3 C#4 D#4 B3 C#4 G#4 B3 C#4 G#4] [A4 G#4 B3 C#4 G#4 A4 G#4 B3 C#4 G#4 A4 G#4 - E4 - -] [F#4 B3 C#4 F#4 B3 C#4 F#4 B3 C#4 F#4 B3 C#4 D#4 B3 C#4 G#4] [B3 C#4 G#4 A4 G#4 B3 C#4 G#4 A4 G#4 B3 C#4 G#4 A4 G#4 -]
    [E4 - - F#4 B3 C#4 F#4 B3 C#4 F#4 B3 C#4 F#4 B3 C#4 D#4] [B3 C#4 G#4 B3 C#4 G#4 A4 G#4 B3 C#4 G#4 A4 G#4 B3 C#4 G#4] [A4 B4 - E4 - - F#4 B3 C#4 F#4 B3 C#4 F#4 B3 C#4 F#4] [B3 C#4 D#4 B3 C#4 G#4 B3 C#4 G#4 A4 G#4 B3 C#4 G#4 B3 C#4]>`)
  .sound("supersaw").release(0.10).gain(0.5).lpf(1000)
