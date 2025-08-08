"use strict";
exports.id = 800;
exports.ids = [800];
exports.modules = {

/***/ 8800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BlogCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function BlogCard({ post, variant = "default" }) {
    // Format the date to a readable string
    const formattedDate = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    }) : null;
    if (variant === "compact") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "border-b border-gray-200 pb-5 mb-5 last:border-0 last:mb-0 last:pb-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-lg font-semibold mb-1",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `/reviews/${post.id}`,
                        className: "hover:text-blue-600 transition",
                        children: post.title
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-sm text-gray-500 mb-2",
                    children: formattedDate
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-gray-700 line-clamp-2",
                    children: post.excerpt
                })
            ]
        });
    }
    if (variant === "featured") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative overflow-hidden rounded-xl shadow-lg",
            children: [
                post.coverImageUrl && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative h-80 w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: post.coverImageUrl,
                            alt: post.title,
                            className: "object-cover w-full h-full"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "absolute bottom-0 left-0 right-0 p-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mb-2",
                            children: post.categoryIds?.map((catId)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2 mb-2",
                                    children: catId
                                }, catId))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-2xl sm:text-3xl font-bold text-white mb-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: `/reviews/${post.id}`,
                                className: "hover:underline",
                                children: post.title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-white/90 mb-3 line-clamp-2",
                            children: post.excerpt
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `/reviews/${post.id}`,
                                    className: "text-white font-medium hover:underline",
                                    children: "Read full review →"
                                }),
                                formattedDate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-white/80 text-sm ml-auto",
                                    children: formattedDate
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
    // Default card
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition h-full flex flex-col",
        children: [
            post.coverImageUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative h-48 w-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: post.coverImageUrl,
                    alt: post.title,
                    className: "object-cover w-full h-full"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-6 flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-3 flex flex-wrap gap-2",
                        children: post.categoryIds?.map((catId)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline-block bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded",
                                children: catId
                            }, catId))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-xl font-bold mb-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: `/reviews/${post.id}`,
                            className: "hover:text-blue-600 transition",
                            children: post.title
                        })
                    }),
                    formattedDate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm text-gray-500 mb-2",
                        children: formattedDate
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-gray-600 mb-4 flex-grow line-clamp-3",
                        children: post.excerpt
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `/reviews/${post.id}`,
                        className: "text-blue-600 font-medium hover:text-blue-800 transition mt-auto",
                        children: "Read Full Review →"
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;