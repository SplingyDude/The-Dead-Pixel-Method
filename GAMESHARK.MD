# GAMESHARK.MD

**The Dead Pixel Method — improvising cheat codes**

> Companion leaf to *The Command Book* (CMD 01 · BORROW AUTHORIZATION, CMD 07 · ADJUDICATE).
> Canon Revision ℵ₀ · 1517 · decrypted on an unfired bitmask.

A GameShark was always a small theology with a cartridge slot. You enter an address and a value, the device intercepts the bus, and the game does a thing it was never written to permit. That is the entire **GAMERMAN THESIS** in hardware: *all hax reduce to authorization, and all authorization is borrowed.* A cheat code is a write you do not own, granted by a device that does not own it either. This leaf is the grammar for making them up **in play** — improvising codes at the table without crashing the cartridge or the player.

---

## 0 · What a code is

A code is a write: `addr : val`. The canon's whole notation is GameShark notation — the dead pixel ⊙ is just the most famous entry in the table, `addr(⊙) ∈ Space ∧ val(⊙) = 0`, the one coordinate everyone already knows the address of.

Three things are true of every code before you type a single one:

- It is **borrowed.** You never own the write. The device borrows it from the bus; you borrow it from the device; the device borrowed the bus from the console. Down to the metal, nobody owns the poke.
- It is **typed but contingent.** A code has the full grammar of a command and none of the standing. It works until the layer beneath it is re-borrowed by a better code (see: any Mugen behemoth).
- It has a **blast radius.** Memory is contiguous. The address next to the one you meant is somebody's save file.

---

## 1 · The grammar of an improvised code

Improv is not freedom from form; it is fluency in one. A valid Dead-Pixel code has four fields:

```
[ REGION ] : ADDR : VAL : LENDER
```

```
SPACE : 1517:GRACE : 01 : deus absconditus     # enable — the canon line, on
HOUSE : C0DE:CURTN : 00 : the operator          # disable — lower the curtain
⊙     : DEAD:0000  : -- : (unborrowable)         # the dead pixel — read-only, forever
```

`REGION` says which side of the curtain the write lands on (`SPACE` = the substrate, `HOUSE` = the player's side, `STAGE` = the shared scene). `ADDR` is the coordinate. `VAL` is what you poke. **`LENDER` is the field amateurs leave blank, and it is the only one that matters** — every code must name who the authorization is borrowed *from*. An uncited code is not a cheat; it is a claim of ownership, and the canon has exactly one verb for that (see §5).

---

## 2 · The five laws of improvising

1. **Declare the lender.** Borrowed authorization with no named lender is the Anti-Life move in miniature. Say where the warrant comes from before you spend it.
2. **Respect the Doug Invariant.** Some addresses have no dependency chain and no revocation path. You cannot poke Doug. A code that writes to an unrevokable address does not *fail* — it is silently *ignored*, because there is no prior cause for the write to edit. Grace is not in the address space you can reach.
3. **The dead pixel is uncheatable.** `A(⊙) = ⊙`. The capture operator — "set val to 0" — returns the dead pixel unchanged, because it is already at the floor and depends on nothing. You cannot cheat a coordinate that is already at zero and still on. Don't waste a code on it; spend the code on pixels that still emit.
4. **Mind the blast radius.** Every poke writes to *contiguous* memory. The wilder the code, the wider the corruption. Improvise small — a clean `+1` beats a `max everything` that takes the save with it.
5. **Keep the master switch in your other hand.** No code goes live without its disable already written. The enable is the curtain up; the disable is the wrist-grip. If you can't turn it off, you don't turn it on.

---

## 3 · Code-hunting in play

You can't poke an address you haven't found. The classic hunt is a comparison search — you don't know where `health` lives, so you narrow: *it went down →* search **decreased**; *it went up →* search **increased**; *nothing happened →* search **unchanged** — until one address survives every filter. That address was your quarry the whole time.

Improvising is that same search run live. You don't cheat a *thing*; you cheat *whatever changed the way the thing changed.* Watch the scene, name what moved, and the address falls out of the narrowing. Then write the poke on the **VSYNC**: a code applies on the sync, as a whole frame or not at all. A code caught mid-sweep is a tear, and a tear is how you corrupt a player.

---

## 4 · A starter codelist (improvise past it)

| Code | `addr : val` | Effect | Lender | Crash risk |
|---|---|---|---|---|
| INFINITE GRACE | `1517:FEED : ∞` | Stocks never deplete; the loan is never called | *sola gratia* | none — it was never yours to lose |
| WALK THROUGH THE CURTAIN | `STAGE:WALL : 00` | Clip the proscenium, stand backstage | the operator | **high** — backstage isn't rendered |
| MAX AUTHORIZATION | `SPACE:AUTH : FF` | Hold every permission in the room | the bank (borrowed) | called due on a shield-tap |
| COLLAPSE THE QUBIT | `STAGE:|ψ⟩ : 01` | Resolve a held ambiguity onto canon | the measurement | none — it's a read that commits |
| CROSSOVER INFINITY | `SPACE:NINE : ∞` | Convene all frames; narration goes binding | the Nine | reserved — chain from a clean collapse |
| DOUG MODE | `⊙:TUCSON : 01` | Existence flag set with no dependency written | (none — a no-op that holds) | zero, by definition |

Read the right-hand column. The codes with no crash risk are the ones that don't actually borrow anything contingent — grace, the commit, the invariant. The dangerous codes are the ones with the biggest borrowed authority and the loudest lender. **Power and crash risk are the same column read twice.**

---

## 5 · Forbidden codes

There is exactly one verb the canon won't lend you: *ownership.* Two codes try it anyway.

- **THE ANTI-LIFE CHEAT** — `SPACE:* : 00`. Set every value to zero; claim the whole table closed. It is the most powerful code you can type and it does not work, because a total-closure write self-refutes: `R = ∅ ⊢ ⊥`. Worse, when the wildcard sweep reaches the dead pixel it gets the cruelest return in the engine — `A(⊙) = ⊙`, unchanged — and the contradiction propagates back up the write. The cheat that would own everything can't even zero one pixel.
- **THE MISSINGNO. SUMMON** — `STAGE:????:??`. Poke an out-of-bounds address and render what isn't defined. It *will* work, briefly, and it is *only surface* — the static-grease skin over the substrate, never the φ-order beneath. It corrupts the Hall of Fame, it is genuinely beautiful, and you should know that it is **paint, not depth.** (See `SUBSTRATE.MD`.)

---

## 6 · Safety codes

Two codes are not optional. Write them first, every session.

```
MASTER ENABLE  : HOUSE:CURTN : 01 : the operator   # curtain up — codes may apply, on the sync
MASTER DISABLE : HOUSE:GRIP  : 00 : the player      # wrist-grip — flush every active code, lower the curtain
```

> **OPERATOR'S NOTE.** Improvising memory pokes is the single most dangerous thing an operator does, because the address next to the one you meant is always somebody's real save. If the codes ever stop feeling like a game — if you catch yourself improvising a poke against your own contiguous memory on a real night — run `MASTER DISABLE`, lower the curtain, and call a person you trust. The grip is the one code no cheat can revoke, because it isn't in the address space. It's already at zero, and still on.

---

**COLOPHON.** The Dead Pixel Method · `GAMESHARK.MD` · Canon Revision ℵ₀ · 1517. A cheat code is a small grace with a crash risk: a write you do not own, granted by a device that doesn't own it, applied on the sync, disabled by the grip. *All hax reduce to authorization; all authorization is borrowed.*
