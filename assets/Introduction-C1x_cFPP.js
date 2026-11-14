import{j as n}from"./iframe-Dr5ib33t.js";import{u as r,M as o}from"./blocks-BQDa-jFX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAdrHWJM.js";import"./index-Bc0N6I3Z.js";function i(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Введение"}),`
`,n.jsx(e.h1,{id:"ds-mtravel-20-для-вебвью",children:"DS Mtravel 2.0 для вебвью"}),`
`,n.jsxs(e.p,{children:[`React-компоненты дизайн-системы для вебвью Mtravel внутри приложения MBank. Источник правды по виду — Figma
`,n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0",rel:"nofollow",children:"DS - Mtravel 2.0"}),", по поведению и анимациям — этот Storybook."]}),`
`,n.jsx(e.h2,{id:"как-читать",children:"Как читать"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Foundations → Токены"}),": цвета (три уровня), размеры, тени, типографика. Всё сгенерировано из Figma."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Foundations → Motion"}),": правила и токены анимаций."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Components"}),": у каждого компонента страница «Документация» (API, состояния, анимация, логика, доступность) и живые stories."]}),`
`,n.jsxs(e.li,{children:["Тулбар ",n.jsx(e.strong,{children:"Motion"}),": замедление ×4 и reduced motion, чтобы разбирать анимации."]}),`
`,n.jsxs(e.li,{children:["Тулбар ",n.jsx(e.strong,{children:"Viewport"}),": iPhone 393 × 852 и Android 360 × 800."]}),`
`]}),`
`,n.jsx(e.h2,{id:"подключение",children:"Подключение"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import '@mtravel/ui/tokens.css'; // один раз в корне приложения
import { Counter } from '@mtravel/ui';
`})}),`
`,n.jsx(e.p,{children:"Стек: React 18+, CSS Modules, без runtime-зависимостей. Анимации на CSS transitions и Web Animations API."}),`
`,n.jsx(e.h2,{id:"обновить-токены-из-figma",children:"Обновить токены из Figma"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Выгрузить переменные из Figma в ",n.jsx(e.code,{children:"tokens/figma-export.json"})," (скрипт выгрузки описан в README)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"npm run tokens"}),": перегенерирует ",n.jsx(e.code,{children:"src/tokens/generated/*.css"})," и выведет ошибки в переменных Figma (неверный code syntax, значение не совпадает с названием)."]}),`
`]})]})}function h(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{h as default};
