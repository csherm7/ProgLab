# Prog Lab ↯

Random chord progression generator. Post-punk edition.

**Live site:** `https://csherm7.github.io/proglab/`

## Features

- 6 vibes: Post-Punk · Blues · Anthemic · Shoegaze · Jazz · Dark
- 30+ named progressions, random key every time
- Guitar chord diagram for each chord (power chords in post-punk mode)
- Piano roll diagram for each chord
- Scale tone strip
- **▶ Play button** — loops the progression using Web Audio API
- **Synth / Piano toggle** — switch between:
  - *Synth*: detuned sawtooth + triangle + sub oscillators
  - *Piano*: inharmonic overtone decay with hammer transient (no samples — pure synthesis)
- **BPM slider** — 40–200 BPM, updates live mid-playback
- **Export MIDI** — downloads a `.mid` at the current BPM
- **Copy progression** — plain text e.g. `Am – G – F – G`
- Spacebar = generate
- Works offline (PWA — installable on phone/desktop)

## Deploy to GitHub Pages

1. Create repo `prog-lab`
2. Upload `index.html`, `manifest.json`, `sw.js`
3. Settings → Pages → Deploy from `main` / root
4. Live at `https://csherm7.github.io/proglab/`

## Icons (optional)

Add `icon-192.png` and `icon-512.png` to the root for a proper PWA icon.  
Generate them at [favicon.io](https://favicon.io).

## Local dev

```bash
npx serve .
# or
python3 -m http.server 8080
```
