import{j as n}from"./iframe-Dr5ib33t.js";import{u as o,M as l,C as t,a as d}from"./blocks-BQDa-jFX.js";import{C as a,P as s,S as c}from"./Counter.stories-DjeR9CZp.js";import{Variants as h}from"./CounterButton.stories-GcrAkCRp.js";import{M as x,U as u}from"./DocTables-CsguvFim.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAdrHWJM.js";import"./index-Bc0N6I3Z.js";import"./PassengerSheet-BULJYyGi.js";import"./useControllableState-BCXXtwcd.js";import"./CounterButton-CF2kbXIF.js";import"./index-CU5QHq_h.js";import"./motion-C-Q-avtg.js";import"./RollingNumber-sUZvUyU1.js";import"./tokens-CNIzVYFy.js";const p=`/* counter, Figma 535:137: [− 44] [value ≥ 28 × 44] [+ 44] on a full-radius pill. */
.root {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-full);
  background: var(--control-bg-default);
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
}

.value {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  height: 44px;
  overflow: hidden;
  font: var(--font-im-16-b);
  letter-spacing: var(--tracking-im-16-b);
  color: var(--control-text-default);
  transition: color calc(var(--counter-motion-state-duration) * var(--motion-scale)) var(--counter-motion-state-easing);
  /* Soft top and bottom edges: a rolling digit fades out instead of being cut by the pill. */
  -webkit-mask-image: linear-gradient(to bottom, transparent, #000 30%, #000 70%, transparent);
  mask-image: linear-gradient(to bottom, transparent, #000 30%, #000 70%, transparent);
}

.root[data-disabled] .value {
  color: var(--control-text-disabled);
}
`,j=`/* button_counter, Figma 502:9109. 44 × 44 hit area, 36 px circle (4 px inset), 20 px icon. */
.button {
  --_press: calc(var(--counter-motion-press-out-duration) * var(--motion-scale));
  --_state: calc(var(--counter-motion-state-duration) * var(--motion-scale));

  position: relative;
  display: grid;
  place-items: center;
  flex: none;
  width: 44px;
  height: 44px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: var(--radius-full);
  background: none;
  color: var(--control-icon-secondary);
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
  transition: color var(--_state) var(--counter-motion-state-easing);
}

.circle {
  position: absolute;
  inset: 4px;
  border-radius: var(--radius-full);
  background-color: var(--counter-bg-button-default);
  box-shadow: var(--shadow-raised);
  transition:
    transform var(--_press) var(--counter-motion-press-easing),
    background-color var(--_state) var(--counter-motion-state-easing);
}

.icon {
  position: relative;
  display: block;
}

/* Pressed (Figma State=Pressed): the circle goes 36 → 32, the icon keeps its size. Fast in, slower out. */
.button[data-pressed] .circle {
  transform: scale(var(--counter-motion-press-scale));
  transition-duration: calc(var(--counter-motion-press-in-duration) * var(--motion-scale)), var(--_state);
}

/* Disabled (Figma State=Disabled, and the counter's Min / Max). */
.button[data-disabled] {
  color: var(--control-icon-disabled);
  cursor: default;
}
.button[data-disabled] .circle {
  background-color: var(--counter-bg-button-disabled);
}

.button:focus-visible .circle {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
`,m=`.root {
  display: inline-flex;
  position: relative;
  /*
   * Inter Mbank has no OpenType features at all (no GSUB, so no tnum): digits keep their own widths
   * (1 = 7.1 px, 0 = 10.1 px at IM-16 B). The slot width is animated instead of jumping, see Slot.
   * tabular-nums stays for a future font build that has it.
   */
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.digits {
  display: inline-flex;
}

/* flex: the digit sits exactly at the top-left of the slot, like the absolutely placed ghost, so the
   hand-over from the digit to its ghost does not shift by a sub-pixel baseline offset */
.slot {
  position: relative;
  display: inline-flex;
}

.char,
.ghost {
  display: inline-block;
  /* a plain space in the value («50 000 ⃀») is a slot of its own: keep its width instead of collapsing it */
  white-space: pre;
  /* drum: a digit turned past 90° shows its back — hide it */
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* The digit that is leaving. Same box as .char, on top of it; removed when its animation ends. */
.ghost {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}

.srOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
`;function r(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:a}),`
`,n.jsx(e.h1,{id:"counter",children:"Counter"}),`
`,n.jsx(e.p,{children:"Счётчик количества: «−», значение, «+». Пассажиры, гости, билеты, номера."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=535-137",rel:"nofollow",children:"counter 535:137"}),` ·
`,n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=502-9109",rel:"nofollow",children:"button_counter 502:9109"}),` ·
референс анимации: `,n.jsx(e.code,{children:"excursions-prototype/Counter animation.mp4"})]}),`
`,n.jsx(t,{of:s}),`
`,n.jsx(d,{of:s}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Counter } from '@mtravel/ui';

// неконтролируемый
<Counter aria-label="Взрослые" defaultValue={1} min={1} max={9} />

// контролируемый: лимиты считает экран
<Counter
  aria-label="Дети"
  value={children}
  onChange={setChildren}
  min={0}
  max={9 - adults}
/>
`})}),`
`,n.jsx(e.h2,{id:"состояния",children:"Состояния"}),`
`,n.jsx(t,{of:c}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma State"}),n.jsx(e.th,{children:"Когда"}),n.jsx(e.th,{children:"Что происходит"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Default"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"min < value < max"})}),n.jsx(e.td,{children:"обе кнопки активны"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Min"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"value <= min"})}),n.jsxs(e.td,{children:["«−» выглядит disabled, но остаётся в фокусе (",n.jsx(e.code,{children:"aria-disabled"}),")"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Max"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"value >= max"})}),n.jsx(e.td,{children:"то же для «+»"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Disabled"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"disabled"})}),n.jsxs(e.td,{children:["обе кнопки ",n.jsx(e.code,{children:"disabled"}),", значение ",n.jsx(e.code,{children:"control/text/disabled"})]})]})]})]}),`
`,n.jsxs(e.p,{children:["Состояние выставляется само из ",n.jsx(e.code,{children:"value"}),", ",n.jsx(e.code,{children:"min"}),", ",n.jsx(e.code,{children:"max"}),", отдельного пропа нет. На корне есть ",n.jsx(e.code,{children:'data-state="default | min | max | disabled"'})," для тестов."]}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.p,{children:["Включите в тулбаре ",n.jsx(e.strong,{children:"Motion → Замедление ×4"}),", чтобы рассмотреть анимации по кадрам."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"1. Нажатие на кнопку"})," (CSS transition, ",n.jsx(e.code,{children:"CounterButton.module.css"}),")"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Реакция начинается на ",n.jsx(e.code,{children:"pointerdown"}),", а не на отпускание: белый круг сжимается 36 → 32 px (Figma State=Pressed), иконка остаётся 20 px."]}),`
`,n.jsx(e.li,{children:"Нажатие быстрое (100 мс), отпускание мягче (240 мс), кривая strong ease-out. Цвета при переходе в disabled меняются за 160 мс."}),`
`,n.jsx(e.li,{children:"Это transition, а не keyframes: короткий тап разворачивает анимацию с того места, где круг сейчас. Если увести палец с кнопки, нажатие отменяется, как у нативной кнопки."}),`
`,n.jsxs(e.li,{children:["Значение меняется на ",n.jsx(e.code,{children:"click"})," (отпускание), как у нативного степпера."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"2. Смена цифры"})," (Web Animations API, ",n.jsx(e.code,{children:"RollingNumber.tsx"}),")"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"При увеличении старая цифра уходит вверх, новая приходит снизу; при уменьшении наоборот."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Двигаются только изменившиеся разряды: 19 → 20 крутит оба, 20 → 21 только последний."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Барабан + blur — утверждённый вариант."})," Цифры стоят на маленьком цилиндре радиусом 20 px и переворачиваются через верхний или нижний край поля, уходя в глубину. Пропа для выбора эффекта у Counter нет, это стандарт DS. В ",n.jsx(e.code,{children:"RollingNumber"})," остался ",n.jsx(e.code,{children:'effect="slide"'})," (прямой сдвиг) на будущее, например для цен."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Размытие в движении"}),": в центре цифра резкая, к краю размывается до 2 px. Скорость читается лучше, а две цифры сливаются в одно движение, а не выглядят двумя отдельными объектами."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Новая цифра доворачивается за 300 мс, старая уходит за 260 мс. Кривая ease-out quart без перелёта: большая часть пути проходит за первые ~100 мс, остальное время уходит на мягкую посадку."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Быстрые действия анимация не тормозит. Значение, ",n.jsx(e.code,{children:"onChange"})," и озвучка обновляются сразу по тапу. Анимация только догоняет значение и прерывается в любой момент: новое значение стартует с того положения, где цифра сейчас, поэтому частые тапы и автоповтор раскручивают барабан, а не перезапускают его."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Разворот"}),": «+» и сразу «−» (1 → 2 → 1) не прокручивает вторую «1» с края. Уходящая «1» возвращается с того места, где она сейчас, а «2» уезжает туда, откуда пришла."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Ширина разряда меряется в момент смены, а не берётся из кэша: веб-шрифт может догрузиться после первой отрисовки и поменять ширины цифр. Новый разряд (99 → 100) въезжает с нулевой ширины, а уходящий сжимается до нуля и не удаляется посреди анимации."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Размываются только цифра 10 × 19 px и её «призрак», так что даже на слабом Android это дёшево. Если нужно, ",n.jsx(e.code,{children:"--counter-motion-roll-blur: 0px"})," выключает размытие."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Края поля мягкие за счёт маски, поэтому край плашки цифру не обрезает."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["В Inter Mbank нет моноширинных цифр (в шрифте нет OpenType-фич, ",n.jsx(e.code,{children:"tnum"})," не работает): «1» шириной 7 px, «0» 10 px. Поэтому ширина разряда плавно подстраивается за то же время, а не прыгает. В одноразрядном счётчике цифра стоит в поле шириной 28 px, и кнопки не сдвигаются."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Reduced motion: вместо движения короткая смена прозрачности на месте."}),`
`]}),`
`]}),`
`,n.jsx(x,{prefix:"--counter-"}),`
`,n.jsx(e.h2,{id:"логика",children:"Логика"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Значение всегда в пределах ",n.jsx(e.code,{children:"min…max"}),", ",n.jsx(e.code,{children:"onChange"})," получает уже обрезанное значение и не вызывается, если упёрлись в лимит."]}),`
`,n.jsxs(e.li,{children:["Удержание кнопки повторяет шаг, как ",n.jsx(e.code,{children:"UIStepper"})," на iOS: первый повтор через 400 мс, дальше каждые 110 мс. На лимите повтор останавливается, ",n.jsx(e.code,{children:"autoRepeat={false}"})," его выключает."]}),`
`,n.jsx(e.li,{children:"Клавиатура на группе: ↑ / → прибавляют, ↓ / ← убавляют, Home и End прыгают к лимитам."}),`
`,n.jsxs(e.li,{children:["Долгое нажатие не вызывает выделение текста и системное меню (",n.jsx(e.code,{children:"user-select"}),", ",n.jsx(e.code,{children:"-webkit-touch-callout"}),", ",n.jsx(e.code,{children:"contextmenu"}),"). ",n.jsx(e.code,{children:"touch-action: manipulation"})," убирает задержку двойного тапа."]}),`
`]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Корень ",n.jsx(e.code,{children:'role="group"'})," с ",n.jsx(e.code,{children:"aria-label"})," (например «Взрослые»), у кнопок свои имена через ",n.jsx(e.code,{children:"decrementLabel"})," и ",n.jsx(e.code,{children:"incrementLabel"}),"."]}),`
`,n.jsxs(e.li,{children:["Значение лежит в ",n.jsx(e.code,{children:'<output aria-live="polite">'}),", VoiceOver и TalkBack читают новое число после шага."]}),`
`,n.jsxs(e.li,{children:["На лимите кнопка ",n.jsx(e.code,{children:"aria-disabled"}),", а не ",n.jsx(e.code,{children:"disabled"}),": фокус не выпадает на ",n.jsx(e.code,{children:"<body>"}),"."]}),`
`,n.jsxs(e.li,{children:["Зона нажатия 44 × 44, видимый круг 36. Фокус с клавиатуры показывается кольцом ",n.jsx(e.code,{children:"border/focus"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"токены",children:"Токены"}),`
`,n.jsx(e.p,{children:"Собраны из CSS компонента, поэтому таблица всегда совпадает с кодом: цепочка до примитива и имя переменной в Figma."}),`
`,n.jsx(u,{css:[p,j,m]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"counter/bg/halo/pressed"})," есть в Figma, но в компоненте ореол сейчас без заливки, поэтому в коде он не используется."]})]})}function B(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{B as default};
