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
