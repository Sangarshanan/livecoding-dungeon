// https://strudel.cc/#CgpzZXRDcG0oOTAvNCkKCmNvbnN0IGtpY2sgPSBzKCJiZCE0OjYiKS5kdWNrb3JiaXQoMikuZHVja2F0dGFjayguMjUpCmNvbnN0IHNuYXJlID0gcygiLSBzZDo0IC0gc2Q6NCIpLmdhaW4oLjQpCmNvbnN0IGhoID0gcygiaGghODoxIikub3JiaXQoMikuZ2FpbiguMykKCmRydW1zOiBzdGFjayhzbmFyZSwga2ljaywgaGggKQogIC5nYWluKC4zKQogIC5fc2NvcGUoKQoKc3ludGg6IAovLyBub3RlKCJmMiBkMiE2IGQjMiEzIGQyITUgZDIgfCBjIzIgZDIhNiBkIzIhNSBkMiE0IikKbm90ZSgiZjIgZDIhNiBkIzIhMyBkMiE1IGQyIikKbm90ZSgiYyMyIGQyITYgZCMyITUgZDIhNCIpCi8vIG5vdGUoImQyITggZjIgZzIgZDIhNiIpCi8vIG5vdGUoImQyITYgYWIyITUgZDIhNSIpCiAgLnRyYW5zKDEyKQogIC5zKCJnbV94eWxvcGhvbmUiKQogIC5vcmJpdCgyKQogIC5nYWluKC4zKQogIC5fcGlhbm9yb2xsKCkKCgovLyBhcnA6IG5vdGUoIjxbZDUgYTUgYWI1IGQ2XSo0IFtbZDUgYTUgYWI1IGU2XSBbZDUgYTUgYWI1IGY2XV0qMj4gfCA8W2Q1IGViNSBhNSBkNl0qNCBbZDUgZWI1IGE1IGY2XSo0PiB8IDxbZDUgZTUgZjUgYTVdKjQgW2Q1IGU1IGY1IGc1XSo0PiB8IDxbZDUgYTUgYSM1IGQ2XSo0IFtbZDUgYTUgYSM1IGY2XSBbZDUgYTUgYSM1IGU2XV0gKiAyID4iKQovLyBhcnA6IG5vdGUoIjxbZDUgZWI1IGE1IGQ2XSo0IFtkNSBlYjUgYTUgZjZdKjQ%2BIikKLy8gYXJwOiBub3RlKCI8W2Q1IGE1IGFiNSBkNl0qNCBbW2Q1IGE1IGFiNSBlNl0gW2Q1IGE1IGFiNSBmNl1dKjI%2BIikKLy8gYXJwOiBub3RlKCI8W2Q1IGU1IGY1IGE1XSo0IFtkNSBlNSBmNSBnNV0qND4iKQpfYXJwOiBub3RlKCI8W2Q1IGE1IGEjNSBkNl0qNCBbW2Q1IGE1IGEjNSBmNl0gW2Q1IGE1IGEjNSBlNl1dICogMiA%2BIikKLnRyYW5zKC0xMikKLnMoImdtX3h5bG9waG9uZSIpCi5kaXN0b3J0KDAuNSkKLmxwZW52KHBlcmxpbi5zbG93KDMpLnJhbmdlKDEsNSkpCi5scGYocGVybGluLnNsb3coMikucmFuZ2UoMTAwLCAzMDAwKSkKLmdhaW4oMC41KQoucm9vbSgwLjgpCi5yc2l6ZSg2KQouX3BpYW5vcm9sbCgp

setCpm(90/4)

const kick = s("bd!4:6").duckorbit(2).duckattack(.25)
const snare = s("- sd:4 - sd:4").gain(.4)
const hh = s("hh!8:1").orbit(2).gain(.3)

drums: stack(snare, kick, hh )
  .gain(.3)
  ._scope()

synth: 
// note("f2 d2!6 d#2!3 d2!5 d2 | c#2 d2!6 d#2!5 d2!4")
note("f2 d2!6 d#2!3 d2!5 d2")
note("c#2 d2!6 d#2!5 d2!4")
// note("d2!8 f2 g2 d2!6")
// note("d2!6 ab2!5 d2!5")
  .trans(12)
  .s("gm_xylophone")
  .orbit(2)
  .gain(.3)
  ._pianoroll()


// arp: note("<[d5 a5 ab5 d6]*4 [[d5 a5 ab5 e6] [d5 a5 ab5 f6]]*2> | <[d5 eb5 a5 d6]*4 [d5 eb5 a5 f6]*4> | <[d5 e5 f5 a5]*4 [d5 e5 f5 g5]*4> | <[d5 a5 a#5 d6]*4 [[d5 a5 a#5 f6] [d5 a5 a#5 e6]] * 2 >")
// arp: note("<[d5 eb5 a5 d6]*4 [d5 eb5 a5 f6]*4>")
// arp: note("<[d5 a5 ab5 d6]*4 [[d5 a5 ab5 e6] [d5 a5 ab5 f6]]*2>")
// arp: note("<[d5 e5 f5 a5]*4 [d5 e5 f5 g5]*4>")
_arp: note("<[d5 a5 a#5 d6]*4 [[d5 a5 a#5 f6] [d5 a5 a#5 e6]] * 2 >")
.trans(-12)
.s("gm_xylophone")
.distort(0.5)
.lpenv(perlin.slow(3).range(1,5))
.lpf(perlin.slow(2).range(100, 3000))
.gain(0.5)
.room(0.8)
.rsize(6)
._pianoroll()


// Cyberpunk

setCpm(90/4)

const kick = s("bd!4:6").duckorbit(2).duckattack(.25)
const snare = s("- sd:4 - sd:4")
const hh = s("hh!8:1").orbit(2).gain(.4)

drums: stack(kick, snare, hh)._scope()

_synth: note("f2 d2!6 d#2!3 d2!5 d1")
  .s("supersaw")
  .orbit(2)
  ._pianoroll()


register('acidenv', (x, pat) => pat.lpf(100)
        .lpenv(x * 9).lps(.2).lpd(.12)
)

arp: note("<[d5 a5 a#5 d6]*4 [[d5 a5 a#5 f6] [d5 a5 a#5 e6]] * 2 >")
.trans(-12)
.s("sawtooth")
.distort(0.5)
.lpenv(perlin.slow(3).range(1,5))
.lpf(perlin.slow(2).range(100, 3000))
.gain(0.5)
.room(0.8)
.rsize(6)
._pianoroll()



// Lofi


setCpm(100/4)

const lofi = "<c:major d:minor g:major>"

const guitar = "gm_electric_guitar_jazz"
const lead = "gm_trombone:5"

$: n("[ 0 -5]!1/2 | [0 3]!1/2")
.scale(lofi)
.s(guitar)


$: n("[ 3 -2]!1/2 | [3 8]!1/2")
.scale(lofi)
.s(lead)
.early(0.01)
._pianoroll()


$: n(irand(8).add(12).scale("minor")
   .struct("<0@.25 0.125> <1@2 1 1@.5> 1@.6 1@1.9 1 <1@1 1 1@2>"))
   .scale(lofi)
   .s("piano")
   .phaser(0.9)
   ._pianoroll()
