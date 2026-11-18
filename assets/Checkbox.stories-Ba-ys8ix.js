import{r as $,j as e}from"./iframe-DuqTOznb.js";import{S as M}from"./ScrollMatrix-BkRWturZ.js";import{C as n}from"./Checkbox-C1X2mrZB.js";const{expect:l,fn:A,userEvent:h,waitFor:L,within:W}=__STORYBOOK_MODULE_TEST__,H={title:"Components/Checkbox",component:n,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=416-30"}},args:{size:24,defaultChecked:!1,disabled:!1,children:"Трансфер от отеля",onCheckedChange:A()},argTypes:{size:{control:"inline-radio",options:[24,20]},children:{control:"text"},checked:{control:!1},forcePressed:{control:!1}}},s=({children:t})=>e.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:t}),u={},r={name:"Все состояния",parameters:{controls:{disable:!0}},render:()=>e.jsx(M,{children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto repeat(5, 76px)",gap:"24px 8px",alignItems:"center",justifyItems:"center"},children:[e.jsx("span",{}),e.jsx(s,{children:"Пусто"}),e.jsx(s,{children:"Отмечен"}),e.jsx(s,{children:"Нажат"}),e.jsx(s,{children:"Disabled"}),e.jsx(s,{children:"Disabled, отмечен"}),[24,20].map(t=>e.jsx(z,{size:t},t))]})})};function z({size:t}){return e.jsxs(e.Fragment,{children:[e.jsx(s,{children:t}),e.jsx(n,{size:t,"aria-label":`${t}, пусто`}),e.jsx(n,{size:t,defaultChecked:!0,"aria-label":`${t}, отмечен`}),e.jsx(n,{size:t,forcePressed:!0,"aria-label":`${t}, нажат`}),e.jsx(n,{size:t,disabled:!0,"aria-label":`${t}, недоступен`}),e.jsx(n,{size:t,disabled:!0,defaultChecked:!0,"aria-label":`${t}, недоступен, отмечен`})]})}const q=[["Проживание",20],["Питание",20],["Бассейн и СПА",36],["Гид",42],["Подъёмник",7],["Инструктор",7],["Экипировка",44],["Фото и видео",3]],o={name:"Кейс: фильтр «Удобства»",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[c,d]=$.useState(new Set(["Гид"]));return e.jsxs("div",{style:{display:"grid",gap:4,width:361,maxWidth:"100%"},children:[e.jsxs("span",{className:"im-16-b",style:{marginBottom:8},children:["Удобства",c.size?` · ${c.size}`:""]}),q.map(([a,p])=>e.jsxs(n,{size:20,checked:c.has(a),onCheckedChange:I=>d(N=>{const m=new Set(N);return I?m.add(a):m.delete(a),m}),style:{minHeight:44},children:[a," ",e.jsx("span",{className:"im-16-m",style:{color:"var(--control-text-tertiary)"},children:p})]},a))]})}},i={name:"Тест: тап, пробел, подпись",args:{children:"Можно с детьми"},play:async({canvasElement:t,args:c})=>{const d=W(t),a=d.getByRole("checkbox",{name:"Можно с детьми"});await l(a).not.toBeChecked(),await h.click(d.getByText("Можно с детьми")),await l(a).toBeChecked(),await l(c.onCheckedChange).toHaveBeenLastCalledWith(!0),a.focus(),await h.keyboard(" "),await L(()=>l(a).not.toBeChecked());const p=a.closest("label").querySelector("path");await l(parseFloat(getComputedStyle(p).strokeDashoffset)).toBe(1)}},K=["Playground","States","FilterList","BehaviourTest"];var x,C,g,y,b;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(C=u.parameters)==null?void 0:C.docs)==null?void 0:g.source},description:{story:"Тапни: квадрат заливается, галочка рисуется. Тапни ещё раз — стирается.",...(b=(y=u.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var k,f,w,S,v;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(f=r.parameters)==null?void 0:f.docs)==null?void 0:w.source},description:{story:"The Figma matrix 416:30: Size 24 | 20 × Checked × State Default | Disabled, plus the press.",...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.description}}};var j,B,E,D,F;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Кейс: фильтр «Удобства»',
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
        {OPTIONS.map(([o, n]) => <Checkbox key={o} size={20} checked={picked.has(o)} onCheckedChange={on => setPicked(p => {
        const n = new Set(p);
        if (on) n.add(o);else n.delete(o);
        return n;
      })} style={{
        minHeight: 44
      }}>
            {o}{' '}
            <span className="im-16-m" style={{
          color: 'var(--control-text-tertiary)'
        }}>
              {n}
            </span>
          </Checkbox>)}
      </div>;
  }
}`,...(E=(B=o.parameters)==null?void 0:B.docs)==null?void 0:E.source},description:{story:"A filter list on a 393 screen: the whole row is tappable, the count updates.",...(F=(D=o.parameters)==null?void 0:D.docs)==null?void 0:F.description}}};var T,P,_,O,R;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(P=i.parameters)==null?void 0:P.docs)==null?void 0:_.source},description:{story:"Interaction test: tap draws the check, Space toggles at once, the label toggles too.",...(R=(O=i.parameters)==null?void 0:O.docs)==null?void 0:R.description}}};const V=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:i,FilterList:o,Playground:u,States:r,__namedExportsOrder:K,default:H},Symbol.toStringTag,{value:"Module"}));export{V as C,o as F,u as P,r as S};
