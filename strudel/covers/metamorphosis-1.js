// Metamorphosis 1

setcpm(104/4)

await initHydra({feedStrudel:1})

s0.initImage('https://atmos.earth/wp-content/uploads/2020/04/butterfly-metamorphosis-scan-1-720x900.jpg')
s1.initImage('https://atmos.earth/wp-content/uploads/2020/04/butterfly-metamorphosis-scan-7-720x900.jpg')
s2.initImage('https://atmos.earth/wp-content/uploads/2020/04/butterfly-metamorphosis-scan-5-720x900.jpg')

let sources = [s0, s1, s2]
let index = 0
let bpm = 104 // lower = slower switching, higher = faster

src(sources[index]).out()

update = (dt) => {
  if (time % (60 / bpm) * 1000 < dt) {
    index++; index %= sources.length
    src(sources[index]).out()
  }
}

$: note(`<
    [[c#3,e3,g#4,g#3,c#4,e4] [g#4,e3,g#3,c#3,e4,c#4] - -] [[g#4,e3,g#3,b2,e4,b3] [g#4,e3,g#3,b2,e4,b3] - -] [[a3,g#4,g#3,e4,a2,e3] [a3,e4,e3,a2,g#4,g#3] - -] [[a3,g4,c#3,g3,c#4,a2] [g4,c#3,g3,a2,c#4,a3] - -]
    -
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#3,c#2,c#1] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
    [[c#3,e3,g#4,g#3,c#4,e4] [g#4,e3,g#3,c#3,e4,c#4] - -] [[g#4,e3,g#3,b2,e4,b3] [g#4,e3,g#3,b2,e4,b3] - -] [[a3,g#4,g#3,e4,a2,e3] [a3,e4,e3,a2,g#4,g#3] - -] [[a3,g4,c#3,g3,c#4,a2] [g4,c#3,g3,a2,c#4,a3] - -]
    -
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#3,c#2,c#1] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
    [[e3,c#3] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,b2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,a2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,c3] g3 e3 g3 [e3,g5,g4] g3 [e3,e4,e5] g3]
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#3,c#2,c#1] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
    [[e3,c#3] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,b2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,a2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,c3] g3 e3 g3 [e3,g5,g4] g3 [e3,e4,e5] g3]
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#3,c#2,c#1] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
    [[e3,c#3] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,b2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,a2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,c3] g3 e3 g3 [e3,g5,g4] g3 [e3,e4,e5] g3]
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#3,c#2,c#1] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
    [[c#3,e3,g#4,g#3,c#4,e4] [g#4,e3,g#3,c#3,e4,c#4] - -] [[g#4,e3,g#3,b2,e4,b3] [g#4,e3,g#3,b2,e4,b3] - -] [[a3,g#4,g#3,e4,a2,e3] [a3,e4,e3,a2,g#4,g#3] - -] [[a3,g4,c#3,g3,c#4,a2] [g4,c#3,g3,a2,c#4,a3] - -]
    -
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#3,c#2,c#1] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
    [[c#3,e3,g#4,g#3,c#4,e4] [g#4,e3,g#3,c#3,e4,c#4] - -] [[g#4,e3,g#3,b2,e4,b3] [g#4,e3,g#3,b2,e4,b3] - -] [[a3,g#4,g#3,e4,a2,e3] [a3,e4,e3,a2,g#4,g#3] - -] [[a3,g4,c#3,g3,c#4,a2] [g4,c#3,g3,a2,c#4,a3] - -]
    -
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#3,c#2,c#1] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
    [[e3,c#3] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,b2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,a2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,c3] g3 e3 g3 [e3,g5,g4] g3 [e3,e4,e5] g3]
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#3,c#2,c#1] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
    [[e3,c#3] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,b2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,a2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,c3] g3 e3 g3 [e3,g5,g4] g3 [e3,e4,e5] g3]
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#3,c#2,c#1] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
    [[e3,c#3] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,b2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,a2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,c3] g3 e3 g3 [e3,g5,g4] g3 [e3,e4,e5] g3]
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#3,c#2,c#1] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
    [[c#3,e3,g#4,g#3,c#4,e4] [g#4,e3,g#3,c#3,e4,c#4] - -] [[g#4,e3,g#3,b2,e4,b3] [g#4,e3,g#3,b2,e4,b3] - -] [[a3,g#4,g#3,e4,a2,e3] [a3,e4,e3,a2,g#4,g#3] - -] [[a3,g4,c#3,g3,c#4,a2] [g4,c#3,g3,a2,c#4,a3] - -]
    -
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#3,c#2,c#1] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
    [[c#3,e3,g#4,g#3,c#4,e4] [g#4,e3,g#3,c#3,e4,c#4] - -] [[g#4,e3,g#3,b2,e4,b3] [g#4,e3,g#3,b2,e4,b3] - -] [[a3,g#4,g#3,e4,a2,e3] [a3,e4,e3,a2,g#4,g#3] - -] [[a3,g4,c#3,g3,c#4,a2] [g4,c#3,g3,a2,c#4,a3] - -]
    -
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#3,c#2,c#1] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
    [[e3,c#3] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,b2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,a2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,c3] g3 e3 g3 [e3,g5,g4] g3 [e3,e4,e5] g3]
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#3,c#2,c#1] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
    [[e3,c#3] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,b2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,a2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,c3] g3 e3 g3 [e3,g5,g4] g3 [e3,e4,e5] g3]
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#3,c#2,c#1] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
    [[e3,c#3] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,b2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,a2] g#3 e3 g#3 [e3,b5,b4] g#3 [e3,g#4,g#5] g#3] [[e3,c3] g3 e3 g3 [e3,g5,g4] g3 [e3,e4,e5] g3]
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#3,c#2,c#1] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
    [[c#3,e3,g#4,g#3,c#4,e4] [g#4,e3,g#3,c#3,e4,c#4] - -] [[g#4,e3,g#3,b2,e4,b3] [g#4,e3,g#3,b2,e4,b3] - -] [[a3,g#4,g#3,e4,a2,e3] [a3,e4,e3,a2,g#4,g#3] - -] [[a3,g4,c#3,g3,c#4,a2] [g4,c#3,g3,a2,c#4,a3] - -]
    [[a3,d#3,g3,a2,d#4,g4] [g4,d#3,g3,a2,d#4,a3] - -]
    -
    [[c#3,e3,g#4,g#3,c#4,e4] [g#4,e3,g#3,c#3,e4,c#4] - -] [[g#4,e3,g#3,b2,e4,b3] [g#4,e3,g#3,b2,e4,b3] - -] [[a3,g#4,g#3,e4,a2,e3] [a3,e4,e3,a2,g#4,g#3] - -] [[a3,g4,c#3,g3,c#4,a2] [g4,c#3,g3,a2,c#4,a3] - -]
    [[a3,d#3,g3,a2,d#4,g4] [g4,d#3,g3,a2,d#4,a3] - -]
    -
    [[c#3,e3,g#4,g#3,c#4,e4] [g#4,e3,g#3,c#3,e4,c#4] - -] [[g#4,e3,g#3,b2,e4,b3] [g#4,e3,g#3,b2,e4,b3] - -] [[a3,g#4,g#3,e4,a2,e3] [a3,e4,e3,a2,g#4,g#3] - -] [[a3,g4,c#3,g3,c#4,a2] [g4,c#3,g3,a2,c#4,a3] - -]
    [[a3,d#3,g3,a2,d#4,g4] [g4,d#3,g3,a2,d#4,a3] - -]
    -
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#3,c#2,c#1] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
    [[e3,c#3] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3] [[e3,c#1,c#3,c#2] g#3 e3 g#3 e3 g#3 e3 g#3] [e3 g#3 e3 g#3 e3 g#3 e3 g#3]
>`)
.sound("piano").lpf(1500)
.sustain(2).release(3).room(0.5)


drums: stack(
  
  s("bd ~ bd:2 ~ ~ bd:1 ~ bd")
    .speed("1 1.2 0.9 1.1").gain(0.4).lpf(2000)
    .shape(0.3),
  
  s("~ rim ~ sd:1 ~ ~ rim:1 ~")
    .speed("1.5 1.3")
    .delay(0.1)
    .room(0.3),
  
  s("[~ cp]*4")
    .speed("2 1 1 2")
    .clip(0.01)
    .sometimes(x => x.delay(0.125).delayfeedback(0.5))
)