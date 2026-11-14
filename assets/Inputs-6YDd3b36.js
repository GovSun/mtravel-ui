import{j as e}from"./iframe-Dr5ib33t.js";import{u as i,M as c,C as r,a as t}from"./blocks-BQDa-jFX.js";import{F as o,P as l,S as h,L as x,a as j}from"./Field.stories-DwscZn3e.js";import{States as a,WithSheet as p}from"./Select.stories-DxzfAHS1.js";import{States as m}from"./Search.stories-CHhKl3wR.js";import{M as u,T as g}from"./DocTables-CsguvFim.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAdrHWJM.js";import"./index-Bc0N6I3Z.js";import"./parts-BsPlZssE.js";import"./useControllableState-BCXXtwcd.js";import"./Search-C10A3p51.js";import"./Select-BX4KZDvv.js";import"./usePress-6Rv7_Jz7.js";import"./Button-DFQPOwGN.js";import"./motion-C-Q-avtg.js";import"./BottomSheet-BSDEP7jt.js";import"./index-CU5QHq_h.js";import"./IconButton-DBWbz_Xc.js";import"./tokens-CNIzVYFy.js";function s(d){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o}),`
`,e.jsx(n.h1,{id:"inputs",children:"Inputs"}),`
`,e.jsxs(n.p,{children:["Три поля со страницы Figma ",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1-15",rel:"nofollow",children:"Inputs"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Field"})," (раньше Input) — ввод текста, 52 px, подпись над значением (",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=207-173",rel:"nofollow",children:"207:173"}),");"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Select"})," — выбор из списка, 48 px, без подписи сверху (",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=595-338",rel:"nofollow",children:"595:338"}),");"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Search"})," — поиск, 44 px, с лупой (",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=324-1260",rel:"nofollow",children:"324:1260"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:["У всех полей нет рамок, заливка ",e.jsx(n.code,{children:"control/bg/default"}),", радиус ",e.jsx(n.code,{children:"radius/lg"}),"."]}),`
`,e.jsx(n.p,{children:"Field — только для ввода с клавиатуры, шеврона у него нет. Если поле открывает список или другой экран (дата, город, пассажиры), это Select."}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Field, Select, Search, CalendarIcon, UsersIcon } from '@mtravel/ui';

<Field label="Имя и фамилия" value={name} onValueChange={setName} autoComplete="name" />
<Field label="Телефон" type="tel" inputMode="tel" error={phoneError} />
<Field label="Сумма" currency="с" inputMode="numeric" value={sum} onValueChange={setSum} />

<Select label="Дата поездки" value="14 ноября" leftIcon={<CalendarIcon />} onClick={openCalendar} />

<Select label="Пассажиры" value="2 взрослых" rightIcon={<UsersIcon />} open={sheetOpen} onClick={() => setSheetOpen(true)} />

<Search value={query} onValueChange={setQuery} onSearch={run} />
`})}),`
`,e.jsx(n.h2,{id:"состояния-и-токены",children:"Состояния и токены"}),`
`,e.jsx(r,{of:h}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"State (Figma)"}),e.jsx(n.th,{children:"Когда"}),e.jsx(n.th,{children:"Фон"}),e.jsx(n.th,{children:"Текст"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Placeholder"}),e.jsx(n.td,{children:"пусто, без фокуса"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/default"})}),e.jsxs(n.td,{children:["подпись по центру, IM-16 M ",e.jsx(n.code,{children:"control/text/secondary"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Focused"}),e.jsx(n.td,{children:"в поле курсор"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/default"})}),e.jsxs(n.td,{children:["подпись IM-12 M ",e.jsx(n.code,{children:"control/text/tertiary"})," сверху, значение IM-16 M ",e.jsx(n.code,{children:"control/text/default"}),", курсор ",e.jsx(n.code,{children:"control/bg/accent"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Filled"}),e.jsx(n.td,{children:"есть текст, без фокуса"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/default"})}),e.jsx(n.td,{children:"как Focused"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Error"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"error"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/error"})}),e.jsxs(n.td,{children:["под полем текст ошибки IM-12 R ",e.jsx(n.code,{children:"control/text/error"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Disabled"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"disabled"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/disabled"})}),e.jsxs(n.td,{children:["подпись, значение и иконки ",e.jsx(n.code,{children:"control/text/disabled"}),", ",e.jsx(n.code,{children:"control/icon/disabled"})]})]})]})]}),`
`,e.jsxs(n.p,{children:["Состояние выводится само из ",e.jsx(n.code,{children:"value"}),", фокуса, ",e.jsx(n.code,{children:"error"})," и ",e.jsx(n.code,{children:"disabled"}),". Отдельного пропа нет, на корне есть ",e.jsx(n.code,{children:"data-state"})," для тестов."]}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h2,{id:"анимации",children:"Анимации"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Подпись"})," плывёт вверх: крупная подпись-плейсхолдер (IM-16 M) уезжает вверх и уменьшается, а маленькая (IM-12 M) проявляется на её месте за 220 мс. Это два слоя, каждый в своём начертании, и на стыке они чуть размываются (1.5 px), поэтому в покое текст всегда резкий."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Крестик «очистить»"})," появляется, когда в поле есть текст: вырастает с 0.5 до 1 с лёгким перелётом за 300 мс, как крестик в Chips. Уходит быстрее, за 180 мс. Место под ним зарезервировано, поэтому текст не прыгает. Это CSS-переход: если быстро печатать и стирать, анимация разворачивается с текущего места. Тап по крестику не уводит фокус, и клавиатура на телефоне не закрывается."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Подсказка и ошибка"})," раскрываются под полем по высоте за 240 мс, а не выскакивают за один кадр."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Select"}),": при нажатии фон за 100 мс переходит на ",e.jsx(n.code,{children:"control/bg/pressed"})," и возвращается за 240 мс, как у кнопок. Когда список открыт, шеврон поворачивается вверх."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reduced motion"}),": крестик только проявляется, без роста."]}),`
`]}),`
`,e.jsx(u,{prefix:"--input-"}),`
`,e.jsx(n.h2,{id:"длинный-текст-на-телефоне",children:"Длинный текст на телефоне"}),`
`,e.jsx(r,{of:x}),`
`,e.jsxs(n.p,{children:["Внутри Field и Search настоящий ",e.jsx(n.code,{children:"<input>"}),", поэтому всё нативное работает:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Перемещение по тексту:"})," курсор ставится пальцем, долгое нажатие показывает лупу, на iOS работает трекпад на пробеле. Текст прокручивается за кареткой."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"В покое"})," длинное значение заканчивается «…»."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Длинная подпись"})," тоже обрезается «…», а ",e.jsx(n.strong,{children:"длинная ошибка"})," переносится на несколько строк."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Сумма с валютой:"})," знак стоит сразу после значения. Если сумма длинная, она сокращается, а знак остаётся видимым."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Размер шрифта"})," 16 px, поэтому iOS не увеличивает страницу при фокусе."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Тап"})," в любое место поля, а не только в строку текста, ставит курсор."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Клавиатуру выбирайте атрибутами поля: ",e.jsx(n.code,{children:"type"}),", ",e.jsx(n.code,{children:"inputMode"}),", ",e.jsx(n.code,{children:"enterKeyHint"}),", ",e.jsx(n.code,{children:"autoComplete"}),"."]}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h2,{id:"select-и-шторка",children:"Select и шторка"}),`
`,e.jsx(r,{of:p}),`
`,e.jsxs(n.p,{children:["Select — это кнопка (",e.jsx(n.code,{children:"aria-haspopup"}),", ",e.jsx(n.code,{children:"aria-expanded"}),"), клавиатура для неё не открывается. Обычно он открывает ",e.jsx(n.code,{children:"BottomSheet"})," с вариантами. Пока шторка открыта, передавайте ",e.jsx(n.code,{children:"open"}),"."]}),`
`,e.jsx(n.h2,{id:"доступность",children:"Доступность"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Подпись Field — настоящий ",e.jsx(n.code,{children:"<label for>"}),". Подсказка и ошибка связаны с полем через ",e.jsx(n.code,{children:"aria-describedby"}),". При ошибке у поля ",e.jsx(n.code,{children:"aria-invalid"}),", а текст ошибки объявляется как ",e.jsx(n.code,{children:'role="alert"'}),"."]}),`
`,e.jsxs(n.li,{children:["У Select нет видимой подписи, поэтому обязателен ",e.jsx(n.code,{children:"label"}),": он читается скринридером вместе со значением."]}),`
`,e.jsxs(n.li,{children:["У Search роль ",e.jsx(n.code,{children:"search"}),", а ",e.jsx(n.code,{children:"placeholder"})," по умолчанию становится именем поля."]}),`
`,e.jsx(n.li,{children:"Фокус в Field виден по курсору и подписи, которая уезжает вверх. Фон в фокусе не меняется, как в Figma, обводки нет — для клавиатуры это слабый сигнал, см. вопросы ниже."}),`
`]}),`
`,e.jsx(n.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Что"}),e.jsx(n.th,{children:"В Figma"}),e.jsx(n.th,{children:"В коде"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Подсказка под полем"}),e.jsx(n.td,{children:"шрифт Inter 13 без стиля IM"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"IM-12 R"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Отступ подсказки"}),e.jsx(n.td,{children:"Input 8 / 12, Select 4 / 16"}),e.jsx(n.td,{children:"оставлено как в Figma, лучше выровнять"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Иконки"}),e.jsx(n.td,{children:"цвет #36383C"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/icon/secondary"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Лупа в фокусе"}),e.jsx(n.td,{children:"#212121"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/icon/primary"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Крестик в Field"}),e.jsx(n.td,{children:"виден во всех состояниях, даже в пустом поле"}),e.jsx(n.td,{children:"только когда есть текст, место зарезервировано"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Select Opened"}),e.jsx(n.td,{children:"выглядит как Filled"}),e.jsx(n.td,{children:"то же, плюс поворот шеврона, если он включён"})]})]})]}),`
`,e.jsx(n.h2,{id:"токены",children:"Токены"}),`
`,e.jsx(g,{names:["--control-bg-default","--control-bg-pressed","--control-bg-hover","--control-bg-error","--control-bg-disabled","--control-bg-accent","--control-bg-on-surface","--control-text-default","--control-text-secondary","--control-text-tertiary","--control-text-disabled","--control-text-error","--control-icon-secondary","--control-icon-tertiary","--control-icon-primary","--control-icon-disabled","--shadow-icon","--font-im-16-m","--font-im-12-m","--font-im-12-r","--radius-lg"]})]})}function W(d={}){const{wrapper:n}={...i(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(s,{...d})}):s(d)}export{W as default};
