import{j as n}from"./iframe-DyD5Yel4.js";import{u as t,M as l,C as d,a as c}from"./blocks-CcI75u3-.js";import{P as a,a as s,V as o,C as h}from"./PaymentPlanSummary.stories-BasD-QcV.js";import{U as x}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./PaymentPlanSummary-BUJW-MXc.js";import"./cx-2dOUpm6k.js";import"./tokens-Bc2_NrJ2.js";const j=`/*
 * PaymentPlanSummary (Figma 992:756). Fill: bg/sunken-subtle, radius 20 (no token: radius/lg is 16, radius/xl 24),
 * padding 16 / 12, gap 12. The first bar segment is the paid one: slider range (\`--slider-bg-range-default\`, which is bg/accent);
 * the others are the slider track (\`--slider-bg-track-default\`, which is bg/sunken-strong) with inner-shadow/hairline.
 */
.root {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  box-sizing: border-box;
  padding: var(--spacing-lg) var(--spacing-md);
  border-radius: 20px; /* no token: Figma 959:540 */
  background-color: var(--color-bg-sunken-subtle);
  color: var(--control-text-default);
}

.amounts {
  display: grid;
  /* «now» is 71 px wide in both Figma variants; the payments share the rest equally */
  grid-template-columns: minmax(71px, max-content) repeat(var(--_cols), minmax(0, 1fr)); /* no token: Figma 959:542 width 71 */
  gap: var(--spacing-xs);
  overflow: hidden;
}
.cell {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  min-width: 0;
}
.label {
  font: var(--font-im-14-r);
  letter-spacing: var(--tracking-im-14-r);
  color: var(--control-text-default);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.label[data-tertiary] {
  color: var(--control-text-secondary); /* Figma «Далее» / «5 ноя»: control/text/secondary */
}
.amount {
  font: var(--font-im-16-b);
  letter-spacing: var(--tracking-im-16-b);
  color: var(--control-text-default);
  white-space: nowrap;
}

.schedule {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}
.bar {
  display: flex;
  gap: var(--spacing-xs);
  height: 4px; /* no token: Figma 959:549 */
  overflow: hidden;
}
.segment {
  flex: 1 1 0;
  min-width: 0;
  border-radius: var(--radius-full);
  background-color: var(--slider-bg-track-default); /* Figma: slider/bg/track/default */
  box-shadow: var(--inner-shadow-hairline);
}
.segment[data-paid] {
  background-color: var(--slider-bg-range-default); /* Figma: components/slider/bg/range/default */
  box-shadow: none;
}
.note {
  font: var(--font-im-14-r);
  letter-spacing: var(--tracking-im-14-r);
  color: var(--control-text-secondary); /* Figma «Без переплат и комиссий»: control/text/secondary */
}
`;function i(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:a}),`
`,n.jsx(e.h1,{id:"paymentplansummary",children:"PaymentPlanSummary"}),`
`,n.jsx(e.p,{children:"Сводка рассрочки под карточкой M+: сколько заплатить сейчас, что будет дальше и сколько всего платежей. Показывает человеку «сколько и когда» до того, как он нажмёт «Оплатить»."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=992-756",rel:"nofollow",children:"PaymentPlanSummary 992:756"}),": Property 1 = Default | Variant2. В Figma варианты без названий; в коде они названы по смыслу."]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"В коде"}),n.jsx(e.th,{children:"Что показывает"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Default"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"monthly"})}),n.jsx(e.td,{children:"«Сейчас 0 ⃀» и одна строка: «Далее 3 платежа с 1 дек — 4 100 ⃀ в месяц»"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Variant2"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"schedule"})}),n.jsx(e.td,{children:"«Сейчас 0 ⃀» и каждый платёж со своей датой: 1 дек, 1 янв, 1 фев"})]})]})]}),`
`,n.jsx(d,{of:s}),`
`,n.jsx(c,{of:s}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { PaymentPlanSummary } from '@mtravel/ui';

// ровный план: одна строка
<PaymentPlanSummary nowAmount="0 ⃀" caption="Далее 3 платежа с 1 дек" monthlyAmount="4 100 ⃀ в месяц" count={3} />

// каждый платёж с датой, например когда человек выбрал день первого платежа
<PaymentPlanSummary
  variant="schedule"
  nowAmount="0 ⃀"
  payments={[
    { date: '1 дек', amount: '4 100 ⃀' },
    { date: '1 янв', amount: '4 100 ⃀' },
    { date: '1 фев', amount: '4 100 ⃀' },
  ]}
/>
`})}),`
`,n.jsxs(e.p,{children:["Полоска состоит из равных отрезков: один на «сейчас» и по одному на каждый платёж. Закрашен первый, как в Figma; ",n.jsx(e.code,{children:"paid"})," закрашивает больше. Строка «Без переплат и комиссий» задана по умолчанию, ",n.jsx(e.code,{children:"note={null}"})," убирает её."]}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(d,{of:o}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.p,{children:"Где в дизайне: «Оформление заказа» (1338:107637, M+ Graph 1602:132078, Variant2 — 7 раз), «Мой заказ» (4160:5077, 3 раза, суммы 5 063 ⃀)."}),`
`,n.jsx(e.p,{children:"Экран «Оформление заказа», блок «M+ Graph» файла «Выходные»: график появляется под выбранной рассрочкой и пересчитывается, когда человек меняет «Дату первого платежа»."}),`
`,n.jsx(d,{of:h}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Prop"}),n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Что делает"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"variant"})}),n.jsx(e.td,{children:"Property 1"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"monthly"})," (Default) или ",n.jsx(e.code,{children:"schedule"})," (Variant2)"]})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"nowLabel"}),", ",n.jsx(e.code,{children:"nowAmount"})]}),n.jsx(e.td,{children:"«Сейчас», «0 ⃀»"}),n.jsx(e.td,{children:"первая колонка"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"caption"}),", ",n.jsx(e.code,{children:"monthlyAmount"}),", ",n.jsx(e.code,{children:"count"})]}),n.jsx(e.td,{children:"«Далее 3 платежа…», «4 100 ⃀ в месяц»"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"monthly"}),": серая строка, сумма и число платежей для полоски"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"payments"})}),n.jsx(e.td,{children:"даты и суммы"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"schedule"}),": платежи после «сейчас»"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"paid"})}),n.jsx(e.td,{children:"первый отрезок"}),n.jsx(e.td,{children:"сколько отрезков закрашено, по умолчанию 1"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"label"})}),n.jsx(e.td,{children:"—"}),n.jsx(e.td,{children:"название группы для скринридера, по умолчанию «План платежей»"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"ref"}),", ",n.jsx(e.code,{children:"className"}),", ",n.jsx(e.code,{children:"style"}),", ",n.jsx(e.code,{children:"…rest"})]}),n.jsx(e.td,{children:"—"}),n.jsxs(e.td,{children:["уходят на корневой ",n.jsx(e.code,{children:"div"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"note"})}),n.jsx(e.td,{children:"«Без переплат и комиссий»"}),n.jsx(e.td,{children:"строка под полоской"})]})]})]}),`
`,n.jsx(e.h2,{id:"анимации-нет",children:"Анимации нет"}),`
`,n.jsx(e.p,{children:"Блок не отвечает на нажатие и ничего не двигает. Когда человек меняет дату, суммы и даты просто заменяются."}),`
`,n.jsx(e.h2,{id:"отличия-от-figma",children:"Отличия от Figma"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"В Figma"}),n.jsx(e.th,{children:"В коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Сумма «0 ⃀»"}),n.jsx(e.td,{children:"две пробела между «0» и знаком"}),n.jsx(e.td,{children:"один пробел"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Колонка «Сейчас»"}),n.jsx(e.td,{children:"71 px в обоих вариантах"}),n.jsx(e.td,{children:"минимум 71 px, шире, если текст длиннее"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Высота"}),n.jsx(e.td,{children:"111 px"}),n.jsx(e.td,{children:"растёт с текстом, 111 px по умолчанию"})]})]})]}),`
`,n.jsx(x,{css:j}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Скругление 20 px (959:540): ",n.jsx(e.code,{children:"radius/lg"})," 16, ",n.jsx(e.code,{children:"radius/xl"})," 24, середины нет."]}),`
`,n.jsx(e.li,{children:"Ширина колонки «Сейчас» 71 px и высота полоски 4 px."}),`
`,n.jsxs(e.li,{children:["Закрашенный отрезок: ",n.jsx(e.code,{children:"control/bg/accent"}),". В Figma он привязан к удалённой переменной слайдера ",n.jsx(e.code,{children:"components/slider/bg/range/default"})," с тем же значением; в коде чужой токен не берётся."]}),`
`]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Блок собран как ",n.jsx(e.code,{children:'role="group"'})," с названием «План платежей»: скринридер читает колонки по порядку, слева направо."]}),`
`,n.jsxs(e.li,{children:["Полоска декоративная (",n.jsx(e.code,{children:"aria-hidden"}),"): всё, что она показывает, написано словами рядом."]}),`
`,n.jsxs(e.li,{children:["Контраст: основной текст ",n.jsx(e.code,{children:"control/text/default"}),", даты ",n.jsx(e.code,{children:"control/text/tertiary"})," на ",n.jsx(e.code,{children:"bg/sunken-subtle"}),"."]}),`
`]})]})}function k(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{k as default};
