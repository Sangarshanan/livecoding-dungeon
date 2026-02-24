setcpm(21)

// Bass
$: note(`<
    [B1 - B1 - - - B1 D2 - E2 - B1 D2 - E2 B1] [F#2 - F#2 - - - F#2 A2 - B2 - F#2 A2 - B2 F#2] [B2 - B2 - - - B2 D3 - E3 - B2 E3 D3 B2 A2] [F#2 - F#2 - - - A2 B2 - A2 - F#2 A2 F#2 E2 D2]
    [B1 - B1 - - - B1 D2 - E2 - B1 D2 - E2 B1] [F#2 - F#2 - - - F#2 A2 - B2 - F#2 A2 - B2 F#2] [B2 - B2 - - - B2 D3 - E3 - B2 E3 D3 B2 A2] [F#2 - F#2 - - - A2 B2 - A2 - F#2 A2 F#2 E2 D2]
    [B1 - B1 - - - B1 D2 - E2 - B1 D2 - E2 B1] [F#2 - F#2 - - - F#2 A2 - B2 - F#2 A2 - B2 F#2] [B2 - B2 - - - B2 D3 - E3 - B2 E3 D3 B2 A2] [F#2 - F#2 - - - A2 B2 - A2 - F#2 A2 F#2 E2 D2]
    [B1 - B1 - - - B1 D2 - E2 - B1 D2 - E2 B1] [F#2 - F#2 - - - F#2 A2 - B2 - F#2 A2 - B2 F#2] [B2 - B2 - - - B2 D3 - E3 - B2 E3 D3 B2 A2] [F#2 - F#2 - - - A2 B2 - A2 - F#2 A2 F#2 E2 D2]
    [B1 - B1 - - - B1 D2 - E2 - B1 D2 - E2 B1] [F#2 - F#2 - - - F#2 A2 - B2 - F#2 A2 - B2 F#2] [B2 - B2 - - - B2 D3 - E3 - B2 E3 D3 B2 A2] [F#2 - F#2 - - - A2 B2 - A2 - F#2 A2 F#2 E2 D2]
    [B1 - B1 - - - B1 D2 - E2 - B1 D2 - E2 B1] [F#2 - F#2 - - - F#2 A2 - B2 - F#2 A2 - B2 F#2] [B2 - B2 - - - B2 D3 - E3 - B2 E3 D3 B2 A2] [F#2 - F#2 - - - A2 B2 - A2 - F#2 A2 F#2 E2 B1]
    
    [D2 - - - - F#2 A2 A1 - - - - - B1 D2 -] [E2 - - - - F#2 A2 D2 - - - - - B1 D2 -] [A1 - - - - - - A1 A1 - - - - F#2 A2 A1] [- - - - - - - A1 A1 - - - - - - -]
    [D2 - - - - F#2 A2 A1 - - - - - B1 D2 -] [E2 - - - - F#2 A2 D2 - - - - - B1 D2 -] [A1 - - - - - - A1 A1 - - - - - - A1] [F#2 - - - - - - F#2 F#2 - - - A2 F#2 E2 D2]>`)
  .sound("gm_acoustic_bass")
  .release(0.27)
  .gain(1.2)

// Main Melodies
$: note(`<
    [- - - - - - - [F#3,D3,B3] - [C#3,E3,A3] - - [D3,F#3,B3] - [B3,F#3,D3] -] [[C#3,E3,A3] - - [C#3,E3,A3] - [C#3,E3,A3] - [B2,D3,G3] - - - B2 [B2,D3,G3] - [C#3,E3,A3] [B3,D3,F#3]] [- - - [B3,D3,F#3] - [D3,F#3,B3] - [B3,F#3,D3] - [C#3,E3,A3] - - [F#3,B3,D3] - [F#3,B3,D3] -] [[C#3,E3,A3] - - [C#3,E3,A3] - [C#3,E3,A3] - [A3,C#3,E3] - - - - [E3,C#4,A3] - [E3,A3,C#4] -]
    [- - - - - - - [F#3,D3,B3] - [C#3,E3,A3] - - [D3,F#3,B3] - [B3,F#3,D3] -] [[C#3,E3,A3] - - [C#3,E3,A3] - [C#3,E3,A3] - [B2,D3,G3] - - - B2 [B2,D3,G3] - [C#3,E3,A3] [B3,D3,F#3]] [- - - [B3,D3,F#3] - [D3,F#3,B3] - [F#3,A3,D4] - [E3,A3,C#4] - - [F#3,B3,D3] - [F#3,B3,D3] -] [[C#3,E3,A3] - - [C#3,E3,A3] - [C#3,E3,A3] - [C#3,A3,E3] - - - C#3 [E3,C#3,A3] - [C#3,E3,A3] [D3,F#3,B3]]
    [- - - - - - - [F#3,D3,B3] - [C#3,E3,A3] - - [D3,F#3,B3] - [B3,F#3,D3] -] [[C#3,E3,A3] - - [C#3,E3,A3] - [C#3,E3,A3] - [B2,D3,G3] - - - B2 [B2,D3,G3] - [C#3,E3,A3] [B3,D3,F#3]] [- - - [B3,D3,F#3] - [D3,F#3,B3] - [F#3,A3,D4] - [E3,A3,C#4] - - [F#3,B3,D3] - [F#3,B3,D3] -] [[C#3,E3,A3] - - [C#3,E3,A3] - [C#3,E3,A3] - [B2,G3,D3] - - - - [E3,C#3,A3] - [C#3,E3,A3] [D3,F#3,B3]]
    [- - - - - - - [F#3,D3,B3] - [C#3,E3,A3] - - [D3,F#3,B3] - [B3,F#3,D3] -] [[C#3,E3,A3] - - [C#3,E3,A3] - [C#3,E3,A3] - [B2,D3,G3] - - - B2 [B2,D3,G3] - [C#3,E3,A3] [B3,D3,F#3]] [- - - [B3,D3,F#3] - [D3,F#3,B3] - [F#3,A3,D4] - [E3,A3,C#4] - - [F#3,B3,D3] - [F#3,B3,D3] -] [[C#3,E3,A3] - - [C#3,E3,A3] - [C#3,E3,A3] - [B2,G3,D3] - - - - [E3,C#3,A3] - [C#3,E3,A3] [D3,F#3,B3]]
    [- - - - - - - [F#3,D3,B3] - [C#3,E3,A3] - - [D3,F#3,B3] - [B3,F#3,D3] -] [[C#3,E3,A3] - - [C#3,E3,A3] - [C#3,E3,A3] - [B2,D3,G3] - - - B2 [B2,D3,G3] - [C#3,E3,A3] [B3,D3,F#3]] [- - - [B3,D3,F#3] - [D3,F#3,B3] - [F#3,A3,D4] - [E3,A3,C#4] - - [F#3,B3,D3] - [F#3,B3,D3] -] [[C#3,E3,A3] - - [C#3,E3,A3] - [C#3,E3,A3] - [B2,G3,D3] - - - - [E3,C#3,A3] - [C#3,E3,A3] [D3,F#3,B3]]
    [- - - - - - - [F#3,D3,B3] - [C#3,E3,A3] - - [D3,F#3,B3] - [B3,F#3,D3] -] [[C#3,E3,A3] - - [C#3,E3,A3] - [C#3,E3,A3] - [B2,D3,G3] - - - B2 [B2,D3,G3] - [C#3,E3,A3] [B3,D3,F#3]] [- - - [B3,D3,F#3] - [D3,F#3,B3] - [F#3,A3,D4] - [E3,A3,C#4] - - [F#3,B3,D3] - [F#3,B3,D3] -] [[C#3,E3,A3] - - [C#3,E3,A3] - [C#3,E3,A3] - [C#3,E3,A3] - - - - [E3,C#3,A3] - [C#3,E3,A3] -]
    [A2 D3 [A2,F#4,F#3] F#3 [F#4,F#3] D3 [F#4,F#3] E3 - [C#3,E4,E3] A2 [A3,E4,E3] - E3 - F#3] [G3 D3 [B2,G4,G3] - [G3,G4,G3] F#3 [E3,G4,G3] D3 B2 [A2,A2,F#4,F#3] E2 [F#2,F#4,F#3] - [D3,E4,E3] - [E3,E4,E3]] [- C#3 E3 A3 - E3 C#3 A3 - E3 - C#3 D3 E3 D3 A3] [- E3 C#3 A3 - E3 C#3 A3 - E3 - C#3 - D3 - F#3]
    [- D3 [A2,F#3,F#4] - [G3,F#4,F#3] F#3 [E3,F#4,F#3] D3 B2 [A2,E4,E3] E2 [F#2,E4,E3] - D3 - [F#3,A2]] [[B2,G3] - [G4,G3] - [B2,G3,G4,G3] - [G3,B2,G4,G3] [F#3,A2] - [F#4,F#3] [B2,G3] [F#4,F#3] [A2,F#3] [E4,E3] [B2,G3] [C#3,E3,A3,E3,E4]] [- E3 C#3 A3 - E3 C#3 C#4 - E3 C#3 A3 - E3 - F#3] [- - - [E3,A3] - - - - [A3,E3] B3 A3 F#3 E3 F#3 A3 B3]>`)
  .sound("supersaw")
  .release(0.27)
  .gain(0.2)

// Drum Kit
$: s(`<
    [[hh,bd] hh [hh,bd] hh [hh,sd] hh hh [hh,bd] hh hh [hh,bd] [hh,bd] [hh,sd] hh hh [hh,bd]]

    [[hh,bd] hh [hh,bd] hh [hh,sd] hh hh [hh,bd] hh hh [hh,bd] hh [hh,sd] hh hh [hh,bd]]
    
    [[hh,bd] hh [hh,bd] hh [hh,sd] hh hh [hh,bd] hh hh [hh,bd] hh [hh,sd] hh hh [hh,bd]] [[hh,bd] hh [hh,bd] hh [hh,sd] hh hh [hh,bd] hh hh [hh,bd] [hh,bd] [sd,hh] hh hh hh]
    
    [[hh,bd] hh [hh,bd] hh [hh,sd] hh hh [hh,bd] hh hh [hh,bd] hh [hh,sd] hh hh [hh,bd]] [[hh,bd] hh [hh,bd,cr] hh [hh,sd] hh hh [hh,bd] hh hh [hh,bd] [hh,bd] [hh,sd] hh hh [hh,bd]]>`)
  .gain(0.28)

// Melody
$: note(`<
    [- - - - - - - A3 _ _ F#3 E3 D3 E3 F#3 -] [- - - - - - - C#4 _ _ B3 A3 F#3 A3 B3 -] - -
    [- - - - F#2 A2 _ _ B2 D3 _ D3 D3 E3 F#3 E3] [- - - - - - - C#4 _ _ B3 A3 F#3 A3 B3 _]>`)
  .sound("gm_acoustic_guitar_nylon")
  .release(0.2)
  .distort("0.1:1.5")
  .gain(2)

