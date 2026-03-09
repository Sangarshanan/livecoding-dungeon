// Jux effect: https://strudel.cc/learn/effects/#jux

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


// Rave scenes

$: n("0!8".sub(14)).scale("e:minor").s("supersaw!16").lpenv(irand(5)).orbit(2).decay(0.8)
// .fm(1).fmwave("brown")

// TO add more variation, chaos .fm(1).fmwave("brown")


// Superimposed melody

mel: "eb3(3, 8)"
.superimpose(
  x=>x.slow(2).add(2),
).note().s('piano').clip(1)
.scale('e3:minor')
.release(.1).room(1).gain(0.3)


// Techno 1

setcps(140/60/4)

$: n("0 -7 <0 -3 2 1>@3")
  .scale("g:minor")
  .s("supersaw")
  .delay(.7).pan(rand)
  .lpf(slider(500, 100, 2000, 1))

$: s("pulse!8")
.dec(.1)
.fm(time)
.fmh(time)
// .fm("5 0 3 <1, 1>@3") // Post drop
// .fmh("0 1 3 <1, 1>@3") // Post drop

_kick: sound("bd*4")
  .bank("RolandTR909")
  .gain(1)

white: s("white!8")
  .decay(0.08)
  .lpf(3000)
  .almostNever(
    ply("4 | 2")
  )
  .gain(.2)

openhat: sound("~ oh ~ oh")
  .bank("RolandTR909")
  .gain(0.5)
  .cutoff(3000)


// Techno 2
setcps(140/60/4)

synth: n("<0!2 1!2 0!2 4@2>/1".add(-10)).scale("e:minor").s("supersaw!16").lpenv(irand(5)).lpd(0.4).orbit(2)
  .fm(1).fmwave("brown")

duck: n("sbd!4").duck(2).duckdepth(8).gain(2)

kick: s("bd!4").lpf(220).bank("RolandTR909").gain(1)

ss:  s("hh*16").bank("RolandTR909")
    .n("<0 1 2 3 4 5 6 7>")
    .gain(sine.range(0.1,0.3).fast(2).mul(1))
    .pan(perlin.range(0.3,0.7))
    .hpf(8000)
    .room(0.2)

clap:  s("~ cp ~ ~").bank("RolandTR909")
    .gain(0.3 * 1)
    .delay(0.1).delaytime(0.125)
    .pan(saw.range(0.2,0.8).slow(8))
    .room(0.5)


// Techno 3

setcpm(130/4)

kick: sound("bd*4")
  .bank("RolandTR909")
  .gain(1)

// Hi-hats with variation
hats: sound("[~ hh]*8")
  .bank("RolandTR909")
  .gain("[0.4 0.8]*4")
  .pan(sine.range(0.3, 0.7).slow(4))

// Open hi-hat on off-beats
openhat: sound("~ oh ~ oh")
  .bank("RolandTR909")
  .gain(0.5)
  .cutoff(4000)

// Clap/snare on 2 and 4
clap: sound("~ cp ~ cp")
  .bank("RolandTR909")
  .gain(0.7)
  .room(0.1)

// Bassline - classic techno bass pattern
bassline: note("<[a1 a1 a1 a1] [g1 g1 g1 g1] [f1 f1 f1 f1] [e1 e1 e1 e1]>")
  .sound("sawtooth")
  .lpf("<400 600 800 600>")
  .lpenv(4)
  .lpd(0.1)
  .decay(0.2)
  .gain(0.4)

synth: note("c [e [g b]] d e")
.sound("sawtooth")
.lpf("<800 500 800>")
.lpenv(4)
.decay(0.2)
.sometimes(add(note(12)))

white:  s("white!8")
  .decay(0.08)
  .lpf(4000)
  .almostNever(
    ply("4 | 2")
  )
  .gain(.5)


// Helicopter sound effect

setcps(150/4)

bass: n("<0@2 [10@2] [4@2]>")
.sound("supersaw")
.scale("g1:minor")
.lpf("<400 800>")


// Techno Breaks

setcpm(45)

synth: n("0@2 3 4@2 <0 -3 5 6>@3")
  .superimpose(
    x=>x.slow(2)
  )
  .scale("g:minor")
  .sound("supersaw")
  .lpf(slider(2000, 10, 2000, 1))
  .lpenv(2)
  .room(0.8)
  .delay(.125)
  .fm(1)
  .fmwave("brown")
  .phaser(0.1)

bass: n("0@2 3 4@2 -3@3")
  .scale("g1:minor")
  .sound("saw")
  .lpf(slider(1275, 10, 2000, 1))
  .lpenv(2)
  .room(0.8)
  .delay(.125)

saw: sound("supersaw").detune(1).rel(5).beat(2, 32).slow(4).fm(2).phaser(0.2)

pulse: s("pulse!8")
  .seg(16)
  .dec(.1)
.gain(1)
// .fm(time)
// .fmh(time)
.fm("0@2 1 <3>@3")
.fmh("0@2 1 <3>@3")

kick: sound("bd*4").bank("RolandTR909")

_snare: sound("~ cp ~ cp").bank("RolandTR909").lpf(2000)

_white: s("white!8")
  .decay(0.08)
  .almostNever(ply("2 | 4"))
  .gain(0.34)

_breaks: s("breaks/2").fit()
  .scrub(
    irand(8).div(8).seg(8)
  )
  .rib("<25 20 10 3 30>", 1)
.almostNever(ply("2 | 4"))


// Interesting techno idea + Cool arp

kDrums: s("cp bd").beat("1, 2, 5", 8)
  .sometimes(x=>x.ply("2"))
  .speed(1.4)
  .sometimes(fast(2)).lpf(saw.range(100, 1200).slow(16))


t: n("[0 0 0 0] [2 5] [2 3] [2 3]".fast(2).add("<0 0 3 2 -3>".fast(2)))
  .scale("G2:major")
  .sound("casio")
  .degradeBy("0 0.7 0.7 0.7 0.7") 
  .lpf(perlin.range(1300,2200))
  .lpq(0.3)
  .room(0.5).sz(1)
  .delay(0.5)
  .delaysync("<3 2 4>".div(8))
  .cut(0.4)

s_fastarp: n("<0 2 5 7>*4").scale("G3:major")
  .s("supersaw").lpf(tri.range(1000, 2500).slow(8)).decay(0.2).fast(8).gain(tri.range(0.3, 0.7).slow(16))


// Heavy bass
setcpm(170 / 4)

$: s("wt_digital").note("F1")
  .fm(1.3).fmh(0.99).fmwave("sawtooth")
  .room(0.9)

$: s(`<
  bd@2 ~@2
  ~ bd ~@2
  bd@2 ~ [bd:0:0.7 bd:0:0.9]
  ~ bd ~@2
  bd@2 ~@2
  ~ bd ~@2
  bd@2 ~ ~
  ~ [~ bd] ~ bd
>*8`).bank("tr909")
  .duck(4).duckatt(0.3).duckdepth(0.7)

$: s(`<
  ~ sd
>*4`).bank("tr909")

$: s("hh*4").bank("tr909").n(9)

$: n(irand(18).seg(16).add(5)).scale("F:minor")
  .gain(0.5).fm(1.2).fmh(0.99)

// Make drops
all(x => x.reset
  ("<x@4 x*[4 [8 16]] x@4>")
)


// Texture track

// melody
p1: n("[1 2 3 5 2 3 5 7] <[5 3 6 2] [7]!2>")
    .sound("piano")
    .scale(`<D5:minor:pentatonic!9
             D5:major:pentatonic!9
             D5:dorian!9>`)
    .delay(".25:.5")

// pad
p2: n("[2,4,6] [3,5,7]")
    .scale(`<D3:minor:pentatonic!9 
             D3:major:pentatonic!9
             D3:dorian!9>`)
    .sound("sawtooth")
    .room("1.3")
    .gain("0.8").sustain("0.2")
    .lpf("<400 2400 800 1200>")

// hihat
p3: sound("[hh hh:3]")
    .bank("RolandTR808")
    .room("0.6")

// rimshot
p4: sound("rim")
    .room("1.6")
    .gain(".25")


// RISER AND FALL
setcpm(170 / 4)

fall: s("white").struct("< x -!3 >")
.adsr("0:12:0:0").gain(0.25).dist("1.5:.6")
.hpf("1000")
.lpf("20").lpa(4).lpenv(-10).lpd(0).lps(0)

// riser model 1
$: "sd".ply("<4 8 16 32 4@100>").s().gain(0.1).decay(0.08)


// beat and vib arp synth
$:s("sawtooth,tri,saw,sine")
  .gain(saw.rev().range(3,1))
  .lpf(saw.rangex(200,2200).slow(8))
  .beat("3,7,9",16).vib(2,.5)
  .clip(.7)
  .delay(1/2)
  .diode("1:.5")
  .acidenv(slider(0))



// ambience

ambience: note("<0, 4, 8, 11> <6 2 4 3>*2")
  .scale("c:minor")
  .add(note("0, 0.11, -0.11, 0.19, -0.19"))
  .s("supersaw")
  .attack(0.1).release(0.1)
  .rlpf(0.3).lpq(2).phaser(0.1)
  .room("1:10")
  .postgain(0.5)
  .duck(0.7)
  ._spectrum()


// Acid techno

setcps(140/60/4)
//1408 in bed with my cat staring at the birds.. cloudy day with plans later!! 


$: s("bd*4").gain(0.6)

$: s("[acid_kicks:9]*4").duck("3:4").duckdepth(.8).o(2).decay("<.5>").fm(2).sustain(0).scope()
$:  s("[percs:8]*2").decay(.1).delay(1).lpf(slider(0,0,900)).scope()._spectrum()
$: n(irand(24)).sound("saw").room(2).diode("<.1 .5>").acidenv(slider(0.154)).decay(0.5).seg(16).lpf(600).scope()
$: s("[acid_hh:2]*16").decay(0.05).gain(0.5)._spectrum().scope()

$: s("pulse").scale("c:minor").vowel("a e i o u i").delay(1).delayfb(.5).delaysync(1).orbit(2).seg(16).lpf(600).scope()
$: n(irand(32)).sound("gm_fx_echoes").decay(.5).sus(4).seg(16).lpf(900).acidenv(slider(0))._spectrum()
$: s("[wt_digital:5,sawooth]!16").wt(.4).wtenv(.4).acidenv(slider(0.376)).o(2).scope()