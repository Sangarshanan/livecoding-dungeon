/* @title    Fail-safe (equovil iphone flip)
   @by       DJ_Dave equovil
   @license  CC BY-NC-SA (https://creativecommons.org/licenses/by-nc-sa/4.0/)
*/

// ty 2 dj dave for providing the code, decided to a flip on it
// all of her code was written on my iphone

samples('github:tidalcycles/dirt-samples')
samples('github:kyrsive/diarrhea-drumkit')
samples('github:kyrsive/stardust-drumkit')
samples('github:kyrsive/blancnote-samples')
samples('github:kyrsive/glorkglunk-wavetables')
samples({
 crash: 'CRASHANDSIREN.wav',
tag:'takesrsly.wav'
 }, 'https://raw.githubusercontent.com/kyrsive/Random-Samples/main/');
// ^ all of my samples are in my github folder, and a bunch of drum samples are from this tidalcycles library on github (the ones in this flip r also on github except for the tag)

Pattern.prototype.bsend = function (id) { return this.bus(id).dry(0); };
// ^ important function for mastering by glossing

window.arpu = register(
  'arpu',
  (indices, pat) => pat.arpWith((haps) => reify(indices).fmap((i) => {
    const oct = Math.floor(i / haps.length);
    const hap = haps[(i - oct * haps.length) % haps.length];
    hap.value.note = parseNumeral(hap.value.note) + 12 * oct;
    return hap;
  })),
  false,
);
// ^ important function for arps by glossing AGAIN

window.setScale = (sc) => {
  window.SCALE = sc
}

register('sc', (pat) => {
   return pat.scale(window.SCALE)
})

// ^^^ important function for scales by glossing 

register('fill', function (pat) {
  return new Pattern(function (state) {
    const lookbothways = 1;
    // Expand the query window
    const haps = pat.query(state.withSpan(span => new TimeSpan(span.begin.sub(lookbothways), span.end.add(lookbothways))));
    const onsets = haps.map(hap => hap.whole.begin)
      // sort fractions
      .sort((a, b) => a.compare(b))
      // make unique
      .filter((x, i, arr) => i == (arr.length - 1) || x.ne(arr[i + 1]));
    const newHaps = [];
    for (const hap of haps) {
      // Ingore if the part starts after the original query
      if (hap.part.begin.gte(state.span.end)) {
        continue;
      }

      // Find the next onset, to use as an offset
      const next = onsets.find(onset => onset.gte(hap.whole.end));

      // If there is no next onset, the query window is not large enough.
      // We bail out to avoid a crash.
      if (next === undefined) {
        continue;
      }

      // Ignore if the part ended before the original query, and hasn't expanded inside
      if (next.lte(state.span.begin)) {
        continue;
      }

      const whole = new TimeSpan(hap.whole.begin, next);
      // Constrain part to original query
      const part = new TimeSpan(hap.part.begin.max(state.span.begin), next.min(state.span.end));
      newHaps.push(new Hap(whole, part, hap.value, hap.context, hap.stateful));
    }
    return newHaps;
  });
});

register('trancegate', (density, seed, length, x) => {
  density = reify(density).add(.5)
  return x.struct(rand.mul(density).round().seg(16).rib(seed, length)).fill().clip(.7)
})
// ^^^ important fill and old trancegate function by SWITCH ANGELL 

const __fold = (lo, hi, v) => {
    let x = v - lo;
    // avoid the divide if possible
    if(v >= hi) {
      v = hi + hi - v;
      if(v >= lo) {
        return v;
      }
    } else if(v < lo) {
      v = lo + lo - v;
      if(v < hi) {
        return v;
      }
    } else {
      return v;
    }
        
    if(hi == lo) {
        return lo;
    }
    
    // ok do the divide
    const range = hi - lo;
    const range2 = range + range;
    let c = x - range2 * Math.floor(x / range2);
    if(c >= range)
        c = range2 - c;
    return c + lo;
}
window.nfold = register(['nfold'], (lo, hi, pat) =>
  pat.fmap(x => lo => hi => __fold(lo, hi, x)).appBoth(reify(lo)).appBoth(reify(hi))
)
// ^^^^^^ note folder by pulu !!!!!

register(
  'glide',
  (time, pat) => {
    let curr = [],
      prev = [],
      lastT = null;
    const query = (state) => {
      const trig = !!state.controls._cps; // an actual trigger as opposed to lookahead
      const haps = pat.query(state);
      const output = [];
      haps.map((hap) => {
        const { value, whole } = hap;
        const t = Number(whole.begin);
        if (trig && (lastT == null || lastT !== t)) {
          prev = curr;
          curr = [];
          lastT = t;
        }
        const glideHaps = time.query(state.setSpan(hap.wholeOrPart()));
        glideHaps.map((glideHap) => {
          const part = hap.part.intersection(glideHap.part);
          if (!part) return;
          const context = hap.combineContext(glideHap);
          const glideT = glideHap.value;
          const freqF = getFrequencyFromValue(value, value.s === 'sbd' ? 29 : 36); // target
          const freqI = prev.length
            ? prev.reduce((closest, v) => {
                const phase = glideT > 0 ? Math.min((t - v.t) / glideT, 1) : 1;
                const cand = v.freqI + phase * (v.freqF - v.freqI);
                if (closest == null) return cand;
                return Math.abs(cand - freqF) < Math.abs(closest - freqF) ? cand : closest;
              }, null)
            : freqF;
          if (trig) {
            curr.push({ freqI, freqF, t });
          }
          let newVal = value;
          if (Math.abs(freqF - freqI) > 1e-6) {
            newVal = {
              ...value,
              panchor: 0,
              psustain: 0,
              pattack: 0,
              pdecay: glideT,
              penv: -12 * Math.log2(freqF / freqI),
            };
          }
          output.push(new Hap(whole, part, newVal, context));
        });
      });
      return output;
    };
    return new Pattern(query);
  },
  false,
);
// ^^^ important glide function by glossing AGAIN

window.chordshapes = [
  "0,4",             // [0] Power Chord (1-5)
  "0,2,4",           // [1] Triad (1-3-5)
  "-7,0,2,4,7",      // [2] Spread Triad
  "-7,0,2,3,7",      // [3] Spread Sus4/Triad
  "0,2,4,6",         // [4] 7th Chord
  "0,2,3,6",         // [5] Minor 7th Cluster
  "0,4,7,9",         // [6] Open Triad
  "0,4,7,8",         // [7] Open Suspended Triad
  "0,4,6,9",         // [8] Open 7th
  "0,2,6,9",         // [9] Jazz 10th
  "0,2,6,10",        // [10] 11th Chord
  "0,2,4,6,8",       // [11] 9th Chord
  "-7,0,2,6,9",      // [12] Wide 13th
  "0,4,7,9,13",      // [13] 6/9 Extended
  "0,4,8,9,13",      // [14] High Tension Extension
  "0,2,7,8,11",      // [15] High Cluster A
  "0,2,8,9,11",      // [16] High Cluster B
  "-7,0,2,3,7",      // [17] Wide Suspended Spread

  // --- EDM / Melodic House / Future Bass ---

  "0,3,4",           // [18] Sus2 Stack
  "0,1,4",           // [19] Sus4 Stack
  "0,2,3,4",         // [20] Dense Triad Cluster
  "0,2,4,8",         // [21] Add9 Triad
  "0,2,4,9",         // [22] Add9 + 6
  "0,4,6,8",         // [23] Soft Major 9
  "0,2,5,9",         // [24] Dreamy Spread
  "0,4,7,11",        // [25] Ambient Open Stack
  "0,7,9,11",        // [26] Fifth + Upper Cluster
  "0,2,7,11",        // [27] Wide Add9
  "-7,0,4,7",        // [28] Wide Power Chord
  "-7,0,4,6",        // [29] Bass + 7th
  "-7,0,2,9",        // [30] Deep House Voicing
  "-7,0,4,9",        // [31] Festival House
  "-7,0,2,4,9",      // [32] Progressive Stack
  "-7,0,2,4,6,9",    // [33] Full Extended House
  "-7,0,2,4,8",      // [34] Cinematic Minor Feel
  "-7,0,3,7,10",     // [35] Suspended Bass Spread

  // --- Future Bass / Porter / Illenium style ---

  "0,2,4,8,11",      // [36] Future Bass Major
  "0,2,4,6,11",      // [37] Future Bass 11th
  "0,2,4,9,11",      // [38] Bright Emotional Stack
  "0,2,6,9,11",      // [39] Lush Extended
  "0,4,6,8,11",      // [40] Wide Emotional Cluster
  "0,2,3,7,11",      // [41] Hybrid Cluster
  "0,1,4,8,11",      // [42] Tension Pad
  "0,1,2,4,11",      // [43] Massive Cluster
  "0,2,4,5,9",       // [44] Organic Pad Chord
  "0,4,5,9,11",      // [45] Shimmer Stack

  // --- Techno / Minimal / Darker voicings ---

  "0,1,4,7",         // [46] Dark Cluster
  "0,1,3,7",         // [47] Minor Cluster
  "0,4,5,7",         // [48] Tight Open Chord
  "0,5,7",           // [49] Quartal Stack
  "0,5,7,10",        // [50] Quartal 7th
  "0,5,10",          // [51] Hollow Fifth Stack
  "-7,0,5,7",        // [52] Wide Quartal
  "-7,0,1,5",        // [53] Dark Bass Cluster
  "-7,-3,0,5",       // [54] Industrial Spread
  "0,1,5,8",         // [55] Acid Tension
  "0,3,5,8",         // [56] Suspended Dark Chord

  // --- Trance / Uplifting / Big room ---

  "0,2,4,7",         // [57] Big Room Add9
  "0,4,7,11,14",     // [58] Epic Trance Stack
  "-7,0,2,4,7,11",   // [59] Huge Spread Stack
  "0,2,4,6,9,11",    // [60] Full Atmospheric
  "0,7,11,14",       // [61] Anthem Lead Stack
  "0,2,9,11,14",     // [62] Emotional Supersaw
  "-12,0,4,7,11",    // [63] Cinematic Wide Chord
  "-12,-7,0,4,7",    // [64] Massive Octave Spread

  // --- Experimental / modern electronic ---

  "0,1,2",           // [65] Chromatic Cluster
  "0,1,2,4",         // [66] Dense Modern Cluster
  "0,2,3,5,8",       // [67] Floating Ambience
  "0,4,5,8,9",       // [68] Unresolved Texture
  "0,2,5,7,11",      // [69] Quartal Hybrid
  "0,3,7,10,14",     // [70] Cinematic Minor 9
  "0,2,4,7,9,11",    // [71] Full Lydian Stack
  "0,1,4,6,11",      // [72] Tension Wash
  "0,2,6,7,11",      // [73] Poly Cluster
  "0,4,8,11,14",     // [74] Bright Modern Extension
];

window.chrd = function(c) {
  c = reify(c)
  return c.outerBind(c => {
    const [degree, variation = 0] = [c].flat()
    const chords = window.chordshapes[Math.min(variation, window.chordshapes.length - 1)]
    return n(chords).add(n(degree))
  } )
}
// ^^^^ SHIT TON OF CHORDS BY GLOSSING AND SWITCH ANGEL !!!!

window.getdur = async (s, n = 0) => {
  const { samples: bank, resolveUrl } = getSound(s).data;
  const fakeHap = { s, n };
  const { buffer, playbackRate } = await getSampleBuffer(fakeHap, bank, resolveUrl);
  return buffer.duration / playbackRate;
};

const durCache = new Map();

Pattern.prototype.reese = function(xPat = 0, yPat = 0, spetunePat = 0.2) {
  xPat = reify(xPat);
  yPat = reify(yPat);
  spetunePat = reify(spetunePat);
  return this.withHaps((haps) => {
    return haps.flatMap((hap) => {
      const v = hap.value;
      const vS = v.s, vN = v.n ?? 0;
      if (vS == null) return hap;
      const key = vS + ':' + vN;
      let dur = durCache.get(key);
      if (!dur) {
        dur = getdur(vS, vN).then((d) => (durCache.set(key, d), d));
        durCache.set(key, dur);
      }
      const sampleDur = typeof dur === 'number' ? dur : 1;
      const freq = getFrequencyFromValue(v);
      const { note: _note, freq: _freq, ...filteredV } = v;
      const fScale = freq * sampleDur;
      const hapFunc = (isLeft) => (x) => (y) => (spetune) => {
        y = clamp(y, 0, 1) * 0.3;
        spetune = clamp(spetune, 0, 1) * 0.02;
        const dt = Math.pow(fScale, y - 1);
        const speed = Math.pow(fScale, y);
        const end = x + dt;
        return {
          ...filteredV,
          loop: 1,
          loopBegin: x,
          loopEnd: end,
          begin: x,
          end,
          speed: speed * (isLeft ? 1 - spetune : 1 + spetune),
          pan: isLeft ? 0.3 : 0.7,
        };
      }
      const hapL = hap.withValue(() => hapFunc(true));
      const hapR = hap.withValue(() => hapFunc(false));
      return [hapL, hapR];
    });
  }).appLeft(xPat).appLeft(yPat).appLeft(spetunePat);
};

// ^^^^ epic turn any sound into reese code by GLOSSING !!!!!!!

window.sweep = (name, soundLen = 1, totLen = 8) => {
  return arrange(
    [totLen - soundLen, silence],
    [soundLen, s(name).slow(soundLen).fit().mul(speed(-1))],
  );
};

// ^^^^^^ awesome turn any sound into a riser by GLOSSINGGG

// everyone say thank u to those who made these good functions, this thing isnt possible without their work !!

setCps(140/60/4) 
setScale("C#:MINOR")

// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// below are all the instrument and vocal loops RESTRUCTURED >:DDDDDDDD


let LEAD = n(irand("6").seg(8).slow(2)).scale("c#4:minor:pentatonic")
  .fast("[8]").slow("16").strans("[0,4]")
  .sound("gm_lead_7_fifths:0")
.lpf(100).lpenv(11).lpd(0.9).lpa(0.2)
  //.FX(room(1).rfade(30)).FXr(0.4)
  .bsend(1).bgain(1.4)


let BASS = note("{c#3@3 a2@2 e2@3 c#3@0.5 f#2@2.5 a2@2 e2@3}%8"
  .slow(2)).trans("-12")
  //.rarely(trans("12"))
  .sound("jj_808:3").cut(4)
  .dec(0.9)
 // .distort(1)
  .bsend(1).bgain(1.4)
  //.mask("<0!8 1!24>")

let CHOPS = s("CHOPS").clip(1).note("c2").distort(1)
  //.postgain(0.1)
  .jux(rev)
  //.speed(-1)
 .FX(delay(0.2).ds(1/4).dfb(0.4),room(0.6)).FXr(0.6)
.slice(16, "[0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15]".fast(2)).ply(2)
  .rev()
  .rib(2433,16)
.bsend(1).bgain(0.4)

let GANG = s("GANG_VOX").loopAt(8).chop(16).clip(1)
.bsend(1).bgain(1.7)

let BG = s("BG_VOX").loopAt(8).chop(4).clip(1).bsend(1).bgain(1.2)

let SINE = chrd("<0 5>/2:<38>").scale("C#:MINOR").trans(12)
.arpu("0 - 9 1 2 [- 3] - <5 7 5 9>".add("<0 0 [2 1 0] [2 1 0]>/2"))
  .s("square").dec(0.4).ply(2)
  .glide(0.04).hpf(100)
  .slow("1 2").bsend(1).bgain(1)

let SINE2 = chrd("<0 5>/2:21").scale("C#:MINOR").trans(12)
.arpu("0 3 9 1 2 [- 3] 0 <5 7 5 9>".add("<0 0 [2 1 0] [2 1 0]>/4")
      .bite("8","3 1 7 4".seg(8).fast("<2!3 <4 1!7>>*2")).add("0 2"))
  .s("square").dec(0.4)
  .glide(0.04).hpf(100)
  .bsend(1).bgain(0.9)

let SINE3 = chrd("<0 5>/2:21").scale("C#:MINOR").trans(12)
.arpu("0 3 9 1 2 [- 3] 0 <5 7 5 9>".add("<0 0 [2 1 0] [2 1 0]>/4")
      .bite("8","3 1 7 4".seg(8).fast("<2!3 <1>>*2")).add("0 2"))
  .s("square").dec(0.4)
  .glide(0.04).hpf(100)
  .bsend(1).bgain(0.9)


let PLC = chrd("<0 2>/4:32").ply(8).struct("[x x x*2 x]").sc().trans(24)
  .s("supersaw").dec(0.4).lpf(1000).lpenv(4).lpa(0).lpd(0.6)
.bsend(1).bgain(1.2)

let DRUM = stack(
  s("ug_sd(3,8,4)/[2]")
  //.brak()
 .fast("<2 1 1 2>")
  .ply("1 2")
  .n(irand(8))
  .rib(0,16)
.bsend(1).bgain(1.2)

, s("ug_chant:4(1,8,3)/2").bsend(1).bgain(1.4)

, s("jj_oh(1,8,7)/3").bsend(1).bgain(1.1)

, s("jj_hh:6(12,16,4)/2")
  .speed("[1]")
.fast("[1|2]").rib(3533,16).bsend(1).bgain(1.2)

, s("jj_cp(1,8,6)*<1 2>").n(irand(4)).bsend(1).bgain(1.6)
              )

let DRUM2 = stack(
  s("sd(3,8,4)/[<1 3!31> 1 2]")
  .brak()
  .bank("[ug|jj|bn]")
 .fast("<2 1 1 2>")
 // .ply("1 2?")
  .n(irand(8).mul("[1|1|2]"))
 // .rib(3,16)
.bsend(1).bgain(1.8).transient(1)

, s("ug_chant:4(1,8,3)/4").bsend(1).bgain(2.4)

, s("jj_oh(1,8,7)/3").bsend(1).bgain(1.3)

, s("jj_hh:6(12,16,4)/4")
  .speed("[1]").ply("1 3")
.fast("[1|2]").rib(3533,16).bsend(1).bgain(1.4)
, s("sbd(3,16,12)/4").penv(100).pdec(0.8).dec(0.4).bsend(1).bgain(1.4)
, s("jj_cp(1,8,6)*<1 2>").n(irand(4)).palindrome().bsend(1).bgain(1.6)
  
  ,s("[bn_perc|ug_perc]").euclidRot(13,32,12).slow("<8 4>").n("<14 0 6 2 9 43 13 22 12>".mul("3 1.4")).bsend(1).bgain(1.3).transient(1)
  , s("bn_glitch").euclidRot(5,32,8).brak().slow(2).n("<9 1 15 34 12 24 17 23>".mul(4))
  .scrub(rand.seg(16)).degrade().rib(0,8).clip(2).bsend(1).bgain(1.3)
              )

let PAD = chrd("<0 _ 5 -1>:<32 _ 12 3>").sc()
  .strans(0,4).trans(0).s("wt_digital:3")
  .unison(4).wtsync(0.3)
.lpf(3000).bsend(1)

let REESE = note("c#3@2 a3@3 e3@3 c#3@2 a3@3 f#3@3".slow(4)).trans(-12)
  .glide(0.03).s("CHOPS")
.reese(0.04,0.04).rel(0).lpf(1000).bsend(1).bgain(1.1)

let SUB = note("c#3@2 a3@3 e3@3 c#3@2 a3@3 f#3@3".slow(4)).trans(-24)
  .s("sine").dec(1.3).asym(0.3).bsend(1).bgain(1.9)

let VERSE1 = s("verse1")
  .slice("16","<0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15>")
.bsend(1).bgain(1.8)

let VERSE2 = s("verse2")
  .slice("16","<0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15>")
.bsend(1).bgain(1.8)

let ARP = chrd("<0 _ 5 -1>:<32 _ 12 3>").sc()
  .strans(0,4).arpu("[0 1 2 3 4 5 4 3]".mul(2).nfold(2,7)).trans(12)
  .s("sine").dec(1.3).hpf(1000)
.bsend(1).bgain(1.1)

let CLAP = s("jj_cp(1,8,6)*<1 2>").n(irand(4))
  .bsend(1).bgain(1.6)

let OPEN = s("jj_oh!4").bsend(1)

let DRILL = s("jj_hh:5").struct("[x - - x - - x -]".fast(2))
.bsend(1).transient(1).bgain(1.4)

let PAD2 = s("bn_pad_csm").scrub("9 4".div(32)).speed("4,2").bsend(1).bgain(1)

let NEW = s("bn_texture_csm").scrub(irand(16).seg(8).div(16))
  .trancegate(0.9,4,2).slow(2).rel(0.6)
.rib(24,16).dec(0.6).speed(1).bsend(1).bgain(1.1)

let IMPACT = s("<crash -!31>").dec(1.5).bsend(1).bgain(2.3)

let RISER1 = sweep("bn_oh:0", 1, 8).FX(delay(0.6),ds(1/8)).FXr(0.5).bsend(1).bgain(1.4)

let RISER2 = sweep("FX", 1, 16).chebyshev(0.1).bsend(1).bgain(2)

let RISER3 = sweep("oh:2", 1, 2).bsend(1).bgain(2)

$: arrange(
  [8,stack(CHOPS.speed(0.5),PAD,REESE,SUB,RISER1)],
          [16, "<0!16,1!16,2!16,-!8 3!8,4!16,5!16,-!8 6!8, -!8 7!8, -!8 8!8,9!8 -!8>".pick(
            [CHOPS,
             VERSE1,
             SINE.slow("2 1").bite("8","7 1 2 3".fast("2"))
             .scramble(4).rib(0,8).trans(-12).dec(0.3),
            PAD,
            REESE,
            SUB,
            ARP,
            CLAP,
            DRILL,
            RISER1])],
          [16, stack(GANG,RISER1, SINE,CLAP.mask("<0!4 1!12>"),OPEN.mask("<0!8 1!8>").fast("<1!12 2!2 4!2>"))],
  [32, stack(CHOPS, GANG.when("<0!16 1!16>", x => x.bite("16","<13 10 11 15>/4".ply(4)))
             , SINE2.mask("<1!16 0!16>"),PLC.mask("<0!16 1!16>")
             , DRUM.mask("<0!2 1!30>")
             ,BASS.mask("<0!2 1!30>")
             , RISER3.mask("<1!2 0!30>")
             ,LEAD.mask("<0!2 1!30>")
             ,ARP.mask("<0!16 1!16>")
             ,OPEN.mask("<0!16 1!16>").slow(1))],
  [8,stack(CHOPS,PAD2.speed(2).hpf(400),RISER1,REESE,SUB)],
  [16, "<0!16,1!16,2!16,-!8 3!8,4!16,5!16,-!8 6!8, -!8 7!8, -!8 8!8, -!8 9!8, 10!8 -!8>".pick(
            [CHOPS,
             VERSE2,
             SINE3.slow("2 1").bite("8","7 1 2 3".fast("2"))
             .rib(0,8).trans(-12).dec(0.3),
            PAD2,
            REESE,
            SUB,
            CLAP,
            DRILL,
            RISER1,
            NEW])],
  [16,stack(GANG,RISER1, NEW,CLAP.mask("<0!4 1!12>"), ARP.mask("<0!8 1!8>"),OPEN.mask("<0!8 1!8>").fast("<1!12 2!2 4!2>"))],
  [1,stack(VERSE2.bite("16","1*4"))],
  [32, stack(IMPACT,VERSE2.chop(2).rib("<0!4 1!4 0!4 1!4 0!4 1!4 0!4 1!4>".fast(2),0.25),PAD2, SINE.slow("2 1").bite("8","7 1 2 3".fast("2"))
             .scramble(4).rib(0,8).trans(-12).dec(0.3),ARP,BASS,DRUM2.sometimes(x => x.palindrome()).soft(0.1),s("<- tag -!31>").fit().bsend(1).compressor("-20").bgain(2.1),GANG.mask("<0@16 1@16>").begin(0).bgain(2.5))],
  [4, silence]
  
)
.rib(40,50)

$: s("bus:1").soft(0)