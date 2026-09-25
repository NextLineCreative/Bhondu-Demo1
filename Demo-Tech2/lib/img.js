// Centralized Unsplash URLs — curated for CLAY POTS, PLATES, CUPS, MUGS,
// BOWLS, VASES, PLANTERS and CLAY DECOR (things made with clay).
// If any URL fails on your host, swap it here and every page updates.
const u = (id, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMG = {
  // ============= Hero / editorial =============
  heroPot:        u('1611791484670-ce19b801d192', 1400), // big rustic terracotta pot
  heroAlt:        u('1610701596007-11502861dcfa', 1400), // earthen vessel closeup
  studioHero:     u('1565193566173-7a0ee3dbe261', 1400), // potter's wheel
  studioSet:      u('1493806717525-c33d9d74a1b8', 1400), // ceramic set, tabletop
  studioDetail:   u('1493106641515-6b5631de4bb9', 1200), // studio detail
  door:           u('1519710164239-da123dc03ef4', 1200), // rustic doorway
  workshop:       u('1591741535018-d042766c62eb', 1200), // hands throwing clay
  wheel:          u('1573742011003-8f47c5a1d1ed', 1200), // pottery wheel

  // ============= Process =============
  clayRaw:        u('1551772804-b90f4b4ff9de',    900),  // raw clay in hands
  shaping:        u('1565193566173-7a0ee3dbe261', 900),  // shaping on wheel
  firing:         u('1615529182904-14819c35db37', 900),  // kiln / fire
  finishing:      u('1560421683-6856ea585c78',    900),  // finished ceramic piece

  // ============= Clay mugs & cups =============
  mug1:           u('1544787219-7f47ccb76574',    700),  // rustic clay mug
  mug2:           u('1493809842364-78817add7ffb', 700),  // ceramic coffee mug
  mug3:           u('1516214104703-d870798883c5', 700),  // handmade mug
  mug4:           u('1509042239860-f550ce710b93', 700),  // clay mug closeup
  cup1:           u('1571167530149-c72d2fa5c59a', 700),  // stoneware cup
  cup2:           u('1497935586351-b67a49e012bf', 700),  // espresso cup
  cup3:           u('1481277542470-605612bd2d61', 700),  // ceramic cup on saucer

  // ============= Clay bowls =============
  bowl1:          u('1578749556568-bc2c40e68b61', 700),  // handmade bowl
  bowl2:          u('1584589167171-541ce45f1eea', 700),  // ridged clay bowl
  bowl3:          u('1618354691373-d851c5c3a990', 700),  // ceramic bowl set
  bowl4:          u('1592078615290-033ee584e267', 700),  // rustic bowl

  // ============= Clay plates =============
  plate1:         u('1567459045823-6c95d0fbd6e2', 700),  // ceramic plate
  plate2:         u('1607452579050-a12dfebfdf1f', 700),  // handmade plate
  plate3:         u('1550966871-3ed3cdb5ed0c',    700),  // dinner plate
  plate4:         u('1584589167171-541ce45f1eea', 700),  // rustic plate

  // ============= Clay vases =============
  vase1:          u('1578500494198-246f612d3b3d', 700),  // ceramic vase
  vase2:          u('1602523498326-7d8a2c9b0da2', 700),  // small vase
  vase3:          u('1533377088493-7f9a70c02d5b', 700),  // decorative vase
  vase4:          u('1567016436606-a4d2e75d9db4', 700),  // slim vase
  jug1:           u('1610701596061-2ecf227e85b2', 700),  // ceramic jug set
  jug2:           u('1611930022073-b7a4ba5fcccd', 700),  // clay jug

  // ============= Clay pots & planters =============
  pot1:           u('1610701596007-11502861dcfa', 700),  // clay pot
  pot2:           u('1611791484670-ce19b801d192', 700),  // rustic pot
  pot3:           u('1544441893-675973e31985',    700),  // terracotta pot
  pot4:           u('1502672260266-1c1ef2d93688', 700),  // storage pot
  planter1:       u('1485955900006-10f4d324d411', 700),  // planter
  planter2:       u('1602046943608-0d33d67fe814', 700),  // terracotta planter
  planter3:       u('1459411552884-841db9b3cc2a', 700),  // ceramic planter with plant
  planter4:       u('1591958911259-bee2173bdccc', 700),  // clay planter

  // ============= Clay decor =============
  decor1:         u('1493806717525-c33d9d74a1b8', 700),  // ceramic tabletop styling
  decor2:         u('1560421683-6856ea585c78',    700),  // ceramic detail
  decor3:         u('1519710164239-da123dc03ef4', 700),  // rustic shelf styling
  decor4:         u('1602752250015-52934bc45613', 700),  // incense holder
  decor5:         u('1567016436606-a4d2e75d9db4', 700),  // small ceramic object

  // ============= Journal / editorial =============
  journalA:       u('1565193566173-7a0ee3dbe261', 900),
  journalB:       u('1615529182904-14819c35db37', 900),
  journalC:       u('1551772804-b90f4b4ff9de',    900),
  journalD:       u('1544787219-7f47ccb76574',    900),
  journalE:       u('1610701596007-11502861dcfa', 900),
  journalF:       u('1578749556568-bc2c40e68b61', 900),
  journalFeature: u('1493106641515-6b5631de4bb9', 1400),

  // ============= Team portraits =============
  potter1:        u('1580489944761-15a19d654956', 600),
  potter2:        u('1580618672591-eb180b1a973f', 600),
  potter3:        u('1594744803329-e58b31de8bf5', 600),

  // ============= Manifesto / accents =============
  manifesto:      u('1543050983-89b0dd0568ab', 1000),
  aboutTexture:   u('1560421683-6856ea585c78',   900),
}

export default IMG
