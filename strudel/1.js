// First upload (misc exp)
stack(
  n("<0*2 1 [4 2] 3*2>*4").sound("wind"),

  note("[C G], <D Fb B C A>*[0.5,2]")
  .sound("space").gain(3)
  .lpf("<100 200 300 400 500 600 700 800 900 1000 1100 1000 900 800 700 600 500 400 300 200>/4")
  .room(1)
  .pan("<0 1>/2")  
  .delay(1)
  .slow(1),
  
  note("<ds2*2 g2 as2*2 e3>*4".sub(12))
  .gain(1).s("sawtooth").fanchor(0)
  .lpf(mousex.range(0,1000)).lpenv(mousey.range(0,8))
  .ftype('ladder')
  .distort("1.5:.7")
  ._scope(),

  note("[c2, ds3, as3, d4]@3 [ds2, g3, as3, e4] [d3, f3, c4, e3]@3[cs2, g3, b3, f4]")
  .arp("[1 2 0 3] [0 4 2 3] [4 5 0 1][2 1 3 0]").s("sawtooth")
  .lpf(600)
  .gain(0.8)
  .slow(2).color("#0f0")
._pianoroll({ labels: 1 , cycles : 2 }),

   s("bd*4, cp*2").bank('RolandTR909').gain(1),
   s("hh*6").dec(.1).bank('RolandTR909').gain(sine.fast(4))
)
