import{r as y,j as e}from"./iframe-DuqTOznb.js";import{c as re}from"./cx-2dOUpm6k.js";import{C as f}from"./Chip-KAmC-4ZV.js";const ne="_root_ksrvz_6",se="_photo_ksrvz_60",A={root:ne,photo:se},k=[1,2,3,4,5];function oe(a){if(!a)return 1;let u=0;for(let r=0;r<a.length;r++)u=u*31+a.charCodeAt(r)>>>0;return k[u%k.length]}const t=y.forwardRef(function({src:u,alt:r="",variant:J,seed:Y,size:_=32,className:$,style:ee,...ae},ue){const[x,v]=y.useState({src:u,state:"loading"}),g=x.src===u?x.state:"loading",te=J??oe(Y??(r||void 0)),h=!!u&&g!=="failed";return e.jsx("span",{ref:ue,...ae,className:re(A.root,$),style:{"--_size":`${_}px`,...ee},"data-variant":te,"data-photo":h||void 0,"data-loaded":g==="loaded"||void 0,role:r?"img":void 0,"aria-label":r||void 0,children:h&&e.jsx("img",{ref:p=>{p!=null&&p.complete&&g==="loading"&&v({src:u,state:p.naturalWidth>0?"loaded":"failed"})},className:A.photo,src:u,alt:"",draggable:!1,onLoad:()=>v({src:u,state:"loaded"}),onError:()=>v({src:u,state:"failed"})})})});t.__docgenInfo={description:"Avatar (Figma «avatar - organistaion» 1065:1404): a circle, 32 px by default. Avatar=True is a photo; Avatar=False is\na soft gradient (five variants, Var 1–5) for an organiser without a photo. It is one avatar, not a group.\n\nThe photo fades in over the gradient when it has loaded, so a slow network shows the colour and not an empty circle.\n`ref` and `...rest` go to the circle (a `span`).",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"Photo (Figma Avatar=True). Without it, or if it fails to load, the gradient placeholder shows (Avatar=False)."},alt:{required:!1,tsType:{name:"string"},description:"Text for screen readers, usually the name of the organiser. Empty (default) = decorative: the name is next to it.",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},description:"Figma Var 1–5, the placeholder gradient. Default: taken from `seed`, so one organiser always gets the same colour."},seed:{required:!1,tsType:{name:"string"},description:"Any stable string (name, id): picks the gradient when `variant` is not set."},size:{required:!1,tsType:{name:"union",raw:"32 | 40 | (number & {})",elements:[{name:"literal",value:"32"},{name:"literal",value:"40"},{name:"unknown"}]},description:"Diameter in px. The DS values are 32 (Figma default) and 40 (the organiser row); any other number is allowed.",defaultValue:{value:"32",computed:!1}}}};const m="data:image/png;base64,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",{expect:ie,within:le}=__STORYBOOK_MODULE_TEST__,de={title:"Components/Avatar",component:t,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1065-1404"}},args:{src:m,alt:"Kettik",size:32},argTypes:{src:{control:"text"},alt:{control:"text"},variant:{control:"inline-radio",options:[void 0,1,2,3,4,5]},seed:{control:"text"},size:{control:{type:"number",min:16,max:96,step:4}}}},n=({children:a})=>e.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:a}),c={},s={name:"Варианты",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 56px)",gap:"8px 16px",alignItems:"center",justifyItems:"center"},children:[e.jsx(n,{children:"Фото"}),e.jsx(n,{children:"Var 1"}),e.jsx(n,{children:"Var 2"}),e.jsx(n,{children:"Var 3"}),e.jsx(n,{children:"Var 4"}),e.jsx(n,{children:"Var 5"}),e.jsx(t,{src:m,alt:"Kettik"}),[1,2,3,4,5].map(a=>e.jsx(t,{variant:a},a)),e.jsx(t,{src:m,alt:"Kettik",size:40}),[1,2,3,4,5].map(a=>e.jsx(t,{variant:a,size:40},a))]})},o={name:"Цвет по имени",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",gap:16},children:["Kettik","Silk Road Tours","Ала-Арча Трэвел","Nomad","Салам Бишкек"].map(a=>e.jsx(t,{seed:a,alt:a,size:40},a))}),play:async({canvasElement:a})=>{const u=le(a).getAllByRole("img");await ie(u).toHaveLength(5)}},i={name:"Фото не загрузилось",parameters:{controls:{disable:!0}},render:()=>e.jsx(t,{src:"data:image/png;base64,AAAA",alt:"Организатор",size:40})},l={name:"Кейсы / Организатор",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{width:393,maxWidth:"100%",background:"var(--color-bg-surface)"},children:[{name:"Kettik",offers:"10 предложений",photo:m},{name:"Silk Road Tours",offers:"4 предложения",photo:void 0}].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,boxSizing:"border-box",minHeight:64,padding:"8px 8px 8px 16px"},children:[e.jsxs("div",{style:{flex:1,minWidth:0,padding:"4px 0"},children:[e.jsx("div",{className:"im-20-b",style:{color:"var(--control-text-default)"},children:a.name}),e.jsx("div",{className:"im-14-r",style:{color:"var(--control-text-tertiary)"},children:a.offers})]}),e.jsx("div",{style:{padding:"0 8px"},children:e.jsx(t,{src:a.photo,seed:a.name,alt:a.name,size:40})})]},a.name))})},d={name:"Кейсы / Чип организатора",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(f,{avatar:e.jsx(t,{src:m,alt:"",size:20}),count:23,defaultSelected:!1,children:"Kettik"}),e.jsx(f,{avatar:e.jsx(t,{seed:"Silk Road Tours",size:20}),count:7,defaultSelected:!1,children:"Silk Road Tours"})]})},ce=["Playground","Variants","BySeed","BrokenPhoto","CaseOrganiser","CaseOrganiserChip"];var E,C,T;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var b,B,S,j,F;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 56px)',
    gap: '8px 16px',
    alignItems: 'center',
    justifyItems: 'center'
  }}>
      <Caption>Фото</Caption>
      <Caption>Var 1</Caption>
      <Caption>Var 2</Caption>
      <Caption>Var 3</Caption>
      <Caption>Var 4</Caption>
      <Caption>Var 5</Caption>
      <Avatar src={kettik} alt="Kettik" />
      {([1, 2, 3, 4, 5] as const).map(v => <Avatar key={v} variant={v} />)}
      <Avatar src={kettik} alt="Kettik" size={40} />
      {([1, 2, 3, 4, 5] as const).map(v => <Avatar key={v} variant={v} size={40} />)}
    </div>
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source},description:{story:"The Figma set 1065:1404: Avatar=True is a photo; Avatar=False × Var 1–5 are the five gradients.",...(F=(j=s.parameters)==null?void 0:j.docs)==null?void 0:F.description}}};var D,z,O,R,w;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Цвет по имени',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 16
  }}>
      {['Kettik', 'Silk Road Tours', 'Ала-Арча Трэвел', 'Nomad', 'Салам Бишкек'].map(name => <Avatar key={name} seed={name} alt={name} size={40} />)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const imgs = within(canvasElement).getAllByRole('img');
    await expect(imgs).toHaveLength(5);
  }
}`,...(O=(z=o.parameters)==null?void 0:z.docs)==null?void 0:O.source},description:{story:"Без фото цвет берётся из имени: один организатор — один цвет на всех экранах.",...(w=(R=o.parameters)==null?void 0:R.docs)==null?void 0:w.description}}};var I,L,X,V,K;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Фото не загрузилось',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Avatar src="data:image/png;base64,AAAA" alt="Организатор" size={40} />
}`,...(X=(L=i.parameters)==null?void 0:L.docs)==null?void 0:X.source},description:{story:"Фото не загрузилось: остаётся градиент, пустого круга нет.",...(K=(V=i.parameters)==null?void 0:V.docs)==null?void 0:K.description}}};var Z,N,P,W,q;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Кейсы / Организатор',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    width: 393,
    maxWidth: '100%',
    background: 'var(--color-bg-surface)'
  }}>
      {[{
      name: 'Kettik',
      offers: '10 предложений',
      photo: kettik
    }, {
      name: 'Silk Road Tours',
      offers: '4 предложения',
      photo: undefined
    }].map(o => <div key={o.name} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      boxSizing: 'border-box',
      minHeight: 64,
      padding: '8px 8px 8px 16px'
    }}>
          <div style={{
        flex: 1,
        minWidth: 0,
        padding: '4px 0'
      }}>
            <div className="im-20-b" style={{
          color: 'var(--control-text-default)'
        }}>
              {o.name}
            </div>
            <div className="im-14-r" style={{
          color: 'var(--control-text-tertiary)'
        }}>
              {o.offers}
            </div>
          </div>
          <div style={{
        padding: '0 8px'
      }}>
            <Avatar src={o.photo} seed={o.name} alt={o.name} size={40} />
          </div>
        </div>)}
    </div>
}`,...(P=(N=l.parameters)==null?void 0:N.docs)==null?void 0:P.source},description:{story:"Строка организатора на детальной странице: название и число предложений слева, аватар 40 px справа (3007:173912).",...(q=(W=l.parameters)==null?void 0:W.docs)==null?void 0:q.description}}};var M,U,G,H,Q;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Кейсы / Чип организатора',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8
  }}>
      <Chip avatar={<Avatar src={kettik} alt="" size={20} />} count={23} defaultSelected={false}>
        Kettik
      </Chip>
      <Chip avatar={<Avatar seed="Silk Road Tours" size={20} />} count={7} defaultSelected={false}>
        Silk Road Tours
      </Chip>
    </div>
}`,...(G=(U=d.parameters)==null?void 0:U.docs)==null?void 0:G.source},description:{story:"Фильтры «Результат поиска»: чип организатора с аватаром 20 px и числом предложений (3051:212807).",...(Q=(H=d.parameters)==null?void 0:H.docs)==null?void 0:Q.description}}};const ge=Object.freeze(Object.defineProperty({__proto__:null,BrokenPhoto:i,BySeed:o,CaseOrganiser:l,CaseOrganiserChip:d,Playground:c,Variants:s,__namedExportsOrder:ce,default:de},Symbol.toStringTag,{value:"Module"}));export{ge as A,o as B,l as C,c as P,s as V,i as a,d as b};
