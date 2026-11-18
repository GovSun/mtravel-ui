const n=`/* Center (Figma 45:105). Padding 4 (spacing/xs) top and bottom; a line of a two-line Center is a 20 px band (→ 48);
   the single title line (Title 17 / Title 15) is a 24 px band (→ 32); the skeleton keeps 20 (→ 28). */
.root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  padding: var(--spacing-xs) 0;
}
.root[data-variant='title'] {
  gap: var(--spacing-xs);
}
.line {
  display: flex;
  align-items: center;
  min-width: 0;
  min-height: 20px; /* no token: Figma 1177:4846 — the band height */
}
.root[data-variant='title']:not([data-skeleton]) .line {
  min-height: 24px; /* no token: Figma 45:105 Type=Title 17 / Title 15, the «Title» frame min height 24 */
}
.title,
.subtitle,
.label {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title {
  font: var(--font-im-16-m);
  letter-spacing: var(--tracking-im-16-m);
  color: var(--control-text-default);
}
.subtitle {
  font: var(--font-im-14-r);
  letter-spacing: var(--tracking-im-14-r);
  color: var(--control-text-tertiary);
}
.label {
  font: var(--font-im-14-r);
  letter-spacing: var(--tracking-im-14-r);
  color: var(--control-text-secondary);
}
`;export{n as c};
