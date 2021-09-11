"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,616];
exports.modules = {

/***/ 395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./components/PostForm.js




const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: 'livinoid98'
    },
    content: '첫 번째 게시글',
    img: 'https://cdn.pixabay.com/photo/2018/04/28/22/03/tree-3358468_960_720.jpg'
  }]
};

const PostForm = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
      style: {
        margin: '10px 0px 20px'
      },
      encType: "multipart/form-data",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input.TextArea, {
        maxLength: 140,
        placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "file",
          multiple: true,
          hidden: true
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          type: "primary",
          style: {
            float: 'right'
          },
          htmlType: "submit",
          children: "\uC9F9\uC9F9"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: dummy.imagePaths.map((v, i) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              display: 'inline-block'
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: 'http://localhost:3065/' + v,
              style: {
                width: '200px'
              },
              alt: v
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
                children: "\uC81C\uAC70"
              })
            })]
          }, v);
        })
      })]
    })
  });
};

/* harmony default export */ const components_PostForm = (PostForm);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(994);
;// CONCATENATED MODULE: ./components/PostCard.js





const PostCard = c => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Card, {
      cover: c.img && /*#__PURE__*/jsx_runtime_.jsx("img", {
        alt: "example",
        src: c.img
      }),
      actions: [/*#__PURE__*/jsx_runtime_.jsx(icons_.RetweetOutlined, {}, "retweet"), /*#__PURE__*/jsx_runtime_.jsx(icons_.HeartOutlined, {}, "heart"), /*#__PURE__*/jsx_runtime_.jsx(icons_.MessageOutlined, {}, "message"), /*#__PURE__*/jsx_runtime_.jsx(icons_.EllipsisOutlined, {}, "ellipse")],
      extra: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        children: "\uD314\uB85C\uC6B0"
      }),
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Card.Meta, {
        avatar: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {}),
        title: c.content,
        description: c.content
      })
    }, +c.createdAt)
  });
};

/* harmony default export */ const components_PostCard = (PostCard);
;// CONCATENATED MODULE: ./pages/index.js






const pages_dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: 'livinoid98'
    },
    content: '첫 번째 게시글',
    img: 'https://cdn.pixabay.com/photo/2018/04/28/22/03/tree-3358468_960_720.jpg'
  }]
};

const Home = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [pages_dummy.isLoggedIn && /*#__PURE__*/jsx_runtime_.jsx(components_PostForm, {}), pages_dummy.mainPosts.map(c => {
      return /*#__PURE__*/jsx_runtime_.jsx(components_PostCard, {}, "c");
    })]
  });
};

/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 994:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 953:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(395));
module.exports = __webpack_exports__;

})();