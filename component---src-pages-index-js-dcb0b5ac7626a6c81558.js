(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),l=a(0),o=a.n(l),c=(a(149),a(154)),s=a.n(c),r=a(164),m=a(152),u=function(e){return o.a.createElement("header",{id:"header",className:"alt"},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:"https://i.postimg.cc/wBSXqTB4/DSC7109.jpg",alt:""})),o.a.createElement("h1",null,"Zaid Hassan"),o.a.createElement("p",null,"Software Developer | Photographer"),o.a.createElement("p",null,"React | Redux | Node.js | JavaScript | PostgreSQL | HTML5/CSS3 | Material-UI |"))},d=a(168),h=a.n(d),w=a(35),p=a.n(w),g=a(182),E=a.n(g),M=a(4),L=a.n(M),y=function(e){return e.children},f=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(p()(t)),t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){E.a.polyfill()},a.handleClick=function(e){e.preventDefault();var t=0,a=!0,n=this.props,i=n.type,l=n.element,o=n.offset,c=n.timeout;if(i&&l)switch(i){case"class":a=!!(t=document.getElementsByClassName(l)[0]);break;case"id":a=!!(t=document.getElementById(l))}a?this.scrollTo(t,o,c):console.log("Element not found: "+l)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout(function(){window.scroll({top:n+t,left:0,behavior:"smooth"})},a):window.scroll({top:n+t,left:0,behavior:"smooth"})},a.render=function(){return o.a.createElement(y,null,"object"==typeof this.props.children?o.a.cloneElement(this.props.children,{onClick:this.handleClick}):o.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(o.a.Component);f.propTypes={type:L.a.string,element:L.a.string,offset:L.a.number,timeout:L.a.number,children:L.a.node.isRequired};var N=f,j=function(e){return o.a.createElement("nav",{id:"nav",className:e.sticky?"alt":""},o.a.createElement(h.a,{items:["intro","first","second","cta"],currentClassName:"is-active",offset:-300},o.a.createElement("li",null,o.a.createElement(N,{type:"id",element:"intro"},o.a.createElement("a",{href:"#"},"About Me"))),o.a.createElement("li",null,o.a.createElement(N,{type:"id",element:"first"},o.a.createElement("a",{href:"#"},"Skills"))),o.a.createElement("li",null,o.a.createElement(N,{type:"id",element:"second"},o.a.createElement("a",{href:"#"},"Projects"))),o.a.createElement("li",null,o.a.createElement(N,{type:"id",element:"cta"},o.a.createElement("a",{href:"#"},"Lets Connect!")))))},D=function(e){function t(t){var a;return(a=e.call(this,t)||this)._handleWaypointEnter=function(){a.setState(function(){return{stickyNav:!1}})},a._handleWaypointLeave=function(){a.setState(function(){return{stickyNav:!0}})},a.state={stickyNav:!1,pics:["https://cdn-images-1.medium.com/max/1026/1*3SVfBkNZI2f-sspiq59xcw.png","https://cdn-images-1.medium.com/max/614/1*SRL22ADht1NU4LXUeU4YVg.png","https://11m5ki43y82budjol1gjvv5s-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/node-js-main.jpg","https://cdn-images-1.medium.com/max/1200/1*7AOhGDnRL2eyJMUidCHZEA.jpeg","https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png","https://cdn-images-1.medium.com/max/1200/1*eXIBeNlLhz4Pe6vDrYkXLQ.png","https://pbs.twimg.com/profile_images/997239666641223680/l7PYMOSm_400x400.jpg"]},a}return i()(t,e),t.prototype.render=function(){var e=this.state.pics.map(function(e,t){return o.a.createElement("div",{className:"skillslogo"},o.a.createElement("img",{className:"skillslogopic",src:e}))});return o.a.createElement(m.a,null,o.a.createElement(s.a,{title:"Zaid Hassan - Software Developer"}),o.a.createElement(u,null),o.a.createElement(r.a,{onEnter:this._handleWaypointEnter,onLeave:this._handleWaypointLeave}),o.a.createElement(j,{sticky:this.state.stickyNav}),o.a.createElement("div",{id:"main"},o.a.createElement("section",{id:"intro",className:"main"},o.a.createElement("div",{className:"spotlight"},o.a.createElement("div",{className:"content"},o.a.createElement("header",{className:"major"},o.a.createElement("h2",null,"Chemical Engineer Turned Software Developer")),o.a.createElement("p",null,"Born and Raised in Clifton, NJ. I am a full stack developer now residing in the DFW who is open to relocating back to my hometown. I came to Dallas with my family after working in Ecommerce and in my previous field."),o.a.createElement("p",null,"I never thought I'd make a jump in Software after finishing a Bachelor's in Chemical Engineering from New Jersey Insituite of Technology until I came to Dallas and wanted a career change that has only made me more confident in my abilities to learn new skills. I have loved technology since I was very young building HTML websites."),o.a.createElement("p",null,"I went to work at the age of 14 with my immigrant parents, dedicated to always learn what I can and support my family. I love different sort of activities such as photography, soccer and traveling! Thank you for reading!")),o.a.createElement("span",{className:"image"},o.a.createElement("img",{src:"https://i.postimg.cc/J0TmSC9r/pic.jpg",alt:"Picture of Me"})))),o.a.createElement("section",{id:"first",className:"main special"},o.a.createElement("header",{className:"major"},o.a.createElement("h2",null,"Tech I Have Used")),o.a.createElement("div",{className:"features"},e),o.a.createElement("footer",{className:"major"})),o.a.createElement("section",{id:"second",className:"main special"},o.a.createElement("header",{className:"major"},o.a.createElement("h2",null,"Projects Worked On"),o.a.createElement("p",null,'"Learning is not attained by chance, it must be sought for with ardor and attended to with dilgence"',o.a.createElement("br",null),"-Abigail Adams")),o.a.createElement("div",{className:"entireprofileContainer"},o.a.createElement("div",{className:"projectContaier"},o.a.createElement("a",{href:"http://www.bookscout.live"},o.a.createElement("img",{src:"https://i.postimg.cc/hPqNNzRM/pic1.png",alt:"",className:"projectimg"}),o.a.createElement("div",null,o.a.createElement("h2",null,"Book Scout"),o.a.createElement("p",null,"Book Scout is Amazon Book Selling app made for third party sellers to scan books quickly and easily. You start off by entering an ISBN number, which will hit Amazon's MWS API and return you neccassary data in order for users to make the best buying decision."),o.a.createElement("p",null,"It utilizes Material UI components, ChartJS and Inventory Tracking to to keep users up to date!")))),o.a.createElement("div",{className:"projectContaier"},o.a.createElement("a",{href:"http://www.awayfromhome.live"},o.a.createElement("img",{src:"https://i.postimg.cc/L61sR05R/pic2.png",alt:"",className:"projectimg"}),o.a.createElement("div",null,o.a.createElement("h2",null,"awayFromHome"),o.a.createElement("p",null,"Having a hard time finding your right hotel? awayFromHome will help you solve your frustration by providing you hotels based off your travel dates in the locations you are visiting. (Only customized to Dallas)."),o.a.createElement("p",null,"Front-End Engineer on this project which used new technologies such as React Hooks and Thunk. This was a team effort which was required task assignments, standups and usage of github issues.")))))),o.a.createElement("section",{id:"cta",className:"main special"},o.a.createElement("header",{className:"major"},o.a.createElement("h2",null,"Where to Find Me"),o.a.createElement("p",null,"I am active through LinkedIn, Email, and Instagram,",o.a.createElement("br",null),o.a.createElement("div",null,"For a more direct contact:"),o.a.createElement("span",null," Call/Text: 862-264-9889 "),o.a.createElement("a",{href:"https://mail.google.com/mail/u/0/?view=cm&fs=1&to=zaid.m.hassan@gmail.com&su=@Portfolio&tf=1"},o.a.createElement("br",null),o.a.createElement("div",{id:"contact"}," Email: zaid.m.hassan@gmail.com ")))),o.a.createElement("footer",{className:"major"},o.a.createElement("ul",{className:"actions"},o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.instagram.com/iamzaidoooo/?hl=en"},o.a.createElement("img",{src:"https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png",className:"connectInstalogo"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/zaidmhassan"},o.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/linkedin_circle-512.png",className:"connectLinkedInlogo"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/zaidohassan"},o.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/25/25231.svg",className:"connectGithublogo"}))))))))},t}(o.a.Component);t.default=D},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(4),o=a.n(l);a(33),a(148),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),l=a(4),o=a.n(l),c=a(55),s=a(2),r=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};r.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=r},151:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iODVweCIgaGVpZ2h0PSI4NXB4IiB2aWV3Qm94PSIwIDAgODAgODAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwIDgwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQwLDBjMjIuMDkxLDAsNDAsMTcuOTA5LDQwLDQwUzYyLjA5MSw4MCw0MCw4MFMwLDYyLjA5MSwwLDQwUzE3LjkwOSwwLDQwLDB6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjOGNjOWYwIiBkPSJNNTAuMzc4LDMyLjU3NmMwLDEuMDA1LTAuODE1LDEuODIxLTEuODIxLDEuODIxYy0xLjAwNSwwLTEuODItMC44MTYtMS44Mi0xLjgyMQ0KCQkJYzAtMS4wMDUsMC44MTUtMS44MjEsMS44Mi0xLjgyMUM0OS41NjMsMzAuNzU1LDUwLjM3OCwzMS41NzEsNTAuMzc4LDMyLjU3NnogTTU0LjYyNywyNy4xMTNjMC0wLjM0MS0wLjMwNC0wLjYwNy0wLjY0Ni0wLjYwNw0KCQkJYy02LjYwMSwwLTEwLjIyMywxLjUxOC0xNC45NjQsNi4yNDFjLTEuMDgxLDEuMS0yLjIsMi4zNTItMy4zMzgsMy42OTlsLTcuMTg4LDAuMzc5Yy0wLjE5LDAuMDE5LTAuMzc5LDAuMTMzLTAuNDkzLDAuMzA0DQoJCQlsLTQuMjQ5LDcuMjg0Yy0wLjEzMywwLjIyOC0wLjA5NSwwLjUzLDAuMDk1LDAuNzM5bDEuMjE0LDEuMjE1YzAuMTE0LDAuMTEzLDAuMjg1LDAuMTcsMC40MzcsMC4xN2MwLjA1NywwLDAuMTE0LDAsMC4xNy0wLjAyDQoJCQlsNS4yMzUtMS42MTFsNS4zMyw1LjMzbC0xLjYxMiw1LjIzNmMtMC4wNTcsMC4yMDksMCwwLjQzNywwLjE1MiwwLjYwNmwxLjIxNCwxLjIxNGMwLjEzMywwLjExNCwwLjI4NCwwLjE3MSwwLjQzNiwwLjE3MQ0KCQkJYzAuMTE0LDAsMC4yMDgtMC4wMjEsMC4zMDQtMC4wNzVsNy4yODMtNC4yNWMwLjE3MS0wLjExMywwLjI4NC0wLjMwNCwwLjMwNS0wLjQ5MmwwLjM3OS03LjE5YzEuMzQ3LTEuMTM4LDIuNTk5LTIuMjU3LDMuNjk5LTMuMzM5DQoJCQlDNTIuODgyLDM3LjYwMyw1NC42MjcsMzMuNDExLDU0LjYyNywyNy4xMTN6Ii8+DQoJPC9nPg0KPC9zdmc+"},152:function(e,t,a){"use strict";var n=a(7),i=a.n(n),l=a(0),o=a.n(l),c=(a(153),a(149),a(151),function(e){return o.a.createElement("footer",{id:"footer"})}),s=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loading:"is-loading"},a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"body "+this.state.loading},o.a.createElement("div",{id:"wrapper"},e,o.a.createElement(c,null)))},t}(o.a.Component);t.a=s}}]);
//# sourceMappingURL=component---src-pages-index-js-dcb0b5ac7626a6c81558.js.map