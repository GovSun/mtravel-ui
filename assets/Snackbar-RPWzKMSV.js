import{j as n}from"./iframe-DyD5Yel4.js";import{u as s,M as a,C as i,a as c}from"./blocks-CcI75u3-.js";import{S as l,P as t,A as d,O as h}from"./Snackbar.stories-DVQE_gfE.js";import{M as x,U as p}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./cx-2dOUpm6k.js";import"./PillButton-Cdj7WtD9.js";import"./Pressable-CAjp7WdB.js";import"./usePress-XYzAalw7.js";import"./arrows-0JYTYJZi.js";import"./Svg-B7GM2ZFd.js";import"./paths-BjPgyxdS.js";import"./motion-C-Q-avtg.js";import"./Button-grGIhY78.js";import"./LikeButton-BMykRAqT.js";import"./useControllableState-D9cJCl43.js";import"./FavouriteIcon-C8L7FAG0.js";import"./mergeRefs-BZQLIp5G.js";import"./tokens-Bc2_NrJ2.js";const j=`/*
 * Snackbar, Figma «Snackbar new» 1068:6441. Everything visual comes from tokens.
 * Pill: 48 px high, radius/full, snackbar/bg/default glass with blur/bg-12 and a snackbar/border/default hairline;
 * 12 px left inset, 24 px icon, 12 px to the text, 8 px from the text to the action (a Pill button), 16 px right inset (Figma).
 */
.snackbar {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  /* a nowrap subtitle must not widen the pill past its container (a grid / flex parent sizes from min-content) */
  min-width: 0;
  max-width: 100%;
  min-height: 48px;
  padding: var(--spacing-xs) var(--spacing-lg) var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  background-color: var(--snackbar-bg-default);
  /* hairline as an inset ring: a real 0.5 px border would move the content to half pixels */
  box-shadow: inset 0 0 0 var(--border-width-hairline) var(--snackbar-border-default);
  backdrop-filter: var(--blur-bg-12);
  -webkit-backdrop-filter: var(--blur-bg-12);
  color: var(--snackbar-text-primary);
  text-align: left;
}

/* Figma Info only: one more 20 % dark layer on top of the fill (raw black 20 % in Figma, bg/constant/scrim here); Error has none */
.snackbar[data-tone='info'] {
  background-image: linear-gradient(var(--color-bg-constant-scrim), var(--color-bg-constant-scrim));
}

.icon {
  display: flex;
  flex: none;
  width: 24px;
  height: 24px;
  margin-right: var(--spacing-md); /* Figma: the icon box is 48 wide, the text starts at 48 */
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

/* Action: a PillButton white (Figma «Disclouser» frame: padding-left 8, so 8 from the text) */
.action {
  margin-left: var(--spacing-sm);
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
  z-index: 1100; /* above BottomSheet (1000): a snackbar raised from a sheet is seen and tappable */
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
  backdrop-filter: var(--blur-bg-12);
  -webkit-backdrop-filter: var(--blur-bg-12);
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
}
:global(:root[data-motion='reduce']) .toast {
  transition-property: opacity;
}
`,g=`/*
 * State icons of Figma «Snackbar new» 1068:6441, 24 px. Colours come from tokens: the hearts use
 * control/icon/favorite, success / error / info circles use icon/success, icon/error, icon/info, the glyph inside
 * (check, «!», «×») is control/icon/inverse — Figma binds it for «!» and draws the check and the «×» raw white.
 */
import type { SVGProps } from 'react';
import { Svg as BaseSvg } from '../../icons/Svg';
import { CIRCLE_PATH, HEART_PATH } from '../../icons/paths';

type P = SVGProps<SVGSVGElement>;
const Svg = ({ children, ...rest }: P) => (
  <BaseSvg size={24} {...rest}>
    {children}
  </BaseSvg>
);

export const FavouriteAddedIcon = (p: P) => (
  <Svg {...p}>
    <path d={HEART_PATH} fill="var(--control-icon-favorite)" />
  </Svg>
);

/* Figma «Сердце с вырезом» (State=Delete favourite): the heart minus a 6.75 circle at (18.5, 18), so the glass shows through the gap,
   a 5.25 circle in the same red with a white «×» (stroke 1.35) on top. */
const HEART_CUT_PATH =
  'M17 4C20.2 4 21 6.667 21 8C21 9.2286 20.7218 10.3952 20.2646 11.4844C19.702 11.3324 19.1107 11.25 18.5 11.25C14.7721 11.25 11.75 14.2721 11.75 18C11.75 18.6867 11.8533 19.3493 12.0439 19.9736C12.0149 19.9903 12.0003 19.9999 12 20C11.9938 19.9965 3 14.9976 3 8C3 6.667 3.80001 4 7 4C10.2 4 12 6.667 12 8C12 6.667 13.8 4 17 4Z';

export const FavouriteRemovedIcon = (p: P) => (
  <Svg {...p}>
    <path d={HEART_CUT_PATH} fill="var(--control-icon-favorite)" />
    <circle cx="18.5" cy="18" r="5.25" fill="var(--control-icon-favorite)" />
    <path d="M16.7 16.2L20.3 19.8M20.3 16.2L16.7 19.8" stroke="var(--control-icon-inverse)" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export const SuccessIcon = (p: P) => (
  <Svg {...p}>
    <path d={CIRCLE_PATH} fill="var(--color-icon-success)" />
    <path
      d="M16.7348 9.67829C17.1094 9.27246 17.0841 8.6398 16.6783 8.2652C16.2725 7.8906 15.6398 7.9159 15.2652 8.32172L10.4615 13.5257L8.73481 11.6551C8.3602 11.2492 7.72755 11.2239 7.32172 11.5985C6.9159 11.9731 6.8906 12.6058 7.2652 13.0116L9.72674 15.6783C9.91605 15.8834 10.1824 16 10.4615 16C10.7406 16 11.007 15.8834 11.1963 15.6783L16.7348 9.67829Z"
      fill="var(--control-icon-inverse)"
    />
  </Svg>
);

/** Error and info share the «!» glyph, only the circle colour differs. */
const Exclamation = ({ fill, ...p }: P & { fill: string }) => (
  <Svg {...p}>
    <path d={CIRCLE_PATH} fill={fill} />
    <path
      d="M12 7C11.264 7 10.686 7.65 10.756 8.4L11.25 12.55C11.265 12.7393 11.3503 12.9161 11.4891 13.0456C11.6279 13.1752 11.8101 13.2481 12 13.25C12.1899 13.2481 12.3721 13.1752 12.5109 13.0456C12.6497 12.9161 12.735 12.7393 12.75 12.55L13.244 8.4C13.313 7.649 12.736 7 12 7Z"
      fill="var(--control-icon-inverse)"
    />
    <path
      d="M12.8839 16.6339C13.1183 16.3995 13.25 16.0815 13.25 15.75C13.25 15.4185 13.1183 15.1005 12.8839 14.8661C12.6495 14.6317 12.3315 14.5 12 14.5C11.6685 14.5 11.3505 14.6317 11.1161 14.8661C10.8817 15.1005 10.75 15.4185 10.75 15.75C10.75 16.0815 10.8817 16.3995 11.1161 16.6339C11.3505 16.8683 11.6685 17 12 17C12.3315 17 12.6495 16.8683 12.8839 16.6339Z"
      fill="var(--control-icon-inverse)"
    />
  </Svg>
);

export const ErrorIcon = (p: P) => <Exclamation fill="var(--color-icon-error)" {...p} />;
export const InfoIcon = (p: P) => <Exclamation fill="var(--color-icon-info)" {...p} />;
`;function o(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:l}),`
`,n.jsx(e.h1,{id:"snackbar",children:"Snackbar"}),`
`,n.jsxs(e.p,{children:["Короткое уведомление о том, что произошло: добавили в избранное, скопировали номер, ошибка ввода. Появляется ",n.jsx(e.strong,{children:"сверху"}),", живёт 4 секунды и уходит сам. Несколько складываются в стопку."]}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1068-6441",rel:"nofollow",children:"Snackbar new 1068:6441"}),", состояния Add favourite, Delete favourite, Sucess, Error, Info; свойства Subtitle и Disclouser (кнопка справа)."]}),`
`,n.jsx(e.p,{children:"Нажми кнопку: снекбар выедет сверху с параметрами из таблицы ниже. Нажми несколько раз, чтобы собрать стопку."}),`
`,n.jsx(i,{of:t}),`
`,n.jsx(c,{of:t}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"SnackbarHost"})," ставится один раз на экран, ",n.jsx(e.code,{children:"snackbar()"})," вызывается откуда угодно, без хуков и контекста, как ",n.jsx(e.code,{children:"toast()"})," в Sonner."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { SnackbarHost, snackbar } from '@mtravel/ui';

<SnackbarHost />   // один раз, в корне экрана

snackbar({ tone: 'favourite', title: 'Добавлено в избранное', subtitle: excursion.title });
snackbar({ tone: 'unfavourite', title: 'Удалено из избранного', action: { label: 'Отменить', onClick: undo } });
snackbar({ tone: 'error', title: 'Неправильно введён код' });
const id = snackbar({ tone: 'info', title: 'Ждём оплату', duration: Infinity });
snackbar.dismiss(id);
snackbar.clear();   // убрать все сразу, без анимации (тесты, уход с экрана)
`})}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Опция"}),n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Что делает"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"tone"})}),n.jsx(e.td,{children:"State"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"favourite"}),", ",n.jsx(e.code,{children:"unfavourite"}),", ",n.jsx(e.code,{children:"success"}),", ",n.jsx(e.code,{children:"error"}),", ",n.jsx(e.code,{children:"info"}),": иконка, у info фон темнее"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"title"})}),n.jsx(e.td,{children:"label"}),n.jsxs(e.td,{children:["текст, ",n.jsx(e.code,{children:"IM-14 M"}),", до двух строк"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"subtitle"})}),n.jsx(e.td,{children:"Subtitle"}),n.jsxs(e.td,{children:["вторая строка, ",n.jsx(e.code,{children:"IM-12 R"}),", ",n.jsx(e.code,{children:"snackbar/text/secondary"}),", в одну строку с многоточием"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"action"})}),n.jsx(e.td,{children:"Disclouser"}),n.jsxs(e.td,{children:["белая ",n.jsx(e.a,{href:"?path=/docs/components-pill-button--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"PillButton"})," справа (",n.jsx(e.code,{children:"white"}),": ",n.jsx(e.code,{children:"control/bg/on-surface"}),", ",n.jsx(e.code,{children:"IM-14 S"}),"), 8 px от текста; после нажатия снекбар закрывается"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"icon"})}),n.jsx(e.td,{}),n.jsx(e.td,{children:"своя иконка 24 вместо иконки состояния"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"duration"})}),n.jsx(e.td,{}),n.jsxs(e.td,{children:["сколько живёт, мс. По умолчанию ",n.jsx(e.code,{children:"--snackbar-lifetime"})," 4000, ",n.jsx(e.code,{children:"Infinity"})," — пока не закроют"]})]})]})]}),`
`,n.jsx(e.h2,{id:"состояния",children:"Состояния"}),`
`,n.jsx(i,{of:d}),`
`,n.jsxs(e.p,{children:["Тёмное стекло одинаково читается и над белым экраном, и над обложкой: фон ",n.jsx(e.code,{children:"snackbar/bg/default"})," (75 % чёрного) с размытием ",n.jsx(e.code,{children:"blur/bg-12"}),", по краю волосяная линия ",n.jsx(e.code,{children:"snackbar/border/default"}),". Отступы: слева 12, иконка 24, до текста 12, от текста до кнопки 8, справа 16. Значок внутри круга («✓», «!», «×» у удалённого из избранного) — ",n.jsx(e.code,{children:"control/icon/inverse"}),", белый; у «удалено» в сердце вырез, сквозь него видно стекло."]}),`
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
`,n.jsx(x,{prefix:"--snackbar-"}),`
`,n.jsx(e.h2,{id:"токены",children:"Токены"}),`
`,n.jsx(e.p,{children:"Собраны из CSS компонента и иконок, поэтому таблица всегда совпадает с кодом."}),`
`,n.jsx(p,{css:[j,g]}),`
`,n.jsxs(e.p,{children:["В Figma сердце и круг «успеха» залиты градиентами без токенов, в коде вместо них сплошные ",n.jsx(e.code,{children:"control/icon/favorite"})," и ",n.jsx(e.code,{children:"icon/success"}),". Дополнительный тёмный слой Info в Figma — сырой чёрный 20 %, в коде ",n.jsx(e.code,{children:"bg/constant/scrim"}),"; у Error слоя нет."]}),`
`,n.jsx(e.p,{children:"Вопросы к Figma (код пока как раньше):"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Круг Error привязан к ",n.jsx(e.code,{children:"control/text/error"}),", круг Info — к ",n.jsx(e.code,{children:"control/text/accent"})," (#207dee): текстовые токены на иконке. В коде ",n.jsx(e.code,{children:"icon/error"})," (то же значение) и ",n.jsx(e.code,{children:"icon/info"})," (#3b82f6, другой синий). Сегодня появились ",n.jsx(e.code,{children:"control/icon/error"}),", ",n.jsx(e.code,{children:"control/icon/success"}),", ",n.jsx(e.code,{children:"control/icon/warning"})," — снекбар их не использует."]}),`
`,n.jsxs(e.li,{children:["Подзаголовок привязан к ",n.jsx(e.code,{children:"nav/text/inverse/subtitle"})," с прозрачностью слоя 90 % поверх токена, в котором уже 90 %. В коде ",n.jsx(e.code,{children:"snackbar/text/secondary"})," без второй прозрачности."]}),`
`,n.jsxs(e.li,{children:["«✓» в круге успеха и «×» удалённого — сырой белый, «!» — ",n.jsx(e.code,{children:"control/icon/inverse"}),". В коде везде ",n.jsx(e.code,{children:"control/icon/inverse"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsxs(e.p,{children:["Где в дизайне: «Детальная страница» 173:13296 — «Добавить в избранное» (230:17164, x2) и «Удалить из избранного» (3124:185417, x2), плашка сверху под Appbar; внутри Appbar есть слот Snackbar (Figma ",n.jsx(e.code,{children:"Snackbar new"})," с State Add favourite)."]}),`
`,n.jsx(e.h3,{id:"детальная-избранное",children:"Детальная: избранное"}),`
`,n.jsx(i,{of:h}),`
`,n.jsxs(e.p,{children:["Плашка не шире контейнера: длинный подзаголовок обрезается многоточием (",n.jsx(e.code,{children:"min-width: 0"})," и ",n.jsx(e.code,{children:"max-width: 100%"}),"), а не растягивает плашку. ",n.jsx(e.code,{children:"SnackbarHost"})," отдаёт ",n.jsx(e.code,{children:"ref"})," на ",n.jsx(e.code,{children:"<section>"})," и принимает остальные атрибуты (",n.jsx(e.code,{children:"className"}),", ",n.jsx(e.code,{children:"style"}),", ",n.jsx(e.code,{children:"data-*"}),"); ",n.jsx(e.code,{children:"id"})," это id хоста, не DOM-атрибут. Названия ",n.jsx(e.code,{children:"favourite"})," и ",n.jsx(e.code,{children:"unfavourite"})," относятся к продукту, а не к смыслу, их оставили как в Figma."]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Список снекбаров — живой регион ",n.jsx(e.code,{children:'aria-live="polite"'}),", он есть с самого начала, поэтому новый снекбар экранный диктор прочитает, не прерывая. Ошибка — ",n.jsx(e.code,{children:'role="alert"'})," (на части скринридеров она может прочитаться дважды, из региона и как alert; нужна проверка на устройстве)."]}),`
`,n.jsx(e.li,{children:"Пока фокус на кнопке снекбара (клавиатура, VoiceOver), таймер стоит: «Отменить» успеют нажать."}),`
`,n.jsx(e.li,{children:"Снекбар показывается поверх открытой шторки, и на него можно нажать."}),`
`,n.jsxs(e.li,{children:["Кнопка в снекбаре — обычная ",n.jsx(e.code,{children:"button"})," с областью касания 44 px."]}),`
`,n.jsxs(e.li,{children:["4 секунды хватает на короткую фразу; если в снекбаре действие, которое важно не пропустить, передай ",n.jsx(e.code,{children:"duration"})," больше или ",n.jsx(e.code,{children:"Infinity"}),"."]}),`
`]})]})}function L(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{L as default};
