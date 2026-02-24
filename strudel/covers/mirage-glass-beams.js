setcpm(120 / 3)

samples('github:Sangarshanan/strudel-samples')

// Acid env
register('acidenv', (x, pat) => pat.lpf(100)
        .lpenv(x * 9).lps(.2).lpd(.12)
)

await initHydra({feedStrudel:1})

s0.initImage('https://static2.tripoto.com/media/filter/nl/img/15461/TripDocument/jaisalmer_known_for_its_jaisal_safari.jpg')
src(s0)
  .mult(s0)
  .add(src(s0).modulate(noise(1, ()=>0.3)))
  .hue(0.9).scrollX(0, -0.3).rotate(0, -0.1)
  .diff(src(o0).scrollX(-0.1).scale(1.266))
  .out()

register('acidenv', (x, pat) => pat.lpf(100)
        .lpenv(x * 9).lps(.2).lpd(.12)
)

// Melody
$: note(`<
    [D3 F#3 G3 A3 A#3 C4 A#3 A3] [A3 A#3 A3 _ G3 A3 G3 - - - - - - - G3 G3] [D3 F#3 G3 A3 A#3 C4 A#3 A3] [A3 A#3 A3 _ G3 A3 G3 - - - - - - - A3 G3]
    [D3 F#3 G3 A3 A#3 C4 A#3 A3] [A3 A#3 A3 _ G3 A3 G3 - - - - - - - G3 G3] [D3 F#3 G3 A3 A#3 C4 A#3 A3] [A3 A#3 A3 _ G3 A3 G3 - - - - - - - A3 G3]>`)
  .sound("sawtooth")
  .acidenv(slider(0.824))
  .release(0.8)
  .gain(1.2)

// Bass
$: note(`<
    [D2 - D2 - - - C3 D3] [- D#2 - - - - - -] [D2 - D2 - - - C3 D3] [- D#2 - - - - - -]
    [D2 - D2 - - - C3 D3] [- D#2 - - - - - -] [D2 - D2 - - - C3 D3] [- D#2 - - - - - -]>`).sound("sine").release(0.42).gain(0.7)

// Drum Kit
_$: s(`<
    [[bd,rd] - [bd,rd] - [sd,rd] rd [bd,rd] -] [rd [bd,rd] [sd,rd] rd] [[bd,rd] - [bd,rd] - [sd,rd] rd [bd,rd] -] [rd [bd,rd] [sd,rd] rd]
    [[bd,rd] - [bd,rd] - [sd,rd] rd [bd,rd] -] [rd [bd,rd] [sd,rd] rd] [[bd,rd] - [bd,rd] - [sd,rd] rd [bd,rd] -] [rd [bd,rd] [sd,rd] rd]>`)
  .bank("yamaharm50")
  .gain(0.53)


_$: s(`<
    [[bd] - [bd] - [sd] - [bd] -] [- [bd] [sd] -] [[bd] - [bd] - [sd] - [bd] -] [- [bd] [sd] -]
    [[bd] - [bd] - [sd] - [bd] -] [- [bd] [sd] -] [[bd] - [bd] - [sd] - [bd] -] [- [bd] [sd] -]>`)
  .bank("yamaharm50")
  .gain(0.53)


// mel
$: note(`<
    [[D4,D5] [D4,D5]] [[D4,D5] _ _ _ [D4,D5] [C4,C5] _ _] [[D4,D5] [D4,D5]] [[D4,D5] _ [D4,D5] [F4,F5]]>`)
  .sound("gm_lead_6_voice")
  .gain(0.44)
  .hpf(400)
  .attack(0.1)
  .release(0.5)
  .lpf(5000)


$breaks: s("breaks/2").fit().scrub(irand(16).div(16).seg(8)
                          .rib("<20 15 18 1 16>",1)
                          // .n(irand(2))
                         ).orbit(2)
  .gain(2.5)._scope()

