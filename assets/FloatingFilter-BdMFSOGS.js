import{j as n}from"./iframe-DuqTOznb.js";import{u as o,M as l,C as r,a as d}from"./blocks-CaaIEU4k.js";import{F as a,P as t,S as c,a as h,I as p,C as x}from"./FloatingFilter.stories-CERJSDBm.js";import{M as m,U as j}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./FloatingFilter-DF6g2FiI.js";import"./cx-2dOUpm6k.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./date-DiDJ1Ibz.js";import"./Phone-DvUrDP6C.js";import"./photos-Cw5k0SX3.js";import"./stack-ala-archa-CZCiGT1X.js";import"./stack-kel-tor-CWBtKByR.js";import"./useScrolledPast-BbqY5LPy.js";import"./SwapNumber-zCGpbL_Z.js";import"./mergeRefs-BPT53vMC.js";import"./motion-C-Q-avtg.js";import"./time-CsMT4GVj.js";import"./Svg-B1-TtxWQ.js";import"./people-s6FNqSUd.js";import"./Appbar-BYMxUm5k.js";import"./IconButton-BxMc4E4A.js";import"./SearchSummary-oxe_VM3Q.js";import"./mtravel-mark-Cc18rIoX.js";import"./arrows-C0H-naDa.js";import"./general-DYSfllt2.js";import"./paths-BjPgyxdS.js";import"./FloatingContainer-C5m_g9pK.js";import"./useKeyboardInset-DrhQQKuj.js";import"./Button-CKwNO4NU.js";import"./Calendar-Cebrb_nd.js";import"./useControllableState-QyUXWn2y.js";import"./BottomSheet-DD4XR1Mk.js";import"./Cell-DbWJlVzG.js";import"./LeadingIcon-B28I7Mlv.js";import"./Skeleton-D5GPHumj.js";import"./PillButton-BwV4GISW.js";import"./Counter-6eoXZdLB.js";import"./CounterButton-ddQoagoR.js";import"./RollingNumber-BIb_2A9U.js";import"./Toggle-DcBpc41r.js";import"./useInstantAfterKey-D0TlCdRr.js";import"./Checkbox-C1X2mrZB.js";import"./Radio-Bz4AqS0k.js";import"./CellCenter-CXZRRsHl.js";import"./Divider-BbjTiNWY.js";import"./PromoBadge-DMs6_-GK.js";import"./OldPrice-IN1_EWMK.js";import"./tokens-INIU3VNa.js";const g=`/*
 * FloatingFilter (Figma «Appbar/Filter» 1042:1388): 44 px pill, radius full, control/bg/selected; segments 8 / 12 / 8 / 16
 * and 8 / 16 / 8 / 12, gap spacing/xs; 14 px solid icons and IM-16 M labels in control/text/selected; a 20 px divider,
 * border-width/hairline in divider/border/default. Dark theme: the pill turns light (bg/inverse/surface flips) and the
 * text dark (text/inverse/primary flips).
 */
.pill {
  display: inline-flex;
  align-items: center;
  height: 44px;
  border-radius: var(--radius-full);
  background: var(--control-bg-selected);
  color: var(--control-text-selected);
}
.segmentWrap {
  display: inline-flex;
  align-items: center;
}
.divider {
  width: 0;
  height: 20px;
  border-left: var(--border-width-hairline) solid var(--divider-border-default);
}
.segment {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  height: 44px;
  margin: 0;
  padding: var(--spacing-sm) var(--spacing-md) var(--spacing-sm) var(--spacing-lg); /* Figma first segment: 8 12 8 16 */
  border: 0;
  border-radius: var(--radius-full);
  background: none;
  color: inherit;
  font: var(--font-im-16-m);
  letter-spacing: var(--tracking-im-16-m);
  white-space: nowrap;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  transition: opacity calc(var(--floating-filter-motion-release-duration) * var(--motion-scale)) var(--motion-ease-out);
}
.segmentWrap + .segmentWrap > .segment,
.divider + .segment {
  padding: var(--spacing-sm) var(--spacing-lg) var(--spacing-sm) var(--spacing-md); /* second: 8 16 8 12 */
}
/* the finger is on it: the segment dims at once (pointer-down feedback), comes back on release */
.segment[data-pressed],
.segment:focus-visible:active {
  opacity: var(--floating-filter-motion-press-opacity);
  transition-duration: calc(var(--floating-filter-motion-press-duration) * var(--motion-scale));
}
.segment:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: -2px;
}
.segmentIcon {
  display: flex;
  flex: none;
  width: 14px;
  height: 14px;
}
.segmentIcon > svg {
  width: 100%;
  height: 100%;
}
.label {
  display: inline-flex;
}
`;function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:a}),`
`,n.jsx(e.h1,{id:"floatingfilter",children:"FloatingFilter"}),`
`,n.jsx(e.p,{children:"Плашка с тем, что пользователь искал: дата и количество участников. Едет внизу экрана в нижней панели, над ценой и главной кнопкой. Каждая половина — кнопка: дата открывает календарь, участники — их Bottom Sheet."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1042-1388",rel:"nofollow",children:"Appbar/Filter 1042:1388"})," (страница Nav) · в нижней панели — свойство «Filter» у ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=157-12952",rel:"nofollow",children:"FloatingContainer 157:12952"})," · сценарий — «Выходные», ",n.jsx(e.a,{href:"https://www.figma.com/design/RB3kRwjZ9Akvh6n5Ln4M6N/?node-id=2940-107189",rel:"nofollow",children:"Редактирования значений из поиска"}),"."]}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(d,{of:t}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { FloatingContainer, FloatingFilter, SwapNumber, CalendarIcon, UserIcon, formatDate, pluralize } from '@mtravel/ui';

<FloatingContainer
  showActions={coverScrolledAway}
  filter={
    <FloatingFilter
      aria-label="Дата и участники"
      items={[
        { icon: <CalendarIcon size={14} />, label: <SwapNumber value={date.getTime()} format={(t) => formatDate(t)} />, onClick: openCalendar },
        { icon: <UserIcon size={14} />, label: <SwapNumber value={n} format={(v) => \`\${v} \${pluralize(v, ['участник', 'участника', 'участников'])}\`} />, onClick: openParticipants },
      ]}
    />
  }
>
  <Price />
  <Button size={48}>К оформлению</Button>
</FloatingContainer>
`})}),`
`,n.jsx(e.h2,{id:"как-устроена",children:"Как устроена"}),`
`,n.jsx(r,{of:c}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Часть"}),n.jsx(e.th,{children:"Значение"}),n.jsx(e.th,{children:"Токен"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Плашка"}),n.jsx(e.td,{children:"44 px, радиус полный"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"control/bg/selected"}),", ",n.jsx(e.code,{children:"radius/full"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Первый сегмент"}),n.jsx(e.td,{children:"отступы 8 / 12 / 8 / 16, промежуток 4"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"spacing/sm"}),", ",n.jsx(e.code,{children:"spacing/md"}),", ",n.jsx(e.code,{children:"spacing/lg"}),", ",n.jsx(e.code,{children:"spacing/xs"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Второй сегмент"}),n.jsx(e.td,{children:"отступы 8 / 16 / 8 / 12"}),n.jsx(e.td,{children:"то же"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Иконка"}),n.jsxs(e.td,{children:["14 px, Solid: календарь, человек (",n.jsx(e.code,{children:"user"}),", не ",n.jsx(e.code,{children:"users"}),")"]}),n.jsx(e.td,{children:"цвет текста"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Текст"}),n.jsx(e.td,{children:"IM-16 M"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/text/selected"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Разделитель"}),n.jsx(e.td,{children:"20 px, 0.5 px"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"border-width/hairline"}),", ",n.jsx(e.code,{children:"divider/border/default"})]})]})]})]}),`
`,n.jsxs(e.p,{children:["В тёмной теме плашка светлая, текст тёмный: ",n.jsx(e.code,{children:"control/bg/selected"})," → ",n.jsx(e.code,{children:"bg/inverse/surface"})," и ",n.jsx(e.code,{children:"control/text/selected"})," → ",n.jsx(e.code,{children:"text/inverse/primary"})," меняются с темой."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Формат значений — стандарт дат DS: «29 июл», «28 дек – 3 янв» (",n.jsx(e.code,{children:"formatDate"}),", ",n.jsx(e.code,{children:"formatDateRange"}),"), участники вместе, слово по числу (",n.jsx(e.code,{children:"pluralize"}),"): «1 участник», «2 участника», «10 участников»."]}),`
`,n.jsxs(e.li,{children:["Подпись для скринридера: дайте плашке ",n.jsx(e.code,{children:"aria-label"})," («Дата и участники»), а сегменту — что он меняет: «Дата: 29 июл. Изменить». Сегменту с Bottom Sheet — ",n.jsx(e.code,{children:'aria-haspopup="dialog"'}),"."]}),`
`,n.jsxs(e.li,{children:["Сегмент принимает ",n.jsx(e.code,{children:"ref"})," (его ",n.jsx(e.code,{children:"<button>"}),"): верните на него фокус, когда закроется экран календаря."]}),`
`]}),`
`,n.jsx(e.h2,{id:"нажатие",children:"Нажатие"}),`
`,n.jsx(r,{of:h}),`
`,n.jsxs(e.p,{children:["Сегмент темнеет сразу при касании (opacity 0.7 за 100 мс) и мягко возвращается после отпускания (240 мс). Если палец уехал или началась прокрутка, нажатие отменяется. Новое значение после выбора въезжает через ",n.jsx(e.code,{children:"SwapNumber"}),": старое уходит вверх с размытием, новое приходит снизу, плашка плавно меняет ширину."]}),`
`,n.jsx(m,{prefix:"--floating-filter-"}),`
`,n.jsx(e.h2,{id:"в-нижней-панели",children:"В нижней панели"}),`
`,n.jsx(r,{of:p}),`
`,n.jsxs(e.p,{children:["Над плашкой страница затухает (Figma ",n.jsx(e.code,{children:"Wrap"}),": белый 0 % → 100 %, полностью белый с 88 % высоты строки). Заливки у панели нет, поэтому текст страницы плавно уходит под плашку, а тапы и прокрутка проходят сквозь затухание."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"FloatingContainer"})," со свойством ",n.jsx(e.code,{children:"showActions"})," — это Figma «Show buttons» с движением. ",n.jsx(e.code,{children:"false"}),": панель опускается на высоту строки с ценой и кнопкой, и на экране остаётся одна плашка над home-индикатором. ",n.jsx(e.code,{children:"true"}),": строка поднимается за 280 мс, кнопки проявляются на месте."]}),`
`,n.jsx(e.h2,{id:"кейс-детальная-страница",children:"Кейс: детальная страница"}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.p,{children:"Так работает «Выходные», детальная страница:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Обложка на экране."})," Под ней своя жёлтая «К оформлению», поэтому внизу только плашка: ",n.jsx(e.code,{children:"showActions={false}"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Прокрутка."})," Обложка уходит под шапку (",n.jsx(e.code,{children:"useScrolledPast"}),"), и в один момент шапка белеет, а под плашкой поднимается строка с ценой и «К оформлению»."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Тап по дате."})," Справа въезжает экран «Когда» с ",n.jsx(e.a,{href:"?path=/docs/components-calendar--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Calendar"}),": доступны только дни, когда идёт экскурсия. Кнопка внизу «Выбрать 6 авг». «Назад» закрывает без изменений, «Выбрать» возвращает на детали, дата в плашке меняется, фокус встаёт на сегмент даты."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Тап по участникам."})," Открывается ",n.jsx(e.a,{href:"?path=/docs/components-bottomsheet--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Bottom Sheet"})," «Участники»: взрослый (от 1) и ребёнок (от 0), группа до 10 человек. «Сбросить» — к одному взрослому, «Выбрать» меняет плашку и цену, ✕ и свайп вниз закрывают без изменений."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Дальше."})," Выбранные дата и участники подставляются в оформление заказа, вводить их снова не нужно."]}),`
`]}),`
`,n.jsx(e.p,{children:"История открывается в размере iPhone 393 × 852. Экран календаря в ней — имитация перехода хоста (iOS push: 300 мс, новый экран справа, старый сдвигается на четверть влево); в приложении это навигация webview."}),`
`,n.jsx(e.h2,{id:"токены",children:"Токены"}),`
`,n.jsx(j,{css:g})]})}function gn(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{gn as default};
