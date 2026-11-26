import{j as e}from"./iframe-DyD5Yel4.js";import{u as c,M as d,C as i,a as o}from"./blocks-CcI75u3-.js";import{D as a,P as t,V as l,C as h}from"./Disclaimer.stories-CiaseaX9.js";import{M as x,U as j}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./FullWidthFrame-BO26oEhV.js";import"./Phone-D_QzrYrn.js";import"./Disclaimer-BsSMNtxi.js";import"./cx-2dOUpm6k.js";import"./mergeRefs-BZQLIp5G.js";import"./Checkbox-CsOUmA-N.js";import"./useControllableState-D9cJCl43.js";import"./useInstantAfterKey-D3FdC2PV.js";import"./usePress-XYzAalw7.js";import"./FloatingContainer-DeRfZ3x8.js";import"./useKeyboardInset-8n5XJZWl.js";import"./Button-grGIhY78.js";import"./motion-C-Q-avtg.js";import"./Pressable-CAjp7WdB.js";import"./tokens-Bc2_NrJ2.js";const m=`/*
 * Disclaimer (Figma «Disclamer» 777:6091). Default: padding 12 12 8 8, a 36 × 36 box (8 around the 20 px checkbox) and the text,
 * 314 px wide at 370. Center: padding 12 32 8 32, the text centred. IM-12 R in both.
 */
.root {
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  font: var(--font-im-12-r);
  letter-spacing: var(--tracking-im-12-r);
}

.row {
  padding: var(--spacing-md) var(--spacing-md) var(--spacing-sm) var(--spacing-sm); /* Figma 777:6091 Default: 12 12 8 8 */
  color: var(--control-text-secondary);
}
.checkbox {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0;
  padding: 0;
}
/* the 20 px box sits in a 36 px cell (8 around it) as in Figma, then the text */
.checkbox > span:first-of-type {
  margin: var(--spacing-sm);
}
/* the DS Checkbox draws its label as IM-16 M in control/text/default; here it is the small legal line */
.checkbox > span:last-of-type {
  font: var(--font-im-12-r);
  letter-spacing: var(--tracking-im-12-r);
  color: var(--control-text-secondary);
}
.checkbox[data-disabled] > span:last-of-type {
  color: var(--control-text-disabled);
}

.center {
  padding: var(--spacing-md) 32px var(--spacing-sm); /* no token: Figma 777:6092, 32 on the sides */
  color: var(--control-text-tertiary);
  text-align: center;
}

/* links in the text: the accent colour, underlined; the colour answers the finger from pointer-down (data-pressed, see useLinkPress) */
.root a {
  position: relative;
  color: var(--control-text-accent);
  text-decoration: underline;
  text-underline-offset: 2px;
  /* a 15 px line of text is a poor target: the padding grows the touch area to 44 px without moving the text */
  padding-block: 14px;
  transition: color calc(var(--disclaimer-motion-link-duration) * var(--motion-scale)) var(--disclaimer-motion-link-easing);
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
.root a[data-pressed] {
  color: var(--color-text-accent-secondary);
}
.root a:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: -12px;
  border-radius: 2px;
}
`;function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(n.h1,{id:"disclaimer",children:"Disclaimer"}),`
`,e.jsxs(n.p,{children:["Мелкая юридическая строка под главной кнопкой: «Я подтверждаю, что ознакомлен(а) и соглашаюсь с правилами…». Либо с флажком, который нужно поставить, либо просто текстом по центру. В Figma набор называется «Disclamer» (",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=777-6091",rel:"nofollow",children:"777:6091"}),"), в коде исправлено."]}),`
`,e.jsx(n.p,{children:"Оси Figma: Property 1 = Default | Center disclamer."}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(o,{of:t}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Где в дизайне."})," «Оформление заказ» 1338:107637 и «Оформление» 244:25370: «Я подтверждаю, что ознакомлен(а) и согла…» над кнопкой оплаты."]}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Disclaimer } from '@mtravel/ui';

// с флажком: кнопку «Оплатить» держи неактивной, пока он не отмечен
<Disclaimer checked={agreed} onCheckedChange={setAgreed}>
  Я подтверждаю, что ознакомлен(а) и соглашаюсь с <a href="/terms">правилами предоставления сервиса MTravel</a>
</Disclaimer>

// просто текст по центру
<Disclaimer variant="center">Нажимая «Оплатить», вы соглашаетесь с <a href="/terms">правилами</a></Disclaimer>
`})}),`
`,e.jsxs(n.p,{children:["Props — объединение двух форм: ",e.jsx(n.code,{children:'variant="center"'})," принимает атрибуты абзаца (",e.jsx(n.code,{children:"ref"})," — это ",e.jsx(n.code,{children:"<p>"}),"), ",e.jsx(n.code,{children:'variant="checkbox"'})," — атрибуты Checkbox (",e.jsx(n.code,{children:"name"}),", ",e.jsx(n.code,{children:"value"}),", ",e.jsx(n.code,{children:"required"}),", ",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"aria-*"}),", ",e.jsx(n.code,{children:"onChange"}),"; ",e.jsx(n.code,{children:"ref"})," — это его ",e.jsx(n.code,{children:"<input>"}),"). ",e.jsx(n.code,{children:"className"})," и ",e.jsx(n.code,{children:"style"})," попадают на внешний элемент."]}),`
`,e.jsxs(n.p,{children:["Внутри настоящий ",e.jsx(n.a,{href:"?path=/docs/components-checkbox--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Checkbox"})," размера 20, DS не рисует второй. Тап по тексту ставит флажок, тап по ссылке открывает ссылку и флажок не трогает."]}),`
`,e.jsx(n.h2,{id:"варианты",children:"Варианты"}),`
`,e.jsx(i,{of:l}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Figma"}),e.jsx(n.th,{children:"Props"}),e.jsx(n.th,{children:"Вид"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property 1=Default"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:'variant="checkbox"'})," (по умолчанию)"]}),e.jsxs(n.td,{children:["флажок 20 px в ячейке 36 и текст IM-12 R ",e.jsx(n.code,{children:"control/text/secondary"}),", отступы 12 12 8 8"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property 1=Center disclamer"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'variant="center"'})}),e.jsxs(n.td,{children:["текст по центру IM-12 R ",e.jsx(n.code,{children:"control/text/tertiary"}),", отступы 12 32 8"]})]})]})]}),`
`,e.jsxs(n.p,{children:["Ссылки внутри текста: ",e.jsx(n.code,{children:"text/accent-primary"}),", подчёркнуты (так в макете оформления, Figma 1648:179926). Недоступный Disclaimer: текст ",e.jsx(n.code,{children:"control/text/disabled"}),"."]}),`
`,e.jsx(n.h2,{id:"анимация",children:"Анимация"}),`
`,e.jsx(n.p,{children:"Своей анимации нет: флажок двигается так, как описано в Checkbox. Ссылка в тексте плавно меняет цвет с первого касания (160 мс), текст не сдвигается."}),`
`,e.jsx(x,{prefix:"--disclaimer-"}),`
`,e.jsx(n.h2,{id:"кейсы",children:"Кейсы"}),`
`,e.jsx(n.p,{children:"Экран оплаты: Disclaimer над главной кнопкой нижней панели (Figma 1338:107637)."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Что"}),e.jsx(n.th,{children:"В Figma"}),e.jsx(n.th,{children:"В коде"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Название"}),e.jsx(n.td,{children:"«Disclamer»"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Disclaimer"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Ссылка в тексте"}),e.jsx(n.td,{children:"в наборе её нет, она сделана переопределением текста в экране"}),e.jsx(n.td,{children:"стили ссылок зашиты в компонент"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Тексты"}),e.jsx(n.td,{children:"у Default и у Center разный цвет и пробелы"}),e.jsx(n.td,{children:"цвета как в макете, пробелы нет"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"FloatingContainer"}),e.jsxs(n.td,{children:["у него уже есть собственные слоты ",e.jsx(n.code,{children:"disclaimer"})," и ",e.jsx(n.code,{children:"disclaimerControl"})]}),e.jsx(n.td,{children:"стоит перевести на этот компонент (это сделает владелец FloatingContainer)"})]})]})]}),`
`,e.jsx(j,{css:m}),`
`,e.jsx(n.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Боковые 32 px в Center (Figma 777:6092). Левый отступ Default теперь 8 (",e.jsx(n.code,{children:"spacing/sm"}),"), раньше в Figma было 7."]}),`
`]}),`
`,e.jsx(n.h2,{id:"доступность",children:"Доступность"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Флажок — настоящий ",e.jsx(n.code,{children:'<input type="checkbox">'})," в ",e.jsx(n.code,{children:"<label>"}),", имя берётся из текста; пробел ставит и снимает."]}),`
`,e.jsx(n.li,{children:"Зона нажатия флажка 44 × 44, вся строка кликабельна."}),`
`,e.jsxs(n.li,{children:["Ссылка получает видимый фокус ",e.jsx(n.code,{children:"border/focus"}),". Строка текста в 15 px слишком мала для пальца, поэтому у ссылки вертикальный отступ 14 px: текст не сдвигается, а зона нажатия вырастает до 44 px."]}),`
`,e.jsxs(n.li,{children:["Нажатие на ссылку окрашивает её с момента касания (атрибут ",e.jsx(n.code,{children:"data-pressed"}),"), а не только по ",e.jsx(n.code,{children:":active"}),": на iOS WebKit ",e.jsx(n.code,{children:":active"})," без слушателя касаний не срабатывает."]}),`
`,e.jsxs(n.li,{children:["Контраст по значениям Figma: ссылка ",e.jsx(n.code,{children:"text/accent-primary"})," на белом 4.0:1 и текст Center ",e.jsx(n.code,{children:"text/tertiary"})," 3.6:1, оба ниже нормы 4.5:1 для мелкого текста. Нужно решение дизайна. Основной текст ",e.jsx(n.code,{children:"text/secondary"})," даёт 5.2:1."]}),`
`,e.jsxs(n.li,{children:["Если флажок обязателен, передай ",e.jsx(n.code,{children:"required"}),", а причину блокировки кнопки скажи текстом, не только серым цветом."]}),`
`]})]})}function V(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{V as default};
