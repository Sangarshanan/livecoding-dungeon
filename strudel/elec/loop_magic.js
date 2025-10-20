const size = 50
hush()
stack(
  ...Array(size).fill(0).map((_, i) => {
    const noteNum = i
    return n(noteNum)
      .cpm(50 * (i / 50))
      .hsl(i / size, 1, .6)
      .scale("<C2:mixolydian, F2:mixolydian>/4")
      .lpf(60000/i)
      .s("dantranh_vibrato:wineglass:vibraphone_soft:1:2").n("1".add(sine.mul(15)
      .slow(10))).ch(i%128).gain(1)
  })
)
.decay(1.5).sustain(.05)
.pan(signal(x => Math.random()).pow(2).speed(.3))
.velocity(signal(x => Math.random()).range(0.4,0.7))
.pianoroll({
  fill: 0.2,
  stroke: 0,
  vertical: true
}).clip(.9)
.fft({
  background: "#000000",
  foreground: "#daa520"
})