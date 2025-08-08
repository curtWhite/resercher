(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 7160:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 2336:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 120:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 982:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 8423:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 5275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2838)), "C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5438)), "C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6061)), "C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\not-found.tsx"],
        
      }
      ]
      }.children;
const pages = ["C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 7648:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4802))

/***/ }),

/***/ 4802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_blog_blog_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8800);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function HomePage() {
    const [featuredPosts, setFeaturedPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [recentPosts, setRecentPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [recentPapers, setRecentPapers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    async function fetchData() {
        try {
            setIsLoading(true);
            // Fetch posts, papers, and categories in parallel
            const [postsRes, papersRes, categoriesRes] = await Promise.all([
                fetch("/api/posts?limit=10"),
                fetch("/api/papers?limit=5"),
                fetch("/api/categories")
            ]);
            if (!postsRes.ok || !papersRes.ok || !categoriesRes.ok) {
                throw new Error("Failed to fetch data");
            }
            const [postsData, papersData, categoriesData] = await Promise.all([
                postsRes.json(),
                papersRes.json(),
                categoriesRes.json()
            ]);
            console.log("Posts Data:", postsData);
            console.log("Papers Data:", papersData);
            console.log("Categories Data:", categoriesData);
            // Get featured and recent posts
            const posts = postsData.items || [];
            const featuredPost = posts.filter((post)=>post.featured).slice(0, 3);
            const nonFeaturedPosts = posts.filter((post)=>!post.featured);
            return {
                featuredPosts: featuredPost,
                recentPosts: nonFeaturedPosts.slice(0, 6),
                recentPapers: papersData.data || [],
                categories: categoriesData || []
            };
        } catch (err) {
            setError(err.message || "Failed to load data");
            console.error(err);
        } finally{}
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchData().then((res)=>{
            if (res) {
                setFeaturedPosts(res.featuredPosts);
                setRecentPosts(res.recentPosts);
                setRecentPapers(res.recentPapers);
                setCategories(res.categories);
            }
        }).finally(()=>{
            setIsLoading(false);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log("Featured Posts:", featuredPosts);
        console.log("Recent Posts:", recentPosts);
        console.log("Recent Papers:", recentPapers);
        console.log("Categories:", categories);
    }, [
        featuredPosts,
        recentPosts,
        recentPapers,
        categories
    ]);
    // Format date
    const formatDate = (dateString)=>{
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };
    if (isLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex justify-center items-center h-96",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            })
        });
    }
    if (error) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container mx-auto px-4 py-16",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-red-50 border-l-4 border-red-500 p-4 rounded",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-red-700",
                        children: error
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>window.location.reload(),
                        className: "mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",
                        children: "Try Again"
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "max-w-3xl",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
                                children: "Research Review Hub"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xl md:text-2xl mb-8 opacity-90",
                                children: "Discover, analyze, and discuss the latest research papers and scientific breakthroughs"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/reviews",
                                        className: "px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition",
                                        children: "Browse Reviews"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/papers",
                                        className: "px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition",
                                        children: "Explore Papers"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "py-16 bg-gray-50",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between items-baseline mb-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-3xl font-bold",
                                    children: "Featured Reviews"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/reviews",
                                    className: "text-blue-600 hover:underline font-medium",
                                    children: "View all reviews →"
                                })
                            ]
                        }),
                        featuredPosts.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                            children: featuredPosts.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: index === 0 ? "lg:col-span-2" : "",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_blog_blog_card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        post: post,
                                        variant: index === 0 ? "featured" : "default"
                                    })
                                }, post.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "py-16",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "lg:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-baseline mb-8",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "text-2xl font-bold",
                                                children: "Recent Reviews"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/reviews",
                                                className: "text-blue-600 hover:underline font-medium",
                                                children: "View all →"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                                        children: recentPosts.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_blog_blog_card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                post: post
                                            }, post.id))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mb-12",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between items-baseline mb-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-xl font-bold",
                                                        children: "Latest Research Papers"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/papers",
                                                        className: "text-blue-600 hover:underline font-medium text-sm",
                                                        children: "View all →"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bg-white rounded-lg shadow-sm overflow-hidden",
                                                children: recentPapers.map((paper, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: `p-4 ${index < recentPapers.length - 1 ? "border-b" : ""}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                className: "font-semibold mb-1",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                    href: `/papers/${paper.id}`,
                                                                    className: "hover:text-blue-600 transition",
                                                                    children: paper.title
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-sm text-gray-500 mb-2",
                                                                children: formatDate(paper.publicationDate)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-gray-600 text-sm",
                                                                children: paper.authors.join(", ")
                                                            })
                                                        ]
                                                    }, paper.id))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "text-xl font-bold mb-6",
                                                children: "Explore Categories"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bg-white rounded-lg shadow-sm p-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex flex-wrap gap-3",
                                                    children: categories.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: `/categories/${category.id}`,
                                                            className: "px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition",
                                                            children: category.name
                                                        }, category.id))
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "py-16 bg-blue-50",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container mx-auto px-4 text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-3xl font-bold mb-6",
                            children: "Join Our Research Community"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-lg text-gray-700 mb-8 max-w-3xl mx-auto",
                            children: "Sign up to contribute your own reviews, discuss papers with other researchers, and stay updated on the latest developments in your field."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-wrap justify-center gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/register",
                                    className: "px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition",
                                    children: "Sign Up"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/login",
                                    className: "px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition",
                                    children: "Log In"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 2838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\User\Documents\Research Review Blog Site (1)\workspace\research-review-blog\app\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,285,411,800], () => (__webpack_exec__(5275)));
module.exports = __webpack_exports__;

})();