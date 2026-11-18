import{j as n,r as w}from"./iframe-DuqTOznb.js";import{t as k}from"./tokens-INIU3VNa.js";const p=`/*
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

  /* CollectionBanner — the stack throws its front card: a short lift, a flight up-right with a turn */
  --collection-banner-interval: 3000ms; /* пауза между бросками (не замедляется); стопка листается сама, пока баннер на экране, и стоит, пока на ней палец */
  --collection-banner-motion-lift-duration: 60ms; /* верхняя карточка приподнимается перед броском: видно, что её сейчас бросят */
  --collection-banner-motion-lift-scale: 1.03; /* насколько она вырастает при подъёме */
  --collection-banner-motion-throw-duration: 240ms; /* полёт: подъём + полёт = 300 мс, предел UI-анимации */
  --collection-banner-motion-throw-easing: cubic-bezier(0.3, 0, 0.5, 0.35); /* разгон за первые кадры, дальше почти ровная скорость, как у брошенной карточки */
  --collection-banner-motion-throw-past: 48px; /* карточка улетает за край экрана (ближайший обрезающий контейнер или окно) и ещё на 48 px дальше */
  --collection-banner-motion-throw-max: 2; /* на широком экране не дальше двух ширин карточки: там она гаснет по дороге */
  --collection-banner-motion-throw-rise: 0.25; /* вверх на четверть пути вправо */
  --collection-banner-motion-throw-rotate: 24deg; /* поворот к концу полёта */
  --collection-banner-motion-throw-fade-start: 0.45; /* первые 45 % полёта карточка непрозрачная */
  --collection-banner-motion-throw-edge-opacity: 0.45; /* к 90 % полёта, у края экрана, она ещё видна на 45 %; до нуля гаснет уже за краем */
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
  --swap-number-motion-in-duration: 180ms; /* новое число въезжает и становится чётким */
  --swap-number-motion-out-duration: 140ms; /* старое уходит чуть быстрее; проявление нового короче, поэтому вместе они не темнеют */
  --swap-number-motion-easing: cubic-bezier(0.33, 1, 0.68, 1); /* ease-out cubic: мягче основного ease-out, середина, где числа сливаются, видна дольше */
  --swap-number-motion-distance: 8px; /* сдвиг по вертикали: около половины строки 14 px */
  --swap-number-motion-blur: 3px; /* размытие в движении: на середине старое и новое сливаются в мягкое пятно */
  --swap-number-motion-interval: 100ms; /* значение меняется каждый кадр (тянут слайдер): смена не чаще раза в 100 мс (не замедляется) */
  --swap-number-motion-busy-blur: 1px; /* пока значение меняется, число остаётся мягким, как крутящееся колесо, и не вспыхивает чётким между сменами */
  --swap-number-motion-busy-opacity: 0.72; /* и чуть приглушено */
  --swap-number-motion-settle-duration: 220ms; /* значение остановилось: число становится чётким, ширина подстраивается под него */

  /* RangeSlider — thumbs follow the finger 1:1 and coast by inertia after a flick; the value tooltip grows out of
     its tip on press and hangs on the thumb like a balloon on a string; its sum counts in place, like a counter */
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

  /* Field — a text field: the label floats up, the clear × springs in like the Chips ×, colours ease */
  --field-motion-state-duration: var(--motion-duration-fast); /* фон поля: обычный ↔ ошибка ↔ недоступно */
  --field-motion-state-easing: var(--motion-ease-standard); /* кривая смены цвета */
  --field-motion-label-duration: 220ms; /* подпись-плейсхолдер уезжает вверх и становится маленькой */
  --field-motion-label-easing: var(--motion-ease-out); /* быстрый старт от касания, мягкая посадка */
  --field-motion-label-blur: 1.5px; /* размытие на стыке двух начертаний подписи (16 M ↔ 12 M) */
  --field-motion-clear-in-duration: var(--chips-motion-trailing-in-duration); /* крестик «очистить» выпрыгивает, как в Chips */
  --field-motion-clear-out-duration: var(--chips-motion-trailing-out-duration); /* и уходит быстрее, чем появляется */
  --field-motion-clear-easing: var(--chips-motion-trailing-easing); /* пружина с небольшим перелётом */
  --field-motion-clear-from-scale: var(--chips-motion-trailing-from-scale); /* с какого масштаба вырастает крестик */
  --field-motion-hint-duration: var(--motion-duration-base); /* подсказка и текст ошибки раскрываются под полем */

  /* Select — a choice field, a button: the press, the chevron, the hint */
  --select-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: фон → control/bg/pressed */
  --select-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: обратно; так же меняются ошибка и недоступно */
  --select-motion-state-easing: var(--motion-ease-standard); /* кривая смены цвета */
  --select-motion-chevron-duration: var(--motion-duration-base); /* шеврон поворачивается вверх, пока список открыт */
  --select-motion-chevron-easing: var(--motion-ease-in-out); /* поворот — движение на месте */
  --select-motion-hint-duration: var(--motion-duration-base); /* подсказка и текст ошибки раскрываются под полем */

  /* Search — the clear × springs in */
  --search-motion-state-duration: var(--motion-duration-fast); /* цвета поля: обычный ↔ недоступно */
  --search-motion-state-easing: var(--motion-ease-standard); /* кривая смены цвета */
  --search-motion-clear-in-duration: var(--chips-motion-trailing-in-duration); /* крестик «очистить» выпрыгивает, как в Chips */
  --search-motion-clear-out-duration: var(--chips-motion-trailing-out-duration); /* и уходит быстрее, чем появляется */
  --search-motion-clear-easing: var(--chips-motion-trailing-easing); /* пружина с небольшим перелётом */
  --search-motion-clear-from-scale: var(--chips-motion-trailing-from-scale); /* с какого масштаба вырастает крестик */

  /* Checkbox — the box fills, then the check draws itself like a pen: the short stroke, a beat at the corner, the long one */
  --checkbox-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: квадрат чуть сжимается */
  --checkbox-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: обратно */
  --checkbox-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --checkbox-motion-press-scale: 0.9; /* элемент 20–24 px: меньшее сжатие на нём не видно */
  --checkbox-motion-fill-duration: 120ms; /* заливка: серый ↔ синий, первым делом — отклик на тап */
  --checkbox-motion-draw-duration: 260ms; /* галочка рисуется: короткий штрих, сгиб, длинный штрих */
  --checkbox-motion-draw-delay: 30ms; /* рисование начинается, когда заливка уже пошла */
  --checkbox-motion-draw-easing: linear(0, 0.084 5%, 0.155 10%, 0.212 15%, 0.256 20%, 0.286 25%, 0.304 30%, 0.308 34%, 0.428 40%, 0.537 46%, 0.634 52%, 0.746 60%, 0.857 70%, 0.939 80%, 0.987 90%, 1); /* как перо: короткий штрих замедляется к сгибу (31 % длины), длинный — новый разгон и мягкая посадка */
  --checkbox-motion-erase-duration: 140ms; /* снятие: галочка стирается быстрее, чем рисуется */
  --checkbox-motion-erase-easing: var(--motion-ease-out); /* кривая стирания */

  /* Radio — the dot is punched in: it appears big and is driven down into a small dot, slightly past it, and settles */
  --radio-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: кружок чуть сжимается */
  --radio-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: обратно */
  --radio-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --radio-motion-press-scale: 0.9; /* элемент 20 px: меньшее сжатие на нём не видно */
  --radio-motion-fill-duration: 120ms; /* заливка: серый ↔ синий */
  --radio-motion-dot-in-duration: 300ms; /* точка «вбивается»: из 16 px в 8 px */
  --radio-motion-dot-easing: cubic-bezier(0.34, 1.56, 0.64, 1); /* с перелётом: точка проскакивает меньше 8 px и встаёт на место, как будто её вбили */
  --radio-motion-dot-from-scale: 2; /* с какого размера начинает точка: 2 × 8 = 16 px, по краю видно синее кольцо 2 px */
  --radio-motion-dot-out-duration: 160ms; /* снятие выбора: точка расширяется и гаснет, быстрее, чем появляется */

  /* Segment control — the white thumb slides to the chosen tab; under the finger it shrinks and can be dragged */
  --segment-control-motion-slide-duration: 300ms; /* плашка переезжает к выбранной вкладке */
  --segment-control-motion-slide-easing: cubic-bezier(0.32, 0.72, 0, 1); /* кривая шторок iOS: быстрый старт, долгая мягкая посадка */
  --segment-control-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: плашка сжимается, другая вкладка тускнеет */
  --segment-control-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: обратно */
  --segment-control-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --segment-control-motion-press-scale: 0.95; /* плашка под пальцем, как в iOS */
  --segment-control-motion-press-opacity: 0.5; /* нажатая невыбранная вкладка тускнеет, как в iOS */

  /* Appbar — one bar, two surfaces: over a cover (transparent, glass buttons) and solid (white). The page flips it at one
     threshold; every element morphs between the two states on the same curve */
  --appbar-motion-morph-duration: 260ms; /* кнопки переезжают, стекло тает, фон проявляется */
  --appbar-motion-morph-easing: cubic-bezier(0.645, 0.045, 0.355, 1); /* ease-in-out: движение на месте, без рывка в начале и в конце */
  --appbar-motion-color-duration: 130ms; /* цвет иконок и текста меняется в короткое окно посередине, чтобы не было серого */
  --appbar-motion-color-delay: 65ms; /* (260 − 130) / 2: окно по центру морфинга */
  --appbar-motion-title-duration: 160ms; /* заголовок, которого нет над обложкой, проявляется */
  --appbar-motion-title-delay: 100ms; /* и заканчивает вместе с белым фоном (100 + 160 = 260): текст никогда не ярче фона под ним */
  --appbar-motion-title-out-duration: 140ms; /* и уходит быстрее */
  --appbar-motion-title-blur: 2px; /* заголовок проявляется из лёгкого размытия */
  --appbar-motion-press-scale: 0.97; /* кнопка под пальцем, как Button */
  --appbar-motion-reduced-duration: var(--motion-duration-fast); /* Reduced motion: без движения, только цвет и прозрачность */

  /* FloatingContainer — the bottom bar with actions slides up from below the screen edge */
  --floating-container-motion-in-duration: 280ms; /* панель выезжает снизу */
  --floating-container-motion-out-duration: 200ms; /* и уезжает быстрее */
  --floating-container-motion-easing: var(--motion-ease-out); /* быстрый старт, мягкая посадка */
  --floating-container-motion-fade-duration: 120ms; /* Reduced motion: панель проявляется на месте */
  --floating-container-motion-actions-fade: 160ms; /* showActions: кнопки проявляются на месте, пока панель поднимается */

  /* FloatingFilter — the date / participants pill; a segment answers the finger at once */
  --floating-filter-motion-press-opacity: 0.7; /* сегмент под пальцем темнеет */
  --floating-filter-motion-press-duration: var(--motion-duration-instant); /* сразу при касании */
  --floating-filter-motion-release-duration: var(--motion-duration-base); /* и мягко возвращается */

  /* Calendar — days answer the finger; the chosen day's fill grows from the centre */
  --calendar-motion-press-scale: 0.9; /* день под пальцем, как маленькие контролы (Radio, Checkbox) */
  --calendar-motion-press-duration: var(--motion-duration-instant); /* сразу при касании */
  --calendar-motion-release-duration: 240ms; /* возврат после касания */
  --calendar-motion-select-duration: 200ms; /* заливка выбранного дня вырастает из центра */
  --calendar-motion-select-from: 0.6; /* с какого масштаба растёт заливка */
  --calendar-motion-deselect-duration: 140ms; /* прежний день гаснет быстрее */
  --calendar-motion-easing: var(--motion-ease-out); /* быстрый старт, мягкая посадка */

  /* Skeleton — a highlight sweeps across all placeholders of a group as one band; content then appears softly */
  --skeleton-motion-sweep-duration: 1400ms; /* блик проходит через всю группу (постоянное движение: linear, не ускоряется) */
  --skeleton-motion-sweep-pause: 300ms; /* пауза между бликами, чтобы блик не сливался в мерцание */
  --skeleton-motion-reveal-duration: 240ms; /* контент проявляется на месте скелетона */
  --skeleton-motion-reveal-easing: var(--motion-ease-out); /* кривая появления */
  --skeleton-motion-reveal-distance: 6px; /* контент чуть поднимается на место */
  --skeleton-motion-reveal-blur: 2px; /* и проявляется из лёгкого размытия */
  --skeleton-motion-reveal-stagger: 40ms; /* блоки контента появляются друг за другом (до 6) */
  --skeleton-motion-exit-duration: 150ms; /* скелетон гаснет быстрее, чем появляется контент */
  --skeleton-motion-breathe-duration: 1600ms; /* Reduced motion: вместо блика группа медленно «дышит» прозрачностью */

  /* Auto-repeat while a button is held (like UIStepper) */
  --counter-repeat-delay: 400ms; /* удержание: первый повтор (не замедляется) */
  --counter-repeat-interval: 110ms; /* удержание: дальше каждые 110 мс */

  /* Cell, Toggle, Divider (package A) */
  --toggle-motion-move-duration: 240ms; /* кнопка переезжает на 16 px */
  --toggle-motion-move-easing: var(--motion-ease-out); /* быстрый старт, мягкая посадка; прервать можно на любом месте */
  --toggle-motion-fill-duration: var(--motion-duration-fast); /* дорожка: серый ↔ зелёный */
  --toggle-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: кнопка вытягивается */
  --toggle-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: возвращается */
  --toggle-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --toggle-motion-press-stretch: 1.15; /* предложение: в Figma нет Pressed; вытяжка по ходу движения, как у системного переключателя */

  --cell-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: строка отзывается сразу */
  --cell-motion-press-out-duration: 280ms; /* палец вверх: пружина возвращает строку с небольшим перелётом, до 300 мс */
  --cell-motion-press-easing: cubic-bezier(0.34, 1.4, 0.64, 1); /* кривая отпускания: пружина с перелётом (cubic-bezier, если браузер не знает linear()); нажатие идёт по ease-out */
  --cell-motion-press-scale: 0.97; /* предложение: в Figma нет Pressed; строка сжимается до 0.97 и возвращается пружиной */
  --cell-motion-state-duration: var(--motion-duration-fast); /* Reduced motion: строка на мгновение становится прозрачнее вместо сжатия */
  --cell-motion-check-duration: var(--motion-duration-fast); /* галочка выбранной строки: проявляется */
  --cell-motion-check-easing: var(--motion-ease-out); /* кривая проявления галочки */
  --cell-motion-check-from-scale: 0.6; /* с какого масштаба галочка вырастает до 1 */

  /* PillButton: «Все», «Изменить», действие в Snackbar — маленькая таблетка-кнопка, отпускание пружиной, как у строки */
  --pill-button-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: таблетка сжимается сразу */
  --pill-button-motion-press-out-duration: var(--cell-motion-press-out-duration); /* палец вверх: пружина строки, до 300 мс */
  --pill-button-motion-press-easing: var(--cell-motion-press-easing); /* кривая отпускания с небольшим перелётом; нажатие идёт по ease-out */
  --pill-button-motion-press-scale: 0.94; /* предложение: в Figma нет Pressed; элемент 24 px, как IconButton */
  /* end package A */

  /* Title, Badge, Attribute, Disclaimer, Dots (package B) */
  /* SectionTitle: the «Все» link is a small button, it answers the finger like Button */
  --section-title-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: «Все» темнеет и чуть сжимается */
  --section-title-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: обратно */
  --section-title-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --section-title-motion-press-scale: 0.95; /* элемент 52 × 24: мягче 0.95 на нём не видно */

  /* Badge: a glass pill is a button only when it has a handler; a static one does not move */
  --badge-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: плашка сжимается */
  --badge-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: обратно */
  --badge-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --badge-motion-press-scale: 0.95; /* элемент 24–28 px высотой: мягче 0.95 не видно */

  /* Disclaimer: the link in the text answers the finger with colour only (text does not move) */
  --disclaimer-motion-link-duration: var(--motion-duration-fast); /* ссылка: обычная ↔ нажатая */
  --disclaimer-motion-link-easing: var(--motion-ease-standard); /* кривая смены цвета */

  /* Dots: the dot of the current page lights up, the one you left dims; a tap on a dot gives under the finger */
  --dots-motion-switch-duration: var(--motion-duration-fast); /* точка новой страницы разгорается, прежняя гаснет */
  --dots-motion-switch-easing: var(--motion-ease-standard); /* кривая прозрачности (двигается только opacity) */
  --dots-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз на точке: точка сжимается */
  --dots-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: обратно */
  --dots-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --dots-motion-press-scale: 0.7; /* точка 6 px: меньшее сжатие не видно */
  /* end package B */

  /* Excursion, destination, collection cards, price tag, history card (package C1) */
  /* ExcursionCard — the card sinks a little under the finger; the heart and the button have their own press */
  --excursion-card-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: карточка слегка уходит вглубь */
  --excursion-card-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: обратно, мягче */
  --excursion-card-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --excursion-card-motion-press-scale: 0.98; /* предложение: в Figma нет Pressed; большая карточка, поэтому сжатие слабее, чем у кнопки */
  --excursion-card-motion-press-reduced-opacity: 0.85; /* Reduced motion: вместо сжатия карточка чуть бледнеет */

  /* DestinationCard — a photo tile in a row */
  --destination-card-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз */
  --destination-card-motion-press-out-duration: var(--motion-duration-base); /* палец вверх */
  --destination-card-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --destination-card-motion-press-scale: 0.97; /* предложение: плитка поменьше карточки экскурсии, сжатие заметнее */
  --destination-card-motion-press-reduced-opacity: 0.85; /* Reduced motion: карточка чуть бледнеет */

  /* CollectionCard — the mood tile: the photo steps down, the colour card behind it stays */
  --collection-card-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз */
  --collection-card-motion-press-out-duration: var(--motion-duration-base); /* палец вверх */
  --collection-card-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --collection-card-motion-press-scale: 0.95; /* предложение: самая маленькая плитка, ей нужно заметнее */
  --collection-card-motion-press-reduced-opacity: 0.85; /* Reduced motion: плитка чуть бледнеет */

  /* HistoryCard — a recent search chip with a text */
  --history-card-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: фон → pressed, карточка сжимается */
  --history-card-motion-press-out-duration: var(--motion-duration-base); /* палец вверх */
  --history-card-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --history-card-motion-press-scale: 0.97; /* предложение: как у Button */
  /* end package C1 */

  /* Payment and location cards, Avatar (package C2) */
  /* PaymentCard — a card you choose with a finger: it gives under the touch, the frame changes colour and weight on choosing */
  --payment-card-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: карточка сжимается */
  --payment-card-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: возвращается мягче */
  --payment-card-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --payment-card-motion-press-scale: 0.97; /* лёгкое сжатие всей карточки, без смены цвета */
  --payment-card-motion-select-duration: var(--motion-duration-fast); /* рамка: серая 1 px ↔ синяя 2 px */
  --payment-card-motion-select-easing: var(--motion-ease-standard); /* смена цвета рамки */

  /* LocationCard — the «Построить маршрут» pill gives under the touch like a button */
  --location-card-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: плашка сжимается */
  --location-card-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: возвращается мягче */
  --location-card-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */

  /* Avatar — the photo fades in over the gradient when it has loaded */
  --avatar-motion-fade-duration: var(--motion-duration-fast); /* фото проявляется поверх градиента */
  /* end package C2 */

  /* Tab, ProductTabs, FieldWhere, EmptyState (package D) */
  /* Tab (и ряд Tabs) — нажатие как у Chips: быстро вниз, мягче вверх */
  --tab-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: таб сжимается, серый фон → control/bg/pressed */
  --tab-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: обратно; выбор перекрашивает фон за это же время */
  --tab-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --tab-motion-press-scale: 0.96; /* предложение: в Figma нет Pressed; как у Chips */
  --tab-motion-state-duration: var(--motion-duration-fast); /* цвет текста и иконок: обычный ↔ выбранный */

  /* ProductTab — плитка продукта в шапке */
  --product-tab-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: плитка сжимается */
  --product-tab-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: плитка возвращается */
  --product-tab-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --product-tab-motion-press-scale: 0.94; /* предложение: плитка 52 px, заметнее, чем у Button (0.97) */
  --product-tab-motion-state-duration: var(--motion-duration-fast); /* выбор: полупрозрачная плитка ↔ белая с вырезом, только прозрачность */

  /* FieldWhere — круглая кнопка «поменять местами» и сами значения */
  --field-where-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: кнопка сжимается */
  --field-where-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: обратно */
  --field-where-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --field-where-motion-press-scale: 0.9; /* предложение: кнопка 36 px, как у Counter */
  --field-where-motion-swap-duration: 300ms; /* полуоборот иконки и перелёт значений (выше 300 мс UI не уходит) */
  --field-where-motion-swap-turn-easing: var(--motion-ease-out-soft); /* кривая полуоборота иконки */
  --field-where-motion-swap-easing: var(--motion-ease-out); /* кривая перелёта значений */
  --field-where-motion-swap-distance: 12px; /* значение появляется со сдвигом из соседней строки (прозрачность 0 → 1) */

  /* FastButton — нажатие как у Button */
  --fast-button-motion-press-in-duration: var(--motion-duration-instant); /* палец вниз: кнопка сжимается */
  --fast-button-motion-press-out-duration: var(--motion-duration-base); /* палец вверх: обратно */
  --fast-button-motion-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --fast-button-motion-press-scale: 0.97; /* предложение: как у Button */
  /* end package D */

  /* Search summary (package R1) */
  --search-motion-summary-press-in-duration: var(--motion-duration-instant); /* палец вниз: таблетка сжимается */
  --search-motion-summary-press-out-duration: var(--motion-duration-base); /* палец вверх: обратно */
  --search-motion-summary-press-easing: var(--motion-ease-out); /* кривая нажатия и отпускания */
  --search-motion-summary-press-scale: 0.97; /* как у Button: широкая таблетка */
  /* end package R1 */
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

/* Cell: the release spring as a linear() curve (damping 0.45, about 20 % overshoot, settles in the token's duration) */
@supports (transition-timing-function: linear(0, 1)) {
  :root {
    --cell-motion-press-easing: linear(0, 0.126 4.2%, 0.406 8.3%, 0.715 12.5%, 0.97 16.7%, 1.132 20.8%, 1.2 25%, 1.195 29.2%, 1.147 33.3%, 1.083 37.5%, 1.025 41.7%, 0.984 45.8%, 0.962 50%, 0.958 54.2%, 0.965 58.3%, 0.978 62.5%, 0.99 66.7%, 1 70.8%, 1.006 75%, 1.009 79.2%, 1.008 83.3%, 1.006 87.5%, 1.003 91.7%, 1.001 95.8%, 1);
  }
}
`,y="_wrap_3v9qb_1",j="_search_3v9qb_5",C="_table_3v9qb_16",S="_swatch_3v9qb_42",_="_chain_3v9qb_50",B="_muted_3v9qb_61",T="_bar_3v9qb_65",F="_curve_3v9qb_72",N="_curveBox_3v9qb_77",$="_curveLine_3v9qb_82",s={wrap:y,search:j,table:C,swatch:S,chain:_,muted:B,bar:T,curve:F,curveBox:N,curveLine:$},h=k,u=new Map(h.map(o=>[o.cssVar,o])),b=o=>{const r=[];let i=o;for(;i!=null&&i.alias;)r.push(i.alias),i=u.get(i.alias);return r},g=o=>/^(#|rgba?\()/.test(o);function q({tier:o,prefix:r,names:i}){const a=h.filter(t=>(!o||t.tier===o)&&(!r||t.cssVar.startsWith(r))&&(!i||i.includes(t.cssVar))),[d,l]=w.useState(""),m=d?a.filter(t=>`${t.cssVar} ${t.figma} ${t.resolved}`.toLowerCase().includes(d.toLowerCase())):a;return n.jsxs("div",{className:s.wrap,children:[a.length>12&&n.jsx("input",{className:s.search,placeholder:`Поиск по ${a.length} токенам`,value:d,onChange:t=>l(t.target.value)}),n.jsxs("table",{className:s.table,children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{}),n.jsx("th",{children:"CSS"}),n.jsx("th",{children:"Ссылается на"}),n.jsx("th",{children:"Значение"}),n.jsx("th",{children:"Figma"})]})}),n.jsx("tbody",{children:m.map(t=>n.jsxs("tr",{children:[n.jsx("td",{children:g(t.resolved)?n.jsx("span",{className:s.swatch,style:{background:t.resolved}}):null}),n.jsx("td",{children:n.jsx("code",{children:t.cssVar})}),n.jsx("td",{className:s.chain,children:b(t).map(e=>n.jsx("code",{children:e},e))}),n.jsx("td",{children:n.jsx("code",{children:t.resolved})}),n.jsx("td",{className:s.muted,children:t.figma})]},t.cssVar))})]})]})}function z({css:o,also:r=[]}){const a=[...(Array.isArray(o)?o:[o]).join(`
`).matchAll(/var\((--[a-z0-9-]+)/g)].map(e=>e[1]),d=[...new Set([...a,...r])].filter(e=>!e.startsWith("--_")&&!e.startsWith("--tracking-")&&!e.startsWith("--font-family")&&!f.has(e)),l=d.filter(e=>u.has(e)),m=d.filter(e=>!u.has(e)),t=l.map(e=>u.get(e)).filter(Boolean);return n.jsxs("div",{className:s.wrap,children:[n.jsxs("table",{className:s.table,children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{}),n.jsx("th",{children:"CSS"}),n.jsx("th",{children:"Ссылается на"}),n.jsx("th",{children:"Значение"}),n.jsx("th",{children:"Figma"})]})}),n.jsx("tbody",{children:t.map(e=>n.jsxs("tr",{children:[n.jsx("td",{children:g(e.resolved)?n.jsx("span",{className:s.swatch,style:{background:e.resolved}}):null}),n.jsx("td",{children:n.jsx("code",{children:e.cssVar})}),n.jsx("td",{className:s.chain,children:b(e).map(c=>n.jsx("code",{children:c},c))}),n.jsx("td",{children:n.jsx("code",{children:e.resolved})}),n.jsx("td",{className:s.muted,children:e.figma})]},e.cssVar))})]}),m.length>0&&n.jsxs("p",{className:s.muted,children:["Нет в выгрузке из Figma: ",m.map(e=>n.jsx("code",{children:e},e))]})]})}const v=(()=>{const o=p.slice(p.indexOf(":root {"),p.indexOf("@media")),r=/(--[a-z0-9-]+):\s*([^;]+);\s*(?:\/\*\s*(.*?)\s*\*\/)?/g,i=[];for(let a=r.exec(o);a;a=r.exec(o))i.push({name:a[1],value:a[2].trim(),comment:a[3]??""});return i})(),f=new Map(v.map(o=>[o.name,o])),x=(o,r=0)=>{const i=/^var\((--[a-z0-9-]+)\)$/.exec(o);if(!i||r>5)return o;const a=f.get(i[1]);return a?x(a.value,r+1):o};function R({value:o}){const r=/cubic-bezier\(([^)]+)\)/.exec(o);if(!r)return null;const[i,a,d,l]=r[1].split(",").map(Number),m=40,t=(e,c)=>`${e*m},${m-c*m}`;return n.jsxs("svg",{className:s.curve,width:m,height:m,viewBox:`-2 -6 ${m+4} ${m+12}`,"aria-hidden":"true",children:[n.jsx("path",{d:`M${t(0,0)} L${t(1,0)} L${t(1,1)} L${t(0,1)} Z`,className:s.curveBox}),n.jsx("path",{d:`M${t(0,0)} C${t(i,a)} ${t(d,l)} ${t(1,1)}`,className:s.curveLine})]})}function P({prefix:o}){const r=v.filter(i=>o?i.name.startsWith(o):!0);return n.jsxs("table",{className:s.table,children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Токен"}),n.jsx("th",{children:"Значение"}),n.jsx("th",{}),n.jsx("th",{children:"Зачем"})]})}),n.jsx("tbody",{children:r.map(i=>{const a=x(i.value),d=/^(\d+)ms$/.exec(a);return n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:i.name})}),n.jsxs("td",{children:[n.jsx("code",{children:a}),a!==i.value&&n.jsx("div",{className:s.muted,children:i.value})]}),n.jsx("td",{children:d?n.jsx("span",{className:s.bar,style:{width:Math.min(160,+d[1]/3)}}):n.jsx(R,{value:a})}),n.jsx("td",{className:s.muted,children:i.comment})]},i.name)})})]})}q.__docgenInfo={description:"",methods:[],displayName:"TokenTable",props:{tier:{required:!1,tsType:{name:"string"},description:""},prefix:{required:!1,tsType:{name:"string"},description:""},names:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};z.__docgenInfo={description:"The tokens a component really uses: every var(--…) in its CSS (import it with `?raw`), in order of first use,\nshown with what they point to in Figma. Private --_* routes, motion tokens (own table) and tracking (it goes\nwith its --font-*) are skipped; anything that is not a known token is listed so stale names get noticed.",methods:[],displayName:"UsedTokens",props:{css:{required:!0,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},also:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};P.__docgenInfo={description:"",methods:[],displayName:"MotionTokens",props:{prefix:{required:!1,tsType:{name:"string"},description:""}}};export{P as M,q as T,z as U};
