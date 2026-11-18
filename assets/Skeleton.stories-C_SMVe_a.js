import{j as u,r as m}from"./iframe-DuqTOznb.js";import{a as J}from"./stack-ala-archa-CZCiGT1X.js";import{k as V,c as X}from"./stack-kel-tor-CWBtKByR.js";import{L as K,S as n,a as e}from"./Skeleton-D5GPHumj.js";import{B as Y}from"./Button-CKwNO4NU.js";const{expect:c,waitFor:Q}=__STORYBOOK_MODULE_TEST__,Z={title:"Components/Skeleton",component:e,subcomponents:{SkeletonGroup:n,LoadingSwap:K},parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1067-2041"}},args:{width:240,height:16,radius:4},argTypes:{radius:{control:{type:"number",min:0}}}},s={render:t=>u.jsx(n,{children:u.jsx(e,{...t})})};function l(){return u.jsxs("div",{style:{display:"grid",gap:4,width:166},children:[u.jsx("div",{style:{padding:2},children:u.jsx(e,{width:162,height:162,radius:20})}),u.jsxs("div",{style:{display:"grid",gap:4,padding:"0 4px"},children:[u.jsxs("div",{style:{display:"grid",gap:4,padding:"4px 0"},children:[u.jsx(e,{width:127,height:4}),u.jsx(e,{width:65,height:4})]}),u.jsx(e,{width:50,height:6})]})]})}const i={name:"Карточки: один блик на всю группу",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>u.jsxs(n,{label:"Загрузка экскурсий",style:{display:"flex",gap:8,width:361,maxWidth:"100%",overflow:"hidden"},children:[u.jsx(l,{}),u.jsx(l,{}),u.jsx(l,{})]})},r={name:"Загрузка главной",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>u.jsx("div",{style:{width:393,maxWidth:"100%",display:"grid",gap:24},children:u.jsxs(n,{label:"Загрузка главной",style:{display:"grid",gap:24,padding:"0 16px"},children:[u.jsxs("div",{style:{display:"grid",gap:12},children:[u.jsx("span",{className:"im-20-b",children:"Многодневные поездки"}),u.jsxs("div",{style:{display:"flex",gap:8,overflow:"hidden"},children:[u.jsxs("div",{style:{display:"grid",gap:8},children:[u.jsx(e,{width:300,height:168,radius:20}),u.jsx(e,{width:180,height:6}),u.jsx(e,{width:90,height:6})]}),u.jsx(e,{width:60,height:168,radius:20})]})]}),u.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"center"},children:[u.jsx("span",{className:"im-24-b",children:"Сезонная подборка"}),u.jsx(e,{width:"100%",height:320,radius:160,style:{borderBottomLeftRadius:32,borderBottomRightRadius:32}})]}),u.jsxs("div",{style:{display:"grid",gap:12},children:[u.jsx("span",{className:"im-20-b",children:"Новинки"}),[0,1,2].map(t=>u.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[u.jsx(e,{width:72,height:72,radius:16}),u.jsxs("div",{style:{display:"grid",gap:8},children:[u.jsx(e,{width:140,height:6}),u.jsx(e,{width:80,height:6})]})]},t))]})]})})},$=[{photo:J,title:"Ала-Арча и водопад Ак-Сай",price:"от 2 900 ⃀"},{photo:V,title:"Озеро Кель-Тор",price:"от 3 400 ⃀"},{photo:X,title:"Над облаками: Чункурчак",price:"от 4 100 ⃀"}],u4=({photo:t,title:h,price:g})=>u.jsxs("div",{style:{display:"grid",gap:4,width:166},children:[u.jsx("img",{src:t,alt:"",width:162,height:162,style:{margin:2,borderRadius:20,objectFit:"cover"}}),u.jsxs("div",{style:{padding:"0 4px"},children:[u.jsx("p",{className:"im-14-m",style:{margin:0},children:h}),u.jsx("p",{className:"im-14-b",style:{margin:"2px 0 0"},children:g})]})]}),d={name:"Загрузка → контент",parameters:{controls:{disable:!0}},render:function(){const[h,g]=m.useState(!0),[U,z]=m.useState(0);return m.useEffect(()=>{g(!0);const a=window.setTimeout(()=>g(!1),1600);return()=>window.clearTimeout(a)},[U]),u.jsxs("div",{style:{display:"grid",gap:16,width:361,maxWidth:"100%"},children:[u.jsx(K,{loading:h,skeleton:u.jsxs(n,{label:"Загрузка экскурсий",style:{display:"flex",gap:8,overflow:"hidden"},children:[u.jsx(l,{}),u.jsx(l,{}),u.jsx(l,{})]}),style:{overflow:"hidden"},contentStyle:{display:"flex",gap:8},children:$.map(a=>u.jsx(u4,{...a},a.title))}),u.jsx(Y,{variant:"secondary",disabled:h,onClick:()=>z(a=>a+1),children:"Загрузить ещё раз"})]})},play:async({canvasElement:t})=>{await c(t.querySelector('[aria-busy="true"]')).toBeTruthy(),await Q(()=>c(t.querySelector("img")).toBeTruthy(),{timeout:3e3})}},o={name:"Кейс: список строк, одно объявление",parameters:{controls:{disable:!0}},render:()=>u.jsx(n,{label:"Загрузка заказов",style:{display:"grid",gap:12,width:361,maxWidth:"100%"},"data-testid":"outer",children:[0,1,2].map(t=>u.jsxs(n,{style:{display:"flex",gap:12,alignItems:"center"},children:[u.jsx(e,{width:56,height:56,radius:16}),u.jsxs("div",{style:{display:"grid",gap:8},children:[u.jsx(e,{width:160,height:8}),u.jsx(e,{width:90,height:8})]})]},t))}),play:async({canvasElement:t})=>{await c(t.querySelectorAll('[role="status"]').length).toBe(1)}},p={name:"Тест: ref и data-* на группе и блоке",parameters:{controls:{disable:!0}},render:()=>u.jsx(n,{"data-testid":"group",children:u.jsx(e,{width:40,height:8,"data-testid":"bone"})}),play:async({canvasElement:t})=>{await c(t.querySelector('[data-testid="group"]')).toHaveAttribute("role","status"),await c(t.querySelector('[data-testid="bone"]')).toHaveAttribute("data-bone")}},e4=["Playground","Cards","HomeLoading","LoadingToContent","CaseList","TestRef"];var y,x,w,S,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <SkeletonGroup>
      <Skeleton {...args} />
    </SkeletonGroup>
}`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source},description:{story:"Один блок. Блик проходит по нему каждые 1.7 с.",...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.description}}};var E,j,b,A,f;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Карточки: один блик на всю группу',
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
  render: () => <SkeletonGroup label="Загрузка экскурсий" style={{
    display: 'flex',
    gap: 8,
    width: 361,
    maxWidth: '100%',
    overflow: 'hidden'
  }}>
      <CardSkeletonS />
      <CardSkeletonS />
      <CardSkeletonS />
    </SkeletonGroup>
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source},description:{story:"A card row on a 393 screen: one band of highlight runs across all cards — not each block on its own.",...(f=(A=i.parameters)==null?void 0:A.docs)==null?void 0:f.description}}};var k,B,D,C,F;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Загрузка главной',
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
  render: () => <div style={{
    width: 393,
    maxWidth: '100%',
    display: 'grid',
    gap: 24
  }}>
      <SkeletonGroup label="Загрузка главной" style={{
      display: 'grid',
      gap: 24,
      padding: '0 16px'
    }}>
        <div style={{
        display: 'grid',
        gap: 12
      }}>
          <span className="im-20-b">Многодневные поездки</span>
          <div style={{
          display: 'flex',
          gap: 8,
          overflow: 'hidden'
        }}>
            <div style={{
            display: 'grid',
            gap: 8
          }}>
              <Skeleton width={300} height={168} radius={20} />
              <Skeleton width={180} height={6} />
              <Skeleton width={90} height={6} />
            </div>
            <Skeleton width={60} height={168} radius={20} />
          </div>
        </div>
        <div style={{
        display: 'grid',
        gap: 12,
        justifyItems: 'center'
      }}>
          <span className="im-24-b">Сезонная подборка</span>
          <Skeleton width="100%" height={320} radius={160} style={{
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32
        }} />
        </div>
        <div style={{
        display: 'grid',
        gap: 12
      }}>
          <span className="im-20-b">Новинки</span>
          {[0, 1, 2].map(i => <div key={i} style={{
          display: 'flex',
          gap: 12,
          alignItems: 'center'
        }}>
              <Skeleton width={72} height={72} radius={16} />
              <div style={{
            display: 'grid',
            gap: 8
          }}>
                <Skeleton width={140} height={6} />
                <Skeleton width={80} height={6} />
              </div>
            </div>)}
        </div>
      </SkeletonGroup>
    </div>
}`,...(D=(B=r.parameters)==null?void 0:B.docs)==null?void 0:D.source},description:{story:"«Скелетоны · загрузка главной» (Figma «Выходные»): section titles are real, the content is grey.",...(F=(C=r.parameters)==null?void 0:C.docs)==null?void 0:F.description}}};var R,T,L,G,_;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Загрузка → контент',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [loading, setLoading] = useState(true);
    const [run, setRun] = useState(0);
    useEffect(() => {
      setLoading(true);
      const t = window.setTimeout(() => setLoading(false), 1600);
      return () => window.clearTimeout(t);
    }, [run]);
    return <div style={{
      display: 'grid',
      gap: 16,
      width: 361,
      maxWidth: '100%'
    }}>
        <LoadingSwap loading={loading} skeleton={<SkeletonGroup label="Загрузка экскурсий" style={{
        display: 'flex',
        gap: 8,
        overflow: 'hidden'
      }}>
              <CardSkeletonS />
              <CardSkeletonS />
              <CardSkeletonS />
            </SkeletonGroup>} style={{
        overflow: 'hidden'
      }} contentStyle={{
        display: 'flex',
        gap: 8
      }}>
          {TRIPS.map(t => <Card key={t.title} {...t} />)}
        </LoadingSwap>
        <Button variant="secondary" disabled={loading} onClick={() => setRun(r => r + 1)}>
          Загрузить ещё раз
        </Button>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('[aria-busy="true"]')).toBeTruthy();
    await waitFor(() => expect(canvasElement.querySelector('img')).toBeTruthy(), {
      timeout: 3000
    });
  }
}`,...(L=(T=d.parameters)==null?void 0:T.docs)==null?void 0:L.source},description:{story:`Загрузка → контент. Скелетон быстро гаснет, карточки проявляются на его месте из лёгкого размытия, друг за другом.
Нажми «Загрузить ещё раз», чтобы посмотреть снова.`,...(_=(G=d.parameters)==null?void 0:G.docs)==null?void 0:_.description}}};var q,W,I,N,H;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Кейс: список строк, одно объявление',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <SkeletonGroup label="Загрузка заказов" style={{
    display: 'grid',
    gap: 12,
    width: 361,
    maxWidth: '100%'
  }} data-testid="outer">
      {[0, 1, 2].map(i => <SkeletonGroup key={i} style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
          <Skeleton width={56} height={56} radius={16} />
          <div style={{
        display: 'grid',
        gap: 8
      }}>
            <Skeleton width={160} height={8} />
            <Skeleton width={90} height={8} />
          </div>
        </SkeletonGroup>)}
    </SkeletonGroup>,
  play: async ({
    canvasElement
  }) => {
    // one status for the list, not four
    await expect(canvasElement.querySelectorAll('[role="status"]').length).toBe(1);
  }
}`,...(I=(W=o.parameters)==null?void 0:W.docs)==null?void 0:I.source},description:{story:"Кейс «Список»: у каждой строки своя группа (общий блик по строке), но объявляет загрузку только внешняя.",...(H=(N=o.parameters)==null?void 0:N.docs)==null?void 0:H.description}}};var O,P,M;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Тест: ref и data-* на группе и блоке',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <SkeletonGroup data-testid="group">
      <Skeleton width={40} height={8} data-testid="bone" />
    </SkeletonGroup>,
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('[data-testid="group"]')).toHaveAttribute('role', 'status');
    await expect(canvasElement.querySelector('[data-testid="bone"]')).toHaveAttribute('data-bone');
  }
}`,...(M=(P=p.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};const r4=Object.freeze(Object.defineProperty({__proto__:null,Cards:i,CaseList:o,HomeLoading:r,LoadingToContent:d,Playground:s,TestRef:p,__namedExportsOrder:e4,default:Z},Symbol.toStringTag,{value:"Module"}));export{i as C,r as H,d as L,s as P,r4 as S,o as a};
