import{j as n}from"./iframe-DuqTOznb.js";import{u as s,M as a,C as o,a as d}from"./blocks-CaaIEU4k.js";import{S as c,P as t,L as l,C as h}from"./HistoryCard.stories-BJHQUlU1.js";import{M as p,U as x}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./figma-BZstJmpc.js";import"./FullWidthFrame-C5uG5fym.js";import"./SectionHeading-C6jU3Co2.js";import"./cx-2dOUpm6k.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./time-CsMT4GVj.js";import"./Svg-B1-TtxWQ.js";import"./tokens-INIU3VNa.js";const m=`/*
 * HistoryCard (Figma History_card 1208:5450): radius/lg, fill bg/sunken-subtle, padding 12 16 12 12, gap 8.
 * Icon 20 in icon/secondary. Title control/text/default IM-14 M, subtitle control/text/secondary IM-12 R, one line each.
 * Pressed (a proposal, Figma has none): control/bg/pressed and a slight sink.
 */
.root {
  --_press-in: calc(var(--history-card-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--history-card-motion-press-out-duration) * var(--motion-scale));

  position: relative;
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: var(--spacing-sm);
  box-sizing: border-box;
  max-width: 100%;
  min-height: 44px;
  margin: 0;
  padding: var(--spacing-md) var(--spacing-lg) var(--spacing-md) var(--spacing-md);
  border: 0;
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-sunken-subtle);
  color: var(--control-text-default);
  font: inherit;
  text-align: left;
  text-decoration: none;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
  transition:
    transform var(--_press-out) var(--history-card-motion-press-easing),
    background-color var(--_press-out) var(--history-card-motion-press-easing);
}
.root[data-interactive] {
  cursor: pointer;
}
.root[data-pressed] {
  background-color: var(--control-bg-pressed);
  transform: scale(var(--history-card-motion-press-scale));
  transition-duration: var(--_press-in), var(--_press-in);
}
.root:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
/* Reduced motion: no sink, the fill still changes */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .root[data-pressed] {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .root[data-pressed] {
  transform: none;
}

.icon {
  display: flex;
  flex: none;
  color: var(--color-icon-secondary);
}
.info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.title,
.subtitle {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.title {
  padding: 2px 0;
  color: var(--control-text-default);
  font: var(--font-im-14-m);
  letter-spacing: var(--tracking-im-14-m);
}
.subtitle {
  padding-bottom: 2px; /* Figma: the description frame is 16 high around a 14 line */
  color: var(--control-text-secondary);
  font: var(--font-im-12-r);
  letter-spacing: var(--tracking-im-12-r);
}
`;function i(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:c}),`
`,n.jsx(r.h1,{id:"historycard",children:"HistoryCard"}),`
`,n.jsx(r.p,{children:"Недавний поиск: иконка и две строки, например «Казахстан» и «29 мая, 1 участник». Тап повторяет поиск."}),`
`,n.jsxs(r.p,{children:["Figma: ",n.jsx(r.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1208-5450",rel:"nofollow",children:"History_card 1208:5450"}),": один вариант."]}),`
`,n.jsx(o,{of:t}),`
`,n.jsx(d,{of:t}),`
`,n.jsx(r.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { HistoryCard } from '@mtravel/ui';

<HistoryCard title="Казахстан" subtitle="29 мая, 1 участник" onClick={() => repeat(search)} />
`})}),`
`,n.jsxs(r.p,{children:["Карточка сама ссылка (",n.jsx(r.code,{children:"href"}),", ",n.jsx(r.code,{children:"target"}),", ",n.jsx(r.code,{children:"rel"}),") или кнопка (",n.jsx(r.code,{children:"onClick"}),", получает настоящее событие). ",n.jsx(r.code,{children:"ref"}),", ",n.jsx(r.code,{children:"className"}),", ",n.jsx(r.code,{children:"style"})," и остальные атрибуты уходят на корень, обработчики указателя не перезаписываются. Ширина по тексту; в ряду задайте ширину, и длинные строки обрежутся многоточием."]}),`
`,n.jsx(o,{of:l}),`
`,n.jsxs(r.table,{children:[n.jsx(r.thead,{children:n.jsxs(r.tr,{children:[n.jsx(r.th,{children:"Figma"}),n.jsx(r.th,{children:"Проп"})]})}),n.jsxs(r.tbody,{children:[n.jsxs(r.tr,{children:[n.jsxs(r.td,{children:["Icon (clock-nine, ",n.jsx(r.code,{children:"icon/secondary"}),")"]}),n.jsx(r.td,{children:n.jsx(r.code,{children:"icon"})})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:"title"}),n.jsx(r.td,{children:n.jsx(r.code,{children:"title"})})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:"description"}),n.jsx(r.td,{children:n.jsx(r.code,{children:"subtitle"})})]})]})]}),`
`,n.jsx(r.h2,{id:"состояния",children:"Состояния"}),`
`,n.jsxs(r.p,{children:["В Figma Pressed нет. Предложение: фон ",n.jsx(r.code,{children:"control/bg/pressed"})," и сжатие до 0.97 на касание, как у Button."]}),`
`,n.jsx(p,{prefix:"--history-card-"}),`
`,n.jsx(r.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(r.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsx(r.p,{children:"Нет."}),`
`,n.jsx(x,{css:m}),`
`,n.jsx(r.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"Высота не меньше 44 px; в Figma она 60."}),`
`,n.jsx(r.li,{children:"Имя кнопки — оба текста: «Казахстан 29 мая, 1 участник»."}),`
`,n.jsxs(r.li,{children:["Фокус с клавиатуры обводится рамкой ",n.jsx(r.code,{children:"border/focus"}),"."]}),`
`]})]})}function I(e={}){const{wrapper:r}={...s(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(i,{...e})}):i(e)}export{I as default};
