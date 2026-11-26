import{j as n}from"./iframe-DyD5Yel4.js";import{u as o,M as t,C as r,a as c}from"./blocks-CcI75u3-.js";import{L as l,P as d,V as a,S as h,C as x}from"./LeadingIcon.stories-iJkUvqZC.js";import{U as p}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./Cell-BMryoHV2.js";import"./cx-2dOUpm6k.js";import"./Pressable-CAjp7WdB.js";import"./usePress-XYzAalw7.js";import"./LeadingIcon-B3CZMOJC.js";import"./Skeleton-dpQW7cMp.js";import"./mergeRefs-BZQLIp5G.js";import"./motion-C-Q-avtg.js";import"./general-CSE0kF9v.js";import"./Svg-B7GM2ZFd.js";import"./paths-BjPgyxdS.js";import"./PillButton-Cdj7WtD9.js";import"./arrows-0JYTYJZi.js";import"./Counter-CavxruiM.js";import"./useControllableState-D9cJCl43.js";import"./CounterButton-CAO8KXCV.js";import"./RollingNumber-Dqz4KuU3.js";import"./Toggle-BLxkVncc.js";import"./useInstantAfterKey-D3FdC2PV.js";import"./Checkbox-CsOUmA-N.js";import"./Radio-qMCK-bX2.js";import"./CellCenter-DamPGtPP.js";import"./Divider-CIZGT-_8.js";import"./places-CYDz-5dl.js";import"./time-lpmEQjgl.js";import"./tokens-Bc2_NrJ2.js";const j=`/* Leading icon (Figma 168:18687): 32 → padding 6 / icon 20; 40 → padding 8 (spacing/sm) / icon 24; 20 → the icon alone. */
.root {
  --_glyph: 20px;
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  padding: 6px; /* no token: Figma 168:18678 — padding 6 is between spacing/xs (4) and spacing/sm (8) */
  color: var(--control-icon-secondary);
}
.root[data-size='40'] {
  --_glyph: 24px;
  width: 40px;
  height: 40px;
  padding: var(--spacing-sm);
}
.root[data-size='20'] {
  width: 20px;
  height: 20px;
  padding: 0;
}
.root[data-background] {
  border-radius: var(--radius-md);
  background-color: var(--color-bg-sunken-subtle);
}
.root[data-skeleton] {
  padding: 0;
}
.glyph {
  display: inline-flex;
  width: var(--_glyph);
  height: var(--_glyph);
}
.glyph > svg {
  width: 100%;
  height: 100%;
}
`;function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:l}),`
`,n.jsx(e.h1,{id:"leading-icon",children:"Leading icon"}),`
`,n.jsx(e.p,{children:"Иконка слева в строке, на плитке или без. Её берут Cell, Disclosure и SummaryRow, а также Field, Search и Select. Поэтому она экспортируется отдельно."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=168-18687",rel:"nofollow",children:"Leading icon 168:18687"}),": Size 32 | 40 × Background × Skeleton, иконка меняется через instance swap."]}),`
`,n.jsx(r,{of:d}),`
`,n.jsx(c,{of:d}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { LeadingIcon } from '@mtravel/ui';

<LeadingIcon size={40} background icon={<LocationPinIcon />} />
<LeadingIcon size={32} icon={<SearchIcon />} />
`})}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(r,{of:a}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Проп"}),n.jsx(e.th,{children:"Размеры"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Size 32"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"size={32}"})}),n.jsx(e.td,{children:"32 × 32, отступ 6, иконка 20"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Size 40"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"size={40}"})}),n.jsxs(e.td,{children:["40 × 40, отступ ",n.jsx(e.code,{children:"spacing/sm"}),", иконка 24"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Background"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"background"})}),n.jsxs(e.td,{children:["плитка ",n.jsx(e.code,{children:"bg/sunken-subtle"}),", скругление ",n.jsx(e.code,{children:"radius/md"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Skeleton"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"skeleton"})}),n.jsx(e.td,{children:"блок со скруглением 10 (32) или 12 (40)"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Icon"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"icon"})}),n.jsxs(e.td,{children:["любая иконка, рисующая цветом ",n.jsx(e.code,{children:"currentColor"})]})]})]})]}),`
`,n.jsx(e.h2,{id:"цвет-иконки",children:"Цвет иконки"}),`
`,n.jsxs(e.p,{children:["В Figma иконка красится заливкой, поэтому линейные иконки (например, search-alt) пришлось бы держать контурными вручную. В коде цвет ",n.jsx(e.code,{children:"control/icon/secondary"})," задан как ",n.jsx(e.code,{children:"color"})," и берётся через ",n.jsx(e.code,{children:"currentColor"}),": сплошные иконки заливаются, линейные остаются контурными."]}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.p,{children:"Иконка в строках списка: плитка 40 у «Популярных направлений» и голая 32 в короткой строке."}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(p,{css:j}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsx(e.p,{children:"Отступ 6 у размера 32 (168:18678) и скругление 10 у skeleton (390:605): токенов нет, значения оставлены с комментарием."}),`
`,n.jsx(e.h2,{id:"атрибуты-и-ref",children:"Атрибуты и ref"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"ref"})," и остальные атрибуты (",n.jsx(e.code,{children:"data-*"}),", ",n.jsx(e.code,{children:"id"}),", ",n.jsx(e.code,{children:"aria-*"}),", обработчики) попадают на корневой элемент."]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.p,{children:["Иконка декоративна (",n.jsx(e.code,{children:"aria-hidden"}),"): смысл несёт текст строки. Если иконка единственный носитель смысла, дайте кнопке или строке ",n.jsx(e.code,{children:"aria-label"}),"."]})]})}function H(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{H as default};
