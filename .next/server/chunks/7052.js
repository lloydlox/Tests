"use strict";
exports.id = 7052;
exports.ids = [7052];
exports.modules = {

/***/ 1436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const title = "Our Archives";
const archiveList = [
    {
        link: "#",
        month: "January",
        year: "2021"
    },
    {
        link: "#",
        month: "February",
        year: "2021"
    },
    {
        link: "#",
        month: "March",
        year: "2021"
    },
    {
        link: "#",
        month: "April",
        year: "2021"
    },
    {
        link: "#",
        month: "June",
        year: "2021"
    },
    {
        link: "#",
        month: "July",
        year: "2021"
    }
];
const Archive = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "widget widget-archive",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "widget-header",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    className: "title",
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "widget-wrapper",
                children: archiveList.map((val, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: val.link,
                            className: "d-flex flex-wrap justify-content-between",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "icofont-double-right"
                                        }),
                                        val.month
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: val.year
                                })
                            ]
                        })
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Archive);


/***/ }),

/***/ 3595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable @next/next/no-img-element */ 
const title = "Gallery Photos";
const instagramList = [
    {
        imgUrl: "assets/images/blog/01.jpg",
        imgAlt: "product"
    },
    {
        imgUrl: "assets/images/blog/02.jpg",
        imgAlt: "product"
    },
    {
        imgUrl: "assets/images/blog/03.jpg",
        imgAlt: "product"
    },
    {
        imgUrl: "assets/images/blog/04.jpg",
        imgAlt: "product"
    },
    {
        imgUrl: "assets/images/blog/05.jpg",
        imgAlt: "product"
    },
    {
        imgUrl: "assets/images/blog/06.jpg",
        imgAlt: "product"
    },
    {
        imgUrl: "assets/images/blog/07.jpg",
        imgAlt: "product"
    },
    {
        imgUrl: "assets/images/blog/08.jpg",
        imgAlt: "product"
    },
    {
        imgUrl: "assets/images/blog/09.jpg",
        imgAlt: "product"
    }
];
const Instagram = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "widget widget-instagram",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "widget-header",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    className: "title",
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "widget-wrapper d-flex flex-wrap justify-content-center",
                children: instagramList.map((val, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: `${val.imgUrl}`,
                            target: "_blank",
                            rel: "noreferrer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `${val.imgUrl}`,
                                alt: `${val.imgAlt}`
                            })
                        })
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Instagram);


/***/ }),

/***/ 377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const title = "Post Category";
const categoryList = [
    {
        text: "Themeforest",
        count: "06",
        link: "#"
    },
    {
        text: "Photodune",
        count: "11",
        link: "#"
    },
    {
        text: "Codecanyon",
        count: "07",
        link: "#"
    },
    {
        text: "GRaphicdriver",
        count: "09",
        link: "#"
    },
    {
        text: "Wordpress",
        count: "50",
        link: "#"
    },
    {
        text: "Joomla",
        count: "20",
        link: "#"
    },
    {
        text: "3docean",
        count: "93",
        link: "#"
    }
];
const PostCategory = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "widget widget-category",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "widget-header",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    className: "title",
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "widget-wrapper",
                children: categoryList.map((val, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: val.link,
                            className: "d-flex flex-wrap justify-content-between",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "icofont-double-right"
                                        }),
                                        val.text
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: val.count
                                })
                            ]
                        })
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCategory);


/***/ })

};
;