"use strict";
(() => {
var exports = {};
exports.id = 990;
exports.ids = [990];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 2032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/posts/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
// EXTERNAL MODULE: ./app/lib/db.ts + 1 modules
var db = __webpack_require__(4969);
// EXTERNAL MODULE: ../../../../node_modules/uuid/index.js
var uuid = __webpack_require__(324);
;// CONCATENATED MODULE: ./app/api/posts/route.ts



// GET /api/posts - Get all blog posts with optional filtering
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "10");
        const categoryId = searchParams.get("categoryId") || undefined;
        const tagId = searchParams.get("tagId") || undefined;
        const userId = searchParams.get("userId") || undefined;
        const query = searchParams.get("query") || undefined;
        const blogPosts = await db/* BlogPosts */.lf.getAll();
        // Apply filters
        let filteredPosts = [
            ...blogPosts
        ].filter((post)=>post.published);
        if (categoryId) {
            filteredPosts = filteredPosts.filter((post)=>post.categoryIds.includes(categoryId));
        }
        if (tagId) {
            filteredPosts = filteredPosts.filter((post)=>post.tagIds.includes(tagId));
        }
        if (userId) {
            filteredPosts = filteredPosts.filter((post)=>post.userId === userId);
        }
        if (query) {
            const lowerQuery = query.toLowerCase();
            filteredPosts = filteredPosts.filter((post)=>post.title.toLowerCase().includes(lowerQuery) || post.content.toLowerCase().includes(lowerQuery));
        }
        // Sort by publishedAt in descending order
        filteredPosts.sort((a, b)=>{
            if (!a.publishedAt) return 1;
            if (!b.publishedAt) return -1;
            return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        });
        // Paginate results
        const total = filteredPosts.length;
        const totalPages = Math.ceil(total / limit);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
        return next_response/* default */.Z.json({
            items: paginatedPosts,
            total,
            page,
            limit,
            totalPages
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return next_response/* default */.Z.json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}
// POST /api/posts - Create a new blog post
async function POST(request) {
    try {
        const data = await request.json();
        // Basic validation
        if (!data.title || !data.content) {
            return next_response/* default */.Z.json({
                error: "Title and content are required"
            }, {
                status: 400
            });
        }
        const now = new Date().toISOString();
        const newPost = {
            id: (0,uuid.v4)(),
            title: data.title,
            content: data.content,
            excerpt: data.excerpt || data.content.substring(0, 150) + "...",
            coverImageUrl: data.coverImageUrl,
            userId: data.userId,
            categoryIds: data.categoryIds || [],
            tagIds: data.tagIds || [],
            paperId: data.paperId,
            publishedAt: data.publishedAt ? data.publishedAt : now,
            createdAt: now,
            updatedAt: now,
            published: data.published || false
        };
        // In a real app, we would save to a database
        // For now, we just add to our in-memory array
        return await db/* BlogPosts */.lf.create(newPost).then(()=>{
            console.log("Post created successfully");
            return next_response/* default */.Z.json(newPost, {
                status: 201
            });
        });
    } catch (error) {
        console.error("Error creating post:", error);
        return next_response/* default */.Z.json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fposts%2Froute&name=app%2Fapi%2Fposts%2Froute&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.ts&appDir=C%3A%5CUsers%5CUser%5CDocuments%5CResearch%20Review%20Blog%20Site%20(1)%5Cworkspace%5Cresearch-review-blog%5Capp&appPaths=%2Fapi%2Fposts%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/posts/route",
        pathname: "/api/posts",
        filename: "route",
        bundlePath: "app/api/posts/route"
    },
    resolvedPagePath: "C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\api\\posts\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/posts/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,778,600,324,130], () => (__webpack_exec__(2032)));
module.exports = __webpack_exports__;

})();