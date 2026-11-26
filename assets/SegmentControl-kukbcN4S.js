import{j as n}from"./iframe-DyD5Yel4.js";import{u as i,M as d,C as r,a}from"./blocks-CcI75u3-.js";import{S as l,P as o,a as c,W as h,b as x,I as m}from"./SegmentControl.stories-BJJKllEm.js";import{M as p,U as j}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./cx-2dOUpm6k.js";import"./mergeRefs-BZQLIp5G.js";import"./useControllableState-D9cJCl43.js";import"./useInstantAfterKey-D3FdC2PV.js";import"./PaymentPlanSummary-BUJW-MXc.js";import"./places-CYDz-5dl.js";import"./Svg-B7GM2ZFd.js";import"./general-CSE0kF9v.js";import"./paths-BjPgyxdS.js";import"./tokens-Bc2_NrJ2.js";const u=`/*
 * Segment control (Figma 786:1127): grey track (control/bg/default, inner-shadow/hairline), 2 px padding and gaps,
 * equal tabs, the chosen one on a white thumb with shadow/raised. The thumb's corner is the track's minus the
 * 2 px padding (Figma 10 / 14 are exactly that), so the two curves stay concentric.
 * The thumb is counter/bg/button/default, as in Figma; the icons are control/icon/secondary, the labels control/text/default.
 */
.root {
  --_h: 32px;
  --_r: var(--radius-md);
  --_pad: 2px;
  --_slide: calc(var(--segment-control-motion-slide-duration) * var(--motion-scale));
  --_press-in: calc(var(--segment-control-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--segment-control-motion-press-out-duration) * var(--motion-scale));

  position: relative;
  display: grid;
  grid-template-columns: repeat(var(--n), minmax(0, 1fr));
  gap: var(--_pad);
  width: 100%;
  min-width: 0;
  padding: var(--_pad);
  box-sizing: border-box;
  border-radius: var(--_r);
  background-color: var(--control-bg-default);
  box-shadow: var(--inner-shadow-hairline);
  isolation: isolate;
  touch-action: pan-y; /* a horizontal drag moves the thumb, a vertical one still scrolls the page */
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}
.root[data-size='lg'] {
  --_h: 40px;
  --_r: var(--radius-lg);
}

/* the thumb: one tab wide, moved by whole tabs (its own width + the gap) */
.thumb {
  position: absolute;
  top: var(--_pad);
  left: var(--_pad);
  z-index: 0;
  width: calc((100% - 2 * var(--_pad) - (var(--n) - 1) * var(--_pad)) / var(--n));
  height: var(--_h);
  transform: translateX(calc(var(--i) * (100% + var(--_pad))));
  transition: transform var(--_slide) var(--segment-control-motion-slide-easing);
  pointer-events: none;
}
.thumbFill {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: calc(var(--_r) - var(--_pad));
  background-color: var(--counter-bg-button-default);
  box-shadow: var(--shadow-raised);
  transition: transform var(--_press-out) var(--segment-control-motion-press-easing);
}
.thumbFill[data-pressed] {
  transform: scale(var(--segment-control-motion-press-scale));
  transition-duration: var(--_press-in);
}

.tab {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px; /* Figma Content gap 6 — no token (spacing/xs 4, spacing/sm 8) */
  min-width: 0;
  height: var(--_h);
  margin: 0;
  padding: 0 var(--spacing-xs); /* Figma: none; 4 px keeps a cut label off the thumb edge */
  border: 0;
  border-radius: calc(var(--_r) - var(--_pad));
  background: none;
  color: var(--control-text-default);
  font: var(--font-im-14-b);
  letter-spacing: var(--tracking-im-14-b);
  cursor: pointer;
  outline: none;
  -webkit-touch-callout: none;
  transition: opacity var(--_press-out) var(--segment-control-motion-press-easing);
}
/* touch target ≥ 44 px high: the tabs touch each other sideways, so only the vertical slop (the track is 2 px padded) */
.tab::before {
  content: '';
  position: absolute;
  inset: min(0px, calc((100% - 44px) / 2)) 0;
}
.tab[data-pressed]:not([data-active]) {
  opacity: var(--segment-control-motion-press-opacity);
  transition-duration: var(--_press-in);
}
.tab:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: -2px;
}
.icon {
  display: grid;
  flex: none;
  place-items: center;
  width: 16px;
  height: 16px;
  color: var(--control-icon-secondary); /* Figma Icon left: control/icon/secondary, active and not */
}
.icon > svg {
  display: block;
}
.label {
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.root[data-disabled] .tab {
  color: var(--control-text-disabled);
  cursor: default;
}
.root[data-disabled] .icon {
  color: var(--control-icon-disabled);
}
.root[data-disabled] .thumbFill {
  box-shadow: none;
}

/* keyboard: the thumb is just there */
.root[data-instant] .thumb {
  transition: none;
}

/* reduced motion: no slide and no squeeze; the pressed tab still dims (colour, not movement) */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .thumb {
    transition: none;
  }
  :global(:root:not([data-motion='normal'])) .thumbFill[data-pressed] {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .thumb {
  transition: none;
}
:global(:root[data-motion='reduce']) .thumbFill[data-pressed] {
  transform: none;
}
`;function s(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:l}),`
`,n.jsx(e.h1,{id:"segmentcontrol",children:"SegmentControl"}),`
`,n.jsx(e.p,{children:"Переключатель из 2–5 равных вкладок на сером треке. Выбранная стоит на белой плашке. Подходит, чтобы переключать вид или фильтр одного списка: «Все / Групповые / Частные»."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=786-1127",rel:"nofollow",children:"segment_control 786:1127"})," (Size Medium | Large × Quantity 2–5) и вкладка ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=786-1070",rel:"nofollow",children:"segment_control_tab 786:1070"})," (Active, Text, Icon, Size)."]}),`
`,n.jsx(r,{of:o}),`
`,n.jsx(a,{of:o}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { SegmentControl } from '@mtravel/ui';

<SegmentControl
  aria-label="Формат экскурсии"
  value={format}
  onValueChange={setFormat}
  items={[
    { value: 'all', label: 'Все' },
    { value: 'group', label: 'Групповые' },
    { value: 'private', label: 'Частные' },
  ]}
/>
`})}),`
`,n.jsxs(e.p,{children:["Размер: ",n.jsx(e.code,{children:'size="md"'})," (Figma Medium, по умолчанию) или ",n.jsx(e.code,{children:'size="lg"'})," (Large). Для главных фильтров на экране берите ",n.jsx(e.code,{children:"lg"}),"."]}),`
`,n.jsxs(e.p,{children:["У вкладки может быть иконка 16 px (",n.jsx(e.code,{children:"icon"}),"). Для вкладки с одной иконкой задайте ",n.jsx(e.code,{children:"aria-label"}),"."]}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(r,{of:c}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{}),n.jsxs(e.th,{children:["Medium (",n.jsx(e.code,{children:"md"}),")"]}),n.jsxs(e.th,{children:["Large (",n.jsx(e.code,{children:"lg"}),")"]})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Высота вкладки"}),n.jsx(e.td,{children:"32"}),n.jsx(e.td,{children:"40"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Зона тапа"}),n.jsx(e.td,{children:"44 px по высоте"}),n.jsx(e.td,{children:"44 px по высоте"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Скругление трека"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/md"})," (12)"]}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," (16)"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Скругление плашки"}),n.jsx(e.td,{children:"трек − 2 px = 10"}),n.jsx(e.td,{children:"трек − 2 px = 14"})]})]})]}),`
`,n.jsxs(e.p,{children:["Трек: ",n.jsx(e.code,{children:"control/bg/default"}),", ",n.jsx(e.code,{children:"inner-shadow/hairline"}),", отступ и зазор 2 px. Плашка: ",n.jsx(e.code,{children:"counter/bg/button/default"}),", ",n.jsx(e.code,{children:"shadow/raised"}),". Текст: IM-14 B ",n.jsx(e.code,{children:"control/text/default"}),", иконки 16 px ",n.jsx(e.code,{children:"control/icon/secondary"})," (и у выбранной вкладки)."]}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Тап:"})," плашка переезжает к вкладке за 300 мс по кривой шторок iOS: быстрый старт, долгая мягкая посадка. Если тапнуть другую вкладку, пока плашка едет, она развернётся с текущего места."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нажатие на другую вкладку:"})," её подпись сразу тускнеет до 0.5, плашка едет на отпускании. Если увести палец с вкладки, ничего не произойдёт."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нажатие на выбранную вкладку:"})," плашка чуть сжимается под пальцем (0.95), и её можно тащить: она перескакивает с вкладки на вкладку, а выбор срабатывает на отпускании, как в iOS. Вертикальный свайп по-прежнему прокручивает страницу."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Клавиши"})," ← → Home End переносят выбор сразу, без анимации."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," плашка встаёт на место сразу, без сжатия. Нажатая вкладка по-прежнему тускнеет, потому что это смена цвета, а не движение."]}),`
`]}),`
`,n.jsx(p,{prefix:"--segment-control-"}),`
`,n.jsx(e.h2,{id:"переключение-списка",children:"Переключение списка"}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.p,{children:["Это одна группа: ",n.jsx(e.code,{children:'role="radiogroup"'}),", у вкладок ",n.jsx(e.code,{children:'role="radio"'})," и ",n.jsx(e.code,{children:"aria-checked"}),". Фокус табом попадает только на выбранную вкладку, стрелки двигают выбор. Вкладки 32 и 40 px выше своей видимой части: невидимая зона тапа (",n.jsx(e.code,{children:"::before"}),") доводит их до 44 px по высоте."]}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Рассрочка M+."})," День платежа: четыре вкладки ",n.jsx(e.code,{children:"md"})," (1, 5, 10, 15 число), под ними сумма первого платежа и PaymentPlanSummary. Где в дизайне: «Оформление заказа», M+ Graph 1421:87104 (x4, по одному на день)."]}),`
`,n.jsx(r,{of:m}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds-и-отличия-от-figma",children:"Без токенов в DS и отличия от Figma"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"В Figma"}),n.jsx(e.th,{children:"В коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Фон плашки"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"counter/bg/button/default"})," (токен счётчика)"]}),n.jsxs(e.td,{children:["тот же токен; лучше завести ",n.jsx(e.code,{children:"segment-control/bg/thumb"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Цвет иконок"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"control/icon/secondary"}),"; у иконок вкладок в Figma ссылки на старые переменные ",n.jsx(e.code,{children:"text/muted"})," и ",n.jsx(e.code,{children:"static/light"})]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/icon/secondary"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Цвет текста"}),n.jsxs(e.td,{children:["у части невыбранных вкладок старый ",n.jsx(e.code,{children:"text/default"})," #0E0F11"]}),n.jsxs(e.td,{children:["везде ",n.jsx(e.code,{children:"control/text/default"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Зазор иконка–текст"}),n.jsxs(e.td,{children:["6 px, токена нет (",n.jsx(e.code,{children:"spacing/xs"})," 4, ",n.jsx(e.code,{children:"spacing/sm"})," 8)"]}),n.jsx(e.td,{children:"6 px"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Скругление трека Large"}),n.jsxs(e.td,{children:["переменная ",n.jsx(e.code,{children:"radius/m"})," (16) из старой коллекции"]}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," (16)"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Нажатие, перетаскивание, Disabled"}),n.jsx(e.td,{children:"нет"}),n.jsx(e.td,{children:"сделаны, Disabled — нужен макет"})]})]})]}),`
`,n.jsx(j,{css:u})]})}function E(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{E as default};
