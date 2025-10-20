

// Misc drums percs

drums: stack(
  s("bd ~ bd:2 ~ ~ bd:1 ~ bd")
    .speed("1 1.2 0.9 1.1")
    .shape(0.3),
  
  s("~ rim ~ sd:1 ~ ~ rim:1 ~")
    .speed("1.5 1.3")
    .delay(0.1)
    .room(0.3),
  
  s("hh:3*16?0.7")
    .speed(sine.range(1.2, 1.8).slow(4))
    .pan(sine.range(0.3, 0.7).fast(8)),
  
  s("[~ cp]*4")
    .sometimes(ply(2 | 4))
    .speed("2 1 1 2")
    .crush(1)
    .sometimes(x => x.delay(0.125).delayfeedback(0.5))
)
.fast(2)
.spiral()
