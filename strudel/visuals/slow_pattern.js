
const ratchet = register('ratchet', (pat) => pat.sometimes(ply(2)))

let toothpicks = [];
let borderGen = [];
let zoom = 2;
let ready = false;
let frameCount = 0;

const GROW_EVERY = 20; 
const ZOOM_DECAY = 1;

function vec(x, y) { return { x, y }; }

class Toothpick {
  constructor(mx, my, dir) {
    if (dir > 0) {
      this.a = vec(mx, my - 4);
      this.b = vec(mx, my + 4);
    } else {
      this.a = vec(mx - 4, my);
      this.b = vec(mx + 4, my);
    }
    this.dir = dir;
  }
  generate(arr) {
    let okA = true, okB = true;
    for (let e of arr) {
      if (e !== this) {
        if (e.b.x === this.a.x && e.b.y === this.a.y) okA = false;
        if (e.a.x === this.b.x && e.a.y === this.b.y) okB = false;
      }
    }
    let ch = [];
    if (okA) ch.push(new Toothpick(this.a.x, this.a.y, this.dir * -1));
    if (okB) ch.push(new Toothpick(this.b.x, this.b.y, this.dir * -1));
    return ch;
  }
  show(ctx) {
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(this.a.x, this.a.y);
    ctx.lineTo(this.b.x, this.b.y);
    ctx.stroke();
  }
}

note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
.arp("0 [0,2] 1 [0,2]")
.s("sawtooth")
.lpf(700)
.lpenv(1.3)
  .slow(1)
  .onPaint((ctx) => {
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;

    if (!ready) {
      toothpicks = [new Toothpick(0, 0, 1)];
      borderGen  = [new Toothpick(0, 0, 1)];
      zoom = 2;
      frameCount = 0;
      ready = true;
    }

    ctx.fillStyle = '#505050';
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.scale(zoom, zoom);

    for (let t of toothpicks) t.show(ctx);

    if (frameCount % GROW_EVERY === 0 && borderGen.length > 0) {
      let nextGen = [];
      for (let t of borderGen) {
        nextGen.push(...t.generate(borderGen));
      }
      toothpicks.push(...nextGen);
      borderGen = nextGen;
    }

    zoom *= ZOOM_DECAY;
    frameCount++;

    ctx.restore();
  })