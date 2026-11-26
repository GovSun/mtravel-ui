import{j as e}from"./iframe-DyD5Yel4.js";import{u as i,M as d,C as s,a as l}from"./blocks-CcI75u3-.js";import{T as a,P as t,S as c,K as h,a as x,L as j,C as b,b as p}from"./Tab.stories-dHTKTb_f.js";import{M as g,U as u}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./Tabs-MqSbiXir.js";import"./motion-C-Q-avtg.js";import"./useControllableState-D9cJCl43.js";import"./cx-2dOUpm6k.js";import"./mergeRefs-BZQLIp5G.js";import"./usePress-XYzAalw7.js";import"./Skeleton-dpQW7cMp.js";import"./Button-grGIhY78.js";import"./Pressable-CAjp7WdB.js";import"./general-CSE0kF9v.js";import"./Svg-B7GM2ZFd.js";import"./paths-BjPgyxdS.js";import"./tokens-Bc2_NrJ2.js";const m=`/*
 * Tab, Figma 210:3053 (page Controls): Selected False | True × Skeleton False | True. Colours, radius, gaps and type come
 * from tokens; the private --_* variables only route the right token per state.
 */
.tab {
  --_press-in: calc(var(--tab-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--tab-motion-press-out-duration) * var(--motion-scale));
  --_state: calc(var(--tab-motion-state-duration) * var(--motion-scale));
  --_bg: var(--control-bg-default);
  --_bg-pressed: var(--control-bg-pressed);
  --_fg: var(--control-text-default);
  --_icon: var(--control-icon-secondary);

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  gap: var(--spacing-xs);
  height: 36px; /* Figma: 8 + 16 line + 8 */
  margin: 0;
  padding: 0 var(--spacing-md);
  border: 0;
  border-radius: var(--radius-md);
  background-color: var(--_bg);
  color: var(--_fg);
  font: var(--font-im-14-b);
  letter-spacing: var(--tracking-im-14-b);
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
  transition:
    transform var(--_press-out) var(--tab-motion-press-easing),
    background-color var(--_press-out) var(--tab-motion-press-easing),
    color var(--_state) var(--motion-ease-standard);
}

/* hit area at least 44 px high: 5 px above and below the 36 px pill (one hit-slop pattern, as Chips and Appbar) */
.tab::before {
  content: '';
  position: absolute;
  inset: -5px 0;
}

/* ---------- states ---------- */
.tab[data-selected] {
  --_bg: var(--control-bg-selected);
  --_bg-pressed: var(--control-bg-selected); /* Figma has no pressed tab: the fill stays, the scale answers */
  --_fg: var(--control-text-selected);
  --_icon: var(--control-icon-selected);
}

.tab[data-pressed],
.tab:focus-visible:active:not([data-disabled]) {
  transform: scale(var(--tab-motion-press-scale));
  background-color: var(--_bg-pressed);
  transition-duration: var(--_press-in), var(--_press-in), var(--_state);
}

.tab[data-disabled] {
  --_bg: var(--control-bg-disabled);
  --_fg: var(--control-text-disabled);
  --_icon: var(--control-icon-disabled);
  cursor: default;
}

.tab:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: -2px; /* inside the pill: the scrolling row would clip a ring drawn outside at its ends */
}

/* ---------- content ---------- */
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 16px;
  height: 16px;
  color: var(--_icon);
  transition: color var(--_state) var(--motion-ease-standard);
}
.icon > svg,
.icon > img {
  display: block;
  width: 100%;
  height: 100%;
}

.label {
  display: block;
}

/* reduced motion: no scale, the fill still changes */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .tab[data-pressed],
  :global(:root:not([data-motion='normal'])) .tab:focus-visible:active:not([data-disabled]) {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .tab[data-pressed],
:global(:root[data-motion='reduce']) .tab:focus-visible:active:not([data-disabled]) {
  transform: none;
}
`,f=`/*
 * The row of Tabs. Figma has no row, only the single tab: gap spacing/sm (8) as in the Chips row, scrolls sideways.
 */
.row {
  position: relative; /* offsetLeft of a tab is measured from here when the chosen tab is brought to the centre */
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  /* 4 px above and below keep the focus ring and the pressed tab from being clipped by the scroll box; the margin gives them back */
  padding: var(--spacing-xs) var(--_inset, 0);
  margin: calc(var(--spacing-xs) * -1) 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
.row::-webkit-scrollbar {
  display: none;
}
.row[data-gap='none'] {
  gap: 0;
}
/* stretch: equal tabs that fill the row, but never narrower than their content */
.row[data-stretch] > * {
  flex: 1 1 0;
  min-width: max-content;
}

/* the panel is a tab stop (tabIndex 0), so it shows where the focus is */
.panel {
  -webkit-tap-highlight-color: transparent;
}
.panel:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: -2px;
}
`;function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(n.h1,{id:"tab-и-tabs",children:"Tab и Tabs"}),`
`,e.jsxs(n.p,{children:["Вкладки: несколько вариантов, из которых выбран ровно один, и от выбора меняется содержимое под ними. Например, дата первого платежа M+ или время сбора в «Оформлении заказа». Если выбор не меняет экран, а включает фильтр, который можно снять или сложить с другими, это ",e.jsx(n.a,{href:"?path=/docs/components-chips--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Chips"}),". Если нужна плотная «таблетка» на 2–5 равных частей, это ",e.jsx(n.a,{href:"?path=/docs/components-segmentcontrol--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"SegmentControl"}),"."]}),`
`,e.jsxs(n.p,{children:["Figma: ",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=210-3053",rel:"nofollow",children:"tab 210:3053"}),": Selected False | True × Skeleton False | True, свойства Show icon left / right и Icon left / right. В Figma есть только один таб; ряд ",e.jsx(n.code,{children:"Tabs"}),", прокрутку и клавиатуру мы добавили."]}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(l,{of:t}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Tab, Tabs, TabPanel } from '@mtravel/ui';

<Tabs aria-label="Избранное" value={tab} onValueChange={setTab} stretch inset={16}
  panels={
    <>
      <TabPanel value="avia">{/* билеты */}</TabPanel>
      <TabPanel value="weekend">{/* выходные */}</TabPanel>
    </>
  }>
  <Tab value="avia">Авиа</Tab>
  <Tab value="weekend">Выходные</Tab>
</Tabs>
`})}),`
`,e.jsxs(n.p,{children:["Дети ",e.jsx(n.code,{children:"Tabs"})," должны быть ",e.jsx(n.code,{children:"Tab"})," (или ",e.jsx(n.code,{children:"ProductTab"}),") напрямую, не через свои обёртки: ряду нужны их ",e.jsx(n.code,{children:"value"})," и ",e.jsx(n.code,{children:"disabled"}),"."]}),`
`,e.jsx(n.h3,{id:"tablist-или-radiogroup",children:"tablist или radiogroup"}),`
`,e.jsxs(n.p,{children:["Мы выбрали ",e.jsx(n.strong,{children:"tablist"}),". Таб не хранит значение, которое куда-то отправится, он переключает показ: экран продукта, раздел списка. Для скринридера это «вкладка 1 из 2, выбрана», и панель под ней связана с вкладкой через ",e.jsx(n.code,{children:"aria-controls"})," / ",e.jsx(n.code,{children:"aria-labelledby"})," (панели передаются в ",e.jsx(n.code,{children:"panels"}),"). Radiogroup подошёл бы, если бы выбор был значением формы («Сортировка: по цене»): для этого есть ",e.jsx(n.a,{href:"?path=/docs/components-radio--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Radio"}),"."]}),`
`,e.jsx(n.h2,{id:"состояния",children:"Состояния"}),`
`,e.jsx(s,{of:c}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Figma"}),e.jsx(n.th,{children:"Фон"}),e.jsx(n.th,{children:"Текст"}),e.jsx(n.th,{children:"Иконки"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Selected=False"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/default"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/text/default"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/icon/secondary"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Selected=True"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/selected"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/text/selected"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/icon/selected"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Skeleton=True"}),e.jsxs(n.td,{children:["компонент ",e.jsx(n.a,{href:"?path=/docs/components-skeleton--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Skeleton"})," 133 × 36, радиус 12"]}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"—"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Нажат (нет в Figma)"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"control/bg/pressed"})," и сжатие 0.96; выбранный не меняет цвет"]}),e.jsx(n.td,{}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Недоступен (нет в Figma)"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/disabled"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/text/disabled"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/icon/disabled"})})]})]})]}),`
`,e.jsxs(n.p,{children:["Высота 36 (8 + строка 16 + 8), отступы по бокам 12, между текстом и иконкой 4, радиус ",e.jsx(n.code,{children:"radius/md"}),", текст IM-14 B. Зона нажатия не меньше 44 px по высоте: по 5 px сверху и снизу."]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Figma"}),e.jsx(n.th,{children:"Что делает"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"children"})}),e.jsx(n.td,{children:"текст"}),e.jsx(n.td,{children:"подпись"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"value"})}),e.jsx(n.td,{children:"—"}),e.jsxs(n.td,{children:["имя вкладки внутри ",e.jsx(n.code,{children:"Tabs"}),", его получает ",e.jsx(n.code,{children:"onValueChange"})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"iconLeft"}),", ",e.jsx(n.code,{children:"iconRight"})]}),e.jsx(n.td,{children:"Show icon left / right + Icon left / right"}),e.jsx(n.td,{children:"иконка 16 px, цвет задаёт токен"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"selected"})}),e.jsx(n.td,{children:"Selected"}),e.jsxs(n.td,{children:["только для таба вне ",e.jsx(n.code,{children:"Tabs"})," (тогда это кнопка-переключатель с ",e.jsx(n.code,{children:"aria-pressed"}),")"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"skeleton"})}),e.jsx(n.td,{children:"Skeleton"}),e.jsxs(n.td,{children:["серая заглушка вместо таба; ",e.jsx(n.code,{children:"skeletonWidth"})," задаёт ширину (133 в Figma)"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"disabled"}),", ",e.jsx(n.code,{children:"forcePressed"})]}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"недоступен; нажатый вид для документации"})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Tabs"}),": ",e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"defaultValue"})," / ",e.jsx(n.code,{children:"onValueChange"}),", ",e.jsx(n.code,{children:"activation"})," (",e.jsx(n.code,{children:"auto"})," или ",e.jsx(n.code,{children:"manual"}),"), ",e.jsx(n.code,{children:"inset"})," (отступ по краям ряда, чтобы первый таб стоял по полю экрана), ",e.jsx(n.code,{children:"stretch"})," (табы делят ширину поровну), ",e.jsx(n.code,{children:"gap"}),", ",e.jsx(n.code,{children:"skeleton"})," + ",e.jsx(n.code,{children:"skeletonWidths"})," + ",e.jsx(n.code,{children:"skeletonLabel"})," (заглушки всего ряда с одним бликом), ",e.jsx(n.code,{children:"panels"}),"."]}),`
`,e.jsx(n.h2,{id:"клавиатура-и-прокрутка",children:"Клавиатура и прокрутка"}),`
`,e.jsx(s,{of:h}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ряд занимает одну остановку в порядке Tab, её держит выбранный таб (если ничего не выбрано, первый доступный)."}),`
`,e.jsxs(n.li,{children:["Стрелки ← → (и ↑ ↓) двигаются между доступными табами по кругу, Home и End прыгают к краям. При ",e.jsx(n.code,{children:'activation="auto"'})," фокус сразу выбирает таб; при ",e.jsx(n.code,{children:"manual"})," выбирают Пробел или Enter."]}),`
`,e.jsx(n.li,{children:"Ряд, который не помещается, прокручивается пальцем без полосы прокрутки; выбранный таб выезжает в центр. Первый показ без анимации, смена выбора плавная, при reduced motion всегда сразу."}),`
`]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"загрузка",children:"Загрузка"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"кейсы",children:"Кейсы"}),`
`,e.jsx(n.p,{children:"Где в дизайне: «Оформление заказа» (1338:107636, «Чипсы дат», 49 табов времени сбора и дней), «Мой заказ» (4160:5077, 12 табов дней M+)."}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"анимация",children:"Анимация"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Нажатие:"})," таб сжимается до 0.96 сразу, как только палец коснулся, фон серого таба темнеет до ",e.jsx(n.code,{children:"control/bg/pressed"}),"; возвращается мягче, за 240 мс. Как у Chips."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Выбор:"})," фон и цвет текста и иконок меняются за 160–240 мс. Таб не «ездит» под выбранным, потому что у табов разная ширина и это пришлось бы мерить; перекраска идёт CSS-переходом и прерывается на лету."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reduced motion:"})," без сжатия, цвета меняются, прокрутка к выбранному без плавности."]}),`
`]}),`
`,e.jsx(g,{prefix:"--tab-"}),`
`,e.jsx(u,{css:[m,f]}),`
`,e.jsx(n.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Что"}),e.jsx(n.th,{children:"Значение"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Фон Skeleton у таба в Figma"}),e.jsx(n.td,{children:"свой градиент без переменных (630:11589); в коде серые токены компонента Skeleton"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Нажатый таб"}),e.jsxs(n.td,{children:["в Figma нет, взяты ",e.jsx(n.code,{children:"control/bg/pressed"})," и 0.96"]})]})]})]}),`
`,e.jsx(n.h2,{id:"доступность",children:"Доступность"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ряд: ",e.jsx(n.code,{children:'role="tablist"'}),", таб: ",e.jsx(n.code,{children:'role="tab"'})," с ",e.jsx(n.code,{children:"aria-selected"}),", ",e.jsx(n.code,{children:"tabIndex"})," по схеме roving; панель: ",e.jsx(n.code,{children:'role="tabpanel"'})," с ",e.jsx(n.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsxs(n.li,{children:["Иконки декоративные (",e.jsx(n.code,{children:"aria-hidden"}),"), имя таба это его текст. Таб с одной иконкой должен получить ",e.jsx(n.code,{children:"aria-label"}),"."]}),`
`,e.jsxs(n.li,{children:["Зона нажатия не меньше 44 px по высоте; фокус с клавиатуры обводится рамкой ",e.jsx(n.code,{children:"color/border/focus"})," 2 px (внутри таба, чтобы прокручиваемый ряд её не обрезал). Панель ",e.jsx(n.code,{children:"tabpanel"})," тоже в порядке Tab и показывает такую же рамку."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-controls"})," стоит только у выбранного таба: невыбранные панели не рендерятся, и чужие id указывали бы в пустоту."]}),`
`,e.jsxs(n.li,{children:["Если передан ",e.jsx(n.code,{children:"onClick"})," и вызван ",e.jsx(n.code,{children:"preventDefault()"}),", выбор не меняется (как у Chip)."]}),`
`,e.jsx(n.li,{children:"Контраст текста: чёрный на светло-сером и белый на графитовом выше 4.5:1."}),`
`]})]})}function K(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{K as default};
