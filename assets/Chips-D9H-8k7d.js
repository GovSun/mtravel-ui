import{j as n}from"./iframe-DuqTOznb.js";import{u as c,M as l,C as i,a}from"./blocks-CaaIEU4k.js";import{C as h,P as t,A as x,F as p,I as j,a as s,Q as o}from"./Chips.stories-CR8yn9ou.js";import{M as g,U as m}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./Chip-KAmC-4ZV.js";import"./cx-2dOUpm6k.js";import"./mergeRefs-BPT53vMC.js";import"./motion-C-Q-avtg.js";import"./useControllableState-QyUXWn2y.js";import"./usePress-DgMUH5X0.js";import"./arrows-C0H-naDa.js";import"./Svg-B1-TtxWQ.js";import"./general-DYSfllt2.js";import"./paths-BjPgyxdS.js";import"./FilterChip-1LeuoSUe.js";import"./Skeleton-D5GPHumj.js";import"./places-z-kxph-t.js";import"./Button-CKwNO4NU.js";import"./Pressable-D45JnRku.js";import"./tokens-INIU3VNa.js";const u=`/*
 * Chips, Figma 300:6325. Colours, radius, gaps and type come from tokens; the private --_* variables only
 * route the right token per state.
 */
.chip {
  --_press-in: calc(var(--chips-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--chips-motion-press-out-duration) * var(--motion-scale));
  --_state: calc(var(--chips-motion-state-duration) * var(--motion-scale));
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
  height: 36px;
  margin: 0;
  padding: 0 var(--spacing-md); /* Figma, 4 px grid: height 36 (min = max), 12 at the sides */
  border: 0;
  border-radius: var(--radius-md);
  background-color: var(--_bg);
  color: var(--_fg);
  font: var(--font-im-14-s);
  letter-spacing: var(--tracking-im-14-s);
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
  transition:
    transform var(--_press-out) var(--chips-motion-press-easing),
    background-color var(--_press-out) var(--chips-motion-press-easing),
    color var(--_state) var(--motion-ease-standard);
}

/* Hit area 44 px high: the 36 px chip gets 4 px above and below (half of the 8 px row gap). */
.chip::after {
  content: '';
  position: absolute;
  inset: -4px 0;
}

/* the icon-only chip is 36 wide too: 44 px both ways */
.chip[data-icon-only]::after {
  inset: -4px;
}

/* ---------- states ---------- */
.chip[data-selected] {
  --_bg: var(--control-bg-selected);
  --_bg-pressed: var(--control-bg-selected); /* no token for a pressed selected chip: the fill stays, the scale answers */
  --_fg: var(--control-text-selected);
  --_icon: var(--control-icon-selected); /* Figma Selected=True: icon, chevron and × are control/icon/selected */
}

.chip[data-pressed],
.chip:focus-visible:active:not([data-disabled]) {
  transform: scale(var(--chips-motion-press-scale));
  background-color: var(--_bg-pressed);
  transition-duration: var(--_press-in), var(--_press-in), var(--_state);
}

.chip[data-disabled] {
  --_bg: var(--control-bg-disabled);
  --_fg: var(--control-text-disabled);
  --_icon: var(--control-icon-disabled);
  cursor: default;
}

.chip:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

/* ---------- content ---------- */
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: var(--_icon);
  font-size: 14px; /* emoji: the glyph fills the 16 px box */
  line-height: 1;
  transition: color var(--_state) var(--motion-ease-standard);
}
.icon > svg,
.icon > img {
  display: block;
  width: 100%;
  height: 100%;
}

.text {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
}

/* Figma Indicator value: IM-14 M, control/text/tertiary, the same in both states */
.count {
  font: var(--font-im-14-m);
  letter-spacing: var(--tracking-im-14-m);
  color: var(--control-text-tertiary);
}

.trail {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px; /* Figma «Icon wrap» 16 x 16, the 14 px icon centred */
  height: 16px;
  color: var(--_icon);
  transition: color var(--_state) var(--motion-ease-standard);
}
.trail > svg {
  display: block;
  width: 14px;
  height: 14px;
}

/* Indicator (Figma 491:8160). Default: 18 high, at least 18 wide, 4 px sides, IM-12 S, indicator/bg/default with a
   background blur (effect blur/bg-8). Secondary: 16, IM-12 M, bg/constant/scrim-strong at 64 %. */
.badge {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 var(--spacing-xs);
  box-sizing: border-box;
  border-radius: var(--radius-full);
  background: var(--indicator-bg-default);
  -webkit-backdrop-filter: var(--blur-bg-8);
  backdrop-filter: var(--blur-bg-8);
  color: var(--control-text-inverse);
  font: var(--font-im-12-s);
  letter-spacing: var(--tracking-im-12-s);
}
.badge[data-variant='secondary'] {
  min-width: 16px;
  height: 16px;
  background: color-mix(in srgb, var(--color-bg-constant-scrim-strong) 64%, transparent);
  font: var(--font-im-12-m);
  letter-spacing: var(--tracking-im-12-m);
}

/* Avatar (Figma «Avatar»): a 20 px round picture in a 16 × 20 slot, so it hangs 2 px over each side */
.avatar {
  display: block;
  flex: none;
  position: relative;
  width: 16px;
  height: 20px;
}
.avatar > * {
  position: absolute;
  top: 0;
  left: -2px;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: var(--radius-full);
  object-fit: cover;
  overflow: hidden;
}

/* icon-only chip (Figma filter-chips): 36 × 36, 8 px around the icon; with the Indicator 54 wide */
.chip[data-icon-only] {
  min-width: 36px;
  padding: 0 var(--spacing-sm);
}

/* ---------- group ---------- */
.group {
  --_gap: var(--spacing-sm);
  position: relative; /* children measure offsetLeft / offsetTop against the group */
  display: flex;
  gap: var(--_gap);
}
.group[data-layout='wrap'] {
  flex-wrap: wrap;
}
.group[data-layout='scroll'] {
  flex-wrap: nowrap;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  padding: 8px var(--spacing-md); /* Figma: 8 top and bottom (no token), 12 at the sides */
  scroll-padding-inline: var(--spacing-md);
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
.group[data-layout='scroll']::-webkit-scrollbar {
  display: none;
}

/* Reduced motion: no scale; colours still change (the × and the neighbours are handled in JS). */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .chip,
  :global(:root:not([data-motion='normal'])) .chip[data-pressed],
  :global(:root:not([data-motion='normal'])) .chip:focus-visible:active:not([data-disabled]) {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .chip,
:global(:root[data-motion='reduce']) .chip[data-pressed],
:global(:root[data-motion='reduce']) .chip:focus-visible:active:not([data-disabled]) {
  transform: none;
}
`;function d(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:h}),`
`,n.jsx(e.h1,{id:"chips",children:"Chips"}),`
`,n.jsx(e.p,{children:"Значения фильтров и быстрые фильтры. Чипс высотой 36 px: иконка или эмодзи, текст, счётчик и иконка после текста. Нажми на чипс ниже: фон темнеет, крестик выпрыгивает с пружиной, а правый край плавно выезжает."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=300-6325",rel:"nofollow",children:"Chips 300:6325"})," (Selected False / True; Left icon, Icon right, chevron, indicator, Right icon, Indicator value, Avatar), ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=609-10874",rel:"nofollow",children:"filter-chips 609:10874"})," (Active, Skeleton), ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=491-8160",rel:"nofollow",children:"Indicator 491:8160"}),", кейсы в «Выходных»: ",n.jsx(e.a,{href:"https://www.figma.com/design/RB3kRwjZ9Akvh6n5Ln4M6N/?node-id=571-35974",rel:"nofollow",children:"Все фильтры 571:35974"}),", быстрые фильтры 702:93373."]}),`
`,n.jsx(i,{of:t}),`
`,n.jsx(a,{of:t}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Chip, ChipGroup } from '@mtravel/ui';

// значения фильтра: переключатель с крестиком
<ChipGroup aria-label="Удобства">
  {options.map((o) => (
    <Chip key={o.id} icon={o.icon} count={o.count} trailing="clear"
          selected={picked.has(o.id)} onSelectedChange={(on) => toggle(o.id, on)}>
      {o.label}
    </Chip>
  ))}
</ChipGroup>

// быстрый фильтр: открывает шторку, выбранный = фильтр применён
<ChipGroup layout="scroll" gap={6}>
  <Chip trailing="chevron" selected={!!activity.length} aria-haspopup="dialog" onClick={openActivity}>
    Вид активности
  </Chip>
</ChipGroup>
`})}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Пропс"}),n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Что делает"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"children"})}),n.jsxs(e.td,{children:["текст ",n.jsx(e.code,{children:"IM-14 S"})]}),n.jsx(e.td,{children:"подпись"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"icon"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"Left icon"})," + ",n.jsx(e.code,{children:"Icon right"})]}),n.jsx(e.td,{children:"иконка 16 px или эмодзи перед текстом. Наши иконки красятся токеном, эмодзи остаётся цветным"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"count"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Indicator value"})}),n.jsxs(e.td,{children:["число после текста, ",n.jsx(e.code,{children:"IM-14 M"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"badge"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"indicator"})}),n.jsxs(e.td,{children:[n.jsx(e.a,{href:"#indicator",children:"Indicator"})," перед текстом"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"avatar"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Avatar"})}),n.jsxs(e.td,{children:["круглая картинка 20 px перед текстом: ",n.jsx(e.code,{children:"<img>"})," или аватар. Слот шириной 16, картинка выступает на 2 px с каждой стороны"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:'trailing="chevron"'})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"chevron"})}),n.jsx(e.td,{children:"шеврон в обоих состояниях: чипс открывает список или шторку"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:'trailing="clear"'})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"Right icon"})," (xmark)"]}),n.jsx(e.td,{children:"крестик только у выбранного: значение можно снять"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"selected"})," / ",n.jsx(e.code,{children:"defaultSelected"})," / ",n.jsx(e.code,{children:"onSelectedChange"})]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Selected"})}),n.jsxs(e.td,{children:["выбор. С ",n.jsx(e.code,{children:"onSelectedChange"})," или ",n.jsx(e.code,{children:"defaultSelected"})," чипс сам переключается по тапу и получает ",n.jsx(e.code,{children:"aria-pressed"})]})]})]})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"ChipGroup"})," раскладывает чипсы: ",n.jsx(e.code,{children:'layout="wrap"'})," переносит по строкам с промежутком ",n.jsx(e.code,{children:"spacing/sm"})," 8 (Figma «Варианты»), ",n.jsx(e.code,{children:'layout="scroll"'})," даёт одну строку с прокруткой и отступами 12 по краям (быстрые фильтры, в Figma промежуток 6 без токена)."]}),`
`,n.jsx(e.h2,{id:"состояния",children:"Состояния"}),`
`,n.jsx(i,{of:x}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Состояние"}),n.jsx(e.th,{children:"Фон"}),n.jsx(e.th,{children:"Текст"}),n.jsx(e.th,{children:"Иконки"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Default"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/bg/default"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/text/default"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/icon/secondary"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Pressed"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/bg/pressed"})}),n.jsx(e.td,{children:"то же"}),n.jsx(e.td,{children:"то же"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Selected"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/bg/selected"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/text/selected"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/icon/selected"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Selected · Pressed"}),n.jsx(e.td,{children:"фон остаётся, отвечает только масштаб"}),n.jsx(e.td,{children:"то же"}),n.jsx(e.td,{children:"то же"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Disabled"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/bg/disabled"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/text/disabled"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/icon/disabled"})})]})]})]}),`
`,n.jsxs(e.p,{children:["Счётчик всегда ",n.jsx(e.code,{children:"control/text/tertiary"}),", в обоих состояниях, как в Figma. Pressed и Disabled в Figma не нарисованы: Pressed сделан по аналогии с IconButton Secondary, Disabled на ",n.jsx(e.code,{children:"control/*/disabled"}),"."]}),`
`,n.jsx(e.h2,{id:"фильтр-чип",children:"Фильтр-чип"}),`
`,n.jsxs(e.p,{children:["Квадрат 36 × 36 со значком «слайдеры», открывает все фильтры. Когда что-то применено (Figma Active=True), он темнеет, получает ",n.jsx(e.a,{href:"#indicator",children:"Indicator"})," с числом и становится 54 px шириной. Пока фильтры грузятся (Skeleton=True), на его месте серый квадрат с переливом. Это тот же ",n.jsx(e.code,{children:"Chip"})," без подписи: нажатие, фокус, зона 44 px и движение общие."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { FilterChip } from '@mtravel/ui';

<FilterChip count={applied.length} onClick={openFilters} />
<FilterChip skeleton />
`})}),`
`,n.jsx(i,{of:p}),`
`,n.jsxs(e.p,{children:["Имя для скринридера: «Фильтры», с числом «Фильтры, выбрано 3». Другое слово задаёт ",n.jsx(e.code,{children:"label"}),"."]}),`
`,n.jsx(e.h2,{id:"indicator",children:"Indicator"}),`
`,n.jsxs(e.p,{children:["Круглый счётчик: ",n.jsx(e.code,{children:"Indicator"})," (Figma Indicator 491:8160). Default: 18 px, IM-12 S, красный ",n.jsx(e.code,{children:"indicator/bg/default"})," с размытием фона ",n.jsx(e.code,{children:"blur/bg-8"}),". Secondary: 16 px, IM-12 M, тёмное стекло ",n.jsx(e.code,{children:"bg/constant/scrim-strong"})," 64 %."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Indicator } from '@mtravel/ui';

<Indicator>3</Indicator>
<Indicator variant="secondary">1</Indicator>
`})}),`
`,n.jsx(i,{of:j}),`
`,n.jsx(e.h2,{id:"движение",children:"Движение"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нажатие как у Button."})," На ",n.jsx(e.code,{children:"pointerdown"})," чипс сжимается до 0.96 и фон переходит в ",n.jsx(e.code,{children:"control/bg/pressed"})," за 100 мс. Отпускание мягче, 240 мс. Выбор перекрашивает фон в те же 240 мс, поэтому нажатие и смена цвета читаются как одно движение."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Крестик на пружине."})," При выборе крестик вырастает из 0.5 с небольшим перелётом (та же кривая, что у сердца Like) и выходит из размытия. Правый край чипса выезжает через ",n.jsx(e.code,{children:"clip-path"}),", без анимации ширины."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Снятие выбора."})," Сначала край заезжает обратно и крестик гаснет (180 мс), и только потом чипс становится уже. Поэтому ничего не прыгает."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Соседи доезжают."})," В ",n.jsx(e.code,{children:"ChipGroup"})," чипсы после изменившегося плавно переезжают на новое место, а при переносе на новую строку скользят туда же. Анимируется свойство ",n.jsx(e.code,{children:"translate"}),", поэтому сжатие при нажатии продолжает работать."]}),`
`,n.jsx(e.li,{children:"Всё прерывается: новый тап посреди анимации стартует с того места, где она сейчас."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," без масштаба, без выезда края и переезда соседей. Крестик просто появляется и гаснет, цвета меняются как обычно."]}),`
`]}),`
`,n.jsx(g,{prefix:"--chips-motion"}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Все фильтры."})," Значения переключаются, выбранное темнеет и получает крестик, соседи уступают место плавно; «Сбросить» снимает всё сразу."]}),`
`,n.jsx(i,{of:s}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Каталог, быстрые фильтры."})," Под свёрнутым поиском: значок всех фильтров и чипсы «Вид активности», «Формат», «Длительность», «Цена», «Удобства» с шевроном."]}),`
`,n.jsx(i,{of:o}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds-и-вопросы-к-figma",children:"Без токенов в DS и вопросы к Figma"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"В Figma"}),n.jsx(e.th,{children:"В коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"Shimmer"})," у Chips"]}),n.jsx(e.td,{children:"у свойства есть только значение False: состояния «загрузка» у чипса нет"}),n.jsxs(e.td,{children:["нет. Загрузку показывает ",n.jsx(e.code,{children:"FilterChip loading"})," (Skeleton=True у filter-chips)"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Skeleton у filter-chips"}),n.jsx(e.td,{children:"линейный градиент из пяти сырых серых (#DCDCDC … #F9F8F6)"}),n.jsxs(e.td,{children:["общий ",n.jsx(e.code,{children:"Skeleton"})," DS"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Indicator value в Selected"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"control/text/tertiary"})," на тёмном фоне, читается плохо"]}),n.jsx(e.td,{children:"как в Figma"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Размытие фона у Indicator"}),n.jsxs(e.td,{children:["эффект ",n.jsx(e.code,{children:"blur/bg-8"})]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"backdrop-filter: var(--blur-bg-8)"})})]})]})]}),`
`,n.jsx(e.h2,{id:"токены",children:"Токены"}),`
`,n.jsx(e.p,{children:"Собраны из CSS компонента, поэтому таблица всегда совпадает с кодом: цепочка до примитива и имя переменной в Figma."}),`
`,n.jsx(m,{css:u}),`
`,n.jsx(e.h2,{id:"кейсы-1",children:"Кейсы"}),`
`,n.jsx(e.h3,{id:"все-фильтры",children:"Все фильтры"}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(e.h3,{id:"быстрые-фильтры",children:"Быстрые фильтры"}),`
`,n.jsx(i,{of:o}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Чипс-переключатель — это ",n.jsx(e.code,{children:"button"})," с ",n.jsx(e.code,{children:"aria-pressed"}),". Тап и Пробел или Enter переключают его. Крестик декоративный: снимает выбор весь чипс, так в него проще попасть."]}),`
`,n.jsxs(e.li,{children:["Чипс-шеврон открывает шторку. Добавь ",n.jsx(e.code,{children:'aria-haspopup="dialog"'}),", а когда шторка открыта, ",n.jsx(e.code,{children:"aria-expanded"}),"."]}),`
`,n.jsx(e.li,{children:"Область касания 44 px в высоту: к 36 px добавлено по 4 px сверху и снизу, ровно половина промежутка между рядами."}),`
`,n.jsxs(e.li,{children:["Группу подпиши через ",n.jsx(e.code,{children:"aria-label"})," у ",n.jsx(e.code,{children:"ChipGroup"}),", обычно это заголовок фильтра."]}),`
`]})]})}function J(r={}){const{wrapper:e}={...c(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(d,{...r})}):d(r)}export{J as default};
