setcps(.6)

await initHydra({ feedStrudel: 1 })

//
src(s0).kaleid(H("<2 10 3>"))
.diff(osc(1,0.4,5))
.modulateScale(osc(0.4,-0.25,0.4))
.out()
//

stack(
  s("bd bd*2 sd hh*3 bd sd*2 hh hh")
    .bank("RolandTR909")
    .speed(1.6)
    .lpf(sine.range(400, 2000))
    .delay(0.2)
    .gain(1),

  s("bd ~ sd ~ bd sd ~ ~").bank("test"),
  
  note("c2 ~ eb2 ~ f2 ~ g2 ab2")
    .s("sawtooth")
    .lpf(300)
    .gain(0),

  s("noise").spectrum({ thickness: 5, speed: 2 }),
  
  note("[c2*4, g1*2, ~]/2")
    .s("sawtooth")
    .sometimesBy(0.2, rev)
    .degradeBy(0.1)
    .crush(sine.range(3, 6).slow(4))
    .lpf(perlin.range(200, 1500).slow(8))
    .lpq(perlin.range(0.5, 5).slow(6))
    .delay(0.5)
    .delaytime(rand.range(0.1, 0.4))
    .room(0.3)
    .gain(0)
    .spiral()
)
