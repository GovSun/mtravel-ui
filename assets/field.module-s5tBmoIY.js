const n=`/*
 * Shared internals of three separate DS components — Field, Select and Search (Figma page Inputs 1:15): the grey box,
 * the 36 px side slots, the native input, the clear × and the hint / error row. Not a component of its own.
 *
 * Each component routes its own tokens here through private vars on its root:
 *   --_h height · --_pr right padding · --_bg / --_icon / --_text colours · --_shadow inner shadow · --_placeholder · --_state / --_state-ease colour change
 *   --_clear-in / --_clear-out / --_clear-ease / --_clear-from the ×
 *   --_hint opening of the hint row · --_hint-pad its padding · --_hint-color its colour
 */

/* the grey box: no border, control/bg/*, radius/lg */
.box {
  position: relative;
  display: flex;
  align-items: center;
  height: var(--_h);
  padding: 0 var(--_pr, var(--spacing-sm)) 0 var(--spacing-sm);
  overflow: hidden;
  border-radius: var(--radius-lg);
  background-color: var(--_bg);
  box-shadow: var(--_shadow, none); /* Field: inner-shadow/inner-input; Select and Search have none */
  color: var(--_text);
  cursor: text;
  -webkit-tap-highlight-color: transparent;
  transition: background-color var(--_state) var(--_state-ease);
}

/* side icons: Figma «Leading icon» 32 × 32 (see SlotIcon); only the colour change is ours */
.slot {
  transition: color var(--_state) var(--_state-ease);
}

/* the native input: real caret, selection, iOS loupe and space-bar trackpad, horizontal scroll of long text */
.input {
  width: 100%;
  min-width: 0;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  outline: none;
  background: transparent;
  color: inherit;
  font: var(--font-im-16-m); /* 16 px: iOS does not zoom the page on focus */
  letter-spacing: var(--tracking-im-16-m);
  text-overflow: ellipsis; /* long text ends with … at rest; while editing it scrolls */
  caret-color: var(--control-bg-accent);
  -webkit-appearance: none;
  appearance: none;
}
.input::placeholder {
  color: var(--_placeholder, var(--control-text-tertiary));
  opacity: 1;
}
.input:disabled {
  -webkit-text-fill-color: var(--control-text-disabled); /* iOS dims disabled text on its own otherwise */
  opacity: 1;
}
/* keep the field colour when the browser autofills (Chrome/WebKit paint their own background) */
.input:-webkit-autofill {
  -webkit-text-fill-color: var(--_text);
  transition: background-color 600000s 0s;
}
.input::-webkit-search-cancel-button,
.input::-webkit-search-decoration {
  display: none;
  -webkit-appearance: none;
}

/* ---------- clear × (Figma «close» 308:1280: disc icon/inverse/constant/primary + shadow/icon, × icon/secondary) ---------- */
.clear {
  display: grid;
  flex: none;
  place-items: center;
  width: 36px;
  height: 36px;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: var(--control-icon-secondary);
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  visibility: hidden;
  /* hidden: wait until the × has gone, then become invisible to taps and screen readers */
  transition: visibility 0s linear var(--_clear-out);
}
.clear[data-visible] {
  visibility: visible;
  transition-delay: 0s;
}
/* tap area 44 × 44 around the 36 slot (same hit-slop pattern as Appbar, Chips, Toggle) */
.clear::before {
  content: '';
  position: absolute;
  inset: -4px;
}
.clearDisc {
  position: relative;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  opacity: 0;
  /* reduced motion: no growing, only the fade */
  transform: scale(calc(1 - (1 - var(--_clear-from)) * (1 - var(--motion-reduce))));
  transition:
    transform var(--_clear-out) var(--motion-ease-out),
    opacity var(--_clear-out) var(--motion-ease-out);
}
.clearDisc::before {
  content: '';
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  background: var(--control-icon-inverse);
  box-shadow: var(--shadow-icon);
}
.clearDisc > svg {
  position: relative;
}
.clear[data-visible] .clearDisc {
  opacity: 1;
  transform: scale(1);
  transition-duration: var(--_clear-in);
  transition-timing-function: var(--_clear-ease), var(--motion-ease-out);
}
.clear[data-pressed] .clearDisc {
  transform: scale(0.9);
  transition-duration: calc(var(--motion-duration-instant) * var(--motion-scale));
}
.clear:focus-visible .clearDisc {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 0;
  border-radius: 50%;
}

/* ---------- hint / error under the field: height grows from 0 instead of jumping ---------- */
.hintWrap {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition:
    grid-template-rows var(--_hint) var(--motion-ease-out),
    opacity var(--_hint) var(--motion-ease-out);
}
.hintWrap[data-open] {
  grid-template-rows: 1fr;
  opacity: 1;
}
.hintClip {
  min-height: 0;
  overflow: hidden;
}
.hint {
  margin: 0;
  padding: var(--_hint-pad);
  font: var(--font-im-12-r);
  letter-spacing: var(--tracking-im-12-r);
  color: var(--_hint-color, var(--control-text-tertiary));
  overflow-wrap: anywhere;
}

.srOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* reduced motion: no scale on the × press, the hint row opens at once and only fades */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .clear[data-pressed] .clearDisc {
    transform: none;
  }
  :global(:root:not([data-motion='normal'])) .hintWrap {
    transition: opacity var(--_hint) var(--motion-ease-out);
  }
}
:global(:root[data-motion='reduce']) .clear[data-pressed] .clearDisc {
  transform: none;
}
:global(:root[data-motion='reduce']) .hintWrap {
  transition: opacity var(--_hint) var(--motion-ease-out);
}
`;export{n as s};
