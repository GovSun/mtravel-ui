import{j as n}from"./iframe-DuqTOznb.js";import{u as l,M as s,C as o,a as c}from"./blocks-CaaIEU4k.js";import{P as d,a as t,V as a,C as h,b as x,c as j}from"./PillButton.stories-BbHYcryH.js";import{M as p,U as u}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./Caption-C6jupY-b.js";import"./PillButton-BwV4GISW.js";import"./cx-2dOUpm6k.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./arrows-C0H-naDa.js";import"./Svg-B1-TtxWQ.js";import"./places-z-kxph-t.js";import"./general-DYSfllt2.js";import"./paths-BjPgyxdS.js";import"./tokens-INIU3VNa.js";const m=`/*
 * PillButton (Figma «Pill button» 1492:366): 24 px high, padding 4 8, gap 4, radius/full, IM-14 S.
 * Type link | white | overlay picks the fill, the text and the icon colour; icons and the chevron are 12 px.
 */
.root {
  --_icon: var(--control-icon-accent);
  --_press-in: calc(var(--pill-button-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--pill-button-motion-press-out-duration) * var(--motion-scale));

  position: relative;
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: var(--spacing-xs);
  height: 24px; /* no token: Figma 1492:366 — the 16 px line of IM-14 S + 4 + 4 */
  margin: 0;
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 0;
  border-radius: var(--radius-full);
  background: none;
  color: var(--control-text-accent);
  font: var(--font-im-14-s);
  letter-spacing: var(--tracking-im-14-s);
  text-decoration: none;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
.root[data-variant='white'] {
  --_icon: var(--control-icon-primary);
  background-color: var(--control-bg-on-surface);
  color: var(--control-text-default);
}
.root[data-variant='overlay'] {
  --_icon: var(--control-icon-inverse);
  background-color: var(--control-bg-overlay-default);
  /* hairline as an inset ring: a real 0.5 px border would move the text to half pixels */
  box-shadow: inset 0 0 0 var(--border-width-hairline) var(--control-border-overlay-default);
  -webkit-backdrop-filter: var(--blur-bg-4);
  backdrop-filter: var(--blur-bg-4);
  color: var(--control-text-selected);
}

.label {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
.icon {
  display: flex;
  flex: none;
  width: 12px;
  height: 12px;
  color: var(--_icon);
}
.icon > svg {
  display: block;
  width: 100%;
  height: 100%;
}

/* a pill with a handler: a button with a 44 px target, shrinks under the finger from the first touch */
.root[data-interactive] {
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  transition: transform var(--_press-out) var(--pill-button-motion-press-easing);
}
.root[data-interactive]::after {
  content: '';
  position: absolute;
  /* 44 px high whatever the pill (+1 px so a pressed, scaled pill still reaches 44), 6 px wider on the sides */
  inset: calc((100% - 44px) / 2 - 1px) -6px;
}
.root[data-pressed] {
  transform: scale(var(--pill-button-motion-press-scale));
  transition-duration: var(--_press-in);
  transition-timing-function: var(--motion-ease-out); /* down: no overshoot, the spring is only for the release */
}
.root[data-interactive]:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
.root[data-disabled] {
  --_icon: var(--control-icon-disabled);
  color: var(--control-text-disabled);
  cursor: default;
}

/* Reduced motion: no scale, the pressed pill dims for a moment instead */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .root[data-interactive] {
    transition: opacity var(--_press-in) var(--motion-ease-standard);
  }
  :global(:root:not([data-motion='normal'])) .root[data-pressed] {
    transform: none;
    opacity: 0.6;
  }
}
:global(:root[data-motion='reduce']) .root[data-interactive] {
  transition: opacity var(--_press-in) var(--motion-ease-standard);
}
:global(:root[data-motion='reduce']) .root[data-pressed] {
  transform: none;
  opacity: 0.6;
}
`;function i(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d}),`
`,n.jsx(e.h1,{id:"pill-button",children:"Pill Button"}),`
`,n.jsxs(e.p,{children:["Маленькая кнопка-таблетка: «Все», «Изменить», «Построить маршрут», действие в ",n.jsx(e.a,{href:"?path=/docs/components-snackbar--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Snackbar"}),". Справа в строке её ставит ",n.jsx(e.a,{href:"?path=/docs/components-cell-disclosure--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Cell Disclosure"})," (типы ",n.jsx(e.code,{children:"link"}),", ",n.jsx(e.code,{children:"pill"}),", ",n.jsx(e.code,{children:"pill-overlay"}),"). Главное действие экрана — это ",n.jsx(e.a,{href:"?path=/docs/components-button--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Button"}),", не таблетка."]}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1492-366",rel:"nofollow",children:"Pill button 1492:366"}),": Type link | white | overlay, Label, Show icon left / Icon left, Show icon right / Icon right, Show chevron."]}),`
`,n.jsx(o,{of:t}),`
`,n.jsx(c,{of:t}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { PillButton, LocationArrowIcon } from '@mtravel/ui';

<PillButton variant="link" chevron onClick={openAll}>Все</PillButton>
<PillButton variant="white" onClick={edit}>Изменить</PillButton>
<PillButton variant="overlay" iconRight={<LocationArrowIcon />} href={routeUrl} target="_blank">Построить маршрут</PillButton>
`})}),`
`,n.jsxs(e.p,{children:["Без ",n.jsx(e.code,{children:"onClick"})," и ",n.jsx(e.code,{children:"href"})," это ",n.jsx(e.code,{children:"<span>"}),": текст внутри строки или карточки, которые нажимаются целиком. С ",n.jsx(e.code,{children:"onClick"})," это ",n.jsx(e.code,{children:"<button>"})," (обработчик получает событие), с ",n.jsx(e.code,{children:"href"})," — ",n.jsx(e.code,{children:"<a>"})," (",n.jsx(e.code,{children:"target"}),", ",n.jsx(e.code,{children:"rel"}),", ",n.jsx(e.code,{children:"download"})," как у ссылки; ",n.jsx(e.code,{children:"disabled"})," гасит и то и другое). Кнопка сжимается под пальцем с первого касания и получает зону нажатия 44 px. ",n.jsx(e.code,{children:"ref"})," и остальные атрибуты попадают на корневой элемент."]}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(o,{of:a}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Props"}),n.jsx(e.th,{children:"Из чего собрано"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Type=link"}),n.jsx(e.td,{children:n.jsx(e.code,{children:'variant="link"'})}),n.jsxs(e.td,{children:["без фона, текст ",n.jsx(e.code,{children:"control/text/accent"}),", иконки ",n.jsx(e.code,{children:"control/icon/accent"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Type=white"}),n.jsx(e.td,{children:n.jsx(e.code,{children:'variant="white"'})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"control/bg/on-surface"}),", текст ",n.jsx(e.code,{children:"control/text/default"}),", иконки ",n.jsx(e.code,{children:"control/icon/primary"}),"; для серых карточек и Snackbar"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Type=overlay"}),n.jsx(e.td,{children:n.jsx(e.code,{children:'variant="overlay"'})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"control/bg/overlay/default"}),", обводка 0.5 px ",n.jsx(e.code,{children:"control/border/overlay/default"}),", размытие ",n.jsx(e.code,{children:"blur/bg-4"}),", текст ",n.jsx(e.code,{children:"control/text/selected"}),", иконки ",n.jsx(e.code,{children:"control/icon/inverse"}),"; для фото и карты"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Label"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"children"})}),n.jsx(e.td,{children:"IM-14 S"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Show icon left + Icon left"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"iconLeft"})}),n.jsxs(e.td,{children:["иконка 12 px, рисуется ",n.jsx(e.code,{children:"currentColor"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Show icon right + Icon right"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"iconRight"})}),n.jsx(e.td,{children:"иконка 12 px"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Show chevron"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"chevron"})}),n.jsx(e.td,{children:"chevron-right 12, штрих 1"})]})]})]}),`
`,n.jsxs(e.p,{children:["Высота 24, отступы 4 / 8 (",n.jsx(e.code,{children:"spacing/xs"}),", ",n.jsx(e.code,{children:"spacing/sm"}),"), между элементами 4, скругление ",n.jsx(e.code,{children:"radius/full"}),"."]}),`
`,n.jsx(e.h2,{id:"нажатие",children:"Нажатие"}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нажатие"})," (только у кнопки и ссылки): таблетка сжимается до 0.94 с первого касания за 100 мс по ease-out и возвращается пружиной строки (280 мс, лёгкий перелёт). В Figma состояния Pressed нет, это предложение."]}),`
`,n.jsxs(e.li,{children:["CSS-переходы: нажатие можно прервать, двигается только ",n.jsx(e.code,{children:"transform"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," без сжатия, нажатая таблетка на мгновение становится прозрачнее."]}),`
`]}),`
`,n.jsx(p,{prefix:"--pill-button-"}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.p,{children:"«Построить маршрут» на карте карточки места (Figma card_location 1493:6243)."}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(e.p,{children:"«Изменить» на серой карточке оформления."}),`
`,n.jsx(o,{of:j}),`
`,n.jsx(e.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"В Figma"}),n.jsx(e.th,{children:"В коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Высота link"}),n.jsx(e.td,{children:"у главного компонента Type=link 27 (текст не пересчитан после смены стиля на IM-14 S), у экземпляров 24"}),n.jsx(e.td,{children:"24"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Описание компонента"}),n.jsx(e.td,{children:"«link — по строке IM-16 Button»"}),n.jsx(e.td,{children:"IM-14 S, как в самом стиле слоя"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Заливка overlay"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"control/bg/overlay/default"})," с прозрачностью слоя 64 % поверх токена, в котором уже 64 %"]}),n.jsx(e.td,{children:"токен без второй прозрачности, как у IconButton"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Иконки по умолчанию"}),n.jsx(e.td,{children:"круг Solid 12 (заглушка)"}),n.jsx(e.td,{children:"нет: иконку передают узлом"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Disabled"}),n.jsx(e.td,{children:"нет"}),n.jsxs(e.td,{children:["текст ",n.jsx(e.code,{children:"control/text/disabled"}),", иконки ",n.jsx(e.code,{children:"control/icon/disabled"})]})]})]})]}),`
`,n.jsx(u,{css:m}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Текст таблетки и есть её имя: «Изменить» понятнее, чем «Все», если рядом несколько таких кнопок; добавьте ",n.jsx(e.code,{children:"aria-label"})," («Все билеты»), когда текста мало."]}),`
`,n.jsx(e.li,{children:"Белый текст overlay на стекле: контраст зависит от фото под ним."}),`
`,n.jsxs(e.li,{children:["Кнопка фокусируется с клавиатуры, кольцо ",n.jsx(e.code,{children:"border/focus"}),"."]}),`
`]})]})}function E(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{E as default};
