import{r as g,j as u}from"./iframe-DyD5Yel4.js";import{H as r,K as n4}from"./Phone-D_QzrYrn.js";import{F as n}from"./FloatingContainer-DeRfZ3x8.js";import{c as i4}from"./cx-2dOUpm6k.js";import{P as r4}from"./PromoBadge-MRvWEy0B.js";import{O as o4}from"./OldPrice-CFXJrPco.js";import{B as e}from"./Button-grGIhY78.js";import{F as Y}from"./FloatingFilter-DvcJgFUi.js";import{C as Z}from"./time-lpmEQjgl.js";import{U as $}from"./people-tOiSq3ZR.js";import{D as C}from"./Disclaimer-BsSMNtxi.js";const a4="_root_x5soz_5",s4="_label_x5soz_14",l4="_line_x5soz_20",c4="_price_x5soz_25",d4="_sr_x5soz_31",x={root:a4,label:s4,line:l4,price:c4,sr:d4},m4=i=>i.replace(/⃀/g,"сом"),h=g.forwardRef(function({label:t,price:o,discount:a,oldPrice:b,className:u4,...e4},t4){return u.jsxs("div",{ref:t4,...e4,className:i4(x.root,u4),"data-floating-price":"",children:[t!=null&&t!==""&&u.jsx("span",{className:x.label,children:t}),u.jsxs("span",{className:x.line,children:[u.jsx("span",{className:x.price,"aria-hidden":"true",children:o}),u.jsx("span",{className:x.sr,children:m4(o)}),a!=null&&u.jsx(r4,{variant:"discount",shape:"slanted",size:18,value:a})]}),b&&u.jsx(o4,{size:16,children:b})]})});h.__docgenInfo={description:`The price block of the FloatingContainer (Figma 157:12952, Variant=Text and Variant=result): the left half of the bar,
the button takes the rest. «Итого» over the price (result) or the price with its discount and the old price under it
(Text). Put it first among the FloatingContainer children, before the Button: the bar keeps 32 px between them and
the button fills the rest of the row.`,methods:[],displayName:"FloatingPrice",props:{label:{required:!1,tsType:{name:"ReactNode"},description:"Figma Variant=result: the line above the price, «Итого». IM-16 R, `control/text/secondary`."},price:{required:!0,tsType:{name:"string"},description:"The sum with the currency, as shown: «24 500 ⃀». IM-24 B, `control/text/default`. Read as «24 500 сом»."},discount:{required:!1,tsType:{name:"number"},description:"Figma Variant=Text: the discount badge next to the price (PromoBadge discount, slanted, 18), `7` → «−7 %»."},oldPrice:{required:!1,tsType:{name:"string"},description:"Figma Variant=Text: the price before the discount under the price (OldPrice 16), «25 000 ⃀»."}}};const{expect:B,userEvent:p4,waitFor:h4,within:F}=__STORYBOOK_MODULE_TEST__,x4={title:"Components/FloatingContainer",component:n,parameters:{layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=157-12952"}},decorators:[i=>u.jsx("div",{style:{padding:16,boxSizing:"border-box",width:425,maxWidth:"100%","--floating-container-safe-bottom":"34px"},children:u.jsx(i,{})})],args:{visible:!0,layout:"row",shadow:!0,topText:"",bottomText:"",children:null},argTypes:{layout:{control:"inline-radio",options:["row","column"]},topText:{control:"text"},bottomText:{control:"text"},children:{control:!1},homeIndicator:{control:!1}}},s={render:i=>u.jsx("div",{style:{position:"relative",height:260,overflow:"hidden",borderRadius:24,background:"var(--color-bg-sunken-subtle)"},children:u.jsxs(n,{...i,homeIndicator:u.jsx(r,{}),style:{position:"absolute",left:0,right:0,bottom:0},children:[u.jsx(e,{size:48,variant:"secondary",children:"Назад"}),u.jsx(e,{size:48,children:"Продолжить"})]})})},l={name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid",gap:24,padding:"8px 0 24px"},children:[u.jsxs(n,{layout:"column",homeIndicator:u.jsx(r,{}),children:[u.jsx(e,{size:52,fullWidth:!0,children:"Продолжить"}),u.jsx(e,{size:52,variant:"secondary",fullWidth:!0,children:"Назад"})]}),u.jsxs(n,{homeIndicator:u.jsx(r,{}),children:[u.jsx(e,{size:48,variant:"secondary",children:"Кнопка"}),u.jsx(e,{size:48,children:"Кнопка"})]}),u.jsxs(n,{homeIndicator:u.jsx(r,{}),"data-variant-case":"text",children:[u.jsx(h,{price:"24 500 ⃀",discount:7,oldPrice:"25 000 ⃀"}),u.jsx(e,{size:48,children:"Выбрать дату"})]}),u.jsxs(n,{homeIndicator:u.jsx(r,{}),"data-variant-case":"result",children:[u.jsx(h,{label:"Итого",price:"24 500 ⃀"}),u.jsx(e,{size:48,children:"Оплатить"})]}),u.jsx(n,{layout:"column",topText:"Осталось 3 места",bottomText:"Нажимая «Оплатить», вы соглашаетесь с правилами сервиса MTravel",homeIndicator:u.jsx(r,{}),children:u.jsx(e,{size:48,fullWidth:!0,children:"Оплатить 5 800 ⃀"})}),u.jsx(n,{shadow:!1,homeIndicator:u.jsx(r,{}),children:u.jsx(e,{size:48,fullWidth:!0,children:"Готово (без тени — внутри шторки)"})})]})},c={name:"Фильтр, дисклеймер, клавиатура",parameters:{controls:{disable:!0}},render:function(){const[t,o]=g.useState(!1);return u.jsxs("div",{style:{display:"grid",gap:24,padding:"8px 0 24px"},children:[u.jsx(n,{layout:"column",userContent:u.jsx("span",{className:"im-16-m",children:"Экскурсия на 29 мая, 2 взрослых"}),disclaimer:u.jsx(C,{checked:t,onCheckedChange:o,children:"Я подтверждаю, что ознакомлен(а) и соглашаюсь с правилами предоставления сервиса MTravel"}),homeIndicator:u.jsx(r,{}),children:u.jsx(e,{size:52,fullWidth:!0,disabled:!t,children:"Оплатить 5 800 ⃀"})}),u.jsxs(n,{filter:u.jsx(Y,{items:[{label:"29 июл",icon:u.jsx(Z,{size:14})},{label:"1 участник",icon:u.jsx($,{size:14})}]}),homeIndicator:u.jsx(r,{}),children:[u.jsx(h,{price:"24 500 ⃀",discount:7,oldPrice:"25 000 ⃀"}),u.jsx(e,{size:48,children:"Выбрать дату"})]}),u.jsx(n,{layout:"column",disclaimerPlacement:"below",disclaimer:u.jsx(C,{variant:"center",children:"Нажимая «Оплатить», вы соглашаетесь с правилами предоставления сервиса MTravel"}),keyboard:u.jsx(n4,{}),homeIndicator:u.jsx(r,{}),children:u.jsx(e,{size:52,fullWidth:!0,children:"Готово"})})]})}},d={name:"Кейсы · Детальная: итого и «К оформлению»",parameters:{controls:{disable:!0}},render:()=>u.jsxs(n,{filter:u.jsx(Y,{items:[{label:"23 ноя",icon:u.jsx(Z,{size:14})},{label:"1 участник",icon:u.jsx($,{size:14})}]}),homeIndicator:u.jsx(r,{}),children:[u.jsx(h,{label:"Итого",price:"4 756 ⃀"}),u.jsx(e,{size:48,children:"К оформлению"})]})},m={name:"Появление и уход",parameters:{controls:{disable:!0}},render:function(){const[t,o]=g.useState(!1);return u.jsxs("div",{style:{display:"grid",gap:12},children:[u.jsx(e,{variant:"secondary",onClick:()=>o(a=>!a),children:t?"Спрятать панель":"Показать панель"}),u.jsx("div",{style:{position:"relative",height:220,overflow:"hidden",borderRadius:24,background:"var(--color-bg-sunken-subtle)"},children:u.jsxs(n,{visible:t,homeIndicator:u.jsx(r,{}),style:{position:"absolute",left:0,right:0,bottom:0},children:[u.jsx(h,{price:"24 500 ⃀",discount:7,oldPrice:"25 000 ⃀"}),u.jsx(e,{size:48,children:"Выбрать дату"})]})})]})}},p={name:"Тест: скрытая панель недоступна",parameters:{controls:{disable:!0}},render:function(){const[t,o]=g.useState(!1);return u.jsxs("div",{style:{display:"grid",gap:12},children:[u.jsx(e,{variant:"secondary",onClick:()=>o(a=>!a),children:"Переключить"}),u.jsx(n,{visible:t,"data-testid":"bar",children:u.jsx(e,{size:48,children:"Продолжить"})})]})},play:async({canvasElement:i})=>{const t=F(i).getByTestId("bar");await B(t).toHaveAttribute("aria-hidden","true"),await p4.click(F(i).getByRole("button",{name:"Переключить"})),await h4(()=>B(t).not.toHaveAttribute("aria-hidden")),await B(t).toHaveAttribute("data-visible")}},g4=["Playground","States","Extras","CaseTotal","Toggle","VisibilityTest"];var v,f,y,E,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div style={{
    position: 'relative',
    height: 260,
    overflow: 'hidden',
    borderRadius: 24,
    background: 'var(--color-bg-sunken-subtle)'
  }}>
      <FloatingContainer {...args} homeIndicator={<HomeIndicatorMock />} style={{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0
    }}>
        <Button size={48} variant="secondary">
          Назад
        </Button>
        <Button size={48}>Продолжить</Button>
      </FloatingContainer>
    </div>
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source},description:{story:"Переключи «visible»: панель уезжает вниз за край и возвращается.",...(j=(E=s.parameters)==null?void 0:E.docs)==null?void 0:j.description}}};var z,I,w,k,A;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Все варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 24,
    padding: '8px 0 24px'
  }}>
      <FloatingContainer layout="column" homeIndicator={<HomeIndicatorMock />}>
        <Button size={52} fullWidth>
          Продолжить
        </Button>
        <Button size={52} variant="secondary" fullWidth>
          Назад
        </Button>
      </FloatingContainer>
      <FloatingContainer homeIndicator={<HomeIndicatorMock />}>
        <Button size={48} variant="secondary">
          Кнопка
        </Button>
        <Button size={48}>Кнопка</Button>
      </FloatingContainer>
      <FloatingContainer homeIndicator={<HomeIndicatorMock />} data-variant-case="text">
        <FloatingPrice price="24 500 ⃀" discount={7} oldPrice="25 000 ⃀" />
        <Button size={48}>Выбрать дату</Button>
      </FloatingContainer>
      <FloatingContainer homeIndicator={<HomeIndicatorMock />} data-variant-case="result">
        <FloatingPrice label="Итого" price="24 500 ⃀" />
        <Button size={48}>Оплатить</Button>
      </FloatingContainer>
      <FloatingContainer layout="column" topText="Осталось 3 места" bottomText="Нажимая «Оплатить», вы соглашаетесь с правилами сервиса MTravel" homeIndicator={<HomeIndicatorMock />}>
        <Button size={48} fullWidth>
          Оплатить 5 800 ⃀
        </Button>
      </FloatingContainer>
      <FloatingContainer shadow={false} homeIndicator={<HomeIndicatorMock />}>
        <Button size={48} fullWidth>
          Готово (без тени — внутри шторки)
        </Button>
      </FloatingContainer>
    </div>
}`,...(w=(I=l.parameters)==null?void 0:I.docs)==null?void 0:w.source},description:{story:"Figma 157:12952 with the texts of the main components: Default (column, 52), Horizontal (row, 48, secondary first), Text (price, −7 %, old price + «Выбрать дату»), result («Итого» + «Оплатить»), texts above and below, without the shadow.",...(A=(k=l.parameters)==null?void 0:k.docs)==null?void 0:A.description}}};var D,T,_,P,S;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Фильтр, дисклеймер, клавиатура',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [agree, setAgree] = useState(false);
    return <div style={{
      display: 'grid',
      gap: 24,
      padding: '8px 0 24px'
    }}>
        <FloatingContainer layout="column" userContent={<span className="im-16-m">Экскурсия на 29 мая, 2 взрослых</span>} disclaimer={<Disclaimer checked={agree} onCheckedChange={setAgree}>
              Я подтверждаю, что ознакомлен(а) и соглашаюсь с правилами предоставления сервиса MTravel
            </Disclaimer>} homeIndicator={<HomeIndicatorMock />}>
          <Button size={52} fullWidth disabled={!agree}>
            Оплатить 5 800 ⃀
          </Button>
        </FloatingContainer>
        <FloatingContainer filter={<FloatingFilter items={[{
        label: '29 июл',
        icon: <CalendarIcon size={14} />
      }, {
        label: '1 участник',
        icon: <UserIcon size={14} />
      }]} />} homeIndicator={<HomeIndicatorMock />}>
          <FloatingPrice price="24 500 ⃀" discount={7} oldPrice="25 000 ⃀" />
          <Button size={48}>Выбрать дату</Button>
        </FloatingContainer>
        <FloatingContainer layout="column" disclaimerPlacement="below" disclaimer={<Disclaimer variant="center">Нажимая «Оплатить», вы соглашаетесь с правилами предоставления сервиса MTravel</Disclaimer>} keyboard={<KeyboardMock />} homeIndicator={<HomeIndicatorMock />}>
          <Button size={52} fullWidth>
            Готово
          </Button>
        </FloatingContainer>
      </div>;
  }
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source},description:{story:`Figma: Show disclaimer, Center disclamer, Filter, Show keyboard, User content, Show top text / bottom text.
Variant Text and result are a price (or «Итого») with a button, with the filter pill floating above them.`,...(S=(P=c.parameters)==null?void 0:P.docs)==null?void 0:S.description}}};var M,H,R,V,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Кейсы · Детальная: итого и «К оформлению»',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <FloatingContainer filter={<FloatingFilter items={[{
    label: '23 ноя',
    icon: <CalendarIcon size={14} />
  }, {
    label: '1 участник',
    icon: <UserIcon size={14} />
  }]} />} homeIndicator={<HomeIndicatorMock />}>
      <FloatingPrice label="Итого" price="4 756 ⃀" />
      <Button size={48}>К оформлению</Button>
    </FloatingContainer>
}`,...(R=(H=d.parameters)==null?void 0:H.docs)==null?void 0:R.source},description:{story:"«Детальная страница» (Figma 4704:41714): the date and the participants in the pill, «Итого» with «К оформлению» under it.",...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};var O,N,U,K,q;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Появление и уход',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [visible, setVisible] = useState(false);
    return <div style={{
      display: 'grid',
      gap: 12
    }}>
        <Button variant="secondary" onClick={() => setVisible(v => !v)}>
          {visible ? 'Спрятать панель' : 'Показать панель'}
        </Button>
        <div style={{
        position: 'relative',
        height: 220,
        overflow: 'hidden',
        borderRadius: 24,
        background: 'var(--color-bg-sunken-subtle)'
      }}>
          <FloatingContainer visible={visible} homeIndicator={<HomeIndicatorMock />} style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0
        }}>
            <FloatingPrice price="24 500 ⃀" discount={7} oldPrice="25 000 ⃀" />
            <Button size={48}>Выбрать дату</Button>
          </FloatingContainer>
        </div>
      </div>;
  }
}`,...(U=(N=m.parameters)==null?void 0:N.docs)==null?void 0:U.source},description:{story:"Quick toggles reverse the slide from where it is (a CSS transition, not a keyframe).",...(q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:q.description}}};var G,J,L,Q,X;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Тест: скрытая панель недоступна',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [visible, setVisible] = useState(false);
    return <div style={{
      display: 'grid',
      gap: 12
    }}>
        <Button variant="secondary" onClick={() => setVisible(v => !v)}>
          Переключить
        </Button>
        <FloatingContainer visible={visible} data-testid="bar">
          <Button size={48}>Продолжить</Button>
        </FloatingContainer>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const bar = within(canvasElement).getByTestId('bar');
    await expect(bar).toHaveAttribute('aria-hidden', 'true');
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Переключить'
    }));
    await waitFor(() => expect(bar).not.toHaveAttribute('aria-hidden'));
    await expect(bar).toHaveAttribute('data-visible');
  }
}`,...(L=(J=p.parameters)==null?void 0:J.docs)==null?void 0:L.source},description:{story:"The bar toggles `inert`/aria-hidden together with `visible`, so a hidden bar cannot be tabbed to.",...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};const w4=Object.freeze(Object.defineProperty({__proto__:null,CaseTotal:d,Extras:c,Playground:s,States:l,Toggle:m,VisibilityTest:p,__namedExportsOrder:g4,default:x4},Symbol.toStringTag,{value:"Module"}));export{d as C,c as E,w4 as F,s as P,l as S,m as T};
