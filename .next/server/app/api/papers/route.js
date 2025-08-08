"use strict";
(() => {
var exports = {};
exports.id = 263;
exports.ids = [263];
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

/***/ 7934:
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

// NAMESPACE OBJECT: ./app/api/papers/route.ts
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
;// CONCATENATED MODULE: ./app/api/papers/route.ts



// GET /api/papers - Get all research papers with optional filtering
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "10");
        const userId = searchParams.get("userId") || undefined;
        const query = searchParams.get("query") || undefined;
        const sort = searchParams.get("sort") || "desc";
        const researchPapers = await db/* ResearchPapers */.U4.getAll();
        // Apply filters
        let filteredPapers = [
            ...researchPapers
        ];
        console.log("Filtered papers before applying filters:", filteredPapers);
        if (userId) {
            filteredPapers = await db/* ResearchPapers */.U4.findByUserId(userId);
        }
        if (query) {
            const lowerQuery = query.toLowerCase();
            let filtered = await db/* ResearchPapers */.U4.filterByKeys([
                {
                    title: {
                        $regex: lowerQuery,
                        $options: "i"
                    }
                },
                {
                    abstract: {
                        $regex: lowerQuery,
                        $options: "i"
                    }
                },
                {
                    authors: {
                        $elemMatch: {
                            $regex: lowerQuery,
                            $options: "i"
                        }
                    }
                }
            ]);
            if (filtered.length === 0) {
                return next_response/* default */.Z.json({
                    error: "No papers found matching the query"
                }, {
                    status: 404
                });
            }
            filteredPapers = filtered;
            // If no papers found after filtering
            if (filteredPapers.length === 0) {
                return next_response/* default */.Z.json({
                    error: "No papers found"
                }, {
                    status: 404
                });
            }
        }
        // filteredPapers = filteredPapers.filter(
        //   paper => 
        //     paper.title.toLowerCase().includes(lowerQuery) || 
        //     paper.abstract.toLowerCase().includes(lowerQuery) ||
        //     paper.authors.some(author => author.toLowerCase().includes(lowerQuery))
        // );
        // Sort by uploadedAt in descending order
        if (sort === "asc") {
            filteredPapers.sort((a, b)=>new Date(a.uploadedAt).getTime() - new Date(b.uploadedAt).getTime());
        } else {
            // Default to descending order
            filteredPapers.sort((a, b)=>new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime());
        }
        // Paginate results
        const total = filteredPapers.length;
        const totalPages = Math.ceil(total / limit);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedPapers = filteredPapers.slice(startIndex, endIndex);
        return next_response/* default */.Z.json({
            items: paginatedPapers,
            total,
            page,
            limit,
            totalPages
        });
    } catch (error) {
        console.error("Error fetching papers:", error);
        return next_response/* default */.Z.json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}
// POST /api/papers - Upload a new research paper
async function POST(request) {
    try {
        // In a real app, this would handle file upload with a multipart form
        // Here we'll just handle the metadata as JSON
        const data = await request.json();
        // Basic validation
        if (!data.title || !data.authors || !data.abstract || !data.userId || !data.pdfUrl) {
            return next_response/* default */.Z.json({
                error: "Missing required fields"
            }, {
                status: 400
            });
        }
        const now = new Date().toISOString();
        const newPaper = {
            id: (0,uuid.v4)(),
            title: data.title,
            authors: data.authors,
            abstract: data.abstract,
            pdfUrl: data.pdfUrl,
            doi: data.doi,
            journal: data.journal,
            publicationDate: data.publicationDate,
            userId: data.userId,
            uploadedAt: now
        };
        // In a real app, we would save to a database
        // For now, we just add to our in-memory array
        return await db/* ResearchPapers */.U4.create(newPaper).then(()=>{
            console.log("Paper uploaded successfully:", newPaper);
            return next_response/* default */.Z.json(newPaper, {
                status: 201
            });
        });
    } catch (error) {
        console.error("Error uploading paper:", error);
        return next_response/* default */.Z.json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fpapers%2Froute&name=app%2Fapi%2Fpapers%2Froute&pagePath=private-next-app-dir%2Fapi%2Fpapers%2Froute.ts&appDir=C%3A%5CUsers%5CUser%5CDocuments%5CResearch%20Review%20Blog%20Site%20(1)%5Cworkspace%5Cresearch-review-blog%5Capp&appPaths=%2Fapi%2Fpapers%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/papers/route",
        pathname: "/api/papers",
        filename: "route",
        bundlePath: "app/api/papers/route"
    },
    resolvedPagePath: "C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\api\\papers\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/papers/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,778,600,324,130], () => (__webpack_exec__(7934)));
module.exports = __webpack_exports__;

})();