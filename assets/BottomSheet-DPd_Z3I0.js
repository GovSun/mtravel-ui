import{j as e}from"./iframe-Dr5ib33t.js";import{u as c,M as t,C as d,a as l}from"./blocks-BQDa-jFX.js";import{S as o,P as r,H as h,a as x,b as a,L as j,c as p,N as g}from"./BottomSheet.stories-DdfkmRr6.js";import{M as u,U as m}from"./DocTables-CsguvFim.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAdrHWJM.js";import"./index-Bc0N6I3Z.js";import"./PassengerSheet-BULJYyGi.js";import"./useControllableState-BCXXtwcd.js";import"./CounterButton-CF2kbXIF.js";import"./index-CU5QHq_h.js";import"./motion-C-Q-avtg.js";import"./RollingNumber-sUZvUyU1.js";import"./BottomSheet-BSDEP7jt.js";import"./IconButton-DBWbz_Xc.js";import"./usePress-6Rv7_Jz7.js";import"./Button-DFQPOwGN.js";import"./tokens-CNIzVYFy.js";const f=`/*
 * BottomSheet, Figma 162:687. Colours, radii, spacing and type come from tokens. The sheet's transform and
 * the backdrop's opacity are written by the motion engine on every frame, never from here.
 */
.root {
  --_z: 1000;

  position: fixed;
  inset: 0;
  z-index: var(--_z);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  /* the dimmed page is not a scroll surface */
  overscroll-behavior: none;
}

.backdrop {
  position: absolute;
  inset: 0;
  background: var(--backdrop-bg-default);
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
}

.sheet {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 430px;
  margin-inline: auto;
  max-height: calc(100% - var(--spacing-lg) - env(safe-area-inset-top, 0px));
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

/* When the sheet is pulled up past its open position (rubber band / spring overshoot) this fills the gap below it. */
.sheet::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 160px;
  background: var(--color-bg-surface);
}

.panel {
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  background: var(--color-bg-surface);
  color: var(--color-text-primary);
  /* handle, header and footer are draggable surfaces: the browser must not pan them. The content opts back in. */
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

.sheet:not([data-footer]) .panel {
  padding-bottom: env(safe-area-inset-bottom, 0px);
}

/* ---------- handle (Figma 162:487): 20 px strip, bar 36 × 4 ---------- */
.handle {
  position: relative;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  height: 20px;
}

.bar {
  width: 36px;
  height: 4px;
  border-radius: var(--radius-full);
  background: var(--color-bg-sunken-strong);
}

/* ---------- close ---------- */
.close {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  z-index: 1;
}

/* Header «None» with a close button: the 24 px «Top bar» row keeps the content below the ✕. */
.topbar {
  flex: none;
  height: 24px;
}

.sheet:not([data-handle]) .topbar {
  height: 44px;
}

/* ---------- header (left | center) ---------- */
.header {
  flex: none;
  padding-top: var(--spacing-md);
}

.sheet:not([data-handle]) .header {
  padding-top: calc(var(--spacing-md) + var(--spacing-sm));
}

.headerRow {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 48px;
  padding-left: var(--spacing-lg);
  padding-right: var(--spacing-sm);
}

/* the ✕ (36 + 8) must never run into a long title */
.sheet[data-close] .headerRow {
  padding-right: calc(var(--spacing-lg) * 3);
}

.sheet[data-header='center'] .headerRow {
  align-items: center;
  padding-left: calc(var(--spacing-lg) * 3);
  padding-right: calc(var(--spacing-lg) * 3);
  text-align: center;
}

.sheet[data-header='center']:not([data-close]) .headerRow {
  padding-left: var(--spacing-lg);
  padding-right: var(--spacing-lg);
}

.title {
  max-width: 304px;
  margin: 0;
  overflow: hidden;
  color: var(--color-text-primary);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sheet[data-header='left'] .title {
  max-width: 100%;
}

.description {
  margin: 0;
  color: var(--color-text-secondary);
}

/* ---------- content slot ---------- */
.content {
  flex: 1 1 auto;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  /* no bounce and no scroll chaining: the sheet takes over at the top instead (scroll hand-off) */
  overscroll-behavior-y: none;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  user-select: text;
  -webkit-user-select: text;
}

/* ---------- footer: FloatingContainer without shadow, buttons stacked ---------- */
.footer {
  display: flex;
  flex: none;
  flex-direction: column;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg) calc(var(--spacing-lg) + env(safe-area-inset-bottom, 0px));
  background: var(--color-bg-surface);
}

/* keyboard users scroll the slot with the arrow keys once it is focusable */
.content:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: -2px;
}
`;function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:o}),`
`,e.jsx(n.h1,{id:"bottomsheet",children:"BottomSheet"}),`
`,e.jsx(n.p,{children:`Шторка снизу: выбор параметров, подтверждения, короткие формы (пассажиры, фильтры, условия). Движется как нативная шторка iOS: палец и шторка
двигаются 1:1, бросок продолжается с той же скоростью, шторку можно схватить в любой момент анимации. Работает в React-webview на iPhone и Android.`}),`
`,e.jsxs(n.p,{children:["Figma: ",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=162-687",rel:"nofollow",children:"Bottom sheet 162:687"})," (Header: None / Top left / Top center)."]}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useState } from 'react';
import { BottomSheet, Button } from '@mtravel/ui';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Пассажиры</Button>

<BottomSheet
  open={open}
  onOpenChange={setOpen}
  title="Пассажиры"
  description="Полных лет на 9 ноя"
  primaryAction={{ label: 'Применить', onClick: apply }}
>
  {/* слот: свой контент, отступы задаёт он сам */}
</BottomSheet>
`})}),`
`,e.jsxs(n.p,{children:["Шторка рендерится в ",e.jsx(n.code,{children:"document.body"})," и остаётся в дереве, пока уезжает вниз. ",e.jsx(n.code,{children:"onOpenChange(false)"}),` приходит от ✕, тапа по фону, Escape и свайпа вниз;
`,e.jsx(n.code,{children:"onOpenChange(true)"})," — если пользователь поймал уезжающую шторку и отпустил её обратно."]}),`
`,e.jsx(n.h2,{id:"анатомия",children:"Анатомия"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Часть"}),e.jsx(n.th,{children:"Что это"}),e.jsx(n.th,{children:"Токены"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Шторка"}),e.jsxs(n.td,{children:["ширина 100 %, максимум 430, по центру; верхние углы ",e.jsx(n.code,{children:"radius/xl"})," 24; ",e.jsx(n.code,{children:"overflow: hidden"})]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"bg/surface"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Ручка (",e.jsx(n.code,{children:"showHandle"}),")"]}),e.jsxs(n.td,{children:["полоса 20 px, штрих 36 × 4, ",e.jsx(n.code,{children:"radius/full"}),"; тянется"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"bg/sunken-strong"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["✕ (",e.jsx(n.code,{children:"showClose"}),")"]}),e.jsx(n.td,{children:"IconButton ghost, радиус 16, сверху 8 / справа 8. Header None: 40 px, иконка 24. Top left / Top center: 36 px, иконка 20"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/icon/primary"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Header"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"none"}),", ",e.jsx(n.code,{children:"left"}),", ",e.jsx(n.code,{children:"center"}),". Отступ сверху 12, строка от 48, слева 16, справа 8 (под ✕ больше). Заголовок ",e.jsx(n.code,{children:"IM-24 B"})," в одну строку с многоточием, максимум 304; описание ",e.jsx(n.code,{children:"IM-16 R"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"text/primary"}),", ",e.jsx(n.code,{children:"text/secondary"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Top bar"}),e.jsxs(n.td,{children:["при ",e.jsx(n.code,{children:'header="none"'})," и ✕: полоса 24 px под ручкой, контент не заезжает под крестик"]}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Контент"}),e.jsx(n.td,{children:"слот на всю ширину, прокручивается, когда шторка выше экрана"}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Футер"}),e.jsxs(n.td,{children:["FloatingContainer без тени: отступы 12 16 16, кнопки столбиком с зазором 8: ",e.jsx(n.code,{children:"primaryAction"}),", затем ",e.jsx(n.code,{children:"secondaryAction"})," (Button 52, на всю ширину). Снизу ",e.jsx(n.code,{children:"env(safe-area-inset-bottom)"})," вместо индикатора «Home» из Figma"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"bg/surface"})," (группу floating-container удалили в Figma)"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Фон"}),e.jsx(n.td,{children:"затемнение за шторкой, его прозрачность привязана к положению шторки"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"backdrop/bg/default"})})]})]})]}),`
`,e.jsx(n.h3,{id:"варианты-header",children:"Варианты Header"}),`
`,e.jsx(d,{of:h}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(n.h3,{id:"длинный-контент",children:"Длинный контент"}),`
`,e.jsx(n.p,{children:"Слот прокручивается, шапка и кнопки остаются на месте. Вертикальный жест над прокруткой работает как в iOS (см. «Жесты»)."}),`
`,e.jsx(d,{of:j}),`
`,e.jsx(n.h3,{id:"пассажиры",children:"Пассажиры"}),`
`,e.jsxs(n.p,{children:["Счётчики ",e.jsx(n.code,{children:"Counter"})," внутри настоящей шторки (контент из ",e.jsx(n.code,{children:"Counter/stories/PassengerSheet"}),"). Тапы по «+» и «−» не конфликтуют с жестом."]}),`
`,e.jsx(d,{of:p}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Тип"}),e.jsx(n.th,{children:"По умолчанию"}),e.jsx(n.th,{})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"open"}),", ",e.jsx(n.code,{children:"defaultOpen"}),", ",e.jsx(n.code,{children:"onOpenChange"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"boolean"}),", ",e.jsx(n.code,{children:"boolean"}),", ",e.jsx(n.code,{children:"(open) => void"})]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"defaultOpen=false"})}),e.jsx(n.td,{children:"контролируемый и неконтролируемый режимы"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"header"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'none' | 'left' | 'center'"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"'left'"})," с ",e.jsx(n.code,{children:"title"}),", иначе ",e.jsx(n.code,{children:"'none'"})]}),e.jsx(n.td,{children:"Figma Header"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"title"}),", ",e.jsx(n.code,{children:"description"})]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ReactNode"})}),e.jsx(n.td,{}),e.jsxs(n.td,{children:["заголовок называет диалог (",e.jsx(n.code,{children:"aria-labelledby"}),")"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"aria-label"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{}),e.jsx(n.td,{children:"имя диалога, когда видимого заголовка нет"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"showHandle"}),", ",e.jsx(n.code,{children:"showClose"})]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"true"}),", ",e.jsx(n.code,{children:"true"})]}),e.jsx(n.td,{children:"ручка и ✕"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"closeLabel"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'Закрыть'"})}),e.jsx(n.td,{children:"подпись ✕ для скринридера"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"dismissible"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})}),e.jsx(n.td,{children:"свайп вниз, тап по фону и Escape. ✕ и кнопки работают всегда"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"primaryAction"}),", ",e.jsx(n.code,{children:"secondaryAction"})]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{ label, onClick?, loading?, disabled? }"})}),e.jsx(n.td,{}),e.jsx(n.td,{children:"кнопки футера"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"footer"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ReactNode"})}),e.jsx(n.td,{}),e.jsx(n.td,{children:"свой футер вместо кнопок"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"initialFocus"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"RefObject | string | 'close'"})}),e.jsx(n.td,{children:"сама шторка"}),e.jsx(n.td,{children:"куда уходит фокус при открытии"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"children"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ReactNode"})}),e.jsx(n.td,{}),e.jsx(n.td,{children:"слот контента"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"onOpened"}),", ",e.jsx(n.code,{children:"onClosed"})]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"() => void"})}),e.jsx(n.td,{}),e.jsx(n.td,{children:"после въезда; после выезда и размонтирования"})]})]})]}),`
`,e.jsxs(n.p,{children:["Чтобы жест не перехватывал элемент (например, свой слайдер), поставьте на него ",e.jsx(n.code,{children:"data-sheet-nodrag"}),". ",e.jsx(n.code,{children:"input[type=range]"}),", ",e.jsx(n.code,{children:"textarea"})," и ",e.jsx(n.code,{children:"select"})," исключены сами."]}),`
`,e.jsx(n.h2,{id:"движение",children:"Движение"}),`
`,e.jsxs(n.p,{children:["Всё движение шторки считает собственный движок (",e.jsx(n.code,{children:"engine.ts"}),", ",e.jsx(n.code,{children:"gesture.ts"}),`), без зависимостей. CSS-анимации для жестов не годятся: их нельзя схватить и развернуть
на лету. Шторка двигается только через `,e.jsx(n.code,{children:"transform"})," и ",e.jsx(n.code,{children:"opacity"}),", ",e.jsx(n.code,{children:"transform"}),` пишется прямо в элемент (не через CSS-переменную, чтобы не пересчитывать стили всего содержимого),
`,e.jsx(n.code,{children:"will-change"})," стоит только пока что-то движется."]}),`
`,e.jsx(u,{prefix:"--sheet-"}),`
`,e.jsx(n.h3,{id:"модель",children:"Модель"}),`
`,e.jsxs(n.p,{children:["Положение ",e.jsx(n.code,{children:"y"})," в px от открытого состояния: ",e.jsx(n.code,{children:"0"})," открыта, ",e.jsx(n.code,{children:"H"})," целиком ниже экрана (",e.jsx(n.code,{children:"H"})," — высота шторки, кэшируется и обновляется через ",e.jsx(n.code,{children:"ResizeObserver"}),`).
Прозрачность фона `,e.jsx(n.code,{children:"= 1 − clamp(y / H, 0, 1)"})," пересчитывается при каждой записи положения, поэтому фон всегда привязан к шторке."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Ситуация"}),e.jsx(n.th,{children:"Что двигает шторку"}),e.jsx(n.th,{children:"Почему"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Открытие из покоя"}),e.jsxs(n.td,{children:["кривая drawer ",e.jsx(n.code,{children:"cubic-bezier(0.32, 0.72, 0, 1)"}),", 500 мс"]}),e.jsx(n.td,{children:"резкий старт и длинная мягкая посадка, как у iOS; вход — ease-out"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Закрытие (✕, фон, Escape, ",e.jsx(n.code,{children:"open=false"}),")"]}),e.jsx(n.td,{children:"та же кривая назад, 400 мс"}),e.jsx(n.td,{children:"тот же путь, но быстрее: система отвечает, пользователь не ждёт"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Уход после жеста, разворот открытия в закрытие"}),e.jsx(n.td,{children:"кубическая кривая Эрмита из (y, v₀) в (H, 1500 px/с) с ограниченным стартовым ускорением"}),e.jsx(n.td,{children:"шторка продолжает на скорости пальца и набирает скорость плавно (рост не больше ~4 px за кадр на кадр). Пружина, нацеленная на край, давала 100 000 px/с² с первого кадра и бросала шторку быстрее пальца"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Возврат в открытое положение, захват движущейся шторки"}),e.jsx(n.td,{children:"пружина с начальной скоростью пальца"}),e.jsx(n.td,{children:"у пружины нет «рестарта», она подхватывает положение и скорость"})]})]})]}),`
`,e.jsx(n.p,{children:"Анимация по кривой стартует с экранного положения. Если шторка уже летит быстрее 150 px/с (разворот, захват), берётся Эрмит (на уход) или пружина (на возврат), чтобы скорость не обрывалась. Закрытие начинается синхронно в обработчике ✕, фона и Escape, без ожидания React."}),`
`,e.jsx(n.h3,{id:"уход-после-жеста",children:"Уход после жеста"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`y(u) = h00·y₀ + h10·T·v₀ + h01·H + h11·T·v_end,   u = t / T
y''(0) = (6D − T(4v₀ + 2v_end)) / T² = 14 400 px/с²,   D = H − y₀,  v_end = max(v₀, 1500 px/с)
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"T"})," решает это уравнение и не превышает 400 мс. Токены ",e.jsx(n.code,{children:"--sheet-motion-exit-accel"}),", ",e.jsx(n.code,{children:"--sheet-motion-exit-speed"}),". Если шторка летела вверх (разворот), она сначала гасит эту скорость с тем же ускорением и затем идёт вниз."]}),`
`,e.jsx(n.h3,{id:"пружина-возврата",children:"Пружина возврата"}),`
`,e.jsx(n.p,{children:"Параметры как у Apple: отклик (response) и коэффициент демпфирования (damping ratio), решение в замкнутом виде, поэтому результат не зависит от частоты кадров."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`ω  = 2π / response           response = 380 мс (токен --sheet-motion-spring-response)
ζ  = 1                       без отскока (по умолчанию)
ζ  = 0.82                    после броска вверх: лёгкий отскок
ζ = 1:  x(t) = (A + (v₀ + ωA)·t) · e^(−ωt)
ζ < 1:  x(t) = e^(−ζωt) · (A·cos ω_d t + (v₀ + ζωA)/ω_d · sin ω_d t),  ω_d = ω·√(1 − ζ²)
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"A"})," — расстояние до цели в момент старта, ",e.jsx(n.code,{children:"v₀"})," — скорость пальца в px/с."]}),`
`,e.jsx(n.h3,{id:"что-решает-при-отпускании",children:"Что решает при отпускании"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Скорость берётся по последним ~100 мс движения шторки. Если с последнего ",e.jsx(n.code,{children:"touchmove"})," прошло больше ",e.jsx(n.strong,{children:"45 мс"})," (палец постоял), скорость равна нулю: iOS не шлёт события для неподвижного пальца."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Бросок"})," (скорость вниз ≥ ",e.jsx(n.strong,{children:"0.3 px/мс"}),") закрывает после 8 px пути. ",e.jsx(n.strong,{children:"Мягкий бросок"})," (0.11–0.3 px/мс) закрывает после 48 px. Медленнее — решает только расстояние: дальше ",e.jsx(n.strong,{children:"30 %"})," высоты, либо проекция инерции ",e.jsx(n.code,{children:"y + v/1000 · 0.99/(1 − 0.99)"})," уходит за 30 %. Движение вверх быстрее 0.11 px/мс всегда возвращает шторку."]}),`
`,e.jsxs(n.li,{children:["Возврат идёт критически демпфированной пружиной. После броска вверх добавляется отскок ",e.jsx(n.code,{children:"ζ = 0.82"}),": перелёт есть, потому что у жеста был импульс."]}),`
`]}),`
`,e.jsx(n.h3,{id:"резинка",children:"Резинка"}),`
`,e.jsxs(n.p,{children:["Вверх от открытого положения шторка идёт с растущим сопротивлением: ",e.jsx(n.code,{children:"f(x) = x·L·k / (L + k·x)"}),", ",e.jsx(n.code,{children:"L = 120 px"})," (потолок), ",e.jsx(n.code,{children:"k = 0.55"}),` (начальное сопротивление).
Порог начала жеста вычитается, поэтому 100 px пальца дают около трети (33–37 px) движения шторки, жёсткой остановки нет. Щель под приподнятой шторкой закрывает продолжение фона шторки. Если `,e.jsx(n.code,{children:"dismissible=false"}),", то же сопротивление работает и вниз."]}),`
`,e.jsx(n.h3,{id:"reduced-motion",children:"Reduced motion"}),`
`,e.jsxs(n.p,{children:["При ",e.jsx(n.code,{children:"prefers-reduced-motion"}),` (или «Motion → Reduced motion» в тулбаре) открытие и закрытие становятся короткой сменой прозрачности шторки и фона без
перемещения: длительность `,e.jsx(n.strong,{children:"200 мс"}),` по ease-out, заметная часть (от 2 до 98 %) занимает около 170 мс. Перетаскивание остаётся 1:1, потому что его ведёт сам пользователь; короткий жест возвращает шторку пружиной, длинный закрывает её плавным исчезновением.
«Замедление ×4» из тулбара умножает все длительности, в том числе отклик пружины.`]}),`
`,e.jsx(n.h2,{id:"жесты",children:"Жесты"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Жест"}),e.jsx(n.th,{children:"Поведение"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Тянуть за ручку, заголовок, футер или любую неподвижную область"}),e.jsxs(n.td,{children:["шторка идёт за пальцем 1:1, с тем смещением, где схватили. Начало жеста — после ",e.jsx(n.strong,{children:"4 px"})," на неподвижных поверхностях и ",e.jsx(n.strong,{children:"10 px"})," внутри прокручиваемого контента, поэтому тапы по кнопкам работают"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Тянуть по прокручиваемому контенту вниз"}),e.jsx(n.td,{children:"пока контент не в самом верху, он прокручивается; дойдя до верха, тот же жест продолжает тянуть шторку. Дальше назад вверх шторка сначала возвращается, потом снова прокручивается контент"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Тянуть по контенту вверх"}),e.jsx(n.td,{children:"прокручивается контент, шторка стоит"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Горизонтальное движение"}),e.jsx(n.td,{children:"игнорируется (карусели внутри контента)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Второй палец"}),e.jsx(n.td,{children:"игнорируется: ни начать жест, ни перехватить его нельзя"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Тронуть движущуюся шторку (не кнопку, ссылку или поле: тап по ✕ шторку не останавливает)"}),e.jsx(n.td,{children:"она останавливается под пальцем с текущего экранного положения и идёт за ним; если палец поднят без движения, шторка продолжает путь к прежней цели с прежней скоростью"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Закрывается, а пользователь тянет назад"}),e.jsxs(n.td,{children:["шторка разворачивается из текущей точки, ",e.jsx(n.code,{children:"onOpenChange(true)"})," сообщает родителю"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Мышь и стилус"}),e.jsxs(n.td,{children:["Pointer Events с ",e.jsx(n.code,{children:"setPointerCapture"}),"; после перетаскивания клик под курсором не срабатывает"]})]})]})]}),`
`,e.jsxs(n.p,{children:[`Для пальца используются touch events, а не pointer events: браузер отменяет pointer-события в момент, когда сам начинает прокрутку, и передать жест от прокрутки
шторке внутри одного касания было бы нельзя. Касание неявно захвачено элементом, на котором началось (это эквивалент `,e.jsx(n.code,{children:"setPointerCapture"}),"), а ",e.jsx(n.code,{children:"preventDefault()"}),`
на `,e.jsx(n.code,{children:"touchmove"})," не даёт странице и WKWebView прокручиваться за шторкой."]}),`
`,e.jsx(n.h2,{id:"доступность",children:"Доступность"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'role="dialog"'}),", ",e.jsx(n.code,{children:'aria-modal="true"'}),", имя из заголовка (",e.jsx(n.code,{children:"aria-labelledby"}),") или из ",e.jsx(n.code,{children:"aria-label"}),"."]}),`
`,e.jsxs(n.li,{children:["Слот с прокруткой получает ",e.jsx(n.code,{children:"tabIndex=0"}),", ",e.jsx(n.code,{children:'role="region"'})," и ",e.jsx(n.code,{children:"aria-label"})," только пока контент не помещается, чтобы его можно было прокручивать стрелками; порядок Tab не меняется, фокус при открытии он не забирает."]}),`
`,e.jsxs(n.li,{children:["Фокус уходит в шторку при открытии (на саму шторку, либо на ",e.jsx(n.code,{children:"initialFocus"}),") и возвращается на элемент, открывший её, при закрытии."]}),`
`,e.jsxs(n.li,{children:["Tab и Shift+Tab ходят по кругу внутри шторки; всё остальное на странице получает ",e.jsx(n.code,{children:"inert"})," и ",e.jsx(n.code,{children:"aria-hidden"}),". ✕ первый в порядке обхода."]}),`
`,e.jsxs(n.li,{children:["Escape закрывает (если ",e.jsx(n.code,{children:"dismissible"}),"). Верхняя из нескольких шторок получает Escape первой."]}),`
`,e.jsxs(n.li,{children:["Блокировка скролла и ",e.jsx(n.code,{children:"inert"})," снимаются, когда шторка уехала (перед размонтированием, в том числе при размонтировании во время закрытия), а фокус возвращается сразу в начале закрытия."]}),`
`,e.jsxs(n.li,{children:["Страница под шторкой не прокручивается: блокировка скролла ",e.jsx(n.code,{children:"position: fixed"})," на ",e.jsx(n.code,{children:"body"}),", она же держит iOS Safari, позиция прокрутки восстанавливается."]}),`
`,e.jsxs(n.li,{children:["Кнопка ✕ доступна всегда, даже при ",e.jsx(n.code,{children:"dismissible={false}"}),"."]}),`
`]}),`
`,e.jsx(d,{of:g}),`
`,e.jsx(n.h2,{id:"токены",children:"Токены"}),`
`,e.jsx(n.p,{children:"Шторка не вводит новых цветов: поверхность, ручка, фон, текст и футер берутся из токенов."}),`
`,e.jsx(n.p,{children:"Собраны из CSS компонента, поэтому таблица всегда совпадает с кодом: цепочка до примитива и имя переменной в Figma."}),`
`,e.jsx(m,{css:f}),`
`,e.jsx(n.h2,{id:"известные-ограничения",children:"Известные ограничения"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`Проверено в Chromium с эмуляцией касаний. Ощущение на реальном iPhone зависит от WebKit: проверьте на устройстве, как ведёт себя резинка прокрутки внутри слота.
`,e.jsx(n.code,{children:"overscroll-behavior"})," в iOS старше 16 не поддерживается, поэтому там внутренний контент может «пружинить» при прокрутке до верха одновременно с шторкой."]}),`
`,e.jsxs(n.li,{children:["Chrome подавляет первые ~15 px ",e.jsx(n.code,{children:"touchmove"})," (touch slop): на Android шторка начинает идти за пальцем с первого доставленного события, смещение остаётся постоянным."]}),`
`,e.jsx(n.li,{children:"Шторка не поднимается выше своей высоты: детентов (medium / large) нет."}),`
`]})]})}function E(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{E as default};
