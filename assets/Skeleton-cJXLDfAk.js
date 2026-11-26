import{j as n}from"./iframe-DyD5Yel4.js";import{u as s,M as i,C as t,a as l}from"./blocks-CcI75u3-.js";import{S as d,P as a,C as c,H as h,L as m,a as x}from"./Skeleton.stories-DaHLwieU.js";import{M as g,U as p}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./stack-ala-archa-CZCiGT1X.js";import"./stack-kel-tor-CWBtKByR.js";import"./Skeleton-dpQW7cMp.js";import"./cx-2dOUpm6k.js";import"./mergeRefs-BZQLIp5G.js";import"./motion-C-Q-avtg.js";import"./Button-grGIhY78.js";import"./Pressable-CAjp7WdB.js";import"./usePress-XYzAalw7.js";import"./tokens-Bc2_NrJ2.js";const j=`/*
 * Skeleton (Figma excursion_card Shimmer=True, e.g. 1067:2041; case «Скелетоны · загрузка главной» in «Выходные»).
 * The Figma sheen is a diagonal gradient 220 → 242 → 225 → 249 → 220 (raw greys in Figma); here it is built from the
 * skeleton tokens (skeleton/bg/start, skeleton/bg/end) and laid out in the GROUP's coordinates (--sk-* set by
 * SkeletonGroup), so it runs on across blocks. Over it a soft highlight sweeps through the whole group as one band.
 */
.group {
  --_sweep: calc(var(--skeleton-motion-sweep-duration) * var(--motion-scale));
  --_pause: calc(var(--skeleton-motion-sweep-pause) * var(--motion-scale));
  position: relative;
}

.bone {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: var(--radius-xs);
  background-color: var(--skeleton-bg-start);
  background-image: linear-gradient(
    103deg,
    var(--skeleton-bg-start) 20%,
    var(--skeleton-bg-end) 41%,
    color-mix(in srgb, var(--skeleton-bg-start) 80%, var(--skeleton-bg-end)) 54%,
    color-mix(in srgb, var(--skeleton-bg-end) 60%, var(--color-bg-surface)) 72%,
    var(--skeleton-bg-start) 90%
  );
  /* the sheen belongs to the group: every block shows its own window of one big gradient */
  background-size: var(--sk-w, 100%) var(--sk-h, 100%);
  background-position: calc(var(--sk-x, 0px) * -1) calc(var(--sk-y, 0px) * -1);
  /* Safari: keep the rounded clip while the highlight moves */
  isolation: isolate;
}

/* the highlight: one group-wide band, positioned in group coordinates, moved with transform (GPU) */
.bone::after {
  content: '';
  position: absolute;
  top: calc(var(--sk-y, 0px) * -1);
  left: calc(var(--sk-x, 0px) * -1);
  width: var(--sk-w, 100%);
  height: var(--sk-h, 100%);
  background: linear-gradient(
    105deg,
    transparent 30%,
    color-mix(in srgb, var(--color-bg-surface) 65%, transparent) 50%,
    transparent 70%
  );
  transform: translateX(-100%);
  animation: sweep calc(var(--_sweep, 1400ms) + var(--_pause, 300ms)) linear infinite;
  will-change: transform;
}
@keyframes sweep {
  0% {
    transform: translateX(-100%);
  }
  82% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* ---------- LoadingSwap: the skeleton and the content share one grid cell during the swap */
.swap {
  --_reveal: calc(var(--skeleton-motion-reveal-duration) * var(--motion-scale));
  --_exit: calc(var(--skeleton-motion-exit-duration) * var(--motion-scale));
  display: grid;
}
.skeletonLayer,
.content {
  grid-area: 1 / 1;
  min-width: 0;
}
.skeletonLayer {
  transition: opacity var(--_exit) var(--motion-ease-out);
}
.skeletonLayer[data-leaving] {
  opacity: 0;
  pointer-events: none;
}

/* content appearing after a load: each staged block rises out of a light blur, one after another */
.content[data-animate] .stage {
  opacity: 0;
  transform: translateY(var(--skeleton-motion-reveal-distance));
  filter: blur(var(--skeleton-motion-reveal-blur));
  transition:
    opacity var(--_reveal) var(--skeleton-motion-reveal-easing),
    transform var(--_reveal) var(--skeleton-motion-reveal-easing),
    filter var(--_reveal) var(--skeleton-motion-reveal-easing);
  transition-delay: calc(var(--i, 0) * var(--skeleton-motion-reveal-stagger) * var(--motion-scale));
}
.content[data-animate][data-revealed] .stage {
  opacity: 1;
  transform: none;
  filter: none;
}

/* reduced motion: no sweep (a slow breathing of the whole group instead) and a plain cross-fade */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .bone::after {
    display: none;
  }
  :global(:root:not([data-motion='normal'])) .group {
    animation: breathe calc(var(--skeleton-motion-breathe-duration) * var(--motion-scale)) var(--motion-ease-standard) infinite alternate;
  }
  :global(:root:not([data-motion='normal'])) .content[data-animate] .stage {
    transform: none;
    filter: none;
    transition: opacity calc(var(--motion-duration-fast) * var(--motion-scale)) linear;
    transition-delay: 0s;
  }
}
:global(:root[data-motion='reduce']) .bone::after {
  display: none;
}
:global(:root[data-motion='reduce']) .group {
  animation: breathe calc(var(--skeleton-motion-breathe-duration) * var(--motion-scale)) var(--motion-ease-standard) infinite alternate;
}
:global(:root[data-motion='reduce']) .content[data-animate] .stage {
  transform: none;
  filter: none;
  transition: opacity calc(var(--motion-duration-fast) * var(--motion-scale)) linear;
  transition-delay: 0s;
}
@keyframes breathe {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.6;
  }
}
`;function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:d}),`
`,n.jsx(e.h1,{id:"skeleton",children:"Skeleton"}),`
`,n.jsxs(e.p,{children:["Серые заглушки на месте контента, пока он грузится. Figma: варианты карточек ",n.jsx(e.code,{children:"Shimmer=True"}),", например ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1067-2041",rel:"nofollow",children:"excursion_card S 1067:2041"}),", и экран ",n.jsx(e.a,{href:"https://www.figma.com/design/RB3kRwjZ9Akvh6n5Ln4M6N/?node-id=3461-430480",rel:"nofollow",children:"«Скелетоны · загрузка главной»"})," в «Выходных»."]}),`
`,n.jsx(t,{of:a}),`
`,n.jsx(l,{of:a}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Skeleton, SkeletonGroup, LoadingSwap } from '@mtravel/ui';

<LoadingSwap
  loading={!data}
  skeleton={
    <SkeletonGroup label="Загрузка экскурсий" style={{ display: 'flex', gap: 8 }}>
      <CardSkeleton /> <CardSkeleton /> <CardSkeleton />
    </SkeletonGroup>
  }
  contentStyle={{ display: 'flex', gap: 8 }}
>
  {data?.map((t) => <ExcursionCard key={t.id} {...t} />)}
</LoadingSwap>
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Skeleton"})," — один блок: ",n.jsx(e.code,{children:"width"}),", ",n.jsx(e.code,{children:"height"}),", ",n.jsx(e.code,{children:"radius"})," (по умолчанию ",n.jsx(e.code,{children:"radius/xs"})," 4, как полоски в Figma; ",n.jsx(e.code,{children:"full"})," — круг)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"SkeletonGroup"})," — раскладка заглушек одной карточки или экрана. Для скринридера это ",n.jsx(e.code,{children:'role="status"'})," с ",n.jsx(e.code,{children:"aria-busy"})," и подписью «Загрузка» (",n.jsx(e.code,{children:"label"}),"). Это единственная обёртка для заглушек: компоненты с состоянием ",n.jsx(e.code,{children:"skeleton"})," используют её, а не свои ",n.jsx(e.code,{children:'role="status"'}),". Вложенная группа не объявляет себя второй раз (",n.jsx(e.code,{children:"announce"}),": по умолчанию ",n.jsx(e.code,{children:"true"})," у внешней и ",n.jsx(e.code,{children:"false"})," у вложенной), поэтому список из 10 строк читается один раз."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Skeleton"}),", ",n.jsx(e.code,{children:"SkeletonGroup"})," и ",n.jsx(e.code,{children:"LoadingSwap"})," принимают ",n.jsx(e.code,{children:"ref"})," и остальные атрибуты на корневой элемент."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"LoadingSwap"})," — переход от заглушек к контенту."]}),`
`]}),`
`,n.jsx(e.p,{children:"Повторяйте форму настоящего контента: те же размеры фото, столько же строк. Тогда переход не сдвигает экран."}),`
`,n.jsx(e.h2,{id:"блик",children:"Блик"}),`
`,n.jsx(t,{of:c}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Перелив"})," — диагональный градиент, как в Figma, из токенов ",n.jsx(e.code,{children:"skeleton/bg/start"})," и ",n.jsx(e.code,{children:"skeleton/bg/end"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Блик"})," — мягкая светлая полоса, она проходит по группе за 1.4 с, потом пауза 0.3 с. Это постоянное движение, поэтому оно линейное."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Один блик на всю группу."})," Перелив и блик рассчитаны в координатах всей группы, поэтому полоса идёт через все карточки сразу, а не мерцает в каждом блоке по-своему."]}),`
`,n.jsxs(e.li,{children:["Блик двигается через ",n.jsx(e.code,{children:"transform"}),", без перерисовки фона, поэтому не нагружает слабые Android."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," блика нет, вся группа медленно «дышит» прозрачностью."]}),`
`]}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.h2,{id:"загрузка--контент",children:"Загрузка → контент"}),`
`,n.jsx(t,{of:m}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Заглушки гаснут быстро, за 150 мс."}),`
`,n.jsx(e.li,{children:"Контент проявляется на их месте: поднимается на 6 px из лёгкого размытия за 240 мс, ease-out. Первые блоки появляются друг за другом с шагом 40 мс, не больше шести."}),`
`,n.jsx(e.li,{children:"Заглушки и контент на время перехода стоят в одной клетке сетки, поэтому ничего не прыгает."}),`
`,n.jsx(e.li,{children:"Если контент уже есть при первой отрисовке (из кеша), он просто показывается, без анимации."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," простая смена прозрачности."]}),`
`]}),`
`,n.jsx(g,{prefix:"--skeleton-"}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.p,{children:"Список строк (заказы, участники): у каждой строки своя группа, потому что блик считается по группе; объявляет загрузку только внешняя."}),`
`,n.jsx(t,{of:x}),`
`,n.jsx(e.p,{children:"Карточки главной и переход в контент показаны выше («Загрузка главной», «Загрузка → контент»)."}),`
`,n.jsx(e.h2,{id:"отличия-от-figma",children:"Отличия от Figma"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"В Figma"}),n.jsx(e.th,{children:"В коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Цвета перелива"}),n.jsx(e.td,{children:"серые #DCDCDC → #F2F2F2 → #E1E1E1 → #F9F8F6, без токенов"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"skeleton/bg/start"}),", ",n.jsx(e.code,{children:"skeleton/bg/end"}),", ",n.jsx(e.code,{children:"bg/surface"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Блик"}),n.jsx(e.td,{children:"статичный градиент (Shimmer=True)"}),n.jsx(e.td,{children:"движется по группе"})]})]})]}),`
`,n.jsx(p,{css:j})]})}function E(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{E as default};
