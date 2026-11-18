import{j as n}from"./iframe-DuqTOznb.js";import{u as d,M as o,C as s,a}from"./blocks-CaaIEU4k.js";import{P as c,a as r,S as l,F as h,C as x}from"./ProductTabs.stories-hWJ0Uq3c.js";import{M as j,U as p}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./usePress-DgMUH5X0.js";import"./cx-2dOUpm6k.js";import"./Tabs-CV44PryX.js";import"./motion-C-Q-avtg.js";import"./useControllableState-QyUXWn2y.js";import"./mergeRefs-BPT53vMC.js";import"./Skeleton-D5GPHumj.js";import"./product-Bqt1iP7w.js";import"./Svg-B1-TtxWQ.js";import"./tokens-INIU3VNa.js";const u=`/*
 * ProductTab, Figma tabs_product 1005:6901 (page Controls): Type × Selected?. Tile 52, gap 8, label IM-12 S, tab width 84
 * (grows to share the row). The tile colours exist as tokens although Figma paints them raw: white 10 % = bg/constant/glass-subtle,
 * white = bg/constant/solid.
 */
.tab {
  --_press-in: calc(var(--product-tab-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--product-tab-motion-press-out-duration) * var(--motion-scale));
  --_state: calc(var(--product-tab-motion-state-duration) * var(--motion-scale));

  position: relative;
  display: flex;
  flex: 1 0 84px; /* Figma: 84 fixed; in the home row it fills (92.25 of 4 on 393) */
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: var(--control-text-inverse);
  font: var(--font-im-12-s);
  letter-spacing: var(--tracking-im-12-s);
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
}
.tab:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
  border-radius: var(--radius-lg);
}
.tab[data-disabled] {
  cursor: default;
  opacity: 0.5; /* no token: Figma has no disabled product tab */
}

/* the tile: 52 × 52, see-through; the solid layer and the white glyph swap places by opacity */
.tile {
  position: relative;
  display: block;
  flex: none;
  width: 52px;
  height: 52px;
  border-radius: var(--radius-lg); /* Figma 16.71, nearest token radius/lg 16 */
  background-color: var(--color-bg-constant-glass-subtle);
  transition: transform var(--_press-out) var(--product-tab-motion-press-easing);
}
.tab[data-pressed] .tile,
.tab:focus-visible:active:not([data-disabled]) .tile {
  transform: scale(var(--product-tab-motion-press-scale));
  transition-duration: var(--_press-in);
}

.glyph {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: var(--control-icon-inverse);
  opacity: 1;
  transition: opacity var(--_state) var(--motion-ease-standard);
}
.glyph > svg {
  display: block;
}

/* the chosen tile: solid white with the glyph cut out (alpha mask from the same path) */
.solid {
  position: absolute;
  inset: 0;
  background-color: var(--color-bg-constant-solid);
  -webkit-mask: var(--_cut) center / 100% 100% no-repeat;
  mask: var(--_cut) center / 100% 100% no-repeat;
  opacity: 0;
  transition: opacity var(--_state) var(--motion-ease-standard);
}
.tab[data-selected] .solid {
  opacity: 1;
}
.tab[data-selected] .glyph {
  opacity: 0;
}

.label {
  display: block;
  max-width: 100%;
  /* Figma: the label has no text style (Inter Mbank SemiBold 12, line height Auto = 15 px) */
  line-height: 15px; /* no token: Figma 1005:6906 */
  text-align: center;
  overflow-wrap: anywhere;
}

/* reduced motion: no scale, the cross-fade stays */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .tab[data-pressed] .tile,
  :global(:root:not([data-motion='normal'])) .tab:focus-visible:active:not([data-disabled]) .tile {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .tab[data-pressed] .tile,
:global(:root[data-motion='reduce']) .tab:focus-visible:active:not([data-disabled]) .tile {
  transform: none;
}
`;function i(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:c}),`
`,n.jsx(e.h1,{id:"producttabs",children:"ProductTabs"}),`
`,n.jsxs(e.p,{children:["Переключатель продуктов в шапке главной: Авиабилеты, Туры, Отели, Выходные (и Экскурсии). Каждый продукт это плитка 52 px со значком и подписью под ней. Нужен для разделов приложения, внутри экрана выбор делают ",n.jsx(e.a,{href:"?path=/docs/components-tab--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Tab"}),"."]}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1005-6901",rel:"nofollow",children:"tabs_product 1005:6901"}),": Type Avia | Tour | Hotel | Excursions | Weekend × Selected? False | True. Подписи и значки белые: компонент рассчитан на тёмную или брендовую шапку."]}),`
`,n.jsx(s,{of:r}),`
`,n.jsx(a,{of:r}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ProductTabs } from '@mtravel/ui';

<ProductTabs value={product} onValueChange={setProduct} aria-label="Что ищем"
  kinds={['avia', 'tour', 'hotel', 'weekend']} />
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"ProductTab"})," можно ставить и по одному, в ",n.jsx(e.code,{children:"<ProductTabs>"})," как ",n.jsx(e.code,{children:"children"}),": ",n.jsx(e.code,{children:'<ProductTab kind="avia" />'}),". Значение таба по умолчанию равно ",n.jsx(e.code,{children:"kind"}),"."]}),`
`,n.jsxs(e.p,{children:["В коде это тот же tablist, что у ",n.jsx(e.a,{href:"?path=/docs/components-tab--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Tab"}),": ",n.jsx(e.code,{children:'role="tablist"'}),", стрелки, одна остановка в порядке Tab. Продукт меняет весь экран ниже, поэтому это tablist. Если каждый продукт открывает отдельный экран по ссылке, ряд оформляют как ",n.jsx(e.code,{children:"nav"})," со ссылками, это отдельный случай."]}),`
`,n.jsx(e.h2,{id:"состояния",children:"Состояния"}),`
`,n.jsx(s,{of:l}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Плитка"}),n.jsx(e.th,{children:"Значок"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Selected?=False"}),n.jsxs(e.td,{children:["прозрачная белая 10 % (",n.jsx(e.code,{children:"bg/constant/glass-subtle"}),")"]}),n.jsxs(e.td,{children:["белый (",n.jsx(e.code,{children:"control/icon/inverse"}),")"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Selected?=True"}),n.jsxs(e.td,{children:["сплошная белая (",n.jsx(e.code,{children:"bg/constant/solid"}),")"]}),n.jsx(e.td,{children:"вырезан из плитки, сквозь него видна шапка"})]})]})]}),`
`,n.jsx(e.p,{children:"В Figma плитка и значок выбранного продукта это булева операция Subtract: белая плитка с дырой в форме значка. В коде то же самое: плитка с маской из того же контура, поэтому на градиенте шапки значок в цвет шапки, а не в «серый»."}),`
`,n.jsxs(e.p,{children:["Подпись IM-12 S, ",n.jsx(e.code,{children:"control/text/inverse"}),". Таб в Figma шириной 84; на главной их четыре и они делят ряд поровну (92.25 на 393 при отступах 12). Пятый продукт уже не помещается: ряд прокручивается, а не сжимает подписи."]}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Prop"}),n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Что делает"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"kind"})}),n.jsx(e.td,{children:"Type"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"avia"}),", ",n.jsx(e.code,{children:"tour"}),", ",n.jsx(e.code,{children:"hotel"}),", ",n.jsx(e.code,{children:"excursions"}),", ",n.jsx(e.code,{children:"weekend"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"selected"})}),n.jsx(e.td,{children:"Selected?"}),n.jsxs(e.td,{children:["только для ",n.jsx(e.code,{children:"ProductTab"})," вне ряда"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"children"})}),n.jsx(e.td,{children:"текст"}),n.jsx(e.td,{children:"подпись, по умолчанию название продукта"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"kinds"})," (у ряда)"]}),n.jsx(e.td,{children:"—"}),n.jsx(e.td,{children:"какие продукты и в каком порядке, по умолчанию четыре с главной"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"value"}),", ",n.jsx(e.code,{children:"onValueChange"}),", ",n.jsx(e.code,{children:"inset"})]}),n.jsx(e.td,{children:"—"}),n.jsxs(e.td,{children:["как у ",n.jsx(e.code,{children:"Tabs"}),"; ",n.jsx(e.code,{children:"inset"})," по умолчанию 12"]})]})]})]}),`
`,n.jsxs(e.p,{children:["Значки лежат как SVG в ",n.jsx(e.code,{children:"components/ProductTabs/assets/"})," (белая заливка, как в Figma) и как React-компоненты ",n.jsx(e.code,{children:"ProductIcon"})," в ",n.jsx(e.code,{children:"icons/nav.tsx"}),"."]}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.p,{children:"Шапка главной: логотип, под ним ряд продуктов, выбраны «Выходные» (Figma «Главная» → Homepage 421:34599, Products row)."}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нажатие:"})," плитка сжимается до 0.94 сразу, возвращается за 240 мс."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Выбор:"})," полупрозрачная плитка и белый значок плавно меняются на белую плитку с вырезом: два слоя, меняется только прозрачность, 160 мс."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," без сжатия, прозрачность меняется."]}),`
`]}),`
`,n.jsx(j,{prefix:"--product-tab-"}),`
`,n.jsx(p,{css:u}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds-и-проблемы-figma",children:"Без токенов в DS и проблемы Figma"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"В Figma"}),n.jsx(e.th,{children:"В коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Цвета плитки и значка"}),n.jsx(e.td,{children:"белый 10 % и белый без переменных"}),n.jsxs(e.td,{children:["подобраны равные токены ",n.jsx(e.code,{children:"bg/constant/glass-subtle"}),", ",n.jsx(e.code,{children:"bg/constant/solid"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Радиус плитки"}),n.jsx(e.td,{children:"16.71 (без токена)"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," 16"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Подпись"}),n.jsx(e.td,{children:"нет text style (Inter Mbank SemiBold 12, line height Auto 15)"}),n.jsx(e.td,{children:"IM-12 S, межстрочный 15 px"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Подпись Excursions"}),n.jsx(e.td,{children:"«Выходные» (опечатка)"}),n.jsx(e.td,{children:"«Экскурсии»"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Невидимые слои"}),n.jsx(e.td,{children:"в Weekend остались скрытые векторы"}),n.jsx(e.td,{children:"не используются"})]})]})]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'role="tab"'}),", ",n.jsx(e.code,{children:"aria-selected"}),", roving tabindex; подпись это имя вкладки, плитка и значок скрыты от скринридеров."]}),`
`,n.jsx(e.li,{children:"Зона нажатия весь таб: 84 × 75 и больше."}),`
`,n.jsx(e.li,{children:"Белый текст на шапке: контраст проверять на реальной картинке шапки, на градиенте из Figma он выше 3:1 для 12 px SemiBold только вместе с тёмным оверлеем."}),`
`]})]})}function E(t={}){const{wrapper:e}={...d(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{E as default};
