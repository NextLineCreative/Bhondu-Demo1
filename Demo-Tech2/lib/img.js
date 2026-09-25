// Centralized Unsplash URLs — curated to match the warm terracotta / rustic
// / minimal pottery aesthetic shown in the reference images.
// Photos chosen for: warm clay tones, rustic finishes, minimal shelf
// compositions, wall arrangements, and patterned wares.
const u = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`

export const IMG = {
  // ============= Hero / editorial (large warm terracotta) =============
  heroPot:        u('1611791484670-ce19b801d192', 1600),
  heroAlt:        u('1610701596007-11502861dcfa', 1600),
  heroShelf:      u('1583407723467-9b2d22504831', 1600), // minimal terracotta shelf
  heroCollection: u('1493806717525-c33d9d74a1b8', 1600), // pottery collection

  studioHero:     u('1565193566173-7a0ee3dbe261', 1400),
  studioSet:      u('1493806717525-c33d9d74a1b8', 1400),
  studioDetail:   u('1493106641515-6b5631de4bb9', 1200),
  door:           u('1519710164239-da123dc03ef4', 1200),
  workshop:       u('1591741535018-d042766c62eb', 1200),

  // ============= Process =============
  clayRaw:        u('1551772804-b90f4b4ff9de',    900),
  shaping:        u('1565193566173-7a0ee3dbe261', 900),
  firing:         u('1615529182904-14819c35db37', 900),
  finishing:      u('1560421683-6856ea585c78',    900),

  // ============= Clay mugs & cups =============
  mug1:           u('1544787219-7f47ccb76574',    800),
  mug2:           u('1493809842364-78817add7ffb', 800),
  mug3:           u('1516214104703-d870798883c5', 800),
  mug4:           u('1509042239860-f550ce710b93', 800),
  cup1:           u('1571167530149-c72d2fa5c59a', 800),
  cup2:           u('1497935586351-b67a49e012bf', 800),
  cup3:           u('1481277542470-605612bd2d61', 800),

  // ============= Clay bowls =============
  bowl1:          u('1578749556568-bc2c40e68b61', 800),
  bowl2:          u('1584589167171-541ce45f1eea', 800),
  bowl3:          u('1618354691373-d851c5c3a990', 800),
  bowl4:          u('1592078615290-033ee584e267', 800),

  // ============= Clay plates =============
  plate1:         u('1567459045823-6c95d0fbd6e2', 800),
  plate2:         u('1607452579050-a12dfebfdf1f', 800),
  plate3:         u('1550966871-3ed3cdb5ed0c',    800),
  plate4:         u('1584589167171-541ce45f1eea', 800),

  // ============= Clay vases (minimal terracotta) =============
  vase1:          u('1578500494198-246f612d3b3d', 800),
  vase2:          u('1602523498326-7d8a2c9b0da2', 800),
  vase3:          u('1533377088493-7f9a70c02d5b', 800),
  vase4:          u('1567016436606-a4d2e75d9db4', 800),
  vase5:          u('1602523498326-7d8a2c9b0da2', 800),
  jug1:           u('1610701596061-2ecf227e85b2', 800),
  jug2:           u('1611930022073-b7a4ba5fcccd', 800),

  // ============= Clay pots & planters =============
  pot1:           u('1610701596007-11502861dcfa', 800),
  pot2:           u('1611791484670-ce19b801d192', 800),
  pot3:           u('1544441893-675973e31985',    800),
  pot4:           u('1502672260266-1c1ef2d93688', 800),
  planter1:       u('1485955900006-10f4d324d411', 800),
  planter2:       u('1602046943608-0d33d67fe814', 800),
  planter3:       u('1459411552884-841db9b3cc2a', 800),
  planter4:       u('1591958911259-bee2173bdccc', 800),

  // ============= Clay decor / styled =============
  decor1:         u('1493806717525-c33d9d74a1b8', 800),
  decor2:         u('1560421683-6856ea585c78',    800),
  decor3:         u('1519710164239-da123dc03ef4', 800),
  decor4:         u('1602752250015-52934bc45613', 800),
  decor5:         u('1567016436606-a4d2e75d9db4', 800),
  shelfStyle:     u('1583407723467-9b2d22504831', 1000),
  wallArr:        u('1611930022073-b7a4ba5fcccd', 1000),

  // ============= Journal / editorial =============
  journalA:       u('1565193566173-7a0ee3dbe261', 900),
  journalB:       u('1615529182904-14819c35db37', 900),
  journalC:       u('1551772804-b90f4b4ff9de',    900),
  journalD:       u('1544787219-7f47ccb76574',    900),
  journalE:       u('1610701596007-11502861dcfa', 900),
  journalF:       u('1578749556568-bc2c40e68b61', 900),
  journalFeature: u('1493106641515-6b5631de4bb9', 1400),

  // ============= Team portraits =============
  potter1:        u('1580489944761-15a19d654956', 700),
  potter2:        u('1580618672591-eb180b1a973f', 700),
  potter3:        u('1594744803329-e58b31de8bf5', 700),

  // ============= Manifesto / accents =============
  manifesto:      u('1543050983-89b0dd0568ab', 1000),
  aboutTexture:   u('1560421683-6856ea585c78', 900),
}

export default IMG
