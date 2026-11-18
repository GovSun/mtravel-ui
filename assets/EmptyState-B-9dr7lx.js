import{j as n}from"./iframe-DuqTOznb.js";import{u as l,M as d,C as i,a}from"./blocks-CaaIEU4k.js";import{E as c,P as s,V as o,a as h,C as x,b as j,c as p}from"./EmptyState.stories-p1zAhPVN.js";import{U as m}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./Phone-DvUrDP6C.js";import"./cx-2dOUpm6k.js";import"./Cell-DbWJlVzG.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./LeadingIcon-B28I7Mlv.js";import"./Skeleton-D5GPHumj.js";import"./mergeRefs-BPT53vMC.js";import"./motion-C-Q-avtg.js";import"./general-DYSfllt2.js";import"./Svg-B1-TtxWQ.js";import"./paths-BjPgyxdS.js";import"./PillButton-BwV4GISW.js";import"./arrows-C0H-naDa.js";import"./Counter-6eoXZdLB.js";import"./useControllableState-QyUXWn2y.js";import"./CounterButton-ddQoagoR.js";import"./RollingNumber-BIb_2A9U.js";import"./Toggle-DcBpc41r.js";import"./useInstantAfterKey-D0TlCdRr.js";import"./Checkbox-C1X2mrZB.js";import"./Radio-Bz4AqS0k.js";import"./CellCenter-CXZRRsHl.js";import"./Divider-BbjTiNWY.js";import"./places-z-kxph-t.js";import"./Appbar-BYMxUm5k.js";import"./IconButton-BxMc4E4A.js";import"./SearchSummary-oxe_VM3Q.js";import"./mtravel-mark-Cc18rIoX.js";import"./Search-qejZ8oNQ.js";import"./SlotIcon-Pgp7E4sy.js";import"./Button-CKwNO4NU.js";import"./tokens-INIU3VNa.js";const g=`/*
 * EmptyState, Figma 337:34 (page Empty state): Size Large | Small. Padding, gaps, type and colours as in Figma; the width fills
 * the container (Figma 360 is the default, the screens use 393).
 */
.root {
  --_pad: var(--spacing-lg);
  --_gap: var(--spacing-md);
  --_visual: 64px;
  --_text-gap: var(--spacing-xs);
  --_title: var(--font-im-18-b);
  --_title-track: var(--tracking-im-18-b);
  --_sub: var(--font-im-14-r);
  --_sub-track: var(--tracking-im-14-r);

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--_gap);
  width: 100%;
  padding: var(--_pad);
  text-align: center;
}
.root[data-size='lg'] {
  --_pad: calc(var(--spacing-lg) + var(--spacing-sm)); /* 24 */
  --_gap: calc(var(--spacing-lg) + var(--spacing-sm)); /* 24 */
  --_visual: 128px;
  --_text-gap: var(--spacing-sm);
  --_title: var(--font-im-24-b);
  --_title-track: var(--tracking-im-24-b);
  --_sub: var(--font-im-16-r);
  --_sub-track: var(--tracking-im-16-r);
}

.visual {
  position: relative;
  flex: none;
  width: var(--_visual);
  height: var(--_visual);
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
.visual img {
  position: absolute;
  max-width: none;
  -webkit-user-drag: none;
}
/* Test: the picture fills the square */
.cover {
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 213: 1.1875 × the square (152 of 128), centred, overflows on purpose */
.suitcase {
  left: 50%;
  top: 50%;
  width: 118.75%;
  height: 118.75%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}
/* Search: the two pictures sit in % of the square, Figma 338:4528 / 338:4529 */
.searchHandle {
  left: 51.87%;
  top: 52.04%;
  width: 31.77%; /* 100 − 51.87 − 16.36 */
  height: 31.59%; /* 100 − 52.04 − 16.37 */
}
.searchLens {
  left: 16.36%;
  top: 16.36%;
  width: 48.88%; /* 100 − 16.36 − 34.76 */
  height: 48.69%; /* 100 − 16.36 − 34.95 */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg); /* Figma 337:34 «Content»: gap 16 between the text and the button, both sizes */
  align-self: stretch;
}
.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--_text-gap);
  align-self: stretch;
}
.title {
  margin: 0;
  font: var(--_title);
  letter-spacing: var(--_title-track);
  color: var(--control-text-default);
}
.subtitle {
  margin: 0;
  font: var(--_sub);
  letter-spacing: var(--_sub-track);
  color: var(--control-text-secondary);
  white-space: pre-line; /* the line break of the Figma subtitle */
}
`;function r(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:c}),`
`,n.jsx(t.h1,{id:"emptystate",children:"EmptyState"}),`
`,n.jsx(t.p,{children:"Что экран или список говорит, когда показывать нечего: 3D-картинка, заголовок, строка пояснения и, если помогает, одно действие. Например, «Ничего не найдено» в поиске направления. Это не ошибка: если запрос упал, нужно сообщение с кнопкой «Повторить»."}),`
`,n.jsxs(t.p,{children:["Figma: ",n.jsx(t.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=337-34",rel:"nofollow",children:"Empty state 337:34"}),": Size Large | Small, свойства Title, Subtitle, Show subtitle, Show visual, Show button. Картинки из ",n.jsx(t.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=343-6226",rel:"nofollow",children:"Visual 343:6226"})," (Search, Test, 213). В Figma у компонента статус CHANGED (изменения не опубликованы); собрано по текущей версии файла."]}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(a,{of:s}),`
`,n.jsx(t.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { EmptyState, Button } from '@mtravel/ui';

<EmptyState size="sm" title="Ничего не найдено" subtitle="Но вот, что у нас есть" />

<EmptyState
  title="Ничего не нашлось"
  subtitle="Попробуйте изменить фильтры, чтобы увидеть больше вариантов"
  action={<Button variant="ghost" size={48} radius="full" onClick={reset}>Сбросить фильтры</Button>}
/>
`})}),`
`,n.jsxs(t.p,{children:["Какой размер: ",n.jsx(t.strong,{children:"Large"})," (",n.jsx(t.code,{children:'size="lg"'}),", по умолчанию) для целого экрана или списка (поиск, фильтр), ",n.jsx(t.strong,{children:"Small"})," (",n.jsx(t.code,{children:'size="sm"'}),") для блока над другим содержимым (над популярными направлениями). Тексты: заголовок говорит, что произошло, подзаголовок что делать или что есть вместо этого."]}),`
`,n.jsx(t.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(i,{of:o}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{}),n.jsx(t.th,{children:"Large"}),n.jsx(t.th,{children:"Small"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Отступы / зазор"}),n.jsx(t.td,{children:"24 / 24"}),n.jsx(t.td,{children:"16 / 12"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Картинка"}),n.jsx(t.td,{children:"128"}),n.jsx(t.td,{children:"64"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Заголовок"}),n.jsx(t.td,{children:"IM-24 B"}),n.jsx(t.td,{children:"IM-18 B"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Подзаголовок"}),n.jsx(t.td,{children:"IM-16 R"}),n.jsx(t.td,{children:"IM-14 R"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Зазор текста"}),n.jsx(t.td,{children:"8"}),n.jsx(t.td,{children:"4"})]})]})]}),`
`,n.jsxs(t.p,{children:["Цвета: заголовок ",n.jsx(t.code,{children:"control/text/default"}),", подзаголовок ",n.jsx(t.code,{children:"control/text/secondary"}),". Между текстом и кнопкой 16 (",n.jsx(t.code,{children:"spacing/lg"}),", Figma «Content»). Ширина по контейнеру (в Figma 360, на экранах 393). Перенос строки в подзаголовке (",n.jsx(t.code,{children:"\\n"}),") сохраняется."]}),`
`,n.jsx(t.h2,{id:"картинки",children:"Картинки"}),`
`,n.jsx(i,{of:h}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Figma Property 1"}),n.jsx(t.th,{children:n.jsx(t.code,{children:"visual"})}),n.jsx(t.th,{children:"Что на ней"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Search"}),n.jsx(t.td,{children:n.jsx(t.code,{children:"search"})}),n.jsx(t.td,{children:"лупа (две картинки, лупа и ручка, лежат друг на друге по процентам)"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Test"}),n.jsx(t.td,{children:n.jsx(t.code,{children:"trip"})}),n.jsx(t.td,{children:"чемодан с самолётом и щитом"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"213"}),n.jsx(t.td,{children:n.jsx(t.code,{children:"suitcase"})}),n.jsx(t.td,{children:"синий чемодан, картинка по умолчанию, как в Figma"})]})]})]}),`
`,n.jsxs(t.p,{children:["Это растровые файлы из Figma (",n.jsx(t.code,{children:"components/EmptyState/assets/*.png"}),", 613–1200 px). Картинка чемодана в 1.1875 раза больше квадрата и выходит за его границы: так нарисовано в Figma. Для своей картинки передайте узел в ",n.jsx(t.code,{children:"visual"}),", ",n.jsx(t.code,{children:"false"})," убирает её (Show visual)."]}),`
`,n.jsx(t.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(t.p,{children:"«Куда отправимся?»: в поиске набрали «аффыаф3124», ничего нет. Small, под ним популярные направления."}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(t.p,{children:"«Результаты»: ничего подходящего под направление и даты, Large без кнопки."}),`
`,n.jsx(i,{of:j}),`
`,n.jsx(t.p,{children:"«Фильтр»: фильтры отсекли всё, Large с кнопкой «Сбросить фильтры»."}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(t.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(t.p,{children:["Своей анимации нет: компонент статичный. Если он появляется на месте списка после загрузки, используйте ",n.jsx(t.code,{children:"LoadingSwap"})," из Skeleton."]}),`
`,n.jsx(m,{css:g}),`
`,n.jsx(t.h2,{id:"без-токенов-в-ds-и-проблемы-figma",children:"Без токенов в DS и проблемы Figma"}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Что"}),n.jsx(t.th,{children:"В Figma"}),n.jsx(t.th,{children:"Что сделано"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Кнопка в Empty state"}),n.jsxs(t.td,{children:["по умолчанию Ghost Size 44 Radius 16 с ",n.jsx(t.strong,{children:"включённой иконкой справа"})," (Show icon right = true, иконка 95:179), при том что в Ghost её быть не должно; на экранах дизайнер каждый раз ставит Size 48, Radius Full и выключает иконку"]}),n.jsxs(t.td,{children:["слот ",n.jsx(t.code,{children:"action"}),"; в примерах Ghost 48 Full без иконки, как на экранах"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Картинки"}),n.jsx(t.td,{children:"растр внутри компонента Visual"}),n.jsx(t.td,{children:"PNG-ассеты"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Visual 110 и Empty state 128 / 64"}),n.jsx(t.td,{children:"картинка выходит за рамку, рамка без clip"}),n.jsx(t.td,{children:"повторено в CSS"})]})]})]}),`
`,n.jsx(t.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["Заголовок это ",n.jsx(t.code,{children:"h2"})," (меняется через ",n.jsx(t.code,{children:"headingLevel"}),", ",n.jsx(t.code,{children:"0"})," даёт ",n.jsx(t.code,{children:"div"}),"), пояснение абзац."]}),`
`,n.jsxs(t.li,{children:["Картинка декоративная (",n.jsx(t.code,{children:'alt=""'}),"), смысл есть в тексте."]}),`
`,n.jsxs(t.li,{children:["Кнопка в ",n.jsx(t.code,{children:"action"})," обычная ",n.jsx(t.a,{href:"?path=/docs/components-button--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Button"})," со своей зоной нажатия."]}),`
`]})]})}function sn(e={}){const{wrapper:t}={...l(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{sn as default};
