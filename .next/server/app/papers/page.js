(() => {
var exports = {};
exports.id = 734;
exports.ids = [734];
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

/***/ 8349:
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
        children: [
        'papers',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3467)), "C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\papers\\page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5438)), "C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6061)), "C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\not-found.tsx"],
        
      }
      ]
      }.children;
const pages = ["C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\papers\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/papers/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/papers/page",
        pathname: "/papers",
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

/***/ 8675:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2486))

/***/ }),

/***/ 2486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PapersPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function PapersPage() {
    const [papers, setPapers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Filters
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("newest");
    const [journalFilter, setJournalFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Get unique journals from papers
    const journals = Array.from(new Set(papers.map((paper)=>paper.journal)));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchData() {
            try {
                setIsLoading(true);
                // Fetch papers and categories in parallel
                const [papersRes, categoriesRes] = await Promise.all([
                    fetch("/api/papers"),
                    fetch("/api/categories")
                ]);
                if (!papersRes.ok) throw new Error("Failed to fetch papers");
                if (!categoriesRes.ok) throw new Error("Failed to fetch categories");
                const papersData = await papersRes.json();
                const categoriesData = await categoriesRes.json();
                setPapers(papersData.items || []);
                setCategories(categoriesData || []);
            } catch (err) {
                setError(err.message || "Failed to load data");
                console.error(err);
            } finally{
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);
    // Handle sort change
    const handleSortChange = (e)=>{
        setSortBy(e.target.value);
    };
    // Handle journal filter change
    const handleJournalChange = (journal)=>{
        setJournalFilter(journalFilter === journal ? "" : journal);
    };
    // Filter and sort papers
    const filteredAndSortedPapers = [
        ...papers
    ].filter((paper)=>{
        // Filter by journal if selected
        if (journalFilter && paper.journal !== journalFilter) {
            return false;
        }
        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            return paper.title.toLowerCase().includes(query) || paper.authors.some((author)=>author.toLowerCase().includes(query)) || paper.abstract.toLowerCase().includes(query) || paper.journal?.toLowerCase().includes(query);
        }
        return true;
    }).sort((a, b)=>{
        if (sortBy === "newest") {
            return new Date(b.publicationDate ?? "").getTime() - new Date(a.publicationDate ?? "").getTime();
        } else if (sortBy === "oldest") {
            return new Date(a.publicationDate ?? "").getTime() - new Date(b.publicationDate ?? "").getTime();
        } else if (sortBy === "alphabetical") {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });
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
            className: "container mx-auto px-4 py-16",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center items-center h-64",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
                })
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
        className: "container mx-auto px-4 py-16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-3xl md:text-4xl font-bold mb-6",
                children: "Research Papers"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-white shadow rounded-lg p-6 mb-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative flex-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        placeholder: "Search papers by title, author, or journal...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "sort",
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Sort by"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        id: "sort",
                                        value: sortBy,
                                        onChange: handleSortChange,
                                        className: "block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "newest",
                                                children: "Newest First"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "oldest",
                                                children: "Oldest First"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "alphabetical",
                                                children: "Alphabetical"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-sm font-medium text-gray-700 mb-2",
                                children: "Filter by Journal"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: journals.map((journal)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>handleJournalChange(journal ?? ""),
                                        className: `px-3 py-1 rounded-full text-sm ${journalFilter === journal ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`,
                                        children: journal
                                    }, journal))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-gray-600 mb-6",
                children: [
                    "Showing ",
                    filteredAndSortedPapers.length,
                    " ",
                    filteredAndSortedPapers.length === 1 ? "paper" : "papers",
                    journalFilter && ` in ${journalFilter}`
                ]
            }),
            filteredAndSortedPapers.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "space-y-8",
                children: filteredAndSortedPapers.map((paper)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-white shadow rounded-lg p-6 hover:shadow-md transition",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-xl font-bold mb-2",
                                children: paper.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-wrap gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full",
                                        children: paper.journal
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full",
                                        children: paper.publicationDate ? formatDate(paper.publicationDate) : "Unknown date"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full",
                                        children: [
                                            "DOI: ",
                                            paper.doi
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-gray-600 mb-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-medium",
                                        children: "Authors:"
                                    }),
                                    " ",
                                    paper.authors.join(", ")
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-700 mb-4 line-clamp-3",
                                children: paper.abstract
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: `/papers/${paper.id}`,
                                        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
                                        children: "View Details"
                                    }),
                                    paper.pdfUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: paper.pdfUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50",
                                        children: "View PDF"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: `/reviews?paper=${paper.id}`,
                                        className: "px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50",
                                        children: "Find Related Reviews"
                                    })
                                ]
                            })
                        ]
                    }, paper.id))
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-gray-50 border border-gray-200 rounded-lg p-8 text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-xl font-medium text-gray-900 mb-2",
                        children: "No papers found"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-gray-600 mb-6",
                        children: "Try adjusting your search or filter criteria to find what you're looking for."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>{
                            setJournalFilter("");
                            setSearchQuery("");
                        },
                        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
                        children: "Clear all filters"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\User\Documents\Research Review Blog Site (1)\workspace\research-review-blog\app\papers\page.tsx`)

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,285,411], () => (__webpack_exec__(8349)));
module.exports = __webpack_exports__;

})();