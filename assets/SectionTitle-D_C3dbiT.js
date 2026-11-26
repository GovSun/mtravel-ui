import{j as e}from"./iframe-DyD5Yel4.js";import{u as d,M as l,C as i,a as c}from"./blocks-CcI75u3-.js";import{S as o,P as s,V as h,W as x,a,C as j,b as g,c as p}from"./SectionTitle.stories-C9akG7Wb.js";import{M as m,U as b}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./Caption-D_clnAXK.js";import"./SectionTitle-CwRady4O.js";import"./PillButton-Cdj7WtD9.js";import"./cx-2dOUpm6k.js";import"./Pressable-CAjp7WdB.js";import"./usePress-XYzAalw7.js";import"./arrows-0JYTYJZi.js";import"./Svg-B7GM2ZFd.js";import"./brand-CGrxom_Q.js";import"./places-CYDz-5dl.js";import"./tokens-Bc2_NrJ2.js";const u=`/*
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
/* «Все»: the Pill button link (PillButton, 14, link colour) at the end of the row; it keeps its own press. */
.root .disclosure {
  flex: none;
  margin: 0; /* two classes: the PillButton root sets its own margin; the 8 px to the edge is the link box inset (Figma 4687:46132: 343 + 42 = 385) */
}

`;function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(n.h1,{id:"section-title",children:"Section title"}),`
`,e.jsx(n.p,{children:"Заголовок раздела экрана: «Популярные направления», «Что включено?», «Место встречи». К нему можно добавить подпись, иконки по бокам и ссылку «Все ›». Один заголовок на раздел, самого экрана он не называет: для шапки есть Appbar."}),`
`,e.jsxs(n.p,{children:["В Figma этот компонент называется «Divider label» (набор ",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=8-645",rel:"nofollow",children:"8:645"}),"), в коде ",e.jsx(n.code,{children:"SectionTitle"}),", чтобы не путать с HTML-атрибутом ",e.jsx(n.code,{children:"title"}),". Оси набора: Divider label 24 | 20 | 17 | 15 (в коде 24 | 20 | 18 | 16) × Type Default | Sub+title × Align Left | Center, плюс переключатели Subtitle, Disclosure, Show icon left и Show icon right."]}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { SectionTitle } from '@mtravel/ui';

<SectionTitle>Популярные направления</SectionTitle>

// со ссылкой «Все ›»
<SectionTitle disclosure={{ onClick: openAll }}>Поездки на один день</SectionTitle>

// с подписью по центру
<SectionTitle align="center" subtitle="Идеи для впечатлений в этом сезоне">Сезонная подборка</SectionTitle>

// другое слово в ссылке
<SectionTitle size={18} subtitle="вс, 6 июл" disclosure={{ children: 'Изменить', onClick: edit }}>Дата и время</SectionTitle>
`})}),`
`,e.jsxs(n.p,{children:["По умолчанию заголовок — ",e.jsx(n.code,{children:"<h2>"}),". Уровень выбирает страница: ",e.jsx(n.code,{children:'as="h1"'})," для главного заголовка экрана, ",e.jsx(n.code,{children:'as="div"'}),", если это не заголовок."]}),`
`,e.jsx(n.h2,{id:"варианты",children:"Варианты"}),`
`,e.jsx(i,{of:h}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Figma"}),e.jsx(n.th,{children:"Props"}),e.jsx(n.th,{children:"Шрифт заголовка"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Divider label=24px"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"size={24}"})}),e.jsx(n.td,{children:"IM-24 B"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Divider label=20px"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"size={20}"})," (по умолчанию)"]}),e.jsx(n.td,{children:"IM-20 B"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Divider label=17px"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"size={18}"})}),e.jsx(n.td,{children:"IM-18 B"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Divider label=15px"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"size={16}"})}),e.jsx(n.td,{children:"IM-16 B"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Type=Default"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:'subtitlePosition="below"'}),", подпись под заголовком, IM-16 R"]}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Type=Sub+title"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:'subtitlePosition="above"'}),", мелкая подпись над заголовком, IM-14 R"]}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Align=Left / Center"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:'align="left"'})," / ",e.jsx(n.code,{children:'"center"'})]}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Subtitle"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"subtitle"})," (текст)"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"text/secondary"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Show icon left / right + Icon left / right"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"iconLeft"})," / ",e.jsx(n.code,{children:"iconRight"})," (узел 16 px)"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"icon/secondary"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Disclosure"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"disclosure={{ onClick }}"})," или ",e.jsx(n.code,{children:"{{ href, target, rel }}"}),", слово в ",e.jsx(n.code,{children:"children"})]}),e.jsx(n.td,{})]})]})]}),`
`,e.jsxs(n.p,{children:["Названия размеров в Figma 24 / 20 / 17 / 15 остались от старой шкалы, а стили уже переведены на чётные размеры. Проп ",e.jsx(n.code,{children:"size"})," принимает настоящий размер текста: 24, 20, 18, 16."]}),`
`,e.jsx(n.h3,{id:"высота-строк",children:"Высота строк"}),`
`,e.jsx(n.p,{children:"Одинаковая во всех размерах, как в Figma:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Заголовок"})," — слот 32 px на строку. Однострочный заголовок всегда 32, текст и иконки по центру по вертикали."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Подпись"})," — контейнер не ниже 20 px."]}),`
`,e.jsx(n.li,{children:"Между ними отступа нет. Однострочный заголовок с подписью — 52 px, без подписи — 32 px."}),`
`]}),`
`,e.jsx(n.h3,{id:"перенос-заголовка",children:"Перенос заголовка"}),`
`,e.jsx(n.p,{children:"Воздух слота остаётся сверху и снизу у заголовка как отступ: (32 − высота строки) / 2, вниз до целого. Поэтому при переносе подпись стоит от последней строки так же, как от единственной, и не прилипает к тексту."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Размер"}),e.jsx(n.th,{children:"Строка"}),e.jsx(n.th,{children:"Отступ сверху и снизу"}),e.jsx(n.th,{children:"1 строка"}),e.jsx(n.th,{children:"2 строки"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"24 (IM-24 B)"}),e.jsx(n.td,{children:"25,2"}),e.jsx(n.td,{children:"3"}),e.jsx(n.td,{children:"32"}),e.jsx(n.td,{children:"56,4"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"20 (IM-20 B)"}),e.jsx(n.td,{children:"22"}),e.jsx(n.td,{children:"5"}),e.jsx(n.td,{children:"32"}),e.jsx(n.td,{children:"54"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"18 (IM-18 B, Figma 17)"}),e.jsx(n.td,{children:"21,6"}),e.jsx(n.td,{children:"5"}),e.jsx(n.td,{children:"32"}),e.jsx(n.td,{children:"53,2"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"16 (IM-16 B, Figma 15)"}),e.jsx(n.td,{children:"19,2"}),e.jsx(n.td,{children:"6"}),e.jsx(n.td,{children:"32"}),e.jsx(n.td,{children:"50,4"})]})]})]}),`
`,e.jsx(n.p,{children:"Заголовок — не больше двух строк, дальше многоточие. Полный текст остаётся в разметке, скринридер читает его целиком."}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h2,{id:"ссылка-все-",children:"Ссылка «Все ›»"}),`
`,e.jsx(i,{of:a}),`
`,e.jsxs(n.p,{children:["Это настоящая кнопка (или ссылка, если есть ",e.jsx(n.code,{children:"href"}),"; ",e.jsx(n.code,{children:"target"})," и ",e.jsx(n.code,{children:"rel"})," работают как у ",e.jsx(n.code,{children:"<a>"}),"): таблетка 52 × 24 на ",e.jsx(n.code,{children:"control/bg/default"}),", зона нажатия 44 px по высоте. При нажатии фон темнеет до ",e.jsx(n.code,{children:"control/bg/pressed"})," и таблетка сжимается до 0.95 с первого касания. Сам заголовок статичный. Ваши обработчики указателя в ",e.jsx(n.code,{children:"disclosure"})," работают вместе с нажатием."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"className"})," и ",e.jsx(n.code,{children:"style"})," попадают на внешнюю обёртку, а ",e.jsx(n.code,{children:"ref"}),", ",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"aria-*"})," и ",e.jsx(n.code,{children:"data-*"})," на сам заголовок (элемент из ",e.jsx(n.code,{children:"as"}),"): на него удобно ссылаться через ",e.jsx(n.code,{children:"aria-labelledby"})," и прокручивать к нему."]}),`
`,e.jsx(n.h2,{id:"анимация",children:"Анимация"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Нажатие на «Все»:"})," фон и масштаб отвечают сразу, как у Button: быстро вниз (100 мс), мягче обратно (240 мс)."]}),`
`,e.jsxs(n.li,{children:["Это CSS-переходы, их можно прервать на полпути. Двигается только ",e.jsx(n.code,{children:"transform"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reduced motion:"})," без сжатия, фон по-прежнему темнеет."]}),`
`]}),`
`,e.jsx(m,{prefix:"--section-title-"}),`
`,e.jsx(n.h2,{id:"кейсы",children:"Кейсы"}),`
`,e.jsx(n.p,{children:"Главная: заголовки разделов одного уровня на одном экране."}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.p,{children:"Детальная страница экскурсии."}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.p,{children:"Каталог и оформление: заголовок страницы 24 px, город со счётчиком, раздел со ссылкой «Изменить»."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Что"}),e.jsx(n.th,{children:"В Figma"}),e.jsx(n.th,{children:"В коде"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Заголовок «15px» (16 в коде) с подписью"}),e.jsx(n.td,{children:"у 15px только Default без подписи, Sub+title нет"}),e.jsx(n.td,{children:"подпись разрешена, мелкая IM-14 R. Нужен макет"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Disclosure при Align=Center"}),e.jsx(n.td,{children:"ссылка стоит справа, заголовок смещается от центра"}),e.jsx(n.td,{children:"так же. На экранах такого нет"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Badge_market"}),e.jsx(n.td,{children:"скрытый слой в вариантах 24px, с цветом #0caf0c и стилем Inter/IN - 15 SB вне DS"}),e.jsx(n.td,{children:"не переносим"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Цвет шеврона «Все»"}),e.jsx(n.td,{children:"внутри таблетки иконка, цвет не привязан"}),e.jsxs(n.td,{children:["цвет текста таблетки, ",e.jsx(n.code,{children:"text/secondary"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Таблетка «Все»"}),e.jsxs(n.td,{children:["вложенный компонент «Disclosure/Button all» 144:996 удалён с холста (не опубликован); во всех 14 вариантах заливка переопределена на ",e.jsx(n.code,{children:"button/bg/secondary/default"})," (#e2e3e5), на ней ",e.jsx(n.code,{children:"text/secondary"})," даёт 4.03:1, ниже AA 4.5; у новой ",e.jsx(n.a,{href:"?path=/docs/components-pill-button--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Pill button"})," серого типа нет"]}),e.jsxs(n.td,{children:["пока ",e.jsx(n.code,{children:"control/bg/default"})," (#eeeff3). Вопрос: какой фон и не перевести ли на Pill button"]})]})]})]}),`
`,e.jsx(b,{css:u}),`
`,e.jsx(n.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Отступы таблетки «Все» 4 / 8 / 4 / 4 (Figma 144:990): токены есть только на 4, 8, 12, 16, а левый и правый разные."}),`
`]}),`
`,e.jsx(n.h2,{id:"доступность",children:"Доступность"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Заголовок — настоящий ",e.jsx(n.code,{children:"<h2>"})," (или другой уровень через ",e.jsx(n.code,{children:"as"}),"), скринридер перечисляет разделы."]}),`
`,e.jsxs(n.li,{children:["«Все» — ",e.jsx(n.code,{children:"<button>"})," или ",e.jsx(n.code,{children:"<a>"}),", фокус с клавиатуры виден кольцом ",e.jsx(n.code,{children:"border/focus"}),". Если вокруг несколько «Все», дай каждой понятное имя через ",e.jsx(n.code,{children:"aria-label"}),": «Все многодневные поездки»."]}),`
`,e.jsxs(n.li,{children:["Цвет заголовка ",e.jsx(n.code,{children:"text/primary"}),", подписи ",e.jsx(n.code,{children:"text/secondary"}),": контраст выше 4.5:1."]}),`
`]})]})}function L(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{L as default};
