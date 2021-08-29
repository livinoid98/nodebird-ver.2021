(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,616];
exports.modules = {

/***/ 16:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./pages/signup.js
var signup = __webpack_require__(908);
;// CONCATENATED MODULE: ./components/LoginForm.js







const LoginForm = () => {
  const [id, onChangeId] = (0,signup.useInput)('');
  const [password, onChangePassword] = (0,signup.useInput)('');
  const onSubmitForm = (0,external_react_.useCallback)(e => {
    e.preventDefault();
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
    onSubmit: onSubmitForm,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "user-id",
        children: "\uC544\uC774\uB514"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
        name: "user-id",
        value: id,
        onChange: onChangeId,
        required: true
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "user-password",
        children: "\uBE44\uBC00\uBC88\uD638"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
        name: "user-password",
        type: "password",
        value: password,
        onChange: onChangePassword,
        required: true
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        htmlType: "submit",
        loading: false,
        children: "\uB85C\uADF8\uC778"
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/signup",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            children: "\uD68C\uC6D0\uAC00\uC785"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const components_LoginForm = (LoginForm);
;// CONCATENATED MODULE: ./components/AppLayout.js






const dummy = {
  nickname: 'livinoid98',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false
};

const AppLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Menu, {
      mode: "horizontal",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "\uB178\uB4DC\uBC84\uB4DC"
          })
        })
      }, "home"), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/profile",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "\uD504\uB85C\uD544"
          })
        })
      }, "profile"), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input.Search, {
          enterButton: true,
          style: {
            verticalAlign: 'middle'
          }
        })
      }, "email")]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/signup",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "\uD68C\uC6D0\uAC00\uC785"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        xs: 24,
        md: 6,
        children: dummy.isLoggedIn ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Card, {
          actions: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: ["\uC9F9\uC9F9", /*#__PURE__*/jsx_runtime_.jsx("br", {}), dummy.Post.length]
          }, "twit"), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: ["\uD314\uB85C\uC789", /*#__PURE__*/jsx_runtime_.jsx("br", {}), dummy.Followings.length]
          }, "following"), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: ["\uD314\uB85C\uC6CC", /*#__PURE__*/jsx_runtime_.jsx("br", {}), dummy.Followers.length]
          }, "follower")],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Card.Meta, {
            avatar: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
              children: dummy.nickname[0]
            }),
            title: dummy.nickname
          })
        }) : /*#__PURE__*/jsx_runtime_.jsx(components_LoginForm, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        xs: 24,
        md: 12,
        children: children
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        xs: 24,
        md: 6
      })]
    })]
  });
};

/* harmony default export */ const components_AppLayout = (AppLayout);
;// CONCATENATED MODULE: ./pages/_app.js







const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "NodeBird"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_AppLayout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, {})
    })]
  });
};

/* harmony default export */ const _app = (NodeBird);

/***/ }),

/***/ 953:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,908], () => (__webpack_exec__(16)));
module.exports = __webpack_exports__;

})();