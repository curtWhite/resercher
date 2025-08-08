(() => {
var exports = {};
exports.id = 25;
exports.ids = [25];
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

/***/ 9199:
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
        'reviews',
        {
        children: [
        'new',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5151)), "C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\reviews\\new\\page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
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
const pages = ["C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\reviews\\new\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/reviews/new/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/reviews/new/page",
        pathname: "/reviews/new",
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

/***/ 9332:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8213))

/***/ }),

/***/ 8213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewReviewPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function NewReviewPage() {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();
    const paperId = searchParams.get("paperId");
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [selectedPaper, setSelectedPaper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [papers, setPapers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // Form state
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        excerpt: "",
        content: "",
        paperId: paperId || "",
        categoryIds: [],
        tagIds: [],
        coverImageUrl: "",
        status: "draft" // draft or published
    });
    // Paper search state
    const [paperSearchQuery, setPaperSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [showPaperSearch, setShowPaperSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!paperId);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchInitialData() {
            try {
                setIsLoading(true);
                // Fetch categories and tags in parallel
                const [categoriesRes, tagsRes] = await Promise.all([
                    fetch("/api/categories"),
                    fetch("/api/tags")
                ]);
                if (!categoriesRes.ok || !tagsRes.ok) {
                    throw new Error("Failed to fetch categories or tags");
                }
                const [categoriesData, tagsData] = await Promise.all([
                    categoriesRes.json(),
                    tagsRes.json()
                ]);
                setCategories(categoriesData.data || []);
                setTags(tagsData.data || []);
                // If paperId is provided, fetch paper details
                if (paperId) {
                    const paperRes = await fetch(`/api/papers/${paperId}`);
                    if (paperRes.ok) {
                        const paperData = await paperRes.json();
                        setSelectedPaper(paperData.data);
                        // Pre-fill title based on paper title
                        setFormData((prev)=>({
                                ...prev,
                                title: `Review: ${paperData.data.title}`,
                                paperId: paperData.data.id
                            }));
                    } else {
                        throw new Error("Failed to fetch paper details");
                    }
                } else {
                    // Fetch some recent papers for easier selection
                    const papersRes = await fetch("/api/papers?limit=5");
                    if (papersRes.ok) {
                        const papersData = await papersRes.json();
                        setPapers(papersData.data || []);
                    }
                }
            } catch (err) {
                setError(err.message || "Failed to load data");
                console.error(err);
            } finally{
                setIsLoading(false);
            }
        }
        // Check if user is authenticated
        async function checkAuth() {
            try {
                const response = await fetch("/api/auth/me");
                if (!response.ok) {
                    // Redirect to login
                    router.push("/login?redirect=reviews/new");
                }
            } catch (err) {
                console.error("Auth check failed:", err);
                // Redirect to login on error
                router.push("/login?redirect=reviews/new");
            }
        }
        checkAuth();
        fetchInitialData();
    }, [
        router,
        paperId
    ]);
    // Search for papers when query changes
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!paperSearchQuery.trim() || paperSearchQuery.length < 3) {
            return;
        }
        const searchTimeoutId = setTimeout(async ()=>{
            try {
                const searchRes = await fetch(`/api/papers?search=${encodeURIComponent(paperSearchQuery)}`);
                if (searchRes.ok) {
                    const searchData = await searchRes.json();
                    setPapers(searchData.data || []);
                }
            } catch (err) {
                console.error("Paper search failed:", err);
            }
        }, 500);
        return ()=>clearTimeout(searchTimeoutId);
    }, [
        paperSearchQuery
    ]);
    // Handle form field changes
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    // Handle category selection
    const handleCategoryToggle = (categoryId)=>{
        setFormData((prev)=>{
            const updatedCategories = prev.categoryIds.includes(categoryId) ? prev.categoryIds.filter((id)=>id !== categoryId) : [
                ...prev.categoryIds,
                categoryId
            ];
            return {
                ...prev,
                categoryIds: updatedCategories
            };
        });
    };
    // Handle tag selection
    const handleTagToggle = (tagId)=>{
        setFormData((prev)=>{
            const updatedTags = prev.tagIds.includes(tagId) ? prev.tagIds.filter((id)=>id !== tagId) : [
                ...prev.tagIds,
                tagId
            ];
            return {
                ...prev,
                tagIds: updatedTags
            };
        });
    };
    // Handle paper selection
    const handlePaperSelect = (paper)=>{
        setSelectedPaper(paper);
        setFormData((prev)=>({
                ...prev,
                paperId: paper.id,
                title: prev.title || `Review: ${paper.title}`
            }));
        setShowPaperSearch(false);
    };
    // Handle form submission
    const handleSubmit = async (e, status)=>{
        e.preventDefault();
        if (!formData.title.trim()) {
            setError("Title is required");
            return;
        }
        if (!formData.content.trim()) {
            setError("Content is required");
            return;
        }
        setIsSubmitting(true);
        setError("");
        setSuccess("");
        try {
            const response = await fetch("/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    status
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to create review");
            }
            const data = await response.json();
            setSuccess(status === "published" ? "Your review has been published successfully!" : "Your draft has been saved successfully!");
            // Redirect to the new post after a brief delay
            setTimeout(()=>{
                router.push(`/reviews/${data.data.id}`);
            }, 1500);
        } catch (err) {
            setError(err.message || "An error occurred while creating the review");
            console.error(err);
        } finally{
            setIsSubmitting(false);
        }
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto px-4 py-16",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-center mb-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-3xl font-bold",
                            children: "Write a New Review"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/reviews",
                            className: "text-blue-600 hover:underline",
                            children: "Cancel"
                        })
                    ]
                }),
                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-red-700",
                        children: error
                    })
                }),
                success && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-green-700",
                        children: success
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: (e)=>handleSubmit(e, formData.status),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-white shadow rounded-lg p-6 mb-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-xl font-bold mb-4",
                                    children: "1. Select Research Paper"
                                }),
                                selectedPaper ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bg-gray-50 p-4 rounded-lg",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-start",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "font-medium",
                                                        children: selectedPaper.title
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "text-sm text-gray-600",
                                                        children: [
                                                            selectedPaper.authors.join(", "),
                                                            " • ",
                                                            selectedPaper.journal
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setSelectedPaper(null);
                                                    setShowPaperSearch(true);
                                                    setFormData((prev)=>({
                                                            ...prev,
                                                            paperId: ""
                                                        }));
                                                },
                                                className: "text-sm text-blue-600 hover:text-blue-800",
                                                children: "Change Paper"
                                            })
                                        ]
                                    })
                                }) : showPaperSearch ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "paperSearch",
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Search for a paper"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            id: "paperSearch",
                                                            value: paperSearchQuery,
                                                            onChange: (e)=>setPaperSearchQuery(e.target.value),
                                                            placeholder: "Enter paper title, authors, or DOI...",
                                                            className: "block w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                                                })
                                            ]
                                        }),
                                        papers.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "space-y-4 max-h-72 overflow-y-auto",
                                            children: papers.map((paper)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "p-3 border rounded-lg cursor-pointer hover:bg-blue-50",
                                                    onClick: ()=>handlePaperSelect(paper),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "font-medium mb-1",
                                                            children: paper.title
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: [
                                                                paper.authors.join(", "),
                                                                " • ",
                                                                paper.journal
                                                            ]
                                                        })
                                                    ]
                                                }, paper.id))
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-gray-600 text-sm",
                                            children: paperSearchQuery.length >= 3 ? "No papers found. Try a different search term." : "Type at least 3 characters to search for papers."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mt-4 text-sm text-gray-500",
                                            children: [
                                                "Can't find the paper you're looking for?",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/papers/new",
                                                    className: "text-blue-600 hover:underline",
                                                    children: "Add a new paper"
                                                })
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>setShowPaperSearch(true),
                                    className: "px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50",
                                    children: "Select a Research Paper"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-white shadow rounded-lg p-6 mb-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-xl font-bold mb-4",
                                    children: "2. Review Details"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "title",
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Title*"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "text",
                                                    id: "title",
                                                    name: "title",
                                                    value: formData.title,
                                                    onChange: handleInputChange,
                                                    placeholder: "Enter a descriptive title for your review",
                                                    className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                                                    required: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "excerpt",
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Excerpt/Summary"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    id: "excerpt",
                                                    name: "excerpt",
                                                    rows: 2,
                                                    value: formData.excerpt,
                                                    onChange: handleInputChange,
                                                    placeholder: "Write a brief summary of your review (will appear in listings)",
                                                    className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "coverImageUrl",
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Cover Image URL"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "url",
                                                    id: "coverImageUrl",
                                                    name: "coverImageUrl",
                                                    value: formData.coverImageUrl,
                                                    onChange: handleInputChange,
                                                    placeholder: "Enter a URL for the review cover image",
                                                    className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "content",
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Review Content*"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    id: "content",
                                                    name: "content",
                                                    rows: 12,
                                                    value: formData.content,
                                                    onChange: handleInputChange,
                                                    placeholder: "Write your detailed review here...",
                                                    className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                                                    required: true
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-white shadow rounded-lg p-6 mb-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-xl font-bold mb-4",
                                    children: "3. Categories and Tags"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Categories"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: categories.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            type: "button",
                                                            onClick: ()=>handleCategoryToggle(category.id),
                                                            className: `px-3 py-1 rounded-full text-sm ${formData.categoryIds.includes(category.id) ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`,
                                                            children: category.name
                                                        }, category.id))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Tags"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            type: "button",
                                                            onClick: ()=>handleTagToggle(tag.id),
                                                            className: `px-3 py-1 rounded-full text-sm ${formData.tagIds.includes(tag.id) ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`,
                                                            children: tag.name
                                                        }, tag.id))
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>router.back(),
                                    className: "px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50",
                                    children: "Cancel"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "space-x-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            onClick: (e)=>{
                                                setFormData((prev)=>({
                                                        ...prev,
                                                        status: "draft"
                                                    }));
                                                handleSubmit(e, "draft");
                                            },
                                            disabled: isSubmitting,
                                            className: `px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`,
                                            children: "Save as Draft"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            onClick: (e)=>{
                                                setFormData((prev)=>({
                                                        ...prev,
                                                        status: "published"
                                                    }));
                                                handleSubmit(e, "published");
                                            },
                                            disabled: isSubmitting,
                                            className: `px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`,
                                            children: isSubmitting ? "Publishing..." : "Publish Review"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 5151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\User\Documents\Research Review Blog Site (1)\workspace\research-review-blog\app\reviews\new\page.tsx`)

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,285,411], () => (__webpack_exec__(9199)));
module.exports = __webpack_exports__;

})();