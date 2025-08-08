"use strict";
(() => {
var exports = {};
exports.id = 701;
exports.ids = [701];
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

/***/ 6963:
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

// NAMESPACE OBJECT: ./app/api/users/route.ts
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
;// CONCATENATED MODULE: ./app/api/users/route.ts



const _users = new db/* Users */.Q();
// GET /api/users - Get all users
async function GET() {
    try {
        const users = await db/* Users */.Q.getAll();
        // In a real app, we might want to hide sensitive information like passwords
        // For this mock implementation, we'll return all user data
        return next_response/* default */.Z.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return next_response/* default */.Z.json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}
// POST /api/users - Create a new user
async function POST(request) {
    try {
        const data = await request.json();
        // Basic validation
        if (!data.name || !data.email || !data.password) {
            return next_response/* default */.Z.json({
                error: "Name, email, and password are required"
            }, {
                status: 400
            });
        }
        // Check if email already exists
        const existingUser = await db/* Users */.Q.findByEmail(data.email);
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
            name: data.name,
            email: data.email,
            password: await (0,db/* hashedPassword */.zu)(data.password),
            avatarUrl: data.avatarUrl || null,
            bio: data.bio || null,
            createdAt: now,
            updatedAt: now
        };
        // In a real app, we would save to a database
        // For now, we just add to our in-memory array
        // users.push(newUser);
        // Don't return the password
        const { password, ...userWithoutPassword } = newUser;
        return next_response/* default */.Z.json(userWithoutPassword, {
            status: 201
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return next_response/* default */.Z.json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fusers%2Froute&name=app%2Fapi%2Fusers%2Froute&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5CUser%5CDocuments%5CResearch%20Review%20Blog%20Site%20(1)%5Cworkspace%5Cresearch-review-blog%5Capp&appPaths=%2Fapi%2Fusers%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/users/route",
        pathname: "/api/users",
        filename: "route",
        bundlePath: "app/api/users/route"
    },
    resolvedPagePath: "C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\api\\users\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/users/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,778,600,324,130], () => (__webpack_exec__(6963)));
module.exports = __webpack_exports__;

})();