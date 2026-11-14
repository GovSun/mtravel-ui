import{j as n}from"./iframe-Dr5ib33t.js";import{u as i,M as s,C as r,a as d}from"./blocks-BQDa-jFX.js";import{B as l,P as o,S as c,a as h,H as x,b as p}from"./CollectionBanner.stories-BuqSFkYN.js";import{M as m,U as g}from"./DocTables-CsguvFim.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAdrHWJM.js";import"./index-Bc0N6I3Z.js";import"./motion-C-Q-avtg.js";import"./tokens-CNIzVYFy.js";const b=`/*
 * collection_banner, Figma 1217:903. The card is 361 × 453 on a 393 screen (the 16 px gutters belong to the
 * screen): radius 160 / 48, the season gradient, the title block, the card stack at the bottom, and the
 * season art sticking out over the top edge.
 *
 * Values with no DS token (raw here, reported): height 453, radius 160 / 48, the 48 gap, the winter / spring /
 * summer gradients, the stack card shadow (close to --shadow-knob, not equal), the art's drop shadow and the
 * skeleton grey. Motion: src/tokens/motion.css, --collection-banner-*.
 */
.banner {
  --_promote: calc(var(--collection-banner-motion-promote-duration) * var(--motion-scale));
  --_text: calc(var(--collection-banner-motion-text-duration) * var(--motion-scale));
  --_fade: calc(var(--collection-banner-motion-fade-duration) * var(--motion-scale));
  --_press-in: calc(var(--motion-duration-instant) * var(--motion-scale));
  --_press-out: calc(var(--motion-duration-base) * var(--motion-scale));
  --_peek: var(--collection-banner-motion-peek);
  --_card-h: 73px; /* Figma «Карточка · спереди» 329 × 73 */

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 48px; /* Figma «Текст» ↔ «Стек»: no spacing token for 48 */
  box-sizing: border-box;
  width: 100%;
  height: 453px;
  padding: 0 var(--spacing-lg) var(--spacing-lg);
  border-radius: 160px 160px 48px 48px;
  background: linear-gradient(180deg, var(--_from) var(--_from-at, 0%), var(--_to) var(--_to-at, 100%));
  color: var(--color-text-inverse-constant-primary);
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  user-select: none;
  transition: transform var(--_press-out) var(--motion-ease-out);
}
.banner[data-clickable] {
  cursor: pointer;
}
.banner[data-pressed] {
  transform: scale(var(--collection-banner-motion-banner-press-scale));
  transition-duration: var(--_press-in);
}

/* Figma Type. Autumn is bound to the palette; the other three are raw in Figma (no primitive matches). */
.banner[data-season='autumn'] {
  --_from: var(--color-base-red-600);
  --_to: var(--color-base-amber-500);
}
.banner[data-season='winter'] {
  --_from: #186ff1; /* 1232:5822 */
  --_to: #9da5b0;
  --_from-at: -1.4%;
}
.banner[data-season='spring'] {
  --_from: #52731c; /* 1232:5935: the yellow stop lies below the card, at 119 % */
  --_to: #f7d941;
  --_to-at: 118.9%;
}
.banner[data-season='summer'] {
  --_from: #f65c01; /* 1232:6048: the yellow stop at 134 % */
  --_to: #dbd819;
  --_to-at: 134%;
}

/* «Листья · поверх»: centred, over the top edge; per season as in Figma */
.art {
  position: absolute;
  top: var(--_art-top, -36px);
  left: 50%;
  width: var(--_art-w, 344px);
  height: var(--_art-h, 258px);
  margin-left: calc(var(--_art-w, 344px) / -2);
  object-fit: contain;
  /* Figma drop shadow 0 6, blur 8, 24 % on the image alpha (drop-shadow takes half the box-shadow blur) */
  filter: drop-shadow(0 6px 4px rgba(0, 0, 0, 0.24));
  pointer-events: none;
}
.banner[data-season='spring'] .art {
  --_art-top: -32px;
}
.banner[data-season='summer'] .art {
  --_art-top: -54px;
  --_art-w: 336px;
  --_art-h: 252px;
}

/* ---------- «Текст» ---------- */
.text {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: center;
  cursor: inherit;
}
.text:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 4px;
  border-radius: var(--radius-md);
}

.title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font: var(--font-im-28-b);
  letter-spacing: var(--tracking-im-28-b);
}

.summary {
  max-width: 100%;
  overflow: hidden;
  font: var(--font-im-16-r);
  letter-spacing: var(--tracking-im-16-r);
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* ---------- «Стек»: front 73 high, each next one shows 16 px lower ---------- */
.stack {
  position: relative;
  flex: none;
  width: 100%;
  height: calc(var(--_card-h) + 2 * var(--_peek));
}

/* Every card is laid out as the front one; the back poses scale it about its bottom centre, so the widths
   (297, 266) and the bottom edges (89, 105) land on Figma's. */
.card {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: var(--_card-h);
  transform-origin: 50% 100%;
  transition:
    transform var(--_promote) var(--collection-banner-motion-promote-easing),
    opacity var(--_promote) var(--collection-banner-motion-promote-easing);
}
.card[data-depth='0'] {
  z-index: 5;
}
.card[data-depth='1'] {
  z-index: 4;
  transform: translateY(var(--_peek)) scale(var(--collection-banner-motion-scale-1));
}
.card[data-depth='2'] {
  z-index: 3;
  transform: translateY(calc(2 * var(--_peek))) scale(var(--collection-banner-motion-scale-2));
}
/* cards 4–5: behind the third one, narrower and invisible. Its bottom edge is the third card's, so when the
   third moves up, the new one shows from behind it and widens into place; nothing pale under the stack. */
.card[data-depth='wait'] {
  z-index: 1;
  opacity: 0;
  transform: translateY(calc(2 * var(--_peek)))
    scale(calc(var(--collection-banner-motion-scale-2) * var(--collection-banner-motion-wait-scale)));
}
/* the thrown card flies over everything (WAAPI moves it); nothing on it is tappable any more */
.card[data-depth='leaving'] {
  z-index: 6;
  pointer-events: none;
}

.face {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  /* Figma: content padding 8 inside a 1 px border (white 5 % on white: not drawn), 32 on the right */
  padding: 9px 32px 9px 9px;
  border: 0;
  border-radius: var(--radius-xl);
  background: var(--control-bg-on-surface);
  /* Figma: 0 2 6 15 % + 0 2 0.909 6 % — close to --shadow-knob (2.73 offset), not equal */
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.15),
    0 2px 0.909px rgba(0, 0, 0, 0.06);
  color: var(--control-text-default);
  font: inherit;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  transition: transform var(--_press-out) var(--motion-ease-out);
}
.face[data-pressed] {
  transform: scale(var(--collection-banner-motion-press-scale));
  transition-duration: var(--_press-in);
}
.face:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
.card:not([data-depth='0']) .face {
  pointer-events: none;
}

.thumb {
  flex: none;
  display: block;
  width: 54px;
  height: 54px;
  border-radius: var(--radius-lg);
  object-fit: cover;
}

/* Figma: the back cards' text is white on white, only the photo strip shows under the card in front */
.texts {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  opacity: 0;
  transition: opacity calc(var(--motion-duration-instant) * var(--motion-scale)) var(--motion-ease-out);
}
.card[data-depth='0'] .texts,
.card[data-depth='leaving'] .texts {
  opacity: 1;
  transition-duration: var(--_text);
}

.itemTitle {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font: var(--font-im-14-m);
  letter-spacing: var(--tracking-im-14-m);
}

.price {
  font: var(--font-im-16-b);
  letter-spacing: var(--tracking-im-16-b);
  white-space: nowrap;
}

/* ---------- Reduced motion: nothing flies or slides; the front card fades, the next one shows through ---------- */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .card {
    transition: opacity var(--_fade) var(--motion-ease-standard);
  }
  :global(:root:not([data-motion='normal'])) .banner[data-pressed],
  :global(:root:not([data-motion='normal'])) .face[data-pressed] {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .card {
  transition: opacity var(--_fade) var(--motion-ease-standard);
}
:global(:root[data-motion='reduce']) .banner[data-pressed],
:global(:root[data-motion='reduce']) .face[data-pressed] {
  transform: none;
}

/* ---------- Skeleton (Figma Skeleton=True 1231:573): the same geometry as the loaded banner, no jump ---------- */
.banner[data-skeleton],
.shimmer {
  /* the shared skeleton grey of the DS cards: raw in Figma, no token */
  background: linear-gradient(280deg, #dcdcdc 0%, #f2f2f2 29%, #e1e1e1 49%, #f9f8f6 75%, #dcdcdc 100%);
}
.banner[data-skeleton] {
  cursor: default;
}
.banner[data-skeleton] .face {
  cursor: default;
}

.skText {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  height: 55px; /* = title 28 + 8 + summary 19, so the loaded text lands in the same place */
}
.skTitle,
.skSummary {
  display: block;
  background: var(--control-bg-on-surface);
}
.skTitle {
  width: 201px;
  height: 12px;
  border-radius: 8px;
}
.skSummary {
  width: 161px;
  height: 8px;
  border-radius: 6px;
}

.skBars {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}
.skBars > span {
  display: block;
  border-radius: var(--radius-xs);
}
.skBars > span:nth-child(1) {
  width: 127px;
  height: 6px;
}
.skBars > span:nth-child(2) {
  width: 65px;
  height: 4px;
}
.skBars > span:nth-child(3) {
  width: 50px;
  height: 8px;
  margin-top: var(--spacing-xs);
}
`;function a(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l}),`
`,n.jsx(e.h1,{id:"collectionbanner",children:"CollectionBanner"}),`
`,n.jsx(e.p,{children:"Баннер сезонной подборки: заголовок, сколько в ней экскурсий, и стопка карточек экскурсий снизу. Стопка листается сама: каждые 3 секунды верхняя карточка улетает, следующая встаёт на её место, сзади выходит новая."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1217-903",rel:"nofollow",children:"collection_banner 1217:903"}),", свойства Type (Autumn, Winter, Spring, Summer) и Skeleton."]}),`
`,n.jsx(e.p,{children:"В стопке до 5 карточек. Они показываются по очереди, после пятой снова первая, и так по кругу."}),`
`,n.jsx(r,{of:o}),`
`,n.jsx(d,{of:o}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { CollectionBanner } from '@mtravel/ui';

<CollectionBanner
  season="autumn"
  title="Золотая осень"
  summary="34 экскурсии · от 3 441 ⃀"
  items={excursions.map((e) => ({ id: e.id, title: e.title, price: \`\${e.price} ⃀\`, image: e.photo }))}
  onClick={openCollection}
  onItemClick={(item) => openExcursion(item.id)}
/>
`})}),`
`,n.jsx(e.p,{children:"Баннер тянется на ширину контейнера (в Figma 361 на экране 393, отступы по 16 у экрана). Украшение сезона торчит над верхним краем на 36 px (у лета на 54), оставь над баннером место."}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Проп"}),n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Что делает"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"season"})}),n.jsx(e.td,{children:"Type"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"autumn"}),", ",n.jsx(e.code,{children:"winter"}),", ",n.jsx(e.code,{children:"spring"}),", ",n.jsx(e.code,{children:"summer"}),": градиент и украшение сверху"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"title"})}),n.jsx(e.td,{children:"«Золотая осень»"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"IM-28 B"}),", до двух строк"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"summary"})}),n.jsx(e.td,{children:"«34 экскурсии · от 3 441 ⃀»"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"IM-16 R"}),", одна строка с многоточием"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"items"})}),n.jsx(e.td,{children:"«Стек»"}),n.jsx(e.td,{children:"до 5 экскурсий подборки: стопка показывает их по очереди и начинает заново. Больше пяти не берутся"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"autoplay"})}),n.jsx(e.td,{}),n.jsxs(e.td,{children:["стопка листается сама, пока баннер на экране. ",n.jsx(e.code,{children:"false"})," — стоит на месте. По умолчанию ",n.jsx(e.code,{children:"true"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"interval"})}),n.jsx(e.td,{}),n.jsxs(e.td,{children:["пауза между бросками, мс. По умолчанию ",n.jsx(e.code,{children:"--collection-banner-interval"})," 3000"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"decoration"})}),n.jsx(e.td,{children:"«Листья · поверх»"}),n.jsxs(e.td,{children:["своя картинка 344 × 258 без тени вместо украшения сезона, ",n.jsx(e.code,{children:"null"})," убирает"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"skeleton"})}),n.jsx(e.td,{children:"Skeleton"}),n.jsx(e.td,{children:"серая заглушка той же геометрии"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onClick"})}),n.jsx(e.td,{}),n.jsx(e.td,{children:"тап по баннеру где угодно, кроме передней карточки: открыть подборку"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onItemClick"})}),n.jsx(e.td,{}),n.jsxs(e.td,{children:["тап по передней карточке. С ",n.jsx(e.code,{children:"item.href"})," карточка становится ссылкой"]})]})]})]}),`
`,n.jsx(e.h3,{id:"когда-стопка-листается",children:"Когда стопка листается"}),`
`,n.jsx(e.p,{children:"Сама, пока баннер виден на экране хотя бы наполовину: уехал из вида — стоит, вернулся — продолжает. Стопка стоит, пока на ней палец, пока на карточке фокус с клавиатуры и пока приложение свёрнуто. После паузы и после каждого броска таймер начинает заново полные 3 секунды."}),`
`,n.jsx(e.h2,{id:"сезоны",children:"Сезоны"}),`
`,n.jsx(r,{of:c}),`
`,n.jsxs(e.p,{children:["У осени градиент из палитры: ",n.jsx(e.code,{children:"color/base/red/600"})," → ",n.jsx(e.code,{children:"color/base/amber/500"}),". Зима, весна и лето в Figma залиты сырыми цветами, подходящих примитивов нет, в коде они тоже сырые. У весны и лета жёлтая точка градиента лежит ниже карточки (119 % и 134 %), как в Figma."]}),`
`,n.jsx(e.h2,{id:"движение",children:"Движение"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Подъём."})," Верхняя карточка за 60 мс вырастает до 1.03 и приподнимается на 2 px: видно, что её сейчас бросят."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Полёт."})," За 240 мс она улетает вправо-вверх на ширину карточки, поворачиваясь на 18°. Разгон за первые 3–4 кадра, дальше почти ровная скорость около 52 px за кадр, как у брошенной карточки. Гаснет на последних 60 % пути. Подъём и полёт вместе 300 мс."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Стопка подтягивается."})," Вместе с подъёмом остальные карточки сдвигаются на ступень вперёд за 300 мс по сильному ease-out. Текст новой передней проявляется за 160 мс, пока улетающая ещё закрывает её."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"До 5 карточек, по кругу."})," Видно три: передняя и две по 16 px снизу. Четвёртая и пятая ждут за третьей, уже и невидимые. С каждым броском следующая выходит из-за третьей и расширяется до своего места, улетевшая уходит в конец очереди. После пятой снова первая."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Переходы, а не keyframes."})," Карточки стопки едут на CSS transitions: если бросок случился посреди движения, они доезжают с того места, где сейчас. Улетающая карточка анимируется через WAAPI."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," ничего не летит и не едет. Передняя карточка гаснет на месте за 200 мс, следующая проступает под ней. Таймер работает так же."]}),`
`]}),`
`,n.jsx(m,{prefix:"--collection-banner-"}),`
`,n.jsx(e.h2,{id:"токены",children:"Токены"}),`
`,n.jsx(e.p,{children:"Собраны из CSS компонента, поэтому таблица всегда совпадает с кодом."}),`
`,n.jsx(g,{css:b}),`
`,n.jsxs(e.p,{children:["Без токенов в DS (сырые значения в CSS, в Figma тоже сырые): высота 453, радиусы 160 / 48, зазор 48 между текстом и стопкой, градиенты зимы, весны и лета, тень карточек стопки (похожа на ",n.jsx(e.code,{children:"--shadow-knob"}),", но не равна), тень украшения и серый скелетона."]}),`
`,n.jsx(e.h2,{id:"skeleton",children:"Skeleton"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.p,{children:"В Figma у скелетона передняя карточка 80 px и фото 64. В коде скелетон той же геометрии, что загруженный баннер (73 и 54), чтобы при загрузке ничего не прыгало."}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.h3,{id:"главная-выходные",children:"Главная «Выходные»"}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h3,{id:"одна-экскурсия",children:"Одна экскурсия"}),`
`,n.jsx(r,{of:p}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Стопка — ",n.jsx(e.code,{children:'role="group"'})," с ",n.jsx(e.code,{children:'aria-roledescription="карусель"'}),". Фокус и диктор видят только переднюю карточку: кнопка (или ссылка) с названием и ценой. Карточки сзади ",n.jsx(e.code,{children:"aria-hidden"}),"."]}),`
`,n.jsx(e.li,{children:"Смена карточек не объявляется вслух: раз в 3 секунды это было бы навязчиво."}),`
`,n.jsx(e.li,{children:"Фокус с клавиатуры на баннере останавливает стопку: карточка не улетит, пока на ней фокус."}),`
`,n.jsx(e.li,{children:"Заголовок баннера — кнопка: подборку можно открыть с клавиатуры."}),`
`]})]})}function F(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{F as default};
