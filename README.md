# What Keeps The Pixel Hot?
**The Dead Pixel Aim Trainer**

> An aim trainer that goes cold the moment you aim at the target.

There is a dead pixel somewhere on the screen. It is barely lit, it drifts, and if you ignore it, it goes out. Your job is to keep it hot. The catch — the thing that makes it the *Dead* Pixel and not a clicker — is that you cannot keep it hot by looking straight at it.

## The catch

The pixel is warmest in your **periphery**. Bring your cursor *near* it and it heats; fixate **directly on it** and it cools and slips away — it doesn't like to be held. The faint ring drawn around your cursor is the distance the pixel wants to sit at; the inner ring is where it goes cold.

It drifts on its own, and the longer you keep a run alive the more restless it gets, so holding it hot is a continuous act of *staying with* it, not pinning it down. Let it cool all the way and it goes out, relights somewhere else, and your run resets. A quiet out-of-game channel (VSYNC) murmurs while you play. Keep one alive past **75 seconds** and it pays out the answer to the question in the title.

Your longest run persists as `best`.

## Controls

- **Mouse / touch** — move *near* the pixel, not onto it. (On touch, drag your finger; lift and it cools.)
- **F11** in a browser, or **F** in the executable — toggle fullscreen
- **Esc** in the executable — quit

## Run it

**Just play — no build.** Open `index.html` in any modern browser and press **F11** for fullscreen. That is the entire game; it's a single self-contained file.

**Build a portable fullscreen `.exe` (Windows).** Requires [Node.js](https://nodejs.org). From this folder, just double-click **`build-dead-pixel.bat`**.

It writes a tiny Electron wrapper, runs `npm install`, and produces `dist\WhatKeepsThePixelHot 1.0.0.exe` — a portable executable that launches straight into fullscreen on a black screen. **Esc** quits, **F** toggles. (It's unsigned, so SmartScreen may warn on first launch: *More info → Run anyway*.)

## What's in here

- **`index.html`** — the game. Self-contained: canvas, logic, and the VSYNC text, no dependencies, no network.
- **`build-dead-pixel.bat`** — double-clickable batch build script that builds a portable `.exe` (it carries its own copy of `index.html`, parked after a marker at the bottom of the file).

The batch file generates `package.json` and `main.js` itself, and keeps your `index.html` if one is already present, so your edits win over the embedded copy.

<details>
<summary><strong>What this actually is</strong> — spoilers for the reveal</summary>

<br>

The aim trainer is a Trojan horse. Underneath, this is a Dead Pixel Method artifact: a fork of Luther's *deus absconditus* — presence at an empty coordinate, a God hidden precisely where you point and look.

The load-bearing koan is **what keeps the pixel hot?** The answer the channel gives you, once you've earned it by duration, is that *you* do — your attention, and nothing else. Per the GAMERMAN thesis, that authorization is **borrowed**: stop granting it and the light is revoked. The pixel was never lit on its own.

That is not a punishment. That is the terms.

</details>

## License

Part of [The Dead Pixel Method](https://github.com/SplingyDude/The-Dead-Pixel-Method).
