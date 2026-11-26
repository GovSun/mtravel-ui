import{j as n}from"./iframe-DyD5Yel4.js";import{u as t,M as o,C as i,a}from"./blocks-CcI75u3-.js";import{B as c,P as s,V as l,a as h,C as x,b as j}from"./Badge.stories-CHlVV0CX.js";import{M as g,U as p}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./Badge-CdXEkR6u.js";import"./cx-2dOUpm6k.js";import"./Pressable-CAjp7WdB.js";import"./usePress-XYzAalw7.js";import"./arrows-0JYTYJZi.js";import"./Svg-B7GM2ZFd.js";import"./tokens-Bc2_NrJ2.js";const b=`/*
 * Badge (Figma 461:4494): a glass pill for photos. Fill, border and text: badge/* tokens; blur: blur/bg-8.
 * Radius 8 has no token (radius/xs is 4, radius/md 12) and is raw in Figma too.
 */
.root {
  --_h: 24px;
  --_font: var(--font-im-14-b);
  --_tracking: var(--tracking-im-14-b);
  --_bg: var(--badge-bg-default);
  --_press-in: calc(var(--badge-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--badge-motion-press-out-duration) * var(--motion-scale));

  position: relative;
  display: inline-flex;
  flex: none;
  align-items: center;
  box-sizing: border-box;
  gap: var(--spacing-xs);
  height: var(--_h);
  margin: 0;
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 0;
  border-radius: 8px; /* no token: Figma 164:18649 */
  background-color: var(--_bg);
  /* hairline as an inset ring: a real 0.5 px border would shift the text to half pixels */
  box-shadow: inset 0 0 0 var(--border-width-hairline) var(--badge-border-default);
  -webkit-backdrop-filter: var(--blur-bg-8);
  backdrop-filter: var(--blur-bg-8);
  color: var(--badge-text-default);
  font: var(--_font);
  letter-spacing: var(--_tracking);
  text-decoration: none;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
.root[data-size='28'] {
  --_h: 28px;
  --_font: var(--font-im-16-b);
  --_tracking: var(--tracking-im-16-b);
}
.root[data-variant='light'] {
  --_bg: var(--badge-bg-light);
}

.icon {
  display: flex;
  flex: none;
  color: var(--color-icon-inverse-constant-primary);
}
.label {
  min-width: 0;
}

/* a badge with a handler: a button with a 44 px target, shrinks under the finger */
.root[data-interactive] {
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  transition: transform var(--_press-out) var(--badge-motion-press-easing);
}
.root[data-interactive]::after {
  content: '';
  position: absolute;
  /* 44 px high and wide, +1 px so sub-pixel heights (22.8) still reach 44 */
  inset: calc((var(--_h) - 44px) / 2 - 1px) calc(-4px - 1px);
}
.root[data-pressed] {
  transform: scale(var(--badge-motion-press-scale));
  transition-duration: var(--_press-in);
}
.root[data-interactive]:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .root[data-pressed] {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .root[data-pressed] {
  transform: none;
}
`;function d(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:c}),`
`,n.jsx(e.h1,{id:"badge",children:"Badge"}),`
`,n.jsxs(e.p,{children:["Плашка из стекла поверх фотографии: «1 из 4» на обложке, дата и время слота. Стекло тёмное или светлое, размер 24 или 28. Для обычной подписи вне фото она не нужна. Скидки, M+ и суммы лимита — отдельные плашки, см. ",n.jsx(e.a,{href:"?path=/docs/components-limit-badge--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Limit badge"}),"."]}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=461-4494",rel:"nofollow",children:"badge 461:4494"}),": Size 24px | 28px × Background Dark | Light, переключатели Left icon и Right icon."]}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(a,{of:s}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Где в дизайне."})," Детальная страница 173:13296 («1 из 4» на фото) и «Оформление заказ» 1338:107637 («вс, 6 июл, 18:00»)."]}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Badge } from '@mtravel/ui';

<Badge variant="light">1 из 4</Badge>
<Badge variant="dark">вс, 6 июл, 19:00</Badge>

// стрелка справа: плашка нажимается
<Badge variant="dark" iconRight onClick={openGallery}>Все фото</Badge>
`})}),`
`,n.jsxs(e.p,{children:["Без ",n.jsx(e.code,{children:"onClick"})," и ",n.jsx(e.code,{children:"href"})," это обычный ",n.jsx(e.code,{children:"<span>"}),". С ",n.jsx(e.code,{children:"onClick"})," это ",n.jsx(e.code,{children:"<button>"}),", с ",n.jsx(e.code,{children:"href"})," — ",n.jsx(e.code,{children:"<a>"})," (",n.jsx(e.code,{children:"target"}),", ",n.jsx(e.code,{children:"rel"}),", ",n.jsx(e.code,{children:"download"})," как у ссылки; ",n.jsx(e.code,{children:"disabled"})," гасит и кнопку, и ссылку): плашка сжимается под пальцем и получает зону нажатия 44 px. Ваши обработчики указателя работают вместе с нажатием, ",n.jsx(e.code,{children:"ref"})," и остальные атрибуты попадают на корневой элемент."]}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(i,{of:l}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Props"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Size=24px"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"size={24}"}),", IM-14 B, высота 24"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Size=28px"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"size={28}"}),", IM-16 B, высота 28"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Background=Dark"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:'variant="dark"'}),", ",n.jsx(e.code,{children:"badge/bg/default"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Background=Light"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:'variant="light"'}),", ",n.jsx(e.code,{children:"badge/bg/light"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Left icon / Right icon"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"iconLeft"})," / ",n.jsx(e.code,{children:"iconRight"}),": ",n.jsx(e.code,{children:"true"})," рисует стрелку Figma, узел рисует свою иконку 12 px"]})]})]})]}),`
`,n.jsxs(e.p,{children:["Обводка 0.5 px ",n.jsx(e.code,{children:"badge/border/default"}),", размытие фона ",n.jsx(e.code,{children:"blur/bg-8"}),", текст ",n.jsx(e.code,{children:"badge/text/default"}),", иконки ",n.jsx(e.code,{children:"icon/inverse/constant/primary"}),": они не меняются в тёмной теме, плашка всегда лежит на фото."]}),`
`,n.jsx(e.h2,{id:"нажатие",children:"Нажатие"}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нажатие"})," (только у кнопки): плашка сжимается до 0.95 с первого касания (100 мс) и возвращается за 240 мс. Статичная плашка не двигается."]}),`
`,n.jsxs(e.li,{children:["CSS-переходы: можно прервать. Двигается только ",n.jsx(e.code,{children:"transform"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," без сжатия."]}),`
`]}),`
`,n.jsx(g,{prefix:"--badge-"}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.p,{children:"Счётчик галереи на обложке (Figma 230:17164)."}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(e.p,{children:"Дата и время слота: тёмное стекло на фото, светлое в форме заказа (Figma 2022:6361, 1648:179509)."}),`
`,n.jsx(i,{of:j}),`
`,n.jsx(e.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"В Figma"}),n.jsx(e.th,{children:"В коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Иконки"}),n.jsx(e.td,{children:"обе — chevron-right 12 px (левая тоже смотрит вправо), слой earth скрыт"}),n.jsxs(e.td,{children:["стрелка по ",n.jsx(e.code,{children:"true"}),", любая иконка узлом"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Подпись"}),n.jsx(e.td,{children:"текстовый слой назван «price»"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"children"}),", любой короткий текст"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Скругление"}),n.jsxs(e.td,{children:["8 px, токена нет (",n.jsx(e.code,{children:"radius/xs"})," 4, ",n.jsx(e.code,{children:"radius/md"})," 12)"]}),n.jsx(e.td,{children:"8 px"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Высота 28"}),n.jsx(e.td,{children:"фиксированная 28 при тексте 16 / 120 %"}),n.jsx(e.td,{children:"28"})]})]})]}),`
`,n.jsx(p,{css:b}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Скругление 8 px (Figma 164:18649)."}),`
`]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Текст плашки читается скринридером как есть. Если плашка нажимается, дай понятное имя: «Все фото», а не «1 из 4»."}),`
`,n.jsxs(e.li,{children:["Белый текст на тёмном и светлом стекле: контраст зависит от фото под ним. Светлое стекло на светлом фото читается хуже: используй ",n.jsx(e.code,{children:"dark"}),", если фото яркое."]}),`
`,n.jsxs(e.li,{children:["Кнопка фокусируется с клавиатуры, кольцо ",n.jsx(e.code,{children:"border/focus"}),"."]}),`
`]})]})}function z(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(d,{...r})}):d(r)}export{z as default};
