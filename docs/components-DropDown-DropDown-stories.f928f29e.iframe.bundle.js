"use strict";(self.webpackChunkledfx=self.webpackChunkledfx||[]).push([[3215],{"./src/components/SchemaForm/components/DropDown/DropDown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GroupedDropdown:()=>GroupedDropdown,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js"),_DropDown__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/SchemaForm/components/DropDown/DropDown.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"UI Components/SchemaForm/Schema Components",component:_DropDown__WEBPACK_IMPORTED_MODULE_0__.A,argTypes:{type:{control:!1}},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.A,{style:{maxWidth:800},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{children:Story()})})],parameters:{options:{showPanel:!0,panelPosition:"bottom"}}},GroupedDropdown=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DropDown__WEBPACK_IMPORTED_MODULE_0__.A,(0,_home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)({},args))).bind({});GroupedDropdown.args={title:"Grouped Dropdown",showFilter:!1,groups:{"Group 1":[{name:"Item 1",id:"item11",category:"Group 1"},{name:"Item2",id:"item12",category:"Group 1"}],"Group 2":[{name:"Item 1",id:"item21",category:"Group 2"}]},value:"item11",onChange:void 0};const __namedExportsOrder=["GroupedDropdown"];GroupedDropdown.parameters={...GroupedDropdown.parameters,docs:{...GroupedDropdown.parameters?.docs,source:{originalSource:"args => <DropDown {...args} />",...GroupedDropdown.parameters?.docs?.source}}}},"./src/components/SchemaForm/components/BladeFrame.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_BladeFrame});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),InfoRounded=__webpack_require__("./node_modules/@mui/icons-material/esm/InfoRounded.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),ClickAwayListener=__webpack_require__("./node_modules/@mui/material/ClickAwayListener/ClickAwayListener.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Tooltip=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tooltip_Tooltip=props=>{const[open,setOpen]=(0,react.useState)(!1),handleTooltipClose=()=>{setOpen(!1)};return(0,jsx_runtime.jsx)(ClickAwayListener.x,{onClickAway:handleTooltipClose,children:(0,jsx_runtime.jsx)(Box.A,{sx:{pr:.5,pl:1,display:"flex"},children:(0,jsx_runtime.jsx)(Tooltip.A,(0,objectSpread2.A)((0,objectSpread2.A)({onClose:handleTooltipClose,open,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0},props),{},{children:(0,jsx_runtime.jsx)(InfoRounded.A,{sx:{cursor:"pointer"},onClick:()=>{setOpen(!0)},fontSize:"small"})}))})})},components_Tooltip=Tooltip_Tooltip;Tooltip_Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};const Root=(0,styled.Ay)("div")((_ref=>{let{theme}=_ref;return{minWidth:"23.5%",padding:"16px 1.2rem 6px 1.2rem",border:"1px solid",borderColor:theme.palette.divider,borderRadius:"10px",position:"relative",display:"flex",alignItems:"center",height:"auto",margin:"0.5rem 0","@media (max-width: 580px)":{width:"100% !important",margin:"0.5rem 0"},"& > label":{top:"-0.75rem",display:"flex",alignItems:"center",left:"1rem",padding:"0 0.3rem",position:"absolute",fontVariant:"all-small-caps",fontSize:"0.9rem",letterSpacing:"0.1rem",color:theme.palette.text.secondary,backgroundColor:theme.palette.background.paper,boxSizing:"border-box"}}})),BladeFrame=_ref2=>{let{index,title,children,full=!1,style={width:"unset",order:0},required=!1,variant="outlined",className,disabled,labelStyle,onClick,tooltip}=_ref2;return"outlined"===variant?(0,jsx_runtime.jsxs)(Root,{className:className||"",style:(0,objectSpread2.A)((0,objectSpread2.A)({},style),{},{width:full?"100%":style.width}),onClick,children:[(0,jsx_runtime.jsxs)("label",{style:(0,objectSpread2.A)({},labelStyle),className:"MuiFormLabel-root".concat(disabled?" Mui-disabled":"","  step-effect-").concat(index),children:[title,required?"*":"",tooltip?(0,jsx_runtime.jsx)(components_Tooltip,{sx:{ml:1,mr:.5},title:tooltip,arrow:!0,placement:"top",children:(0,jsx_runtime.jsx)(InfoRounded.A,{fontSize:"small"})}):null]}),children]}):children},components_BladeFrame=BladeFrame;BladeFrame.__docgenInfo={description:"",methods:[],displayName:"BladeFrame",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}},index:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"undefined",computed:!0}},children:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:"undefined",computed:!0}},full:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:"{\n  width: 'unset',\n  order: 0\n}",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'contained' | 'inherit'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'contained'"},{name:"literal",value:"'inherit'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:"",defaultValue:{value:"undefined",computed:!0}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"undefined",computed:!0}},labelStyle:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:"undefined",computed:!0}},onClick:{required:!1,tsType:{name:"union",raw:"any | undefined",elements:[{name:"any"},{name:"undefined"}]},description:"",defaultValue:{value:"undefined",computed:!0}},tooltip:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"undefined",computed:!0}}}}},"./src/components/SchemaForm/components/DropDown/DropDown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>DropDown});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Dialog=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),DialogContent=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),ToggleButtonGroup=__webpack_require__("./node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js"),ToggleButton=__webpack_require__("./node_modules/@mui/material/ToggleButton/ToggleButton.js"),Autocomplete=__webpack_require__("./node_modules/@mui/material/Autocomplete/Autocomplete.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),react=__webpack_require__("./node_modules/react/index.js"),ArrowDropDown=__webpack_require__("./node_modules/@mui/icons-material/esm/ArrowDropDown.js"),Search=__webpack_require__("./node_modules/@mui/icons-material/esm/Search.js");const DropDown_styles=(0,__webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js").A)((()=>({FormRow:{display:"flex",flexDirection:"row",border:"1px solid",borderRadius:"10px",margin:"0 0 0.5rem","@media (max-width: 580px)":{flexDirection:"column"}},FormLabel:{marginLeft:"1rem",paddingTop:"0.5rem","@media (max-width: 580px)":{display:"none"}},FormSelect:{flexGrow:1,marginLeft:"1rem",paddingTop:"0.5rem","&:before, &:after":{display:"none"},"& > .MuiSelect-select:focus":{backgroundColor:"unset"}},FormListHeaders:{pointerEvents:"none",color:"#fff"},FormListItem:{paddingLeft:"2rem"},FormToggleWrapper:{padding:"5px 0","@media (max-width: 580px)":{order:-1}},FormToggle:{fontSize:"0.64rem","@media (max-width: 580px)":{flexGrow:1}}})));var BladeFrame=__webpack_require__("./src/components/SchemaForm/components/BladeFrame.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const EffectTypeDialog=_ref=>{var _yoptAll$find;let{value,onChange,groups,showFilter,title}=_ref;const[dialogOpen,setDialogOpen]=(0,react.useState)(!1),classes=DropDown_styles(),[formats,setFormats]=(0,react.useState)((()=>groups&&Object.keys(groups).map((c=>c||[])))),yopt=(0,react.useMemo)((()=>[...Object.keys(groups||{}).flatMap((c=>formats&&-1!==formats.indexOf(c)&&groups[c].flatMap((e=>[{value:e.id,label:e.name,group:c}])))).filter((e=>!(null==e||!e.value))).sort(((a,b)=>{const order=["Non-Reactive","BPM","Classic","Atmospheric","2D","Matrix"];return order.indexOf(a.group)-order.indexOf(b.group)})).sort(((a,b)=>{const order=["Diagnostic"];return order.indexOf(a.group)-order.indexOf(b.group)}))]),[groups,formats]),yoptAll=(0,react.useMemo)((()=>[...Object.keys(groups||{}).flatMap((c=>groups[c].flatMap((e=>[{value:e.id,label:e.name,group:c}])))).filter((e=>!(null==e||!e.value)))]),[groups]);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(BladeFrame.A,{title,onClick:()=>setDialogOpen(!0),style:{cursor:"pointer",marginBottom:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:0},children:(0,jsx_runtime.jsxs)(Typography.A,{variant:"body1",sx:{flexGrow:1,padding:"16px 1.2rem 14px 1.2rem",borderRadius:"10px",border:"1px solid #666666","&:hover":{border:"1px solid #f9f9fb"}},children:[(null===(_yoptAll$find=yoptAll.find((o=>o.value===value)))||void 0===_yoptAll$find?void 0:_yoptAll$find.label)||"Choose Effect",(0,jsx_runtime.jsx)(ArrowDropDown.A,{sx:{position:"absolute",right:10,top:16,paddingBottom:1,fontSize:30,zIndex:0}})]})}),(0,jsx_runtime.jsx)(Dialog.A,{open:dialogOpen,onClose:()=>{setDialogOpen(!1)},"aria-labelledby":"form-dialog-title",sx:{"& .MuiDialog-paper":{overflowY:"hidden"}},children:(0,jsx_runtime.jsxs)(DialogContent.A,{sx:{height:"80vh",maxHeight:"200vh",overflow:"hidden",padding:"5px !important","& .MuiAutocomplete-listbox":{maxHeight:"calc(80vh - ".concat(showFilter?112:66,"px) !important"),paddingTop:"0px !important"},"& .MuiAutocomplete-groupLabel":{backgroundColor:"#3f3f41 !important"}},children:[showFilter&&(0,jsx_runtime.jsx)(ToggleButtonGroup.A,{value:formats,onChange:(_,newFormats)=>{setFormats(newFormats)},"aria-label":"text formatting",className:classes.FormToggleWrapper,children:groups&&Object.keys(groups).map(((c,i)=>(0,jsx_runtime.jsx)(ToggleButton.A,{className:classes.FormToggle,value:c,"aria-label":c,children:c},i)))}),(0,jsx_runtime.jsx)(Autocomplete.A,{autoFocus:!0,popupIcon:(0,jsx_runtime.jsx)(Search.A,{}),open:!0,fullWidth:!0,disablePortal:!0,value:"string"==typeof value&&""!==value?value:null,onChange:(e,b)=>{const ne=(0,objectSpread2.A)((0,objectSpread2.A)({},e),{},{target:(0,objectSpread2.A)((0,objectSpread2.A)({},e.target),{},{value:b.value})});return onChange&&(setDialogOpen(!1),onChange(ne)),null},sx:{pb:"0px",width:"100%",minWidth:"300px",height:"100%",maxHeight:"100%","& .MuiAutocomplete-popupIndicator":{transform:"none",right:5},"& .MuiAutocomplete-paper":{height:"100%",maxHeight:"100%"}},groupBy:option=>option.group,options:yopt,isOptionEqualToValue:(option,nvalue)=>option.value===nvalue,disableClearable:!0,getOptionLabel:option=>{var _yopt$find;return"string"!=typeof option?option.label:(null===(_yopt$find=yopt.find((o=>o.value===option)))||void 0===_yopt$find?void 0:_yopt$find.label)||""},renderInput:params=>{var _yopt$find2;return(0,jsx_runtime.jsx)(TextField.A,(0,objectSpread2.A)((0,objectSpread2.A)({},params),{},{value:(null===(_yopt$find2=yopt.find((o=>o.value===value)))||void 0===_yopt$find2?void 0:_yopt$find2.label)||"",variant:"outlined",fullWidth:!0}))}})]})})]},"effectTypeSelector")},Dialogs_EffectTypeDialog=EffectTypeDialog;EffectTypeDialog.__docgenInfo={description:"",methods:[],displayName:"EffectTypeDialog",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: any) => typeof e",signature:{arguments:[{type:{name:"any"},name:"e"}],return:{name:"e"}}},description:""},groups:{required:!1,tsType:{name:"any"},description:""},showFilter:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"string"},description:""}}};const EffectDropDown=_ref=>{let{value="",onChange,title="Effect Type",groups={"Group 1":[{name:"Item 1",id:"item1",category:"Group 1"},{name:"Item2",id:"item2",category:"Group 1"}],"Group 2":[{name:"Item 1",id:"item11",category:"Group 2"}]},showFilter=!1}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Dialogs_EffectTypeDialog,{title,value,onChange,groups,showFilter})})},DropDown=EffectDropDown;EffectDropDown.__docgenInfo={description:"",methods:[],displayName:"EffectDropDown",props:{value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: any) => typeof e",signature:{arguments:[{type:{name:"any"},name:"e"}],return:{name:"e"}}},description:"",defaultValue:{value:"undefined",computed:!0}},groups:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:"{\n  'Group 1': [\n    {\n      name: 'Item 1',\n      id: 'item1',\n      category: 'Group 1'\n    },\n    {\n      name: 'Item2',\n      id: 'item2',\n      category: 'Group 1'\n    }\n  ],\n  'Group 2': [\n    {\n      name: 'Item 1',\n      id: 'item11',\n      category: 'Group 2'\n    }\n  ]\n}",computed:!1}},showFilter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Effect Type'",computed:!1}}}}}}]);