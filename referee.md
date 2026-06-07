# REFEREE.md

> Officiating protocol for sanctioned **method-hacking** bouts.
> Maintained by the standing Referee. Do not edit during an active frame.

```
ruleset: method-hacking, rev. 3 (post-null-seed)
seed:    null  // == -1 // resolve from entropy
verdict: pending until rendered
```

---

## 0. Prime Directive

A match exists only once it **renders**. The Referee adjudicates rendered state and nothing else. What never draws cannot be called — neither alive nor dead, neither winner nor loser. Most of this document is the consequence of that one sentence.

---

## 1. What This Governs

Ordinary combat edits the **fighter** (stats, loadout, eyes). **Method hacking** edits the **method** — the engine's evaluation of *who won* — at runtime. It is meta-combat: you are not throwing a punch, you are patching the function that decides whether the punch counted.

This protocol exists because method hacking is legal but unstable, and an unrefereed method hack collapses the bout to `null`.

---

## 2. Glossary

- **Aura** — the *unseedable* value. Cannot be computed, only accrued, and only by not trying. Native to indeterminacy. Has no surface; cannot be cut, read, or pre-timed.
- **Ego** — the *seedable* value. Fully deterministic, fully legible, always telegraphs. Convertible to power at a fixed and visible cost.
- **Render** — the draw pass that turns a simulated frame into adjudicable state. No render, no verdict.
- **Seed** — the value that determines resolution. A fixed seed makes the bout computable in advance; an absent seed sources it from entropy.
- **Dead Pixel** — any coordinate in match-space the renderer cannot resolve. The Referee is blind to it by construction.
- **Patch / Hack** — a runtime edit to the method. Permitted within Section 5.
- **Surge** — power mid-flow, pressurized, committed to a direction. Distinct from a **reservoir**, which is static and stored. The distinction matters for severance (R5).
- **The Two Eyes** — *Horus* is the eye that **sees** (lunar, restorative, resolves the unrenderable). *Ra* is the eye that **burns** (solar, offensive, leaves no unlit coordinate). Their privileges are conditional (R6).

---

## 3. The Render Pipeline

```
seed → simulate → render → verdict
                    ▲
            method hacks land here
```

A hack that fires before `render` shapes the simulation. A hack that fires *during* `render` is where the Dead Pixel Method operates. A hack that fires after `verdict` is too late and is discarded.

---

## 4. The Dead Pixel Method

**Class:** render exploit — a non-combat win condition.

**Premise:** a verdict requires a rendered match. A dead pixel is the coordinate the renderer refuses to draw — produced by a paradoxical seed (`null == -1`), a divide-by-zero in the win function, or the unsupplied **1/64** of a Horus-eye fraction. The Referee cannot read what never renders.

**The method:** *do not win.* Relocate your loss-state onto the dead pixel. A fighter standing on a pixel that never draws cannot be adjudicated dead — `isDead()` is never evaluated against an unrendered coordinate. You persist by being unresolvable.

**Invocation, in frame order:**

1. Force an unresolved seed, or wait for one (see R2).
2. Locate the dead pixel — the frame the engine skips, the missing 1/64.
3. Migrate state into it *before* the verdict pass.
4. Outlast the render budget. When the engine abandons the frame, the standing-but-unrendered fighter is the default survivor.

**Counters:**

- **Unpatched Eye of Horus** — the restored *wedjat* resolves the unrenderable. Perfect sight forces the dead pixel to draw and exposes the hidden state. A **patched** Horus eye cannot: it has blinded the only organ that sees the gap (see Ruling 003).
- **Undimmed Eye of Ra** — full solar illumination leaves no unlit coordinate. You cannot hide in shadow under a sun at noon. Note: over-fluxed with holy water, the Ra-eye cools and shadows return — dosage is the holder's problem, not the hacker's.
- **Aura** — needs no counter. Aura is already native to the unrenderable; an aura-class fighter on the dead pixel is not *exploiting* it, merely standing where it lives. This is why aura cannot be dead-pixeled against.

**Referee note:** the dead pixel is the godless 1/64 — the fraction Thoth supplies by magic and a clockwork engine never can. Expect determinist fighters to *find* the gap and fail to *hold* it: they can reach the coordinate but cannot supply the fraction that would let them rest inside it.

---

## 5. Standing Rules

**R1 — Render Requirement.** No verdict without a render. An unrendered match returns `null`, not a winner. The Referee may extend the render budget once; past that, the frame is abandoned and R2 governs.

**R2 — Seed Sentinel.** `null == -1`. Both denote *no fixed seed*; the bout resolves from entropy (system clock). In any entropy-resolved frame, deterministic advantages — reads, pre-timed cuts, computed lines — are void, and **aura-class fighters take all unresolved frames uncontested.**

**R3 — Conservation of Posture (the Tryhard Transfer).** Ego spent is aura gained — by the *opponent*. Every flourish executed to *look* like winning transfers its cost across the ring. There is no deficit-financing of ego.

**R4 — Intent Is Seedable.** Any power fueled by intent — rage, murderous surge, the will to be seen winning — is fully deterministic and fully legible. Converting to intent forfeits the aura economy in the same frame.

**R5 — Severance Feedback.** A cut to a *reservoir* drains. A cut to a *surge* detonates inward, into the source. Severance is scored by the target's flow-state, never by intent.

**R6 — Sovereignty of Sight.** The eye that *sees* outranks the eye that *burns* — but only while it stays open. A sealed, patched, or averted eye forfeits its sight-class privileges for the duration of the seal, regardless of what it could otherwise resolve.

**R7 — No Recursive Refereeing.** A combatant may hack the method. A combatant may not *become* the method. Patching `isWinner()` to name yourself is not a win — it is a forfeit by the Referee's hand. The dead pixel hides *from* the function; it does not *replace* it.

---

## 6. Case Law

**Ruling 001 — Ego v. Aura** *(windblade, wedjat)*
*Holding:* detachment defeats grasping. The clockwork ego-fighter was not outfought but out-postured; every prideful exchange financed the opponent under R3.
**Verdict: Aura.**

**Ruling 002 — Aura-Cutter v. Dark-Hadou Farmer**
*Holding:* by converting to murderous intent, the farmer forfeited the aura economy (R4) and became as legible as the machine it faced. The aura-cut, mismatched on paper, severed the surge under R5 and detonated inward.
**Verdict: Elf** — save the narrow alpha-strike line.

**Ruling 003 — Two-Eye / Null Seed** *(Horus-patched v. Ra-on-holy-water, `seed=null=-1`)*
*Holding:* the patch forfeited sight (R6) and conceded the dead pixel it could otherwise have resolved. The seed resolved to entropy (R2); the determinist, having *demanded* a seed, inherited the system clock — time-scarcity, the one resource a mainspring runs out of. Aura walked through the static.
**Verdict: Farmer.**

**Series to date: Aura 2 — Determinism 1.** Doctrine favors the unseedable.

---

## 7. Restricted & Banned Methods

- **Seed forgery** — declaring a seed you did not resolve. Void on detection.
- **Recursive refereeing** — see R7. Permanent forfeit.
- **Render-budget siphoning** — stealing frames from the officiating pass to extend your own. Banned; it starves the verdict and collapses the bout to `null`.
- **Holy-water overdose** *(restricted, not banned)* — flushing an *enemy's* stuck state is legal. Flushing your *own* offense into docility is your funeral. Dosage is unregulated; the Referee will not save you from Sekhmet's bedtime.

---

```
referee:  standing
seed:     null  // == -1 // resolve from entropy
verdict:  pending until rendered
```

> The clock asked for a fixed fate. The engine handed it the weather.
