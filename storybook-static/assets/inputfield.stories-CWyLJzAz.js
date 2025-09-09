import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as $}from"./iframe-BsW35s3L.js";import{c as g,L}from"./loader-circle-upWpDGeP.js";import"./preload-helper-D9Z9MdNV.js";/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],_=g("eye-off",M);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],D=g("eye",P);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],R=g("x",V),E=({value:h,onChange:b,label:f,placeholder:j,helperText:x,errorMessage:y,disabled:v,invalid:w,variant:T="outlined",size:k="md",type:z="text",clearable:C,loading:c,theme:a="light"})=>{const[p,q]=$.useState(!1),u=z==="password",I=k==="sm"?"text-sm h-8 px-2 pr-8":k==="lg"?"text-lg h-12 px-4 pr-10":"text-base h-10 px-3 pr-9",S=T==="filled"?`border ${a==="dark"?"border-zinc-600 bg-zinc-700":"border-zinc-200 bg-zinc-100"} focus:ring focus:ring-blue-400`:T==="ghost"?"border-transparent bg-transparent focus:ring focus:ring-blue-400":`border ${a==="dark"?"border-zinc-600 bg-zinc-800":"border-zinc-300 bg-white"} focus:ring focus:ring-blue-400`,N=a==="dark"?"text-white placeholder-zinc-400":"text-black placeholder-zinc-500",m=`absolute right-2 text-zinc-500 ${a==="dark"?"hover:text-white":"hover:text-black"}`;return e.jsxs("div",{className:`flex flex-col space-y-1 ${v?"opacity-50 cursor-not-allowed":""}`,children:[f&&e.jsx("label",{className:`font-semibold text-sm ${a==="dark"?"text-zinc-500":"text-zinc-800"}`,children:f}),e.jsxs("div",{className:"relative flex items-center",children:[e.jsx("input",{type:u&&p?"text":z,value:h,onChange:b,placeholder:j,disabled:v,className:`
            w-full rounded-xl outline-none transition-all duration-200 ease-in-out
            shadow-sm focus:shadow-md
            ${I} ${S} ${N}
            ${w?"border-red-500 focus:border-red-500 focus:ring-red-300":a==="dark"?"focus:border-blue-400 focus:ring-blue-500":"focus:border-blue-500 focus:ring-blue-300"}
          `}),c&&e.jsx(L,{className:m+" animate-spin",size:18}),C&&h&&!u&&!c&&e.jsx("button",{type:"button",onClick:()=>b?.({target:{value:""}}),className:m,children:e.jsx(R,{size:18})}),u&&!c&&e.jsx("button",{type:"button",onClick:()=>q(!p),className:m,children:p?e.jsx(_,{size:18}):e.jsx(D,{size:18})})]}),w&&y?e.jsx("p",{className:"text-xs text-red-500 mt-1",children:y}):x?e.jsx("p",{className:`text-xs mt-1 ${a==="dark"?"text-zinc-400":"text-zinc-500"}`,children:x}):null]})};E.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'ghost'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text'",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'light'",computed:!1}}}};const U={title:"Components/InputField",component:E,tags:["autodocs"]},r={args:{label:"Username",placeholder:"Enter your username",helperText:"This is a helper text"}},s={args:{label:"Email",placeholder:"Enter your email",invalid:!0,errorMessage:"Invalid email address"}},t={args:{label:"Password",placeholder:"Enter password",disabled:!0}},n={args:{label:"Password",placeholder:"Enter password",type:"password"}},l={args:{label:"Search",placeholder:"Type to search...",clearable:!0,value:"Initial text"}},o={args:{label:"Loading field",placeholder:"Wait...",loading:!0}},i={args:{label:"Dark themed input",placeholder:"Enter something",theme:"dark"}},d={args:{label:"Custom",placeholder:"Testing variants",variant:"filled",size:"lg"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'This is a helper text'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    invalid: true,
    errorMessage: 'Invalid email address'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    clearable: true,
    value: 'Initial text'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Loading field',
    placeholder: 'Wait...',
    loading: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dark themed input',
    placeholder: 'Enter something',
    theme: 'dark'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom',
    placeholder: 'Testing variants',
    variant: 'filled',
    size: 'lg'
  }
}`,...d.parameters?.docs?.source}}};const W=["Default","Invalid","Disabled","PasswordToggle","Clearable","Loading","DarkTheme","VariantsAndSizes"];export{l as Clearable,i as DarkTheme,r as Default,t as Disabled,s as Invalid,o as Loading,n as PasswordToggle,d as VariantsAndSizes,W as __namedExportsOrder,U as default};
