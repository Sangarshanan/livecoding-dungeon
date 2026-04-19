# 1

circle [0.0, 0.0] (osc ft * 0.3) >> rgb;
circle [osc 0.2, 0.0] (osc ft * 0.9) * [0,0,1] >> add;
-- circle [0.1, osc 0.1] (osc ft * 0.3) * [0,1,0] >> add;

-- sin(log(fx * fy)) >> add;
-- osc(fx * fy * ft) * 0.6 >> add;

-- spin 0.5 $ gdm "screen" >> rgb;
-- 0.4 * unipolar (sin (10 * log (gdm "screen"))) >> add


# 2

sin(log(fx * fy)) * osc((osc ft) * 0.1) >> rgb;
-- sin (fx * osc 50) * [osc 0.01, osc 0.2, osc 0.4] >> add;

-- sin (fx * 5) * sin (fy * 5)  * [osc 0.01, osc 0.2, osc 0.4] >> blend;
-- sin(cos(fx * fy)) * osc((osc ft) * 0.1) >> blend;

-- circle [0,0] (osc ft * 0.5) * [osc 0.1, osc 0.5, osc 0.8] >> blend; -- Mocing
-- circle [osc 0.13, osc 0.17] (osc ft * 0.5) * [osc 0.8, osc 0.05, osc 0.1] >> blend;

-- spin 0.5 $ gdm "screen" >> rgb;
-- 0.4 * unipolar (sin (10 * log (gdm "screen"))) >> add

# 3

rt << [sin $ 0.5*pi*etime, etime];
c << circle (0.8*rtxy rt) 0.08;
pattern << fit 1 $ setfxy [fr,ft*5] $ tilexy [2*pi,pi] c;
pattern * [0.3,0.3,1] >> add;
move [-0.003,0] fb >> add;

-- spin 0.5 $ gdm "screen" >> rgb;
-- 0.4 * unipolar (sin (10 * log (gdm "screen"))) >> add
