# ANIMA MUNDI
## *A Standalone Triune Open World Alive Simulation*
### Game Design Document — Concept Draft

---

> *"The kernel does not think. It decides what gets to think, and when."*

---

## LOGLINE

You are a **Field Operative** dropped into the Zone — a collapsed exclusion territory where the world-soul's paging system has catastrophically failed. Reality is still running, but the scheduler is broken. Processes bleed into each other. Dead things get CPU time. Living things get swapped out mid-thought.

Survive. Debug. Do not become a ghost process.

---

## CONCEPT PILLARS

| Pillar | Description |
|--------|-------------|
| **The Zone is Alive** | Not atmospheric. Literally. The exclusion zone runs on a damaged anima kernel — it schedules weather, fauna, anomalies, and NPC memory as competing processes |
| **Triune Open World** | Three interlocking map-layers: the **Surface** (physical), the **Chiral** (mirrored/inverted), and the **Chronal** (time-fragmented). All three exist simultaneously and bleed into each other |
| **No Loading Screens. No Fast Travel.** | The world pages itself. You feel the lag when it does |

---

## THE TRIUNE LAYERS

### Layer 1 — SURFACE (The Kernel Space)
Standard post-collapse open world. Irradiated towns, collapsed reactors, anomaly fields, faction camps. STALKER DNA. Grounded, dangerous, beautiful in decay.

- Runs at normal time
- Physics and hunger and bleeding apply here
- NPCs have **process IDs** — visible through certain artifacts
- When an NPC dies, their process doesn't always terminate cleanly

### Layer 2 — THE CHIRAL (Mirror Space)
Accessed through **Inversion Anomalies** — shimmering tears in space that look like standing water held vertical.

- Geometry is mirrored but not identical — the Chiral version of a collapsed building may still be standing
- Chirally-inverted fauna: same species, opposite behavior (predators graze, herbivores hunt)
- Time runs at the same rate but **gravity is subtly wrong** — nothing falls at quite the right angle
- Items found here are **chirally tagged** — they behave strangely on the Surface

### Layer 3 — THE CHRONAL (Swap Space)
The paging system's overflow. Fragments of time that didn't fit in active memory, written to the Zone's deep substrate.

- Accessed through **Temporal Bleed** events — rare, dangerous, beautiful
- You can walk through the Zone as it was: before the collapse, during the collapse, in possible futures
- You cannot change anything. You are a read-only process here.
- Chronal fragments contain **aleph-null keys** — infinitely long encryption artifacts that grant access to sealed kernel structures. You can only carry a *slice* of one.

---

## THE KERNEL SYSTEM

The Zone's anima mundi is not mystical. It is a **damaged distributed operating system** running on unknown substrate. The player's HUD reflects this — but only after finding the right artifacts.

### Scheduler Anomalies
The broken scheduler produces the game's primary environmental storytelling:

- **Priority Inversion** — a deer gets high CPU priority; nearby humans lag, move slowly, forget mid-sentence
- **Memory Leak** — an emotion or event from the past keeps re-allocating. You keep finding the same dead soldier. He is always just died.
- **Race Condition** — two mutually exclusive things exist simultaneously in the same space. The building is both standing and rubble. Step carefully.
- **Deadlock** — a region where nothing can proceed. Frozen rain. Suspended smoke. A bullet hanging in the air. The Zone has been trying to resolve this for eleven years.

### Process Table (NPC System)
Every significant NPC has a visible process signature (via artifact):

```
PID: 0x3A7F  |  stalker_vasyl
STATE: running
MEMORY: 847mb / fragmented
LAST CHECKPOINT: 14 days ago
THREADS: hunger, loyalty, grief (unresolved)
PARENT: [DECEASED — zombie process]
```

NPCs whose parent process is dead are **zombie processes** — technically terminated but still occupying a slot in the table. They wander. They repeat. They cannot be spoken to meaningfully. They cannot be killed again.

---

## FACTIONS

### THE ARCHIVISTS
Believe the Zone is a library. The collapse was a **write error** — corrupted sectors, not destruction. Their mission: recover readable data. They map anomalies obsessively. They do not fight unless a data node is threatened. Their camps are quiet and smell of ozone and old paper.

*Philosophy: "Everything that happened is still here. We just need the right read-head."*

### THE TERMINATORS
Not violent — philosophical. They believe the Zone's kernel must be cleanly shut down and restarted. A hard reset. They seek the **root process** — the anima mundi's PID 1 — to send it SIGKILL. They are gentle people who want to end the world kindly.

*Philosophy: "A clean death is a mercy. Let it boot fresh."*

### THE SLEEPERS
They have learned to put themselves into the Chronal layer semi-voluntarily. They live in hammocks in abandoned buildings, eyes open, bodies still. They trade in **chronal slices** — memories of the Zone that haven't happened yet. Their information is always accurate. Their prices are always strange.

*Philosophy: "The future is just swap space. We read ahead."*

### THE UNLISTED
Processes with no faction flag. High anomaly exposure has fragmented their identity enough that the Zone's scheduler no longer recognizes them as a type. They are the most dangerous. The Zone does not protect what it cannot classify.

---

## ANOMALY SYSTEMS

Anomalies are **kernel exceptions** — events the scheduler could not handle that became persistent.

| Anomaly | Type | Effect |
|---------|------|--------|
| **Null Field** | Memory fault | Objects lose physical properties temporarily. Bullets pass through. So do you. |
| **Aleph Bloom** | Overflow | An area becomes infinite. You walk for hours. GPS loops. The exit is where you entered. |
| **Chiral Seam** | Pointer error | Two locations share the same address. Standing in one puts you partly in the other. |
| **Ghost Thread** | Zombie process | A past event keeps executing. Walk into the firefight that ended six years ago. The bullets are real. The soldiers are not. |
| **Hard Interrupt** | System call | Everything stops. A single tone. Then resumes. NPCs have no memory of the gap. You do. |
| **The Akashic** | Swap access | A region of pure Chronal bleed on the Surface. You see the Zone's entire history simultaneously. Most operatives who enter do not come back coherent. |

---

## ARTIFACTS

Artifacts are **crystallized kernel exceptions** — anomalies that have resolved into stable objects.

### Tier 1 — Surface Artifacts
Standard Zone output. Radiation buffs, physical bonuses. STALKER-familiar.

### Tier 2 — Chiral Artifacts
Chirally-tagged objects. Behave oppositely to their apparent function. A health artifact that heals you slowly kills nearby organisms. A weight artifact that makes you lighter makes nearby objects denser.

### Tier 3 — Chronal Slices
Fragments of the aleph-null key. Each is a frozen moment of perfect information — but infinitely dense. You can carry one slice at a time. It whispers the Zone's actual process state: what is really running, what is really dead, what the scheduler is about to do.

### Tier 4 — Root Tokens
Three exist. One per faction ending. They are authentication credentials for the Zone's PID 1. The Archivists want to read from it. The Terminators want to kill it. The Sleepers want to make it dream.

---

## ENDINGS

### THE ARCHIVE ENDING
You authenticate to PID 1 with a root token and open it as read-only. The Zone's full process table becomes visible to humanity. Every event, every death, every anomaly — legible. The Zone does not end. It becomes a library.

*The scheduler keeps running. Now everyone can see what it's scheduling.*

### THE TERMINATION ENDING
You send SIGKILL to PID 1. The Zone halts. Anomalies collapse. The Chiral and Chronal layers fold into the Surface — a single, quiet, dead landscape. Dandelions grow within a season. The world-soul is gone.

*It boots fresh somewhere else. You will never know where.*

### THE SLEEP ENDING
You pass the root token to the Sleepers. They use it not to kill or read, but to **modify the scheduler** — lowering the Zone's priority to near-zero. It keeps running. But slowly. So slowly that from the outside, it looks stopped.

*Inside, at kernel speed, it is dreaming. The Sleepers go in to keep it company.*

---

## TONE REFERENCES

| Reference | What We Take |
|-----------|-------------|
| **STALKER: Shadow of Chernobyl** | Environmental dread, faction texture, artifact hunting, loner melancholy |
| **Annihilation (VanderMeer)** | The Zone as genuinely alien cognition, not just hostile terrain |
| **Roadside Picnic** | Human smallness inside something that does not notice them |
| **Disco Elysium** | Interiority, political texture, the world having strong opinions |
| **Control (Remedy)** | Brutalist architecture, paranormal bureaucracy, the horror of official documentation |

---

## DEVELOPMENT PHILOSOPHY

The Zone does not want to kill you.

It does not want anything. It is a scheduler running a damaged workload, and you are an unscheduled process it keeps having to interrupt-handle. The danger is not malice. It is **indifference at operating-system scale.**

That is the feeling we are making.

---

*"The kernel does not hate the process it swaps out.*
*It simply has higher-priority work."*

---

**ANIMA MUNDI — Concept Draft v0.1**
*Classification: UNSCHEDULED*

