"use strict";
(() => {
var exports = {};
exports.id = 2;
exports.ids = [2];
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

/***/ 1188:
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

// NAMESPACE OBJECT: ./app/api/auth/register/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
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
;// CONCATENATED MODULE: ./app/api/auth/register/route.ts



// POST /api/auth/register - Register a new user
async function POST(request) {
    try {
        const { name, email, password, avatarUrl, bio } = await request.json();
        // Basic validation
        if (!name || !email || !password) {
            return next_response/* default */.Z.json({
                error: "Name, email, and password are required"
            }, {
                status: 400
            });
        }
        // Check if email already exists
        const existingUser = db/* users */.rC.find((user)=>user.email === email);
        if (existingUser) {
            return next_response/* default */.Z.json({
                error: "A user with this email already exists"
            }, {
                status: 409
            });
        }
        const now = new Date().toISOString();
        const newUser = {
            id: (0,uuid.v4)(),
            name,
            email,
            password,
            avatarUrl: avatarUrl || null,
            bio: bio || null,
            createdAt: now,
            updatedAt: now
        };
        // In a real app, we would save to a database
        // For now, we just add to our in-memory array
        db/* users */.rC.push(newUser);
        // Don't return the password
        const { password: _, ...userWithoutPassword } = newUser;
        return next_response/* default */.Z.json({
            message: "Registration successful",
            user: userWithoutPassword,
            // Mock token - in a real app, this would be a real JWT
            token: `mock-jwt-token-${newUser.id}`
        }, {
            status: 201
        });
    } catch (error) {
        console.error("Error during registration:", error);
        return next_response/* default */.Z.json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2Fregister%2Froute&name=app%2Fapi%2Fauth%2Fregister%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=C%3A%5CUsers%5CUser%5CDocuments%5CResearch%20Review%20Blog%20Site%20(1)%5Cworkspace%5Cresearch-review-blog%5Capp&appPaths=%2Fapi%2Fauth%2Fregister%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/auth/register/route",
        pathname: "/api/auth/register",
        filename: "route",
        bundlePath: "app/api/auth/register/route"
    },
    resolvedPagePath: "C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\api\\auth\\register\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/auth/register/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,778,600,324,130], () => (__webpack_exec__(1188)));
module.exports = __webpack_exports__;

})();