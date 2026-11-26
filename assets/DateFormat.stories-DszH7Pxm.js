import{j as a}from"./iframe-DyD5Yel4.js";import{f as t,a as l,b as g,c as n,d as i,p as b}from"./date-DiDJ1Ibz.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,j={title:"Foundations/Даты и время",parameters:{layout:"padded"}},w=new Date(2026,10,17),s=new Date(2026,6,5,18,0),T=[{call:"formatDate(d)",result:t(s),where:"Плашка поиска, «Недавно искали», нижняя плашка даты, списки заказов, график платежей M+"},{call:"formatDate(d, { weekday: true })",result:t(s,{weekday:!0}),where:"Поле «Когда» (Select), подзаголовок «Дата и время»"},{call:"formatDate(d, { weekday: true, time: true })",result:t(s,{weekday:!0,time:!0}),where:"Бейдж слота, подзаголовок «Место встречи», «Мои заказы»"},{call:"formatDateRange(a, b)",result:`${l(new Date(2027,0,16),new Date(2027,0,25))} · ${l(new Date(2026,11,16),new Date(2027,0,25),{now:new Date(2026,11,1)})}`,where:"Период в поиске"},{call:"formatDate(d, { year: true })",result:t(new Date(2027,11,5),{year:!0}),where:"Дата не в текущем году"},{call:"formatTime(d)",result:g(new Date(2026,6,5,8,5)),where:"Время слота, чипсы времени"},{call:"formatDuration(3, 'hour')",result:`${n(3,"hour")} · ${n(2,"day")}`,where:"Длительность экскурсии: атрибут, факт"},{call:"formatDurationRange(2, 3, 'hour')",result:`${i(2,3,"hour")} · ${i(2,3,"day")}`,where:"Длительность «от и до»"}],u={padding:"8px 12px",borderBottom:"1px solid var(--color-border-default)",textAlign:"left",verticalAlign:"top"},r={name:"Форматы",render:()=>a.jsxs("table",{className:"im-14-r",style:{borderCollapse:"collapse",width:"100%",color:"var(--color-text-primary)"},children:[a.jsx("thead",{children:a.jsxs("tr",{className:"im-14-b",children:[a.jsx("th",{style:u,children:"Вызов"}),a.jsx("th",{style:u,children:"Результат"}),a.jsx("th",{style:u,children:"Где"})]})}),a.jsx("tbody",{children:T.map(c=>a.jsxs("tr",{children:[a.jsx("td",{style:u,children:a.jsx("code",{children:c.call})}),a.jsx("td",{style:{...u,whiteSpace:"nowrap"},className:"im-16-m",children:c.result}),a.jsx("td",{style:{...u,color:"var(--color-text-secondary)"},children:c.where})]},c.call))})]})},o={name:"Тест: форматы",render:()=>a.jsx("p",{className:"im-14-r",children:"Проверка форматов дат: результат в панели Interactions."}),play:async()=>{await e(t(s)).toBe("5 июл"),await e(t(s,{weekday:!0})).toBe("вс, 5 июл"),await e(t(s,{weekday:!0,time:!0})).toBe("вс, 5 июл, 18:00"),await e(t(new Date(2026,4,29))).toBe("29 мая"),await e(t(new Date(2026,10,21))).toBe("21 ноя"),await e(t(new Date(2027,11,5),{year:!0})).toBe("5 дек 2027"),await e(t(new Date(2027,11,5),{year:"auto",now:w})).toBe("5 дек 2027"),await e(t(new Date(2026,11,5),{year:"auto",now:w})).toBe("5 дек"),await e(l(new Date(2027,0,16),new Date(2027,0,25))).toBe("16 – 25 янв"),await e(l(new Date(2026,11,16),new Date(2027,0,25))).toBe("16 дек 2026 – 25 янв 2027"),await e(l(new Date(2026,10,16),new Date(2026,11,2))).toBe("16 ноя – 2 дек"),await e(g(new Date(2026,6,5,8,5))).toBe("08:05"),await e(n(3,"hour")).toBe("3 часа"),await e(n(1,"day")).toBe("1 день"),await e(n(5,"day")).toBe("5 дней"),await e(n(21,"hour")).toBe("21 час"),await e(i(3,2,"hour")).toBe("2 – 3 часа"),await e(i(2,5,"day")).toBe("2 – 5 дней"),await e(b(12,["участник","участника","участников"])).toBe("участников"),await e(t("2026-07-05T18:00:00",{weekday:!0})).toBe("вс, 5 июл"),await e(()=>t("не дата")).toThrow(RangeError)}},O=["Formats","FormatTest"];var d,m,D,p,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Форматы',
  render: () => <table className="im-14-r" style={{
    borderCollapse: 'collapse',
    width: '100%',
    color: 'var(--color-text-primary)'
  }}>
      <thead>
        <tr className="im-14-b">
          <th style={cell}>Вызов</th>
          <th style={cell}>Результат</th>
          <th style={cell}>Где</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map(r => <tr key={r.call}>
            <td style={cell}>
              <code>{r.call}</code>
            </td>
            <td style={{
          ...cell,
          whiteSpace: 'nowrap'
        }} className="im-16-m">
              {r.result}
            </td>
            <td style={{
          ...cell,
          color: 'var(--color-text-secondary)'
        }}>{r.where}</td>
          </tr>)}
      </tbody>
    </table>
}`,...(D=(m=r.parameters)==null?void 0:m.docs)==null?void 0:D.source},description:{story:"Every format on one date (вс, 5 июл 2026, 18:00), and where each one goes.",...(y=(p=r.parameters)==null?void 0:p.docs)==null?void 0:y.description}}};var h,B,x,f,E;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Тест: форматы',
  render: () => <p className="im-14-r">Проверка форматов дат: результат в панели Interactions.</p>,
  play: async () => {
    await expect(formatDate(SLOT)).toBe('5 июл');
    await expect(formatDate(SLOT, {
      weekday: true
    })).toBe('вс, 5 июл');
    await expect(formatDate(SLOT, {
      weekday: true,
      time: true
    })).toBe('вс, 5 июл, 18:00');
    await expect(formatDate(new Date(2026, 4, 29))).toBe('29 мая');
    await expect(formatDate(new Date(2026, 10, 21))).toBe('21 ноя');
    await expect(formatDate(new Date(2027, 11, 5), {
      year: true
    })).toBe('5 дек 2027');
    await expect(formatDate(new Date(2027, 11, 5), {
      year: 'auto',
      now: NOW
    })).toBe('5 дек 2027');
    await expect(formatDate(new Date(2026, 11, 5), {
      year: 'auto',
      now: NOW
    })).toBe('5 дек');
    await expect(formatDateRange(new Date(2027, 0, 16), new Date(2027, 0, 25))).toBe('16 – 25 янв');
    await expect(formatDateRange(new Date(2026, 11, 16), new Date(2027, 0, 25))).toBe('16 дек 2026 – 25 янв 2027');
    await expect(formatDateRange(new Date(2026, 10, 16), new Date(2026, 11, 2))).toBe('16 ноя – 2 дек');
    await expect(formatTime(new Date(2026, 6, 5, 8, 5))).toBe('08:05');
    await expect(formatDuration(3, 'hour')).toBe('3 часа');
    await expect(formatDuration(1, 'day')).toBe('1 день');
    await expect(formatDuration(5, 'day')).toBe('5 дней');
    await expect(formatDuration(21, 'hour')).toBe('21 час');
    await expect(formatDurationRange(3, 2, 'hour')).toBe('2 – 3 часа');
    await expect(formatDurationRange(2, 5, 'day')).toBe('2 – 5 дней');
    await expect(pluralize(12, ['участник', 'участника', 'участников'])).toBe('участников');
    await expect(formatDate('2026-07-05T18:00:00', {
      weekday: true
    })).toBe('вс, 5 июл');
    await expect(() => formatDate('не дата')).toThrow(RangeError);
  }
}`,...(x=(B=o.parameters)==null?void 0:B.docs)==null?void 0:x.source},description:{story:"Asserts every format and rule on fixed dates.",...(E=(f=o.parameters)==null?void 0:f.docs)==null?void 0:E.description}}};const A=Object.freeze(Object.defineProperty({__proto__:null,FormatTest:o,Formats:r,__namedExportsOrder:O,default:j},Symbol.toStringTag,{value:"Module"}));export{A as D,r as F,o as a};
