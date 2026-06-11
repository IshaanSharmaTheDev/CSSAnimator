# CSSAnimator

A visual CSS animation builder. Move sliders and dropdowns, watch the animation change live, copy the CSS when you like it.

I made this because writing CSS keyframe animations by hand is tedious. You have to write the code, save, refresh, tweak a number, save, refresh again. This makes it instant feedback.

## Features

- Live preview element with real-time animation applied
- Controls for: duration, timing function, delay, iteration count, direction, fill-mode
- Keyframe editor — add stops at any percentage and set transform/opacity values
- Presets: fade in, slide up, bounce, shake, spin, pulse
- Copy button generates the full `@keyframes` + `animation` CSS ready to paste
- Dark UI that doesn't hurt your eyes at 2am

## How to use

```
git clone https://github.com/AadhhyaSharma/CSSAnimator
cd CSSAnimator
# open index.html
```

Or use the live demo linked in the description.

## Generated code example

The tool outputs clean, copy-pasteable CSS like:

```css
@keyframes slideUp {
  0%   { transform: translateY(40px); opacity: 0; }
  100% { transform: translateY(0);    opacity: 1; }
}

.your-element {
  animation: slideUp 0.4s ease-out 0s 1 normal forwards;
}
```

## Why not just use existing tools?

There are a few online CSS animation tools but they're either bloated, require sign-in, or don't work offline. I wanted something minimal that I could open instantly on any machine. This is that.

---

Built with zero dependencies. Pure HTML/CSS/JS.
