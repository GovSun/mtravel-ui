import{j as e,r as p}from"./iframe-Dr5ib33t.js";import{U as B,a as C}from"./parts-BsPlZssE.js";import{S as i}from"./Select-BX4KZDvv.js";import{B as O}from"./BottomSheet-BSDEP7jt.js";import"./preload-helper-Dp1pzeXC.js";import"./usePress-6Rv7_Jz7.js";import"./index-BAdrHWJM.js";import"./index-Bc0N6I3Z.js";import"./index-CU5QHq_h.js";import"./motion-C-Q-avtg.js";import"./useControllableState-BCXXtwcd.js";import"./IconButton-DBWbz_Xc.js";import"./Button-DFQPOwGN.js";const{fn:F}=__STORYBOOK_MODULE_TEST__,M={title:"Components/Inputs/Select",component:i,tags:["autodocs"],parameters:{design:{figma:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=595-338"}},decorators:[u=>e.jsx("div",{style:{width:328,maxWidth:"100%"},children:e.jsx(u,{})})],args:{label:"Пассажиры",placeholder:"Выберите",value:"",open:!1,disabled:!1,disclosure:!1,error:"",hint:"",onClick:F()},argTypes:{rightIcon:{control:"inline-radio",options:["нет","users"],mapping:{нет:void 0,users:e.jsx(B,{})}},leftIcon:{control:"inline-radio",options:["нет","calendar"],mapping:{нет:void 0,calendar:e.jsx(C,{})}},value:{control:"text"},error:{control:"text"},hint:{control:"text"},pressed:{control:!1}}},s={args:{rightIcon:"users"}},r={name:"Все состояния",parameters:{controls:{disable:!0},layout:"padded"},decorators:[u=>e.jsx(u,{})],render:()=>e.jsx("div",{style:{display:"grid",gap:24,gridTemplateColumns:"repeat(auto-fill, minmax(280px, 328px))"},children:[{name:"Placeholder",props:{}},{name:"Filled",props:{value:"Значение"}},{name:"Opened",props:{value:"Значение",open:!0}},{name:"Error",props:{value:"Значение",error:"Проверьте, что поле заполнено верно"}},{name:"Disabled",props:{value:"Значение",disabled:!0}},{name:"Pressed",props:{value:"Значение",pressed:!0}},{name:"С шевроном (Show disclosure)",props:{value:"Значение",disclosure:!0}},{name:"Открыт, с шевроном",props:{value:"Значение",disclosure:!0,open:!0}}].map(({name:u,props:a})=>e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:u}),e.jsx(i,{label:"Пассажиры",rightIcon:e.jsx(B,{}),...a})]},u))})},k=["Эконом","Комфорт","Бизнес","Первый класс"],t={name:"С выбором в шторке",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[a,o]=p.useState(!1),[l,j]=p.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(i,{label:"Класс обслуживания",value:l,open:a,disclosure:!0,onClick:()=>o(!0)}),e.jsx(O,{open:a,onOpenChange:o,header:"left",title:"Класс обслуживания",children:e.jsx("div",{role:"listbox","aria-label":"Класс обслуживания",style:{display:"grid",padding:"0 8px 16px"},children:k.map(n=>e.jsx("button",{type:"button",role:"option","aria-selected":n===l,className:"im-16-m",onClick:()=>{j(n),o(!1)},style:{height:52,padding:"0 12px",border:0,borderRadius:"var(--radius-md)",background:n===l?"var(--control-bg-default)":"transparent",color:"var(--color-text-primary)",textAlign:"left",font:"inherit"},children:n},n))})})]})}},G=["Playground","States","WithSheet"];var d,c,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    rightIcon: 'users' as never
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,h,v,x,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Все состояния',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'padded'
  },
  decorators: [Story => <Story />],
  render: () => <div style={{
    display: 'grid',
    gap: 24,
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 328px))'
  }}>
      {[{
      name: 'Placeholder',
      props: {}
    }, {
      name: 'Filled',
      props: {
        value: 'Значение'
      }
    }, {
      name: 'Opened',
      props: {
        value: 'Значение',
        open: true
      }
    }, {
      name: 'Error',
      props: {
        value: 'Значение',
        error: 'Проверьте, что поле заполнено верно'
      }
    }, {
      name: 'Disabled',
      props: {
        value: 'Значение',
        disabled: true
      }
    }, {
      name: 'Pressed',
      props: {
        value: 'Значение',
        pressed: true
      }
    }, {
      name: 'С шевроном (Show disclosure)',
      props: {
        value: 'Значение',
        disclosure: true
      }
    }, {
      name: 'Открыт, с шевроном',
      props: {
        value: 'Значение',
        disclosure: true,
        open: true
      }
    }].map(({
      name,
      props
    }) => <div key={name} style={{
      display: 'grid',
      gap: 6
    }}>
          <span className="im-12-r" style={{
        color: 'var(--color-text-tertiary)'
      }}>
            {name}
          </span>
          <Select label="Пассажиры" rightIcon={<UsersIcon />} {...props} />
        </div>)}
    </div>
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"Figma 595:338 states. Opened turns the chevron up (Figma swaps the icon; here it rotates).",...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.description}}};var y,S,f,E,D;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'С выбором в шторке',
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
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string>('');
    return <>
        <Select label="Класс обслуживания" value={value} open={open} disclosure onClick={() => setOpen(true)} />
        <BottomSheet open={open} onOpenChange={setOpen} header="left" title="Класс обслуживания">
          <div role="listbox" aria-label="Класс обслуживания" style={{
          display: 'grid',
          padding: '0 8px 16px'
        }}>
            {CLASSES.map(c => <button key={c} type="button" role="option" aria-selected={c === value} className="im-16-m" onClick={() => {
            setValue(c);
            setOpen(false);
          }} style={{
            height: 52,
            padding: '0 12px',
            border: 0,
            borderRadius: 'var(--radius-md)',
            background: c === value ? 'var(--control-bg-default)' : 'transparent',
            color: 'var(--color-text-primary)',
            textAlign: 'left',
            font: 'inherit'
          }}>
                {c}
              </button>)}
          </div>
        </BottomSheet>
      </>;
  }
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source},description:{story:"The usual pairing: Select opens a BottomSheet with the choice; while the sheet is open the field is «Opened».",...(D=(E=t.parameters)==null?void 0:E.docs)==null?void 0:D.description}}};export{s as Playground,r as States,t as WithSheet,G as __namedExportsOrder,M as default};
