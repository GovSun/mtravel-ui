import{j as n}from"./iframe-DyD5Yel4.js";import{u as d,M as s,C as i,a as c}from"./blocks-CcI75u3-.js";import{L as a,P as t,V as l,I as h,C as x,a as p,b as j,c as m}from"./LocationCard.stories-Bkkbkdu_.js";import{M as g,U as u}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./cx-2dOUpm6k.js";import"./Pressable-CAjp7WdB.js";import"./usePress-XYzAalw7.js";import"./Badge-CdXEkR6u.js";import"./arrows-0JYTYJZi.js";import"./Svg-B7GM2ZFd.js";import"./SectionTitle-CwRady4O.js";import"./PillButton-Cdj7WtD9.js";import"./time-lpmEQjgl.js";import"./places-CYDz-5dl.js";import"./FactPlate-DOMeLgzx.js";import"./tokens-Bc2_NrJ2.js";const b=`/*
 * LocationCard (Figma card_location 996:5593).
 * \`card\` (Default): 20 px radius (no token: radius/lg is 16, radius/xl 24), frame border/default, fill bg/sunken-subtle;
 * the white block under the map is bg/surface with a 20 px fade above it.
 * \`section\` («Место встречи», «Адрес»): heading, 8, a 361 × 160 map card, 8, the name, the address and the optional
 * working-hours row; the text block is inset 20 px (Figma Title 16 + Title / subtitle 4).
 * Raw in Figma, so raw here: the pin halo (black radial, 4 % → 0), the pin shadow as a filter, the 20 px radius.
 */
.root {
  position: relative;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  min-width: 0;
  color: var(--control-text-default);
}

/* ---------------------------------------------------------------- map layer, shared */
.map {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background-color: var(--color-bg-sunken-subtle);
}
.empty {
  display: block;
  width: 100%;
  height: 100%;
}

.halo {
  position: absolute;
  left: calc(50% + 0.5px); /* Figma 883:4809 */
  top: var(--_halo-top);
  width: 56px;
  height: 56px;
  margin-left: -28px;
  border-radius: var(--radius-full);
  background: radial-gradient(circle closest-side, rgba(0, 0, 0, 0.04) 0, rgba(0, 0, 0, 0) 65%); /* no token: Figma 883:4809 «Ореол», black radial, 4 % in the middle, gone at 65 % */
  pointer-events: none;
}
.pin {
  position: absolute;
  left: calc(50% + 0.32px); /* Figma 883:4810 */
  top: var(--_pin-top);
  margin-left: -18.82px;
  width: 37.65px;
  height: 48px;
  color: var(--_pin-color);
  filter: drop-shadow(0 3.77px 5.65px rgba(0, 0, 0, 0.14)); /* no token: shadow/pin (0 3.77 5.65, 14 %) is in box-shadow syntax; a pin is not a box, so the same numbers as a drop-shadow */
  pointer-events: none;
}

.plate {
  position: absolute;
  top: var(--spacing-md);
  left: var(--spacing-md);
}

/* ---------------------------------------------------------------- card (Default) */
.root[data-variant='card'] {
  --_pin-top: 30px; /* no token: Figma 883:4810 */
  --_halo-top: 43px; /* no token: Figma 883:4809 */
  --_pin-color: var(--color-bg-error);

  /* the map shows 87 px above the white block (Figma «Content» y = 87) */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 87px;
  padding-top: 87px; /* no token: Figma 883:4813 */
  overflow: hidden;
  border-radius: 20px; /* no token: Figma 883:4804 */
  background-color: var(--color-bg-sunken-subtle);
}
/* Figma strokes the frame INSIDE and the 369 px white block runs under it; the frame is drawn over the content, so the
   card is exactly 87 + 133 = 220 px */
.root[data-variant='card']::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid var(--color-border-default);
  border-radius: 20px; /* no token: Figma 883:4804 */
  pointer-events: none;
}
.root[data-variant='card'] .map {
  /* the map frame sits inside the stroke */
  inset: 0;
}
.content {
  position: relative;
  display: flex;
  flex-direction: column;
}
.fade {
  height: 20px; /* no token: Figma 883:4814 «Переход» */
  background: linear-gradient(to bottom, color-mix(in srgb, var(--color-bg-surface) 0%, transparent), var(--color-bg-surface));
}
.cell {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-lg); /* Figma: the cell pads 12 and its «Center» block 4 more, top and bottom; 16 px sides */
  background-color: var(--color-bg-surface);
}
.timeRow {
  display: flex;
  padding: var(--spacing-sm) 0;
}
/* Figma 883:4818 (2026-11-26): the name first, IM-16 M; the address under it, IM-14 R tertiary — as in the section */
.name {
  font: var(--font-im-16-m);
  letter-spacing: var(--tracking-im-16-m);
  color: var(--control-text-default);
}
.address {
  font: var(--font-im-14-r);
  letter-spacing: var(--tracking-im-14-r);
  color: var(--control-text-tertiary);
}

/* ---------------------------------------------------------------- section (2) */
.root[data-variant='section'] {
  --_pin-top: 50px; /* no token: Figma 996:5540 */
  --_halo-top: 63px; /* no token: Figma 996:5539 */
  --_pin-color: var(--color-tag-sale); /* Figma binds this pin to tag/sale, the Default one to bg/error */

  display: flex;
  flex-direction: column;
}
.heading {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  min-height: 48px; /* Figma: the Title row is 48 px; with a time line the text is taller and the screens add 12 below */
  margin-bottom: var(--spacing-sm); /* Figma 996:5592 / 1800:674: 8 between the heading and the map */
}
.heading[data-time] {
  margin-bottom: var(--spacing-md); /* Figma «Один временной слот»: Title with subtitle (SectionTitle 52 px), then 12 */
}
.mapWrap {
  padding: 0 var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
}
.mapCard {
  position: relative;
  height: 160px; /* no token: Figma 996:5535 */
  overflow: hidden;
  border-radius: 20px; /* no token: Figma 996:5535 */
  background-color: var(--color-bg-sunken-subtle);
}
.mapTap {
  --_press-in: calc(var(--location-card-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--location-card-motion-press-out-duration) * var(--motion-scale));

  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
/* press feedback of the whole map: a dim layer fades in on pointer-down (opacity only) */
.mapTap::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: var(--color-bg-constant-scrim);
  opacity: 0;
  transition: opacity var(--_press-out) var(--location-card-motion-press-easing);
  pointer-events: none;
}
.mapTap[data-pressed]::after {
  opacity: 1;
  transition-duration: var(--_press-in);
}
.mapTap:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: -2px;
}

/* the route button: the DS PillButton overlay (Figma Pill button Type=overlay 1492:366), 12 from the map's corner;
   its look, the 44 px tap target, the press and focus come from PillButton */
.route {
  position: absolute;
  right: var(--spacing-md);
  bottom: var(--spacing-md);
}

.place {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 48px;
  justify-content: center;
  /* Figma Title: a 48 px row, the text block centred in it; padding 16 + the inner Title / subtitle 4 on both sides */
  padding: 0 calc(var(--spacing-lg) + var(--spacing-xs));
}
.placeName {
  /* Figma Title row 1794:2308: 24 px, the IM-16 M line (19.2) centred in it; two lines grow it */
  min-height: 24px;
  box-sizing: border-box;
  padding: 2.4px 0; /* no token: (24 − 19.2) / 2 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font: var(--font-im-16-m);
  letter-spacing: var(--tracking-im-16-m);
  color: var(--control-text-default);
}
.placeAddress {
  /* Figma Subtitle container: min 20, the text centred in it (IM-14 R, line 1.15); no gap between the two rows */
  display: flex;
  align-items: center;
  min-height: 20px;
  box-sizing: border-box;
  font: var(--font-im-14-r);
  letter-spacing: var(--tracking-im-14-r);
  color: var(--control-text-tertiary);
}
/* Figma «Часы работы» 1800:570: a 24 px row (4 + 16 + 4), gap 4: label · clock 14 · hours, all IM-14 R tertiary */
.hours {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) 0;
  min-height: 24px;
  box-sizing: border-box;
  font: var(--font-im-14-r);
  letter-spacing: var(--tracking-im-14-r);
  color: var(--control-text-tertiary);
  white-space: nowrap;
}
.hoursIcon {
  flex: none;
  color: var(--control-icon-tertiary);
}

`;function o(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:a}),`
`,n.jsx(e.h1,{id:"locationcard",children:"LocationCard"}),`
`,n.jsx(e.p,{children:"Карточка места: где встречаемся или где проходит событие. Карта, красная метка и название под ней. На детальной странице и в заказе это блок «Место встречи» или «Адрес» с кнопкой «Построить маршрут», у адреса площадки ещё и часы работы."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=996-5593",rel:"nofollow",children:"card_location 996:5593"}),": Property 1 = Default | Место встречи | Адрес, переключатели Time и Time badge, текст «Время работы». Два случая с часами и без — это два варианта: у «Места встречи» часов нет, у «Адреса» они всегда есть."]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"В коде"}),n.jsx(e.th,{children:"Что это"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Default"}),n.jsx(e.td,{children:n.jsx(e.code,{children:'variant="card"'})}),n.jsx(e.td,{children:"карточка с картой сверху и местом на белом под ней: название IM-16 M, под ним адрес IM-14 R; время — тёмная плашка над названием"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Место встречи"}),n.jsx(e.td,{children:n.jsx(e.code,{children:'variant="section"'})}),n.jsx(e.td,{children:"заголовок «Место встречи», 8, карта с меткой и кнопкой маршрута, 8, название и адрес; без часов"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Адрес"}),n.jsx(e.td,{children:n.jsx(e.code,{children:'variant="section" heading="Адрес" hours="…"'})}),n.jsx(e.td,{children:"тот же блок с заголовком «Адрес» и строкой часов работы под адресом"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"«Время работы»"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"hours"})," у ",n.jsx(e.code,{children:"section"})]}),n.jsxs(e.td,{children:["текст часов: «с 9:00 до 18:00»; строка «Часы работы · 🕒 …» рисуется, только когда ",n.jsx(e.code,{children:"hours"})," передан"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Time badge"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"time"})," у ",n.jsx(e.code,{children:"card"})]}),n.jsx(e.td,{children:"плашка «вс, 6 июл, 19:00»"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Time"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"time"})," у ",n.jsx(e.code,{children:"section"})]}),n.jsx(e.td,{children:"серая строка под заголовком: «вс, 17 дек, 18:00»"})]})]})]}),`
`,n.jsx(i,{of:t}),`
`,n.jsx(c,{of:t}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Где в дизайне."})," Детальная страница 173:13296 («Место встречи», «вс, 17 дек, 18:00»), «Мой заказы» 1698:192321, «1 картинка» 4704:41714 и «Детали заказа / фиксированный график» 5061:52221 («Адрес» с часами работы)."]}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { LocationCard } from '@mtravel/ui';

<LocationCard
  variant="section"
  name="Филармония им. Т. Сатылганова"
  address="Кыргызстан, Бишкек"
  time="вс, 17 дек, 18:00"
  map={<YandexMap center={point} />}
  onRouteClick={openRoute}
  onMapClick={openRoute}
/>
`})}),`
`,n.jsxs(e.p,{children:["Время над адресом — компонент ",n.jsx(e.a,{href:"?path=/docs/components-badge--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Badge"}),", заголовок блока — ",n.jsx(e.a,{href:"?path=/docs/components-sectiontitle--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"SectionTitle"}),", плашка-факт в слоте ",n.jsx(e.code,{children:"plate"})," — FactPlate. Карта приходит снаружи, в слот ",n.jsx(e.code,{children:"map"}),": компонент рисует рамку, метку с тенью и ореол, а саму карту (интерактивную или картинку) подставляет экран. Для историй и документации есть заглушка-картинка центра Бишкека (",n.jsx(e.code,{children:"src/stories/kit/MapStub"}),"), она не входит в пакет и не является картой."]}),`
`,n.jsx(e.p,{children:"Адрес площадки с часами работы:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<LocationCard
  variant="section"
  heading="Адрес"
  name="Филармония им. Т. Сатылганова"
  address="Кыргызстан, Бишкек"
  hours="с 9:00 до 18:00"
  map={<YandexMap center={point} />}
  onRouteClick={openRoute}
/>
`})}),`
`,n.jsxs(e.p,{children:["Часы работы — строка 24 px под адресом: подпись «Часы работы» (меняется через ",n.jsx(e.code,{children:"hoursLabel"}),"), точка, часы 14 px ",n.jsx(e.code,{children:"control/icon/tertiary"})," и сами часы, всё IM-14 R ",n.jsx(e.code,{children:"control/text/tertiary"}),". Для «Места встречи» ",n.jsx(e.code,{children:"hours"})," не передают: строки нет, блок на 24 px короче."]}),`
`,n.jsxs(e.p,{children:["Кнопка «Построить маршрут» появляется, когда есть действие: ",n.jsx(e.code,{children:"onRouteClick"})," или ",n.jsx(e.code,{children:"routeHref"}),". Нажатие на саму карту — отдельное действие ",n.jsx(e.code,{children:"onMapClick"}),": на экране «Построить маршрут по клику на карту» оно тоже открывает маршрут."]}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(i,{of:l}),`
`,n.jsx(e.h2,{id:"действия",children:"Действия"}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Кнопка «Построить маршрут»"})," — это ",n.jsx(e.a,{href:"?path=/docs/components-pill-button--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"PillButton"})," ",n.jsx(e.code,{children:"overlay"}),": нажатие, зона 44 px и фокус у неё свои."]}),`
`,n.jsx(e.li,{children:"Вокруг плашки невидимая зона нажатия 44 px по высоте."}),`
`,n.jsx(e.li,{children:"Сама карточка не движется: карта в слоте живёт по своим правилам."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," плашка не сжимается."]}),`
`]}),`
`,n.jsx(g,{prefix:"--location-card-"}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.p,{children:"Файл «Выходные»: «Детали заказа», «Мои заказы», «Избранное», «Фиксированный график»."}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(i,{of:j}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Prop"}),n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Что делает"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"variant"})}),n.jsx(e.td,{children:"Property 1"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"card"})," (Default) или ",n.jsx(e.code,{children:"section"})," (Место встречи, Адрес)"]})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"name"}),", ",n.jsx(e.code,{children:"address"})]}),n.jsx(e.td,{children:"название, «Кыргызстан, Бишкек»"}),n.jsx(e.td,{children:"текст места: название IM-16 M, адрес IM-14 R под ним"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"hours"}),", ",n.jsx(e.code,{children:"hoursLabel"})]}),n.jsx(e.td,{children:"«Часы работы», «Время работы»"}),n.jsxs(e.td,{children:["строка часов работы в ",n.jsx(e.code,{children:"section"}),"; по умолчанию подпись «Часы работы»"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"time"})}),n.jsx(e.td,{children:"Time badge, Time"}),n.jsx(e.td,{children:"время события"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"heading"})}),n.jsx(e.td,{children:"«Место встречи», «Адрес»"}),n.jsxs(e.td,{children:["заголовок ",n.jsx(e.code,{children:"section"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"map"})}),n.jsx(e.td,{children:"«Карта-заглушка»"}),n.jsx(e.td,{children:"слот карты"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"plate"})}),n.jsx(e.td,{children:"«Плашка-факт», свойство Time"}),n.jsx(e.td,{children:"слот плашки с датой на карте, слева сверху; в Figma по умолчанию скрыта (Time = false)"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"routeLabel"}),", ",n.jsx(e.code,{children:"onRouteClick"}),", ",n.jsx(e.code,{children:"routeHref"})]}),n.jsx(e.td,{children:"«Построить маршрут»"}),n.jsxs(e.td,{children:["кнопка маршрута в ",n.jsx(e.code,{children:"section"})]})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"onMapClick"}),", ",n.jsx(e.code,{children:"mapLabel"})]}),n.jsx(e.td,{children:"—"}),n.jsxs(e.td,{children:["нажатие на карту в ",n.jsx(e.code,{children:"section"})]})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"ref"}),", ",n.jsx(e.code,{children:"className"}),", ",n.jsx(e.code,{children:"style"}),", ",n.jsx(e.code,{children:"…rest"})]}),n.jsx(e.td,{children:"—"}),n.jsxs(e.td,{children:["уходят на корень (",n.jsx(e.code,{children:"div"})," у ",n.jsx(e.code,{children:"card"}),", ",n.jsx(e.code,{children:"section"})," у ",n.jsx(e.code,{children:"section"}),"); ",n.jsx(e.code,{children:"onRouteClick"})," и ",n.jsx(e.code,{children:"onMapClick"})," получают событие"]})]})]})]}),`
`,n.jsx(e.h2,{id:"что-нашлось-в-figma",children:"Что нашлось в Figma"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"Где"}),n.jsx(e.th,{children:"Как в коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Цвета метки разные"}),n.jsxs(e.td,{children:["Default: ",n.jsx(e.code,{children:"bg/error"})," (#e02d3c); вариант 2: ",n.jsx(e.code,{children:"tag/sale"})," (#ef4444). ",n.jsx(e.code,{children:"tag/sale"})," — это токен ярлыка «Скидка», а не метки"]}),n.jsx(e.td,{children:"оставлено как в Figma, у каждого варианта своё; нужно решение, какой красный верный"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Положение плашки-факта"}),n.jsx(e.td,{children:"в Default плашка (Variant2) стоит справа сверху, x 259 y 18; в варианте 2 — слева сверху, 13 × 13"}),n.jsx(e.td,{children:"слева сверху, 12 от края; вопрос к дизайнеру, где её место"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Скрытые части"}),n.jsx(e.td,{children:"в Default скрыты нижняя ячейка с кнопкой «Построить маршрут», шеврон, разделитель и плашка-факт; в варианте 2 скрыты блок «Content» с ячейкой, плашка-факт (60 × 73)"}),n.jsxs(e.td,{children:["в код перенесены только видимые части и слот ",n.jsx(e.code,{children:"plate"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Разделитель"}),n.jsxs(e.td,{children:["у скрытых ",n.jsx(e.code,{children:"divider"})," линия привязана к ",n.jsx(e.code,{children:"border/border/default"}),", а не к ",n.jsx(e.code,{children:"divider/border/default"}),"; привязки не того типа в наборе не найдено"]}),n.jsx(e.td,{children:"не используется"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Сырые значения"}),n.jsxs(e.td,{children:["белые градиенты «Переход», радиальный ореол, плашка-факт ",n.jsx(e.code,{children:"#1b1b1b"})," с прозрачностью 0.75 вместо токена"]}),n.jsx(e.td,{children:"см. ниже"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Ширина"}),n.jsx(e.td,{children:"Default 369, вариант 2 393"}),n.jsx(e.td,{children:"на всю ширину контейнера"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Разделитель точкой"}),n.jsx(e.td,{children:"время в Figma написано с символом «∙» (U+2219)"}),n.jsx(e.td,{children:"в шрифте Inter Mbank такого знака нет, в коде «·» (U+00B7)"})]})]})]}),`
`,n.jsx(u,{css:b}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Скругление 20 px (883:4804, 996:5535): ",n.jsx(e.code,{children:"radius/lg"})," 16, ",n.jsx(e.code,{children:"radius/xl"})," 24."]}),`
`,n.jsxs(e.li,{children:["Ореол под меткой (883:4809): чёрный радиальный градиент 4 % → 0. Тень метки ",n.jsx(e.code,{children:"shadow/pin"})," записана как ",n.jsx(e.code,{children:"box-shadow"}),", а метка не прямоугольник, поэтому те же числа заданы как ",n.jsx(e.code,{children:"drop-shadow"}),"."]}),`
`,n.jsx(e.li,{children:"Позиции метки (31 и 50 px сверху), высота карты 160 px, переход к белому блоку 20 px."}),`
`,n.jsxs(e.li,{children:["Кнопка «Построить маршрут» в Figma — экземпляр Pill button Type=overlay (",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/?node-id=1492-366",rel:"nofollow",children:"1492:366"}),"): ",n.jsx(e.code,{children:"control/bg/overlay/default"}),", обводка 0.5 px ",n.jsx(e.code,{children:"control/border/overlay/default"}),", размытие ",n.jsx(e.code,{children:"blur/bg-4"}),", подпись IM-14 S, иконка 12 px. В коде это DS-компонент ",n.jsx(e.code,{children:'PillButton variant="overlay"'})," с иконкой справа."]}),`
`]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Блок ",n.jsx(e.code,{children:"section"})," — это ",n.jsx(e.code,{children:"<section>"})," с названием «Место встречи» и заголовком ",n.jsx(e.code,{children:"<h3>"}),", название места читается следом."]}),`
`,n.jsxs(e.li,{children:["Кнопка маршрута — ",n.jsx(e.code,{children:"<button>"})," или ",n.jsx(e.code,{children:"<a>"})," с понятным текстом, зона нажатия 44 px, видимый фокус."]}),`
`,n.jsxs(e.li,{children:["Нажатие на карту — отдельная ",n.jsx(e.code,{children:"<button>"})," с ",n.jsx(e.code,{children:"aria-label"})," «Открыть карту». Если в слоте интерактивная карта, не передавайте ",n.jsx(e.code,{children:"onMapClick"}),"."]}),`
`,n.jsxs(e.li,{children:["Метка и ореол декоративны (",n.jsx(e.code,{children:"aria-hidden"}),"), смысл несёт текст."]}),`
`,n.jsxs(e.li,{children:["Контраст: плашка и кнопка — белый на тёмной подложке ",n.jsx(e.code,{children:"scrim-strong"})," (64 %), на карте с любой подложкой читается."]}),`
`]})]})}function U(r={}){const{wrapper:e}={...d(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{U as default};
