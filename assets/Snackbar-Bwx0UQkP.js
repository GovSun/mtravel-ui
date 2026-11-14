import{j as n}from"./iframe-Dr5ib33t.js";import{u as a,M as s,C as t,a as c}from"./blocks-BQDa-jFX.js";import{S as l,P as o,A as d,O as h,a as x,B as p,b}from"./Snackbar.stories-BXKzY8KE.js";import{M as g,U as u}from"./DocTables-CsguvFim.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAdrHWJM.js";import"./index-Bc0N6I3Z.js";import"./usePress-6Rv7_Jz7.js";import"./motion-C-Q-avtg.js";import"./Button-DFQPOwGN.js";import"./LikeButton-DrHlodSD.js";import"./useControllableState-BCXXtwcd.js";import"./FavouriteIcon-B7ZIwla0.js";import"./index-CU5QHq_h.js";import"./tokens-CNIzVYFy.js";const f=`/*
 * Snackbar, Figma «Snackbar new» 1068:6441. Everything visual comes from tokens.
 * Pill: 48 px high, radius/full, snackbar/bg/default glass with blur/bg-12 and a snackbar/border/default hairline;
 * 12 px left inset, 24 px icon, 12 px gap, text, 16 px right inset (Figma).
 */
.snackbar {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  box-sizing: border-box;
  width: 100%;
  min-height: 48px;
  padding: var(--spacing-xs) var(--spacing-lg) var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  background-color: var(--snackbar-bg-default);
  /* hairline as an inset ring: a real 0.5 px border would move the content to half pixels */
  box-shadow: inset 0 0 0 var(--border-width-hairline) var(--snackbar-border-default);
  backdrop-filter: blur(calc(var(--bg-blur-12) / 2));
  -webkit-backdrop-filter: blur(6px); /* = bg-blur/12 ÷ 2, literal on purpose: WebKit drops it through var() */
  color: var(--snackbar-text-primary);
  text-align: left;
}

/* Figma Error / Info: one more 20 % dark layer on top of the glass (raw #000 20 % in Figma, bg/constant/scrim here) */
.snackbar[data-tone='error'],
.snackbar[data-tone='info'] {
  background-image: linear-gradient(var(--color-bg-constant-scrim), var(--color-bg-constant-scrim));
}

.icon {
  display: flex;
  flex: none;
  width: 24px;
  height: 24px;
}
.icon > svg {
  display: block;
  width: 100%;
  height: 100%;
}

.text {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2px; /* Figma: 2, no spacing token */
  min-width: 0;
  padding: var(--spacing-xs) 0;
}

.title {
  font: var(--font-im-14-m);
  letter-spacing: var(--tracking-im-14-m);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.subtitle {
  font: var(--font-im-12-r);
  letter-spacing: var(--tracking-im-12-r);
  color: var(--snackbar-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Action: the white Disclosure pill (Figma «button white»): control/bg/on-surface, control/text/default, IM-14 S */
.action {
  position: relative;
  flex: none;
  min-height: 24px;
  margin: 0;
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 0;
  border-radius: var(--radius-full);
  background-color: var(--control-bg-on-surface);
  color: var(--control-text-default);
  font: var(--font-im-14-s);
  letter-spacing: var(--tracking-im-14-s);
  white-space: nowrap;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  transition: transform calc(var(--motion-duration-base) * var(--motion-scale)) var(--motion-ease-out);
}
/* 44 px hit area */
.action::after {
  content: '';
  position: absolute;
  inset: -10px -8px;
}
.action[data-pressed] {
  transform: scale(var(--snackbar-motion-press-scale));
  transition-duration: calc(var(--motion-duration-instant) * var(--motion-scale));
}
.action:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

/* ---------- host and stack ---------- */
.host {
  --_top: calc(env(safe-area-inset-top, 0px) + var(--spacing-md));
  --_d: calc(var(--snackbar-motion-duration) * var(--motion-scale));
  --_release: calc(var(--snackbar-motion-release-duration) * var(--motion-scale));
  position: fixed;
  top: var(--_top);
  left: 0;
  right: 0;
  z-index: 50;
  padding: 0 var(--spacing-lg); /* Figma: 16 at the sides */
  pointer-events: none;
}
.host[data-strategy='absolute'] {
  position: absolute;
}

.list {
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  pointer-events: auto;
}

.toast {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: visible;
  /* the ones behind are scaled from their bottom edge, so each peeks out exactly by the gap */
  transform-origin: 50% 100%;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
  will-change: transform;
  /* translate only moves under the finger: letting go is the system answering, so it is quick and ease-out */
  transition:
    transform var(--_d) var(--snackbar-motion-easing),
    opacity var(--_d) var(--snackbar-motion-easing),
    translate var(--_release) var(--snackbar-motion-release-easing);
}

/* Flicked away: keeps the finger's speed and leaves quickly instead of easing in again. */
.toast[data-swiped] {
  transition-duration: var(--_release);
  transition-timing-function: var(--snackbar-motion-release-easing);
}

/* Behind in a collapsed stack: as tall as the front one, content hidden (Sonner). */
.toast[data-behind] {
  overflow: hidden;
  border-radius: var(--radius-full);
}
.toast > .snackbar {
  transition: opacity var(--_d) var(--snackbar-motion-easing);
}
.toast[data-behind] > .snackbar {
  opacity: 0;
}
.toast[data-behind]::before {
  /* the glass of a toast behind still shows as a rim */
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-color: var(--snackbar-bg-default);
  box-shadow: inset 0 0 0 var(--border-width-hairline) var(--snackbar-border-default);
  backdrop-filter: blur(calc(var(--bg-blur-12) / 2));
  -webkit-backdrop-filter: blur(6px);
}

/* Fills the gap under each snackbar of an expanded stack, so the hover is not lost between them. */
.list[data-expanded] .toast::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: calc(var(--snackbar-motion-expanded-gap) + 1px);
}

.toast[data-removed] {
  pointer-events: none;
}

/* Reduced motion: nothing travels, snackbars fade in and out in place. */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .toast {
    transition-property: opacity;
  }
  :global(:root:not([data-motion='normal'])) .action[data-pressed] {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .toast {
  transition-property: opacity;
}
:global(:root[data-motion='reduce']) .action[data-pressed] {
  transform: none;
}
`,m=`/*
 * State icons of Figma «Snackbar new» 1068:6441, 24 px. Colours come from tokens: the hearts use
 * control/icon/favorite, success / error / info use icon/success, icon/error, icon/info, the glyph inside is
 * snackbar/text/primary. Figma paints the heart and the success circle with gradients that have no tokens;
 * the solid token colour is used instead.
 */
import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;
const HEART = 'M17 4C13.8 4 12 6.667 12 8C12 6.667 10.2 4 7 4C3.8 4 3 6.667 3 8C3 15 12 20 12 20C12 20 21 15 21 8C21 6.667 20.2 4 17 4Z';
const CIRCLE = 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z';

const Svg = ({ children, ...rest }: P) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...rest}>
    {children}
  </svg>
);

export const FavouriteAddedIcon = (p: P) => (
  <Svg {...p}>
    <path d={HEART} fill="var(--control-icon-favorite)" />
  </Svg>
);

export const FavouriteRemovedIcon = (p: P) => (
  <Svg {...p}>
    <path d={HEART} fill="var(--control-icon-favorite)" />
    <circle cx="18" cy="18" r="6.6" fill="var(--control-icon-favorite)" stroke="var(--color-text-constant-primary)" strokeWidth="1.2" />
    <path d="M16.2 16.2L19.8 19.8M19.8 16.2L16.2 19.8" stroke="var(--color-text-constant-primary)" strokeWidth="1.35" strokeLinecap="round" />
  </Svg>
);

export const SuccessIcon = (p: P) => (
  <Svg {...p}>
    <path d={CIRCLE} fill="var(--color-icon-success)" />
    <path
      d="M16.7348 9.67829C17.1094 9.27246 17.0841 8.6398 16.6783 8.2652C16.2725 7.8906 15.6398 7.9159 15.2652 8.32172L10.4615 13.5257L8.73481 11.6551C8.3602 11.2492 7.72755 11.2239 7.32172 11.5985C6.9159 11.9731 6.8906 12.6058 7.2652 13.0116L9.72674 15.6783C9.91605 15.8834 10.1824 16 10.4615 16C10.7406 16 11.007 15.8834 11.1963 15.6783L16.7348 9.67829Z"
      fill="var(--snackbar-text-primary)"
    />
  </Svg>
);

/** Error and info share the «!» glyph, only the circle colour differs. */
const Exclamation = ({ fill, ...p }: P & { fill: string }) => (
  <Svg {...p}>
    <path d={CIRCLE} fill={fill} />
    <path
      d="M12 7C11.264 7 10.686 7.65 10.756 8.4L11.25 12.55C11.265 12.7393 11.3503 12.9161 11.4891 13.0456C11.6279 13.1752 11.8101 13.2481 12 13.25C12.1899 13.2481 12.3721 13.1752 12.5109 13.0456C12.6497 12.9161 12.735 12.7393 12.75 12.55L13.244 8.4C13.313 7.649 12.736 7 12 7Z"
      fill="var(--snackbar-text-primary)"
    />
    <path
      d="M12.8839 16.6339C13.1183 16.3995 13.25 16.0815 13.25 15.75C13.25 15.4185 13.1183 15.1005 12.8839 14.8661C12.6495 14.6317 12.3315 14.5 12 14.5C11.6685 14.5 11.3505 14.6317 11.1161 14.8661C10.8817 15.1005 10.75 15.4185 10.75 15.75C10.75 16.0815 10.8817 16.3995 11.1161 16.6339C11.3505 16.8683 11.6685 17 12 17C12.3315 17 12.6495 16.8683 12.8839 16.6339Z"
      fill="var(--snackbar-text-primary)"
    />
  </Svg>
);

export const ErrorIcon = (p: P) => <Exclamation fill="var(--color-icon-error)" {...p} />;
export const InfoIcon = (p: P) => <Exclamation fill="var(--color-icon-info)" {...p} />;
`;function i(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l}),`
`,n.jsx(e.h1,{id:"snackbar",children:"Snackbar"}),`
`,n.jsxs(e.p,{children:["Короткое уведомление о том, что произошло: добавили в избранное, скопировали номер, ошибка ввода. Появляется ",n.jsx(e.strong,{children:"сверху"}),", живёт 4 секунды и уходит сам. Несколько складываются в стопку."]}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1068-6441",rel:"nofollow",children:"Snackbar new 1068:6441"}),", состояния Add favourite, Delete favourite, Sucess, Error, Info; свойства Subtitle и Disclouser (кнопка справа)."]}),`
`,n.jsx(e.p,{children:"Нажми кнопку: снекбар выедет сверху с параметрами из таблицы ниже. Нажми несколько раз, чтобы собрать стопку."}),`
`,n.jsx(t,{of:o}),`
`,n.jsx(c,{of:o}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"SnackbarHost"})," ставится один раз на экран, ",n.jsx(e.code,{children:"snackbar()"})," вызывается откуда угодно, без хуков и контекста, как ",n.jsx(e.code,{children:"toast()"})," в Sonner."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { SnackbarHost, snackbar } from '@mtravel/ui';

<SnackbarHost />   // один раз, в корне экрана

snackbar({ tone: 'favourite', title: 'Добавлено в избранное', subtitle: excursion.title, action: { label: 'Открыть', onClick: openFavourites } });
snackbar({ tone: 'unfavourite', title: 'Удалено из избранного', action: { label: 'Вернуть', onClick: undo } });
snackbar({ tone: 'error', title: 'Неправильно введён код' });
const id = snackbar({ tone: 'info', title: 'Ждём оплату', duration: Infinity });
snackbar.dismiss(id);
`})}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Опция"}),n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Что делает"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"tone"})}),n.jsx(e.td,{children:"State"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"favourite"}),", ",n.jsx(e.code,{children:"unfavourite"}),", ",n.jsx(e.code,{children:"success"}),", ",n.jsx(e.code,{children:"error"}),", ",n.jsx(e.code,{children:"info"}),": иконка, у error и info фон темнее"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"title"})}),n.jsx(e.td,{children:"label"}),n.jsxs(e.td,{children:["текст, ",n.jsx(e.code,{children:"IM-14 M"}),", до двух строк"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"subtitle"})}),n.jsx(e.td,{children:"Subtitle"}),n.jsxs(e.td,{children:["вторая строка, ",n.jsx(e.code,{children:"IM-12 R"}),", ",n.jsx(e.code,{children:"snackbar/text/secondary"}),", в одну строку с многоточием"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"action"})}),n.jsx(e.td,{children:"Disclouser"}),n.jsxs(e.td,{children:["белая кнопка справа (",n.jsx(e.code,{children:"control/bg/on-surface"}),", ",n.jsx(e.code,{children:"IM-14 S"}),"); после нажатия снекбар закрывается"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"icon"})}),n.jsx(e.td,{}),n.jsx(e.td,{children:"своя иконка 24 вместо иконки состояния"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"duration"})}),n.jsx(e.td,{}),n.jsxs(e.td,{children:["сколько живёт, мс. По умолчанию ",n.jsx(e.code,{children:"--snackbar-lifetime"})," 4000, ",n.jsx(e.code,{children:"Infinity"})," — пока не закроют"]})]})]})]}),`
`,n.jsx(e.h2,{id:"состояния",children:"Состояния"}),`
`,n.jsx(t,{of:d}),`
`,n.jsxs(e.p,{children:["Тёмное стекло одинаково читается и над белым экраном, и над обложкой: фон ",n.jsx(e.code,{children:"snackbar/bg/default"})," (75 % чёрного) с размытием ",n.jsx(e.code,{children:"blur/bg-12"}),", по краю волосяная линия ",n.jsx(e.code,{children:"snackbar/border/default"}),"."]}),`
`,n.jsx(e.h2,{id:"движение",children:"Движение"}),`
`,n.jsxs(e.p,{children:["Повторяет модель Sonner из статьи Эмиля Ковальского ",n.jsx(e.a,{href:"https://emilkowal.ski/ui/building-a-toast-component",rel:"nofollow",children:"«Building a toast component»"}),", только сверху вниз:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Въезд сверху."})," Новый снекбар выезжает из-за верхнего края (",n.jsx(e.code,{children:"translateY(-100%)"})," → 0) за 400 мс по CSS ",n.jsx(e.code,{children:"ease"})," и проявляется. Медленнее кнопок: уведомление не отвечает на касание, ему можно быть спокойнее."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Стопка."})," Новый всегда спереди. Те, что позади, выглядывают снизу на 14 px и становятся на 5 % меньше каждый. Все они той же высоты, что передний, и без текста, поэтому край стопки ровный. Видно три, остальные ждут за ними."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Раскрытие."})," Наведи курсор или тапни по стопке: снекбары расходятся друг под другом, каждый сдвигается на сумму высот выше и зазоры по 8 px. Промежутки между ними заполнены, поэтому наведение не теряется. Тап мимо стопки сворачивает её."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Переходы, а не keyframes."})," Если быстро нажать несколько раз, снекбары доезжают на новые места с того положения, где они сейчас, без рывков."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Свайп вверх закрывает."})," Дальше 45 px или быстрым броском (скорость больше 0.11 px/мс) на любой дистанции. Вниз тянется с трением и возвращается. Кнопка внутри нажимается как обычно."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Отпускание быстрее въезда."})," Въезд спокойный: 400 мс по ",n.jsx(e.code,{children:"ease"}),". Всё, что отвечает на палец, идёт за 240 мс по сильному ease-out: возврат на место, если не дотянул, и уход после броска. Бросок не проваливается в медленный старт, снекбар улетает с той же скоростью, с какой его кинули."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Один палец."})," Свайп ведёт только тот палец, который его начал. Второй палец на снекбаре не перехватывает жест, и снекбар не прыгает."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Таймер."})," 4 секунды, на паузе, пока стопка раскрыта, палец на снекбаре или вкладка скрыта. Оставшееся время сохраняется."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," ничего не едет, снекбары проявляются и гаснут на месте."]}),`
`]}),`
`,n.jsx(g,{prefix:"--snackbar-"}),`
`,n.jsx(e.h2,{id:"токены",children:"Токены"}),`
`,n.jsx(e.p,{children:"Собраны из CSS компонента и иконок, поэтому таблица всегда совпадает с кодом."}),`
`,n.jsx(u,{css:[f,m]}),`
`,n.jsxs(e.p,{children:["В Figma сердце и круг «успеха» залиты градиентами без токенов, в коде вместо них сплошные ",n.jsx(e.code,{children:"control/icon/favorite"})," и ",n.jsx(e.code,{children:"icon/success"}),". Дополнительный тёмный слой Error и Info в Figma — сырой чёрный 20 %, в коде ",n.jsx(e.code,{children:"bg/constant/scrim"}),"."]}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.h3,{id:"детальная-поверх-обложки",children:"Детальная: поверх обложки"}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.h3,{id:"каталог-над-белым",children:"Каталог: над белым"}),`
`,n.jsx(t,{of:x}),`
`,n.jsx(e.h3,{id:"показать-кнопкой",children:"Показать кнопкой"}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(e.h3,{id:"стопка",children:"Стопка"}),`
`,n.jsx(t,{of:b}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Каждый снекбар — ",n.jsx(e.code,{children:'role="status"'})," с ",n.jsx(e.code,{children:'aria-live="polite"'}),": экранный диктор прочитает его, не прерывая. Ошибка — ",n.jsx(e.code,{children:'role="alert"'}),"."]}),`
`,n.jsxs(e.li,{children:["Кнопка в снекбаре — обычная ",n.jsx(e.code,{children:"button"})," с областью касания 44 px."]}),`
`,n.jsxs(e.li,{children:["4 секунды хватает на короткую фразу; если в снекбаре действие, которое важно не пропустить, передай ",n.jsx(e.code,{children:"duration"})," больше или ",n.jsx(e.code,{children:"Infinity"}),"."]}),`
`]})]})}function A(r={}){const{wrapper:e}={...a(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{A as default};
