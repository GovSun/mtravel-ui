import{j as n,r as w}from"./iframe-Dr5ib33t.js";import{t as j}from"./tokens-CNIzVYFy.js";const p=`/*
 * Motion tokens. Not in Figma yet (Figma variables have no duration/easing type), so they live here
 * and follow the same tiers as colours: base scale → component tokens.
 *
 * Rules behind the values (design-engineering + Apple fluid-interface guidance):
 *   - feedback starts on pointer-down and is fast (≤ 120 ms), the release is slower and settles softly;
 *   - UI motion stays under 300 ms; leaving is a bit faster than entering;
 *   - ease-out for anything that starts on a user action, never ease-in;
 *   - only transform and opacity move; colour changes use a plain ease.
 *
 * --motion-scale multiplies every duration (Storybook «Motion: Замедление ×4» sets it to 4).
 * --motion-reduce is 1 when the user asked for reduced motion: movement becomes a short cross-fade.
 *
 * The trailing comment of each token is shown in the Storybook docs, so it is written in Russian.
 */
:root {
  --motion-scale: 1; /* множитель длительностей, Storybook ставит 4 для замедления */
  --motion-reduce: 0; /* 1 = пользователь включил «Уменьшение движения» */

  /* Base scale */
  --motion-duration-instant: 100ms; /* отклик на касание */
  --motion-duration-fast: 160ms; /* смена цвета и состояния */
  --motion-duration-base: 240ms; /* основное движение в UI */
  --motion-duration-slow: 360ms; /* крупные элементы: шторки, модалки */

  --motion-ease-out: cubic-bezier(0.23, 1, 0.32, 1); /* сильный ease-out: быстрый старт, мягкая посадка */
  --motion-ease-out-soft: cubic-bezier(0.25, 1, 0.5, 1); /* ease-out quart: ровнее, для вращения и прокрутки */
  --motion-ease-in-out: cubic-bezier(0.77, 0, 0.175, 1); /* перемещение по экрану */
  --motion-ease-standard: cubic-bezier(0.25, 0.1, 0.25, 1); /* CSS ease: цвет и прозрачность */

  /* Counter */
  --counter-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: круг 36 → 32 */
  --counter-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: круг обратно в 36 */
  --counter-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --counter-motion-press-scale: 0.8889; /* Figma button_counter Pressed: 32 / 36 */

  --counter-motion-roll-in-duration: 300ms; /* новая цифра доворачивается в центр */
  --counter-motion-roll-out-duration: 260ms; /* старая цифра уходит чуть быстрее */
  --counter-motion-roll-easing: var(--motion-ease-out-soft); /* плавная посадка без перелёта */
  --counter-motion-roll-radius: 20px; /* барабан: радиус цилиндра, цифра скрывается за краем поля 44 px */
  --counter-motion-roll-perspective: 120px; /* барабан: глубина, меньше = сильнее объём */
  --counter-motion-roll-distance: 28px; /* сдвиг (effect="slide"): цифра целиком уходит за поле */
  --counter-motion-roll-blur: 2px; /* размытие в движении на краю, в центре 0; 0px = выключить */

  --counter-motion-state-duration: var(--motion-duration-fast); /* цвета enabled ↔ disabled */
  --counter-motion-state-easing: var(--motion-ease-standard); /* кривая смены цвета */

  /* Button — same press feel as the counter: fast in, softer out */
  --button-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: фон → pressed-токен, кнопка 0.97 */
  --button-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: обратно в default */
  --button-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --button-motion-press-scale: 0.97; /* лёгкое сжатие, иконки и текст сжимаются вместе */
  --button-motion-state-duration: var(--motion-duration-fast); /* default ↔ disabled: цвета */
  --button-motion-loading-duration: 200ms; /* текст ↔ лоадер: смена с blur */

  --button-loader-bar-duration: 1100ms; /* «Линия»: один проход отрезка по дорожке */
  --button-loader-edge-duration: 1300ms; /* «Полоса по краю»: проход по нижней кромке */
  --button-loader-sweep-duration: 1400ms; /* «Перелив»: блик через всю кнопку */
  --button-loader-dots-duration: 1000ms; /* «Точки»: волна по трём точкам */
  --button-loader-spin-duration: 800ms; /* «Спиннер»: один оборот, быстрее = кажется быстрее */

  /* IconButton — press like Button, a bit deeper because the control is small */
  --icon-button-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: кнопка сжимается, фон → pressed */
  --icon-button-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: обратно */
  --icon-button-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --icon-button-motion-press-scale: 0.94; /* предложение: в Figma нет Pressed, маленькой кнопке нужно заметнее, чем 0.97 у Button */
  --icon-button-motion-state-duration: var(--motion-duration-fast); /* default ↔ disabled: цвет иконки */
  --icon-button-motion-state-easing: var(--motion-ease-standard); /* кривая смены цвета */

  /* Like — the heart (FavouriteIcon, LikeButton), the same feel as the detail page */
  --like-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: кнопка сжимается */
  --like-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: обратно */
  --like-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --like-motion-press-scale: 0.94; /* сжатие при нажатии */
  --like-motion-pop-duration: 300ms; /* лайк: залитое сердце «выскакивает» */
  --like-motion-pop-easing: cubic-bezier(0.34, 1.56, 0.64, 1); /* пружина с небольшим перелётом */
  --like-motion-pop-from-scale: 0.85; /* лайк: с какого масштаба сердце вырастает до 1 */

  /* Chips — press like Button; the × springs in and the chip edge and its neighbours glide instead of jumping */
  --chips-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: чипс сжимается, фон → control/bg/pressed */
  --chips-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: обратно; выбор перекрашивает фон за это же время */
  --chips-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --chips-motion-press-scale: 0.96; /* предложение: в Figma нет Pressed; между Button 0.97 и IconButton 0.94 */
  --chips-motion-state-duration: var(--motion-duration-fast); /* цвет текста и иконок: обычный ↔ выбранный */
  --chips-motion-trailing-in-duration: 300ms; /* крестик «выпрыгивает» с пружиной, край чипса выезжает */
  --chips-motion-trailing-out-duration: 180ms; /* крестик уходит быстрее, чем появляется */
  --chips-motion-trailing-easing: cubic-bezier(0.34, 1.56, 0.64, 1); /* пружина с небольшим перелётом, как у сердца Like */
  --chips-motion-trailing-from-scale: 0.5; /* с какого масштаба крестик вырастает до 1 */
  --chips-motion-reflow-duration: var(--motion-duration-base); /* соседние чипсы доезжают на новое место */
  --chips-motion-reflow-easing: var(--motion-ease-out); /* кривая перестройки ряда */

  /* Snackbar — the Sonner model (Emil Kowalski, «Building a toast component»), mirrored to the top of the screen */
  --snackbar-motion-duration: 400ms; /* въезд сверху, уход, перестройка стопки: как в Sonner, медленнее обычных 300 мс, потому что уведомление не отвечает на касание */
  --snackbar-motion-easing: var(--motion-ease-standard); /* CSS ease, как в Sonner: спокойнее, чем ease-out у кнопок */
  --snackbar-motion-gap: 14px; /* свёрнутая стопка: насколько каждый следующий снекбар выглядывает снизу */
  --snackbar-motion-scale-step: 0.05; /* свёрнутая стопка: каждый следующий на 5 % меньше */
  --snackbar-motion-expanded-gap: 8px; /* развёрнутая стопка: зазор между снекбарами */
  --snackbar-motion-visible: 3; /* сколько снекбаров видно в стопке, остальные ждут за ними */
  --snackbar-lifetime: 4000ms; /* сколько живёт снекбар (не замедляется); пауза, пока стопка раскрыта или вкладка скрыта */
  --snackbar-motion-swipe-distance: 45px; /* свайп вверх дальше 45 px закрывает */
  --snackbar-motion-swipe-velocity: 0.11; /* или быстрый бросок: скорость больше 0.11 px/мс закрывает на любом пути */
  --snackbar-motion-release-duration: var(--motion-duration-base); /* отпустил палец: возврат на место или уход после броска, быстрее въезда */
  --snackbar-motion-release-easing: var(--motion-ease-out); /* быстрый старт подхватывает скорость пальца, без провала в начале */
  --snackbar-motion-press-scale: 0.96; /* кнопка в снекбаре: текстовая пилюля, как Chips */

  /* CollectionBanner — the stack throws its front card: a short lift, a flight up-right with a turn */
  --collection-banner-interval: 3000ms; /* пауза между бросками (не замедляется); стопка листается сама, пока баннер на экране, и стоит, пока на ней палец */
  --collection-banner-motion-lift-duration: 60ms; /* верхняя карточка приподнимается перед броском: видно, что её сейчас бросят */
  --collection-banner-motion-lift-scale: 1.03; /* насколько она вырастает при подъёме */
  --collection-banner-motion-throw-duration: 240ms; /* полёт: подъём + полёт = 300 мс, предел UI-анимации */
  --collection-banner-motion-throw-easing: cubic-bezier(0.3, 0, 0.5, 0.35); /* разгон за первые кадры, дальше почти ровная скорость, как у брошенной карточки */
  --collection-banner-motion-throw-x: 0.95; /* полёт вправо: доля ширины карточки */
  --collection-banner-motion-throw-y: -1.1; /* и вверх: доля высоты карточки */
  --collection-banner-motion-throw-rotate: 18deg; /* поворот к концу полёта */
  --collection-banner-motion-promote-duration: 300ms; /* следующие карточки встают на место ушедшей */
  --collection-banner-motion-promote-easing: var(--motion-ease-out); /* быстрый старт: следующая освобождается вместе с подъёмом верхней */
  --collection-banner-motion-text-duration: var(--motion-duration-fast); /* текст новой передней карточки проявляется */
  --collection-banner-motion-peek: 16px; /* Figma: каждая следующая карточка выглядывает на 16 px ниже */
  --collection-banner-motion-scale-1: 0.9027; /* Figma: вторая карточка 297 из 329 */
  --collection-banner-motion-scale-2: 0.8085; /* Figma: третья 266 из 329 */
  --collection-banner-motion-wait-scale: 0.88; /* карточки 4–5 ждут за третьей, 234 из 266 и невидимые; выходят из-за неё, когда стопка подтягивается */
  --collection-banner-motion-press-scale: 0.97; /* передняя карточка под пальцем, как Button; тап открывает экскурсию */
  --collection-banner-motion-banner-press-scale: 0.98; /* весь баннер под пальцем: большая поверхность, сжатие меньше */
  --collection-banner-motion-fade-duration: 200ms; /* Reduced motion: карточка гаснет на месте, следующая проявляется */

  /* SwapNumber — a number that changes as a whole: the old one slides out blurring, the new one slides in sharpening */
  --swap-number-motion-in-duration: 140ms; /* новое число въезжает и становится чётким; следующая смена — только когда эта доехала */
  --swap-number-motion-out-duration: 120ms; /* старое уходит чуть быстрее */
  --swap-number-motion-easing: cubic-bezier(0.33, 1, 0.68, 1); /* ease-out cubic: мягче основного ease-out, середина, где числа сливаются, видна дольше */
  --swap-number-motion-distance: 8px; /* сдвиг по вертикали: около половины строки 14 px */
  --swap-number-motion-blur: 3px; /* размытие в движении: на середине старое и новое сливаются в мягкое пятно */

  /* RangeSlider — thumbs follow the finger 1:1 and coast by inertia after a flick; the value tooltip grows out of
     its tip on press and hangs on the thumb like a balloon on a string; its sum changes as a whole (SwapNumber) */
  --slider-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: тень ползунка уходит, он «прижат» (Figma Pressed) */
  --slider-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: тень возвращается */
  --slider-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --slider-motion-glide-duration: var(--motion-duration-base); /* тап по треку, стрелки, отпускание между шагами: ползунок доезжает до значения */
  --slider-motion-glide-easing: var(--motion-ease-out); /* быстрый старт, мягкая посадка */
  --slider-motion-tooltip-in-duration: 200ms; /* подсказка вырастает из своего кончика над ползунком */
  --slider-motion-tooltip-out-duration: 150ms; /* и уходит быстрее, чем появилась */
  --slider-motion-tooltip-easing: var(--motion-ease-out); /* кривая появления и ухода */
  --slider-motion-tooltip-from-scale: 0.8; /* с какого масштаба вырастает (не из нуля) */
  --slider-motion-tooltip-linger: 400ms; /* после отпускания ещё видна, чтобы прочитать сумму (не замедляется) */
  --slider-motion-follow-response: 200ms; /* пружина: за сколько подсказка догоняет ползунок (не длительность) */
  --slider-motion-follow-damping: 0.86; /* чуть меньше 1: на ходу отстаёт, в конце мягко догоняет, перелёт меньше 1 % */
  --slider-motion-tilt: 0.02; /* шарик на нитке: подсказка наклоняется против движения, градусов на каждый px/с скорости */
  --slider-motion-tilt-max: 14deg; /* наибольший наклон */
  --slider-motion-swing-response: 320ms; /* пружина наклона: как быстро подсказка выпрямляется (не длительность) */
  --slider-motion-swing-damping: 0.5; /* меньше 1: когда ползунок встал, подсказка чуть качается, как шарик */
  --slider-motion-flick-velocity: 0.1; /* отпустили быстрее 0.1 px/мс: ползунок едет дальше по инерции */
  --slider-motion-inertia-rate: 0.99; /* инерция: скорость за каждую мс × 0.99, путь ≈ скорость × 100 мс, потом ползунок встаёт на шаг */
  --slider-motion-stale-velocity: 45ms; /* палец стоял перед отпусканием дольше 45 мс: скорости нет, без инерции (не замедляется) */

  /* BottomSheet — iOS sheet: drawer curve in, a bit faster out, spring after a gesture */
  --sheet-motion-open-duration: 500ms; /* выезд снизу: как у UISheetPresentationController */
  --sheet-motion-close-duration: 400ms; /* уход вниз по тому же пути, быстрее выезда */
  --sheet-motion-easing: cubic-bezier(0.32, 0.72, 0, 1); /* кривая шторки iOS (drawer): резкий старт, длинная мягкая посадка */
  --sheet-motion-spring-response: 380ms; /* пружина возврата в открытое положение: время подхода к цели (не длительность) */
  --sheet-motion-spring-damping: 1; /* демпфирование 1 = без отскока, по умолчанию */
  --sheet-motion-flick-damping: 0.82; /* демпфирование после броска вверх: лёгкий отскок */
  --sheet-motion-exit-accel: 14400; /* уход после жеста: стартовое ускорение, px/с² (около 4 px за кадр на кадр), пружина давала 100 000 */
  --sheet-motion-exit-speed: 1500; /* уход после жеста: скорость у нижнего края, px/с */
  --sheet-motion-dismiss-distance: 0.3; /* закрыть, если оттянули дальше 30 % высоты */
  --sheet-motion-flick-velocity: 0.3; /* бросок: быстрее 0.3 px/мс закрывает после 8 px пути */
  --sheet-motion-soft-flick-velocity: 0.11; /* мягкий бросок: 0.11–0.3 px/мс закрывает после 48 px пути */
  --sheet-motion-soft-flick-distance: 48px; /* путь, с которого засчитывается мягкий бросок */
  --sheet-motion-stale-velocity: 45ms; /* палец стоял дольше перед отпусканием: скорость 0 (не замедляется) */
  --sheet-motion-projection-rate: 0.99; /* замедление для проекции инерции (как у скролла iOS) */
  --sheet-motion-drag-threshold: 10px; /* порог до начала перетаскивания внутри прокручиваемого контента */
  --sheet-motion-drag-threshold-surface: 4px; /* порог на ручке, шапке и футере: шторка идёт за пальцем почти сразу */
  --sheet-motion-rubber-limit: 120px; /* потолок растяжения вверх: дальше шторка не уйдёт */
  --sheet-motion-rubber-factor: 0.55; /* начальное сопротивление: 55 % от движения пальца */
  --sheet-motion-fade-duration: 200ms; /* Reduced motion: появление и уход без движения */

  /* Inputs (Input, Select, Search) — label floats up, the clear × springs in like the Chips ×, colours ease */
  --input-motion-state-duration: var(--motion-duration-fast); /* фон поля: обычный ↔ в фокусе ↔ ошибка */
  --input-motion-state-easing: var(--motion-ease-standard); /* кривая смены цвета */
  --input-motion-label-duration: 220ms; /* подпись-плейсхолдер уезжает вверх и становится маленькой */
  --input-motion-label-easing: var(--motion-ease-out); /* быстрый старт от касания, мягкая посадка */
  --input-motion-label-blur: 1.5px; /* размытие на стыке двух начертаний подписи (16 M ↔ 12 M) */
  --input-motion-clear-in-duration: var(--chips-motion-trailing-in-duration); /* крестик «очистить» выпрыгивает, как в Chips */
  --input-motion-clear-out-duration: var(--chips-motion-trailing-out-duration); /* и уходит быстрее, чем появляется */
  --input-motion-clear-easing: var(--chips-motion-trailing-easing); /* пружина с небольшим перелётом */
  --input-motion-clear-from-scale: var(--chips-motion-trailing-from-scale); /* с какого масштаба вырастает крестик */
  --input-motion-hint-duration: var(--motion-duration-base); /* подсказка и текст ошибки раскрываются под полем */
  --input-motion-press-in-duration: var(--motion-duration-instant); /* Select: палец вниз — фон → control/bg/pressed */
  --input-motion-press-out-duration: var(--motion-duration-base); /* палец вверх — обратно */
  --input-motion-chevron-duration: var(--motion-duration-base); /* Select: шеврон поворачивается вверх при открытии */
  --input-motion-chevron-easing: var(--motion-ease-in-out); /* поворот — движение на месте */

  /* Auto-repeat while a button is held (like UIStepper) */
  --counter-repeat-delay: 400ms; /* удержание: первый повтор (не замедляется) */
  --counter-repeat-interval: 110ms; /* удержание: дальше каждые 110 мс */
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --motion-reduce: 1;
  }
}

/* Storybook toolbar overrides (set on <html>) */
:root[data-motion='slow'] {
  --motion-scale: 4;
}
:root[data-motion='reduce'] {
  --motion-reduce: 1;
}
:root[data-motion='normal'] {
  --motion-reduce: 0;
}
`,k="_wrap_3v9qb_1",y="_search_3v9qb_5",_="_table_3v9qb_16",S="_swatch_3v9qb_42",N="_chain_3v9qb_50",B="_muted_3v9qb_61",C="_bar_3v9qb_65",$="_curve_3v9qb_72",q="_curveBox_3v9qb_77",T="_curveLine_3v9qb_82",a={wrap:k,search:y,table:_,swatch:S,chain:N,muted:B,bar:C,curve:$,curveBox:q,curveLine:T},h=j,u=new Map(h.map(o=>[o.cssVar,o])),b=o=>{const r=[];let i=o;for(;i!=null&&i.alias;)r.push(i.alias),i=u.get(i.alias);return r},g=o=>/^(#|rgba?\()/.test(o);function F({tier:o,prefix:r,names:i}){const s=h.filter(e=>(!o||e.tier===o)&&(!r||e.cssVar.startsWith(r))&&(!i||i.includes(e.cssVar))),[c,m]=w.useState(""),l=c?s.filter(e=>`${e.cssVar} ${e.figma} ${e.resolved}`.toLowerCase().includes(c.toLowerCase())):s;return n.jsxs("div",{className:a.wrap,children:[s.length>12&&n.jsx("input",{className:a.search,placeholder:`Поиск по ${s.length} токенам`,value:c,onChange:e=>m(e.target.value)}),n.jsxs("table",{className:a.table,children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{}),n.jsx("th",{children:"CSS"}),n.jsx("th",{children:"Ссылается на"}),n.jsx("th",{children:"Значение"}),n.jsx("th",{children:"Figma"})]})}),n.jsx("tbody",{children:l.map(e=>n.jsxs("tr",{children:[n.jsx("td",{children:g(e.resolved)?n.jsx("span",{className:a.swatch,style:{background:e.resolved}}):null}),n.jsx("td",{children:n.jsx("code",{children:e.cssVar})}),n.jsx("td",{className:a.chain,children:b(e).map(t=>n.jsx("code",{children:t},t))}),n.jsx("td",{children:n.jsx("code",{children:e.resolved})}),n.jsx("td",{className:a.muted,children:e.figma})]},e.cssVar))})]})]})}function z({css:o,also:r=[]}){const s=[...(Array.isArray(o)?o:[o]).join(`
`).matchAll(/var\((--[a-z0-9-]+)/g)].map(t=>t[1]),c=[...new Set([...s,...r])].filter(t=>!t.startsWith("--_")&&!t.startsWith("--tracking-")&&!t.startsWith("--font-family")&&!x.has(t)),m=c.filter(t=>u.has(t)),l=c.filter(t=>!u.has(t)),e=m.map(t=>u.get(t)).filter(Boolean);return n.jsxs("div",{className:a.wrap,children:[n.jsxs("table",{className:a.table,children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{}),n.jsx("th",{children:"CSS"}),n.jsx("th",{children:"Ссылается на"}),n.jsx("th",{children:"Значение"}),n.jsx("th",{children:"Figma"})]})}),n.jsx("tbody",{children:e.map(t=>n.jsxs("tr",{children:[n.jsx("td",{children:g(t.resolved)?n.jsx("span",{className:a.swatch,style:{background:t.resolved}}):null}),n.jsx("td",{children:n.jsx("code",{children:t.cssVar})}),n.jsx("td",{className:a.chain,children:b(t).map(d=>n.jsx("code",{children:d},d))}),n.jsx("td",{children:n.jsx("code",{children:t.resolved})}),n.jsx("td",{className:a.muted,children:t.figma})]},t.cssVar))})]}),l.length>0&&n.jsxs("p",{className:a.muted,children:["Нет в выгрузке из Figma: ",l.map(t=>n.jsx("code",{children:t},t))]})]})}const v=(()=>{const o=p.slice(p.indexOf(":root {"),p.indexOf("@media")),r=/(--[a-z0-9-]+):\s*([^;]+);\s*(?:\/\*\s*(.*?)\s*\*\/)?/g,i=[];for(let s=r.exec(o);s;s=r.exec(o))i.push({name:s[1],value:s[2].trim(),comment:s[3]??""});return i})(),x=new Map(v.map(o=>[o.name,o])),f=(o,r=0)=>{const i=/^var\((--[a-z0-9-]+)\)$/.exec(o);if(!i||r>5)return o;const s=x.get(i[1]);return s?f(s.value,r+1):o};function I({value:o}){const r=/cubic-bezier\(([^)]+)\)/.exec(o);if(!r)return null;const[i,s,c,m]=r[1].split(",").map(Number),l=40,e=(t,d)=>`${t*l},${l-d*l}`;return n.jsxs("svg",{className:a.curve,width:l,height:l,viewBox:`-2 -6 ${l+4} ${l+12}`,"aria-hidden":"true",children:[n.jsx("path",{d:`M${e(0,0)} L${e(1,0)} L${e(1,1)} L${e(0,1)} Z`,className:a.curveBox}),n.jsx("path",{d:`M${e(0,0)} C${e(i,s)} ${e(c,m)} ${e(1,1)}`,className:a.curveLine})]})}function M({prefix:o}){const r=v.filter(i=>o?i.name.startsWith(o):!0);return n.jsxs("table",{className:a.table,children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Токен"}),n.jsx("th",{children:"Значение"}),n.jsx("th",{}),n.jsx("th",{children:"Зачем"})]})}),n.jsx("tbody",{children:r.map(i=>{const s=f(i.value),c=/^(\d+)ms$/.exec(s);return n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:i.name})}),n.jsxs("td",{children:[n.jsx("code",{children:s}),s!==i.value&&n.jsx("div",{className:a.muted,children:i.value})]}),n.jsx("td",{children:c?n.jsx("span",{className:a.bar,style:{width:Math.min(160,+c[1]/3)}}):n.jsx(I,{value:s})}),n.jsx("td",{className:a.muted,children:i.comment})]},i.name)})})]})}F.__docgenInfo={description:"",methods:[],displayName:"TokenTable",props:{tier:{required:!1,tsType:{name:"string"},description:""},prefix:{required:!1,tsType:{name:"string"},description:""},names:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};z.__docgenInfo={description:"The tokens a component really uses: every var(--…) in its CSS (import it with `?raw`), in order of first use,\nshown with what they point to in Figma. Private --_* routes, motion tokens (own table) and tracking (it goes\nwith its --font-*) are skipped; anything that is not a known token is listed so stale names get noticed.",methods:[],displayName:"UsedTokens",props:{css:{required:!0,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},also:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};M.__docgenInfo={description:"",methods:[],displayName:"MotionTokens",props:{prefix:{required:!1,tsType:{name:"string"},description:""}}};export{M,F as T,z as U};
