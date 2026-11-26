import{j as n}from"./iframe-DyD5Yel4.js";import{u as a,M as s,C as i,a as d}from"./blocks-CcI75u3-.js";import{F as c,P as o,S as l,E as h,C as x,T as j}from"./FloatingContainer.stories-pnwsP79D.js";import{M as m,U as g}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./Phone-D_QzrYrn.js";import"./FloatingContainer-DeRfZ3x8.js";import"./cx-2dOUpm6k.js";import"./mergeRefs-BZQLIp5G.js";import"./useKeyboardInset-8n5XJZWl.js";import"./PromoBadge-MRvWEy0B.js";import"./OldPrice-CFXJrPco.js";import"./Button-grGIhY78.js";import"./motion-C-Q-avtg.js";import"./Pressable-CAjp7WdB.js";import"./usePress-XYzAalw7.js";import"./FloatingFilter-DvcJgFUi.js";import"./time-lpmEQjgl.js";import"./Svg-B7GM2ZFd.js";import"./people-tOiSq3ZR.js";import"./Disclaimer-BsSMNtxi.js";import"./Checkbox-CsOUmA-N.js";import"./useControllableState-D9cJCl43.js";import"./useInstantAfterKey-D3FdC2PV.js";import"./tokens-Bc2_NrJ2.js";const p=`/*
 * FloatingContainer (Figma 157:12952). The disclaimer is the DS Disclaimer component (a slot), not drawn here. bg/surface, shadow/bottom-bar (Figma binds floating-container/shadow/default —
 * not in the code token export yet, same value), actions in 12 / 16 / 16, gap spacing/sm.
 */
.root {
  --_in: calc(var(--floating-container-motion-in-duration) * var(--motion-scale));
  --_out: calc(var(--floating-container-motion-out-duration) * var(--motion-scale));

  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  background: var(--color-bg-surface);
  /* the on-screen keyboard (useKeyboardInset writes --keyboard-inset): lift above it. \`translate\` is not in the
     transition list on purpose, the bar follows the keyboard at once instead of lagging 280 ms behind it */
  translate: 0 calc(var(--keyboard-inset, 0px) * -1);
  transform: translateY(calc(100% + 24px)); /* + the shadow, so nothing peeks out at the bottom edge */
  visibility: hidden;
  /* leaving: faster than coming, then gone for taps and screen readers */
  transition:
    transform var(--_out) var(--floating-container-motion-easing),
    visibility 0s linear var(--_out);
}
.root[data-shadow] {
  box-shadow: var(--shadow-bottom-bar);
}
.root[data-visible] {
  transform: none;
  visibility: visible;
  transition:
    transform var(--_in) var(--floating-container-motion-easing),
    visibility 0s;
}

/* showActions={false}: the bar sinks by the actions row's height (--_actions-h, measured), the buttons fade on the spot.
   The row's white stays under the pill, where the home indicator is. Out like \`visible\` (200 ms), back in 280 ms. */
.root[data-visible][data-actions-hidden] {
  transform: translateY(var(--_actions-h, 0px));
  transition:
    transform var(--_out) var(--floating-container-motion-easing),
    visibility 0s;
}
.actions > * {
  transition: opacity calc(var(--floating-container-motion-actions-fade) * var(--motion-scale)) var(--motion-ease-standard);
}
.root[data-actions-hidden] .actions > * {
  opacity: 0;
}

.actions {
  display: flex;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg) var(--spacing-lg);
}
.root[data-layout='row'] .actions {
  align-items: center;
  justify-content: space-between; /* a price on the left, the button on the right */
}
.root[data-layout='row'] .actions > * {
  flex: 1 1 0;
  min-width: 0;
}
.root[data-layout='column'] .actions {
  flex-direction: column;
}
/* Figma Variant=Text / result («Button area»: space-between, gap 32): the price block hugs its content on the left, the
   button is half of the row minus the gap (148 at 360) — it stays at its width when it needs more for its label */
.root[data-layout='row'] .actions:has(> [data-floating-price]) {
  gap: 32px; /* no token: Figma «Button area» gap 32 */
}
.root[data-layout='row'] .actions > [data-floating-price] {
  flex: none;
}
.root[data-layout='row'] .actions:has(> [data-floating-price]) > :not([data-floating-price]) {
  flex: 0 0 calc((100% - 32px) / 2);
  min-width: max-content;
  margin-left: auto;
}

/* Figma: Inter 13 / 1.25 with floating-container/text/hint (no IM style) → IM-12 R, text/tertiary */
.text {
  margin: 0;
  padding: var(--spacing-md) var(--spacing-lg) 0;
  font: var(--font-im-12-r);
  letter-spacing: var(--tracking-im-12-r);
  color: var(--control-text-tertiary);
}
.bottom {
  padding: 0 var(--spacing-lg) var(--spacing-md);
  text-align: center;
}

.content {
  padding: var(--spacing-md) var(--spacing-lg) 0; /* Figma «User content» slot */
}

/*
 * Figma «Filter» (Wrap 1042:1286): 76 px row, the pill centred, the page fades out under it — white 0 % at the top,
 * 100 % from 88 % of the height down (Figma gradient 0 % → 100 % white, raw white → bg/surface, so it flips with the
 * theme). The fade lets taps and scrolling through to the page; only the pill catches them.
 */
.filter {
  display: flex;
  justify-content: center;
  padding: var(--spacing-lg) var(--spacing-md);
  background: linear-gradient(to bottom, transparent, var(--color-bg-surface) 88%);
  pointer-events: none;
}
.filter > * {
  pointer-events: auto;
}
/* Variant Text / result: the root has no fill and no shadow (the page shows through the fade), the rows under it are white */
.root[data-filter] {
  background: none;
  pointer-events: none; /* the fade is not a wall: taps and scrolling go through to the page */
}
.root[data-filter] > :not(.filter) {
  background: var(--color-bg-surface);
  pointer-events: auto;
}

/* Figma «Show keyboard»: iOS keyboard, 287 px in the mock; here it is only the room it takes */
.keyboard {
  display: block;
}

.home {
  position: relative;
  height: var(--floating-container-safe-bottom, env(safe-area-inset-bottom, 0px));
}
/* the keyboard covers the home indicator: no safe-area gap between the bar and the keyboard */
.root[data-keyboard-open] .home {
  height: 0;
}

.root[data-instant] {
  transition: none;
}

/* reduced motion: a short fade in place instead of the slide */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .root {
    transform: none;
    opacity: 0;
    transition:
      opacity calc(var(--floating-container-motion-fade-duration) * var(--motion-scale)) linear,
      visibility 0s linear calc(var(--floating-container-motion-fade-duration) * var(--motion-scale));
  }
  :global(:root:not([data-motion='normal'])) .root[data-visible] {
    opacity: 1;
    transition:
      opacity calc(var(--floating-container-motion-fade-duration) * var(--motion-scale)) linear,
      visibility 0s;
  }
}
:global(:root[data-motion='reduce']) .root {
  transform: none;
  opacity: 0;
  transition:
    opacity calc(var(--floating-container-motion-fade-duration) * var(--motion-scale)) linear,
    visibility 0s linear calc(var(--floating-container-motion-fade-duration) * var(--motion-scale));
}
:global(:root[data-motion='reduce']) .root[data-visible] {
  opacity: 1;
  transition:
    opacity calc(var(--floating-container-motion-fade-duration) * var(--motion-scale)) linear,
    visibility 0s;
}
/* reduced motion + showActions={false}: the bar takes its place at once, only the buttons fade */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .root[data-visible][data-actions-hidden] {
    transform: translateY(var(--_actions-h, 0px));
  }
}
:global(:root[data-motion='reduce']) .root[data-visible][data-actions-hidden] {
  transform: translateY(var(--_actions-h, 0px));
}
`;function r(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:c}),`
`,n.jsx(t.h1,{id:"floatingcontainer",children:"FloatingContainer"}),`
`,n.jsxs(t.p,{children:["Нижняя панель с действиями экрана: «Оплатить», «Продолжить», цена и «Выбрать дату». Figma: ",n.jsx(t.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=157-12952",rel:"nofollow",children:"FloatingContainer 157:12952"}),". Как она работает вместе с шапкой, показано в ",n.jsx(t.a,{href:"?path=/docs/components-appbar--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Appbar"}),": на экране с обложкой панель выезжает в тот же момент, когда шапка становится белой."]}),`
`,n.jsx(i,{of:o}),`
`,n.jsx(d,{of:o}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Где в дизайне."})," Фильтрация 571:36536, Результат поиска 189:16224, Детальная страница 173:13296 (Итого и «К оформлению»), Оформление 244:25370 и «Оформление заказ» 1338:107637."]}),`
`,n.jsx(t.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(i,{of:l}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Figma"}),n.jsx(t.th,{children:"Проп"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Variant=Default"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:'layout="column"'}),": кнопки одна под другой"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Variant=Horizontal"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:'layout="row"'})," (по умолчанию): в ряд, поровну"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Variant=Text"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"<FloatingPrice price discount oldPrice />"})," и кнопка: цена IM-24 B, рядом бейдж скидки, под ней старая цена 16"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Variant=result"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:'<FloatingPrice label="Итого" price />'})," и кнопка: «Итого» IM-16 R ",n.jsx(t.code,{children:"control/text/secondary"})," над ценой"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Shadow Visibility=True / False"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"shadow"}),": над контентом / внутри шторки"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Show top text, Show bottom text"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"topText"}),", ",n.jsx(t.code,{children:"bottomText"})]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Show disclaimer, Center disclamer"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"disclaimer={<Disclaimer … />}"})," (компонент DS, ",n.jsx(t.code,{children:'variant="checkbox"'})," или ",n.jsx(t.code,{children:'"center"'}),"), ",n.jsx(t.code,{children:'disclaimerPlacement="above" | "below"'}),": над кнопками или под ними и клавиатурой"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Filter"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"filter={<FloatingFilter items={…} />}"}),", компонент ",n.jsx(t.a,{href:"?path=/docs/components-floatingfilter--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"FloatingFilter"})]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Show keyboard"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"keyboard"}),": место под клавиатуру (в превью ",n.jsx(t.code,{children:"KeyboardMock"}),")"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"User content"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"userContent"})," (не ",n.jsx(t.code,{children:"content"}),": так называется нативный атрибут)"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Show buttons"}),n.jsxs(t.td,{children:["кнопки (",n.jsx(t.code,{children:"children"}),"). Убрать с движением: ",n.jsx(t.code,{children:"showActions={false}"}),", панель опускается на высоту строки и на экране остаётся только плашка-фильтр. Убрать насовсем: не передавайте ",n.jsx(t.code,{children:"children"})]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Show home indicator"}),n.jsxs(t.td,{children:["безопасная зона снизу всегда есть: ",n.jsx(t.code,{children:"--floating-container-safe-bottom"}),", по умолчанию ",n.jsx(t.code,{children:"env(safe-area-inset-bottom)"})]})]})]})]}),`
`,n.jsxs(t.p,{children:["Цена слева и кнопка справа (Variant Text и result) — тоже ",n.jsx(t.code,{children:"row"}),", цену передайте компонентом ",n.jsx(t.code,{children:"FloatingPrice"})," первым ребёнком. Своих блоков с ценой не собирайте: ",n.jsx(t.code,{children:"FloatingPrice"})," уже читает знак сома как «сом» и держит раскладку Figma. Между ценой и кнопкой 32, кнопка занимает половину строки за вычетом зазора: 148 на экране 360, 164,5 на 393."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { FloatingContainer, FloatingPrice, Button } from '@mtravel/ui';

<FloatingContainer>
  <FloatingPrice label="Итого" price="4 756 ⃀" />
  <Button size={48}>К оформлению</Button>
</FloatingContainer>

<FloatingContainer>
  <FloatingPrice price="24 500 ⃀" discount={7} oldPrice="25 000 ⃀" />
  <Button size={48}>Выбрать дату</Button>
</FloatingContainer>
`})}),`
`,n.jsx(t.h3,{id:"фильтр-дисклеймер-клавиатура",children:"Фильтр, дисклеймер, клавиатура"}),`
`,n.jsx(i,{of:h}),`
`,n.jsxs(t.p,{children:[n.jsx(t.code,{children:"FloatingFilter"})," — это Figma ",n.jsx(t.code,{children:"Appbar/Filter"})," 1042:1388, у него своя страница: ",n.jsx(t.a,{href:"?path=/docs/components-floatingfilter--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"FloatingFilter"}),". Строка с ним 76 px (16 / 12) — затухание страницы: сверху прозрачно, к 88 % высоты цвет ",n.jsx(t.code,{children:"bg/surface"})," (в Figma белый 0 % → 100 % без токена; в тёмной теме затухание тёмное). У самой панели с фильтром заливки нет, белые только строки под затуханием. Через прозрачную часть проходят тапы и прокрутка, ловит их только плашка. Варианты Text и result в Figma — цена или «Итого» с кнопкой под такой плашкой."]}),`
`,n.jsx(t.h3,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(t.p,{children:"Где в дизайне «Выходные»: детальная страница (4704:41714) — плашка с датой и участниками, «Итого» и «К оформлению»; оформление заказа — кнопка оплаты под дисклеймером."}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(t.h2,{id:"клавиатура",children:"Клавиатура"}),`
`,n.jsxs(t.p,{children:["В webview экранная клавиатура ложится поверх ",n.jsx(t.code,{children:"position: fixed"}),"-блоков, поэтому панель с кнопкой «Готово» или ценой оказалась бы под ней. Панель сама читает ",n.jsx(t.code,{children:"window.visualViewport"}),": пока клавиатура открыта, она поднимается над ней (",n.jsx(t.code,{children:"--keyboard-inset"}),", ",n.jsx(t.code,{children:"translate"})," без перехода, чтобы шла за клавиатурой без отставания) и убирает зону под home-индикатор, которую клавиатура всё равно закрывает. Всё это делает хук ",n.jsx(t.code,{children:"useKeyboardInset"})," (пишет переменную прямо в DOM, без перерисовок React)."]}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["Отключить: ",n.jsx(t.code,{children:"liftAboveKeyboard={false}"})," (хост уже сам сжимает страницу)."]}),`
`,n.jsxs(t.li,{children:["Если в viewport meta стоит ",n.jsx(t.code,{children:"interactive-widget=resizes-content"}),", Chrome на Android сам сжимает страницу, и подъём равен 0."]}),`
`,n.jsxs(t.li,{children:["Позиционируйте панель так: ",n.jsx(t.code,{children:"position: fixed; inset: auto 0 0"}),", высоту контейнеров считайте в ",n.jsx(t.code,{children:"dvh"}),", а не в ",n.jsx(t.code,{children:"vh"})," (адресная строка iOS меняет ",n.jsx(t.code,{children:"vh"}),")."]}),`
`,n.jsxs(t.li,{children:["Слот ",n.jsx(t.code,{children:"keyboard"})," остаётся только для превью: он занимает место под панелью, как макет клавиатуры в Figma."]}),`
`]}),`
`,n.jsx(t.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsx(i,{of:j}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Появление:"})," панель выезжает снизу из-за края экрана за 280 мс, ease-out."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Уход"})," быстрее, за 200 мс. Спрятанная панель недоступна для нажатий и скринридера (",n.jsx(t.code,{children:"inert"}),")."]}),`
`,n.jsx(t.li,{children:"Это CSS-переход: если быстро прокрутить туда и обратно, панель развернётся с текущего места."}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:n.jsx(t.code,{children:"showActions"})})," (Figma «Show buttons» с движением): ",n.jsx(t.code,{children:"false"})," опускает панель на высоту строки с кнопками (её высота меряется сама, ",n.jsx(t.code,{children:"--_actions-h"}),"), кнопки гаснут на месте за 160 мс и становятся ",n.jsx(t.code,{children:"inert"}),". На экране остаётся то, что выше: плашка ",n.jsx(t.code,{children:"FloatingFilter"}),". Белая строка встаёт под плашку, туда, где home-индикатор. Вниз 200 мс, обратно 280 мс, тем же ease-out; прерывается с текущего места. Reduced motion: панель встаёт на место сразу, кнопки только проявляются. Пример — ",n.jsx(t.a,{href:"?path=/story/components-floatingfilter--case-details",children:"кейс деталей"}),": пока видна кнопка на обложке, внизу одна плашка."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Reduced motion:"})," вместо движения короткое проявление на месте, 120 мс."]}),`
`]}),`
`,n.jsx(m,{prefix:"--floating-container-"}),`
`,n.jsx(t.h2,{id:"отличия-от-figma",children:"Отличия от Figma"}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Что"}),n.jsx(t.th,{children:"В Figma"}),n.jsx(t.th,{children:"В коде"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Тень"}),n.jsx(t.td,{children:n.jsx(t.code,{children:"floating-container/shadow/default"})}),n.jsxs(t.td,{children:["в экспорте токенов его нет; ",n.jsx(t.code,{children:"shadow/bottom-bar"}),", то же значение"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Тексты"}),n.jsxs(t.td,{children:["Inter 13, ",n.jsx(t.code,{children:"floating-container/text/hint"}),", без стиля IM"]}),n.jsxs(t.td,{children:["IM-12 R, ",n.jsx(t.code,{children:"control/text/tertiary"})," (= ",n.jsx(t.code,{children:"text/tertiary"}),")"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Подпись в плашке фильтра (Caption 1042:1379, 1042:1385)"}),n.jsxs(t.td,{children:["привязана к удалённой переменной ",n.jsx(t.code,{children:"button/text/secondary/default"})," (чёрный на тёмном)"]}),n.jsx(t.td,{children:"цвет наследуется (белый, как у основного текста плашки); в Figma нужно перепривязать"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Клавиатура (Show keyboard)"}),n.jsxs(t.td,{children:["макет клавиатуры, фон сырой ",n.jsx(t.code,{children:"#D4D6DC"})]}),n.jsxs(t.td,{children:["слот ",n.jsx(t.code,{children:"keyboard"}),"; в webview клавиатура системная"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Variant=Snackbar"}),n.jsxs(t.td,{children:["градиент и ",n.jsx(t.code,{children:"Old_snackbar"})," внизу"]}),n.jsxs(t.td,{children:["не делаем: снекбар теперь сверху (",n.jsx(t.code,{children:"SnackbarHost"}),")"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Токены текста"}),n.jsxs(t.td,{children:["цена и подсказки в Figma привязаны к удалённым переменным ",n.jsx(t.code,{children:"floating-container/text/primary"})," и ",n.jsx(t.code,{children:"/hint"})," (в коллекции «02 - Components» их уже нет)"]}),n.jsxs(t.td,{children:["цена ",n.jsx(t.code,{children:"control/text/default"})," (тот же чёрный), подсказки ",n.jsx(t.code,{children:"control/text/tertiary"}),"; в Figma нужно перепривязать"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Кнопка в Text и result"}),n.jsx(t.td,{children:"ширина FIXED 148 на 360"}),n.jsx(t.td,{children:"половина строки за вычетом зазора 32: 148 на 360, растёт с экраном"})]})]})]}),`
`,n.jsx(g,{css:p})]})}function H(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{H as default};
