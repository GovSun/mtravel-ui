import{r as v,j as e}from"./iframe-DuqTOznb.js";import{c as le}from"./cx-2dOUpm6k.js";import{P as me}from"./Pressable-D45JnRku.js";import{B as T}from"./Button-CKwNO4NU.js";const he="_root_edd2x_6",ge="_dot_edd2x_12",xe="_button_edd2x_31",B={root:he,dot:ge,button:xe},b=v.forwardRef(function({selected:t=!1,className:a,...n},g){return e.jsx("span",{ref:g,className:le(B.dot,a),"data-selected":t||void 0,...n})}),i=v.forwardRef(function({count:t,index:a,onIndexChange:n,"aria-label":g,className:w,...x},f){const o=Math.min(Math.max(a,0),Math.max(t-1,0)),j=le(B.root,w),D=g??"Страницы";if(n){const I=n;return e.jsx("div",{ref:f,...x,role:"group","aria-label":D,className:j,"data-interactive":"",children:Array.from({length:t},(E,y)=>e.jsx(me,{className:B.button,"aria-label":`Страница ${y+1} из ${t}`,"aria-current":y===o?"true":void 0,onClick:()=>I(y),children:e.jsx(b,{selected:y===o})},y))})}return e.jsx("div",{ref:f,...x,role:"img","aria-label":`${D}: ${o+1} из ${t}`,className:j,children:Array.from({length:t},(I,E)=>e.jsx(b,{selected:E===o},E))})});b.__docgenInfo={description:"Dot (Figma 883:4909): 6 px circle in `bg/inverse/surface`, 100 % when selected and 20 % when not.",methods:[],displayName:"Dot",props:{selected:{required:!1,tsType:{name:"boolean"},description:"Figma «Selected?». The current page is solid, the others are at 20 %.",defaultValue:{value:"false",computed:!1}}}};i.__docgenInfo={description:'Dots: the page indicator of a carousel (Figma Dot 883:4909 repeated `count` times). The current dot is solid, the\nrest sit at 20 %. When the page changes the new dot lights up and the old one dims, both by opacity over\n`--dots-motion-switch-duration`; CSS transitions, so a fast swipe through several pages never queues up.\n\nPlain indicator by default (`role="img"` with a «Страницы: 2 из 5» label, the carousel itself has the controls).\nWith `onIndexChange` every dot is a button, 44 px high; the dot pitch is 14 px, so a button is 14 px wide, and the two\nouter dots reach 44 px outwards. `ref` and the rest of the attributes go to the root.',methods:[],displayName:"Dots",props:{count:{required:!0,tsType:{name:"number"},description:"How many pages."},index:{required:!0,tsType:{name:"number"},description:"The current page, from 0. Controlled by the carousel."},onIndexChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Called with the page the person picked. Not a form value, so it is not `onValueChange`. When given, the dots are buttons; without it they are a plain indicator."},"aria-label":{required:!1,tsType:{name:"string"},description:"Name of the indicator for a screen reader, «Фото», «Страницы» (default). The current page is added: «Фото: 2 из 5»."}}};const{expect:r,fn:pe,userEvent:_,within:C}=__STORYBOOK_MODULE_TEST__,ye={title:"Components/Dots",component:i,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=883-4909"},layout:"centered"},args:{count:5,index:1},argTypes:{count:{control:{type:"number",min:1,max:12}},index:{control:{type:"number",min:0,max:11}},onIndexChange:{control:!1}}},be="linear-gradient(160deg, #f6d365 0%, #fda085 30%, #4a7fb5 65%, #1f3b57 100%)",u={},c={name:"Все состояния",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:20,justifyItems:"start"},children:[e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(b,{}),e.jsx("span",{className:"im-12-r",children:"Selected? = False"}),e.jsx(b,{selected:!0}),e.jsx("span",{className:"im-12-r",children:"Selected? = True"})]}),e.jsx(i,{count:3,index:0}),e.jsx(i,{count:5,index:2}),e.jsx(i,{count:8,index:7})]})},d={name:"Переключение",parameters:{controls:{disable:!0}},render:function(){const[t,a]=v.useState(0);return e.jsxs("div",{style:{display:"grid",gap:16,justifyItems:"center"},children:[e.jsxs("span",{className:"im-14-m",children:["Страница ",t+1]}),e.jsx(i,{count:5,index:t,onIndexChange:a}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(T,{variant:"secondary",size:40,onClick:()=>a(n=>Math.max(0,n-1)),children:"Назад"}),e.jsx(T,{variant:"secondary",size:40,onClick:()=>a(n=>Math.min(4,n+1)),children:"Вперёд"})]})]})}},l={name:"Кейс: галерея под обложкой",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[t,a]=v.useState(0);return e.jsxs("div",{style:{width:393,maxWidth:"100%",background:"var(--color-bg-surface)"},children:[e.jsx("div",{style:{height:240,background:be}}),e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"12px 0"},children:e.jsx(i,{count:4,index:t,onIndexChange:a,"aria-label":"Фото"})})]})}},p={name:"Тест: зона нажатия 44 px",parameters:{controls:{disable:!0}},args:{onIndexChange:pe(),count:4,index:0},play:async({canvasElement:s})=>{const t=C(s).getAllByRole("button"),a=x=>{const f=x.getBoundingClientRect(),o=getComputedStyle(x,"::before");return{h:f.height+parseFloat(o.top)*-2,left:-parseFloat(o.left),right:-parseFloat(o.right)}},n=a(t[0]),g=a(t[1]),w=a(t[3]);await r(n.h).toBeGreaterThanOrEqual(44),await r(n.left).toBeGreaterThanOrEqual(19),await r(w.right).toBeGreaterThanOrEqual(19),await r(g.left).toBe(4)}},m={name:"Тест: индикатор и кнопки",parameters:{controls:{disable:!0}},args:{onIndexChange:pe(),count:4,index:0},play:async({canvasElement:s,args:t})=>{const n=C(s).getAllByRole("button");await r(n).toHaveLength(4),await r(n[0]).toHaveAttribute("aria-current","true"),await _.click(n[2]),await r(t.onIndexChange).toHaveBeenLastCalledWith(2),n[3].focus(),await _.keyboard("{Enter}"),await r(t.onIndexChange).toHaveBeenLastCalledWith(3)}},h={name:"Тест: подпись индикатора",parameters:{controls:{disable:!0}},args:{count:5,index:2,"aria-label":"Фото"},play:async({canvasElement:s})=>{await r(C(s).getByRole("img",{name:"Фото: 3 из 5"})).toBeInTheDocument()}},fe=["Playground","Variants","Interactive","CaseGallery","HitAreaTest","BehaviourTest","PlainLabelTest"];var S,F,A,k,R;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(A=(F=u.parameters)==null?void 0:F.docs)==null?void 0:A.source},description:{story:"Точки страниц карусели. Меняй `index`, чтобы увидеть переключение.",...(R=(k=u.parameters)==null?void 0:k.docs)==null?void 0:R.description}}};var O,H,N,q,P;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Все состояния',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 20,
    justifyItems: 'start'
  }}>
      <div style={{
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }}>
        <Dot />
        <span className="im-12-r">Selected? = False</span>
        <Dot selected />
        <span className="im-12-r">Selected? = True</span>
      </div>
      <Dots count={3} index={0} />
      <Dots count={5} index={2} />
      <Dots count={8} index={7} />
    </div>
}`,...(N=(H=c.parameters)==null?void 0:H.docs)==null?void 0:N.source},description:{story:"The single Dot of Figma 883:4909 and a row of them.",...(P=(q=c.parameters)==null?void 0:q.docs)==null?void 0:P.description}}};var M,L,W,G,V;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Переключение',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [i, setI] = useState(0);
    return <div style={{
      display: 'grid',
      gap: 16,
      justifyItems: 'center'
    }}>
        <span className="im-14-m">Страница {i + 1}</span>
        <Dots count={5} index={i} onIndexChange={setI} />
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Button variant="secondary" size={40} onClick={() => setI(v => Math.max(0, v - 1))}>
            Назад
          </Button>
          <Button variant="secondary" size={40} onClick={() => setI(v => Math.min(4, v + 1))}>
            Вперёд
          </Button>
        </div>
      </div>;
  }
}`,...(W=(L=d.parameters)==null?void 0:L.docs)==null?void 0:W.source},description:{story:"A tap on a dot picks the page; a button for each, 44 px target.",...(V=(G=d.parameters)==null?void 0:G.docs)==null?void 0:V.description}}};var z,$,U,K,J;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Кейс: галерея под обложкой',
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
    const [i, setI] = useState(0);
    return <div style={{
      width: 393,
      maxWidth: '100%',
      background: 'var(--color-bg-surface)'
    }}>
        <div style={{
        height: 240,
        background: PHOTO
      }} />
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '12px 0'
      }}>
          <Dots count={4} index={i} onIndexChange={setI} aria-label="Фото" />
        </div>
      </div>;
  }
}`,...(U=($=l.parameters)==null?void 0:$.docs)==null?void 0:U.source},description:{story:"Under the cover gallery of an excursion: four photos («1 из 4» in the badge), dots in the middle.",...(J=(K=l.parameters)==null?void 0:K.docs)==null?void 0:J.description}}};var X,Y,Q,Z,ee;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Тест: зона нажатия 44 px',
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    onIndexChange: fn(),
    count: 4,
    index: 0
  },
  play: async ({
    canvasElement
  }) => {
    const buttons = within(canvasElement).getAllByRole('button');
    const slop = (b: HTMLElement) => {
      const dot = b.getBoundingClientRect();
      const cs = getComputedStyle(b, '::before');
      return {
        h: dot.height + parseFloat(cs.top) * -2,
        left: -parseFloat(cs.left),
        right: -parseFloat(cs.right)
      };
    };
    const first = slop(buttons[0]);
    const mid = slop(buttons[1]);
    const last = slop(buttons[3]);
    await expect(first.h).toBeGreaterThanOrEqual(44);
    await expect(first.left).toBeGreaterThanOrEqual(19);
    await expect(last.right).toBeGreaterThanOrEqual(19);
    await expect(mid.left).toBe(4);
  }
}`,...(Q=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Q.source},description:{story:"The 44 px hit slop: every dot is 44 px high, the outer dots reach 44 px outwards, the buttons do not overlap.",...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,ne,ae,se,re;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Тест: индикатор и кнопки',
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    onIndexChange: fn(),
    count: 4,
    index: 0
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    await expect(buttons).toHaveLength(4);
    await expect(buttons[0]).toHaveAttribute('aria-current', 'true');
    await userEvent.click(buttons[2]);
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(2);
    buttons[3].focus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(3);
  }
}`,...(ae=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:ae.source},description:{story:"Interaction test: the static indicator is one image with a label; the interactive one has a button per page.",...(re=(se=m.parameters)==null?void 0:se.docs)==null?void 0:re.description}}};var oe,ie,ue,ce,de;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Тест: подпись индикатора',
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    count: 5,
    index: 2,
    'aria-label': 'Фото'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole('img', {
      name: 'Фото: 3 из 5'
    })).toBeInTheDocument();
  }
}`,...(ue=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:ue.source},description:{story:"The plain indicator is a single image for a screen reader, the name can be refined with `aria-label`.",...(de=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};const Ce=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:m,CaseGallery:l,HitAreaTest:p,Interactive:d,PlainLabelTest:h,Playground:u,Variants:c,__namedExportsOrder:fe,default:ye},Symbol.toStringTag,{value:"Module"}));export{l as C,Ce as D,d as I,u as P,c as V};
