(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{15:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(7),s=a.n(c),r=(a(15),a(9)),i=a(3),l=a(4),u=a(6),d=a(5),h=a(10),m=a.n(h),p=(a(36),a(0)),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.handleChange=function(t){e.setState({value:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.value;""!==a.trim()&&(e.props.onSubmit(a),e.setState({value:""}))},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"searchbar",children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",children:[Object(p.jsx)("button",{type:"submit",className:"button",children:Object(p.jsx)("span",{className:"button-label",children:"Search"})}),Object(p.jsx)("input",{className:"input",type:"text",name:"value",value:this.state.value,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),g=a(2),b=a.n(g);a(38);function f(e){var t=e.id,a=e.webformatURL,n=e.tags,o=e.largeImageURL,c=e.showModal,s=e.data;return Object(p.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return s(o,n)},children:Object(p.jsx)("img",{className:"ImageGalleryItem-image",src:a,alt:n,onClick:c})},t)}a(39);function v(e){var t=e.images,a=e.showModal,n=e.modalData;return Object(p.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,o=e.webformatURL,c=e.tags,s=e.largeImageURL;return Object(p.jsx)(f,{webformatURL:o,tags:c,largeImageURL:s,data:n,showModal:a},t)}))})}f.propTypes={images:b.a.array,showModal:b.a.func,modalData:b.a.func};a(40);var y=document.querySelector("#modal-root"),O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).onCloseByClick=function(t){"DIV"===t.target.nodeName&&e.props.onClose()},e.onCloseByKedown=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.onCloseByClick),window.addEventListener("keydown",this.onCloseByKedown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onCloseByKedown)}},{key:"render",value:function(){var e=this.props,t=e.onClose,a=e.src,n=e.alt;return Object(c.createPortal)(Object(p.jsx)("div",{className:"Overlay",onClose:t,children:Object(p.jsx)("div",{className:"Modal",children:Object(p.jsx)("img",{src:a,alt:n})})}),y)}}]),a}(n.Component);a(41);function w(e){var t=e.onClick;return Object(p.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})}a(42);var C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={BaseURL:"https://pixabay.com/api/",keyURL:"23510997-d251ce775a3590a28eaf32d04",value:"",page:1,images:[],loading:!1,status:"idli",showModal:!1,modalSrc:"",modalAlt:""},e.handleFormSubmit=function(t){return e.setState({value:t})},e.loadMore=function(){var t=e.state,a=t.BaseURL,n=t.value,o=t.page,c=t.keyURL;e.setState((function(e){return{page:e.page+1}})),fetch("".concat(a,"?q=").concat(n,"&page=").concat(o,"&key=").concat(c,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(t){return e.setState((function(e){return{images:[].concat(Object(r.a)(e.images),Object(r.a)(t.hits)),status:"resolved"}}))}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.modalData=function(t,a){e.setState({modalSrc:t,modalAlt:a})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,o=n.BaseURL,c=n.value,s=n.page,r=n.keyURL;t.value!==c&&(this.setState({status:"pending"}),fetch("".concat(o,"?q=").concat(c,"&page=").concat(s,"&key=").concat(r,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return a.setState({images:e.hits,page:s+1,status:"resolved"})})))}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.images,n=e.showModal,o=e.modalSrc,c=e.modalAlt;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(j,{onSubmit:this.handleFormSubmit}),"idli"===t&&Object(p.jsx)("div",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0430\u043d\u0438\u0435"}),"pending"===t&&Object(p.jsx)(m.a,{className:"spin",type:"Bars",color:"#00BFFF",height:200,width:200}),"resolved"===t&&Object(p.jsx)(v,{images:a,showModal:this.toggleModal,modalData:this.modalData}),0!==a.length&&Object(p.jsx)(w,{onClick:this.loadMore}),n&&Object(p.jsx)(O,{onClose:this.toggleModal,src:o,alt:c})]})}}]),a}(n.Component);s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d617841f.chunk.js.map