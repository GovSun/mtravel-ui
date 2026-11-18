import{j as e,r as B}from"./iframe-DuqTOznb.js";import{S as Q}from"./ScrollMatrix-BkRWturZ.js";import{a as n,R as v}from"./Radio-Bz4AqS0k.js";const{expect:i,fn:Z,userEvent:g,within:X}=__STORYBOOK_MODULE_TEST__,$={title:"Components/Radio",component:v,subcomponents:{Radio:n},parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=327-1660"}},args:{defaultValue:"popular",disabled:!1,onValueChange:Z(),"aria-label":"Сортировка",children:null},argTypes:{value:{control:!1},children:{control:!1}}},l=({children:s})=>e.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:s}),y=[{value:"popular",label:"Сначала популярные"},{value:"cheap",label:"Сначала дешевле"},{value:"expensive",label:"Сначала дороже"},{value:"rating",label:"По рейтингу"}],o={render:s=>e.jsx(v,{...s,children:y.map(u=>e.jsx(n,{value:u.value,style:{minHeight:44},children:u.label},u.value))})},c={name:"Все состояния",parameters:{controls:{disable:!0}},render:()=>e.jsx(Q,{children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 84px)",gap:"12px 8px",justifyItems:"center"},children:[e.jsx(l,{children:"Не выбран"}),e.jsx(l,{children:"Выбран"}),e.jsx(l,{children:"Нажат"}),e.jsx(l,{children:"Disabled"}),e.jsx(l,{children:"Disabled, выбран"}),e.jsx(n,{value:"a",name:"states-a",checked:!1,"aria-label":"Не выбран"}),e.jsx(n,{value:"b",name:"states-b",checked:!0,"aria-label":"Выбран"}),e.jsx(n,{value:"c",name:"states-c",checked:!1,forcePressed:!0,"aria-label":"Нажат"}),e.jsx(n,{value:"d",name:"states-d",checked:!1,disabled:!0,"aria-label":"Недоступен"}),e.jsx(n,{value:"e",name:"states-e",checked:!0,disabled:!0,"aria-label":"Недоступен, выбран"})]})})},d={name:"Кейс: сортировка",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){var a;const[u,t]=B.useState("popular");return e.jsxs("div",{style:{display:"grid",gap:12,width:361,maxWidth:"100%"},children:[e.jsx("span",{className:"im-16-b",children:"Сортировка"}),e.jsx(v,{value:u,onValueChange:t,"aria-label":"Сортировка",style:{gap:4},children:y.map(r=>e.jsx(n,{value:r.value,style:{minHeight:44},children:r.label},r.value))}),e.jsxs(l,{children:["Выбрано: ",(a=y.find(r=>r.value===u))==null?void 0:a.label]})]})}},p={name:"Кейс: способ оплаты",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[u,t]=B.useState("now"),a=(r,Y)=>e.jsxs("span",{style:{display:"grid",gap:2},children:[e.jsx("span",{className:"im-16-m",children:r}),e.jsx("span",{className:"im-14-r",style:{color:"var(--color-text-secondary)"},children:Y})]});return e.jsxs("div",{style:{display:"grid",gap:12,width:361,maxWidth:"100%"},children:[e.jsx("span",{className:"im-18-s",children:"Способ оплаты"}),e.jsxs(v,{value:u,onValueChange:t,"aria-label":"Способ оплаты",style:{gap:8},children:[e.jsx(n,{value:"now",style:{minHeight:52},children:a("Оплатить сразу","Через MBANK")}),e.jsx(n,{value:"mplus",style:{minHeight:52},children:a("Рассрочка M+","3 платежа по 5 063 ⃀")})]})]})}},m={name:"Тест: тап и стрелки",render:o.render,play:async({canvasElement:s,args:u})=>{const t=X(s),a=t.getByRole("radio",{name:"Сначала дешевле"});await g.click(t.getByText("Сначала дешевле")),await i(a).toBeChecked(),await i(u.onValueChange).toHaveBeenLastCalledWith("cheap"),a.focus(),await g.keyboard("{ArrowDown}"),await i(t.getByRole("radio",{name:"Сначала дороже"})).toBeChecked();const r=t.getByRole("radio",{name:"Сначала дороже"}).closest("label").querySelector("span > span");await i(getComputedStyle(r).transform).toMatch(/^(none|matrix\(1, 0, 0, 1)/)}},h={name:"Тест: одиночные Radio",render:function(){const[u,t]=B.useState("a");return e.jsxs("div",{style:{display:"grid",gap:4},children:[e.jsx(n,{style:{minHeight:44},value:"a",name:"standalone",checked:u==="a",onCheckedChange:a=>a&&t("a"),children:"Наличными"}),e.jsx(n,{style:{minHeight:44},value:"b",name:"standalone",checked:u==="b",onCheckedChange:a=>a&&t("b"),children:"Картой"})]})},play:async({canvasElement:s})=>{const u=X(s);await i(u.getByRole("radio",{name:"Наличными"})).toBeChecked(),await g.click(u.getByText("Картой")),await i(u.getByRole("radio",{name:"Картой"})).toBeChecked(),await i(u.getByRole("radio",{name:"Наличными"})).not.toBeChecked()}},ee=["Playground","States","Sorting","PaymentCase","BehaviourTest","StandaloneTest"];var x,b,C,E,R;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}>
      {SORT.map(s => <Radio key={s.value} value={s.value} style={{
      minHeight: 44
    }}>
          {s.label}
        </Radio>)}
    </RadioGroup>
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source},description:{story:"Тапай по пунктам: точка появляется большой и «вбивается» в маленькую.",...(R=(E=o.parameters)==null?void 0:E.docs)==null?void 0:R.description}}};var w,k,D,f,j;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Все состояния',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ScrollMatrix>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 84px)',
      gap: '12px 8px',
      justifyItems: 'center'
    }}>
      <Caption>Не выбран</Caption>
      <Caption>Выбран</Caption>
      <Caption>Нажат</Caption>
      <Caption>Disabled</Caption>
      <Caption>Disabled, выбран</Caption>
      <Radio value="a" name="states-a" checked={false} aria-label="Не выбран" />
      <Radio value="b" name="states-b" checked aria-label="Выбран" />
      <Radio value="c" name="states-c" checked={false} forcePressed aria-label="Нажат" />
      <Radio value="d" name="states-d" checked={false} disabled aria-label="Недоступен" />
      <Radio value="e" name="states-e" checked disabled aria-label="Недоступен, выбран" />
    </div>
    </ScrollMatrix>
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source},description:{story:"Figma 327:1660 (two variants) plus press and disabled, which Figma does not have yet.",...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.description}}};var S,F,A,T,V;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Кейс: сортировка',
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
    const [v, setV] = useState('popular');
    return <div style={{
      display: 'grid',
      gap: 12,
      width: 361,
      maxWidth: '100%'
    }}>
        <span className="im-16-b">Сортировка</span>
        <RadioGroup value={v} onValueChange={setV} aria-label="Сортировка" style={{
        gap: 4
      }}>
          {SORT.map(s => <Radio key={s.value} value={s.value} style={{
          minHeight: 44
        }}>
              {s.label}
            </Radio>)}
        </RadioGroup>
        <Caption>Выбрано: {SORT.find(s => s.value === v)?.label}</Caption>
      </div>;
  }
}`,...(A=(F=d.parameters)==null?void 0:F.docs)==null?void 0:A.source},description:{story:"Sorting in a sheet on a 393 screen: one choice, the whole row is tappable.",...(V=(T=d.parameters)==null?void 0:T.docs)==null?void 0:V.description}}};var H,M,_,N,O;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Кейс: способ оплаты',
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
    const [v, setV] = useState('now');
    const option = (title: string, caption: string) => <span style={{
      display: 'grid',
      gap: 2
    }}>
        <span className="im-16-m">{title}</span>
        <span className="im-14-r" style={{
        color: 'var(--color-text-secondary)'
      }}>
          {caption}
        </span>
      </span>;
    return <div style={{
      display: 'grid',
      gap: 12,
      width: 361,
      maxWidth: '100%'
    }}>
        <span className="im-18-s">Способ оплаты</span>
        <RadioGroup value={v} onValueChange={setV} aria-label="Способ оплаты" style={{
        gap: 8
      }}>
          <Radio value="now" style={{
          minHeight: 52
        }}>
            {option('Оплатить сразу', 'Через MBANK')}
          </Radio>
          <Radio value="mplus" style={{
          minHeight: 52
        }}>
            {option('Рассрочка M+', '3 платежа по 5 063 ⃀')}
          </Radio>
        </RadioGroup>
      </div>;
  }
}`,...(_=(M=p.parameters)==null?void 0:M.docs)==null?void 0:_.source},description:{story:`«Способ оплаты» (Figma «Оформление заказа»): два варианта с подписью. Вся строка нажимается, цена рассрочки
считается на каждый платёж.`,...(O=(N=p.parameters)==null?void 0:N.docs)==null?void 0:O.description}}};var P,G,W,K,I;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Тест: тап и стрелки',
  render: Playground.render,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const cheap = canvas.getByRole('radio', {
      name: 'Сначала дешевле'
    });
    await userEvent.click(canvas.getByText('Сначала дешевле'));
    await expect(cheap).toBeChecked();
    await expect(args.onValueChange).toHaveBeenLastCalledWith('cheap');
    cheap.focus();
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('radio', {
      name: 'Сначала дороже'
    })).toBeChecked();
    // from the keyboard the dot is 8 px at once, no punch
    const dot = canvas.getByRole('radio', {
      name: 'Сначала дороже'
    }).closest('label')!.querySelector('span > span')!;
    await expect(getComputedStyle(dot).transform).toMatch(/^(none|matrix\\(1, 0, 0, 1)/);
  }
}`,...(W=(G=m.parameters)==null?void 0:G.docs)==null?void 0:W.source},description:{story:"Interaction test: a tap chooses, arrows move the choice at once.",...(I=(K=m.parameters)==null?void 0:K.docs)==null?void 0:I.description}}};var L,q,U,z,J;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Тест: одиночные Radio',
  render: function Render() {
    const [v, setV] = useState('a');
    return <div style={{
      display: 'grid',
      gap: 4
    }}>
        <Radio style={{
        minHeight: 44
      }} value="a" name="standalone" checked={v === 'a'} onCheckedChange={on => on && setV('a')}>
          Наличными
        </Radio>
        <Radio style={{
        minHeight: 44
      }} value="b" name="standalone" checked={v === 'b'} onCheckedChange={on => on && setV('b')}>
          Картой
        </Radio>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('radio', {
      name: 'Наличными'
    })).toBeChecked();
    await userEvent.click(canvas.getByText('Картой'));
    await expect(canvas.getByRole('radio', {
      name: 'Картой'
    })).toBeChecked();
    await expect(canvas.getByRole('radio', {
      name: 'Наличными'
    })).not.toBeChecked();
  }
}`,...(U=(q=h.parameters)==null?void 0:q.docs)==null?void 0:U.source},description:{story:"A Radio outside a group: controlled with `checked` + `onCheckedChange`; the owner turns the other one off.",...(J=(z=h.parameters)==null?void 0:z.docs)==null?void 0:J.description}}};const te=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:m,PaymentCase:p,Playground:o,Sorting:d,StandaloneTest:h,States:c,__namedExportsOrder:ee,default:$},Symbol.toStringTag,{value:"Module"}));export{o as P,te as R,c as S,d as a,p as b};
