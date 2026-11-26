import{j as e,r as v}from"./iframe-DyD5Yel4.js";import{S as U}from"./ScrollMatrix-Rhyk2V53.js";import{R as a,a as g}from"./Radio-qMCK-bX2.js";import{B as z}from"./Button-grGIhY78.js";import{B as J}from"./BottomSheet-lYDzhEd4.js";const{expect:r,fn:N,userEvent:B,within:q}=__STORYBOOK_MODULE_TEST__,X={title:"Components/Radio",component:g,subcomponents:{Radio:a},parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=327-1660"}},args:{defaultValue:"popular",disabled:!1,onValueChange:N(),"aria-label":"Сортировка",children:null},argTypes:{value:{control:!1},children:{control:!1}}},m=({children:n})=>e.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:n}),K=[{value:"popular",label:"Популярное"},{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"},{value:"expensive",label:"Сначала дороже"},{value:"cheap",label:"Сначала дешевле"}],o={render:n=>e.jsx(g,{...n,children:K.map(u=>e.jsx(a,{value:u.value,style:{minHeight:44},children:u.label},u.value))})},l={name:"Все состояния",parameters:{controls:{disable:!0}},render:()=>e.jsx(U,{children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 84px)",gap:"12px 8px",justifyItems:"center"},children:[e.jsx(m,{children:"Не выбран"}),e.jsx(m,{children:"Выбран"}),e.jsx(m,{children:"Нажат"}),e.jsx(m,{children:"Disabled"}),e.jsx(m,{children:"Disabled, выбран"}),e.jsx(a,{value:"a",name:"states-a",checked:!1,"aria-label":"Не выбран"}),e.jsx(a,{value:"b",name:"states-b",checked:!0,"aria-label":"Выбран"}),e.jsx(a,{value:"c",name:"states-c",checked:!1,forcePressed:!0,"aria-label":"Нажат"}),e.jsx(a,{value:"d",name:"states-d",checked:!1,disabled:!0,"aria-label":"Недоступен"}),e.jsx(a,{value:"e",name:"states-e",checked:!0,disabled:!0,"aria-label":"Недоступен, выбран"})]})})},i={name:"Кейс · Результаты: сортировка",parameters:{layout:"fullscreen",controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[u,t]=v.useState("popular"),[s,p]=v.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(z,{variant:"secondary",onClick:()=>p(!0),children:"Сортировать"}),e.jsx(J,{open:s,onOpenChange:p,header:"left",title:"Сортировать",primaryAction:{label:"Применить",onClick:()=>p(!1)},children:e.jsx(g,{value:u,onValueChange:t,"aria-label":"Сортировать",style:{gap:4,padding:"0 var(--spacing-lg)"},children:K.map(h=>e.jsx(a,{value:h.value,style:{minHeight:44},children:h.label},h.value))})})]})}},c={name:"Тест: тап и стрелки",render:o.render,play:async({canvasElement:n,args:u})=>{const t=q(n),s=t.getByRole("radio",{name:"Сначала дороже"});await B.click(t.getByText("Сначала дороже")),await r(s).toBeChecked(),await r(u.onValueChange).toHaveBeenLastCalledWith("expensive"),s.focus(),await B.keyboard("{ArrowDown}"),await r(t.getByRole("radio",{name:"Сначала дешевле"})).toBeChecked();const p=t.getByRole("radio",{name:"Сначала дешевле"}).closest("label").querySelector("span > span");await r(getComputedStyle(p).transform).toMatch(/^(none|matrix\(1, 0, 0, 1)/)}},d={name:"Тест: одиночные Radio",render:function(){const[u,t]=v.useState("a");return e.jsxs("div",{style:{display:"grid",gap:4},children:[e.jsx(a,{style:{minHeight:44},value:"a",name:"standalone",checked:u==="a",onCheckedChange:s=>s&&t("a"),children:"Наличными"}),e.jsx(a,{style:{minHeight:44},value:"b",name:"standalone",checked:u==="b",onCheckedChange:s=>s&&t("b"),children:"Картой"})]})},play:async({canvasElement:n})=>{const u=q(n);await r(u.getByRole("radio",{name:"Наличными"})).toBeChecked(),await B.click(u.getByText("Картой")),await r(u.getByRole("radio",{name:"Картой"})).toBeChecked(),await r(u.getByRole("radio",{name:"Наличными"})).not.toBeChecked()}},Y=["Playground","States","Sorting","BehaviourTest","StandaloneTest"];var y,x,C,b,E;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}>
      {SORT.map(s => <Radio key={s.value} value={s.value} style={{
      minHeight: 44
    }}>
          {s.label}
        </Radio>)}
    </RadioGroup>
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source},description:{story:"Тапай по пунктам: точка появляется большой и «вбивается» в маленькую.",...(E=(b=o.parameters)==null?void 0:b.docs)==null?void 0:E.description}}};var R,k,f,D,w;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(f=(k=l.parameters)==null?void 0:k.docs)==null?void 0:f.source},description:{story:"Figma 327:1660 (two variants) plus press and disabled, which Figma does not have yet.",...(w=(D=l.parameters)==null?void 0:D.docs)==null?void 0:w.description}}};var S,j,A,F,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Кейс · Результаты: сортировка',
  parameters: {
    layout: 'fullscreen',
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
    const [open, setOpen] = useState(true);
    return <>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Сортировать
        </Button>
        <BottomSheet open={open} onOpenChange={setOpen} header="left" title="Сортировать" primaryAction={{
        label: 'Применить',
        onClick: () => setOpen(false)
      }}>
          <RadioGroup value={v} onValueChange={setV} aria-label="Сортировать" style={{
          gap: 4,
          padding: '0 var(--spacing-lg)'
        }}>
            {SORT.map(s => <Radio key={s.value} value={s.value} style={{
            minHeight: 44
          }}>
                {s.label}
              </Radio>)}
          </RadioGroup>
        </BottomSheet>
      </>;
  }
}`,...(A=(j=i.parameters)==null?void 0:j.docs)==null?void 0:A.source},description:{story:`Figma «Результаты» → «Фильтрация» → шторка «Сортировать» (948:68454): один выбор, вся строка нажимается,
внизу «Применить». Выбран «Популярное», как в макете.`,...(T=(F=i.parameters)==null?void 0:F.docs)==null?void 0:T.description}}};var O,V,_,H,M;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Тест: тап и стрелки',
  render: Playground.render,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const expensive = canvas.getByRole('radio', {
      name: 'Сначала дороже'
    });
    await userEvent.click(canvas.getByText('Сначала дороже'));
    await expect(expensive).toBeChecked();
    await expect(args.onValueChange).toHaveBeenLastCalledWith('expensive');
    expensive.focus();
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('radio', {
      name: 'Сначала дешевле'
    })).toBeChecked();
    // from the keyboard the dot is 8 px at once, no punch
    const dot = canvas.getByRole('radio', {
      name: 'Сначала дешевле'
    }).closest('label')!.querySelector('span > span')!;
    await expect(getComputedStyle(dot).transform).toMatch(/^(none|matrix\\(1, 0, 0, 1)/);
  }
}`,...(_=(V=c.parameters)==null?void 0:V.docs)==null?void 0:_.source},description:{story:"Interaction test: a tap chooses, arrows move the choice at once.",...(M=(H=c.parameters)==null?void 0:H.docs)==null?void 0:M.description}}};var P,G,I,L,W;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=(G=d.parameters)==null?void 0:G.docs)==null?void 0:I.source},description:{story:"A Radio outside a group: controlled with `checked` + `onCheckedChange`; the owner turns the other one off.",...(W=(L=d.parameters)==null?void 0:L.docs)==null?void 0:W.description}}};const ae=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:c,Playground:o,Sorting:i,StandaloneTest:d,States:l,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{o as P,ae as R,l as S,i as a};
