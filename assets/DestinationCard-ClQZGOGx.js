import{j as n}from"./iframe-DuqTOznb.js";import{u as s,M as a,C as i,a as d}from"./blocks-CaaIEU4k.js";import{S as l,P as o,V as c,C as h,a as x}from"./DestinationCard.stories-CYQITaiR.js";import{M as p,U as m}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./Caption-C6jupY-b.js";import"./figma-BZstJmpc.js";import"./FullWidthFrame-C5uG5fym.js";import"./photos-Cw5k0SX3.js";import"./stack-ala-archa-CZCiGT1X.js";import"./stack-kel-tor-CWBtKByR.js";import"./SectionHeading-C6jU3Co2.js";import"./cx-2dOUpm6k.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./Skeleton-D5GPHumj.js";import"./mergeRefs-BPT53vMC.js";import"./motion-C-Q-avtg.js";import"./AllTile-DBXxEKhx.js";import"./IconButton-BxMc4E4A.js";import"./arrows-C0H-naDa.js";import"./Svg-B1-TtxWQ.js";import"./tokens-INIU3VNa.js";const j=`/*
 * DestinationCard (Figma destination_card 883:4302). Photo tile, radius 20 (no token: radius/lg is 16, radius/xl 24),
 * a dark gradient under the text, text/inverse on it: control/text/inverse, control/text/inverse-secondary.
 * Country 132 × 164: title IM-14 B, subtitle IM-12 R, flag 24 × 18. City 172 × 220: title IM-16 SB, subtitle IM-14 M, flag 24 × 24.
 */
.root {
  --_w: 172px;
  --_h: 220px;
  --_press-in: calc(var(--destination-card-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--destination-card-motion-press-out-duration) * var(--motion-scale));

  position: relative;
  display: block;
  flex: none;
  box-sizing: border-box;
  width: var(--_w);
  height: var(--_h);
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: 20px;
  background-color: var(--color-bg-sunken-strong);
  color: var(--control-text-inverse);
  font: inherit;
  text-align: left;
  text-decoration: none;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
  isolation: isolate;
  transition:
    transform var(--_press-out) var(--destination-card-motion-press-easing),
    opacity var(--_press-out) var(--destination-card-motion-press-easing);
}
.root[data-variant='country'] {
  --_w: 132px;
  --_h: 164px;
}
.root[data-interactive] {
  cursor: pointer;
}
.root[data-pressed] {
  transform: scale(var(--destination-card-motion-press-scale));
  transition-duration: var(--_press-in), var(--_press-in);
}
.root:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .root[data-pressed] {
    transform: none;
    opacity: var(--destination-card-motion-press-reduced-opacity);
  }
}
:global(:root[data-motion='reduce']) .root[data-pressed] {
  transform: none;
  opacity: var(--destination-card-motion-press-reduced-opacity);
}

.img {
  position: absolute;
  inset: 0;
  z-index: -2;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.shade {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(to bottom, rgb(0 0 0 / 0) 0%, rgb(0 0 0 / 0.5) 64%, rgb(0 0 0 / 0.9) 100%); /* no token: Figma 883:4304 */
}

.flag {
  position: absolute;
  top: 11px;
  left: var(--spacing-sm);
  display: block;
  width: 24px;
  height: 18px;
  overflow: hidden;
  border-radius: 2px; /* no token: Figma flag 4:3 radius 2 */
}
.root[data-variant='city'] .flag {
  top: var(--spacing-md);
  left: var(--spacing-md);
  height: 24px;
  border-radius: 7.2px; /* no token: Figma flag 1:1 radius 7.2 */
}
.flag > * {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  box-sizing: border-box;
  padding: var(--spacing-lg) var(--spacing-md);
}
.root[data-variant='city'] .text {
  padding: var(--spacing-lg);
}
.title {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font: var(--font-im-14-b);
  letter-spacing: var(--tracking-im-14-b);
}
.root[data-variant='city'] .title {
  font: var(--font-im-16-sb);
  letter-spacing: var(--tracking-im-16-sb);
}
.subtitle {
  display: block;
  overflow: hidden;
  color: var(--control-text-inverse-secondary);
  white-space: nowrap;
  text-overflow: ellipsis;
  font: var(--font-im-12-r);
  letter-spacing: var(--tracking-im-12-r);
}
.root[data-variant='city'] .subtitle {
  font: var(--font-im-14-m);
  letter-spacing: var(--tracking-im-14-m);
}

/* Variant=All: the same frame, no photo */
.tile.tile {
  width: 132px;
  height: 164px;
}
.tile.tile[data-variant='city'] {
  width: 172px;
  height: 220px;
}
.root[data-skeleton] {
  cursor: default;
}
`;function r(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:l}),`
`,n.jsx(t.h1,{id:"destinationcard",children:"DestinationCard"}),`
`,n.jsx(t.p,{children:"Страна или город в горизонтальном ряду: фото, название внизу, флаг сверху. У страны под названием число экскурсий, у города — «от» и минимальная цена."}),`
`,n.jsxs(t.p,{children:["Figma: ",n.jsx(t.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=883-4302",rel:"nofollow",children:"destination_card 883:4302"}),": Type Country | City × Variant Default | All × Skeleton. В коде Type — ",n.jsx(t.code,{children:"variant"})," (",n.jsx(t.code,{children:"country"}),", ",n.jsx(t.code,{children:"city"}),"), Variant=All — булево ",n.jsx(t.code,{children:"all"}),", Skeleton — ",n.jsx(t.code,{children:"skeleton"}),"."]}),`
`,n.jsx(i,{of:o}),`
`,n.jsx(d,{of:o}),`
`,n.jsx(t.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { DestinationCard } from '@mtravel/ui';

<DestinationCard variant="city" title="Бишкек" subtitle="от 1 475 ⃀" image={photo} flag={<img src={flagKg} alt="" />} href="/cities/bishkek" />
<DestinationCard variant="country" all onClick={openCountries} />
<DestinationCard variant="city" skeleton />
`})}),`
`,n.jsxs(t.p,{children:["Вся карточка — ссылка (",n.jsx(t.code,{children:"href"}),", ",n.jsx(t.code,{children:"target"}),", ",n.jsx(t.code,{children:"rel"}),") или кнопка (",n.jsx(t.code,{children:"onClick"}),"): один пункт для клавиатуры. ",n.jsx(t.code,{children:"onClick"})," получает настоящее событие, поэтому роутер может вызвать ",n.jsx(t.code,{children:"preventDefault"}),". ",n.jsx(t.code,{children:"ref"}),", ",n.jsx(t.code,{children:"className"}),", ",n.jsx(t.code,{children:"style"})," и остальные атрибуты (в том числе обработчики указателя) уходят на корень; свои ",n.jsx(t.code,{children:"onPointerDown"})," и другие не перезаписываются нажатием. Флаг — любой элемент, который заполняет свою рамку; рамку (24 × 18 у страны, 24 × 24 у города) и скругление задаёт карточка."]}),`
`,n.jsx(t.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(i,{of:c}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:n.jsx(t.code,{children:"variant"})}),n.jsx(t.th,{children:"Размер"}),n.jsx(t.th,{children:"Название"}),n.jsx(t.th,{children:"Подпись"}),n.jsx(t.th,{children:"Флаг"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Country"}),n.jsx(t.td,{children:"132 × 164"}),n.jsx(t.td,{children:"IM-14 B"}),n.jsxs(t.td,{children:["IM-12 R, ",n.jsx(t.code,{children:"control/text/inverse-secondary"})]}),n.jsx(t.td,{children:"24 × 18, радиус 2"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"City"}),n.jsx(t.td,{children:"172 × 220"}),n.jsx(t.td,{children:"IM-16 SB"}),n.jsxs(t.td,{children:["IM-14 M, ",n.jsx(t.code,{children:"control/text/inverse-secondary"})]}),n.jsx(t.td,{children:"24 × 24, радиус 7.2"})]})]})]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.code,{children:"all"})," — стрелка 40 × 40 и «Показать все»; в Figma он есть только у Country, у City тот же шаблон по размеру карточки. ",n.jsx(t.code,{children:"skeleton"})," — блок размера карточки внутри ",n.jsx(t.code,{children:"SkeletonGroup"})," (",n.jsx(t.code,{children:'role="status"'}),", «Загрузка»)."]}),`
`,n.jsxs(t.p,{children:["У фото с ",n.jsx(t.code,{children:"imageSrcSet"})," задавайте ",n.jsx(t.code,{children:"imageSizes"}),"; по умолчанию это реальная ширина карточки (132 или 172 px), поэтому браузер не берёт самый большой файл. Фото лежит в рамке фиксированного размера, сдвига вёрстки при загрузке нет; первые карточки экрана можно пометить ",n.jsx(t.code,{children:"priority"}),"."]}),`
`,n.jsx(t.h2,{id:"нажатие-и-анимация",children:"Нажатие и анимация"}),`
`,n.jsx(t.p,{children:"Карточка слегка уходит вглубь (0.97) на касание и возвращается за 240 мс. В Reduced motion она вместо этого чуть бледнеет."}),`
`,n.jsx(p,{prefix:"--destination-card-"}),`
`,n.jsx(t.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(t.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsx(t.li,{children:"Радиус 20, радиусы флагов 2 и 7.2."}),`
`,n.jsx(t.li,{children:"Градиент под текстом: чёрный 0 → 50 % (на 64 %) → 90 %."}),`
`]}),`
`,n.jsx(m,{css:j}),`
`,n.jsx(t.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsx(t.li,{children:"Фото декоративное, название и подпись — текст внутри ссылки."}),`
`,n.jsx(t.li,{children:"Белый текст лежит на градиенте до 90 % чёрного, внизу фон почти чёрный; контраст зависит от фото, замера по каждому нет."}),`
`,n.jsx(t.li,{children:"Плитка «Показать все»: настоящая кнопка со стрелкой и именем «Показать все»; тап по подписи делает то же самое через невидимую цель под стрелкой (её нет в порядке Tab и для скринридера)."}),`
`]})]})}function G(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{G as default};
