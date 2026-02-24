setcpm(95/5)

await initHydra({feedStrudel:1})

s0.initImage('https://upload.wikimedia.org/wikipedia/en/1/10/Massive_Attack_-_Teardrop.jpg')
src(s0)
  .mult(s0)
  .hue(0.9).scrollX(0, -0.3).rotate(0, -0.1)
  .out()

let vocal1 = s("covers")
  .n(2)
  .fit()
  .room(0.5)
  .begin(0.032)
  .end(0.35)
  .speed(0.0282)
  .slow(50)

let vocal2 = s("covers")
  .n(2)
  .fit()
  .room(0.5)
  .begin(0.383)
  .end(0.725)
  .speed(0.0282)
  .slow(50)

let vocal3 = s("covers")
  .n(2)
  .fit()
  .room(0.5)
  .begin(0.7347)
  .speed(0.0282)
  .slow(50)

let hs1 = note(`<[- A3 E4 A3 D4 A3 D4 E4]!3 [- A3 E4 A3 D4 A3 D4 A3]>`).s("gm_harpsichord")
  .release(0.12)
  .gain(0.5)
  .room(0.9)
  .phaser(0.2)

let hs2 = note(`<[- A3 E4 A3 D4 A3 D4 E4]!4>`).s("gm_harpsichord").release(0.12)
  .gain(0.5)
  .room(0.9)
  .phaser(0.2)

let drums = s(`<[bd [bd,hh] - [bd,hh] rim oh hh hh bd [bd,hh] - [bd,hh] rim oh hh hh]!4>`)
    .bank("rolandtr808")
    .penv("<1 7>*2").vib("4:.1")
    .gain(0.5)

let c1 = note(`<[A2,A1] [G2,G1] [D2,D1] [A2,A1]>`).s("piano").release(0.94).gain(0.63)
let c2 = note(`<[G2,G1] [D2,D1] [A2,A1] [G2,G1]>`).s("piano").release(0.94).gain(0.63)
let c3 = note(`<[D2,D1] [A2,A1] [G2,G1] [D2,D1]>`).s("piano").release(0.94).gain(0.63)


$: arrange(
  // Begin
  [1, stack(drums)],
  [4, stack(drums, c1, hs1)],
  [4, stack(drums, c2, hs1)],

  // vocal
  [4, stack(drums, c3, vocal1)],
  [4, stack(drums, c2, vocal2)],
  [4, stack(drums, c1, vocal3)],

  // End
  [1, stack(drums, c1, hs1)],
  [1, stack(drums, c2, hs1)],
  [1, stack(drums, c3, hs1)],
)

all(x=>x.fft(4).scope({pos:0,smear:.95}))
