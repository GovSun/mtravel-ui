import{r as E,j as e}from"./iframe-DyD5Yel4.js";import{c as re}from"./cx-2dOUpm6k.js";import{P as ie}from"./Pressable-CAjp7WdB.js";import{B as I}from"./Button-grGIhY78.js";const ue="_root_edd2x_6",ce="_dot_edd2x_12",de="_button_edd2x_31",w={root:ue,dot:ce,button:de},y=E.forwardRef(function({selected:t=!1,className:a,...n},h){return e.jsx("span",{ref:h,className:re(w.dot,a),"data-selected":t||void 0,...n})}),m=E.forwardRef(function({count:t,index:a,onIndexChange:n,"aria-label":h,className:b,...g},f){const o=Math.min(Math.max(a,0),Math.max(t-1,0)),D=re(w.root,b),C=h??"Страницы";if(n){const T=n;return e.jsx("div",{ref:f,...g,role:"group","aria-label":C,className:D,"data-interactive":"",children:Array.from({length:t},(v,x)=>e.jsx(ie,{className:w.button,"aria-label":`Страница ${x+1} из ${t}`,"aria-current":x===o?"true":void 0,onClick:()=>T(x),children:e.jsx(y,{selected:x===o})},x))})}return e.jsx("div",{ref:f,...g,role:"img","aria-label":`${C}: ${o+1} из ${t}`,className:D,children:Array.from({length:t},(T,v)=>e.jsx(y,{selected:v===o},v))})});y.__docgenInfo={description:"Dot (Figma 883:4909): 6 px circle in `bg/inverse/surface`, 100 % when selected and 20 % when not.",methods:[],displayName:"Dot",props:{selected:{required:!1,tsType:{name:"boolean"},description:"Figma «Selected?». The current page is solid, the others are at 20 %.",defaultValue:{value:"false",computed:!1}}}};m.__docgenInfo={description:'Dots: the page indicator of a carousel (Figma Dot 883:4909 repeated `count` times). The current dot is solid, the\nrest sit at 20 %. When the page changes the new dot lights up and the old one dims, both by opacity over\n`--dots-motion-switch-duration`; CSS transitions, so a fast swipe through several pages never queues up.\n\nPlain indicator by default (`role="img"` with a «Страницы: 2 из 5» label, the carousel itself has the controls).\nWith `onIndexChange` every dot is a button, 44 px high; the dot pitch is 14 px, so a button is 14 px wide, and the two\nouter dots reach 44 px outwards. `ref` and the rest of the attributes go to the root.',methods:[],displayName:"Dots",props:{count:{required:!0,tsType:{name:"number"},description:"How many pages."},index:{required:!0,tsType:{name:"number"},description:"The current page, from 0. Controlled by the carousel."},onIndexChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Called with the page the person picked. Not a form value, so it is not `onValueChange`. When given, the dots are buttons; without it they are a plain indicator."},"aria-label":{required:!1,tsType:{name:"string"},description:"Name of the indicator for a screen reader, «Фото», «Страницы» (default). The current page is added: «Фото: 2 из 5»."}}};const{expect:s,fn:oe,userEvent:j,within:B}=__STORYBOOK_MODULE_TEST__,le={title:"Components/Dots",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=883-4909"},layout:"centered"},args:{count:5,index:1},argTypes:{count:{control:{type:"number",min:1,max:12}},index:{control:{type:"number",min:0,max:11}},onIndexChange:{control:!1}}},i={},u={name:"Все состояния",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:20,justifyItems:"start"},children:[e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(y,{}),e.jsx("span",{className:"im-12-r",children:"Selected? = False"}),e.jsx(y,{selected:!0}),e.jsx("span",{className:"im-12-r",children:"Selected? = True"})]}),e.jsx(m,{count:3,index:0}),e.jsx(m,{count:5,index:2}),e.jsx(m,{count:8,index:7})]})},c={name:"Переключение",parameters:{controls:{disable:!0}},render:function(){const[t,a]=E.useState(0);return e.jsxs("div",{style:{display:"grid",gap:16,justifyItems:"center"},children:[e.jsxs("span",{className:"im-14-m",children:["Страница ",t+1]}),e.jsx(m,{count:5,index:t,onIndexChange:a}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(I,{variant:"secondary",size:40,onClick:()=>a(n=>Math.max(0,n-1)),children:"Назад"}),e.jsx(I,{variant:"secondary",size:40,onClick:()=>a(n=>Math.min(4,n+1)),children:"Вперёд"})]})]})}},d={name:"Тест: зона нажатия 44 px",parameters:{controls:{disable:!0}},args:{onIndexChange:oe(),count:4,index:0},play:async({canvasElement:r})=>{const t=B(r).getAllByRole("button"),a=g=>{const f=g.getBoundingClientRect(),o=getComputedStyle(g,"::before");return{h:f.height+parseFloat(o.top)*-2,left:-parseFloat(o.left),right:-parseFloat(o.right)}},n=a(t[0]),h=a(t[1]),b=a(t[3]);await s(n.h).toBeGreaterThanOrEqual(44),await s(n.left).toBeGreaterThanOrEqual(19),await s(b.right).toBeGreaterThanOrEqual(19),await s(h.left).toBe(4)}},l={name:"Тест: индикатор и кнопки",parameters:{controls:{disable:!0}},args:{onIndexChange:oe(),count:4,index:0},play:async({canvasElement:r,args:t})=>{const n=B(r).getAllByRole("button");await s(n).toHaveLength(4),await s(n[0]).toHaveAttribute("aria-current","true"),await j.click(n[2]),await s(t.onIndexChange).toHaveBeenLastCalledWith(2),n[3].focus(),await j.keyboard("{Enter}"),await s(t.onIndexChange).toHaveBeenLastCalledWith(3)}},p={name:"Тест: подпись индикатора",parameters:{controls:{disable:!0}},args:{count:5,index:2,"aria-label":"Фото"},play:async({canvasElement:r})=>{await s(B(r).getByRole("img",{name:"Фото: 3 из 5"})).toBeInTheDocument()}},pe=["Playground","Variants","Interactive","HitAreaTest","BehaviourTest","PlainLabelTest"];var _,S,F,A,N;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(F=(S=i.parameters)==null?void 0:S.docs)==null?void 0:F.source},description:{story:"Точки страниц карусели. Меняй `index`, чтобы увидеть переключение.",...(N=(A=i.parameters)==null?void 0:A.docs)==null?void 0:N.description}}};var R,O,k,q,H;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(k=(O=u.parameters)==null?void 0:O.docs)==null?void 0:k.source},description:{story:"The single Dot of Figma 883:4909 and a row of them.",...(H=(q=u.parameters)==null?void 0:q.docs)==null?void 0:H.description}}};var M,L,P,W,G;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(P=(L=c.parameters)==null?void 0:L.docs)==null?void 0:P.source},description:{story:"A tap on a dot picks the page; a button for each, 44 px target.",...(G=(W=c.parameters)==null?void 0:W.docs)==null?void 0:G.description}}};var V,z,$,K,U;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...($=(z=d.parameters)==null?void 0:z.docs)==null?void 0:$.source},description:{story:"The 44 px hit slop: every dot is 44 px high, the outer dots reach 44 px outwards, the buttons do not overlap.",...(U=(K=d.parameters)==null?void 0:K.docs)==null?void 0:U.description}}};var J,X,Y,Q,Z;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Interaction test: the static indicator is one image with a label; the interactive one has a button per page.",...(Z=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};var ee,te,ne,ae,se;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ne.source},description:{story:"The plain indicator is a single image for a screen reader, the name can be refined with `aria-label`.",...(se=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:se.description}}};const ye=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:l,HitAreaTest:d,Interactive:c,PlainLabelTest:p,Playground:i,Variants:u,__namedExportsOrder:pe,default:le},Symbol.toStringTag,{value:"Module"}));export{ye as D,c as I,i as P,u as V};
