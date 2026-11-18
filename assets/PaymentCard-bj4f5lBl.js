import{j as n}from"./iframe-DuqTOznb.js";import{u as i,M as o,C as t,a}from"./blocks-CaaIEU4k.js";import{P as l,a as d,S as c,G as h,b as x,C as j,c as p}from"./PaymentCard.stories-BzoCbD7-.js";import{M as m,U as u}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./cx-2dOUpm6k.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./Radio-Bz4AqS0k.js";import"./useControllableState-QyUXWn2y.js";import"./useInstantAfterKey-D0TlCdRr.js";import"./PaymentPlanSummary-BvLLkCR_.js";import"./tokens-INIU3VNa.js";const g=`/*
 * PaymentCard (Figma card_payment 767:5652). Fluid width, height hugs: 12 + 24 + 20 + 52 + 12 = 120.
 * Figma binds the padding and the radius to old variables of another collection («paddings/default/s - 2» = 12,
 * «XL» = 16); the DS tokens with the same values are used: spacing/md, radius/lg.
 * Colours: control/* and border/* tokens, as in Figma. The M+ promo gradient and the brand logos are raw in Figma.
 */
/* beats the RadioGroup's own one-column grid */
.row[role='radiogroup'] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--spacing-sm);
  align-items: stretch;
}

.card {
  --_press-in: calc(var(--payment-card-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--payment-card-motion-press-out-duration) * var(--motion-scale));
  --_select: calc(var(--payment-card-motion-select-duration) * var(--motion-scale));

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px; /* no token: Figma 767:5653 gap between the header and the text */
  box-sizing: border-box;
  min-width: 0;
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  /* the stroke is INSIDE in Figma, so it is drawn inset and never moves the content */
  box-shadow: inset 0 0 0 1px var(--color-border-default);
  color: var(--control-text-default);
  text-align: left;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  transition:
    box-shadow var(--_select) var(--payment-card-motion-select-easing),
    transform var(--_press-out) var(--payment-card-motion-press-easing);
}
.card:has(input:checked) {
  box-shadow: inset 0 0 0 2px var(--control-border-accent);
}
.card[data-pressed] {
  transform: scale(var(--payment-card-motion-press-scale));
  transition-duration: var(--_select), var(--_press-in);
}
.card[data-disabled] .title,
.card[data-disabled] .subtitle {
  color: var(--control-text-disabled); /* Figma has no disabled card; same rule as Checkbox and Radio labels */
}
.card:has(:focus-visible),
.promo:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

/* the Radio: its label covers the whole card (the tap target); its circle sits top right, 12 from the edge, 14 from the top */
.card .hit {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 14px 12px 0 0; /* no token: Figma 767:5658, the circle is 2 px lower than the 24 px logo row's top */
  border-radius: var(--radius-lg);
}

.header {
  display: flex;
  align-items: center;
  height: 24px;
}
.logo {
  display: block;
  width: 24px;
  height: 24px;
}

.info {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 52px; /* Figma: 20 px title row + 32 px description row, whatever the text */
}
.title {
  display: flex;
  align-items: center;
  min-height: 20px; /* Figma: the title sits in a 20 px row */
  font: var(--font-im-14-b);
  letter-spacing: var(--tracking-im-14-b);
  color: var(--control-text-default);
}
.subtitle {
  /* Figma: the text starts 2 px down in a 32 px row and may run 2 px past it, so two lines fit; the row's last 2 px are given back */
  padding-top: 2px;
  margin-bottom: -2px;
  font: var(--font-im-14-r);
  letter-spacing: var(--tracking-im-14-r);
  color: var(--control-text-secondary);
}

/* M+ promo: a gradient card without frame and without radio */
.promo {
  border: 0;
  cursor: pointer;
  font-family: inherit;
  background: linear-gradient(329deg, #e55f14 10%, #fa9837 47%, #f96b1c 97%); /* no token: Figma 767:5666, three-stop gradient with raw colours; stops moved onto the CSS gradient line */
  box-shadow: none;
}
.promo .title {
  color: var(--control-text-inverse);
}
.promo .subtitle {
  color: var(--control-text-inverse-secondary);
}

/* reduced motion: no squeeze, the frame still changes colour */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .card[data-pressed] {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .card[data-pressed] {
  transform: none;
}
`;function s(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:l}),`
`,n.jsx(e.h1,{id:"paymentcard",children:"PaymentCard"}),`
`,n.jsx(e.p,{children:"Карточка способа оплаты на оформлении заказа: «Оплатить сразу» через MBANK или «Рассрочка M+». Две карточки стоят рядом, выбрать можно одну. Третий вид, M+ promo, не выбирается: это предложение подключить рассрочку, оно ведёт на другую страницу."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=767-5652",rel:"nofollow",children:"card_payment 767:5652"}),": Type MBank | M+ | M+ promo × State Default | Selected. Старый набор ",n.jsx(e.code,{children:"card / paymentMethod / old"})," (441:4320) не переносился."]}),`
`,n.jsx(t,{of:d}),`
`,n.jsx(a,{of:d}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { PaymentCard, PaymentCardGroup } from '@mtravel/ui';

<PaymentCardGroup aria-label="Способ оплаты" value={method} onValueChange={setMethod}>
  <PaymentCard variant="mbank" value="now" />
  <PaymentCard variant="mplus" value="plus" subtitle="3 платежа по 4 100 ⃀" />
</PaymentCardGroup>

// M+ ещё не подключён: вместо выбора предложение подключить
<PaymentCardGroup aria-label="Способ оплаты" value={method} onValueChange={setMethod}>
  <PaymentCard variant="mbank" value="now" />
  <PaymentCard variant="mplus-promo" subtitle="3 платежа по 5 063 ⃀" href="/mplus" />
</PaymentCardGroup>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"PaymentCardGroup"})," оборачивает ",n.jsx(e.a,{href:"?path=/docs/components-radio--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Radio"}),": стрелки двигают выбор, скринридер читает «1 из 2». Ряд делится на две равные колонки с отступом 8 px, карточки тянутся на всю ширину колонки. Поля по бокам (16 px на экране) задаёт экран."]}),`
`,n.jsxs(e.p,{children:["Каждая карточка целиком является областью нажатия: под ней лежит невидимый нативный ",n.jsx(e.code,{children:'<input type="radio">'}),", круг в углу — это Radio из DS. Название читается как имя выбора, второй абзац как описание."]}),`
`,n.jsx(e.h2,{id:"состояния",children:"Состояния"}),`
`,n.jsx(t,{of:c}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Рамка"}),n.jsx(e.th,{children:"Круг"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Default"}),n.jsxs(e.td,{children:["1 px ",n.jsx(e.code,{children:"border/default"})]}),n.jsx(e.td,{children:"Radio, не выбран"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Selected"}),n.jsxs(e.td,{children:["2 px ",n.jsx(e.code,{children:"control/border/accent"})]}),n.jsx(e.td,{children:"Radio, выбран"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"M+ promo"}),n.jsx(e.td,{children:"без рамки, градиент"}),n.jsx(e.td,{children:"нет"})]})]})]}),`
`,n.jsx(e.p,{children:"Рамка рисуется внутрь и не сдвигает содержимое: высота карточки 120 px при обоих состояниях."}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нажатие:"})," карточка сжимается до 0.97 сразу, как только палец коснулся, и возвращается за 240 мс. Круг сжимается сам, как у Radio."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Выбор:"})," рамка меняет цвет и толщину за 160 мс, внутри круга точка «вдавливается» по правилам Radio."]}),`
`,n.jsx(e.li,{children:"Это CSS-переходы, быстрый повторный тап разворачивает движение с того места, где оно было."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"С клавиатуры"})," (стрелки) выбор меняется сразу."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," карточка не сжимается, рамка всё так же меняет цвет."]}),`
`]}),`
`,n.jsx(m,{prefix:"--payment-card-"}),`
`,n.jsx(e.h2,{id:"группа-и-действие",children:"Группа и действие"}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(t,{of:x}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.p,{children:"Экраны «Оформление заказа» и «Мои заказы» файла «Выходные». Ширина карточек там 175–179 px: это половина экрана 393 за вычетом полей 16 и отступа 8."}),`
`,n.jsx(t,{of:j}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Prop"}),n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Что делает"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"variant"})}),n.jsx(e.td,{children:"Type"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"mbank"}),", ",n.jsx(e.code,{children:"mplus"})," или ",n.jsx(e.code,{children:"mplus-promo"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"value"})}),n.jsx(e.td,{children:"—"}),n.jsx(e.td,{children:"значение выбора в группе (у promo нет)"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"selected"})}),n.jsx(e.td,{children:"State"}),n.jsxs(e.td,{children:["только вне группы; внутри группы решает ",n.jsx(e.code,{children:"value"})," группы"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onSelect"})}),n.jsx(e.td,{children:"—"}),n.jsx(e.td,{children:"вне группы: вызывается при выборе"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"title"}),", ",n.jsx(e.code,{children:"subtitle"})]}),n.jsx(e.td,{children:"тексты"}),n.jsx(e.td,{children:"по умолчанию из Figma; в продукте в описании сумма: «3 платежа по 4 100 ⃀»"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"href"}),", ",n.jsx(e.code,{children:"onClick"})]}),n.jsx(e.td,{children:"—"}),n.jsx(e.td,{children:"у promo: ссылка или кнопка"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"disabled"})}),n.jsx(e.td,{children:"—"}),n.jsxs(e.td,{children:["в Figma нет: тексты ",n.jsx(e.code,{children:"control/text/disabled"}),", как у Radio"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"forcePressed"})}),n.jsx(e.td,{children:"—"}),n.jsx(e.td,{children:"только для документации и снимков"})]})]})]}),`
`,n.jsx(e.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"В Figma"}),n.jsx(e.th,{children:"В коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Поля и скругление"}),n.jsxs(e.td,{children:["привязаны к старым переменным другой коллекции: ",n.jsx(e.code,{children:"paddings/default/s - 2"})," (12) и ",n.jsx(e.code,{children:"XL"})," (16)"]}),n.jsxs(e.td,{children:["токены DS с теми же значениями: ",n.jsx(e.code,{children:"spacing/md"}),", ",n.jsx(e.code,{children:"radius/lg"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Заголовок у M+ Default"}),n.jsx(e.td,{children:"на 2 px выше, чем у Selected, отступ 4 вместо строки 20"}),n.jsx(e.td,{children:"как у Selected: строка 20 px"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Ширина"}),n.jsx(e.td,{children:"166, у promo 162"}),n.jsx(e.td,{children:"на всю колонку"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Второй абзац"}),n.jsx(e.td,{children:"текст «до 15 000 сом  на 3 месяца» с двойным пробелом"}),n.jsx(e.td,{children:"неразрывные пробелы, перенос «До 15 000 сом / на 3 месяца» как в Figma"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Начертание названия"}),n.jsx(e.td,{children:"в наборе IM-14 B, в экранах «Оформление» вручную IM-14 S"}),n.jsx(e.td,{children:"IM-14 B, как в наборе"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Disabled"}),n.jsx(e.td,{children:"нет"}),n.jsx(e.td,{children:"добавлен как у Radio"})]})]})]}),`
`,n.jsx(u,{css:g}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Градиент M+ promo ",n.jsx(e.code,{children:"#e55f14 → #fa9837 → #f96b1c"})," (767:5666): сырые цвета, переменных нет. Существующие ",n.jsx(e.code,{children:"color/base/promo/mplus-*"})," другого оттенка."]}),`
`,n.jsxs(e.li,{children:["Логотипы MBank, M+ и M+ promo (772:5999, 772:6030, 772:6013): сырые цвета и градиенты, лежат SVG в папке ",n.jsx(e.code,{children:"assets"}),"."]}),`
`,n.jsx(e.li,{children:"Отступ 20 px между строкой логотипа и текстом (767:5653) и смещение круга (14 px сверху, 12 справа)."}),`
`]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Выбор: настоящий ",n.jsx(e.code,{children:"radio"})," в ",n.jsx(e.code,{children:"radiogroup"}),". Имя берётся из названия, описание читается после него."]}),`
`,n.jsx(e.li,{children:"Вся карточка нажимается, а не только круг: область больше 44 × 44 px."}),`
`,n.jsxs(e.li,{children:["Фокус с клавиатуры: синяя рамка вокруг карточки (",n.jsx(e.code,{children:"border/focus"}),") и кольцо на круге."]}),`
`,n.jsxs(e.li,{children:["Контраст: название ",n.jsx(e.code,{children:"control/text/default"})," на белом, описание ",n.jsx(e.code,{children:"control/text/secondary"}),"; на градиенте M+ promo белый текст, у описания 90 % непрозрачности."]}),`
`,n.jsxs(e.li,{children:["M+ promo — ссылка (",n.jsx(e.code,{children:"<a>"}),") или кнопка (",n.jsx(e.code,{children:"<button>"}),"), а не радио: пользователь понимает, что это переход, а не выбор."]}),`
`]})]})}function _(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{_ as default};
