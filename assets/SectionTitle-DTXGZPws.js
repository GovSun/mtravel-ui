import{j as n}from"./iframe-DuqTOznb.js";import{u as d,M as l,C as i,a as c}from"./blocks-CaaIEU4k.js";import{S as o,P as r,V as a,W as h,a as x,C as j,b as p,c as g}from"./SectionTitle.stories-BlhV21mJ.js";import{M as m,U as u}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./Caption-C6jupY-b.js";import"./SectionTitle-DUrzhWiT.js";import"./cx-2dOUpm6k.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./arrows-C0H-naDa.js";import"./Svg-B1-TtxWQ.js";import"./places-z-kxph-t.js";import"./tokens-INIU3VNa.js";const b=`/*
 * Section title (Figma «Divider label» 8:645). Left: padding 0 8 0 16, gap 12; Center: padding 0 16. The text column
 * is a stack of two fixed containers, the same at every size: the title row is 32 px high (text centred, gap 4 for
 * the icons), the subtitle row is 20 px high, under it (IM-16 R) or over it (IM-14 R). One-line title + subtitle = 52.
 * min-height, not height: a title that wraps grows instead of running into the subtitle.
 */
.root {
  --_title: var(--font-im-20-b);
  --_title-tracking: var(--tracking-im-20-b);
  --_title-pad: 5px; /* no token: (32 − line height) / 2 rounded down, Figma «Title» padding 8:645 */

  display: flex;
  align-items: center;
  box-sizing: border-box;
  gap: var(--spacing-md);
  width: 100%;
  padding: 0 var(--spacing-sm) 0 var(--spacing-lg);
}
.root[data-align='center'] {
  padding-right: var(--spacing-lg);
}
.root[data-size='24'] {
  --_title: var(--font-im-24-b);
  --_title-tracking: var(--tracking-im-24-b);
  --_title-pad: 3px; /* no token: (32 − 25.2) / 2 */
}
.root[data-size='18'] {
  --_title: var(--font-im-18-b);
  --_title-tracking: var(--tracking-im-18-b);
}
.root[data-size='16'] {
  --_title: var(--font-im-16-b);
  --_title-tracking: var(--tracking-im-16-b);
  --_title-pad: 6px; /* no token: (32 − 19.2) / 2 */
}

.text {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  min-width: 0;
}
.root[data-align='center'] .text {
  align-items: center;
  text-align: center;
}

.title {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  box-sizing: border-box;
  min-height: 32px; /* no token: Figma «Title» container 8:640, one line = 32 at every size */
  margin: 0;
  padding: var(--_title-pad) 0;
  color: var(--control-text-default);
  font: var(--_title);
  letter-spacing: var(--_title-tracking);
}
.root[data-align='center'] .title {
  justify-content: center;
}
.heading {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  min-width: 0;
}
.icon {
  display: flex;
  flex: none;
  color: var(--color-icon-secondary);
}
.icon > svg {
  width: 16px;
  height: 16px;
}

.subtitle {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  min-height: 20px; /* no token: Figma «Subtitle container», fixed 20 at every size */
  margin: 0;
  color: var(--control-text-secondary);
  font: var(--font-im-16-r);
  letter-spacing: var(--tracking-im-16-r);
}
.root[data-align='center'] .subtitle {
  justify-content: center;
}
/* the 16 px title (Figma «15») has no subtitle in Figma; it gets the small line of the other sizes */
.root[data-size='16'] .subtitle,
.root[data-subtitle='above'] .subtitle {
  font: var(--font-im-14-r);
  letter-spacing: var(--tracking-im-14-r);
}

/* «Все ›»: pill 52 × 24 on control/bg/default; the box around it is 68 × 32 in Figma (8 px on the sides).
   Figma 8:645 now overrides the fill to button/bg/secondary/default (gray-150): text/secondary on it is 4.03:1, below AA —
   kept on control/bg/default until the designer answers (see SectionTitle.mdx) */
.disclosure {
  --_press-in: calc(var(--section-title-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--section-title-motion-press-out-duration) * var(--motion-scale));

  position: relative;
  display: flex;
  flex: none;
  align-items: center;
  box-sizing: border-box;
  height: 24px;
  margin: 0 var(--spacing-sm);
  padding: 4px 4px 4px 8px; /* no token: Figma 144:990 (4 8 4 4 with the icon in the 14 px slot) */
  border: 0;
  border-radius: var(--radius-full);
  background-color: var(--control-bg-default);
  color: var(--color-text-secondary);
  font: var(--font-im-14-b);
  letter-spacing: var(--tracking-im-14-b);
  text-decoration: none;
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  transition:
    background-color var(--_press-out) var(--motion-ease-standard),
    transform var(--_press-out) var(--section-title-motion-press-easing);
}
/* 44 px target: the missing height split above and below (+1 px so a pressed, scaled pill still reaches 44), the 8 px of the Figma box on the sides */
.disclosure::after {
  content: '';
  position: absolute;
  inset: calc((100% - 44px) / 2 - 1px) -8px;
}
.disclosure[data-pressed] {
  background-color: var(--control-bg-pressed);
  transform: scale(var(--section-title-motion-press-scale));
  transition-duration: var(--_press-in);
}
.disclosure:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
.disclosureLabel {
  white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .disclosure[data-pressed] {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .disclosure[data-pressed] {
  transform: none;
}
`;function s(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:o}),`
`,n.jsx(e.h1,{id:"section-title",children:"Section title"}),`
`,n.jsx(e.p,{children:"Заголовок раздела экрана: «Популярные направления», «Что включено?», «Место встречи». К нему можно добавить подпись, иконки по бокам и ссылку «Все ›». Один заголовок на раздел, самого экрана он не называет: для шапки есть Appbar."}),`
`,n.jsxs(e.p,{children:["В Figma этот компонент называется «Divider label» (набор ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=8-645",rel:"nofollow",children:"8:645"}),"), в коде ",n.jsx(e.code,{children:"SectionTitle"}),", чтобы не путать с HTML-атрибутом ",n.jsx(e.code,{children:"title"}),". Оси набора: Divider label 24 | 20 | 17 | 15 (в коде 24 | 20 | 18 | 16) × Type Default | Sub+title × Align Left | Center, плюс переключатели Subtitle, Disclosure, Show icon left и Show icon right."]}),`
`,n.jsx(i,{of:r}),`
`,n.jsx(c,{of:r}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { SectionTitle } from '@mtravel/ui';

<SectionTitle>Популярные направления</SectionTitle>

// со ссылкой «Все ›»
<SectionTitle disclosure={{ onClick: openAll }}>Поездки на один день</SectionTitle>

// с подписью по центру
<SectionTitle align="center" subtitle="Идеи для впечатлений в этом сезоне">Сезонная подборка</SectionTitle>

// другое слово в ссылке
<SectionTitle size={18} subtitle="вс, 6 июл" disclosure={{ children: 'Изменить', onClick: edit }}>Дата и время</SectionTitle>
`})}),`
`,n.jsxs(e.p,{children:["По умолчанию заголовок — ",n.jsx(e.code,{children:"<h2>"}),". Уровень выбирает страница: ",n.jsx(e.code,{children:'as="h1"'})," для главного заголовка экрана, ",n.jsx(e.code,{children:'as="div"'}),", если это не заголовок."]}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(i,{of:a}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Props"}),n.jsx(e.th,{children:"Шрифт заголовка"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Divider label=24px"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"size={24}"})}),n.jsx(e.td,{children:"IM-24 B"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Divider label=20px"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"size={20}"})," (по умолчанию)"]}),n.jsx(e.td,{children:"IM-20 B"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Divider label=17px"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"size={18}"})}),n.jsx(e.td,{children:"IM-18 B"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Divider label=15px"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"size={16}"})}),n.jsx(e.td,{children:"IM-16 B"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Type=Default"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:'subtitlePosition="below"'}),", подпись под заголовком, IM-16 R"]}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Type=Sub+title"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:'subtitlePosition="above"'}),", мелкая подпись над заголовком, IM-14 R"]}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Align=Left / Center"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:'align="left"'})," / ",n.jsx(e.code,{children:'"center"'})]}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Subtitle"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"subtitle"})," (текст)"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"text/secondary"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Show icon left / right + Icon left / right"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"iconLeft"})," / ",n.jsx(e.code,{children:"iconRight"})," (узел 16 px)"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"icon/secondary"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Disclosure"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"disclosure={{ onClick }}"})," или ",n.jsx(e.code,{children:"{{ href, target, rel }}"}),", слово в ",n.jsx(e.code,{children:"children"})]}),n.jsx(e.td,{})]})]})]}),`
`,n.jsxs(e.p,{children:["Названия размеров в Figma 24 / 20 / 17 / 15 остались от старой шкалы, а стили уже переведены на чётные размеры. Проп ",n.jsx(e.code,{children:"size"})," принимает настоящий размер текста: 24, 20, 18, 16."]}),`
`,n.jsx(e.h3,{id:"высота-строк",children:"Высота строк"}),`
`,n.jsx(e.p,{children:"Одинаковая во всех размерах, как в Figma:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Заголовок"})," — слот 32 px на строку. Однострочный заголовок всегда 32, текст и иконки по центру по вертикали."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Подпись"})," — контейнер не ниже 20 px."]}),`
`,n.jsx(e.li,{children:"Между ними отступа нет. Однострочный заголовок с подписью — 52 px, без подписи — 32 px."}),`
`]}),`
`,n.jsx(e.h3,{id:"перенос-заголовка",children:"Перенос заголовка"}),`
`,n.jsx(e.p,{children:"Воздух слота остаётся сверху и снизу у заголовка как отступ: (32 − высота строки) / 2, вниз до целого. Поэтому при переносе подпись стоит от последней строки так же, как от единственной, и не прилипает к тексту."}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Размер"}),n.jsx(e.th,{children:"Строка"}),n.jsx(e.th,{children:"Отступ сверху и снизу"}),n.jsx(e.th,{children:"1 строка"}),n.jsx(e.th,{children:"2 строки"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"24 (IM-24 B)"}),n.jsx(e.td,{children:"25,2"}),n.jsx(e.td,{children:"3"}),n.jsx(e.td,{children:"32"}),n.jsx(e.td,{children:"56,4"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"20 (IM-20 B)"}),n.jsx(e.td,{children:"22"}),n.jsx(e.td,{children:"5"}),n.jsx(e.td,{children:"32"}),n.jsx(e.td,{children:"54"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"18 (IM-18 B, Figma 17)"}),n.jsx(e.td,{children:"21,6"}),n.jsx(e.td,{children:"5"}),n.jsx(e.td,{children:"32"}),n.jsx(e.td,{children:"53,2"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"16 (IM-16 B, Figma 15)"}),n.jsx(e.td,{children:"19,2"}),n.jsx(e.td,{children:"6"}),n.jsx(e.td,{children:"32"}),n.jsx(e.td,{children:"50,4"})]})]})]}),`
`,n.jsx(e.p,{children:"Заголовок — не больше двух строк, дальше многоточие. Полный текст остаётся в разметке, скринридер читает его целиком."}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(e.h2,{id:"ссылка-все-",children:"Ссылка «Все ›»"}),`
`,n.jsx(i,{of:x}),`
`,n.jsxs(e.p,{children:["Это настоящая кнопка (или ссылка, если есть ",n.jsx(e.code,{children:"href"}),"; ",n.jsx(e.code,{children:"target"})," и ",n.jsx(e.code,{children:"rel"})," работают как у ",n.jsx(e.code,{children:"<a>"}),"): таблетка 52 × 24 на ",n.jsx(e.code,{children:"control/bg/default"}),", зона нажатия 44 px по высоте. При нажатии фон темнеет до ",n.jsx(e.code,{children:"control/bg/pressed"})," и таблетка сжимается до 0.95 с первого касания. Сам заголовок статичный. Ваши обработчики указателя в ",n.jsx(e.code,{children:"disclosure"})," работают вместе с нажатием."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"className"})," и ",n.jsx(e.code,{children:"style"})," попадают на внешнюю обёртку, а ",n.jsx(e.code,{children:"ref"}),", ",n.jsx(e.code,{children:"id"}),", ",n.jsx(e.code,{children:"aria-*"})," и ",n.jsx(e.code,{children:"data-*"})," на сам заголовок (элемент из ",n.jsx(e.code,{children:"as"}),"): на него удобно ссылаться через ",n.jsx(e.code,{children:"aria-labelledby"})," и прокручивать к нему."]}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нажатие на «Все»:"})," фон и масштаб отвечают сразу, как у Button: быстро вниз (100 мс), мягче обратно (240 мс)."]}),`
`,n.jsxs(e.li,{children:["Это CSS-переходы, их можно прервать на полпути. Двигается только ",n.jsx(e.code,{children:"transform"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," без сжатия, фон по-прежнему темнеет."]}),`
`]}),`
`,n.jsx(m,{prefix:"--section-title-"}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.p,{children:"Главная: заголовки разделов одного уровня на одном экране."}),`
`,n.jsx(i,{of:j}),`
`,n.jsx(e.p,{children:"Детальная страница экскурсии."}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(e.p,{children:"Каталог и оформление: заголовок страницы 24 px, город со счётчиком, раздел со ссылкой «Изменить»."}),`
`,n.jsx(i,{of:g}),`
`,n.jsx(e.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"В Figma"}),n.jsx(e.th,{children:"В коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Заголовок «15px» (16 в коде) с подписью"}),n.jsx(e.td,{children:"у 15px только Default без подписи, Sub+title нет"}),n.jsx(e.td,{children:"подпись разрешена, мелкая IM-14 R. Нужен макет"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Disclosure при Align=Center"}),n.jsx(e.td,{children:"ссылка стоит справа, заголовок смещается от центра"}),n.jsx(e.td,{children:"так же. На экранах такого нет"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Badge_market"}),n.jsx(e.td,{children:"скрытый слой в вариантах 24px, с цветом #0caf0c и стилем Inter/IN - 15 SB вне DS"}),n.jsx(e.td,{children:"не переносим"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Цвет шеврона «Все»"}),n.jsx(e.td,{children:"внутри таблетки иконка, цвет не привязан"}),n.jsxs(e.td,{children:["цвет текста таблетки, ",n.jsx(e.code,{children:"text/secondary"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Таблетка «Все»"}),n.jsxs(e.td,{children:["вложенный компонент «Disclosure/Button all» 144:996 удалён с холста (не опубликован); во всех 14 вариантах заливка переопределена на ",n.jsx(e.code,{children:"button/bg/secondary/default"})," (#e2e3e5), на ней ",n.jsx(e.code,{children:"text/secondary"})," даёт 4.03:1, ниже AA 4.5; у новой ",n.jsx(e.a,{href:"?path=/docs/components-pill-button--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Pill button"})," серого типа нет"]}),n.jsxs(e.td,{children:["пока ",n.jsx(e.code,{children:"control/bg/default"})," (#eeeff3). Вопрос: какой фон и не перевести ли на Pill button"]})]})]})]}),`
`,n.jsx(u,{css:b}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Отступы таблетки «Все» 4 / 8 / 4 / 4 (Figma 144:990): токены есть только на 4, 8, 12, 16, а левый и правый разные."}),`
`]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Заголовок — настоящий ",n.jsx(e.code,{children:"<h2>"})," (или другой уровень через ",n.jsx(e.code,{children:"as"}),"), скринридер перечисляет разделы."]}),`
`,n.jsxs(e.li,{children:["«Все» — ",n.jsx(e.code,{children:"<button>"})," или ",n.jsx(e.code,{children:"<a>"}),", фокус с клавиатуры виден кольцом ",n.jsx(e.code,{children:"border/focus"}),". Если вокруг несколько «Все», дай каждой понятное имя через ",n.jsx(e.code,{children:"aria-label"}),": «Все многодневные поездки»."]}),`
`,n.jsxs(e.li,{children:["Цвет заголовка ",n.jsx(e.code,{children:"text/primary"}),", подписи ",n.jsx(e.code,{children:"text/secondary"}),": контраст выше 4.5:1."]}),`
`]})]})}function P(t={}){const{wrapper:e}={...d(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{P as default};
