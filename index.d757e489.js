!function(){function t(t,e,r,i){Object.defineProperty(t,e,{get:r,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},s=r.parcelRequire5f7c;function a(t,e,r,i,n){var s={};return Object.keys(i).forEach((function(t){s[t]=i[t]})),s.enumerable=!!s.enumerable,s.configurable=!!s.configurable,("value"in s||s.initializer)&&(s.writable=!0),s=r.slice().reverse().reduce((function(r,i){return i&&i(t,e,r)||r}),s),n&&void 0!==s.initializer&&(s.value=s.initializer?s.initializer.call(n):void 0,s.initializer=void 0),void 0===s.initializer&&(Object.defineProperty(t,e,s),s=null),s}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e,r){return e&&u(t.prototype,e),r&&u(t,r),t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){return h(t)}function d(t,e,r){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(i){var n=Object.getOwnPropertyDescriptor(i,e);return n.get?n.get.call(r||t):n.value}})(t,e,r)}function f(t,e,r){return d(t,e,r)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function g(t,e){return!e||"object"!=((r=e)&&r.constructor===Symbol?"symbol":typeof r)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e;var r}function m(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function x(t,e){return function(t){if(Array.isArray(t))return t}(t)||m(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}null==s&&((s=function(t){if(t in i)return i[t].exports;if(t in n){var e=n[t];delete n[t];var r={id:t,exports:{}};return i[t]=r,e.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},r.parcelRequire5f7c=s),s.register("gm4sb",(function(e,r){var i,n;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return n}),(function(t){return n=t}));var s={};i=function(t){for(var e=Object.keys(t),r=0;r<e.length;r++)s[e[r]]=t[e[r]]},n=function(t){var e=s[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),s("gm4sb").register(JSON.parse('{"dFcp2":"index.d757e489.js","82uyM":"background.8086dd7e.png","iekgK":"card_back.dc0028f7.png","6P2Ur":"card_question.ddf83312.png","c5tRQ":"card_result.65b624de.png","ggq9j":"character_end.20c94bd8.png","g7wpP":"designer.05e93718.png","7Qown":"developer.919c361c.png","c4tBZ":"pm.1963c7be.png","4B0vs":"score.24868ea4.png","9O39w":"answer_left.2b8b42b5.png","ePYmF":"answer_right.c8bae2b7.png"}'));var w=function(){"use strict";function t(){o(this,t)}return c(t,null,[{key:"add",value:function(t){this.clickables.push(t)}},{key:"remove",value:function(t){this.clickables=this.clickables.filter((function(e){return e!==t}))}},{key:"listenHover",value:function(){var t=!0,e=!1,r=void 0;try{for(var i,n=this.clickables[Symbol.iterator]();!(t=(i=n.next()).done);t=!0){var s=i.value;s.isHovered()&&!s.isHoveredBefore()?s.onHover():!s.isHovered()&&s.isHoveredBefore()&&s.onHoverOut()}}catch(t){e=!0,r=t}finally{try{t||null==n.return||n.return()}finally{if(e)throw r}}}},{key:"listenClick",value:function(){var t=!0,e=!1,r=void 0;try{for(var i,n=this.clickables[Symbol.iterator]();!(t=(i=n.next()).done);t=!0){var s=i.value;s.isHovered()&&s.onClick()}}catch(t){e=!0,r=t}finally{try{t||null==n.return||n.return()}finally{if(e)throw r}}}}]),t}();w.clickables=[];var k,B=function(t){return function(t){"use strict";function e(){return o(this,e),g(this,l(e).apply(this,arguments))}return v(e,t),c(e,[{key:"position",value:function(){f(l(e.prototype),"position",this).call(this),rectMode(CENTER)}},{key:"display",value:function(){f(l(e.prototype),"display",this).call(this)}},{key:"isInside",value:function(t,e){t-=width/2,e-=height/2;var r=this.width/2,i=this.height/2;return t>=this.x-r&&t<=this.x+r&&e>=this.y-i&&e<=this.y+i}},{key:"isHovered",value:function(){return this.isInside(mouseX,mouseY)}},{key:"isHoveredBefore",value:function(){return this.isInside(pmouseX,pmouseY)}},{key:"onHover",value:function(){}},{key:"onHoverOut",value:function(){}},{key:"onClick",value:function(){}}]),e}(t)};s.register("5waPY",(function(e,r){var i;t(e.exports,"getBundleURL",(function(){return i}),(function(t){return i=t}));var n={};function s(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(t){var e=n[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return s(t[2])}return"/"}(),n[t]=e),e}})),k=s("5waPY").getBundleURL("dFcp2")+s("gm4sb").resolve("82uyM");var C;C=s("5waPY").getBundleURL("dFcp2")+s("gm4sb").resolve("iekgK");var S;S=s("5waPY").getBundleURL("dFcp2")+s("gm4sb").resolve("6P2Ur");var E;E=s("5waPY").getBundleURL("dFcp2")+s("gm4sb").resolve("c5tRQ");var T;T=s("5waPY").getBundleURL("dFcp2")+s("gm4sb").resolve("ggq9j");var j;j=s("5waPY").getBundleURL("dFcp2")+s("gm4sb").resolve("g7wpP");var O;O=s("5waPY").getBundleURL("dFcp2")+s("gm4sb").resolve("7Qown");var R;R=s("5waPY").getBundleURL("dFcp2")+s("gm4sb").resolve("c4tBZ");var A;A=s("5waPY").getBundleURL("dFcp2")+s("gm4sb").resolve("4B0vs");var P;P=s("5waPY").getBundleURL("dFcp2")+s("gm4sb").resolve("9O39w");var H;H=s("5waPY").getBundleURL("dFcp2")+s("gm4sb").resolve("ePYmF");var q,F=function(){"use strict";function t(){o(this,t)}return c(t,null,[{key:"init",value:function(){this.background=loadImage(e(k)),this.cardBack=loadImage(e(C)),this.cardQuestion=loadImage(e(S)),this.cardResult=loadImage(e(E)),this.characterEnd=loadImage(e(T)),this.designer=loadImage(e(j)),this.developer=loadImage(e(O)),this.pm=loadImage(e(R)),this.score=loadImage(e(A)),this.answerLeft=loadImage(e(P)),this.answerRight=loadImage(e(H))}}]),t}(),Y=function(){"use strict";function t(e,r){o(this,t),this.burden=0,this.name=e,this.burdenLimit=r}return c(t,[{key:"addBurden",value:function(t){this.burden=Math.max(0,Math.min(this.burden+t,this.burdenLimit)),this.burden>=this.burdenLimit&&(this.onRetireGame(),this.onRetireLayout())}},{key:"resetBurden",value:function(){var t=this.burden;this.burden=0,this.onResetLayout(t>=this.burdenLimit)}},{key:"onRetireGame",value:function(){}},{key:"onRetireLayout",value:function(){}},{key:"onResetLayout",value:function(t){}}]),t}();q=JSON.parse('{"intro":[{"emoji":"👇","text":"여기를 클릭해 보시겠어요?"},{"emoji":"🙋","text":"안녕하세요."},{"emoji":"🙌","text":"극한팀플에 오신 걸 환영해요."},{"emoji":"🧑‍💻","text":"당신은 이름 모를 정문과 수업을 듣게 되었습니다."},{"emoji":"👥","text":"왼쪽 위에 같이 팀플할 조원들이 보이네요.","preEffects":["showCharacters"]},{"emoji":"😙","text":"저기 개발자에게 가서 인사해 볼까요?","answers":[{"text":"이 버튼 1px만 옮겨주시면 안 돼요?","result":"개발자가 힘들어합니다.","targets":["developer"],"burdenAmount":1},{"text":"이 버그 내일까지 고쳐주실 수 있을까요?","result":"개발자가 힘들어합니다.","targets":["developer"],"burdenAmount":1}]},{"emoji":"😰","text":"앗... 친근한 인사였다고 생각했는데 아니었군요."},{"emoji":"💁","text":"어떤 선택을 하느냐에 따라 캐릭터의 힘듦 지수가 올라갈 수 있어요."},{"emoji":"💨","text":"힘듦 지수가 5점을 넘어가면 탈주할 수 있으니 주의하세요."},{"emoji":"👏","text":"팀원들의 탈주를 막으면서 15일 동안 팀플을 진행하면 당신의 승리입니다.","preEffects":["showScore"]},{"emoji":"🥰","text":"그럼 시작합니다.","preEffects":["startMain"],"postEffects":["reset","countScore"]}],"main":[{"emoji":"💡","text":"내일이 발표인데, 개발자가 피그마로 보여주기로 한 프로토타입을 웹으로 만들면 어떻겠냐고 한다.","answers":[{"text":"하고 싶으면 하세요.","result":"당연히 완성 못했다. 버그 엄청 많아!","targets":["developer"],"burdenAmount":3},{"text":"개발자님이 너무 힘들지 않을까요?","result":"현명한 선택이었다."}]},{"emoji":"🍨","text":"밤샘 팀플하다가 간식을 사와서 나눠먹기로 했다. 배스킨라빈스에 간 조장. 어떤 맛을 골라야 할까?","answers":[{"text":"체리 쥬빌레","result":"개발자가 핑크색 부분에는 손을 대지 않는다.","targets":["developer"],"burdenAmount":1},{"text":"민트초코칩","result":"개발자가 민초만 다 먹었다.","targets":["developer"],"burdenAmount":-3}]},{"emoji":"🤷","text":"발표 직전에 게임이 끝나지 않는 버그가 발견됐다. 개발자에게 이 버그를 제보하니 자기 컴퓨터에서는 괜찮다는데...","answers":[{"text":"개발자님이 화면 공유해서 발표해 주세요.","result":"코드 설명에 발표 시간을 다 써 버렸다.","targets":["pm","designer"],"burdenAmount":2},{"text":"기획자님 컴퓨터에서도 같은 버그가 나요.","result":"버그 맞네 맞아. 고치러 가자.","targets":["developer"],"burdenAmount":2}]},{"emoji":"⚖️","text":"다음 주 회의 일정을 잡아보니 모두가 참가할 수 있는 날이 없다. 딱 한 명을 제외해야 한다면...","answers":[{"text":"디자이너","result":"기획은 했는데 디자인에 하나도 반영할 수가 없었다.","targets":["designer"],"burdenAmount":1},{"text":"개발자","result":"아 그럼 저는 코딩하고 있을게요."}]},{"emoji":"🤖","text":"회의 중 갑자기 파이썬의 언어적 특성에 대해 설명하기 시작하는 개발자. 반응해 줄까 말까?","answers":[{"text":"아 저도 파이썬 배워봤어요.","result":"개발자가 너무 신나서 파이썬 레퍼런스를 띄우기 시작했다.","targets":["pm","designer"],"burdenAmount":1},{"text":"그게 p5.js랑 다른 건가요?","result":"개발자가 p5.js는 라이브러리고 파이썬은 언어라고 하는데 솔직히 이해 못했다.","targets":["developer"],"burdenAmount":1}]},{"emoji":"💻","text":"밤샘하는 것도 아닌데 갑자기 대면 팀플이 필요하다고 하는 기획자. 대면 팀플 한 번 할까?","answers":[{"text":"한번쯤 만나면 좋지.","result":"팀플 장소에 확진자가 다녀갔다고 해서 모두 선별진료소에 다녀왔다.","targets":["designer","developer"],"burdenAmount":2},{"text":"대면은 다음에 하죠.","result":"대면을 해야 기획 리뷰를 개발자가 들어줄 것 같다나 뭐라나.","targets":["pm"],"burdenAmount":1}]},{"emoji":"🍪","text":"밤샘 팀플하다가 간식을 사와서 나눠먹기로 했다. 편의점에 간 조장. 어떤 과자를 골라야 할까?","answers":[{"text":"꼬북칩 콘소메맛","result":"기획자가 과자 봉지만 물끄러미 보고 있다.","targets":["pm"],"burdenAmount":1},{"text":"꼬북칩 초코츄러스맛","result":"기획자님 식사 안 하신 거 아니죠?","targets":["pm"],"burdenAmount":-2}]},{"emoji":"✍️","text":"퍼소나를 한 번 만들어보면 좋겠다는 기획자. 음 하면 좋지만... 우리 결과물에 투머치인 것 같기도 하고.","answers":[{"text":"기획자님이 한번 만들어 주세요.","result":"갑자기 기획자가 사용자 조사 계획까지 내놓기 시작했다.","targets":["pm"],"burdenAmount":2},{"text":"다같이 만들어 볼까요?","result":"개발자만 카메라가 꺼져 있다. 설마 회의 중에 코딩하나?","targets":["developer"],"burdenAmount":1}]},{"emoji":"😰","text":"회의 중 갑자기 어딘가에서 물소리가 들려온다. 이건 디자이너에게서 들려오는 소리 같은데...?","answers":[{"text":"디자이너님 마이크 켜져 있어요.","result":"아 식사 끝나셨다고.... 그럴 수 있지."},{"text":"무시하고 회의 진행한다.","result":"설거지 소리가 들려서 결국 마이크 켜져 있다고 얘기했다.","targets":["designer"],"burdenAmount":2}]},{"emoji":"🍛","text":"밤샘 팀플하다가 저녁을 시키기로 했다. 배달앱을 켠 조장. 어떤 메뉴를 시켜야 할까?","answers":[{"text":"마라샹궈","result":"디자이너가 분모자 다 건져서 먹었다.","targets":["designer"],"burdenAmount":-1},{"text":"바지락칼국수","result":"아 디자이너님 해산물 못 드셨었지. 깜빡했네~","targets":["designer"],"burdenAmount":2}]},{"emoji":"1️⃣","text":"결과물 UI를 보고 갑자기 정렬이 맞지 않다고 하는 디자이너. 어디는 7px씩, 어디는 9px씩 띄워야 한다는데...","answers":[{"text":"제 눈에는 똑같이 생겼는데요?","result":"그쵸... 똑같죠...? 하지만 디자이너는 의기소침해 보인다.","targets":["designer"],"burdenAmount":2},{"text":"개발자님 이거 대응해 주실 수 있어요?","result":"개발자님 한숨을 들은 것 같은데... 줌이 끊겼나...","targets":["developer"],"burdenAmount":1}]},{"emoji":"🎶","text":"지금은 오전 3시. 길어지는 프로토타입 구현에 다들 눈이 감겨온다. 음악이라도 하나 틀어볼까?","answers":[{"text":"스타벅스 매장 음악 3시간","result":"모두 사이렌오더 시켜놓은 것처럼 열심히 일했다.","targets":["pm","designer","developer"],"burdenAmount":-1},{"text":"코딩하기 좋은 음악 3시간","result":"개발자가 신경도 쓰지 않는다. 코딩하면 음악이 안 들리나."}]},{"emoji":"🕖","text":"저녁 7시 회의에 다들 5~10분씩 늦는다고 한다. 일찍 회의하고 일찍 자는 게 좋을 것 같은데...","answers":[{"text":"그럼 7시 반에 시작하죠.","result":"여유롭게 저녁 먹고 7시 40분에 시작했다. 양치질하시라고 10분 미룸.","targets":["pm","designer","developer"],"burdenAmount":-1},{"text":"먼저 회의할 테니 천천히 들어오세요.","result":"다들 30분씩 늦어서 7시 반에 시작했다. 하튼 나만 힘들지."}]},{"emoji":"💬","text":"기획 문서와 프로토타입, 결과물의 문구가 조금씩 다른 것 같다. 달라진 이유가 뭘까?","answers":[{"text":"디자이너님이 맞춤법 장인이라~","result":"기획자는 반박하고 싶었지만 맞춤법을 반박할 수는 없었다.","targets":["developer"],"burdenAmount":-1},{"text":"개발자가 폰트 크기에 맞추다보니~","result":"격렬한 논의 끝에 폰트 크기를 바꾸기로 했다.","targets":["designer"],"burdenAmount":2}]},{"emoji":"🛠","text":"디자이너가 프로토타입은 어떤 툴로 만들면 좋을지 물어본다. 내심 기대하는 답이 있는 것 같은데...","answers":[{"text":"그냥 구글 슬라이드로 하죠.","result":"아 이거 한글 폰트가 없네. 누가 이런 선택을 했죠?","targets":["designer"],"burdenAmount":1},{"text":"피그마? 뭔지 모르겠지만 써 봅시다.","result":"디자이너의 커서가 홍길동처럼 움직인다.","targets":["designer"],"burdenAmount":-2}]}],"outro":[{"emoji":"🥳","text":"뭔가 엄청난 것을 만들었다. 이거 팔아도 될 것 같은데?"},{"emoji":"🙌","text":"기말 발표를 마치고 다들 톡방에 눈물과 환희의 이모티콘들을 보낸다."},{"emoji":"🥰","text":"다들 고생 많았어요. 그리고 누구신지는 모르겠지만... 저희 팀플을 도와주셔서 감사합니다."},{"emoji":"😏","text":"새벽 3시에 스크립트를 쓰는 지금... 저도 개인 프로젝트 말고 팀플하고 싶네요."},{"emoji":"👋","text":"극한팀플은 여기까지입니다. 감사합니다. 게임 오버입니다."}],"interlude1":[{"emoji":"🤔","text":"이런... 팀플이 폭파되었군요."},{"emoji":"🤗","text":"하지만 기죽지 마세요. 정문과에서 이런 고생길은 숱하게 열리는 것 아니겠어요?"},{"emoji":"🏃","text":"당신은 다음 학기에도 이름 모를 정문과 수업을 듣고, 팀플을 하게 됩니다."},{"emoji":"🙋","text":"안녕하세요. 어디서 많이 본 팀 구성인데... 저희 다시 시작해 볼까요?","preEffects":["startMain"],"postEffects":["addTryCount","reset","countScore"]}],"interlude2":[{"emoji":"👀","text":"또 팀플이 터졌군요."},{"emoji":"🤗","text":"걱정하지 마세요. 들어야 하는 정문과 수업이 많다면, 팀플을 할 기회도 많이 남았습니다."},{"emoji":"🏃","text":"당신은 다음 학기에도 이름 모를 정문과 수업을 듣게 됩니다. 시작해 볼까요?","preEffects":["startMain"],"postEffects":["addTryCount","reset","countScore"]}],"interlude3":[{"emoji":"😌","text":"3학기 내리 팀플이 터졌군요. 그럴 수 있죠."},{"emoji":"🥱","text":"당신은 다음 학기에도 이름 모를 정문과 수업을 듣고... 하품해서 미안해요. 시작해 볼까요?","preEffects":["startMain"],"postEffects":["addTryCount","reset","countScore"]}],"interlude4":[{"emoji":"🧐","text":"......"},{"emoji":"😅","text":"아 죄송해요. 팀플마다 왜 저렇게 끝나는지 모르겠어서... 특이한 경험을 하고 계시네요. 가시죠.","preEffects":["startMain"],"postEffects":["addTryCount","reset","countScore"]}],"interlude5":[{"emoji":"😇","text":"이번 학기도 아쉽게 됐네요."},{"emoji":"🤠","text":"뭐 어쩔 수 없죠. 졸업은 해야 하지 않겠습니까. 다음 학기에는 운이 좋기를 바라볼까요?","preEffects":["startMain"],"postEffects":["addTryCount","reset","countScore"]}],"pmBadEnding":{"emoji":"🍃","text":"기획자는 연락이 두절되었고 그 후로 정문과 수업에서 기획자님을 다시 볼 수 없었습니다.","preEffects":["stopCountScore","startInterlude"]},"designerBadEnding":{"emoji":"🍃","text":"디자이너는 연락이 두절되었고 그 후로 정문과 수업에서 디자이너님을 다시 볼 수 없었습니다.","preEffects":["stopCountScore","startInterlude"]},"developerBadEnding":{"emoji":"🍃","text":"개발자는 연락이 두절되었고 그 후로 정문과 수업에서 개발자님을 다시 볼 수 없었습니다.","preEffects":["stopCountScore","startInterlude"]}}');var _=function(){"use strict";function t(){o(this,t)}return c(t,null,[{key:"init",value:function(){var t=this,r=this,i=this;this.pm.onRetireGame=function(){t.startBadEnding(e(q).pmBadEnding)},this.designer.onRetireGame=function(){r.startBadEnding(e(q).designerBadEnding)},this.developer.onRetireGame=function(){i.startBadEnding(e(q).developerBadEnding)}}},{key:"startBadEnding",value:function(e){this.questions=b(this.questions.slice(0,t.cursor+1)).concat([e]),this.onCardPush()}},{key:"startIntro",value:function(){this.questions=b(this.questions).concat(b(e(q).intro)),this.onCardPush()}},{key:"startMain",value:function(){var t=shuffle(e(q).main);if(t.length>0){var r=t[t.length-1];t[t.length-1]=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),i.forEach((function(e){y(t,e,r[e])}))}return t}({},r,{preEffects:["startOutro","stopCountScore"]})}this.questions=b(this.questions).concat(b(t)),this.onCardPush()}},{key:"startOutro",value:function(){this.questions=b(this.questions).concat(b(e(q).outro)),this.onCardPush()}},{key:"startInterlude",value:function(){var t;switch(this.tryCount){case 1:t=e(q).interlude1;break;case 2:t=e(q).interlude2;break;case 3:t=e(q).interlude3;break;case 4:t=e(q).interlude4;break;default:t=e(q).interlude5}this.questions=b(this.questions).concat(b(t)),this.onCardPush()}},{key:"startCountScore",value:function(){this.countScore=!0}},{key:"stopCountScore",value:function(){this.countScore=!1}},{key:"reset",value:function(){this.pm.resetBurden(),this.designer.resetBurden(),this.developer.resetBurden(),this.score=1}},{key:"addTryCount",value:function(){this.tryCount+=1}},{key:"pickNext",value:function(){this.cursor=Math.min(this.cursor+1,this.questions.length-1),this.countScore&&(this.score+=1)}},{key:"applyBurden",value:function(t,e){var r=!0,i=!1,n=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done);r=!0){switch(s.value){case"pm":this.pm.addBurden(e);break;case"designer":this.designer.addBurden(e);break;case"developer":this.developer.addBurden(e)}}}catch(t){i=!0,n=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw n}}}},{key:"onCardPush",value:function(){}}]),t}();_.pm=new Y("기획자",5),_.designer=new Y("디자이너",5),_.developer=new Y("개발자",5),_.questions=[],_.cursor=0,_.tryCount=1,_.score=1,_.countScore=!1;var L=_;var I=function(t){return function(t){"use strict";function e(){var t;return o(this,e),(t=g(this,l(e).apply(this,arguments))).fXBase=t.getNewTransitionBase(),t.fYBase=t.getNewTransitionBase(),t.side="FRONT",t}return v(e,t),c(e,[{key:"position",value:function(){f(l(e.prototype),"position",this).call(this),rectMode(CENTER);var t=this.fXBase.getValue(),r=this.fYBase.getValue(),i=Math.abs(Math.sin(t*PI))*(this.height/2),n=Math.abs(Math.sin(r*PI))*(this.width/2);translate(0,0,Math.max(i,n)),rotateX(t*PI),rotateY(r*PI)}},{key:"display",value:function(){f(l(e.prototype),"display",this).call(this),this.fXBase.move(),this.fYBase.move()}},{key:"flip",value:function(t,e){var r=void 0===e||e;switch(t){case"LEFT":this.fYBase.setAmount(-1,r);break;case"RIGHT":this.fYBase.setAmount(1,r);break;case"TOP":this.fXBase.setAmount(1,r);break;case"BOTTOM":this.fXBase.setAmount(-1,r)}this.side="FRONT"===this.side?"BACK":"FRONT"}}]),e}(t)};var M=function(t,e,r){var i=r.value;r.value=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];if(i){push();var n=i.apply(this,e);return pop(),n}}};var N=function(t){return function(t){"use strict";function e(){var t;return o(this,e),(t=g(this,l(e).apply(this,arguments))).hXBase=t.getNewTransitionBase(),t.hYBase=t.getNewTransitionBase(),t.xMargin=10,t.yMargin=10,t}return v(e,t),c(e,[{key:"position",value:function(){f(l(e.prototype),"position",this).call(this);var t=this.hXBase.getValue(),r=this.hYBase.getValue(),i=t>0?-this.x:this.x,n=r>0?-this.y:this.y,s=t*(width/2+this.width/2+this.xMargin+i),a=r*(height/2+this.height/2+this.yMargin+n);translate(s,a)}},{key:"display",value:function(){f(l(e.prototype),"display",this).call(this),this.hXBase.move(),this.hYBase.move()}},{key:"hide",value:function(t,e){var r=void 0===e||e;switch(t){case"LEFT":this.hXBase.setValue(-1,r);break;case"RIGHT":this.hXBase.setAmount(1,r);break;case"TOP":this.hYBase.setAmount(-1,r);break;case"BOTTOM":this.hYBase.setAmount(1,r)}}},{key:"show",value:function(t){var e=void 0===t||t;this.hXBase.setValue(0,e),this.hYBase.setValue(0,e)}},{key:"isHiding",value:function(){return 1===Math.abs(this.hXBase.getValue())||1===Math.abs(this.hYBase.getValue())}}]),e}(t)},V=function(){"use strict";function t(e,r){o(this,t),this.width=e,this.height=r}return c(t,[{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"position",value:function(){}},{key:"display",value:function(){this.position()}}]),t}();function X(t){return 1===t?1:1-pow(2,-10*t)}var z=function(){"use strict";function t(e,r){o(this,t),this.value=0,this.amount=0,this.progress=0,this.speed=e,this.ease=r}return c(t,[{key:"setValue",value:function(t,e){this.isTransitioning()&&this.endTransition(),e?this.amount=t-this.value:this.value=t}},{key:"setAmount",value:function(t,e){this.isTransitioning()&&this.endTransition(),e?this.amount=t:this.value+=t}},{key:"getValue",value:function(){return this.value+this.amount*this.ease(this.progress)}},{key:"isTransitioning",value:function(){return 0!==this.amount}},{key:"move",value:function(){0!==this.amount&&(this.progress<1?this.progress=Math.min(this.progress+this.speed,1):this.endTransition())}},{key:"endTransition",value:function(){this.value+=this.amount,this.amount=0,this.progress=0}}]),t}(),U=function(t){"use strict";function e(){var t;return o(this,e),(t=g(this,l(e).apply(this,arguments))).speed=.015,t.ease=X,t}return v(e,t),c(e,[{key:"getNewTransitionBase",value:function(){return new z(this.speed,this.ease)}}]),e}(V),D=function(t){"use strict";function e(){var t;return o(this,e),(t=g(this,l(e).apply(this,arguments))).xBase=t.getNewTransitionBase(),t.yBase=t.getNewTransitionBase(),t.zBase=t.getNewTransitionBase(),t}return v(e,t),c(e,[{key:"x",get:function(){return this.xBase.getValue()}},{key:"y",get:function(){return this.yBase.getValue()}},{key:"z",get:function(){return this.zBase.getValue()}},{key:"set",value:function(t,e,r,i){var n=void 0===i||i;this.setX(t,n),this.setY(e,n),this.setZ(r,n)}},{key:"setX",value:function(t,e){var r=void 0===e||e;this.xBase.setValue(t,r)}},{key:"setY",value:function(t,e){var r=void 0===e||e;this.yBase.setValue(t,r)}},{key:"setZ",value:function(t,e){var r=void 0===e||e;this.zBase.setValue(t,r)}},{key:"move",value:function(t,e,r,i){var n=void 0===i||i;this.moveX(t,n),this.moveY(e,n),this.moveZ(r,n)}},{key:"moveX",value:function(t,e){var r=void 0===e||e;this.xBase.setAmount(t,r)}},{key:"moveY",value:function(t,e){var r=void 0===e||e;this.yBase.setAmount(t,r)}},{key:"moveZ",value:function(t,e){var r=void 0===e||e;this.zBase.setAmount(t,r)}},{key:"position",value:function(){f(l(e.prototype),"position",this).call(this),translate(this.xBase.getValue(),this.yBase.getValue(),this.zBase.getValue())}},{key:"display",value:function(){f(l(e.prototype),"display",this).call(this),this.xBase.move(),this.yBase.move(),this.zBase.move()}}]),e}(U),G=D;var W,Q=function(t){return function(t){"use strict";function e(){var t;return o(this,e),(t=g(this,l(e).apply(this,arguments))).rYBase=t.getNewTransitionBase(),t}return v(e,t),c(e,[{key:"setYRotate",value:function(t,e){var r=void 0===e||e;this.rYBase.setValue(t,r)}},{key:"position",value:function(){f(l(e.prototype),"position",this).call(this),rotateY(this.rYBase.getValue())}},{key:"display",value:function(){f(l(e.prototype),"display",this).call(this),this.rYBase.move()}}]),e}(t)},Z=function t(e,r){"use strict";o(this,t),this.texture=createGraphics(e,r)},K=function(t){"use strict";function e(t,r,i,n){var s;return o(this,e),(s=g(this,l(e).call(this,t,r))).emoji=i,s.question=n,s}return v(e,t),c(e,[{key:"draw",value:function(){this.texture.background(F.cardQuestion),this.texture.fill(0),this.texture.textFont("Hahmlet"),this.texture.textAlign(CENTER,TOP),this.texture.textWrap(WORD),this.emoji&&(this.texture.textSize(30),this.texture.text(this.emoji,3,40,this.texture.width)),this.question&&(this.texture.textLeading(27),this.texture.textSize(16),this.texture.text(this.question,22,90,this.texture.width-40))}}]),e}(Z),J=function(t){"use strict";function e(){return o(this,e),g(this,l(e).apply(this,arguments))}return v(e,t),c(e,[{key:"set",value:function(t,e){this.text=t,this.result=e}},{key:"draw",value:function(){this.texture.background(F.cardResult),this.texture.fill(255),this.texture.textFont("Hahmlet"),this.texture.textAlign(CENTER,TOP),this.texture.textLeading(27),this.texture.textSize(16),this.text&&this.texture.text(this.text,22,90,this.texture.width-40),this.result&&(this.texture.textStyle(BOLD),this.texture.text(this.result,22,200,this.texture.width-40))}}]),e}(Z),$=J,tt=function(t){"use strict";function e(){return o(this,e),g(this,l(e).apply(this,arguments))}return v(e,t),c(e,[{key:"draw",value:function(){this.texture.background(F.cardBack)}}]),e}(Z),et=tt,rt=200,it=300,nt=(a((W=function(t){"use strict";function e(t){var r;return o(this,e),(r=g(this,l(e).call(this,rt,it))).resultSide=new $(rt,it),r.questionSide=new K(rt,it,t.emoji,t.text),r.questionSide.draw(),r.question=t,r.front=r.questionSide,r}return v(e,t),c(e,[{key:"setResult",value:function(t,e){this.back=this.resultSide,this.resultSide.set(t,e),this.resultSide.draw()}},{key:"prepareBack",value:function(){"FRONT"===this.side?this.back=e.backSide:this.front=e.backSide}},{key:"isShowingBack",value:function(){return"FRONT"===this.side&&this.front===e.backSide||"BACK"===this.side&&this.back===e.backSide}},{key:"display",value:function(){f(l(e.prototype),"display",this).call(this),noStroke(),this.front&&texture(this.front.texture),translate(0,0,-.1),rect(0,0,this.width,this.height),this.back&&texture(this.back.texture),rotateY(PI),translate(0,0,.1),rect(0,0,this.width,this.height)}}],[{key:"initBackSide",value:function(){this.backSide=new et(rt,it),this.backSide.draw()}}]),e}(B(Q(I(N(G)))))).prototype,"display",[M],Object.getOwnPropertyDescriptor(W.prototype,"display"),W.prototype),W),st=function(t){"use strict";function e(t,r,i,n){var s;return o(this,e),(s=g(this,l(e).call(this,t,r))).background=i,s.character=n,s}return v(e,t),c(e,[{key:"draw",value:function(){this.texture.background(this.background),this.texture.fill(0),this.texture.textFont("Hahmlet"),this.texture.textAlign(CENTER,TOP),this.texture.textWrap(WORD);for(var t="",e=0;e<this.character.burden;e++)t+="😤";this.texture.textSize(20),this.texture.text(t,3,18,this.texture.width)}}]),e}(Z),at=function(t){"use strict";function e(){return o(this,e),g(this,l(e).apply(this,arguments))}return v(e,t),c(e,[{key:"draw",value:function(){this.texture.background(F.characterEnd)}}]),e}(Z),ot=at,ut=(a((W=function(t){"use strict";function e(t,r){var i;return o(this,e),(i=g(this,l(e).call(this,150,50))).characterSide=new st(150,50,r,t),i}return v(e,t),c(e,[{key:"display",value:function(){f(l(e.prototype),"display",this).call(this),noStroke(),this.characterSide.draw(),texture(this.characterSide.texture),translate(0,0,-.1),rect(0,0,this.width,this.height),texture(e.characterEndSide.texture),rotateX(PI),translate(0,0,.1),rect(0,0,this.width,this.height)}}],[{key:"initEndSide",value:function(){this.characterEndSide=new ot(150,50),this.characterEndSide.draw()}}]),e}(I(N(G)))).prototype,"display",[M],Object.getOwnPropertyDescriptor(W.prototype,"display"),W.prototype),W),ct=function(t){"use strict";function e(){return o(this,e),g(this,l(e).apply(this,arguments))}return v(e,t),c(e,[{key:"draw",value:function(){this.texture.background(F.score),this.texture.fill(0),this.texture.textFont("Hahmlet"),this.texture.textAlign(CENTER,TOP);var t="".concat(L.tryCount,"학기 ").concat(L.score,"일차");this.texture.textSize(18),this.texture.text(t,3,21,this.texture.width)}}]),e}(Z),ht=ct,lt=(a((W=function(t){"use strict";function e(){var t;return o(this,e),(t=g(this,l(e).call(this,180,60))).scoreSide=new ht(180,60),t}return v(e,t),c(e,[{key:"display",value:function(){f(l(e.prototype),"display",this).call(this),noStroke(),this.scoreSide.draw(),texture(this.scoreSide.texture),rect(0,0,this.width,this.height)}}]),e}(I(N(G)))).prototype,"display",[M],Object.getOwnPropertyDescriptor(W.prototype,"display"),W.prototype),W),dt=function(t){"use strict";function e(){return o(this,e),g(this,l(e).apply(this,arguments))}return v(e,t),c(e,[{key:"draw",value:function(){this.background&&this.texture.background(this.background),this.text&&(this.texture.fill(0),this.texture.textFont("Hahmlet"),this.texture.textAlign(CENTER,TOP),this.texture.textWrap(WORD),this.texture.textLeading(24),this.texture.textSize(16),this.texture.text(this.text,18,30,this.texture.width-30))}}]),e}(Z),ft=dt,pt=(a((W=function(t){"use strict";function e(t,r){var i;switch(o(this,e),(i=g(this,l(e).call(this,200,100))).answerSide=new ft(200,100),r){case"LEFT":i.answerSide.background=F.answerLeft;break;case"RIGHT":i.answerSide.background=F.answerRight}return i.answerSide.text=t.text,i.answerSide.draw(),i}return v(e,t),c(e,[{key:"display",value:function(){f(l(e.prototype),"display",this).call(this),noStroke(),texture(this.answerSide.texture),rect(0,0,this.width,this.height)}}]),e}(B(Q(I(N(G)))))).prototype,"display",[M],Object.getOwnPropertyDescriptor(W.prototype,"display"),W.prototype),W),vt=function(){"use strict";function t(){o(this,t)}return c(t,null,[{key:"init",value:function(){nt.initBackSide(),ut.initEndSide();var e=[[L.pm,F.pm],[L.designer,F.designer],[L.developer,F.developer]];this.characterCards=e.map((function(t){var e=x(t),r=e[0],i=e[1],n=new ut(r,i);return n.hide("TOP",!1),r.onRetireLayout=function(){setTimeout((function(){n.flip("TOP")}),1e3)},r.onResetLayout=function(t){t&&n.flip("BOTTOM")},n})),this.scoreCard=new lt,this.scoreCard.hide("TOP",!1),t.update(),L.onCardPush=function(){t.update()}}},{key:"update",value:function(){this.updateCards(),this.updateLeftDeck(this.questionCards.slice(0,L.cursor)),this.updateCurrentCard(this.questionCards[L.cursor]),this.updateRightDeck(this.questionCards.slice(L.cursor+1)),this.updateCharacters(),this.updateScore(),this.updateHidingCards()}},{key:"updateCards",value:function(){var t=this,e=0;this.questionCards=L.questions.map((function(r,i){var n;if((null===(n=t.questionCards[i])||void 0===n?void 0:n.question)===r)return t.questionCards[i];var s=new nt(r);return s.prepareBack(),s.flip("LEFT",!1),s.hide("TOP",!1),setTimeout((function(){s.show()}),100*e++),t.questionCards[i]&&(t.questionCards[i].hide("BOTTOM"),t.hidingCards.push(t.questionCards[i])),s}))}},{key:"updateLeftDeck",value:function(t){for(var e=0;e<t.length;e++){var r=t.length-1-e;if(t[e].set(-220-1*r,0,-3*r),!t[e].isShowingBack()){var i;t[e].prepareBack(),t[e].flip("LEFT"),w.remove(this.questionCards[e]);var n=null===(i=t[e].question)||void 0===i?void 0:i.postEffects;n&&this.runEffects(n)}}}},{key:"updateRightDeck",value:function(t){for(var e=0;e<t.length;e++){var r=e;t[e].set(220+3*r,0,-3*r)}}},{key:"updateCurrentCard",value:function(e){var r=this;e.set(0,0,50),e.isShowingBack()&&setTimeout((function(){var i,n;e.flip("LEFT"),(null===(i=e.question)||void 0===i?void 0:i.answers)?r.updateAnswers(e.question.answers):(w.add(e),e.onClick=function(){L.pickNext(),t.update()}),(null===(n=e.question)||void 0===n?void 0:n.preEffects)&&r.runEffects(e.question.preEffects)}),500)}},{key:"updateAnswers",value:function(t){var e=this,r=!0,i=!1,n=void 0;try{for(var s,a=this.answerCards[Symbol.iterator]();!(r=(s=a.next()).done);r=!0){var o=s.value;o.hide("BOTTOM"),w.remove(o),this.hidingCards.push(o)}}catch(t){i=!0,n=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw n}}this.answerCards=t.map((function(t,r){var i=e,n=e,s=0===r,a=new pt(t,s?"LEFT":"RIGHT"),o=a.getWidth()/2+5;return a.set(s?-o:o,230,0,!1),a.hide("BOTTOM",!1),a.show(),w.add(a),a.onClick=function(){i.questionCards[L.cursor].setYRotate(0),i.updateResultCard(i.questionCards[L.cursor],t,r)},a.onHover=function(){n.questionCards[L.cursor].setYRotate(s?-.2:.2)},a}))}},{key:"updateResultCard",value:function(e,r,i){var n;r.targets&&r.burdenAmount&&(n=this.burdenResult(r.targets,r.burdenAmount)),e.setResult(r.result,n),e.flip(0===i?"LEFT":"RIGHT"),w.add(e),e.onClick=function(){L.pickNext(),t.update()},r.targets&&r.burdenAmount&&L.applyBurden(r.targets,r.burdenAmount),this.updateAnswers([])}},{key:"runEffects",value:function(t){var e=!0,r=!1,i=void 0;try{for(var n,s=t[Symbol.iterator]();!(e=(n=s.next()).done);e=!0){switch(n.value){case"showCharacters":var a=!0,o=!1,u=void 0;try{for(var c,h=this.characterCards[Symbol.iterator]();!(a=(c=h.next()).done);a=!0){c.value.show()}}catch(t){o=!0,u=t}finally{try{a||null==h.return||h.return()}finally{if(o)throw u}}break;case"showScore":this.scoreCard.show();break;case"startMain":L.startMain();break;case"countScore":L.startCountScore();break;case"stopCountScore":L.stopCountScore();break;case"reset":L.reset();break;case"startInterlude":L.startInterlude();break;case"addTryCount":L.addTryCount();break;case"startOutro":L.startOutro()}}}catch(t){r=!0,i=t}finally{try{e||null==s.return||s.return()}finally{if(r)throw i}}}},{key:"updateCharacters",value:function(){for(var t=0;t<this.characterCards.length;t++){var e=this.characterCards[t],r=-height/2+e.getHeight()/2,i=-width/2+e.getWidth()/2;this.characterCards[t].set(i+t*(e.getWidth()+10)+10,r+10,0,!1)}}},{key:"updateScore",value:function(){var t=-height/2+this.scoreCard.getHeight()/2,e=width/2-this.scoreCard.getWidth()/2;this.scoreCard.set(e-10,t+10,0,!1)}},{key:"updateHidingCards",value:function(){var t=this;setTimeout((function(){t.hidingCards=[]}),3e3)}},{key:"display",value:function(){var t=!0,e=!1,r=void 0;try{for(var i,n=this.questionCards[Symbol.iterator]();!(t=(i=n.next()).done);t=!0){i.value.display()}}catch(t){e=!0,r=t}finally{try{t||null==n.return||n.return()}finally{if(e)throw r}}var s=!0,a=!1,o=void 0;try{for(var u,c=this.characterCards[Symbol.iterator]();!(s=(u=c.next()).done);s=!0){u.value.display()}}catch(t){a=!0,o=t}finally{try{s||null==c.return||c.return()}finally{if(a)throw o}}this.scoreCard.display();var h=!0,l=!1,d=void 0;try{for(var f,p=this.answerCards[Symbol.iterator]();!(h=(f=p.next()).done);h=!0){f.value.display()}}catch(t){l=!0,d=t}finally{try{h||null==p.return||p.return()}finally{if(l)throw d}}var v=!0,y=!1,g=void 0;try{for(var m,x=this.hidingCards[Symbol.iterator]();!(v=(m=x.next()).done);v=!0){m.value.display()}}catch(t){y=!0,g=t}finally{try{v||null==x.return||x.return()}finally{if(y)throw g}}}},{key:"burdenResult",value:function(t,e){return"".concat(t.map((function(t){switch(t){case"pm":return"기획자";case"designer":return"디자이너";case"developer":return"개발자"}})).join(", ")," 힘듦 ").concat(e>0?"+".concat(e):e)}}]),t}();vt.characterCards=[],vt.questionCards=[],vt.answerCards=[],vt.hidingCards=[];var yt=vt;window.preload=function(){F.init()},window.setup=function(){createCanvas(800,600,WEBGL),L.init(),L.startIntro(),yt.init()},window.draw=function(){push(),translate(0,0,-100),image(F.background,-width/2-80,-height/2-80,width+160,height+160),pop(),w.listenHover(),yt.display()},window.mousePressed=function(){w.listenClick()}}();
//# sourceMappingURL=index.d757e489.js.map
