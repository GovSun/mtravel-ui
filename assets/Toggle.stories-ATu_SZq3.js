import{r as L,j as e}from"./iframe-DyD5Yel4.js";import{S as W}from"./ScrollMatrix-Rhyk2V53.js";import{T as u}from"./Toggle-BLxkVncc.js";const{expect:l,fn:H,userEvent:p,waitFor:K,within:N}=__STORYBOOK_MODULE_TEST__,U={title:"Components/Toggle",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=470-6238"}},args:{defaultChecked:!1,disabled:!1,"aria-label":"Сообщать о снижении цены",onCheckedChange:H()},argTypes:{checked:{control:!1},forcePressed:{control:!1}}},t={},s={name:"Все состояния",parameters:{controls:{disable:!0}},render:()=>e.jsx(W,{children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 72px)",gap:16,alignItems:"center",justifyItems:"center"},children:[["Выключен","Включён","Нажат","Disabled","Disabled, включён"].map(a=>e.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)",textAlign:"center"},children:a},a)),e.jsx(u,{"aria-label":"Выключен"}),e.jsx(u,{"aria-label":"Включён",defaultChecked:!0}),e.jsx(u,{"aria-label":"Нажат",forcePressed:!0}),e.jsx(u,{"aria-label":"Disabled",disabled:!0}),e.jsx(u,{"aria-label":"Disabled, включён",disabled:!0,defaultChecked:!0})]})})},n={name:"Кейсы / Уведомления",parameters:{controls:{disable:!0}},render:function(){const[i,d]=L.useState(!0);return e.jsx(u,{checked:i,onCheckedChange:d,children:"Пуш о снижении цены"})}},r={name:"Тест: тап и пробел",play:async({canvasElement:a,args:i})=>{const c=N(a).getByRole("switch",{name:"Сообщать о снижении цены"});await l(c).not.toBeChecked(),await p.click(c),await l(c).toBeChecked(),await l(i.onCheckedChange).toHaveBeenLastCalledWith(!0),c.focus(),await p.keyboard(" "),await K(()=>l(c).not.toBeChecked())}},o={name:"Тест: имя из подписи",args:{"aria-label":void 0,children:"Пуш о снижении цены"},play:async({canvasElement:a})=>{const i=N(a).getByRole("switch",{name:"Пуш о снижении цены"});await l(i).toBeInTheDocument()}},z=["Playground","States","CaseNotifications","BehaviourTest","NamedByLabel"];var m,g,h,b,w;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:"Тапни: кнопка переезжает, дорожка становится зелёной.",...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.description}}};var y,D,B,E,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Все состояния',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ScrollMatrix>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 72px)',
      gap: 16,
      alignItems: 'center',
      justifyItems: 'center'
    }}>
      {['Выключен', 'Включён', 'Нажат', 'Disabled', 'Disabled, включён'].map(t => <span key={t} className="im-12-r" style={{
        color: 'var(--color-text-tertiary)',
        textAlign: 'center'
      }}>{t}</span>)}
      <Toggle aria-label="Выключен" />
      <Toggle aria-label="Включён" defaultChecked />
      <Toggle aria-label="Нажат" forcePressed />
      <Toggle aria-label="Disabled" disabled />
      <Toggle aria-label="Disabled, включён" disabled defaultChecked />
    </div>
    </ScrollMatrix>
}`,...(B=(D=s.parameters)==null?void 0:D.docs)==null?void 0:B.source},description:{story:"Figma 470:6238: Active False | True, plus the press and disabled that Figma does not draw.",...(C=(E=s.parameters)==null?void 0:E.docs)==null?void 0:C.description}}};var f,x,k,v,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Кейсы / Уведомления',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [on, setOn] = useState(true);
    return <Toggle checked={on} onCheckedChange={setOn}>
        Пуш о снижении цены
      </Toggle>;
  }
}`,...(k=(x=n.parameters)==null?void 0:x.docs)==null?void 0:k.source},description:{story:"Controlled use with a visible label: `children` is the text of the switch's own `<label>`, so a tap on it flips the switch and names it.",...(T=(v=n.parameters)==null?void 0:v.docs)==null?void 0:T.description}}};var S,F,j,A,_;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Тест: тап и пробел',
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const sw = canvas.getByRole('switch', {
      name: 'Сообщать о снижении цены'
    });
    await expect(sw).not.toBeChecked();
    await userEvent.click(sw);
    await expect(sw).toBeChecked();
    await expect(args.onCheckedChange).toHaveBeenLastCalledWith(true);
    sw.focus();
    await userEvent.keyboard(' ');
    await waitFor(() => expect(sw).not.toBeChecked());
  }
}`,...(j=(F=r.parameters)==null?void 0:F.docs)==null?void 0:j.source},description:{story:"Interaction test: tap, Space, aria-checked (the instant keyboard change is measured in scripts/check-selection.mjs).",...(_=(A=r.parameters)==null?void 0:A.docs)==null?void 0:_.description}}};var O,P,R,I,M;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Тест: имя из подписи',
  args: {
    'aria-label': undefined,
    children: 'Пуш о снижении цены'
  },
  play: async ({
    canvasElement
  }) => {
    const sw = within(canvasElement).getByRole('switch', {
      name: 'Пуш о снижении цены'
    });
    await expect(sw).toBeInTheDocument();
  }
}`,...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.source},description:{story:"The switch is named by its label text (no second wrapping label).",...(M=(I=o.parameters)==null?void 0:I.docs)==null?void 0:M.description}}};const X=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:r,CaseNotifications:n,NamedByLabel:o,Playground:t,States:s,__namedExportsOrder:z,default:U},Symbol.toStringTag,{value:"Module"}));export{n as C,t as P,s as S,X as T};
