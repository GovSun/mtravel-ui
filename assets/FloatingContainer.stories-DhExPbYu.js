import{j as u,r as g}from"./iframe-DuqTOznb.js";import{H as t,K as e4}from"./Phone-DvUrDP6C.js";import{F as n}from"./FloatingContainer-C5m_g9pK.js";import{B as e}from"./Button-CKwNO4NU.js";import{D as b}from"./Disclaimer-PDNiSBs0.js";import{F as n4}from"./FloatingFilter-DF6g2FiI.js";import{C as t4}from"./time-CsMT4GVj.js";import{U as r4}from"./people-s6FNqSUd.js";const{expect:x,userEvent:o4,waitFor:a4,within:y}=__STORYBOOK_MODULE_TEST__,i4={title:"Components/FloatingContainer",component:n,parameters:{layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=157-12952"}},decorators:[o=>u.jsx("div",{style:{padding:16,boxSizing:"border-box",width:425,maxWidth:"100%","--floating-container-safe-bottom":"34px"},children:u.jsx(o,{})})],args:{visible:!0,layout:"row",shadow:!0,topText:"",bottomText:"",children:null},argTypes:{layout:{control:"inline-radio",options:["row","column"]},topText:{control:"text"},bottomText:{control:"text"},children:{control:!1},homeIndicator:{control:!1}}},a={render:o=>u.jsx("div",{style:{position:"relative",height:260,overflow:"hidden",borderRadius:24,background:"var(--color-bg-sunken-subtle)"},children:u.jsxs(n,{...o,homeIndicator:u.jsx(t,{}),style:{position:"absolute",left:0,right:0,bottom:0},children:[u.jsx(e,{size:48,variant:"secondary",children:"Назад"}),u.jsx(e,{size:48,children:"Продолжить"})]})})},B=()=>u.jsxs("div",{style:{flex:"0 1 auto",display:"grid"},children:[u.jsx("span",{className:"im-20-b",children:"2 900 ⃀"}),u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:"за человека"})]}),i={name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid",gap:24,padding:"8px 0 24px"},children:[u.jsxs(n,{layout:"column",homeIndicator:u.jsx(t,{}),children:[u.jsx(e,{size:52,fullWidth:!0,children:"Продолжить"}),u.jsx(e,{size:52,variant:"secondary",fullWidth:!0,children:"Назад"})]}),u.jsxs(n,{homeIndicator:u.jsx(t,{}),children:[u.jsx(e,{size:48,variant:"secondary",children:"Кнопка"}),u.jsx(e,{size:48,children:"Кнопка"})]}),u.jsxs(n,{homeIndicator:u.jsx(t,{}),children:[u.jsx(B,{}),u.jsx(e,{size:48,style:{flex:"0 0 auto"},children:"Выбрать дату"})]}),u.jsx(n,{layout:"column",topText:"Осталось 3 места",bottomText:"Нажимая «Оплатить», вы соглашаетесь с правилами сервиса MTravel",homeIndicator:u.jsx(t,{}),children:u.jsx(e,{size:48,fullWidth:!0,children:"Оплатить 5 800 ⃀"})}),u.jsx(n,{shadow:!1,homeIndicator:u.jsx(t,{}),children:u.jsx(e,{size:48,fullWidth:!0,children:"Готово (без тени — внутри шторки)"})})]})},s={name:"Фильтр, дисклеймер, клавиатура",parameters:{controls:{disable:!0}},render:function(){const[r,p]=g.useState(!1);return u.jsxs("div",{style:{display:"grid",gap:24,padding:"8px 0 24px"},children:[u.jsx(n,{layout:"column",userContent:u.jsx("span",{className:"im-16-m",children:"Экскурсия на 29 мая, 2 взрослых"}),disclaimer:u.jsx(b,{checked:r,onCheckedChange:p,children:"Я подтверждаю, что ознакомлен(а) и соглашаюсь с правилами предоставления сервиса MTravel"}),homeIndicator:u.jsx(t,{}),children:u.jsx(e,{size:52,fullWidth:!0,disabled:!r,children:"Оплатить 5 800 ⃀"})}),u.jsxs(n,{filter:u.jsx(n4,{items:[{label:"29 июл",icon:u.jsx(t4,{size:14})},{label:"1 участник",icon:u.jsx(r4,{size:14})}]}),homeIndicator:u.jsx(t,{}),children:[u.jsx(B,{}),u.jsx(e,{size:48,style:{flex:"0 0 auto"},children:"Выбрать дату"})]}),u.jsx(n,{layout:"column",disclaimerPlacement:"below",disclaimer:u.jsx(b,{variant:"center",children:"Нажимая «Оплатить», вы соглашаетесь с правилами предоставления сервиса MTravel"}),keyboard:u.jsx(e4,{}),homeIndicator:u.jsx(t,{}),children:u.jsx(e,{size:52,fullWidth:!0,children:"Готово"})})]})}},l={name:"Кейс: «Показать N предложений»",parameters:{controls:{disable:!0}},render:()=>u.jsxs(n,{layout:"row",shadow:!1,homeIndicator:u.jsx(t,{}),children:[u.jsx(e,{size:48,variant:"secondary",children:"Сбросить"}),u.jsx(e,{size:48,children:"Показать 128"})]})},d={name:"Кейс: итого и «Оплатить»",parameters:{controls:{disable:!0}},render:()=>u.jsxs(n,{homeIndicator:u.jsx(t,{}),children:[u.jsxs("div",{style:{flex:"0 1 auto",display:"grid"},children:[u.jsx("span",{className:"im-14-m",style:{color:"var(--color-text-tertiary)"},children:"Итого"}),u.jsx("span",{className:"im-20-b",children:"5 800 ⃀"})]}),u.jsx(e,{size:48,style:{flex:"0 0 auto"},children:"Оплатить"})]})},c={name:"Появление и уход",parameters:{controls:{disable:!0}},render:function(){const[r,p]=g.useState(!1);return u.jsxs("div",{style:{display:"grid",gap:12},children:[u.jsx(e,{variant:"secondary",onClick:()=>p(h=>!h),children:r?"Спрятать панель":"Показать панель"}),u.jsx("div",{style:{position:"relative",height:220,overflow:"hidden",borderRadius:24,background:"var(--color-bg-sunken-subtle)"},children:u.jsxs(n,{visible:r,homeIndicator:u.jsx(t,{}),style:{position:"absolute",left:0,right:0,bottom:0},children:[u.jsx(B,{}),u.jsx(e,{size:48,style:{flex:"0 0 auto"},children:"Выбрать дату"})]})})]})}},m={name:"Тест: скрытая панель недоступна",parameters:{controls:{disable:!0}},render:function(){const[r,p]=g.useState(!1);return u.jsxs("div",{style:{display:"grid",gap:12},children:[u.jsx(e,{variant:"secondary",onClick:()=>p(h=>!h),children:"Переключить"}),u.jsx(n,{visible:r,"data-testid":"bar",children:u.jsx(e,{size:48,children:"Продолжить"})})]})},play:async({canvasElement:o})=>{const r=y(o).getByTestId("bar");await x(r).toHaveAttribute("aria-hidden","true"),await o4.click(y(o).getByRole("button",{name:"Переключить"})),await a4(()=>x(r).not.toHaveAttribute("aria-hidden")),await x(r).toHaveAttribute("data-visible")}},s4=["Playground","States","Extras","CaseShowOffers","CaseTotal","Toggle","VisibilityTest"];var C,v,F,E,f;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(v=a.parameters)==null?void 0:v.docs)==null?void 0:F.source},description:{story:"Переключи «visible»: панель уезжает вниз за край и возвращается.",...(f=(E=a.parameters)==null?void 0:E.docs)==null?void 0:f.description}}};var j,w,A,I,z;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
      <FloatingContainer homeIndicator={<HomeIndicatorMock />}>
        <Price />
        <Button size={48} style={{
        flex: '0 0 auto'
      }}>
          Выбрать дату
        </Button>
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
}`,...(A=(w=i.parameters)==null?void 0:w.docs)==null?void 0:A.source},description:{story:"Figma 157:12952: Default (column), Horizontal (row), a price with a button, texts above and below.",...(z=(I=i.parameters)==null?void 0:I.docs)==null?void 0:z.description}}};var D,k,S,T,M;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
          <Price />
          <Button size={48} style={{
          flex: '0 0 auto'
        }}>
            Выбрать дату
          </Button>
        </FloatingContainer>
        <FloatingContainer layout="column" disclaimerPlacement="below" disclaimer={<Disclaimer variant="center">Нажимая «Оплатить», вы соглашаетесь с правилами предоставления сервиса MTravel</Disclaimer>} keyboard={<KeyboardMock />} homeIndicator={<HomeIndicatorMock />}>
          <Button size={52} fullWidth>
            Готово
          </Button>
        </FloatingContainer>
      </div>;
  }
}`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source},description:{story:`Figma: Show disclaimer, Center disclamer, Filter, Show keyboard, User content, Show top text / bottom text.
Variant Text and result are a price (or «Итого») with a button, with the filter pill floating above them.`,...(M=(T=s.parameters)==null?void 0:T.docs)==null?void 0:M.description}}};var H,R,W,_,P;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Кейс: «Показать N предложений»',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <FloatingContainer layout="row" shadow={false} homeIndicator={<HomeIndicatorMock />}>
      <Button size={48} variant="secondary">
        Сбросить
      </Button>
      <Button size={48}>Показать 128</Button>
    </FloatingContainer>
}`,...(W=(R=l.parameters)==null?void 0:R.docs)==null?void 0:W.source},description:{story:"Каталог: после фильтров кнопка показывает, сколько предложений нашлось.",...(P=(_=l.parameters)==null?void 0:_.docs)==null?void 0:P.description}}};var N,V,O,U,K;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Кейс: итого и «Оплатить»',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <FloatingContainer homeIndicator={<HomeIndicatorMock />}>
      <div style={{
      flex: '0 1 auto',
      display: 'grid'
    }}>
        <span className="im-14-m" style={{
        color: 'var(--color-text-tertiary)'
      }}>
          Итого
        </span>
        <span className="im-20-b">5 800 ⃀</span>
      </div>
      <Button size={48} style={{
      flex: '0 0 auto'
    }}>
        Оплатить
      </Button>
    </FloatingContainer>
}`,...(O=(V=d.parameters)==null?void 0:V.docs)==null?void 0:O.source},description:{story:"Оформление: итог и кнопка оплаты.",...(K=(U=d.parameters)==null?void 0:U.docs)==null?void 0:K.description}}};var G,J,L,Q,X;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
            <Price />
            <Button size={48} style={{
            flex: '0 0 auto'
          }}>
              Выбрать дату
            </Button>
          </FloatingContainer>
        </div>
      </div>;
  }
}`,...(L=(J=c.parameters)==null?void 0:J.docs)==null?void 0:L.source},description:{story:"Quick toggles reverse the slide from where it is (a CSS transition, not a keyframe).",...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,q,Z,$,u4;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:Z.source},description:{story:"The bar toggles `inert`/aria-hidden together with `visible`, so a hidden bar cannot be tabbed to.",...(u4=($=m.parameters)==null?void 0:$.docs)==null?void 0:u4.description}}};const B4=Object.freeze(Object.defineProperty({__proto__:null,CaseShowOffers:l,CaseTotal:d,Extras:s,Playground:a,States:i,Toggle:c,VisibilityTest:m,__namedExportsOrder:s4,default:i4},Symbol.toStringTag,{value:"Module"}));export{l as C,s as E,B4 as F,a as P,i as S,c as T,d as a};
