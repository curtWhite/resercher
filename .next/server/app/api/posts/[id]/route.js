"use strict";
(() => {
var exports = {};
exports.id = 602;
exports.ids = [602];
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

/***/ 7274:
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

// NAMESPACE OBJECT: ./app/api/posts/[id]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  PUT: () => (PUT)
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
;// CONCATENATED MODULE: ./app/api/posts/[id]/route.ts


// GET /api/posts/[id] - Get a specific blog post by ID
async function GET(request, { params }) {
    try {
        const { id } = params;
        const blogPosts = await db/* BlogPosts */.lf.getAll();
        const post = blogPosts.find((post)=>post.id === id);
        if (!post) {
            return next_response/* default */.Z.json({
                error: "Post not found"
            }, {
                status: 404
            });
        }
        return next_response/* default */.Z.json(post);
    } catch (error) {
        console.error("Error fetching post:", error);
        return next_response/* default */.Z.json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}
// PUT /api/posts/[id] - Update a specific blog post by ID
async function PUT(request, { params }) {
    try {
        const { id } = params;
        const data = await request.json();
        const post = await db/* BlogPosts */.lf.findById(id);
        if (post === null) {
            return next_response/* default */.Z.json({
                error: "Post not found"
            }, {
                status: 404
            });
        }
        const now = new Date().toISOString();
        const updatedPost = {
            ...post,
            ...data,
            updatedAt: now,
            // If post wasn't published before but is now being published
            publishedAt: !post.published && data.published ? now : post.publishedAt
        };
        // Update the post in our in-memory array
        return await db/* BlogPosts */.lf.update(id, updatedPost).then(()=>{
            console.log("Post updated successfully");
            return next_response/* default */.Z.json(updatedPost);
        });
    } catch (error) {
        console.error("Error updating post:", error);
        return next_response/* default */.Z.json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}
// DELETE /api/posts/[id] - Delete a specific blog post by ID
async function DELETE(request, { params }) {
    try {
        const { id } = params;
        const post = await db/* BlogPosts */.lf.findById(id);
        if (!post) {
            return next_response/* default */.Z.json({
                error: "Post not found"
            }, {
                status: 404
            });
        }
        // Remove the post from our in-memory array
        return await db/* BlogPosts */.lf.delete(id).then((result)=>{
            if (!result.acknowledged) {
                return next_response/* default */.Z.json({
                    error: "Post not found"
                }, {
                    status: 404
                });
            } else {
                return next_response/* default */.Z.json({
                    message: "Post successfully deleted"
                }, {
                    status: 200
                });
            }
        });
    } catch (error) {
        console.error("Error deleting post:", error);
        return next_response/* default */.Z.json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fposts%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fposts%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fposts%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CUser%5CDocuments%5CResearch%20Review%20Blog%20Site%20(1)%5Cworkspace%5Cresearch-review-blog%5Capp&appPaths=%2Fapi%2Fposts%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/posts/[id]/route",
        pathname: "/api/posts/[id]",
        filename: "route",
        bundlePath: "app/api/posts/[id]/route"
    },
    resolvedPagePath: "C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\api\\posts\\[id]\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/posts/[id]/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,778,600,130], () => (__webpack_exec__(7274)));
module.exports = __webpack_exports__;

})();