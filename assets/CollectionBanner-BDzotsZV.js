import{j as n}from"./iframe-DuqTOznb.js";import{u as a,M as s,C as r,a as d}from"./blocks-CaaIEU4k.js";import{B as l,P as o,S as c,a as h,H as x,b as p}from"./CollectionBanner.stories-Cp9d00em.js";import{M as m,U as j}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./Caption-C6jupY-b.js";import"./figma-BZstJmpc.js";import"./photos-Cw5k0SX3.js";import"./stack-ala-archa-CZCiGT1X.js";import"./stack-kel-tor-CWBtKByR.js";import"./cx-2dOUpm6k.js";import"./motion-C-Q-avtg.js";import"./mergeRefs-BPT53vMC.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./Skeleton-D5GPHumj.js";import"./tokens-INIU3VNa.js";const g=`/*
 * collection_banner, Figma 1217:903. The card is 361 × 453 on a 393 screen (the 16 px gutters belong to the
 * screen): radius 160 / 48, the season gradient, the title block, the card stack at the bottom, and the
 * season art sticking out over the top edge.
 *
 * Values with no DS token (raw here, reported): height 453, radius 160 / 48, the 48 gap, the winter / spring /
 * summer gradients and the art's drop shadow. The stack card shadow is --shadow-knob (Figma's is 0.7 px smaller).
 * The skeleton grey is the DS Skeleton. Motion: src/tokens/motion.css, --collection-banner-*.
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
  --_from: #186ff1; /* no token: Figma 1232:5822 */
  --_to: #9da5b0; /* no token: Figma 1232:5822 */
  --_from-at: -1.4%;
}
.banner[data-season='spring'] {
  --_from: #52731c; /* no token: Figma 1232:5935; the yellow stop lies below the card, at 119 % */
  --_to: #f7d941; /* no token: Figma 1232:5935 */
  --_to-at: 118.9%;
}
.banner[data-season='summer'] {
  --_from: #f65c01; /* no token: Figma 1232:6048; the yellow stop at 134 % */
  --_to: #dbd819; /* no token: Figma 1232:6048 */
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
  filter: drop-shadow(0 6px 4px rgba(0, 0, 0, 0.24)); /* no token: Figma 1198:5324 */
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

/* The flight layer. At rest it is the stack itself. For a throw it opens up to the screen edge on the right
   (--_fl-r, measured), above the stack by the flight's rise (--_fl-t) and 16 px left and below for the shadows,
   and cuts there: the thrown card leaves the screen without widening the page. The cards are inset by the same
   amounts, so opening and closing it moves nothing. */
.flight {
  position: absolute;
  top: calc(var(--_fl-t, 0px) * -1);
  right: calc(var(--_fl-r, 0px) * -1);
  bottom: calc(var(--_fl-b, 0px) * -1);
  left: calc(var(--_fl-l, 0px) * -1);
  pointer-events: none;
}
.flight[data-flying] {
  --_fl-b: var(--spacing-lg);
  --_fl-l: var(--spacing-lg);
  overflow: hidden; /* Safari < 16 */
  overflow: clip;
}

/* Every card is laid out as the front one; the back poses scale it about its bottom centre, so the widths
   (297, 266) and the bottom edges (89, 105) land on Figma's. */
.card {
  position: absolute;
  top: var(--_fl-t, 0px);
  right: var(--_fl-r, 0px);
  left: var(--_fl-l, 0px);
  height: var(--_card-h);
  pointer-events: auto;
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
  box-shadow: var(--shadow-knob); /* Figma 1198:5367: 0 2 6 / 0 2 0.9; the token's offset is 0.7 px larger */
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

/* The back cards are plain white sheets (Figma 1217:903 shows only their edges): photo and text appear with the card
   that comes to the front, no photo fragment shows under the front card. */
.texts {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}
.thumb,
.texts {
  opacity: 0;
  transition: opacity calc(var(--motion-duration-instant) * var(--motion-scale)) var(--motion-ease-out);
}
.card[data-depth='0'] .thumb,
.card[data-depth='0'] .texts,
.card[data-depth='leaving'] .thumb,
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

/* ---------- Skeleton (Figma Skeleton=True 1231:573): the same geometry as the loaded banner, no jump ----------
   The grey is the DS Skeleton (one block with the banner's corners under the content); the text bars are white. */
.banner[data-skeleton] {
  background: none;
  cursor: default;
}
.banner .skFill {
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: 160px 160px 48px 48px; /* no token: Figma 1231:573, the banner's corners */
}
.banner[data-skeleton] .face {
  cursor: default;
}

.skText {
  position: relative;
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
  border-radius: 8px; /* no token: Figma 1231:573 */
}
.skSummary {
  width: 161px;
  height: 8px;
  border-radius: 6px; /* no token: Figma 1231:573 */
}

.skBars {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}
.skPrice {
  margin-top: var(--spacing-xs);
}
`;function i(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l}),`
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
  summary={\`\${offers(collection.count)} · от \${collection.minPrice} ⃀\`}
  items={excursions.map((e) => ({ id: e.id, title: e.title, price: \`\${e.price} ⃀\`, image: e.photo }))}
  onClick={openCollection}
  onItemClick={(item, event) => openExcursion(item.id)}
/>
`})}),`
`,n.jsx(e.h3,{id:"счётчик-предложений",children:"Счётчик предложений"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"summary"})," — сколько предложений во всей подборке (не только в стопке) и минимальная цена: «34 предложения · от 3 441 ⃀». Тап по баннеру открывает каталог этой подборки. Слово склоняется по числу:"]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Число оканчивается на"}),n.jsx(e.th,{children:"Слово"}),n.jsx(e.th,{children:"Примеры"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"1, кроме 11"}),n.jsx(e.td,{children:"предложение"}),n.jsx(e.td,{children:"1, 21, 101"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"2–4, кроме 12–14"}),n.jsx(e.td,{children:"предложения"}),n.jsx(e.td,{children:"2, 3, 34"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"остальное, включая 11–14"}),n.jsx(e.td,{children:"предложений"}),n.jsx(e.td,{children:"5, 12, 25"})]})]})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const OFFER = { one: 'предложение', few: 'предложения', many: 'предложений', other: 'предложения' } as const;
const offers = (n: number) => \`\${n} \${OFFER[new Intl.PluralRules('ru').select(n) as keyof typeof OFFER]}\`;

offers(1);  // «1 предложение»
offers(34); // «34 предложения»
offers(12); // «12 предложений»
`})}),`
`,n.jsxs(e.p,{children:["У элемента ",n.jsx(e.code,{children:"items"})," с ",n.jsx(e.code,{children:"imageSrcSet"})," задавайте ",n.jsx(e.code,{children:"imageSizes"}),"; по умолчанию ",n.jsx(e.code,{children:"54px"}),", реальная ширина фото. Фото лежит в рамке 54 × 54, сдвига вёрстки при загрузке нет."]}),`
`,n.jsx(e.p,{children:"Баннер тянется на ширину контейнера (в Figma 361 на экране 393, отступы по 16 у экрана). Украшение сезона торчит над верхним краем на 36 px (у лета на 54), оставь над баннером место."}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Проп"}),n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Что делает"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"season"})}),n.jsx(e.td,{children:"Type"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"autumn"}),", ",n.jsx(e.code,{children:"winter"}),", ",n.jsx(e.code,{children:"spring"}),", ",n.jsx(e.code,{children:"summer"}),": градиент и украшение сверху"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"title"})}),n.jsx(e.td,{children:"«Золотая осень»"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"IM-28 B"}),", до двух строк"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"summary"})}),n.jsx(e.td,{children:"«34 предложения · от 3 441 ⃀»"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"IM-16 R"}),", одна строка с многоточием. Сколько предложений во всей подборке и цена «от»"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"items"})}),n.jsx(e.td,{children:"«Стек»"}),n.jsx(e.td,{children:"до 5 экскурсий подборки: стопка показывает их по очереди и начинает заново. Больше пяти не берутся"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"autoplay"})}),n.jsx(e.td,{}),n.jsxs(e.td,{children:["стопка листается сама, пока баннер на экране. ",n.jsx(e.code,{children:"false"})," — стоит на месте. По умолчанию ",n.jsx(e.code,{children:"true"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"interval"})}),n.jsx(e.td,{}),n.jsxs(e.td,{children:["пауза между бросками, мс. По умолчанию ",n.jsx(e.code,{children:"--collection-banner-interval"})," 3000"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"decoration"})}),n.jsx(e.td,{children:"«Листья · поверх»"}),n.jsxs(e.td,{children:["своя картинка 344 × 258 без тени вместо украшения сезона, ",n.jsx(e.code,{children:"null"})," убирает"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"skeleton"})}),n.jsx(e.td,{children:"Skeleton"}),n.jsxs(e.td,{children:["заглушка той же геометрии из DS Skeleton (",n.jsx(e.code,{children:"SkeletonGroup"}),", ",n.jsx(e.code,{children:'role="status"'}),", «Загрузка»)"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onClick"})}),n.jsx(e.td,{}),n.jsx(e.td,{children:"тап по баннеру где угодно, кроме передней карточки: открыть подборку. Получает настоящее событие"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onItemClick"})}),n.jsx(e.td,{}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"(item, event)"}),": тап по передней карточке. С ",n.jsx(e.code,{children:"item.href"})," (и ",n.jsx(e.code,{children:"target"}),", ",n.jsx(e.code,{children:"rel"}),") карточка становится ссылкой, роутер может вызвать ",n.jsx(e.code,{children:"event.preventDefault()"})]})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"ref"}),", ",n.jsx(e.code,{children:"className"}),", ",n.jsx(e.code,{children:"style"})]}),n.jsx(e.td,{}),n.jsxs(e.td,{children:["корневой ",n.jsx(e.code,{children:"<div>"})]})]})]})]}),`
`,n.jsx(e.h3,{id:"когда-стопка-листается",children:"Когда стопка листается"}),`
`,n.jsx(e.p,{children:"Сама, пока баннер виден на экране хотя бы наполовину: уехал из вида — стоит, вернулся — продолжает. Стопка стоит, пока на ней палец, пока на карточке фокус с клавиатуры и пока приложение свёрнуто. После паузы и после каждого броска таймер начинает заново полные 3 секунды."}),`
`,n.jsx(e.h2,{id:"сезоны",children:"Сезоны"}),`
`,n.jsx(r,{of:c}),`
`,n.jsxs(e.p,{children:["У осени градиент из палитры: ",n.jsx(e.code,{children:"color/base/red/600"})," → ",n.jsx(e.code,{children:"color/base/amber/500"}),". Зима, весна и лето в Figma залиты сырыми цветами, подходящих примитивов нет, в коде они тоже сырые. У весны и лета жёлтая точка градиента лежит ниже карточки (119 % и 134 %), как в Figma."]}),`
`,n.jsx(e.h2,{id:"движение",children:"Движение"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Подъём."})," Верхняя карточка за 60 мс вырастает до 1.03 и приподнимается на 2 px: видно, что её сейчас бросят."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Полёт."})," За 240 мс она улетает вправо-вверх за край экрана и ещё на 48 px дальше, поворачиваясь на 24°. Вверх поднимается на четверть пути вправо. Разгон за первые 3–4 кадра, дальше почти ровная скорость около 68 px за кадр, как у брошенной карточки. Подъём и полёт вместе 300 мс."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Гаснет поздно."})," Первые 45 % полёта карточка непрозрачная. У края экрана она ещё видна почти наполовину и гаснет до конца уже за краем, поэтому видно, что её бросили, а не стёрли."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Край экрана"})," — ближайший контейнер, который обрезает содержимое, или окно. Карточка обрезается ровно по нему и не расширяет страницу, поэтому на телефоне не появляется прокрутка вбок. На широком экране она летит не дальше двух ширин карточки и гаснет по дороге."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Стопка подтягивается."})," Вместе с подъёмом остальные карточки сдвигаются на ступень вперёд за 300 мс по сильному ease-out. Текст новой передней проявляется за 160 мс, пока улетающая ещё закрывает её."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"До 5 карточек, по кругу."})," Видно три: передняя и две по 16 px снизу. Четвёртая и пятая ждут за третьей, уже и невидимые. С каждым броском следующая выходит из-за третьей и расширяется до своего места, улетевшая уходит в конец очереди. После пятой снова первая."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Переходы, а не keyframes."})," Карточки стопки едут на CSS transitions: если бросок случился посреди движения, они доезжают с того места, где сейчас. Улетающая карточка анимируется через WAAPI."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," ничего не летит и не едет. Передняя карточка гаснет на месте за 200 мс, следующая проступает под ней. Таймер работает так же."]}),`
`]}),`
`,n.jsx(m,{prefix:"--collection-banner-"}),`
`,n.jsx(e.h2,{id:"токены",children:"Токены"}),`
`,n.jsx(e.p,{children:"Собраны из CSS компонента, поэтому таблица всегда совпадает с кодом."}),`
`,n.jsx(j,{css:g}),`
`,n.jsxs(e.p,{children:["Без токенов в DS (сырые значения в CSS, в Figma тоже сырые): высота 453, радиусы 160 / 48, зазор 48 между текстом и стопкой, градиенты зимы, весны и лета, тень украшения. Тень карточек стопки — ",n.jsx(e.code,{children:"--shadow-knob"})," (у Figma она на 0.7 px меньше по вертикали), серый скелетона — токены ",n.jsx(e.code,{children:"Skeleton"}),"."]}),`
`,n.jsx(e.h2,{id:"skeleton",children:"Skeleton"}),`
`,n.jsx(r,{of:h}),`
`,n.jsxs(e.p,{children:["В Figma у скелетона передняя карточка 80 px и фото 64. В коде скелетон той же геометрии, что загруженный баннер (73 и 54), чтобы при загрузке ничего не прыгало. Серая заливка и блики — общий ",n.jsx(e.code,{children:"Skeleton"})," DS, блик бежит по всему баннеру одной полосой; при reduced motion он стоит."]}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.h3,{id:"главная-выходные",children:"Главная «Выходные»"}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h3,{id:"одна-экскурсия",children:"Одна экскурсия"}),`
`,n.jsx(r,{of:p}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Стопка — ",n.jsx(e.code,{children:'role="group"'})," с ",n.jsx(e.code,{children:'aria-roledescription="карусель"'}),". Фокус и диктор видят только переднюю карточку: кнопка (или ссылка) с названием и ценой. Карточки сзади ",n.jsx(e.code,{children:"aria-hidden"})," и вне порядка Tab (",n.jsx(e.code,{children:'tabindex="-1"'}),"); это просто белые листы без фото и текста, видны только края."]}),`
`,n.jsx(e.li,{children:"Смена карточек не объявляется вслух: раз в 3 секунды это было бы навязчиво."}),`
`,n.jsx(e.li,{children:"Фокус с клавиатуры на баннере останавливает стопку: карточка не улетит, пока на ней фокус."}),`
`,n.jsx(e.li,{children:"Заголовок баннера — кнопка: подборку можно открыть с клавиатуры."}),`
`]})]})}function A(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{A as default};
