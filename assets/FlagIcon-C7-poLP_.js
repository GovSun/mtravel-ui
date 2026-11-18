import{j as n}from"./iframe-DuqTOznb.js";import{u as o,M as d,C as r,a as l}from"./blocks-CaaIEU4k.js";import{F as a,P as i,V as c,C as h}from"./FlagIcon.stories-DvRe7_lA.js";import{U as x}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./Caption-C6jupY-b.js";import"./cx-2dOUpm6k.js";import"./Cell-DbWJlVzG.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./LeadingIcon-B28I7Mlv.js";import"./Skeleton-D5GPHumj.js";import"./mergeRefs-BPT53vMC.js";import"./motion-C-Q-avtg.js";import"./general-DYSfllt2.js";import"./Svg-B1-TtxWQ.js";import"./paths-BjPgyxdS.js";import"./PillButton-BwV4GISW.js";import"./arrows-C0H-naDa.js";import"./Counter-6eoXZdLB.js";import"./useControllableState-QyUXWn2y.js";import"./CounterButton-ddQoagoR.js";import"./RollingNumber-BIb_2A9U.js";import"./Toggle-DcBpc41r.js";import"./useInstantAfterKey-D0TlCdRr.js";import"./Checkbox-C1X2mrZB.js";import"./Radio-Bz4AqS0k.js";import"./CellCenter-CXZRRsHl.js";import"./Divider-BbjTiNWY.js";import"./tokens-INIU3VNa.js";const j=`/* flag-icon (Figma 614:10997). Slot 32 or 40; the frame inside is the clipped flag. */
.root {
  --_slot: 32px;
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: var(--_slot);
  height: var(--_slot);
}
.frame {
  position: relative;
  display: block;
  overflow: hidden;
  isolation: isolate;
}
/* 1:1 — the whole slot, radius 30 % (9.6 px at 32, 12 px at 40: Figma flag-clip) */
.root[data-aspect='1:1'] .frame {
  width: var(--_slot);
  height: var(--_slot);
  border-radius: calc(var(--_slot) * 0.3); /* no token: Figma 614:10915 — radius is 30 % of the size, between radius/md 12 and 8 */
}
/* 4:3 — 24 × 18 in the 32 slot, 32 × 24 in the 40 slot, radius 2 */
.root[data-aspect='4:3'] .frame {
  width: calc(var(--_slot) * 0.75);
  height: calc(var(--_slot) * 0.5625);
  border-radius: 2px; /* no token: Figma 614:10893 — radius 2 is below radius/xs (4) */
}
.root[data-aspect='4:3'][data-size='40'] .frame {
  width: 32px;
  height: 24px;
}
.img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  -webkit-user-drag: none;
}
/* Figma overlay-top-down: linear gradient white 70 % → black 30 % top to bottom, blend mode Overlay */
.overlay {
  position: absolute;
  inset: 0;
  mix-blend-mode: overlay;
  background: linear-gradient(to bottom, rgb(255 255 255 / 0.7), rgb(0 0 0 / 0.3)); /* no token: Figma overlay-top-down 614:10981 */
  pointer-events: none;
}
`;function s(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:a}),`
`,n.jsx(e.h1,{id:"flagicon",children:"FlagIcon"}),`
`,n.jsxs(e.p,{children:["Флаг страны в строке списка и в тегах. В DS лежат флаги, которые нужны в продукте: Кыргызстан, Казахстан, Узбекистан. Остальные подключаются через ",n.jsx(e.code,{children:"src"}),"."]}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=614-10997",rel:"nofollow",children:"flag-icon 614:10997"}),": Size 40 | 32 × Aspect ratio 4:3 | 1:1. Картинки флагов из библиотеки «Country Flag Icons» (Detail Medium, 32 × 24)."]}),`
`,n.jsx(r,{of:i}),`
`,n.jsx(l,{of:i}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { FlagIcon } from '@mtravel/ui';

<FlagIcon country="kg" size={40} />
<FlagIcon src={franceUrl} aspect="4:3" label="Франция" />
`})}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(r,{of:c}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Размер"}),n.jsx(e.th,{children:"Скругление"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"32 · 1:1"}),n.jsx(e.td,{children:"32 × 32, флаг обрезан по бокам"}),n.jsx(e.td,{children:"9.6 (30 % стороны)"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"40 · 1:1"}),n.jsx(e.td,{children:"40 × 40"}),n.jsx(e.td,{children:"12"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"32 · 4:3"}),n.jsx(e.td,{children:"24 × 18 по центру 32 × 32"}),n.jsx(e.td,{children:"2"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"40 · 4:3"}),n.jsx(e.td,{children:"32 × 24 по центру 40 × 40"}),n.jsx(e.td,{children:"2"})]})]})]}),`
`,n.jsx(e.p,{children:"Сверху лежит мягкий градиент белый 70 % → чёрный 30 % в режиме Overlay: он придаёт флагу немного объёма (в Figma overlay-top-down)."}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h2,{id:"как-добавить-флаг",children:"Как добавить флаг"}),`
`,n.jsxs(e.p,{children:["Экспортируйте флаг из библиотеки «Country Flag Icons» (Detail Medium) как SVG, положите в ",n.jsx(e.code,{children:"FlagIcon/assets/"})," и добавьте в ",n.jsx(e.code,{children:"FLAG_ASSETS"}),"."]}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"Решение"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Скругление 30 % и 2 px"}),n.jsxs(e.td,{children:["значений нет среди ",n.jsx(e.code,{children:"radius/*"})," (4, 12, 16, 24), оставлены с комментарием"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Градиент overlay-top-down"}),n.jsx(e.td,{children:"цвета заданы напрямую, комментарий в CSS"})]})]})]}),`
`,n.jsx(x,{css:j}),`
`,n.jsx(e.h2,{id:"атрибуты-и-ref",children:"Атрибуты и ref"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"ref"})," и остальные атрибуты (",n.jsx(e.code,{children:"data-*"}),", ",n.jsx(e.code,{children:"id"}),", ",n.jsx(e.code,{children:"aria-*"}),", обработчики) попадают на корневой элемент."]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.p,{children:["Флаг в строке декоративен: страну называет заголовок. Если флаг стоит сам по себе, передайте ",n.jsx(e.code,{children:"label"}),", и он получит ",n.jsx(e.code,{children:'role="img"'}),"."]})]})}function R(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{R as default};
