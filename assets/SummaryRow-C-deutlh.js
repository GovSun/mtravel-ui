import{j as n}from"./iframe-DyD5Yel4.js";import{u as d,M as s,C as r,a}from"./blocks-CcI75u3-.js";import{S as c,P as i,V as l,C as h}from"./SummaryRow.stories-B1XuM0zO.js";import{U as x}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./cx-2dOUpm6k.js";import"./Checkbox-CsOUmA-N.js";import"./useControllableState-D9cJCl43.js";import"./useInstantAfterKey-D3FdC2PV.js";import"./usePress-XYzAalw7.js";import"./LeadingIcon-B3CZMOJC.js";import"./Skeleton-dpQW7cMp.js";import"./mergeRefs-BZQLIp5G.js";import"./motion-C-Q-avtg.js";import"./general-CSE0kF9v.js";import"./Svg-B7GM2ZFd.js";import"./paths-BjPgyxdS.js";import"./PromoBadge-MRvWEy0B.js";import"./people-tOiSq3ZR.js";import"./tokens-Bc2_NrJ2.js";const m=`/* «Summary row» (Figma 883:4867, was «Строка суммы»). Padding 4 0 (spacing/xs), label and value on the two edges. */
.root {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  gap: var(--spacing-md);
  min-height: 32px; /* Figma instances are 32 high (the main component Type=Row is 37 because of its hidden icon) */
  padding: var(--spacing-xs) 0;
}
.start {
  display: flex;
  align-items: center;
  min-width: 0;
}
.checkbox {
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 32px; /* no token: Figma «Checkbox wrap» 1532 — a fixed 32 slot, the 20 px box centred */
  height: 32px;
}
.text {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  min-width: 0;
}
.label,
.value {
  min-width: 0;
}
.label {
  font: var(--font-im-16-r);
  letter-spacing: var(--tracking-im-16-r);
  color: var(--control-text-tertiary);
}
.value {
  flex: none;
  font: var(--font-im-16-m);
  letter-spacing: var(--tracking-im-16-m);
  color: var(--control-text-default);
  white-space: nowrap;
}
.root[data-variant='total'] .label,
.root[data-variant='total'] .value {
  font: var(--font-im-20-s);
  letter-spacing: var(--tracking-im-20-s);
  color: var(--control-text-default);
}
`;function o(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:c}),`
`,n.jsx(e.h1,{id:"summaryrow",children:"SummaryRow"}),`
`,n.jsx(e.p,{children:"Строка счёта при оформлении: «за 2 человека — 49 000», «Скидка», «К оплате». Подпись слева, сумма справа."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=883-4867",rel:"nofollow",children:"Summary row 883:4867"})," (раньше «Строка суммы»): Type Row | Total (в коде проп ",n.jsx(e.code,{children:"variant"}),": ",n.jsx(e.code,{children:"row"})," | ",n.jsx(e.code,{children:"total"}),"), булевы Show badge, Show icon и Show checkbox."]}),`
`,n.jsx(r,{of:i}),`
`,n.jsx(a,{of:i}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Где в дизайне."})," Оформление 244:25370, «Оформление заказ» 1338:107637, «Мой заказы» 1698:192321 («Участники», «Взрослый × 2», «Скидка», «К оплате»)."]}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<SummaryRow variant="total" label="К оплате" value="12 300 ⃀" />
<SummaryRow label="за 2 человека" value="49 000 ⃀" />
<SummaryRow label="Скидка" badge={<PromoBadge variant="discount" value={10} />} value="−4 900 ⃀" />
`})}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(r,{of:l}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Проп"}),n.jsx(e.th,{children:"Текст"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Type = Строка"}),n.jsx(e.td,{children:n.jsx(e.code,{children:'variant="row"'})}),n.jsxs(e.td,{children:["подпись IM-16 R ",n.jsx(e.code,{children:"control/text/tertiary"}),", сумма IM-16 M ",n.jsx(e.code,{children:"control/text/default"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Type = Итого"}),n.jsx(e.td,{children:n.jsx(e.code,{children:'variant="total"'})}),n.jsxs(e.td,{children:["обе IM-20 S ",n.jsx(e.code,{children:"control/text/default"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Show checkbox"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"checkbox={{ checked, onCheckedChange }}"})}),n.jsx(e.td,{children:"Checkbox 20 в слоте 32 перед всем остальным; имя для скринридера — подпись строки"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Show icon"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"icon"})}),n.jsxs(e.td,{children:["иконка 32 перед подписью (",n.jsx(e.a,{href:"?path=/docs/components-leading-icon--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"LeadingIcon"}),")"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Show badge"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"badge"})}),n.jsx(e.td,{children:"бейдж скидки после подписи, зазор 8"})]})]})]}),`
`,n.jsxs(e.p,{children:["Бейдж скидки — отдельный компонент DS: ",n.jsx(e.a,{href:"?path=/docs/components-promobadge--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"PromoBadge"})," (Figma badge_promo). Слот ",n.jsx(e.code,{children:"badge"})," принимает только его (",n.jsx(e.code,{children:'<PromoBadge variant="discount" value={10} />'}),"), в историях стоит настоящий бейдж. Свою «красную плашку» рядом с суммой не рисуйте."]}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h2,{id:"вопросы-к-figma",children:"Вопросы к Figma"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Основной компонент Type=Row высотой 37, а во всех продуктовых экранах строка 32. В коде 32 (40, если есть иконка 32)."}),`
`,n.jsx(e.li,{children:"Знак рубля в Figma — ⃀ (U+20C0, символ сома), строка записана как «49 000 ⃀»."}),`
`]}),`
`,n.jsx(x,{css:m}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.p,{children:["Подпись и сумма — текст подряд. Если суммы нужны скринридеру как пары, оберните строки в ",n.jsx(e.code,{children:"<dl>"})," на экране."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"ref"})," и остальные атрибуты (",n.jsx(e.code,{children:"data-*"}),", ",n.jsx(e.code,{children:"id"}),", ",n.jsx(e.code,{children:"aria-*"}),") попадают на корневой ",n.jsx(e.code,{children:"div"}),"."]})]})}function X(t={}){const{wrapper:e}={...d(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{X as default};
