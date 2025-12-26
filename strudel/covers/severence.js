setcpm(120/4)

await initHydra()

s0.initVideo('https://media.giphy.com/media/XjDZoIXRpaJjZY6VFI/giphy.mp4')
src(s0).scale(1).rotate(0)
  .modulate(o0, () => Math.cos(time * 2) * 0.1 + 0.5).
  blend(src(s0), 0.5).out()

chords: note(`<
    [[c4,d#4,g4] c3]
    [[f#4,a#4,c#5] c3]
    [[f4,a4,c5] c3]
    [[b3,d#4,g#4] c3]
>`)
.s("piano")

mel: note(`<
[- c3] [- c3] [- c3]
[- - - - [c3,b5] a#5 g5 a#5]
[- g5 - - c3 - - -] 
[- c3] [- c3] 
[- - - - [c3,b5] a#5 g5 a#5]
[- g5 - - c3 - - -]
[- c3] [- c3] [- c3]
[- c6 g5 - c3 d6 c6 f#5]
[- - - d6 c3 c6 f#5 -]
[- c6 f5 - c3 d6 c6 d#5]
[- - - d6 c3 c6 d#5 -]
>`)
.s("piano")

string: note(`<
    [[c3,d#3,g3]] 
    [[f#3,a#3,c#4]] 
    [[f3,a3,c4]]
    [[b3,d#3,g#3]]
>`)
.s("gm_string_ensemble_1")
  .lpf(1500).gain(0.5)


