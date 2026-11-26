import{j as n}from"./iframe-DyD5Yel4.js";import{u as c,M as s,C as t,a as d}from"./blocks-CcI75u3-.js";import{S as l,P as i,V as a,C as h}from"./CollectionCard.stories-4q0E38no.js";import{M as p,U as x}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./Caption-D_clnAXK.js";import"./figma-BZstJmpc.js";import"./FullWidthFrame-BO26oEhV.js";import"./Screen-D3FX-wep.js";import"./ScrollMatrix-Rhyk2V53.js";import"./cx-2dOUpm6k.js";import"./Pressable-CAjp7WdB.js";import"./usePress-XYzAalw7.js";import"./Skeleton-dpQW7cMp.js";import"./mergeRefs-BZQLIp5G.js";import"./motion-C-Q-avtg.js";import"./SectionTitle-CwRady4O.js";import"./PillButton-Cdj7WtD9.js";import"./arrows-0JYTYJZi.js";import"./Svg-B7GM2ZFd.js";import"./tokens-Bc2_NrJ2.js";const j=`/*
 * CollectionCard (Figma collection_card 1218:5489): 128 × 130. A 98 × 98 block: a colour card 91 × 91 and a photo 91 × 91
 * shifted 7 px down and right, both radius 14 (no token). The label is control/text/default, IM-14 B, centred.
 * The colour of the card is raw per topic in Figma, so it comes in as --_card.
 */
.root {
  --_card: #90c8fd; /* no token: Figma 1204:5405, replaced per topic in the component */
  --_press-in: calc(var(--collection-card-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--collection-card-motion-press-out-duration) * var(--motion-scale));

  position: relative;
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  box-sizing: border-box;
  width: 128px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
  background: none;
  color: var(--control-text-default);
  font: inherit;
  text-align: center;
  text-decoration: none;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
  transition:
    transform var(--_press-out) var(--collection-card-motion-press-easing),
    opacity var(--_press-out) var(--collection-card-motion-press-easing);
}
.root[data-interactive] {
  cursor: pointer;
}
.root[data-pressed] {
  transform: scale(var(--collection-card-motion-press-scale));
  transition-duration: var(--_press-in), var(--_press-in);
}
.root:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: -2px;
}
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .root[data-pressed] {
    transform: none;
    opacity: var(--collection-card-motion-press-reduced-opacity);
  }
}
:global(:root[data-motion='reduce']) .root[data-pressed] {
  transform: none;
  opacity: var(--collection-card-motion-press-reduced-opacity);
}

.photos {
  position: relative;
  display: block;
  flex: none;
  width: 98px;
  height: 98px;
}
.back,
.front {
  position: absolute;
  display: block;
  width: 91px;
  height: 91px;
  border-radius: 14px; /* no token: Figma 1204:5405 radius 14 */
}
.back {
  top: 0;
  left: 0;
  background-color: var(--_card);
}
.front {
  top: 7px;
  left: 7px;
  object-fit: cover;
}
.label {
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font: var(--font-im-14-b);
  line-height: 20px; /* Figma: the label frame is 20 high, the text centred in it */
  letter-spacing: var(--tracking-im-14-b);
}

/* ---------- skeleton (Figma 1231:543): photos 92, label bar ---------- */
.root[data-skeleton] {
  cursor: default;
}
.root[data-skeleton] .photos {
  width: 92px;
  height: 92px;
}
.skBack,
.skFront {
  position: absolute;
}
.skBack {
  top: 0;
  left: 0;
  opacity: 0.5;
}
.skFront {
  top: 6.6px;
  left: 6.6px;
}
.skLabel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
}
`;function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...c(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l}),`
`,n.jsx(e.h1,{id:"collectioncard",children:"CollectionCard"}),`
`,n.jsx(e.p,{children:"Плитка «Под настроение»: фото на цветной карточке и короткая подпись, например «В горы». Ведёт в подборку экскурсий по теме."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1218-5489",rel:"nofollow",children:"collection_card 1218:5489"}),": Topic Mountains | Lakes | City | Topic4 | Topic5 × Skeleton."]}),`
`,n.jsx(t,{of:i}),`
`,n.jsx(d,{of:i}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { CollectionCard } from '@mtravel/ui';

<CollectionCard topic="mountains" href="/collections/mountains" />
<CollectionCard topic="active" label="Активный отдых" onClick={open} />
<CollectionCard topic="lakes" skeleton />
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"topic"})," задаёт подпись, фото и цвет задней карточки. Свои — ",n.jsx(e.code,{children:"label"}),", ",n.jsx(e.code,{children:"image"}),", ",n.jsx(e.code,{children:"color"}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onClick"})," получает настоящее событие (роутеру нужен ",n.jsx(e.code,{children:"preventDefault"}),"), у ссылки есть ",n.jsx(e.code,{children:"target"})," и ",n.jsx(e.code,{children:"rel"}),". ",n.jsx(e.code,{children:"ref"}),", ",n.jsx(e.code,{children:"className"}),", ",n.jsx(e.code,{children:"style"})," и остальные атрибуты, в том числе обработчики указателя, уходят на корень; нажатие их не перезаписывает. Скелетон — ",n.jsx(e.code,{children:"SkeletonGroup"})," с ",n.jsx(e.code,{children:'role="status"'})," и подписью «Загрузка»."]}),`
`,n.jsx(e.h2,{id:"темы",children:"Темы"}),`
`,n.jsx(t,{of:a}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma Topic"}),n.jsx(e.th,{children:n.jsx(e.code,{children:"topic"})}),n.jsx(e.th,{children:"Подпись"}),n.jsx(e.th,{children:"Цвет карточки"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Mountains"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"mountains"})}),n.jsx(e.td,{children:"В горы"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"#90c8fd"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Lakes"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"lakes"})}),n.jsx(e.td,{children:"К озёрам"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"#91cff9"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"City"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"city"})}),n.jsx(e.td,{children:"По городу"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"#d6e0ef"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Topic4"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"active"})}),n.jsx(e.td,{children:"Активный отдых"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"#c9cdde"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Topic5"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"history"})}),n.jsx(e.td,{children:"Музей и история"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"#d6e0ef"})})]})]})]}),`
`,n.jsx(e.p,{children:"Тема 4 и 5 в Figma без имён, коду нужны смысловые ключи, поэтому они названы по подписи."}),`
`,n.jsx(e.h2,{id:"нажатие-и-анимация",children:"Нажатие и анимация"}),`
`,n.jsx(e.p,{children:"Плитка слегка уходит вглубь (0.95) и возвращается за 240 мс. В Reduced motion она вместо этого чуть бледнеет."}),`
`,n.jsx(p,{prefix:"--collection-card-"}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.p,{children:"Где в дизайне «Выходные»: главная, Figma 4687:46144, «Подборки активностей» (пять плиток в ряд)."}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsx(e.p,{children:"Цвета карточек сзади (таблица выше) и радиус 14 заданы в Figma «сырыми»."}),`
`,n.jsx(x,{css:j}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsx(e.p,{children:"Плитка — ссылка или кнопка с именем из подписи; фото декоративное."})]})}function G(o={}){const{wrapper:e}={...c(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{G as default};
