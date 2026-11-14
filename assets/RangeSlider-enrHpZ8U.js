import{j as n}from"./iframe-Dr5ib33t.js";import{u as s,M as a,C as r,a as d}from"./blocks-BQDa-jFX.js";import{S as l,P as i,a as c,b as h}from"./RangeSlider.stories-CWdUygAv.js";import{M as p,U as x}from"./DocTables-CsguvFim.js";import{c as m}from"./Tooltip.module-Bmk10jyr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAdrHWJM.js";import"./index-Bc0N6I3Z.js";import"./motion-C-Q-avtg.js";import"./useControllableState-BCXXtwcd.js";import"./Tooltip-CQxfA-vT.js";import"./SwapNumber--J413Mcm.js";import"./tokens-CNIzVYFy.js";const u=`/*
 * slider_price Type=Range, Figma 398:1345. 36 high; track 4 px (slider/bg/track, inner-shadow/inset) from 14 to
 * W − 14; thumb centres run from 20 to W − 20 (the rail); range fill (slider/bg/range, inner-shadow/hairline)
 * between them; thumbs 40 × 28, radius/full, slider/bg/thumb, 1 px border/default inside, shadow/handle.
 * Pressed (Figma): the held thumb has no shadow. Disabled: track and range in their disabled tokens.
 */
.slider {
  --_glide: calc(var(--slider-motion-glide-duration) * var(--motion-scale));
  --_press-in: calc(var(--slider-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--slider-motion-press-out-duration) * var(--motion-scale));
  --_tip-in: calc(var(--slider-motion-tooltip-in-duration) * var(--motion-scale));
  --_tip-out: calc(var(--slider-motion-tooltip-out-duration) * var(--motion-scale));

  position: relative;
  height: 36px;
  touch-action: pan-y; /* a tap on the track is ours, a vertical swipe scrolls the page */
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
.slider[data-disabled] {
  pointer-events: none;
  cursor: default;
}

.track {
  position: absolute;
  top: 16px;
  right: 14px;
  left: 14px;
  height: 4px;
  border-radius: var(--radius-full);
  background: var(--slider-bg-track-default);
  box-shadow: var(--inner-shadow-inset);
}
.slider[data-disabled] .track {
  background: var(--slider-bg-track-disabled);
}

/* thumb centres run across the rail; 100cqw = its width, so positions need no measuring */
.rail {
  position: absolute;
  inset: 0 20px;
  container-type: inline-size;
}

/* the fill spans the rail and is clipped to [from, to]: clip-path, not width, so it moves on the compositor */
.range {
  position: absolute;
  top: 16px;
  right: 0;
  left: 0;
  height: 4px;
  background: var(--slider-bg-range-default);
  box-shadow: var(--inner-shadow-hairline);
  clip-path: inset(0 calc((1 - var(--b)) * 100%) 0 calc(var(--a) * 100%) round var(--radius-full));
  transition: clip-path var(--_glide) var(--slider-motion-glide-easing);
}
.range[data-dragging] {
  transition: none;
}
.slider[data-disabled] .range {
  background: var(--slider-bg-range-disabled);
}

.thumb {
  position: absolute;
  top: 4px;
  left: -20px;
  z-index: 1;
  box-sizing: border-box;
  width: 40px;
  height: 28px;
  border-radius: var(--radius-full);
  background: var(--slider-bg-thumb-default);
  /* the Figma stroke is 1 px inside: an inset ring keeps the 40 × 28 box */
  box-shadow:
    inset 0 0 0 1px var(--color-border-default),
    var(--shadow-handle);
  transform: translateX(calc(var(--p) * 100cqw));
  transition:
    transform var(--_glide) var(--slider-motion-glide-easing),
    box-shadow var(--_press-out) var(--slider-motion-press-easing);
  touch-action: none; /* a thumb never scrolls the page */
  cursor: grab;
  outline: none;
}
/* 44 px high touch target around the 28 px thumb */
.thumb::before {
  content: '';
  position: absolute;
  inset: -8px -2px;
}
.thumb[data-pressed] {
  z-index: 2;
  box-shadow: inset 0 0 0 1px var(--color-border-default);
  transition-duration: var(--_glide), var(--_press-in);
  cursor: grabbing;
}
/* under the finger it follows 1:1: no transform transition */
.thumb[data-dragging] {
  transition:
    transform 0s,
    box-shadow var(--_press-in) var(--slider-motion-press-easing);
}
/* keys: the thumb and the fill move at once, only the tooltip follows on its spring */
.slider[data-instant] .thumb,
.slider[data-instant] .range {
  transition-property: box-shadow;
}
.thumb:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

/* ---------- tooltip: a balloon on a string. The anchor (the tail's tip) follows the thumb on a spring, the swing
   leans about that tip, the pop grows out of it. Anchor and swing are moved by JS, the pop by CSS. ---------- */
.tipAnchor {
  position: absolute;
  bottom: 100%; /* the tail's tip 4 px above the thumb (thumb top is 4) */
  left: 0;
  z-index: 3;
  width: 0;
  pointer-events: none;
  will-change: transform;
}
.tipSwing {
  width: 0;
  transform-origin: 0 100%; /* the tail's tip */
  will-change: transform;
}
.tipPop {
  display: flex;
  width: max-content;
  opacity: 0;
  transform: translateX(-50%) scale(var(--slider-motion-tooltip-from-scale));
  transform-origin: 50% 100%;
  transition:
    transform var(--_tip-out) var(--slider-motion-tooltip-easing),
    opacity var(--_tip-out) var(--slider-motion-tooltip-easing);
}
.tipPop[data-open] {
  opacity: 1;
  transform: translateX(-50%) scale(1);
  transition-duration: var(--_tip-in);
}

/* ---------- reduced motion: nothing slides or grows; the tooltip fades, the spring is off (JS) ---------- */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .thumb,
  :global(:root:not([data-motion='normal'])) .range {
    transition-property: box-shadow;
  }
  :global(:root:not([data-motion='normal'])) .tipPop,
  :global(:root:not([data-motion='normal'])) .tipPop[data-open] {
    transform: translateX(-50%);
    transition-property: opacity;
  }
}
:global(:root[data-motion='reduce']) .thumb,
:global(:root[data-motion='reduce']) .range {
  transition-property: box-shadow;
}
:global(:root[data-motion='reduce']) .tipPop,
:global(:root[data-motion='reduce']) .tipPop[data-open] {
  transform: translateX(-50%);
  transition-property: opacity;
}
`;function o(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:l}),`
`,n.jsx(e.h1,{id:"rangeslider",children:"RangeSlider"}),`
`,n.jsx(e.p,{children:"Выбор диапазона: «от» и «до», например цена в фильтрах. Два ползунка тянутся навстречу друг другу с левого и правого края и после броска едут по инерции. Пока ползунок держат, над ним сумма: подсказка тянется за ним, как шарик на нитке, сумма меняется целиком, мягко, через размытие."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=398-1345",rel:"nofollow",children:"slider_price 398:1345, Type = Range"}),", состояния Default, Pressed, Disabled, свойство Tooltip. Подсказка — компонент ",n.jsx(e.a,{href:"?path=/docs/components-tooltip--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Tooltip"}),"."]}),`
`,n.jsx(r,{of:i}),`
`,n.jsx(d,{of:i}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { RangeSlider } from '@mtravel/ui';

const [price, setPrice] = useState<[number, number]>([3000, 50000]);

<RangeSlider
  min={0}
  max={100000}
  step={500}
  value={price}
  onChange={setPrice}               // каждый новый шаг, пока тянут
  onChangeEnd={loadResults}         // ползунок встал: тут грузим выдачу
  format={(v) => \`\${v.toLocaleString('ru-RU')} ⃀\`}
/>
`})}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Проп"}),n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Что делает"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"min"}),", ",n.jsx(e.code,{children:"max"}),", ",n.jsx(e.code,{children:"step"})]}),n.jsx(e.td,{}),n.jsx(e.td,{children:"диапазон значений, которые приходят, и шаг. Значение прилипает к шагу"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"value"}),", ",n.jsx(e.code,{children:"defaultValue"})]}),n.jsx(e.td,{}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"[от, до]"}),"; без ",n.jsx(e.code,{children:"value"})," слайдер хранит его сам, по умолчанию ",n.jsx(e.code,{children:"[min, max]"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onChange"})}),n.jsx(e.td,{}),n.jsx(e.td,{children:"новый шаг, пока тянут, и после клавиш"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onChangeEnd"})}),n.jsx(e.td,{}),n.jsx(e.td,{children:"ползунок остановился после отпускания (с инерцией — когда доехал)"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"minDistance"})}),n.jsx(e.td,{}),n.jsxs(e.td,{children:["минимальный зазор между ползунками в значениях, по умолчанию ",n.jsx(e.code,{children:"step"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"format"})}),n.jsx(e.td,{children:"Value"}),n.jsx(e.td,{children:"как писать сумму в подсказке и для экранного диктора. По умолчанию «50 000»"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"tooltip"})}),n.jsx(e.td,{children:"Tooltip"}),n.jsxs(e.td,{children:["сумма над ползунком, пока его держат. По умолчанию ",n.jsx(e.code,{children:"true"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"disabled"})}),n.jsx(e.td,{children:"State = Disabled"}),n.jsx(e.td,{children:"серые трек и диапазон, ничего не нажимается"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"labels"})}),n.jsx(e.td,{}),n.jsx(e.td,{children:"имена ползунков для диктора, по умолчанию «От», «До»"})]})]})]}),`
`,n.jsx(e.p,{children:"Слайдер тянется на ширину контейнера, высота 36. Подсказка выходит над ним на 38 px: оставь над слайдером место."}),`
`,n.jsx(e.h2,{id:"состояния",children:"Состояния"}),`
`,n.jsx(r,{of:c}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Pressed"})," — это когда ползунок держат: его тень уходит, он «прижат», над ним появляется сумма."]}),`
`,n.jsx(e.h2,{id:"движение",children:"Движение"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ползунок идёт за пальцем 1:1"})," с того места, где его взяли: он не прыгает центром под палец. Значение под ним прилипает к шагу."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Инерция."})," Отпустили с разгону — ползунок едет дальше с той же скоростью и плавно тормозит: скорость каждую миллисекунду умножается на 0.99, путь примерно скорость × 100 мс. Потом он встаёт на ближайший шаг. Упрётся в край или в другой ползунок — остановится там. Отпустили медленно (палец стоял дольше 45 мс) — инерции нет, ползунок просто доезжает до шага за 240 мс. Новое касание ловит едущий ползунок там, где он сейчас."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Тап по треку"})," двигает ближний ползунок туда же, плавно, и с этого касания его можно сразу тянуть. Когда ползунки стоят друг на друге, ползунок выбирает направление первого движения: влево — «от», вправо — «до»."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нажатие"})," отвечает сразу, на касание: тень ползунка уходит за 100 мс, подсказка вырастает из своего кончика (0.8 → 1, 200 мс, ease-out)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Подсказка — шарик на нитке."})," Кончик догоняет ползунок на пружине (response 200 мс, damping 0.86): на ходу чуть отстаёт, в конце мягко доезжает. Сам пузырь наклоняется назад, против движения, тем сильнее, чем быстрее тянут (0.02° на каждый px/с, не больше 14°). Когда ползунок встал, пузырь выпрямляется на мягкой пружине (damping 0.5) и чуть качается, как шарик. Ось наклона — кончик над ползунком."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Сумма меняется целиком"})," (",n.jsx(e.a,{href:"?path=/docs/components-swapnumber--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"SwapNumber"}),"): старое число уезжает по вертикали, размываясь и угасая, новое въезжает с другой стороны и становится чётким, за 140 мс. Посередине оба мягкие и сливаются, поэтому отдельные цифры не мелькают. Больше — новое снизу, меньше — сверху. Следующая смена начинается, когда предыдущая доехала, а последнее значение показывается всегда: пока ползунок едет, сумма меняется несколько раз в секунду, а не каждый кадр."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Отпустили"})," — сумма видна ещё 400 мс после того, как ползунок встал, и уходит быстрее, чем появилась (150 мс). ",n.jsx(e.code,{children:"onChangeEnd"})," приходит, когда ползунок остановился, а не в момент отпускания."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Клавиатура:"})," стрелки двигают ползунок сразу, без доезда, а подсказка догоняет его на пружине. Если клавишу держат, ползунок не отстаёт."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," нет пружины, наклона, инерции и доезда. Подсказка и сумма меняются прозрачностью, ползунок встаёт на место сразу."]}),`
`]}),`
`,n.jsx(p,{prefix:"--slider-"}),`
`,n.jsx(e.h2,{id:"токены",children:"Токены"}),`
`,n.jsx(x,{css:[u,m]}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.h3,{id:"цена-в-фильтрах",children:"Цена в фильтрах"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Каждый ползунок — ",n.jsx(e.code,{children:'role="slider"'})," со своими ",n.jsx(e.code,{children:"aria-valuemin"})," и ",n.jsx(e.code,{children:"aria-valuemax"})," (ползунки не заходят друг за друга) и ",n.jsx(e.code,{children:"aria-valuetext"})," с суммой."]}),`
`,n.jsx(e.li,{children:"Стрелки — шаг, PageUp и PageDown — десять шагов, Home и End — до края."}),`
`,n.jsxs(e.li,{children:["Фокус с клавиатуры показывает подсказку с суммой, кольцо фокуса — ",n.jsx(e.code,{children:"border/focus"}),"."]}),`
`,n.jsx(e.li,{children:"Ползунок 28 px, а область касания — 44 px по высоте."}),`
`]})]})}function C(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{C as default};
