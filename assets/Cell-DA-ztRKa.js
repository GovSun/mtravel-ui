import{j as e}from"./iframe-DyD5Yel4.js";import{u as o,M as t,C as r,a as l}from"./blocks-CcI75u3-.js";import{C as c,P as d,V as a,L as h,T as x,D as j,a as p,b as m,c as u,d as g,e as b,f,g as v}from"./Cell.stories-BV3wAv6Z.js";import{M as k,U as C}from"./DocTables-D5FjzMKu.js";import{c as D}from"./CellCenter.module-hRctf1Kq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./photos-D1Eacwwu.js";import"./stack-ala-archa-CZCiGT1X.js";import"./stack-kel-tor-CWBtKByR.js";import"./Caption-D_clnAXK.js";import"./Cell-BMryoHV2.js";import"./cx-2dOUpm6k.js";import"./Pressable-CAjp7WdB.js";import"./usePress-XYzAalw7.js";import"./LeadingIcon-B3CZMOJC.js";import"./Skeleton-dpQW7cMp.js";import"./mergeRefs-BZQLIp5G.js";import"./motion-C-Q-avtg.js";import"./general-CSE0kF9v.js";import"./Svg-B7GM2ZFd.js";import"./paths-BjPgyxdS.js";import"./PillButton-Cdj7WtD9.js";import"./arrows-0JYTYJZi.js";import"./Counter-CavxruiM.js";import"./useControllableState-D9cJCl43.js";import"./CounterButton-CAO8KXCV.js";import"./RollingNumber-Dqz4KuU3.js";import"./Toggle-BLxkVncc.js";import"./useInstantAfterKey-D3FdC2PV.js";import"./Checkbox-CsOUmA-N.js";import"./Radio-qMCK-bX2.js";import"./CellCenter-DamPGtPP.js";import"./Divider-CIZGT-_8.js";import"./time-lpmEQjgl.js";import"./people-tOiSq3ZR.js";import"./Avatar-BxJZJPWd.js";import"./places-CYDz-5dl.js";import"./FlagIcon-Lj2B5Mol.js";import"./SectionTitle-CwRady4O.js";import"./deprecated-D5zQVeCK.js";import"./tokens-Bc2_NrJ2.js";const w=`/*
 * Cell (Figma 47:163). Row: content (padding 8 8 8 16, gap 4) with main = leading + center (gap 12) and the disclosure.
 * Heights: none / Icon 32 → 48, Icon 40 → 56; two text lines make it 64. Background card: radius 20, fill bg/sunken-subtle,
 * left padding 12 (spacing/md), divider divider/border/on-sunken. The divider sits on the bottom edge and does not add height.
 */
.root {
  --_press-in: calc(var(--cell-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--cell-motion-press-out-duration) * var(--motion-scale));
  position: relative;
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
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none; /* a long press on a link row must not open the iOS preview */
}
.root[data-background] {
  border-radius: 20px; /* no token: Figma 127:263 — radius 20 sits between radius/lg (16) and radius/xl (24) */
  background-color: var(--color-bg-sunken-subtle);
}
.root[data-pressable] {
  cursor: pointer;
  touch-action: manipulation;
  -webkit-user-select: none;
  user-select: none;
}
/* only a chevron row (data-press-scale) moves; a card with Background scales as a whole */
.root[data-press-scale][data-background] {
  transition: transform var(--_press-out) var(--cell-motion-press-easing);
}
.root:disabled {
  cursor: default;
}
.root:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: -2px;
}

.content {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  gap: var(--spacing-xs);
  min-height: 48px;
  padding: var(--spacing-sm) var(--spacing-sm) var(--spacing-sm) var(--spacing-lg);
}
/* a page row (no card) scales its content, so the divider on the bottom edge stays where it is */
.root[data-press-scale]:not([data-background]) .content {
  transition: transform var(--_press-out) var(--cell-motion-press-easing);
}
.root[data-background] .content {
  padding-left: var(--spacing-md);
}
.root[data-leading='40'] .content {
  min-height: 56px;
}

.main {
  display: flex;
  flex: 1 1 0;
  align-items: center;
  gap: var(--spacing-md);
  min-width: 0;
}
.root[data-leading='none'] .main {
  gap: var(--spacing-sm);
}
.center {
  flex: 1 1 0;
}

.divider {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  width: auto;
}
/* on the sunken card the line is divider/border/on-sunken (Figma Background=True binds border/on-sunken) */
.root[data-background] .divider {
  --_color: var(--divider-border-on-sunken);
}

/*
 * Press: a spring, for chevron rows only (data-press-scale). Down on pointer-down, fast ease-out, to
 * scale(--cell-motion-press-scale); up, the release spring (--cell-motion-press-easing, a little overshoot) brings it
 * back to 1. Transform only, no fill or shadow. Transitions, so a quick second tap reverses from wherever the row is.
 * Checkbox, radio and toggle rows never move: Cell hands the press to the control (forcePressed), see Cell.tsx.
 */
.root[data-press-scale][data-pressed][data-background],
.root[data-press-scale][data-pressed]:not([data-background]) .content {
  transform: scale(var(--cell-motion-press-scale));
  transition-duration: var(--_press-in);
  transition-timing-function: var(--motion-ease-out);
}

/* Reduced motion: no scale, the pressed chevron row dips in opacity for a moment instead */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .root[data-press-scale] {
    --_dip: calc(var(--cell-motion-state-duration) * var(--motion-scale));
  }
  :global(:root:not([data-motion='normal'])) .root[data-press-scale][data-background],
  :global(:root:not([data-motion='normal'])) .root[data-press-scale]:not([data-background]) .content {
    transition: opacity var(--_dip) var(--motion-ease-standard);
  }
  :global(:root:not([data-motion='normal'])) .root[data-press-scale][data-pressed][data-background],
  :global(:root:not([data-motion='normal'])) .root[data-press-scale][data-pressed]:not([data-background]) .content {
    transform: none;
    opacity: 0.6;
  }
}
:global(:root[data-motion='reduce']) .root[data-press-scale] {
  --_dip: calc(var(--cell-motion-state-duration) * var(--motion-scale));
}
:global(:root[data-motion='reduce']) .root[data-press-scale][data-background],
:global(:root[data-motion='reduce']) .root[data-press-scale]:not([data-background]) .content {
  transition: opacity var(--_dip) var(--motion-ease-standard);
}
:global(:root[data-motion='reduce']) .root[data-press-scale][data-pressed][data-background],
:global(:root[data-motion='reduce']) .root[data-press-scale][data-pressed]:not([data-background]) .content {
  transform: none;
  opacity: 0.6;
}
`;function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(n.h1,{id:"cell",children:"Cell"}),`
`,e.jsx(n.p,{children:"Строка списка: иконка или флаг слева, текст по центру, действие справа. Из неё собраны история поиска, «Популярные направления», участники со счётчиком, фильтры, детали заказа. Когда строка — это просто кнопка «Применить» или карточка с картинкой, Cell не нужна."}),`
`,e.jsxs(n.p,{children:["Figma: ",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=47-163",rel:"nofollow",children:"Cell 47:163"}),": Leading None | Icon 20 | Icon 32 | Icon 40 | Icon full 32 | Icon full 40 × Background × Sub-cell × State Default | Shimmer, булевы Divider и Disclosure. Части: ",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=45-105",rel:"nofollow",children:"Center"}),", ",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=46-102",rel:"nofollow",children:"Disclosure"}),", ",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=168-18687",rel:"nofollow",children:"Leading icon"})," (",e.jsx(n.a,{href:"?path=/docs/components-cell-disclosure--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"описание"}),")."]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(l,{of:d}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"По умолчанию"})," строка — один заголовок ",e.jsx(n.strong,{children:"IM-16 M"})," (16 Medium, ",e.jsx(n.code,{children:"control/text/default"}),"), высота 48, справа шеврон, как Cell в Figma без настроек. Заголовок одинаковый у всех типов Center: подзаголовок под ним — IM-14 R ",e.jsx(n.code,{children:"control/text/tertiary"}),", лейбл над ним — IM-14 R ",e.jsx(n.code,{children:"control/text/secondary"}),". В Figma однострочные типы Center называются «Title 17» и «Title 15», но это имена, а не размеры: оба IM-16 M."]}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Cell, CellDisclosure, LocationPinIcon } from '@mtravel/ui';

// строка-кнопка: целиком нажимается, справа шеврон
<Cell title="Бишкек" subtitle="340 предложений · Кыргызстан" icon={<LocationPinIcon />} iconSize={40} disclosure onClick={pick} />

// строка с флажком: тап по любому месту строки переключает чекбокс
<Cell title="Трансфер от отеля" disclosure={<CellDisclosure variant="checkbox" checked={on} onCheckedChange={setOn} />} />

// строка со счётчиком
<Cell title="Взрослый" subtitle="Старше 18 лет" disclosure={<CellDisclosure variant="counter" counter={{ value, onValueChange: setValue, min: 1 }} />} />
`})}),`
`,e.jsx(n.p,{children:"Что за элемент получится, зависит от того, что передать:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Передано"}),e.jsx(n.th,{children:"Элемент"}),e.jsx(n.th,{children:"Как работает"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onClick"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<button>"})}),e.jsx(n.td,{children:"вся строка — цель тапа, Enter и пробел работают"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"href"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<a>"})}),e.jsx(n.td,{children:"вся строка — ссылка"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"CellDisclosure"})," типа checkbox, radio, toggle"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<div>"})}),e.jsxs(n.td,{children:["тап по строке переключает контрол; фокус и семантика остаются у настоящего ",e.jsx(n.code,{children:"<input>"}),", имя ему даёт заголовок строки"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"ничего"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<div>"})}),e.jsx(n.td,{children:"статичная строка"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"skeleton"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<div>"})}),e.jsx(n.td,{children:"строка загрузки, не нажимается"})]})]})]}),`
`,e.jsxs(n.p,{children:["Ссылке доступны ",e.jsx(n.code,{children:"target"}),", ",e.jsx(n.code,{children:"rel"}),", ",e.jsx(n.code,{children:"download"}),": с ",e.jsx(n.code,{children:'target="_blank"'})," Cell сам ставит ",e.jsx(n.code,{children:'rel="noopener noreferrer"'}),". Ваши обработчики указателя (",e.jsx(n.code,{children:"onPointerDown"})," и другие) работают вместе с нажатием строки. ",e.jsx(n.code,{children:"ref"})," и остальные атрибуты попадают на корневой элемент."]}),`
`,e.jsxs(n.p,{children:["Не вкладывайте счётчик или таблетку с ",e.jsx(n.code,{children:"onClick"})," в строку-кнопку: кнопка внутри кнопки недопустима (в dev-режиме Cell напишет об этом в консоль). Выбирайте одно: строка или контрол. Если у строки ",e.jsx(n.code,{children:"disabled"}),", он передаётся и в ",e.jsx(n.code,{children:"CellDisclosure"}),", поэтому переключатель справа тоже гаснет."]}),`
`,e.jsx(n.h2,{id:"варианты",children:"Варианты"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.h3,{id:"зазор-до-текста",children:"Зазор до текста"}),`
`,e.jsx(n.p,{children:"Зазор 12 считается от того, что видно. Иконка в боксе 32 или 40 стоит со своими полями 6 / 8, и рядом с текстом это 18–20 px; когда нужен ровный зазор, берите Icon 20 (только иконка) или свой элемент на весь слот (Icon full). У этих строк разделитель начинается под текстом."}),`
`,e.jsx(r,{of:h}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Figma"}),e.jsx(n.th,{children:"Проп"}),e.jsx(n.th,{children:"Заметка"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Leading = None / Icon 32 / Icon 40"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"icon"})," + ",e.jsx(n.code,{children:"iconSize"})," 32 / 40"]}),e.jsx(n.td,{children:"иконка в боксе с полями 6 / 8; у Icon 40 плитка фона включена, у Icon 32 нет, как в Figma"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Leading = Icon 20"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"icon"})," + ",e.jsx(n.code,{children:"iconSize={20}"})]}),e.jsx(n.td,{children:"только иконка, без бокса и плитки: текст в 12 px от видимой иконки, с 48 от края (на карточке с 44)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Leading = Icon full 32 / 40"}),e.jsxs(n.td,{children:["свой элемент в ",e.jsx(n.code,{children:"leading"})," + ",e.jsx(n.code,{children:"iconSize"})," 32 / 40"]}),e.jsx(n.td,{children:"флаг, фото, плитка сервиса — на весь слот; текст в 12 px от него, с 60 / 68 (на карточке 56 / 64)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Background"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"background"})}),e.jsxs(n.td,{children:["карточка со скруглением 20 и заливкой ",e.jsx(n.code,{children:"bg/sunken-subtle"}),", разделитель ",e.jsx(n.code,{children:"divider/border/on-sunken"}),"; отступы от краёв экрана задаёт экран"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Sub-cell"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"subCell"})}),e.jsxs(n.td,{children:["в Figma в состоянии Default выглядит как обычная строка; в коде только ",e.jsx(n.code,{children:"data-sub-cell"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"State = Shimmer"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"skeleton"})}),e.jsx(n.td,{children:"серые полоски вместо текста, один блик на всю строку; строка перестаёт быть кнопкой"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Divider"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"divider"}),", ",e.jsx(n.code,{children:"dividerVariant"})]}),e.jsx(n.td,{children:"линия 1 px по нижнему краю, высоту строки не меняет"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Disclosure"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"disclosure"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"true"})," — шеврон, либо ",e.jsx(n.code,{children:'<CellDisclosure variant="…" />'})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Center Type"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"title"}),", ",e.jsx(n.code,{children:"subtitle"}),", ",e.jsx(n.code,{children:"label"})]}),e.jsxs(n.td,{children:["тип выводится из текстов, ",e.jsx(n.code,{children:"centerVariant"})," — если нужно задать явно"]})]})]})]}),`
`,e.jsx(n.p,{children:"Размеры: 48 px без иконки и с иконкой 32, 56 с иконкой 40, 64 с двумя строками текста. Отступы 8 / 8 / 8 / 16 (на карточке слева 12), зазор до действия 4, до текста 12."}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h2,{id:"кейсы",children:"Кейсы"}),`
`,e.jsx(n.p,{children:"Строки взяты из файла «Выходные» (RB3kRwjZ9Akvh6n5Ln4M6N) как есть: тексты, порядок, иконки и разделители."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Где в дизайне."})," «Куда отправимся?» (Главная 173:12219), «Вид активности» и «Способ передвижения» (Результат поиска 189:16224), «Участники» (Редактирование кол-во участников 2254:34769, Детали заказа 1338:107636), «Детали заказа» (Оформление 1338:107637), «Организатор» и «Условия возврата» (Детальная 4704:41714 / 4704:43379, Условия возврата 1705:214334)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Куда отправимся."})," «Недавно искали» и «Популярные направления»: иконка 40, два ряда текста, у популярных разделитель. Справа ничего нет."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Участники."})," Строка со счётчиком, всего не больше 8 человек: при пределе нужная кнопка счётчика гаснет."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Фильтры."})," Чекбоксы в строках: «Вид активности» и «Способ передвижения» (с «Трансфер от отеля»). Вся строка переключает чекбокс."]}),`
`,e.jsx(r,{of:u}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Детали заказа."})," Строки с цветной плиткой сервиса и карточка «Правила возврата»."]}),`
`,e.jsx(r,{of:g}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Организатор."})," Карточка с логотипом (Avatar как Leading icon 40) и стрелкой."]}),`
`,e.jsx(r,{of:b}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Условия возврата."})," Подстроки 32 px с зелёным кругом и галочкой, без разделителей и стрелок."]}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(n.h2,{id:"анимация",children:"Анимация"}),`
`,e.jsx(r,{of:v}),`
`,e.jsx(n.p,{children:"Отклик на нажатие начинается в момент касания, а не отпускания, и появляется на том, что меняет тап."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Строка"}),e.jsx(n.th,{children:"Что происходит при нажатии"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["С шевроном (",e.jsx(n.code,{children:"disclosure"})," или ",e.jsx(n.code,{children:'variant="chevron"'}),") и ",e.jsx(n.code,{children:"onClick"})," / ",e.jsx(n.code,{children:"href"})]}),e.jsx(n.td,{children:"строка сжимается, это пружина"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"С чекбоксом, радио или переключателем"}),e.jsx(n.td,{children:"строка стоит на месте, нажимается сам контрол: квадрат или круг сжимается, ручка переключателя растягивается. Тап в любом месте строки его переключает"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"С галочкой, без шеврона или с другим типом Disclosure"}),e.jsx(n.td,{children:"строка не двигается. Отклик — результат тапа, например появление галочки"})]})]})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Пружина у строки с шевроном."})," Строка сжимается до 0.97 за 100 мс (ease-out). На отпускании её возвращает пружина с небольшим перелётом (около 1.006) за 280 мс, кривая ",e.jsx(n.code,{children:"linear()"})," с запасным ",e.jsx(n.code,{children:"cubic-bezier"}),". Сжимается содержимое строки, а у карточки (Background) вся карточка с фоном; разделитель остаётся на месте. Тени и заливки при нажатии нет, двигается только ",e.jsx(n.code,{children:"transform"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Почему только с шевроном."})," Шеврон говорит, что вся строка — одна кнопка, которая куда-то ведёт, и сжатие подтверждает именно это. В строке с контролом тап меняет контрол, поэтому отзывается он. Если сжималась бы строка, казалось бы, что она откроет что-то ещё."]}),`
`,e.jsx(n.li,{children:"Если палец уехал со строки или браузер забрал жест под прокрутку, нажатие отменяется: строка и контрол возвращаются. Посмотреть пружину: история «Нажатие» с переключателем Motion → «Замедление ×4»."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Галочка"})," выбранной строки проявляется и вырастает с 0.6 за 160 мс."]}),`
`,e.jsxs(n.li,{children:["Это CSS-переходы, их можно прервать на любом месте. ",e.jsx(n.strong,{children:"Reduced motion:"})," строка с шевроном не сжимается, а на 160 мс становится прозрачнее (0.6). Контролы отвечают по своим правилам reduced motion, галочка появляется без движения. Быстрое повторное касание разворачивает пружину с того места, где она сейчас."]}),`
`,e.jsxs(n.li,{children:["Блик skeleton общий на всю строку и двигается через transform, как у ",e.jsx(n.a,{href:"?path=/docs/components-skeleton--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Skeleton"}),"."]}),`
`]}),`
`,e.jsx(k,{prefix:"--cell-"}),`
`,e.jsx(n.h2,{id:"без-токенов-в-ds-и-вопросы-к-figma",children:"Без токенов в DS и вопросы к Figma"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Что"}),e.jsx(n.th,{children:"Значение"}),e.jsx(n.th,{children:"Решение"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Скругление карточки"}),e.jsxs(n.td,{children:["20 px (127:263), токены ",e.jsx(n.code,{children:"radius/lg"})," 16 и ",e.jsx(n.code,{children:"radius/xl"})," 24"]}),e.jsx(n.td,{children:"20 px с комментарием"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Отступ 12 слева на карточке"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"spacing/md"})}),e.jsx(n.td,{children:"токен"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Полоса текста"}),e.jsx(n.td,{children:"20 px (1177:4846); у однострочного Center (типы «Title 17» / «Title 15», оба IM-16 M) 24, Center 32"}),e.jsx(n.td,{children:"20 и 24 px с комментарием"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Pressed"}),e.jsx(n.td,{children:"в Figma нет"}),e.jsx(n.td,{children:"предложение: сжатие до 0.97 и возврат пружиной"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Sub-cell"}),e.jsx(n.td,{children:"в Default не отличается от обычной строки; в Shimmer текст на 12 px уже"}),e.jsx(n.td,{children:"оставлен только как признак"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Title 17 и Title 15 (Center)"}),e.jsx(n.td,{children:"один и тот же стиль IM-16 M, имена остались от старых размеров"}),e.jsxs(n.td,{children:["в коде один ",e.jsx(n.code,{children:"title"}),", IM-16 M; в Figma типы стоит переименовать, например в «Title»"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Высота строки с разделителем"}),e.jsx(n.td,{children:"в продуктовых экранах 64 с разделителем, у компонента на 1 px больше"}),e.jsx(n.td,{children:"линия по нижнему краю внутри строки"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Разделитель на карточке"}),e.jsxs(n.td,{children:["Background=True: линия ",e.jsx(n.code,{children:"border/on-sunken"})," (в Figma лежит в группе ",e.jsx(n.code,{children:"border/border/…"}),") с прозрачностью слоя 4 % поверх токена, в котором уже 4 % чёрного"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"divider/border/on-sunken"})," без второй прозрачности"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Shimmer на карточке"}),e.jsxs(n.td,{children:["Background=True, State=Shimmer: ",e.jsx(n.code,{children:"radius/lg"})," 16 и заливка ",e.jsx(n.code,{children:"bg/surface"}),", у Default 20 и ",e.jsx(n.code,{children:"bg/sunken-subtle"})]}),e.jsx(n.td,{children:"как у Default"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Текст в Center"}),e.jsx(n.td,{children:"заголовок и подзаголовок до 2 строк (maxLines 2), лейбл 1"}),e.jsx(n.td,{children:"одна строка с многоточием"})]})]})]}),`
`,e.jsx(C,{css:[w,D]}),`
`,e.jsx(n.h2,{id:"доступность",children:"Доступность"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Строка-кнопка и строка-ссылка — настоящие ",e.jsx(n.code,{children:"<button>"})," и ",e.jsx(n.code,{children:"<a>"}),", фокус виден рамкой 2 px ",e.jsx(n.code,{children:"border/focus"}),". Высота от 48 px, цель тапа больше 44."]}),`
`,e.jsxs(n.li,{children:["У checkbox, radio, toggle и counter имя берётся из заголовка строки. Своё имя можно передать в ",e.jsx(n.code,{children:"aria-label"}),"."]}),`
`,e.jsxs(n.li,{children:["Текст в одну строку обрезается многоточием: у строки фиксированная высота. Полный текст нужен там, где обрезка потеряет смысл: тогда делайте двухстрочный Center или свой ",e.jsx(n.code,{children:"leading"}),"."]}),`
`,e.jsxs(n.li,{children:["Строка ",e.jsx(n.code,{children:"skeleton"})," — ",e.jsx(n.code,{children:'role="status" aria-busy'})," с подписью «Загрузка»."]}),`
`,e.jsxs(n.li,{children:["Cell находит ваш ",e.jsx(n.code,{children:"CellDisclosure"})," по типу компонента. Если обернуть его в свой компонент, имя из заголовка и ",e.jsx(n.code,{children:"disabled"})," не подставятся: передайте их сами."]}),`
`,e.jsxs(n.li,{children:["Выбранность в списке выбора передавайте через ",e.jsx(n.code,{children:'role="option"'})," и ",e.jsx(n.code,{children:"aria-selected"}),", а не одной галочкой."]}),`
`]})]})}function pe(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{pe as default};
