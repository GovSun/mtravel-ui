import{r as z,j as e}from"./iframe-DyD5Yel4.js";import{S as U}from"./ScrollMatrix-Rhyk2V53.js";import{C as t}from"./Checkbox-CsOUmA-N.js";const{expect:h,fn:Y,userEvent:g,waitFor:q,within:K}=__STORYBOOK_MODULE_TEST__,G={title:"Components/Checkbox",component:t,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=416-30"}},args:{size:24,defaultChecked:!1,disabled:!1,children:"Трансфер от отеля",onCheckedChange:Y()},argTypes:{size:{control:"inline-radio",options:[24,20]},children:{control:"text"},checked:{control:!1},forcePressed:{control:!1}}},r=({children:u})=>e.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:u}),o={},i={name:"Все состояния",parameters:{controls:{disable:!0}},render:()=>e.jsx(U,{children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto repeat(5, 76px)",gap:"24px 8px",alignItems:"center",justifyItems:"center"},children:[e.jsx("span",{}),e.jsx(r,{children:"Пусто"}),e.jsx(r,{children:"Отмечен"}),e.jsx(r,{children:"Нажат"}),e.jsx(r,{children:"Disabled"}),e.jsx(r,{children:"Disabled, отмечен"}),[24,20].map(u=>e.jsx(J,{size:u},u))]})})};function J({size:u}){return e.jsxs(e.Fragment,{children:[e.jsx(r,{children:u}),e.jsx(t,{size:u,"aria-label":`${u}, пусто`}),e.jsx(t,{size:u,defaultChecked:!0,"aria-label":`${u}, отмечен`}),e.jsx(t,{size:u,forcePressed:!0,"aria-label":`${u}, нажат`}),e.jsx(t,{size:u,disabled:!0,"aria-label":`${u}, недоступен`}),e.jsx(t,{size:u,disabled:!0,defaultChecked:!0,"aria-label":`${u}, недоступен, отмечен`})]})}const V=["Проживание","Питание","Бассейн и СПА","Гид","Подъёмник","Инструктор","Экипировка","Фото и видео","Аренда авто"],c={name:"Кейс · Фильтры: Удобства",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[a,s]=z.useState(new Set(["Гид"]));return e.jsxs("div",{style:{display:"grid",gap:4,width:361,maxWidth:"100%"},children:[e.jsxs("span",{className:"im-16-b",style:{marginBottom:8},children:["Удобства",a.size?` · ${a.size}`:""]}),V.map(n=>e.jsx(t,{size:24,checked:a.has(n),onCheckedChange:p=>s(x=>{const m=new Set(x);return p?m.add(n):m.delete(n),m}),style:{minHeight:44},children:n},n))]})}},X=[["Легко","Не требует физической подготовки"],["Средне","Нужна базовая физическая подготовка"],["Сложно","Требуется хорошая подготовка"]],d={name:"Кейс · Фильтры: сложность",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[a,s]=z.useState(new Set);return e.jsxs("div",{style:{display:"grid",gap:4,width:361,maxWidth:"100%"},children:[e.jsx("span",{className:"im-16-b",style:{marginBottom:8},children:"Сложность"}),X.map(([n,p])=>e.jsx(t,{size:24,checked:a.has(n),onCheckedChange:x=>s(m=>{const C=new Set(m);return x?C.add(n):C.delete(n),C}),style:{minHeight:56},children:e.jsxs("span",{style:{display:"grid",gap:2},children:[e.jsx("span",{className:"im-16-m",children:n}),e.jsx("span",{className:"im-14-r",style:{color:"var(--color-text-secondary)"},children:p})]})},n))]})}},l={name:"Тест: тап, пробел, подпись",args:{children:"Можно с детьми"},play:async({canvasElement:u,args:a})=>{const s=K(u),n=s.getByRole("checkbox",{name:"Можно с детьми"});await h(n).not.toBeChecked(),await g.click(s.getByText("Можно с детьми")),await h(n).toBeChecked(),await h(a.onCheckedChange).toHaveBeenLastCalledWith(!0),n.focus(),await g.keyboard(" "),await q(()=>h(n).not.toBeChecked());const p=n.closest("label").querySelector("path");await h(parseFloat(getComputedStyle(p).strokeDashoffset)).toBe(1)}},Q=["Playground","States","FilterList","DifficultyList","BehaviourTest"];var y,k,B,b,E;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(B=(k=o.parameters)==null?void 0:k.docs)==null?void 0:B.source},description:{story:"Тапни: квадрат заливается, галочка рисуется. Тапни ещё раз — стирается.",...(E=(b=o.parameters)==null?void 0:b.docs)==null?void 0:E.description}}};var f,S,w,v,F;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Все состояния',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ScrollMatrix>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto repeat(5, 76px)',
      gap: '24px 8px',
      alignItems: 'center',
      justifyItems: 'center'
    }}>
      <span />
      <Caption>Пусто</Caption>
      <Caption>Отмечен</Caption>
      <Caption>Нажат</Caption>
      <Caption>Disabled</Caption>
      <Caption>Disabled, отмечен</Caption>
      {([24, 20] as const).map(size => <Row key={size} size={size} />)}
    </div>
    </ScrollMatrix>
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"The Figma matrix 416:30: Size 24 | 20 × Checked × State Default | Disabled, plus the press.",...(F=(v=i.parameters)==null?void 0:v.docs)==null?void 0:F.description}}};var j,D,A,T,R;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Кейс · Фильтры: Удобства',
  parameters: {
    controls: {
      disable: true
    }
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  render: function Render() {
    const [picked, setPicked] = useState<Set<string>>(new Set(['Гид']));
    return <div style={{
      display: 'grid',
      gap: 4,
      width: 361,
      maxWidth: '100%'
    }}>
        <span className="im-16-b" style={{
        marginBottom: 8
      }}>
          Удобства{picked.size ? \` · \${picked.size}\` : ''}
        </span>
        {AMENITIES.map(o => <Checkbox key={o} size={24} checked={picked.has(o)} onCheckedChange={on => setPicked(p => {
        const n = new Set(p);
        if (on) n.add(o);else n.delete(o);
        return n;
      })} style={{
        minHeight: 44
      }}>
            {o}
          </Checkbox>)}
      </div>;
  }
}`,...(A=(D=c.parameters)==null?void 0:D.docs)==null?void 0:A.source},description:{story:"Figma «Результаты» → «Фильтрация», шторка «Удобства» (638:2975): список Checkbox. Вся строка нажимается, счётчик обновляется.",...(R=(T=c.parameters)==null?void 0:T.docs)==null?void 0:R.description}}};var I,P,_,N,L;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Кейс · Фильтры: сложность',
  parameters: {
    controls: {
      disable: true
    }
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  render: function Render() {
    const [picked, setPicked] = useState<Set<string>>(new Set());
    return <div style={{
      display: 'grid',
      gap: 4,
      width: 361,
      maxWidth: '100%'
    }}>
        <span className="im-16-b" style={{
        marginBottom: 8
      }}>
          Сложность
        </span>
        {DIFFICULTY.map(([title, caption]) => <Checkbox key={title} size={24} checked={picked.has(title)} onCheckedChange={on => setPicked(p => {
        const n = new Set(p);
        if (on) n.add(title);else n.delete(title);
        return n;
      })} style={{
        minHeight: 56
      }}>
            <span style={{
          display: 'grid',
          gap: 2
        }}>
              <span className="im-16-m">{title}</span>
              <span className="im-14-r" style={{
            color: 'var(--color-text-secondary)'
          }}>
                {caption}
              </span>
            </span>
          </Checkbox>)}
      </div>;
  }
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source},description:{story:"Figma «Результаты» → «Фильтрация», шторка «Сложность» (1669:185239): у каждого варианта подпись в две строки.",...(L=(N=d.parameters)==null?void 0:N.docs)==null?void 0:L.description}}};var M,O,W,$,H;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Тест: тап, пробел, подпись',
  args: {
    children: 'Можно с детьми'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const box = canvas.getByRole('checkbox', {
      name: 'Можно с детьми'
    });
    await expect(box).not.toBeChecked();
    await userEvent.click(canvas.getByText('Можно с детьми'));
    await expect(box).toBeChecked();
    await expect(args.onCheckedChange).toHaveBeenLastCalledWith(true);
    box.focus();
    await userEvent.keyboard(' ');
    await waitFor(() => expect(box).not.toBeChecked());
    // from the keyboard the check is gone at once, not erased over 140 ms
    const path = box.closest('label')!.querySelector('path')!;
    await expect(parseFloat(getComputedStyle(path).strokeDashoffset)).toBe(1);
  }
}`,...(W=(O=l.parameters)==null?void 0:O.docs)==null?void 0:W.source},description:{story:"Interaction test: tap draws the check, Space toggles at once, the label toggles too.",...(H=($=l.parameters)==null?void 0:$.docs)==null?void 0:H.description}}};const ne=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:l,DifficultyList:d,FilterList:c,Playground:o,States:i,__namedExportsOrder:Q,default:G},Symbol.toStringTag,{value:"Module"}));export{ne as C,d as D,c as F,o as P,i as S};
