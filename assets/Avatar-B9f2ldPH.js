import{j as n}from"./iframe-DuqTOznb.js";import{u as d,M as s,C as e,a as o}from"./blocks-CaaIEU4k.js";import{A as c,P as i,V as l,B as h,a as x,C as j,b as g}from"./Avatar.stories-PxrwqA5i.js";import{M as m,U as p}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./cx-2dOUpm6k.js";import"./Chip-KAmC-4ZV.js";import"./mergeRefs-BPT53vMC.js";import"./motion-C-Q-avtg.js";import"./useControllableState-QyUXWn2y.js";import"./usePress-DgMUH5X0.js";import"./arrows-C0H-naDa.js";import"./Svg-B1-TtxWQ.js";import"./general-DYSfllt2.js";import"./paths-BjPgyxdS.js";import"./tokens-INIU3VNa.js";const f=`/*
 * Avatar (Figma «avatar - organistaion» 1065:1404). A circle: radius/full, 32 px by default.
 * The five placeholder gradients (Var 1–5) are mesh art drawn in Figma from raw colours without variables — no tokens
 * exist for them. Here each is a base colour with soft spots, tuned against the Figma renders.
 */
.root {
  --_size: 32px;

  position: relative;
  display: inline-block;
  flex: none;
  box-sizing: border-box;
  width: var(--_size);
  height: var(--_size);
  vertical-align: middle;
  overflow: hidden;
  border-radius: var(--radius-full);
  background-color: #4a88f4; /* no token: Figma 1065:1405 */
  user-select: none;
}

/* no token: Figma 1065:1405 (Var 1), 1065:1750 (Var 2), 1065:1752 (Var 3), 1065:1854 (Var 4), 1065:1871 (Var 5) */
.root[data-variant='1'] {
  background:
    radial-gradient(circle at 104% 56%, #3ff0c4 0, rgba(63, 240, 196, 0) 34%), /* no token: Figma 1065:1405 */
    radial-gradient(ellipse 70% 55% at 45% 0%, #4a3bf2 0, rgba(74, 59, 242, 0) 100%), /* no token: Figma 1065:1405 */
    radial-gradient(circle at 10% 60%, #55a4f7 0, rgba(85, 164, 247, 0) 60%), /* no token: Figma 1065:1405 */
    #4a88f4; /* no token: Figma 1065:1405 */
}
.root[data-variant='2'] {
  background:
    radial-gradient(circle at 18% 52%, #9638f6 0, rgba(150, 56, 246, 0) 55%), /* no token: Figma 1065:1750 */
    radial-gradient(circle at 100% 8%, #c8a05a 0, rgba(200, 160, 90, 0) 26%), /* no token: Figma 1065:1750 */
    radial-gradient(circle at 55% 105%, #6f64f8 0, rgba(111, 100, 248, 0) 55%), /* no token: Figma 1065:1750 */
    #8048f8; /* no token: Figma 1065:1750 */
}
.root[data-variant='3'] {
  background:
    radial-gradient(circle at 92% 92%, #a362e6 0, rgba(163, 98, 230, 0) 52%), /* no token: Figma 1065:1752 */
    radial-gradient(circle at 12% 88%, #2323e7 0, rgba(35, 35, 231, 0) 55%), /* no token: Figma 1065:1752 */
    radial-gradient(circle at 80% 8%, #4a36ea 0, rgba(74, 54, 234, 0) 60%), /* no token: Figma 1065:1752 */
    #4535e8; /* no token: Figma 1065:1752 */
}
.root[data-variant='4'] {
  background:
    radial-gradient(circle at 52% 78%, #8160ee 0, rgba(129, 96, 238, 0) 38%), /* no token: Figma 1065:1854 */
    radial-gradient(circle at 12% 30%, #3f9df6 0, rgba(63, 157, 246, 0) 55%), /* no token: Figma 1065:1854 */
    radial-gradient(circle at 92% 70%, #4f8af4 0, rgba(79, 138, 244, 0) 50%), /* no token: Figma 1065:1854 */
    #5c86f3; /* no token: Figma 1065:1854 */
}
.root[data-variant='5'] {
  background:
    radial-gradient(circle at 6% 94%, #f2a935 0, rgba(242, 169, 53, 0) 42%), /* no token: Figma 1065:1871 */
    radial-gradient(circle at 12% 40%, #e9625a 0, rgba(233, 98, 90, 0) 45%), /* no token: Figma 1065:1871 */
    radial-gradient(circle at 80% 85%, #ea7a3c 0, rgba(234, 122, 60, 0) 45%), /* no token: Figma 1065:1871 */
    #e23d36; /* no token: Figma 1065:1871 */
}

/* a photo covers the gradient; it fades in when loaded so a slow network shows the colour, not an empty circle */
.photo {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity calc(var(--avatar-motion-fade-duration) * var(--motion-scale)) var(--motion-ease-standard);
}
.root[data-loaded] .photo {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .photo {
    transition: none;
  }
}
:global(:root[data-motion='reduce']) .photo {
  transition: none;
}
`;function t(a){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:c}),`
`,n.jsx(r.h1,{id:"avatar",children:"Avatar"}),`
`,n.jsx(r.p,{children:"Круглая картинка организатора: в строке «Организатор» на детальной странице и в чипе фильтра. Нет фото — вместо него мягкий градиент. Это один аватар, не группа: набора из нескольких аватаров в Figma нет."}),`
`,n.jsxs(r.p,{children:["Figma: ",n.jsx(r.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1065-1404",rel:"nofollow",children:"avatar - organistaion 1065:1404"}),": Avatar = True | False × Var 1–5. Страница «Avatars»."]}),`
`,n.jsxs(r.table,{children:[n.jsx(r.thead,{children:n.jsxs(r.tr,{children:[n.jsx(r.th,{children:"Figma"}),n.jsx(r.th,{children:"В коде"})]})}),n.jsxs(r.tbody,{children:[n.jsxs(r.tr,{children:[n.jsx(r.td,{children:"Avatar=True"}),n.jsxs(r.td,{children:[n.jsx(r.code,{children:"src"})," — фото"]})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:"Avatar=False, Var 1–5"}),n.jsxs(r.td,{children:["без ",n.jsx(r.code,{children:"src"})," — градиент; ",n.jsx(r.code,{children:"variant"})," выбирает один из пяти"]})]})]})]}),`
`,n.jsx(e,{of:i}),`
`,n.jsx(o,{of:i}),`
`,n.jsx(r.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { Avatar } from '@mtravel/ui';

<Avatar src={org.logo} alt={org.name} size={40} />

// без фото: цвет выбирается по имени и не меняется между экранами
<Avatar seed={org.name} size={40} />
`})}),`
`,n.jsx(r.p,{children:"Размер в Figma 32 px. В строке организатора и чипе он другой: 40 и 20 px (круг масштабируется целиком), поэтому размер — число."}),`
`,n.jsx(r.p,{children:"Если фото не загрузилось, остаётся градиент, а не пустой круг. Когда фото загрузилось, оно проявляется поверх градиента."}),`
`,n.jsx(r.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(e,{of:l}),`
`,n.jsx(r.p,{children:"Цвет по имени: одинаковое имя даёт одинаковый градиент."}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(e,{of:x}),`
`,n.jsx(r.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsx(r.p,{children:"Только проявление фото за 160 мс. Нажатия у аватара нет: если он кликабелен, кликабельна строка вокруг. Reduced motion: фото появляется сразу."}),`
`,n.jsx(m,{prefix:"--avatar-"}),`
`,n.jsx(r.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(r.p,{children:"Файл «Выходные»: детальная страница (строка организатора) и «Результат поиска» (чип организатора)."}),`
`,n.jsx(e,{of:j}),`
`,n.jsx(e,{of:g}),`
`,n.jsx(r.h2,{id:"props",children:"Props"}),`
`,n.jsxs(r.table,{children:[n.jsx(r.thead,{children:n.jsxs(r.tr,{children:[n.jsx(r.th,{children:"Prop"}),n.jsx(r.th,{children:"Figma"}),n.jsx(r.th,{children:"Что делает"})]})}),n.jsxs(r.tbody,{children:[n.jsxs(r.tr,{children:[n.jsx(r.td,{children:n.jsx(r.code,{children:"src"})}),n.jsx(r.td,{children:"Avatar=True"}),n.jsx(r.td,{children:"фото"})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:n.jsx(r.code,{children:"alt"})}),n.jsx(r.td,{children:"—"}),n.jsx(r.td,{children:"имя организатора для скринридера; пустое — декоративный аватар"})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:n.jsx(r.code,{children:"variant"})}),n.jsx(r.td,{children:"Var"}),n.jsx(r.td,{children:"градиент 1–5 без фото"})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:n.jsx(r.code,{children:"seed"})}),n.jsx(r.td,{children:"—"}),n.jsxs(r.td,{children:["строка, по которой выбирается ",n.jsx(r.code,{children:"variant"}),", если он не задан"]})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:n.jsx(r.code,{children:"size"})}),n.jsx(r.td,{children:"32 px"}),n.jsx(r.td,{children:"диаметр в px; значения DS 32 и 40, подойдёт любое число"})]}),n.jsxs(r.tr,{children:[n.jsxs(r.td,{children:[n.jsx(r.code,{children:"ref"}),", ",n.jsx(r.code,{children:"…rest"})]}),n.jsx(r.td,{children:"—"}),n.jsxs(r.td,{children:["уходят на круг (",n.jsx(r.code,{children:"span"}),")"]})]})]})]}),`
`,n.jsx(r.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,n.jsxs(r.table,{children:[n.jsx(r.thead,{children:n.jsxs(r.tr,{children:[n.jsx(r.th,{children:"Что"}),n.jsx(r.th,{children:"В Figma"}),n.jsx(r.th,{children:"В коде"})]})}),n.jsxs(r.tbody,{children:[n.jsxs(r.tr,{children:[n.jsx(r.td,{children:"Градиенты"}),n.jsx(r.td,{children:"Var 1–3 — сетка из размытых кругов, Var 4–5 — растровые картинки"}),n.jsx(r.td,{children:"пять CSS-градиентов, подогнаны под рендер Figma (средний цвет с отклонением до 13 из 255)"})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:"Иконка «user»"}),n.jsx(r.td,{children:"скрыта внутри Avatar=True"}),n.jsx(r.td,{children:"не нужна"})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:"Размеры"}),n.jsx(r.td,{children:"один, 32 px; в продукте 40 и 20"}),n.jsx(r.td,{children:"любой"})]})]})]}),`
`,n.jsx(p,{css:f}),`
`,n.jsx(r.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(r.p,{children:["Все пять градиентов (1065:1405, 1065:1750, 1065:1752, 1065:1854, 1065:1871) нарисованы из сырых цветов без переменных. Круг берёт ",n.jsx(r.code,{children:"radius/full"}),"."]}),`
`,n.jsx(r.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["С ",n.jsx(r.code,{children:"alt"})," аватар читается как картинка с этим именем: ",n.jsx(r.code,{children:'role="img"'}),". Без ",n.jsx(r.code,{children:"alt"})," он декоративный: имя организатора уже написано рядом, повторять его не нужно."]}),`
`,n.jsxs(r.li,{children:["Фото нельзя перетащить (",n.jsx(r.code,{children:"draggable=false"}),"), чтобы палец по нему не начинал перетаскивание."]}),`
`]})]})}function X(a={}){const{wrapper:r}={...d(),...a.components};return r?n.jsx(r,{...a,children:n.jsx(t,{...a})}):t(a)}export{X as default};
