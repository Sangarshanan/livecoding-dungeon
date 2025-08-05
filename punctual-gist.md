-- fit 3 $ circle [sin cps, osc 0] [osc 0.5, 0.5] * (osc ft) * 0.2 >> video;
-- fit 3 $ circle [0, sin cps] [osc 0.5, 0.5] * 0.2 >> video;

circle [0.0, 0.0] (osc ft) * 0.3 >> red;
fit 1 $ circle [osc 0.1, 0.0] (osc ft) * 0.3 >> blue;
fit 1 $ circle [0.1, osc 0.1] (osc ft) * 0.3 >> green;


-- mesh [0,0.1] [0.5,0.5] * (osc ft) * 0.2 >> blue;
-- mesh [0,-0.1] [0.5,0.5] * (osc ft) * 0.2 >> video;

-- sin(log(fx * fy)) >> blue;
-- osc(fx * fy * ft) * 0.6 >> video;


sin (fx * osc 60) * tri (fy * 60.05) * fx * fy * 10db >> blue;
saw (fx * 60) * tri (fy * 60.05) * fx * fy * 10db >> green;
osc ((0.5-fx) * osc 40) * osc ((fy+2) * 30) * fx * osc fy * 2 * 15db >> red;


t << etime * 0.1; res << floor (mid * 10) + 2; t << t * (10-res)/1;
c1 << circle [0, 0] (0.2 * res * sin t); c2 << circle [0, 0] (0.2 * sin t - 0.5); 
l1 << hline 0 (0.3 * res * sin t); -- cos (t * res)  * res * 0.01 + 0.125
c << [sin 0.2, sin 0.4, sin 0.8, 0.3]; [0, 0, 0, 1.0] >> blend;
fit 1 $ move (sin t * 0.01) $ tile [res, res] $  (c1-c2) * l1 * c >> blend <> 4;


-- AUDIO --
saw 2 & lpf 1500 1 >> audio;
sqr 1 & hpf 2000 1 >> audio;

-- Camera --

0.6 * unipolar (cos(10*log(cam)))>>video;

cos(cam) >> video; -- camera
