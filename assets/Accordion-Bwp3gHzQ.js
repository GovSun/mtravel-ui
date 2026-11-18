import{j as n}from"./iframe-DuqTOznb.js";import{u as s,M as d,C as o,a as l}from"./blocks-CaaIEU4k.js";import{A as a,P as i,V as c,C as h,a as p,b as x,c as j,S as m,E as g}from"./Accordion.stories-D7ML6DxW.js";import{U as u}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./Caption-C6jupY-b.js";import"./cx-2dOUpm6k.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./useControllableState-QyUXWn2y.js";import"./SectionTitle-DUrzhWiT.js";import"./arrows-C0H-naDa.js";import"./Svg-B1-TtxWQ.js";import"./Divider-BbjTiNWY.js";import"./Cell-DbWJlVzG.js";import"./LeadingIcon-B28I7Mlv.js";import"./Skeleton-D5GPHumj.js";import"./mergeRefs-BPT53vMC.js";import"./motion-C-Q-avtg.js";import"./general-DYSfllt2.js";import"./paths-BjPgyxdS.js";import"./PillButton-BwV4GISW.js";import"./Counter-6eoXZdLB.js";import"./CounterButton-ddQoagoR.js";import"./RollingNumber-BIb_2A9U.js";import"./Toggle-DcBpc41r.js";import"./useInstantAfterKey-D0TlCdRr.js";import"./Checkbox-C1X2mrZB.js";import"./Radio-Bz4AqS0k.js";import"./CellCenter-CXZRRsHl.js";import"./places-z-kxph-t.js";import"./people-s6FNqSUd.js";import"./tokens-INIU3VNa.js";const f=`/*
 * Accordion (Figma «Accordion», page Accordion). Root: full width, no fill.
 * Header: SectionTitle (Title 8:645, padding 0 8 0 16) in a row of at least 48 px; Chevron=end adds a 32 px slot and
 * 8 px on the right, so the chevron centre sits 24 px from the edge — on one vertical with the Cell chevrons below.
 * Chevron=inline puts the chevron into SectionTitle's right icon, right after the text.
 * Content: Type=text — padding 0 16 16, IM-16 R control/text/default; Type=cells — rows edge to edge, 8 px below.
 */
.root {
  --_press-in: calc(var(--cell-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--cell-motion-press-out-duration) * var(--motion-scale));
  --_open: calc(var(--motion-duration-base) * var(--motion-scale)); /* opening: height, content settling, chevron turn */
  --_close: calc(var(--motion-duration-fast) * var(--motion-scale)); /* closing is quicker: the system answers, nothing to read */

  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
}

.heading {
  margin: 0;
  font: inherit;
}

/* the whole header is the button */
.header {
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}
.header:disabled {
  cursor: default;
}
.header:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: -2px;
}

.headerContent {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  min-height: 48px; /* no token: Figma Title minimum height — the 32 px title row + 8 above and below, a 44+ px target */
  transition: transform var(--_press-out) var(--cell-motion-press-easing);
}
.root[data-chevron='end'] .headerContent {
  padding-right: var(--spacing-sm);
}
.title {
  flex: 1 1 0;
  min-width: 0;
}

/* press: the Cell spring — a row with a chevron is one big button (Cell.mdx «Анимация») */
.header[data-pressed] .headerContent {
  transform: scale(var(--cell-motion-press-scale));
  transition-duration: var(--_press-in);
  transition-timing-function: var(--motion-ease-out);
}

.chevronSlot {
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 32px; /* no token: Figma Disclosure slot 32 × 32 */
  height: 32px;
}
.chevron {
  display: block;
  color: var(--control-icon-secondary);
  transition: transform var(--_close) var(--motion-ease-out);
}
.root[data-open] .chevron {
  transform: rotate(-180deg);
  transition-duration: var(--_open);
}
.root[data-disabled] .chevron {
  color: var(--control-icon-disabled);
}
.root[data-disabled] .title {
  opacity: 0.5; /* no token: the title of a disabled header fades with it; Title has no disabled colour */
}

/* panel: the height grows from 0 (grid 0fr → 1fr) instead of jumping; the content fades in and settles 4 px */
.panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--_close) var(--motion-ease-out);
}
.panel[data-open] {
  grid-template-rows: 1fr;
  transition-duration: var(--_open);
}
.clip {
  min-height: 0;
  overflow: hidden;
  /* closed content leaves the tab order and the accessibility tree once the collapse has finished */
  visibility: hidden;
  transition: visibility 0s linear var(--_close);
}
.panel[data-open] .clip {
  visibility: visible;
  transition-delay: 0s;
}
.content {
  opacity: 0;
  transform: translateY(-4px); /* no token: a short settle from under the header, not a slide */
  transition:
    opacity var(--_close) var(--motion-ease-out),
    transform var(--_close) var(--motion-ease-out);
}
.panel[data-open] .content {
  opacity: 1;
  transform: none;
  transition-duration: var(--_open);
}

.root[data-type='text'] .content {
  padding: 0 var(--spacing-lg) var(--spacing-lg);
  color: var(--control-text-default);
  font: var(--font-im-16-r);
  letter-spacing: var(--tracking-im-16-r);
}
.root[data-type='cells'] .content {
  padding-bottom: var(--spacing-sm);
}
.paragraph {
  margin: 0;
  text-wrap: pretty;
}
.paragraph + .paragraph {
  margin-top: var(--spacing-sm);
}

.divider {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  width: auto;
}

/* Reduced motion: no press scale, no chevron turn animation, no height animation — the content only fades */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .header[data-pressed] .headerContent {
    transform: none;
  }
  :global(:root:not([data-motion='normal'])) .chevron,
  :global(:root:not([data-motion='normal'])) .panel {
    transition: none;
  }
  :global(:root:not([data-motion='normal'])) .content {
    transform: none;
    transition: opacity var(--_open) var(--motion-ease-standard);
  }
}
:global(:root[data-motion='reduce']) .header[data-pressed] .headerContent {
  transform: none;
}
:global(:root[data-motion='reduce']) .chevron,
:global(:root[data-motion='reduce']) .panel {
  transition: none;
}
:global(:root[data-motion='reduce']) .content {
  transform: none;
  transition: opacity var(--_open) var(--motion-ease-standard);
}
`;function r(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:a}),`
`,n.jsx(e.h1,{id:"accordion",children:"Accordion"}),`
`,n.jsx(e.p,{children:"Заголовок, который раскрывает и сворачивает свой контент: частые вопросы, «Что включено», правила возврата, группы фильтров. Аккордеон прячет второстепенное, но оставляет его на экране: заголовок говорит, что внутри, и одним тапом показывает это."}),`
`,n.jsxs(e.p,{children:["В Figma это набор «Accordion» на странице Accordion (",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1516-273",rel:"nofollow",children:"1516:273"}),"): Size 24px | 20px | 18px | 16px × Type text | cells × Open × Chevron end | inline, переключатель Divider и слот Content. Шапка — это ",n.jsx(e.a,{href:"?path=/docs/components-section-title--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"SectionTitle"})," (Title 8:645), поэтому подпись и иконка слева те же."]}),`
`,n.jsx(o,{of:i}),`
`,n.jsx(l,{of:i}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Accordion, Cell } from '@mtravel/ui';

// текст: строка становится абзацем IM-16 R
<Accordion title="Правила возврата">Полный возврат, если отменить за 24 часа до начала.</Accordion>

// строки Cell во всю ширину, шеврон сразу после заголовка, счётчик в подписи
<Accordion title="Что включено" subtitle="3 пункта" chevron="inline" type="cells" defaultOpen>
  <Cell title="Трансфер от отеля" icon={<CheckIcon />} />
  <Cell title="Гид на русском" icon={<CheckIcon />} />
</Accordion>

// список вопросов: линия между пунктами
{faq.map((f, i) => <Accordion key={f.q} title={f.q} size={18} divider={i < faq.length - 1}>{f.a}</Accordion>)}

// открыт только один: страница хранит, какой
<Accordion title="Программа" open={openId === 'program'} onOpenChange={(o) => setOpenId(o ? 'program' : null)}>…</Accordion>
`})}),`
`,n.jsxs(e.p,{children:["Состояние управляемое (",n.jsx(e.code,{children:"open"})," + ",n.jsx(e.code,{children:"onOpenChange"}),") или своё (",n.jsx(e.code,{children:"defaultOpen"}),"). По умолчанию аккордеон закрыт и открывать можно несколько сразу. Уровень заголовка выбирает страница через ",n.jsx(e.code,{children:"headingAs"}),", по умолчанию ",n.jsx(e.code,{children:"h3"}),": аккордеоны обычно стоят внутри раздела с ",n.jsx(e.code,{children:"h2"}),"."]}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(o,{of:c}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Props"}),n.jsx(e.th,{children:"Что это"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Chevron=end"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:'chevron="end"'})," (по умолчанию)"]}),n.jsx(e.td,{children:"шеврон у правого края в слоте 32 × 32, центр в 24 px от края — на одной вертикали с шевронами строк Cell"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Chevron=inline"}),n.jsx(e.td,{children:n.jsx(e.code,{children:'chevron="inline"'})}),n.jsx(e.td,{children:"шеврон сразу после текста, через 4 px (иконка справа у Title)"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Type=text"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:'type="text"'})," (по умолчанию)"]}),n.jsxs(e.td,{children:["абзац IM-16 R ",n.jsx(e.code,{children:"control/text/default"}),", отступы 0 / 16 / 16"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Type=cells"}),n.jsx(e.td,{children:n.jsx(e.code,{children:'type="cells"'})}),n.jsx(e.td,{children:"строки Cell во всю ширину, у них свои отступы 16 / 8; снизу 8"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Open=True / False"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"open"})," / ",n.jsx(e.code,{children:"defaultOpen"})]}),n.jsx(e.td,{children:"шеврон вверх / вниз"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Divider"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"divider"})}),n.jsx(e.td,{children:"линия 1 px по нижнему краю с отступами 16 с обеих сторон"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Content (слот)"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"children"})}),n.jsx(e.td,{children:"строка, абзацы, строки Cell или любой контент"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Size=24px / 20px / 18px / 16px"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"size={24 | 20 | 18 | 16}"}),", по умолчанию 20"]}),n.jsx(e.td,{children:"заголовок IM-24 B / IM-20 B / IM-18 B / IM-16 B; шапка не ниже 48 px на любом размере, контент не меняется"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Title: Subtitle, Icon left"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"subtitle"}),", ",n.jsx(e.code,{children:"iconLeft"})]}),n.jsx(e.td,{children:"как у SectionTitle, подпись видна и у закрытого"})]})]})]}),`
`,n.jsx(e.p,{children:"Когда что выбирать:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"end"})," — в списке из нескольких аккордеонов и в фильтрах: шевроны стоят в одну колонку, взгляд скользит по заголовкам."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"inline"})," — одиночный блок на странице («Что включено» на детальной): шеврон читается как часть заголовка и не уезжает от короткого текста на всю ширину."]}),`
`]}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Частые вопросы."})," Список с разделителями, открыто может быть несколько, длинный вопрос переносится на вторую строку."]}),`
`,n.jsx(o,{of:h}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Открыт только один."})," Страница хранит открытый пункт и закрывает остальные."]}),`
`,n.jsx(o,{of:p}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Что включено."})," Строки Cell с иконками, шеврон после заголовка, счётчик в подписи."]}),`
`,n.jsx(o,{of:x}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Фильтры."})," Внутри строки с чекбоксами: тап по строке переключает чекбокс, аккордеон остаётся открытым, подпись показывает, сколько выбрано."]}),`
`,n.jsx(o,{of:j}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Размеры и крайние случаи."})," Заголовок длиннее двух строк получает многоточие; ответ из нескольких абзацев; недоступный заголовок."]}),`
`,n.jsx(o,{of:m}),`
`,n.jsx(o,{of:g}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нажатие на заголовок."})," Шапка сжимается до 0.97 с первого касания и возвращается пружиной, как строка Cell с шевроном: вся строка — одна кнопка."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Раскрытие."})," Высота растёт из нуля через ",n.jsx(e.code,{children:"grid-template-rows"})," (осознанное исключение из «только transform и opacity», как у подсказки под полем, см. ",n.jsx(e.a,{href:"?path=/docs/foundations-motion--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Motion"}),"): контент не выпрыгивает и не сдвигает экран рывком. Сам контент проявляется и садится на 4 px сверху. Открытие 240 мс, закрытие быстрее, 160 мс: система отвечает, читать там нечего. Кривая ease-out."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Шеврон"})," поворачивается на 180° за то же время."]}),`
`,n.jsx(e.li,{children:"Это CSS-переходы: быстрый повторный тап разворачивает раскрытие с того места, где оно сейчас."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," без сжатия и поворота, высота меняется сразу, контент только проявляется."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Своих токенов движения у аккордеона нет: берутся общие ",n.jsx(e.code,{children:"--motion-duration-base"}),", ",n.jsx(e.code,{children:"--motion-duration-fast"}),", ",n.jsx(e.code,{children:"--motion-ease-out"})," и пружина строки ",n.jsx(e.code,{children:"--cell-motion-press-*"}),"."]}),`
`,n.jsx(u,{css:f}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Минимальная высота шапки 48 px: строка заголовка 32 и по 8 сверху и снизу (как у Title в Figma)."}),`
`,n.jsx(e.li,{children:"Слот шеврона 32 × 32, как у Disclosure."}),`
`,n.jsx(e.li,{children:"Сдвиг контента 4 px при появлении."}),`
`,n.jsx(e.li,{children:"Прозрачность 0.5 у заголовка недоступного аккордеона: у Title нет цвета «недоступно»."}),`
`]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Это ",n.jsx(e.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",rel:"nofollow",children:"аккордеон по WAI-ARIA"}),": заголовок (",n.jsx(e.code,{children:"headingAs"}),") содержит ",n.jsx(e.code,{children:"<button aria-expanded aria-controls>"}),", панель — ",n.jsx(e.code,{children:'role="region"'})," с именем из заголовка."]}),`
`,n.jsxs(e.li,{children:["Enter и пробел открывают и закрывают, фокус виден кольцом ",n.jsx(e.code,{children:"border/focus"}),"."]}),`
`,n.jsxs(e.li,{children:["Закрытый контент после сворачивания получает ",n.jsx(e.code,{children:"visibility: hidden"}),": ссылки и поля внутри не ловят Tab, скринридер его не читает."]}),`
`,n.jsx(e.li,{children:"Вся шапка — цель тапа не ниже 48 px."}),`
`,n.jsxs(e.li,{children:["Недоступный аккордеон — настоящий ",n.jsx(e.code,{children:"disabled"})," у кнопки."]}),`
`]})]})}function nn(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{nn as default};
