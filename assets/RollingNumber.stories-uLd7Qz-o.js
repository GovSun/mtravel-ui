import{r as c,j as e}from"./iframe-DuqTOznb.js";import{R as d}from"./RollingNumber-BIb_2A9U.js";import{B as o}from"./Button-CKwNO4NU.js";const{expect:l,userEvent:T,waitFor:A,within:p}=__STORYBOOK_MODULE_TEST__,_=n=>`${n.toLocaleString("ru-RU")} ⃀`,V={title:"Components/RollingNumber",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=535-137"}},args:{value:3,effect:"drum"},argTypes:{value:{control:{type:"number",step:1}},effect:{control:"inline-radio",options:["drum","slide"]},format:{control:!1}}},m=({children:n})=>e.jsx("span",{className:"im-28-b",style:{color:"var(--color-text-primary)"},children:n}),D=({set:n})=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(o,{size:44,variant:"secondary",onClick:()=>n(u=>Math.max(0,u-1)),children:"−1"}),e.jsx(o,{size:44,variant:"secondary",onClick:()=>n(u=>u+1),children:"+1"}),e.jsx(o,{size:44,variant:"secondary",onClick:()=>n(u=>u+10),children:"+10"})]}),s={render:function(u){const[t,i]=c.useState(u.value);return e.jsxs("div",{style:{display:"grid",gap:24,justifyItems:"center"},children:[e.jsx(m,{children:e.jsx(d,{...u,value:t})}),e.jsx(D,{set:i})]})}},r={name:"Эффекты: drum и slide",parameters:{controls:{disable:!0}},render:function(){const[u,t]=c.useState(1990);return e.jsxs("div",{style:{display:"grid",gap:24,justifyItems:"center"},children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32,textAlign:"center"},children:["drum","slide"].map(i=>e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(m,{children:e.jsx(d,{value:u,effect:i,format:_})}),e.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-secondary)"},children:i})]},i))}),e.jsx(D,{set:t})]})}},a={name:"Кейс: 9 → 10 → 9",parameters:{controls:{disable:!0}},render:function(){const[u,t]=c.useState(9);return e.jsxs("div",{style:{display:"grid",gap:24,justifyItems:"center"},children:[e.jsx(m,{children:e.jsx(d,{value:u,"data-testid":"num"})}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(o,{size:44,variant:"secondary",onClick:()=>t(9),children:"9"}),e.jsx(o,{size:44,onClick:()=>t(10),children:"10"})]})]})},play:async({canvasElement:n})=>{const u=p(n).getByTestId("num");await l(u).toHaveTextContent("9"),await T.click(p(n).getByRole("button",{name:"10"})),await A(()=>l(u.querySelector("span:not([aria-hidden])")).toHaveTextContent("10")),await l(u.querySelector('[aria-hidden="true"]')).toBeTruthy()}},k=["Playground","Effects","CasePlaces"];var y,g,v,x,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: function Render(args) {
    const [v, setV] = useState(args.value);
    return <div style={{
      display: 'grid',
      gap: 24,
      justifyItems: 'center'
    }}>
        <Big>
          <RollingNumber {...args} value={v} />
        </Big>
        <Steps set={setV} />
      </div>;
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source},description:{story:"Нажми «+1» и «−1»: меняются только изменившиеся разряды, 19 → 20 катит оба. Быстрые нажатия подхватывают цифру с того места, где она сейчас.",...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};var B,j,h,E,C;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Эффекты: drum и slide',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [v, setV] = useState(1990);
    return <div style={{
      display: 'grid',
      gap: 24,
      justifyItems: 'center'
    }}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 32,
        textAlign: 'center'
      }}>
          {(['drum', 'slide'] as const).map(effect => <div key={effect} style={{
          display: 'grid',
          gap: 8
        }}>
              <Big>
                <RollingNumber value={v} effect={effect} format={som} />
              </Big>
              <span className="im-12-r" style={{
            color: 'var(--color-text-secondary)'
          }}>
                {effect}
              </span>
            </div>)}
        </div>
        <Steps set={setV} />
      </div>;
  }
}`,...(h=(j=r.parameters)==null?void 0:j.docs)==null?void 0:h.source},description:{story:"Два эффекта рядом: барабан (по умолчанию, утверждённый вид Counter) и прямой сдвиг для цен.",...(C=(E=r.parameters)==null?void 0:E.docs)==null?void 0:C.description}}};var S,R,F,b,w;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Кейс: 9 → 10 → 9',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [v, setV] = useState(9);
    return <div style={{
      display: 'grid',
      gap: 24,
      justifyItems: 'center'
    }}>
        <Big>
          <RollingNumber value={v} data-testid="num" />
        </Big>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Button size={44} variant="secondary" onClick={() => setV(9)}>
            9
          </Button>
          <Button size={44} onClick={() => setV(10)}>
            10
          </Button>
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const num = within(canvasElement).getByTestId('num');
    // the number for screen readers is the whole text, the rolling digits are aria-hidden
    await expect(num).toHaveTextContent('9');
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: '10'
    }));
    await waitFor(() => expect(num.querySelector('span:not([aria-hidden])')).toHaveTextContent('10'));
    await expect(num.querySelector('[aria-hidden="true"]')).toBeTruthy();
  }
}`,...(F=(R=a.parameters)==null?void 0:R.docs)==null?void 0:F.source},description:{story:"Кейс «Участники»: число в счётчике. Разряд появляется (9 → 10) и исчезает (10 → 9) с анимацией ширины.",...(w=(b=a.parameters)==null?void 0:b.docs)==null?void 0:w.description}}};const O=Object.freeze(Object.defineProperty({__proto__:null,CasePlaces:a,Effects:r,Playground:s,__namedExportsOrder:k,default:V},Symbol.toStringTag,{value:"Module"}));export{a as C,r as E,s as P,O as R};
