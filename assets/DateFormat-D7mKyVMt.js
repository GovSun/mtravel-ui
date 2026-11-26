import{j as r}from"./iframe-DyD5Yel4.js";import{u as d,M as i,C as t}from"./blocks-CcI75u3-.js";import{D as l,F as c,a as h}from"./DateFormat.stories-DszH7Pxm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./date-DiDJ1Ibz.js";function s(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{of:l}),`
`,r.jsx(n.h1,{id:"даты-и-время",children:"Даты и время"}),`
`,r.jsxs(n.p,{children:["Во всём продукте даты пишутся одинаково, и ",r.jsx(n.strong,{children:"месяц всегда короткий"}),": полное название месяца не показываем нигде. Не собирайте строку руками, используйте функции из ",r.jsx(n.code,{children:"@mtravel/ui"}),". Так одна и та же дата не будет выглядеть по-разному на соседних экранах."]}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`import { formatDate, formatDateRange, formatTime, formatDuration, formatDurationRange } from '@mtravel/ui';

formatDate(search.date);                               // «29 мая» — плашка поиска, история, список заказов
formatDate(slot, { weekday: true });                   // «вс, 5 июл» — поле «Когда», «Дата и время»
formatDate(slot, { weekday: true, time: true });       // «вс, 5 июл, 18:00» — бейдж слота, «Место встречи», заказ
formatDate(payment.date, { year: 'auto' });            // «5 дек 2027» — год только если он не текущий
formatDateRange(from, to);                             // «16 – 25 янв», «16 дек – 25 янв»
formatTime(slot);                                      // «18:00»
formatDuration(3, 'hour');                             // «3 часа»
formatDurationRange(2, 3, 'day');                      // «2 – 3 дня»
`})}),`
`,r.jsx(n.h2,{id:"форматы",children:"Форматы"}),`
`,r.jsx(t,{of:c}),`
`,r.jsxs(n.table,{children:[r.jsx(n.thead,{children:r.jsxs(n.tr,{children:[r.jsx(n.th,{children:"Что"}),r.jsx(n.th,{children:"Пример"}),r.jsx(n.th,{children:"Где"})]})}),r.jsxs(n.tbody,{children:[r.jsxs(n.tr,{children:[r.jsx(n.td,{children:"Дата"}),r.jsx(n.td,{children:"6 июл · 29 мая"}),r.jsx(n.td,{children:"плашка поиска, «Недавно искали», нижняя плашка даты, список заказов, график платежей M+"})]}),r.jsxs(n.tr,{children:[r.jsx(n.td,{children:"С днём недели"}),r.jsx(n.td,{children:"вс, 6 июл"}),r.jsx(n.td,{children:"поле «Когда» (Select), подзаголовок «Дата и время»"})]}),r.jsxs(n.tr,{children:[r.jsx(n.td,{children:"С днём недели и временем"}),r.jsx(n.td,{children:"вс, 6 июл, 18:00"}),r.jsx(n.td,{children:"бейдж слота на фото и на карте, подзаголовок «Место встречи», «Мои заказы»"})]}),r.jsxs(n.tr,{children:[r.jsx(n.td,{children:"Период в одном месяце"}),r.jsx(n.td,{children:"16 – 25 янв"}),r.jsx(n.td,{children:"период в поиске"})]}),r.jsxs(n.tr,{children:[r.jsx(n.td,{children:"Период в разных месяцах"}),r.jsx(n.td,{children:"16 дек – 25 янв"}),r.jsx(n.td,{children:"период в поиске"})]}),r.jsxs(n.tr,{children:[r.jsx(n.td,{children:"С годом"}),r.jsx(n.td,{children:"5 дек 2027"}),r.jsx(n.td,{children:"дата не в текущем году, период через Новый год"})]}),r.jsxs(n.tr,{children:[r.jsx(n.td,{children:"Время"}),r.jsx(n.td,{children:"08:05 · 18:00"}),r.jsx(n.td,{children:"время слота, чипсы времени"})]}),r.jsxs(n.tr,{children:[r.jsx(n.td,{children:"Длительность"}),r.jsx(n.td,{children:"3 часа · 2 дня"}),r.jsx(n.td,{children:"атрибут и факт «Длительность»"})]}),r.jsxs(n.tr,{children:[r.jsx(n.td,{children:"Длительность «от и до»"}),r.jsx(n.td,{children:"2 – 3 часа · 2 – 3 дня"}),r.jsx(n.td,{children:"экскурсии с разной длительностью"})]})]})]}),`
`,r.jsx(n.h2,{id:"правила",children:"Правила"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Месяц — только коротко"}),", без точки: янв, фев, мар, апр, мая, июн, июл, авг, сен, окт, ноя, дек. «Мая» — это короткая форма мая. Никогда «6 июля» и тем более «6 июль»."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"День без нуля в начале:"})," «2 июн», не «02 июн»."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"День недели — первым"}),", коротко и строчными: «вс, 6 июл», не «6 июл, вс» и не «воскресенье»."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Дата и время"})," — через запятую с пробелом: «вс, 6 июл, 18:00». Точку по центру строки не используем."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Время"})," — 24-часовое, ЧЧ:ММ: «08:05», «18:00»."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Год"})," — без запятой, после месяца: «5 дек 2027». Показывается, только когда год не текущий (",r.jsx(n.code,{children:"year: 'auto'"}),") или когда период переходит через Новый год."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Период"})," — короткое тире с пробелами: «16 – 25 янв», «16 дек – 25 янв». Месяц один раз, если он общий."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Длительность"})," — число и слово по правилам русского: 1 час, 3 часа, 5 часов; 1 день, 2 дня, 5 дней. «От и до» — меньшее первым, слово по большему: «2 – 3 часа», «3 – 5 дней»."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Внутри фразы"})," допустим естественный оборот: «Скидка с 4 по 18 августа» в баннере — это текст, а не поле."]}),`
`]}),`
`,r.jsxs(n.p,{children:["Даты берутся в местном времени устройства. ",r.jsx(n.code,{children:"formatDate"})," принимает ",r.jsx(n.code,{children:"Date"}),", строку ISO или число миллисекунд; на неверную дату бросает ",r.jsx(n.code,{children:"RangeError"}),". Для своих подсчётов («1 участник», «12 предложений») есть ",r.jsx(n.code,{children:"pluralize(n, ['участник', 'участника', 'участников'])"}),"."]}),`
`,r.jsx(n.h2,{id:"почему-не-intl",children:"Почему не Intl"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"Intl.DateTimeFormat('ru')"})," даёт короткие месяцы с точкой («6 июл.») и полную форму мая. В интерфейсе нужны формы без точек, поэтому таблица месяцев своя."]}),`
`,r.jsx(t,{of:h})]})}function g(e={}){const{wrapper:n}={...d(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(s,{...e})}):s(e)}export{g as default};
