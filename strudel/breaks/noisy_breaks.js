// https://strudel.cc/#c2V0Y3BzKC42KQoKYXdhaXQgaW5pdEh5ZHJhKHsgZmVlZFN0cnVkZWw6IDEgfSkKCi8vCnNyYyhzMCkKICAucmVwZWF0KEgoIjwyIDQgOD4iKSwgSCgiPDMgNSAxPiIpKSAvLyBBdWRpbyBjb250cm9scyB0aGUgbnVtYmVyIG9mIHJlcGV0aXRpb25zCiAgLnNjcm9sbFgoKCkgPT4gTWF0aC5zaW4odGltZSAqIDAuMSkgKiAwLjEpIC8vIFNsb3cgc2lkZS10by1zaWRlIGRyaWZ0CiAgLm1vZHVsYXRlKG5vaXNlKDUsIDAuMSksIDAuMDUpIC8vIEFkZCBhIHN1YnRsZSBsYXllciBvZiBzdGF0aWMgbm9pc2UKICAuc3ViKHNyYyhvMCkucm90YXRlKDAuMDEpLmNvbG9yYW1hKDAuMSkpIC8vIFN1YnRyYWN0aXZlIGZlZWRiYWNrIHdpdGggcm90YXRpb24gYW5kIGNvbG9yIHNoaWZ0CiAgLmNvbnRyYXN0KDEuNSkKICAub3V0KCkKLy94CgoKc3RhY2soCiAgLy8gQmVhdHMgLSBjb250cm9sbGVkIGJ5IHBsYXlCZWF0cyB2YXJpYWJsZQogIHMoImJkIGJkKjIgc2QgaGgqMyBiZCBzZCoyIGhoIGhoIikKICAgIC5iYW5rKCJSb2xhbmRUUjkwOSIpCiAgICAuc3BlZWQoMS42KSAKICAgIC5scGYoc2luZS5yYW5nZSg0MDAsIDIwMDApKQogICAgLmRlbGF5KDAuMikKICAgIC5nYWluKDIpLAoKICBzKCJiZCB%2BIHNkIH4gYmQgc2QgfiB%2BIikuYmFuaygiUm9sYW5kVFI5MDkiKSwKICAKICBub3RlKCJjMiB%2BIGViMiB%2BIGYyIH4gZzIgYWIyIikKICAgIC5zKCJzYXd0b290aCIpCiAgICAubHBmKDMwMCkKICAgIC5nYWluKDgpLAoKICBzKCJub2lzZSIpLnNwZWN0cnVtKHsgdGhpY2tuZXNzOiA1LCBzcGVlZDogMiB9KSwKICAKICBub3RlKCJbYzIqNCwgZzEqMiwgfl0vMiIpCiAgICAucygic2F3dG9vdGgiKQogICAgLnNvbWV0aW1lc0J5KDAuMiwgcmV2KQogICAgLmRlZ3JhZGVCeSgwLjEpCiAgICAuY3J1c2goc2luZS5yYW5nZSgzLCA2KS5zbG93KDQpKQogICAgLmxwZihwZXJsaW4ucmFuZ2UoMjAwLCAxNTAwKS5zbG93KDgpKQogICAgLmxwcShwZXJsaW4ucmFuZ2UoMC41LCA1KS5zbG93KDYpKQogICAgLmRlbGF5KDAuNSkKICAgIC5kZWxheXRpbWUocmFuZC5yYW5nZSgwLjEsIDAuNCkpCiAgICAucm9vbSgwLjMpCiAgICAuZ2FpbigxKQogICAgLnNwaXJhbCgpCikK

setcps(.6)

await initHydra({ feedStrudel: 1 })

//
src(s0).kaleid(H("<2 10 3>"))
.diff(osc(1,0.4,5))
.modulateScale(osc(0.4,-0.25,0.4))
.out()
//

stack(
  s("bd bd*2 sd hh*3 bd sd*2 hh hh")
    .bank("RolandTR909")
    .speed(1.6)
    .lpf(sine.range(400, 2000))
    .delay(0.2)
    .gain(1),

  s("bd ~ sd ~ bd sd ~ ~").bank("test"),
  
  note("c2 ~ eb2 ~ f2 ~ g2 ab2")
    .s("sawtooth")
    .lpf(300)
    .gain(0),

  s("noise").spectrum({ thickness: 5, speed: 2 }),
  
  note("[c2*4, g1*2, ~]/2")
    .s("sawtooth")
    .sometimesBy(0.2, rev)
    .degradeBy(0.1)
    .crush(sine.range(3, 6).slow(4))
    .lpf(perlin.range(200, 1500).slow(8))
    .lpq(perlin.range(0.5, 5).slow(6))
    .delay(0.5)
    .delaytime(rand.range(0.1, 0.4))
    .room(0.3)
    .gain(0)
    .spiral()
)
