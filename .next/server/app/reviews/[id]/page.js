(() => {
var exports = {};
exports.id = 103;
exports.ids = [103];
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

/***/ 5975:
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
        '[id]',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4476)), "C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\reviews\\[id]\\page.tsx"],
          
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
const pages = ["C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\reviews\\[id]\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/reviews/[id]/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/reviews/[id]/page",
        pathname: "/reviews/[id]",
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

/***/ 4159:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7671))

/***/ }),

/***/ 7671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewDetailPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1831);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9079);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1607);
/* __next_internal_client_entry_do_not_use__ default auto */ 






async function renderMarkdownToHTML(markdownText) {
    const dirty = await (0,marked__WEBPACK_IMPORTED_MODULE_5__/* .marked */ .TU)(markdownText);
    return dompurify__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.sanitize(dirty);
}
function ReviewDetailPage() {
    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const auth = (0,_app_context_auth__WEBPACK_IMPORTED_MODULE_4__.useAuth)();
    const postId = params.id;
    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [paper, setPaper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [author, setAuthor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [relatedPosts, setRelatedPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [showPdf, setShowPdf] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // New comment form state
    const [commentText, setCommentText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Mock authentication state
    const [mackdown, setMackDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // Mock authentication state
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsAuthenticated(auth.isAuthenticated);
    }, [
        auth.isAuthenticated
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchData() {
            try {
                setIsLoading(true);
                // Fetch post details
                const postRes = await fetch(`/api/posts/${postId}`);
                if (!postRes.ok) {
                    if (postRes.status === 404) {
                        router.push("/404");
                        return;
                    }
                    throw new Error("Failed to fetch post");
                }
                const postData = await postRes.json();
                setPost(postData);
                // Fetch related data if post exists
                if (postData.data) {
                    // Fetch categories and tags in parallel
                    const [categoriesRes, tagsRes] = await Promise.all([
                        fetch("/api/categories"),
                        fetch("/api/tags")
                    ]);
                    if (categoriesRes.ok && tagsRes.ok) {
                        const [categoriesData, tagsData] = await Promise.all([
                            categoriesRes.json(),
                            tagsRes.json()
                        ]);
                        setCategories(categoriesData.data || []);
                        setTags(tagsData.data || []);
                    }
                    // Fetch author details
                    if (postData.data.userId) {
                        const authorRes = await fetch(`/api/users/${postData.data.userId}`);
                        if (authorRes.ok) {
                            const authorData = await authorRes.json();
                            setAuthor(authorData.data);
                        }
                    }
                    // Fetch associated paper if exists
                    if (postData.data.paperId) {
                        const paperRes = await fetch(`/api/papers/${postData.data.paperId}`);
                        if (paperRes.ok) {
                            const paperData = await paperRes.json();
                            setPaper(paperData.data);
                        }
                    }
                    // Fetch comments
                    const commentsRes = await fetch(`/api/posts/${postId}/comments`);
                    if (commentsRes.ok) {
                        const commentsData = await commentsRes.json();
                        setComments(commentsData.data || []);
                    }
                    // Fetch related posts (posts with same categories or tags)
                    if (postData.data.categoryIds?.length || postData.data.tagIds?.length) {
                        const relatedRes = await fetch("/api/posts?limit=3");
                        if (relatedRes.ok) {
                            const relatedData = await relatedRes.json();
                            // Filter out current post and limit to 3
                            const filtered = (relatedData.data || []).filter((p)=>p.id !== postId).slice(0, 3);
                            setRelatedPosts(filtered);
                        }
                    }
                }
            } catch (err) {
                setError(err.message || "Failed to load post");
                console.error(err);
            } finally{
                setIsLoading(false);
            }
        }
        fetchData();
    }, [
        postId,
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (post) {
            // Convert markdown content to HTML
            renderMarkdownToHTML(post.content).then((html)=>{
                setMackDown(html);
            });
        }
    }, [
        post
    ]);
    // Handle new comment submission
    const handleCommentSubmit = async (e)=>{
        e.preventDefault();
        if (!commentText.trim()) return;
        setIsSubmitting(true);
        try {
            const response = await fetch(`/api/posts/${postId}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    content: commentText,
                    postId: postId,
                    // In a real app, userId would come from auth context
                    userId: "user1"
                })
            });
            if (!response.ok) throw new Error("Failed to submit comment");
            const data = await response.json();
            // Add new comment to the list
            setComments((prevComments)=>[
                    ...prevComments,
                    data.data
                ]);
            setCommentText("");
        } catch (err) {
            console.error("Error submitting comment:", err);
            alert("Failed to submit comment. Please try again.");
        } finally{
            setIsSubmitting(false);
        }
    };
    // Helper to find category name by id
    const getCategoryName = (catId)=>{
        const category = categories.find((cat)=>cat.id === catId);
        return category ? category.name : "";
    };
    // Helper to find tag name by id
    const getTagName = (tagId)=>{
        const tag = tags.find((tag)=>tag.id === tagId);
        return tag ? tag.name : "";
    };
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
    if (error || !post) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container mx-auto px-4 py-16",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-red-50 border-l-4 border-red-500 p-4 rounded",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-red-700",
                        children: error || "Post not found"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/reviews",
                        className: "mt-4 inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",
                        children: "Back to Reviews"
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container mx-auto px-4 py-16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "text-sm mb-8",
                "aria-label": "Breadcrumb",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                    className: "flex space-x-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/",
                                className: "text-gray-500 hover:text-blue-600",
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "text-gray-500",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "mx-2",
                                    children: "/"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/reviews",
                                    className: "text-gray-500 hover:text-blue-600",
                                    children: "Reviews"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "text-gray-800",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "mx-2",
                                    children: "/"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Current Review"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "lg:col-span-2",
                        children: [
                            post.coverImageUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-8 rounded-lg overflow-hidden",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: post.coverImageUrl,
                                    alt: post.title,
                                    className: "w-full h-auto object-cover"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-3xl md:text-4xl font-bold mb-4",
                                        children: post.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center mb-4 text-gray-600",
                                        children: [
                                            post.publishedAt && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mr-4",
                                                children: formatDate(post.publishedAt)
                                            }),
                                            author && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    author.avatarUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: author.avatarUrl,
                                                        alt: author.name,
                                                        className: "h-8 w-8 rounded-full mr-2"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: author.name
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-wrap gap-2 mb-4",
                                        children: [
                                            post.categoryIds?.map((catId)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: `/categories/${catId}`,
                                                    className: "inline-block bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full",
                                                    children: getCategoryName(catId)
                                                }, catId)),
                                            post.tagIds?.map((tagId)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: `/tags/${tagId}`,
                                                    className: "inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full",
                                                    children: getTagName(tagId)
                                                }, tagId))
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "prose prose-lg max-w-none mb-12",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-xl font-medium text-gray-600 mb-6",
                                        children: post.excerpt
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: mackdown
                                        }
                                    })
                                ]
                            }),
                            paper && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-gray-50 border border-gray-200 rounded-lg p-6 mb-12",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-2xl font-bold mb-4",
                                        children: "Research Paper"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "text-lg font-semibold mb-1",
                                                children: paper.title
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
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "text-gray-600 mb-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "font-medium",
                                                        children: "Journal:"
                                                    }),
                                                    " ",
                                                    paper.journal
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "text-gray-600 mb-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "font-medium",
                                                        children: "DOI:"
                                                    }),
                                                    " ",
                                                    paper.doi
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-gray-700",
                                                children: paper.abstract
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex space-x-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>setShowPdf(!showPdf),
                                                className: "px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50",
                                                children: showPdf ? "Hide PDF" : "View PDF"
                                            }),
                                            paper.pdfUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: paper.pdfUrl,
                                                download: true,
                                                className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
                                                children: "Download PDF"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            showPdf && paper?.pdfUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-12"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-2xl font-bold mb-6",
                                        children: "Comments"
                                    }),
                                    isAuthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mb-8",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            onSubmit: handleCommentSubmit,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mb-4",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "comment",
                                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                                            children: "Leave a comment"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                            id: "comment",
                                                            rows: 4,
                                                            value: commentText,
                                                            onChange: (e)=>setCommentText(e.target.value),
                                                            className: "w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                                                            placeholder: "Share your thoughts about this review..."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "submit",
                                                        disabled: isSubmitting || !commentText.trim(),
                                                        className: `px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${isSubmitting || !commentText.trim() ? "opacity-50 cursor-not-allowed" : ""}`,
                                                        children: isSubmitting ? "Submitting..." : "Submit Comment"
                                                    })
                                                })
                                            ]
                                        })
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mb-8 bg-gray-50 p-6 rounded-lg text-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mb-4",
                                                children: "Please sign in to leave a comment"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "/login",
                                                className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
                                                children: "Sign in"
                                            })
                                        ]
                                    }),
                                    comments.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "space-y-6",
                                        children: comments.map((comment)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "bg-gray-50 p-4 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-between items-start mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "h-8 w-8 rounded-full bg-gray-300 mr-2"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "font-medium",
                                                                        children: comment.userId
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sm text-gray-500",
                                                                children: comment.createdAt && formatDate(comment.createdAt)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-gray-700",
                                                        children: comment.content
                                                    })
                                                ]
                                            }, comment.id))
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-center py-8 bg-gray-50 rounded-lg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-gray-600",
                                            children: "No comments yet. Be the first to comment!"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "lg:col-span-1",
                        children: [
                            author && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-white shadow rounded-lg p-6 mb-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-xl font-bold mb-4",
                                        children: "About the Author"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center mb-4",
                                        children: [
                                            author.avatarUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: author.avatarUrl,
                                                alt: author.name,
                                                className: "h-12 w-12 rounded-full mr-3"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "font-medium",
                                                    children: author.name
                                                })
                                            })
                                        ]
                                    }),
                                    author.bio && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-gray-600 mb-4",
                                        children: author.bio
                                    })
                                ]
                            }),
                            relatedPosts.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-white shadow rounded-lg p-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-xl font-bold mb-4",
                                        children: "Related Reviews"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "space-y-4",
                                        children: relatedPosts.map((relatedPost)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "border-b pb-4 last:border-0 last:pb-0",
                                                children: [
                                                    relatedPost.coverImageUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: relatedPost.coverImageUrl,
                                                        alt: relatedPost.title,
                                                        className: "w-full h-40 object-cover rounded-md mb-2"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        className: "font-medium mb-1",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            href: `/reviews/${relatedPost.id}`,
                                                            className: "hover:text-blue-600 transition",
                                                            children: relatedPost.title
                                                        })
                                                    }),
                                                    relatedPost.publishedAt && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: formatDate(relatedPost.publishedAt)
                                                    })
                                                ]
                                            }, relatedPost.id))
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\User\Documents\Research Review Blog Site (1)\workspace\research-review-blog\app\reviews\[id]\page.tsx`)

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
var __webpack_exports__ = __webpack_require__.X(0, [478,285,738,411], () => (__webpack_exec__(5975)));
module.exports = __webpack_exports__;

})();