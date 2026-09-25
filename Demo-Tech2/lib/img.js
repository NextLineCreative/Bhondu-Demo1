// Centralized image URLs — curated pottery / ceramics photos from Unsplash.
// If any specific URL fails on your host, swap it here and every page updates.
const u = (id, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMG = {
  // Hero / editorial
  heroPot:       u('1611791484670-ce19b801d192', 1400),   // large rustic terracotta pot
  heroAlt:       u('1610701596007-11502861dcfa', 1400),   // earthen vessel closeup
  studioHero:    u('1565193566173-7a0ee3dbe261', 1400),   // potter's wheel studio
  studioSet:     u('1493806717525-c33d9d74a1b8', 1400),   // ceramic set on wooden table
  studioDetail:  u('1493106641515-6b5631de4bb9', 1200),   // studio detail / finished pieces
  door:          u('1519710164239-da123dc03ef4', 1200),   // rustic door / entry
  workshop:      u('1591741535018-d042766c62eb', 1200),   // hands on pottery wheel

  // Process
  clayRaw:       u('1551772804-b90f4b4ff9de',    900),    // raw clay in hands
  shaping:       u('1565193566173-7a0ee3dbe261', 900),    // shaping on wheel
  firing:        u('1615529182904-14819c35db37', 900),    // kiln fire
  finishing:     u('1560421683-6856ea585c78',    900),    // hand-finished piece

  // Products — mugs
  mug1:          u('1493809842364-78817add7ffb', 700),
  mug2:          u('1544787219-7f47ccb76574',    700),
  mug3:          u('1516214104703-d870798883c5', 700),

  // Products — bowls & plates
  bowl1:         u('1578749556568-bc2c40e68b61', 700),
  bowl2:         u('1584589167171-541ce45f1eea', 700),
  plate1:        u('1607452579050-a12dfebfdf1f', 700),
  plate2:        u('1550966871-3ed3cdb5ed0c',    700),

  // Products — vases & jugs
  vase1:         u('1578500494198-246f612d3b3d', 700),
  vase2:         u('1602523498326-7d8a2c9b0da2', 700),
  vase3:         u('1533377088493-7f9a70c02d5b', 700),
  jug1:          u('1610701596061-2ecf227e85b2', 700),
  jug2:          u('1611930022073-b7a4ba5fcccd', 700),

  // Products — planters & pots
  planter1:      u('1485955900006-10f4d324d411', 700),
  planter2:      u('1602046943608-0d33d67fe814', 700),
  pot1:          u('1610701596007-11502861dcfa', 700),
  pot2:          u('1611791484670-ce19b801d192', 700),

  // Journal / editorial
  journalA:      u('1565193566173-7a0ee3dbe261', 900),
  journalB:      u('1615529182904-14819c35db37', 900),
  journalC:      u('1551772804-b90f4b4ff9de',    900),
  journalD:      u('1493809842364-78817add7ffb', 900),
  journalE:      u('1610701596007-11502861dcfa', 900),
  journalF:      u('1578749556568-bc2c40e68b61', 900),
  journalFeature:u('1493106641515-6b5631de4bb9', 1400),

  // Team portraits (studio-style)
  potter1:       u('1580489944761-15a19d654956', 600),
  potter2:       u('1580618672591-eb180b1a973f', 600),
  potter3:       u('1594744803329-e58b31de8bf5', 600),

  // Manifesto / about accents
  manifesto:     u('1543050983-89b0dd0568ab', 1000),
  aboutTexture:  u('1560421683-6856ea585c78', 900),
}

export default IMG
