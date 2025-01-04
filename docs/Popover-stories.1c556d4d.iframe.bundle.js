"use strict";(self.webpackChunkledfx=self.webpackChunkledfx||[]).push([[6134],{"./node_modules/@mui/icons-material/esm/Check.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__.A)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check")},"./node_modules/@mui/icons-material/esm/Close.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__.A)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},"./node_modules/@mui/icons-material/esm/Delete.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__.A)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},"./node_modules/@mui/material/Fab/Fab.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Fab_Fab});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getFabUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiFab",slot)}const Fab_fabClasses=(0,generateUtilityClasses.A)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]);var rootShouldForwardProp=__webpack_require__("./node_modules/@mui/material/styles/rootShouldForwardProp.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),memoTheme=__webpack_require__("./node_modules/@mui/material/utils/memoTheme.js"),createSimplePaletteValueFilter=__webpack_require__("./node_modules/@mui/material/utils/createSimplePaletteValueFilter.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FabRoot=(0,styled.Ay)(ButtonBase.A,{name:"MuiFab",slot:"Root",shouldForwardProp:prop=>(0,rootShouldForwardProp.A)(prop)||"classes"===prop,overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],styles[`size${(0,capitalize.A)(ownerState.size)}`],"inherit"===ownerState.color&&styles.colorInherit,styles[(0,capitalize.A)(ownerState.size)],styles[ownerState.color]]}})((0,memoTheme.A)((({theme})=>({...theme.typography.button,minHeight:36,transition:theme.transitions.create(["background-color","box-shadow","border-color"],{duration:theme.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(theme.vars||theme).zIndex.fab,boxShadow:(theme.vars||theme).shadows[6],"&:active":{boxShadow:(theme.vars||theme).shadows[12]},color:theme.vars?theme.vars.palette.text.primary:theme.palette.getContrastText?.(theme.palette.grey[300]),backgroundColor:(theme.vars||theme).palette.grey[300],"&:hover":{backgroundColor:(theme.vars||theme).palette.grey.A100,"@media (hover: none)":{backgroundColor:(theme.vars||theme).palette.grey[300]},textDecoration:"none"},[`&.${Fab_fabClasses.focusVisible}`]:{boxShadow:(theme.vars||theme).shadows[6]},variants:[{props:{size:"small"},style:{width:40,height:40}},{props:{size:"medium"},style:{width:48,height:48}},{props:{variant:"extended"},style:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48}},{props:{variant:"extended",size:"small"},style:{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34}},{props:{variant:"extended",size:"medium"},style:{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},{props:{color:"inherit"},style:{color:"inherit"}}]}))),(0,memoTheme.A)((({theme})=>({variants:[...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter.A)(["dark","contrastText"])).map((([color])=>({props:{color},style:{color:(theme.vars||theme).palette[color].contrastText,backgroundColor:(theme.vars||theme).palette[color].main,"&:hover":{backgroundColor:(theme.vars||theme).palette[color].dark,"@media (hover: none)":{backgroundColor:(theme.vars||theme).palette[color].main}}}})))]}))),(0,memoTheme.A)((({theme})=>({[`&.${Fab_fabClasses.disabled}`]:{color:(theme.vars||theme).palette.action.disabled,boxShadow:(theme.vars||theme).shadows[0],backgroundColor:(theme.vars||theme).palette.action.disabledBackground}})))),Fab_Fab=react.forwardRef((function Fab(inProps,ref){const props=(0,DefaultPropsProvider.b)({props:inProps,name:"MuiFab"}),{children,className,color="default",component="button",disabled=!1,disableFocusRipple=!1,focusVisibleClassName,size="large",variant="circular",...other}=props,ownerState={...props,color,component,disabled,disableFocusRipple,size,variant},classes=(ownerState=>{const{color,variant,classes,size}=ownerState,slots={root:["root",variant,`size${(0,capitalize.A)(size)}`,"inherit"===color?"colorInherit":color]},composedClasses=(0,composeClasses.A)(slots,getFabUtilityClass,classes);return{...classes,...composedClasses}})(ownerState);return(0,jsx_runtime.jsx)(FabRoot,{className:(0,clsx.A)(classes.root,className),component,disabled,focusRipple:!disableFocusRipple,focusVisibleClassName:(0,clsx.A)(classes.focusVisible,focusVisibleClassName),ownerState,ref,...other,classes,children})}))},"./node_modules/@mui/material/IconButton/IconButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconButton_IconButton});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),memoTheme=__webpack_require__("./node_modules/@mui/material/utils/memoTheme.js"),createSimplePaletteValueFilter=__webpack_require__("./node_modules/@mui/material/utils/createSimplePaletteValueFilter.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getIconButtonUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiIconButton",slot)}const IconButton_iconButtonClasses=(0,generateUtilityClasses.A)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButtonRoot=(0,styled.Ay)(ButtonBase.A,{name:"MuiIconButton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"default"!==ownerState.color&&styles[`color${(0,capitalize.A)(ownerState.color)}`],ownerState.edge&&styles[`edge${(0,capitalize.A)(ownerState.edge)}`],styles[`size${(0,capitalize.A)(ownerState.size)}`]]}})((0,memoTheme.A)((({theme})=>({textAlign:"center",flex:"0 0 auto",fontSize:theme.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(theme.vars||theme).palette.action.active,transition:theme.transitions.create("background-color",{duration:theme.transitions.duration.shortest}),variants:[{props:props=>!props.disableRipple,style:{"--IconButton-hoverBg":theme.vars?`rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.X4)(theme.palette.action.active,theme.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]}))),(0,memoTheme.A)((({theme})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter.A)()).map((([color])=>({props:{color},style:{color:(theme.vars||theme).palette[color].main}}))),...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter.A)()).map((([color])=>({props:{color},style:{"--IconButton-hoverBg":theme.vars?`rgba(${(theme.vars||theme).palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.X4)((theme.vars||theme).palette[color].main,theme.palette.action.hoverOpacity)}}))),{props:{size:"small"},style:{padding:5,fontSize:theme.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:theme.typography.pxToRem(28)}}],[`&.${IconButton_iconButtonClasses.disabled}`]:{backgroundColor:"transparent",color:(theme.vars||theme).palette.action.disabled}})))),IconButton_IconButton=react.forwardRef((function IconButton(inProps,ref){const props=(0,DefaultPropsProvider.b)({props:inProps,name:"MuiIconButton"}),{edge=!1,children,className,color="default",disabled=!1,disableFocusRipple=!1,size="medium",...other}=props,ownerState={...props,edge,color,disabled,disableFocusRipple,size},classes=(ownerState=>{const{classes,disabled,color,edge,size}=ownerState,slots={root:["root",disabled&&"disabled","default"!==color&&`color${(0,capitalize.A)(color)}`,edge&&`edge${(0,capitalize.A)(edge)}`,`size${(0,capitalize.A)(size)}`]};return(0,composeClasses.A)(slots,getIconButtonUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(IconButtonRoot,{className:(0,clsx.A)(classes.root,className),centerRipple:!0,focusRipple:!disableFocusRipple,disabled,ref,...other,ownerState,children})}))},"./node_modules/@mui/material/ListItemIcon/ListItemIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/utils/memoTheme.js"),_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),_listItemIconClasses_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/ListItemIcon/listItemIconClasses.js"),_List_ListContext_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/List/ListContext.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ListItemIconRoot=(0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__.Ay)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"flex-start"===ownerState.alignItems&&styles.alignItemsFlexStart]}})((0,_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_5__.A)((({theme})=>({minWidth:56,color:(theme.vars||theme).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]})))),__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function ListItemIcon(inProps,ref){const props=(0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_6__.b)({props:inProps,name:"MuiListItemIcon"}),{className,...other}=props,context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext_js__WEBPACK_IMPORTED_MODULE_7__.A),ownerState={...props,alignItems:context.alignItems},classes=(ownerState=>{const{alignItems,classes}=ownerState,slots={root:["root","flex-start"===alignItems&&"alignItemsFlexStart"]};return(0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_2__.A)(slots,_listItemIconClasses_js__WEBPACK_IMPORTED_MODULE_3__.f,classes)})(ownerState);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ListItemIconRoot,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_8__.A)(classes.root,className),ownerState,ref,...other})}))},"./src/components/Popover/Popover.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Popover__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Popover/Popover.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"UI Components/Popover",component:_Popover__WEBPACK_IMPORTED_MODULE_0__.A,argTypes:{type:{options:["menuItem","button"],control:{type:"select"}}},parameters:{options:{showPanel:!0}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Popover__WEBPACK_IMPORTED_MODULE_0__.A,(0,_home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)({},args)),Default=Template.bind({});Default.args={};const Example=Template.bind({});Example.args={type:"button"};const __namedExportsOrder=["Default","Example"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Popover {...args} />",...Default.parameters?.docs?.source}}},Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"args => <Popover {...args} />",...Example.parameters?.docs?.source}}}},"./src/components/Popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js"),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/ListItemIcon/ListItemIcon.js"),_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),_mui_material__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/Fab/Fab.js"),_mui_material__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_material__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/material/Popover/Popover.js"),_mui_material__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/icons-material/esm/Delete.js"),_mui_icons_material__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mui/icons-material/esm/Check.js"),_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@mui/icons-material/esm/Close.js"),use_long_press__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/use-long-press/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Popover=_ref=>{let{onConfirm,onCancel,confirmDisabled,confirmContent,onSingleClick,onDoubleClick,openOnDoubleClick=!1,openOnLongPress=!1,noIcon=!1,disabled=!1,variant="contained",color="secondary",vertical="center",horizontal="left",size="small",text="Are you sure?",label,anchorOrigin,transformOrigin,startIcon,icon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__.A,{}),content,footer,className,style={},sx,sxButton,popoverStyle,wrapperStyle,type="button",open=!1,children}=_ref;const theme=(0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.A)(),[anchorEl,setAnchorEl]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),openPopover=event=>{setAnchorEl((()=>event.currentTarget||event.target))},longPress=(0,use_long_press__WEBPACK_IMPORTED_MODULE_1__.HZ)((e=>openPopover(e)),{onCancel:e=>{onSingleClick&&onSingleClick(e)},threshold:1e3,captureEvent:!0}),opened=Boolean(anchorEl),id=opened?"simple-popover":void 0;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setAnchorEl(null)}),[open]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:(0,_home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)({display:"initial",margin:0},wrapperStyle),onClick:e=>{e.preventDefault(),e.stopPropagation()},children:["menuItem"===type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,{className,onClick:e=>{e.preventDefault(),onSingleClick&&onSingleClick(e),openPopover(e)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,{children:icon}),label]}):openOnLongPress?"button"===type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.A,(0,_home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)({"aria-describedby":id,variant,color,size,className,style,sx:sxButton,startIcon:!noIcon&&startIcon,disabled},longPress),{},{children:[label,!startIcon&&!noIcon&&icon]})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,(0,_home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)({"aria-label":"clear-data"},longPress),{},{disabled,style:(0,_home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)({margin:"8px"},style),sx:{color:theme.palette.primary.contrastText,bgcolor:theme.palette.primary.main,"&:hover":{bgcolor:theme.palette.primary.light}},children:!startIcon&&!noIcon&&icon})):"button"===type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.A,{"aria-describedby":id,variant,color,onClick:e=>{e.preventDefault(),openOnDoubleClick||openPopover(e),onSingleClick&&onSingleClick(e)},size,className,style,sx:(0,_home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)({},sxButton),{},{color:"light"===theme.palette.mode?"#000":"#fff",bgcolor:"transparent","&:hover":{color:"light"===theme.palette.mode?"#fff":"#000",bgcolor:theme.palette.primary.main}}),startIcon:!noIcon&&startIcon,disabled,onDoubleClick:e=>{e.preventDefault(),openOnDoubleClick&&openPopover(e),onDoubleClick&&onDoubleClick(e)},children:[label,!startIcon&&!noIcon&&icon,children]}):"iconbutton"===type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.A,{color,style,onClick:e=>openPopover(e),disabled,children:!startIcon&&!noIcon&&icon}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,{"aria-label":"clear-data",onClick:e=>{e.preventDefault(),openOnDoubleClick||openPopover(e),onSingleClick&&onSingleClick(e)},onDoubleClick:e=>{e.preventDefault(),openOnDoubleClick&&openPopover(e),onDoubleClick&&onDoubleClick(e)},disabled,style:{margin:"8px"},sx:(0,_home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)({bgcolor:theme.palette.primary.main,"&:hover":{bgcolor:theme.palette.primary.light}},sx),children:[!startIcon&&!noIcon&&icon,children]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Ay,{id,open:opened,anchorEl,onClose:()=>{setAnchorEl(null)},anchorOrigin:anchorOrigin||{vertical,horizontal},transformOrigin:transformOrigin||{vertical,horizontal:"center"===horizontal?"center":"right"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:(0,_home_runner_work_LedFx_Frontend_v2_LedFx_Frontend_v2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)({display:"flex"},popoverStyle),children:[content||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.A,{sx:{padding:theme.spacing(2)},children:text}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.A,{disabled:confirmDisabled,"aria-describedby":id,variant:"contained",color:"primary",onClick:e=>{e.preventDefault(),onConfirm&&onConfirm(e),setAnchorEl(null)},children:confirmContent||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_13__.A,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.A,{"aria-describedby":id,color:"primary",onClick:e=>{e.preventDefault(),onCancel&&onCancel(e),setAnchorEl(null)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__.A,{})})]}),footer]})]})},__WEBPACK_DEFAULT_EXPORT__=Popover;Popover.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{type:{required:!1,tsType:{name:"union",raw:"'menuItem' | 'button' | 'fab' | 'iconbutton'",elements:[{name:"literal",value:"'menuItem'"},{name:"literal",value:"'button'"},{name:"literal",value:"'fab'"},{name:"literal",value:"'iconbutton'"}]},description:"Render as [Button](https://mui.com/api/button/) or [MenuItem](https://mui.com/api/menu-item/) <br />\nexamples: [Button](https://mui.com/components/buttons/), [MenuItem](https://mui.com/components/menu-item/)",defaultValue:{value:"'button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'text' | 'outlined' | 'contained' | undefined",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'contained'"},{name:"undefined"}]},description:"Set the [variant](https://mui.com/components/buttons/#basic-button)",defaultValue:{value:"'contained'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'inherit' | 'secondary' | 'primary' | 'success' | 'error' | 'info' | 'warning' | undefined",elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"undefined"}]},description:"Set the [color](https://mui.com/components/buttons/#color)",defaultValue:{value:"'secondary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | undefined",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"undefined"}]},description:"Set the [size](https://mui.com/components/buttons/#sizes)",defaultValue:{value:"'small'",computed:!1}},openOnDoubleClick:{required:!1,tsType:{name:"boolean"},description:"Should the popup open on doubleclick? Ignored if openOnLongPress is `true`",defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Open state",defaultValue:{value:"false",computed:!1}},openOnLongPress:{required:!1,tsType:{name:"boolean"},description:"Should the popup open on longpress? (openOnDoubleClick gets ignored if set)",defaultValue:{value:"false",computed:!1}},vertical:{required:!1,tsType:{name:"union",raw:"number | 'center' | 'bottom' | 'top'",elements:[{name:"number"},{name:"literal",value:"'center'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"}]},description:"Set Popover [position](https://mui.com/components/popover/#anchor-playground)",defaultValue:{value:"'center'",computed:!1}},horizontal:{required:!1,tsType:{name:"union",raw:"number | 'center' | 'left' | 'right'",elements:[{name:"number"},{name:"literal",value:"'center'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Set Popover [position](https://mui.com/components/popover/#anchor-playground)",defaultValue:{value:"'left'",computed:!1}},anchorOrigin:{required:!1,tsType:{name:"PopoverOriginalProps['anchorOrigin']",raw:"PopoverOriginalProps['anchorOrigin']"},description:"Set Popover [position](https://mui.com/components/popover/#anchor-playground)"},transformOrigin:{required:!1,tsType:{name:"PopoverOriginalProps['transformOrigin']",raw:"PopoverOriginalProps['transformOrigin']"},description:"Set Popover [position](https://mui.com/components/popover/#anchor-playground)"},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: any) => typeof e",signature:{arguments:[{type:{name:"any"},name:"e"}],return:{name:"e"}}},description:"Function to call when confirm is clicked"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: any) => typeof e",signature:{arguments:[{type:{name:"any"},name:"e"}],return:{name:"e"}}},description:"Function to call when cancel is clicked"},onSingleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: any) => typeof e",signature:{arguments:[{type:{name:"any"},name:"e"}],return:{name:"e"}}},description:"Function to call when button is clicked"},onDoubleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: any) => typeof e",signature:{arguments:[{type:{name:"any"},name:"e"}],return:{name:"e"}}},description:"Function to call when button is doubleclicked"},noIcon:{required:!1,tsType:{name:"boolean"},description:"Remove Icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},confirmDisabled:{required:!1,tsType:{name:"boolean"},description:"flag indicator"},confirmContent:{required:!1,tsType:{name:"any"},description:"flag indicator"},text:{required:!1,tsType:{name:"string"},description:"Text to show in the popup",defaultValue:{value:"'Are you sure?'",computed:!1}},label:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:"[Label](https://mui.com/components/buttons/#buttons-with-icons-and-label)",defaultValue:{value:"undefined",computed:!0}},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"[startIcon](https://mui.com/components/buttons/#buttons-with-icons-and-label)"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"[Icon](https://mui.com/components/material-icons/)",defaultValue:{value:"<Delete />",computed:!1}},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content of the Popover"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Footer"},className:{required:!1,tsType:{name:"string"},description:"JSX className"},sxButton:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"JSX style for the Button"},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"JSX style for the Fab"},style:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:"JSX style",defaultValue:{value:"{}",computed:!1}},popoverStyle:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:"JSX style"},wrapperStyle:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:"JSX style"}}}},"./node_modules/use-long-press/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HZ:()=>J});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),l=(e=>(e.Mouse="mouse",e.Touch="touch",e.Pointer="pointer",e))(l||{}),d=(e=>(e.CancelledByMovement="cancelled-by-movement",e.CancelledByRelease="cancelled-by-release",e.CancelledOutsideElement="cancelled-outside-element",e))(d||{});const A=()=>"object"==typeof window?window?.PointerEvent??null:null,z=()=>"object"==typeof window?window?.TouchEvent??null:null;function U(e){const{nativeEvent:t}=e,u=z();return u&&t instanceof u||"touches"in e}function X(e){const t=A();return e.nativeEvent instanceof MouseEvent&&!(t&&e.nativeEvent instanceof t)}function Y(e){const{nativeEvent:t}=e;if(!t)return!1;const u=A();return u&&t instanceof u||"pointerId"in t}function R(e){return X(e)||U(e)||Y(e)}function j(e){return U(e)?{x:e.touches[0].pageX,y:e.touches[0].pageY}:X(e)||Y(e)?{x:e.pageX,y:e.pageY}:null}function J(e,{threshold:t=400,captureEvent:u=!1,detect:y=l.Pointer,cancelOnMovement:w=!1,cancelOutsideElement:v=!0,filterEvents:p,onStart:M,onMove:C,onFinish:L,onCancel:b}={}){const P=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),I=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((n=>r=>{c.current||R(r)&&(void 0!==p&&!p(r)||(u&&r.persist(),M?.(r,{context:n}),f.current=j(r),c.current=!0,I.current=r.currentTarget,a.current=setTimeout((()=>{T.current&&(T.current(r,{context:n}),P.current=!0)}),t)))}),[u,p,M,t]),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((n=>(r,o)=>{R(r)&&c.current&&(f.current=null,u&&r.persist(),P.current?L?.(r,{context:n}):c.current&&b?.(r,{context:n,reason:o??d.CancelledByRelease}),P.current=!1,c.current=!1,void 0!==a.current&&clearTimeout(a.current))}),[u,L,b]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((n=>r=>{if(C?.(r,{context:n}),!1!==w&&f.current){const o=j(r);if(o){const B=!0===w?25:w,D={x:Math.abs(o.x-f.current.x),y:Math.abs(o.y-f.current.y)};(D.x>B||D.y>B)&&i(n)(r,d.CancelledByMovement)}}}),[i,w,C]),q=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((n=>{if(null===e)return{};switch(y){case l.Mouse:{const r={onMouseDown:E(n),onMouseMove:m(n),onMouseUp:i(n)};return v&&(r.onMouseLeave=o=>{i(n)(o,d.CancelledOutsideElement)}),r}case l.Touch:return{onTouchStart:E(n),onTouchMove:m(n),onTouchEnd:i(n)};case l.Pointer:{const r={onPointerDown:E(n),onPointerMove:m(n),onPointerUp:i(n)};return v&&(r.onPointerLeave=o=>i(n)(o,d.CancelledOutsideElement)),r}}}),[e,i,v,y,m,E]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(window)return window.addEventListener("mouseup",n),window.addEventListener("touchend",n),window.addEventListener("pointerup",n),()=>{window.removeEventListener("mouseup",n),window.removeEventListener("touchend",n),window.removeEventListener("pointerup",n)};function n(r){const o=function G(e){return{target:e.target,currentTarget:e.currentTarget,nativeEvent:e,persist:()=>{}}}(r);i()(o)}}),[i]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>{void 0!==a.current&&clearTimeout(a.current)}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{T.current=e}),[e]),q}}}]);