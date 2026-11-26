import{j as n}from"./iframe-DyD5Yel4.js";import{u as s,M as o,C as r,a as c}from"./blocks-CcI75u3-.js";import{S as d,P as t,a as l,O as h}from"./PriceTag.stories-C9sJk7ED.js";import{U as p}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./Caption-D_clnAXK.js";import"./figma-BZstJmpc.js";import"./home-CSe8AaHy.js";import"./date-DiDJ1Ibz.js";import"./photos-D1Eacwwu.js";import"./stack-ala-archa-CZCiGT1X.js";import"./stack-kel-tor-CWBtKByR.js";import"./PriceTag-VsIhNLIX.js";import"./cx-2dOUpm6k.js";import"./tokens-Bc2_NrJ2.js";const m=`/*
 * PriceTag (Figma price_tag 1198:4981): tag/tariff fill, IM-20 B. The caps overlap the box by 2 px (Figma gap −2).
 * The text is white on any theme: the Figma main binds control/text/selected (it turns dark in the dark theme),
 * the DS card uses text/inverse/constant/primary, which is what a label on a constant blue needs.
 */
.root {
  display: inline-flex;
  align-items: center;
  flex: none;
  height: 32px;
  color: var(--color-text-inverse-constant-primary);
  white-space: nowrap;
  font: var(--font-im-20-b);
  letter-spacing: var(--tracking-im-20-b);
  vertical-align: middle;
}
.root[data-size='18'] {
  font: var(--font-im-18-b);
  letter-spacing: var(--tracking-im-18-b);
}
.root[data-size='18'] .body {
  padding: 0 var(--spacing-sm); /* Figma 1198:4983 in the XL card: padding 8 */
}
.cap {
  display: block;
  flex: none;
  fill: var(--color-tag-tariff);
}
.body {
  display: flex;
  align-items: center;
  height: 32px;
  margin: 0 -2px;
  padding: 0 var(--spacing-md);
  background-color: var(--color-tag-tariff);
}
`;function a(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:d}),`
`,n.jsx(e.h1,{id:"pricetag",children:"PriceTag"}),`
`,n.jsxs(e.p,{children:["Цена на синей метке со скошенными краями. Её место — верх текстового блока на большой фотокарточке ",n.jsx(e.a,{href:"?path=/docs/components-excursioncard--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"ExcursionCard"})," XL. Для обычной цены в тексте метка не нужна."]}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1198-4981",rel:"nofollow",children:"price_tag 1198:4981"}),": один вариант, текст «Price»."]}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(c,{of:t}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { PriceTag } from '@mtravel/ui';

<PriceTag>4 217 ⃀</PriceTag>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"ref"}),", ",n.jsx(e.code,{children:"className"}),", ",n.jsx(e.code,{children:"style"})," и остальные атрибуты уходят на корневой ",n.jsx(e.code,{children:"<span>"}),"."]}),`
`,n.jsx(e.p,{children:"Краи — два SVG, середина — обычный блок, поэтому метка растёт вместе с суммой."}),`
`,n.jsx(e.h2,{id:"размеры",children:"Размеры"}),`
`,n.jsx(r,{of:l}),`
`,n.jsxs(e.p,{children:["В Figma main набран IM-20 B, а на карточке XL экземпляр переопределён на IM-18 B. Оба размера оставлены: ",n.jsx(e.code,{children:"size={20}"})," по умолчанию, XL использует 18."]}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.p,{children:"Где в дизайне «Выходные»: главная, Figma 4687:46185, «В рассрочку через M+»: цена на фото XL-карточки."}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h2,{id:"анимации-нет",children:"Анимации нет"}),`
`,n.jsx(e.p,{children:"Статичная метка."}),`
`,n.jsx(e.h2,{id:"отличия-от-figma",children:"Отличия от Figma"}),`
`,n.jsxs(e.p,{children:["В main цвет текста ",n.jsx(e.code,{children:"control/text/selected"})," (в тёмной теме он тёмный). У экземпляра в карточке — ",n.jsx(e.code,{children:"text/inverse/constant/primary"}),", белый всегда. В коде взят второй: метка лежит на постоянно синем ",n.jsx(e.code,{children:"tag/tariff"}),"."]}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsx(e.p,{children:"Нет. Форма краёв нарисована векторами (концы вогнутые, радиус не нужен)."}),`
`,n.jsx(p,{css:m}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.p,{children:["Белый на ",n.jsx(e.code,{children:"tag/tariff"})," (синий): 3.7 : 1. Текст жирный 18–20 px, для такого размера порог 3 : 1 выдержан, до 4.5 : 1 не хватает."]})]})}function k(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(a,{...i})}):a(i)}export{k as default};
