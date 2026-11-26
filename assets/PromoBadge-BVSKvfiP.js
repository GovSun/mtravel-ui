import{j as n}from"./iframe-DyD5Yel4.js";import{u as d,M as i,C as s,a as o}from"./blocks-CcI75u3-.js";import{S as l,P as a,V as c,a as h,O as x}from"./PromoBadge.stories-aKtkAxQY.js";import{U as p}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./Caption-D_clnAXK.js";import"./figma-BZstJmpc.js";import"./photos-D1Eacwwu.js";import"./stack-ala-archa-CZCiGT1X.js";import"./stack-kel-tor-CWBtKByR.js";import"./PromoBadge-MRvWEy0B.js";import"./cx-2dOUpm6k.js";import"./tokens-Bc2_NrJ2.js";const j=`/*
 * PromoBadge (Figma badge_promo 354:6280). Type M+ | Discount × Shape Pill | Slanted × Size 18 | 24 (24 = 4/3).
 * Discount: tag/sale fill, control/text/inverse, IM-14 B (18) / IM-18 S (24).
 * M+: the brand gradient and the white logo are raw in Figma, there is no token for them.
 * The slanted shape is a rounded rectangle skewed in place; it sticks out of the box by --_ov on both sides,
 * like the Figma vector (so a row of slanted badges interlocks).
 */
.root {
  --_h: 18px;
  --_r: 8px; /* no token: Figma 354:6279 radius 8 (radius/xs is 4, radius/md 12) */
  --_px: 4px;
  --_ov: 2px; /* how far the slanted shape sticks out of the box on each side */
  --_tan: 0.3258; /* slant of M+ (18°); discount leans more (22°) */
  --_gap: 2px;
  --_logo-w: 15.88px;
  --_logo-frame: 16px; /* Figma: the logo sits in a 16 × 12 frame (22 × 16 at 24) */
  --_logo-box: 16px;
  --_pct-w: 10px;
  --_pct-h: 10px;

  position: relative;
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: var(--_h);
  padding: 0 var(--_px);
  border-radius: var(--_r);
  color: var(--control-text-inverse);
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  -webkit-user-select: none;
}

.shape {
  position: absolute;
  inset: 0;
  border-radius: inherit;
}
.content {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--_gap);
}

/* ---------- type ---------- */
.root[data-variant='discount'] {
  font: var(--font-im-14-b);
  letter-spacing: var(--tracking-im-14-b);
  --_tan: 0.3983;
}
.root[data-variant='discount'] .shape {
  background-color: var(--badge-bg-sale);
}
.root[data-variant='mplus'] .shape {
  /* no token: Figma 354:6279 gradient #e55f14 → #fa9837 (43 %) → #f96b1c, from the bottom right to the top left */
  background: linear-gradient(300deg, #e55f14 0%, #fa9837 43%, #f96b1c 100%); /* no token: Figma 354:6279 */
}
.value {
  line-height: 1;
}
.percent {
  display: block;
  flex: none;
  width: var(--_pct-w);
  height: var(--_pct-h);
}
.logo {
  display: block;
  flex: none;
  width: var(--_logo-w);
  height: auto;
  /* Figma: the logo sits 1 px (18) / 2 px (24) below the top of its 16 × 12 (22 × 16) frame */
  margin-top: calc(var(--_logo-box) * 0.0625);
  margin-right: calc(var(--_logo-frame) - var(--_logo-w));
}

/* ---------- size 18 (default) paddings per shape ---------- */
.root[data-variant='mplus'] {
  --_px: 8px;
}
.root[data-variant='discount'][data-shape='slanted'] {
  --_px: 6px;
}

/* ---------- slanted ---------- */
.root[data-shape='slanted'] {
  --_r: 0px;
  --_skew: calc(var(--_h) * var(--_tan));
}
.root[data-shape='slanted'] .shape {
  inset: 0 calc(var(--_ov) * -1 + var(--_skew) / 2);
  border-radius: 5px; /* no token: Figma 684:11764 corner radius 5 */
  transform: skewX(-18.04deg);
}
.root[data-shape='slanted'][data-variant='discount'] .shape {
  transform: skewX(-21.7deg);
}

/* ---------- size 24 (×4/3) ---------- */
.root[data-size='24'] {
  --_h: 24px;
  --_r: var(--radius-md); /* Figma 1244:31 binds radius/md */
  --_ov: 2px;
  --_gap: 3px;
  --_logo-w: 21.17px;
  --_logo-frame: 22px;
  --_logo-box: 32px;
  --_pct-w: 13px;
  --_pct-h: 15px;
}
.root[data-size='24'][data-variant='mplus'] {
  --_px: 10px;
}
.root[data-size='24'][data-variant='mplus'][data-shape='slanted'] {
  --_px: 11px;
}
.root[data-size='24'][data-variant='discount'] {
  font: var(--font-im-18-s);
  letter-spacing: var(--tracking-im-18-s);
  --_px: 6px;
  padding-bottom: 1px; /* Figma p1/6/2/6 */
}
.root[data-size='24'][data-variant='discount'][data-shape='slanted'] {
  --_px: 8px;
  --_ov: 3px;
}
.root[data-size='24'][data-shape='slanted'] {
  --_r: 0px;
}
.root[data-size='24'][data-shape='slanted'] .shape {
  border-radius: 6.67px; /* no token: Figma 1244:68 */
}
.root[data-size='24'][data-shape='slanted'][data-variant='discount'] .shape {
  transform: skewX(-21.4deg);
}
`;function r(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:l}),`
`,n.jsx(e.h1,{id:"promobadge",children:"PromoBadge"}),`
`,n.jsx(e.p,{children:"Маленькая метка на фото или рядом с ценой: «M+» значит, что за покупку вернутся бонусы M+, «−7 %» показывает скидку. Для статусов вроде «Мало мест» есть Badge."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=354-6280",rel:"nofollow",children:"badge_promo 354:6280"}),": Type M+ | Discount × Shape Pill | Slanted × Size 18px | 24px (24 — это масштаб 4/3)."]}),`
`,n.jsx(s,{of:a}),`
`,n.jsx(o,{of:a}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Где в дизайне."})," Детальная страница 173:13296 и «Оформление заказ» 1338:107637 («−10» slanted на цене, M+)."]}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { PromoBadge } from '@mtravel/ui';

<PromoBadge variant="discount" shape="slanted" value={7} />
<PromoBadge variant="mplus" shape="slanted" />
<PromoBadge variant="mplus" size={24} />
`})}),`
`,n.jsxs(e.p,{children:["Метки не нажимаются, это подсказка. ",n.jsx(e.code,{children:"ref"}),", ",n.jsx(e.code,{children:"className"}),", ",n.jsx(e.code,{children:"style"})," и остальные атрибуты уходят на корневой ",n.jsx(e.code,{children:"<span>"}),". Скринридер читает одну фразу: «Скидка 7%» или «M+»."]}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(s,{of:c}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Проп"}),n.jsx(e.th,{children:"Заметка"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Type"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"variant"}),": ",n.jsx(e.code,{children:"mplus"}),", ",n.jsx(e.code,{children:"discount"})]}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Shape"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"shape"}),": ",n.jsx(e.code,{children:"pill"}),", ",n.jsx(e.code,{children:"slanted"})]}),n.jsx(e.td,{children:"у скошенной форма на 2–3 px шире рамки, поэтому две метки в ряд входят друг в друга, как в карточках"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Size"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"size"}),": 18, 24"]}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"текст скидки"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"value"})}),n.jsxs(e.td,{children:["число, ",n.jsx(e.code,{children:"7"})," → «−7 %»"]})]})]})]}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(e.h2,{id:"анимации-нет",children:"Анимации нет"}),`
`,n.jsx(e.p,{children:"Метка статична."}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"Где в Figma"}),n.jsx(e.th,{children:"Значение"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Градиент M+"}),n.jsx(e.td,{children:"354:6279 и все варианты M+"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"#e55f14"})," → ",n.jsx(e.code,{children:"#fa9837"})," (43 %) → ",n.jsx(e.code,{children:"#f96b1c"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Логотип M+"}),n.jsx(e.td,{children:"346:6237"}),n.jsxs(e.td,{children:["белый ",n.jsx(e.code,{children:"#ffffff"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Знак «%»"}),n.jsx(e.td,{children:"354:6269"}),n.jsx(e.td,{children:"заливка — переменная из чужой библиотеки (здесь белая), жёлтый и красный внутри скрыты вычитанием"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Радиус"}),n.jsx(e.td,{children:"354:6279, 684:11764, 1244:68"}),n.jsxs(e.td,{children:["8 у Pill 18, 5 и 6.67 у Slanted; токенов нет (у Pill 24 привязан ",n.jsx(e.code,{children:"radius/md"}),")"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Скос"}),n.jsx(e.td,{children:"684:11764 и 720:41"}),n.jsx(e.td,{children:"около 18° у M+, около 22° у скидки"})]})]})]}),`
`,n.jsx(e.p,{children:"Скос в коде — повёрнутый скруглённый прямоугольник, в Figma — векторный контур с тем же углом; углы скруглены чуть иначе, разница меньше пикселя."}),`
`,n.jsx(p,{css:j}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'role="img"'})," с ",n.jsx(e.code,{children:"aria-label"}),": «Скидка 7%», «M+»."]}),`
`,n.jsxs(e.li,{children:["Белый «−7 %» на ",n.jsx(e.code,{children:"badge/bg/sale"})," (→ ",n.jsx(e.code,{children:"tag/sale"}),"): контраст 3.8 : 1, ниже 4.5 : 1 для мелкого текста. Белый логотип M+ на оранжевом градиенте: от 2.2 до 3.5 : 1. Смысл не зависит от цвета: скринридер читает подпись, а метка стоит рядом с ценой. Для строгого AA нужен более тёмный ",n.jsx(e.code,{children:"tag/sale"}),"."]}),`
`]})]})}function B(t={}){const{wrapper:e}={...d(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{B as default};
