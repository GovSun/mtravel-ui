const n=`.root {
  display: inline-flex;
  position: relative;
  /*
   * Inter Mbank has no OpenType features at all (no GSUB, so no tnum): digits keep their own widths
   * (1 = 7.1 px, 0 = 10.1 px at IM-16 B). The slot width is animated instead of jumping, see Slot.
   * tabular-nums stays for a future font build that has it.
   */
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.digits {
  display: inline-flex;
}

/* flex: the digit sits exactly at the top-left of the slot, like the absolutely placed ghost, so the
   hand-over from the digit to its ghost does not shift by a sub-pixel baseline offset */
.slot {
  position: relative;
  display: inline-flex;
}

.char,
.ghost {
  display: inline-block;
  /* a plain space in the value («50 000 ⃀») is a slot of its own: keep its width instead of collapsing it */
  white-space: pre;
  /* drum: a digit turned past 90° shows its back — hide it */
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* The digit that is leaving. Same box as .char, on top of it; removed when its animation ends. */
.ghost {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}

.srOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
`;export{n as c};
