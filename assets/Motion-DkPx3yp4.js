import{j as n}from"./iframe-Dr5ib33t.js";import{u as i,M as r}from"./blocks-BQDa-jFX.js";import{M as t}from"./DocTables-CsguvFim.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAdrHWJM.js";import"./index-Bc0N6I3Z.js";import"./tokens-CNIzVYFy.js";function e(o){const s={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Foundations/Motion"}),`
`,n.jsx(s.h1,{id:"motion",children:"Motion"}),`
`,n.jsxs(s.p,{children:["В Figma нет переменных для длительности и кривых, поэтому motion-токены живут в коде: ",n.jsx(s.code,{children:"src/tokens/motion.css"}),". Они устроены так же, как цвета: базовая шкала, а поверх неё токены компонента."]}),`
`,n.jsx(s.h2,{id:"правила",children:"Правила"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Анимировать, только если есть зачем."})," Анимация подтверждает нажатие, показывает смену состояния или объясняет, откуда что взялось. Если действие повторяется сотни раз в день, анимации нет."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Реакция на касание, а не на отпускание."})," Обратная связь стартует на ",n.jsx(s.code,{children:"pointerdown"})," и укладывается в 100–160 мс."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"UI-анимации короче 300 мс."})," Уход быстрее появления, отпускание мягче нажатия."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Ease-out для всего, что запускает пользователь."})," ",n.jsx(s.code,{children:"ease-in"})," не используем: он медленно стартует ровно тогда, когда человек смотрит."]}),`
`,n.jsxs(s.li,{children:[n.jsxs(s.strong,{children:["Двигаем только ",n.jsx(s.code,{children:"transform"})," и ",n.jsx(s.code,{children:"opacity"}),"."]})," Они не трогают layout и идут на GPU, что важно в WebView на слабых Android."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Анимацию можно прервать."})," Новое действие посреди анимации стартует с текущего положения на экране: CSS transitions или WAAPI от presentation-значения, без keyframes с нуля."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Reduced motion — это не отсутствие обратной связи."})," Движение меняем на короткую смену прозрачности, цвет и прозрачность оставляем."]}),`
`]}),`
`,n.jsx(s.h2,{id:"как-пользоваться-в-коде",children:"Как пользоваться в коде"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-css",children:`.thing {
  transition: transform calc(var(--motion-duration-fast) * var(--motion-scale)) var(--motion-ease-out);
}
`})}),`
`,n.jsxs(s.p,{children:["Длительности в CSS всегда умножаются на ",n.jsx(s.code,{children:"--motion-scale"}),", в JS читаются через ",n.jsx(s.code,{children:"readMotion(el)"})," из ",n.jsx(s.code,{children:"src/lib/motion.ts"}),". Тогда переключатель ",n.jsx(s.strong,{children:"Motion → Замедление ×4"})," в тулбаре замедляет всё сразу, и анимацию можно разобрать покадрово."]}),`
`,n.jsx(s.h2,{id:"токены",children:"Токены"}),`
`,n.jsx(t,{})]})}function m(o={}){const{wrapper:s}={...i(),...o.components};return s?n.jsx(s,{...o,children:n.jsx(e,{...o})}):e(o)}export{m as default};
