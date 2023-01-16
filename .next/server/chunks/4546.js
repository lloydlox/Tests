"use strict";
exports.id = 4546;
exports.ids = [4546];
exports.modules = {

/***/ 4546:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-img-element */ 


const sponsorList = [
    {
        imgUrl: "assets/images/sponsor/01.png",
        imgAlt: "sponsor Musa Mahlangove"
    },
    {
        imgUrl: "assets/images/sponsor/02.png",
        imgAlt: "sponsor Musa Mahlangove"
    },
    {
        imgUrl: "assets/images/sponsor/03.png",
        imgAlt: "sponsor Musa Mahlangove"
    },
    {
        imgUrl: "assets/images/sponsor/04.png",
        imgAlt: "sponsor Musa Mahlangove"
    },
    {
        imgUrl: "assets/images/sponsor/05.png",
        imgAlt: "sponsor Musa Mahlangove"
    },
    {
        imgUrl: "assets/images/sponsor/06.png",
        imgAlt: "sponsor Musa Mahlangove"
    }
];
const Sponsor = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sponsor-section section-bg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "section-wrapper",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "sponsor-slider",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                        spaceBetween: 20,
                        slidesPerView: 2,
                        loop: "true",
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false
                        },
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay
                        ],
                        breakpoints: {
                            0: {
                                width: 0,
                                slidesPerView: 1
                            },
                            768: {
                                width: 768,
                                slidesPerView: 3
                            },
                            1200: {
                                width: 1200,
                                slidesPerView: 5.5
                            }
                        },
                        children: sponsorList.map((val, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "sponsor-iten",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sponsor-thumb",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: `${val.imgUrl}`,
                                            alt: `${val.imgAlt}`
                                        })
                                    })
                                })
                            }, i))
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sponsor);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;