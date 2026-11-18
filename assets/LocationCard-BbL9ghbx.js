import{j as n}from"./iframe-DuqTOznb.js";import{u as d,M as s,C as r,a as c}from"./blocks-CaaIEU4k.js";import{L as a,P as t,V as l,I as h,C as x,a as p,b as j}from"./LocationCard.stories-DZq0V_gm.js";import{M as m,U as g}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./cx-2dOUpm6k.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./Badge-Dbn3uc4E.js";import"./arrows-C0H-naDa.js";import"./Svg-B1-TtxWQ.js";import"./SectionTitle-DUrzhWiT.js";import"./places-z-kxph-t.js";import"./PillButton-BwV4GISW.js";import"./FactPlate-BUAmB4hm.js";import"./tokens-INIU3VNa.js";const u=`/*
 * LocationCard (Figma card_location 996:5593).
 * \`card\` (Default): 20 px radius (no token: radius/lg is 16, radius/xl 24), frame border/default, fill bg/sunken-subtle;
 * the white block under the map is bg/surface with a 20 px fade above it.
 * \`section\` (2): heading, a 361 × 160 map card, the name of the place.
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
  left: 50%;
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
  left: 50%;
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
  --_pin-top: 31px; /* no token: Figma 883:4810 */
  --_halo-top: 44px; /* no token: Figma 883:4809 */
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
.address {
  font: var(--font-im-16-r);
  letter-spacing: var(--tracking-im-16-r);
  color: var(--control-text-tertiary);
}
.name {
  font: var(--font-im-18-m);
  letter-spacing: var(--tracking-im-18-m);
  color: var(--control-text-default);
}

/* ---------------------------------------------------------------- section (2) */
.root[data-variant='section'] {
  --_pin-top: 50px; /* no token: Figma 996:5540 */
  --_halo-top: 62px; /* no token: Figma 996:5539 */
  --_pin-color: var(--color-tag-sale); /* Figma binds this pin to tag/sale, the Default one to bg/error */

  display: flex;
  flex-direction: column;
}
.heading {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  min-height: 48px; /* Figma: the Title row is 48 px; with a time line the text is taller and the screens add 12 below */
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
  padding: 0 var(--spacing-sm) 0 var(--spacing-lg); /* Figma Title: a 48 px row, the text block centred in it */
}
.placeName {
  padding: var(--spacing-xs) 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font: var(--font-im-16-m);
  letter-spacing: var(--tracking-im-16-m);
  color: var(--control-text-default);
}
.placeAddress {
  margin-top: -2px; /* Figma Title / subtitle: gap -2 */
  font: var(--font-im-14-r);
  letter-spacing: var(--tracking-im-14-r);
  color: var(--control-text-tertiary);
}

`;function o(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:a}),`
`,n.jsx(e.h1,{id:"locationcard",children:"LocationCard"}),`
`,n.jsx(e.p,{children:"Карточка места: где встречаемся или где проходит событие. Карта, красная метка и название под ней. На детальной странице и в заказе это блок «Место встречи» с кнопкой «Построить маршрут»."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=996-5593",rel:"nofollow",children:"card_location 996:5593"}),": Property 1 = Default | 2, переключатели Time и Time badge."]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"В коде"}),n.jsx(e.th,{children:"Что это"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Default"}),n.jsx(e.td,{children:n.jsx(e.code,{children:'variant="card"'})}),n.jsx(e.td,{children:"карточка с картой сверху и названием на белом под ней; время — тёмная плашка над адресом"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"2"}),n.jsx(e.td,{children:n.jsx(e.code,{children:'variant="section"'})}),n.jsx(e.td,{children:"заголовок «Место встречи», карта с меткой и кнопкой маршрута, название места под картой"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Time badge"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"time"})," у ",n.jsx(e.code,{children:"card"})]}),n.jsx(e.td,{children:"плашка «вс, 6 июл, 19:00»"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Time"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"time"})," у ",n.jsx(e.code,{children:"section"})]}),n.jsx(e.td,{children:"серая строка под заголовком: «вс, 17 дек, 18:00»"})]})]})]}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(c,{of:t}),`
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
`,n.jsxs(e.p,{children:["Кнопка «Построить маршрут» появляется, когда есть действие: ",n.jsx(e.code,{children:"onRouteClick"})," или ",n.jsx(e.code,{children:"routeHref"}),". Нажатие на саму карту — отдельное действие ",n.jsx(e.code,{children:"onMapClick"}),": на экране «Построить маршрут по клику на карту» оно тоже открывает маршрут."]}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(e.h2,{id:"действия",children:"Действия"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Кнопка «Построить маршрут»"})," — это ",n.jsx(e.a,{href:"?path=/docs/components-pill-button--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"PillButton"})," ",n.jsx(e.code,{children:"overlay"}),": нажатие, зона 44 px и фокус у неё свои."]}),`
`,n.jsx(e.li,{children:"Вокруг плашки невидимая зона нажатия 44 px по высоте."}),`
`,n.jsx(e.li,{children:"Сама карточка не движется: карта в слоте живёт по своим правилам."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," плашка не сжимается."]}),`
`]}),`
`,n.jsx(m,{prefix:"--location-card-"}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.p,{children:"Файл «Выходные»: «Детали заказа», «Мои заказы», «Избранное»."}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(r,{of:p}),`
`,n.jsx(r,{of:j}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Prop"}),n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Что делает"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"variant"})}),n.jsx(e.td,{children:"Property 1"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"card"})," (Default) или ",n.jsx(e.code,{children:"section"})," (2)"]})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"name"}),", ",n.jsx(e.code,{children:"address"})]}),n.jsx(e.td,{children:"название, «Кыргызстан, Бишкек»"}),n.jsx(e.td,{children:"текст места"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"time"})}),n.jsx(e.td,{children:"Time badge, Time"}),n.jsx(e.td,{children:"время события"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"heading"})}),n.jsx(e.td,{children:"«Место встречи»"}),n.jsxs(e.td,{children:["заголовок ",n.jsx(e.code,{children:"section"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"map"})}),n.jsx(e.td,{children:"«Карта-заглушка»"}),n.jsx(e.td,{children:"слот карты"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"plate"})}),n.jsx(e.td,{children:"«Плашка-факт», свойство Time"}),n.jsx(e.td,{children:"слот плашки с датой на карте, слева сверху; в Figma по умолчанию скрыта (Time = false)"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"routeLabel"}),", ",n.jsx(e.code,{children:"onRouteClick"}),", ",n.jsx(e.code,{children:"routeHref"})]}),n.jsx(e.td,{children:"«Построить маршрут»"}),n.jsxs(e.td,{children:["кнопка маршрута в ",n.jsx(e.code,{children:"section"})]})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"onMapClick"}),", ",n.jsx(e.code,{children:"mapLabel"})]}),n.jsx(e.td,{children:"—"}),n.jsxs(e.td,{children:["нажатие на карту в ",n.jsx(e.code,{children:"section"})]})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"ref"}),", ",n.jsx(e.code,{children:"className"}),", ",n.jsx(e.code,{children:"style"}),", ",n.jsx(e.code,{children:"…rest"})]}),n.jsx(e.td,{children:"—"}),n.jsxs(e.td,{children:["уходят на корень (",n.jsx(e.code,{children:"div"})," у ",n.jsx(e.code,{children:"card"}),", ",n.jsx(e.code,{children:"section"})," у ",n.jsx(e.code,{children:"section"}),"); ",n.jsx(e.code,{children:"onRouteClick"})," и ",n.jsx(e.code,{children:"onMapClick"})," получают событие"]})]})]})]}),`
`,n.jsx(e.h2,{id:"что-нашлось-в-figma",children:"Что нашлось в Figma"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"Где"}),n.jsx(e.th,{children:"Как в коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Цвета метки разные"}),n.jsxs(e.td,{children:["Default: ",n.jsx(e.code,{children:"bg/error"})," (#e02d3c); вариант 2: ",n.jsx(e.code,{children:"tag/sale"})," (#ef4444). ",n.jsx(e.code,{children:"tag/sale"})," — это токен ярлыка «Скидка», а не метки"]}),n.jsx(e.td,{children:"оставлено как в Figma, у каждого варианта своё; нужно решение, какой красный верный"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Положение плашки-факта"}),n.jsx(e.td,{children:"в Default плашка (Variant2) стоит справа сверху, x 259 y 18; в варианте 2 — слева сверху, 13 × 13"}),n.jsx(e.td,{children:"слева сверху, 12 от края; вопрос к дизайнеру, где её место"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Скрытые части"}),n.jsx(e.td,{children:"в Default скрыты нижняя ячейка с кнопкой «Построить маршрут», шеврон, разделитель и плашка-факт; в варианте 2 скрыты блок «Content» с ячейкой, плашка-факт (60 × 73)"}),n.jsxs(e.td,{children:["в код перенесены только видимые части и слот ",n.jsx(e.code,{children:"plate"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Разделитель"}),n.jsxs(e.td,{children:["у скрытых ",n.jsx(e.code,{children:"divider"})," линия привязана к ",n.jsx(e.code,{children:"border/border/default"}),", а не к ",n.jsx(e.code,{children:"divider/border/default"}),"; привязки не того типа в наборе не найдено"]}),n.jsx(e.td,{children:"не используется"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Сырые значения"}),n.jsxs(e.td,{children:["белые градиенты «Переход», радиальный ореол, плашка-факт ",n.jsx(e.code,{children:"#1b1b1b"})," с прозрачностью 0.75 вместо токена"]}),n.jsx(e.td,{children:"см. ниже"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Ширина"}),n.jsx(e.td,{children:"Default 369, вариант 2 393"}),n.jsx(e.td,{children:"на всю ширину контейнера"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Разделитель точкой"}),n.jsx(e.td,{children:"время в Figma написано с символом «∙» (U+2219)"}),n.jsx(e.td,{children:"в шрифте Inter Mbank такого знака нет, в коде «·» (U+00B7)"})]})]})]}),`
`,n.jsx(g,{css:u}),`
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
`]})]})}function I(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{I as default};
