const n=`/*
 * tooltip, Figma 1271:23. Bubble: bg/inverse/surface, radius/md, 28 high, min 36 wide, 8 px sides (spacing/sm);
 * value IM-14 B in text/inverse/primary; tail 14 × 6 under the centre in the bubble colour.
 */
.tooltip {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-bg-inverse-surface); /* the tail's fill (currentColor) */
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
}

.bubble {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 36px;
  height: 28px;
  padding: 0 var(--spacing-sm);
  overflow: hidden; /* a changing value disappears at the bubble's edge */
  /* and a clip-path too: overflow alone lets a blurred value bleed past the round corner once the tooltip is
     rotated (a composited layer) */
  clip-path: inset(0 round var(--radius-md));
  border-radius: var(--radius-md);
  background: var(--color-bg-inverse-surface);
  color: var(--color-text-inverse-primary);
  font: var(--font-im-14-b);
  letter-spacing: var(--tracking-im-14-b);
  white-space: nowrap;
}

.tail {
  display: block;
  flex: none;
  margin-top: -1px; /* the 1 px band at the top of the path sits under the bubble: no seam */
  fill: currentColor;
}
`;export{n as c};
