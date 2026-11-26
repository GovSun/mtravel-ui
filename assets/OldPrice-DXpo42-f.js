import{j as n}from"./iframe-DyD5Yel4.js";import{u as s,M as c,C as t,a}from"./blocks-CcI75u3-.js";import{S as d,P as i,a as l,L as p,B as x}from"./OldPrice.stories-DAEg24BJ.js";import{U as h}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./Caption-D_clnAXK.js";import"./figma-BZstJmpc.js";import"./OldPrice-CFXJrPco.js";import"./cx-2dOUpm6k.js";import"./tokens-Bc2_NrJ2.js";const m=`/*
 * OldPrice (Figma Old price 679:27). Text control/text/tertiary, IM-12|14|16|18 R; the strike line is
 * control/border/old-price, 1 px, across the middle of the text and as wide as the text.
 */
.root {
  position: relative;
  display: inline-flex;
  align-items: center;
  flex: none;
  color: var(--control-text-tertiary);
  text-decoration: none;
  white-space: nowrap;
  font: var(--font-im-14-r);
  letter-spacing: var(--tracking-im-14-r);
}
.root[data-size='12'] {
  font: var(--font-im-12-r);
  letter-spacing: var(--tracking-im-12-r);
}
.root[data-size='16'] {
  font: var(--font-im-16-r);
  letter-spacing: var(--tracking-im-16-r);
}
.root[data-size='18'] {
  font: var(--font-im-18-r);
  letter-spacing: var(--tracking-im-18-r);
}

.root::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background-color: var(--control-border-old-price);
  pointer-events: none;
}

.sr {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}
`;function o(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:d}),`
`,n.jsx(e.h1,{id:"oldprice",children:"OldPrice"}),`
`,n.jsx(e.p,{children:"Цена до скидки: серая и зачёркнутая. Ставится рядом с текущей ценой, например «6 390 ⃀» и зачёркнутые «2 200 ⃀». Сама по себе без текущей цены не нужна."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=679-27",rel:"nofollow",children:"Old price 679:27"}),": Size 11 | 13 | 15 | 17."]}),`
`,n.jsx(t,{of:i}),`
`,n.jsx(a,{of:i}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Где в дизайне."})," Детальная страница 173:13296 («6 795 ⃀» у цены 6 115 ⃀, Size 18 и 16)."]}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { OldPrice } from '@mtravel/ui';

<span className="im-14-b">6 390 ⃀</span>
<OldPrice size={14}>2 200 ⃀</OldPrice>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"ref"}),", ",n.jsx(e.code,{children:"className"}),", ",n.jsx(e.code,{children:"style"})," и остальные атрибуты уходят на корневой ",n.jsx(e.code,{children:"<s>"}),"."]}),`
`,n.jsxs(e.p,{children:["Линия — псевдоэлемент на всю ширину текста, поэтому она растёт вместе с суммой. Внутри настоящий ",n.jsx(e.code,{children:"<s>"}),", перед суммой для скринридера «Было»: он читает «Было 2 200 ⃀», а не вторую цену."]}),`
`,n.jsx(e.h2,{id:"размеры",children:"Размеры"}),`
`,n.jsx(t,{of:l}),`
`,n.jsx(e.p,{children:"Варианты в Figma названы 11, 13, 15, 17, но привязаны к стилям IM-12, IM-14, IM-16, IM-18 R. В коде размер — это кегль: 12, 14, 16, 18. Берите размер на ступень не крупнее цены рядом: цена IM-14 B — старая 14, на L — 12."}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(t,{of:x}),`
`,n.jsx(e.h2,{id:"анимации-нет",children:"Анимации нет"}),`
`,n.jsx(e.p,{children:"Статичный текст."}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(e.p,{children:["Нет: цвет текста ",n.jsx(e.code,{children:"control/text/tertiary"}),", линия ",n.jsx(e.code,{children:"control/border/old-price"})," (в теме это красный)."]}),`
`,n.jsx(h,{css:m}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"control/text/tertiary"})," на белом даёт 3.6 : 1, ниже 4.5 : 1. Это второстепенная информация: главная цена рядом контрастная, а «Было» читает скринридер."]})]})}function C(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{C as default};
