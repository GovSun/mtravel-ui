import{j as n}from"./iframe-DyD5Yel4.js";import{u as o,M as c,C as i,a as d}from"./blocks-CcI75u3-.js";import{A as a,P as s,V as l,I as x,C as h}from"./Attribute.stories-CQ2jL-7Z.js";import{U as j}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./Attribute-DFV0-_Ht.js";import"./cx-2dOUpm6k.js";import"./time-lpmEQjgl.js";import"./Svg-B7GM2ZFd.js";import"./places-CYDz-5dl.js";import"./people-tOiSq3ZR.js";import"./tokens-Bc2_NrJ2.js";const p=`/* Attribute (Figma 691:15): an icon and a text, gap spacing/xs. */
.root {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  min-width: 0;
  color: var(--control-text-secondary);
  font: var(--font-im-14-r);
  letter-spacing: var(--tracking-im-14-r);
}
.icon {
  display: flex;
  flex: none;
  color: var(--color-icon-secondary);
}
.label {
  min-width: 0;
}

/* inverse: over a dark photo (the XL excursion card). Same tokens as that card's own list used. */
.root[data-variant='inverse'] {
  color: var(--control-text-inverse-secondary);
}
.root[data-variant='inverse'] .icon {
  color: var(--control-icon-inverse);
}
`;function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:a}),`
`,n.jsx(e.h1,{id:"attribute",children:"Attribute"}),`
`,n.jsx(e.p,{children:"Одна характеристика предложения строкой: иконка и текст. У экскурсий это язык, транспорт, размер группы и длительность («3 часа», «Пешком», «Группа до 10 человек»), у отелей завтрак, Wi-Fi, бассейн. Она ничего не открывает."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=691-15",rel:"nofollow",children:"Attribute 691:15"}),". Свойства: Label, Show icon, Icon (instance swap)."]}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(d,{of:s}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Где в дизайне."})," Детали экскурсии (Детальная страница 173:13296, «1 картинка» 4704:41714, «Оформление» 244:25370): «3 часа», «Пешком», «Группа до 10 человек»."]}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Attribute, ClockIcon, FootIcon } from '@mtravel/ui';

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 12px' }}>
  <Attribute icon={<ClockIcon />}>3 часа</Attribute>
  <Attribute icon={<FootIcon />}>Пешком</Attribute>
</div>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"ref"})," и остальные атрибуты (",n.jsx(e.code,{children:"aria-label"}),", ",n.jsx(e.code,{children:"data-*"}),", ",n.jsx(e.code,{children:"id"}),") попадают на корневой ",n.jsx(e.code,{children:"span"}),"."]}),`
`,n.jsxs(e.p,{children:["Иконка — узел 12 px: ",n.jsx(e.code,{children:"Show icon"})," в Figma это наличие ",n.jsx(e.code,{children:"icon"}),". Между атрибутами в ряду ставь ",n.jsx(e.code,{children:"spacing/md"})," (12), как на экране."]}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(i,{of:l}),`
`,n.jsxs(e.p,{children:["Текст IM-14 R ",n.jsx(e.code,{children:"control/text/secondary"}),", иконка ",n.jsx(e.code,{children:"icon/secondary"}),", зазор ",n.jsx(e.code,{children:"spacing/xs"})," (4)."]}),`
`,n.jsx(e.h2,{id:"светлый-вариант-на-фото",children:"Светлый вариант на фото"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:'variant="inverse"'})," делает текст ",n.jsx(e.code,{children:"control/text/inverse/secondary"}),", а иконку ",n.jsx(e.code,{children:"control/icon/inverse"}),". Он нужен там, где факты лежат на тёмном фото или градиенте: так в XL-карточке экскурсии. Цвета не переворачиваются в тёмной теме, фото всегда тёмное."]}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Attribute variant="inverse" icon={<ClockIcon />}>7 часов</Attribute>
`})}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.p,{children:"Детали экскурсии: атрибуты переносятся по строкам (Figma 1279:100289, 1648:180119)."}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(e.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"В Figma"}),n.jsx(e.th,{children:"В коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Размер иконки"}),n.jsx(e.td,{children:"в описании 16, в слое 12 (глиф 10)"}),n.jsx(e.td,{children:"12"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Шрифт"}),n.jsx(e.td,{children:"в описании IM-13 M, в слое IM-14 R"}),n.jsx(e.td,{children:"IM-14 R"})]})]})]}),`
`,n.jsx(j,{css:p}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Иконки декоративные (",n.jsx(e.code,{children:"aria-hidden"}),"), смысл несёт текст. Не делай атрибут, в котором есть только иконка."]}),`
`,n.jsxs(e.li,{children:["Контраст ",n.jsx(e.code,{children:"text/secondary"})," на белом выше 4.5:1."]}),`
`]})]})}function X(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{X as default};
