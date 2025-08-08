"use strict";
(() => {
var exports = {};
exports.id = 873;
exports.ids = [873];
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

/***/ 4698:
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

// NAMESPACE OBJECT: ./app/api/auth/login/route.ts
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
;// CONCATENATED MODULE: ./app/api/auth/login/route.ts


// POST /api/auth/login - User login
async function POST(request) {
    try {
        const { email, password } = await request.json();
        // Basic validation
        if (!email || !password) {
            return next_response/* default */.Z.json({
                error: "Email and password are required"
            }, {
                status: 400
            });
        }
        // Find user with matching email
        const u = await db/* Users */.Q.findByEmail(email);
        const user = u[0] || null;
        if (user === null) {
            return next_response/* default */.Z.json({
                error: "Invalid email or password"
            }, {
                status: 401
            });
        }
        // Check password (in a real app, we would compare hashed passwords)
        if (await (0,db/* checkHashedPassword */.U_)(password, user.password) === false) {
            return next_response/* default */.Z.json({
                error: "Invalid email or password"
            }, {
                status: 401
            });
        }
        // In a real app, we would create a JWT token and set it in a secure HTTP-only cookie
        // For this mock implementation, we'll just return the user data (minus the password)
        const { password: _, ...userWithoutPassword } = user;
        return next_response/* default */.Z.json({
            message: "Login successful",
            user: userWithoutPassword,
            // Mock token - in a real app, this would be a real JWT
            token: `jwt-token-${user.id}`
        });
    } catch (error) {
        console.error("Error during login:", error);
        return next_response/* default */.Z.json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2Flogin%2Froute&name=app%2Fapi%2Fauth%2Flogin%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CUser%5CDocuments%5CResearch%20Review%20Blog%20Site%20(1)%5Cworkspace%5Cresearch-review-blog%5Capp&appPaths=%2Fapi%2Fauth%2Flogin%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/auth/login/route",
        pathname: "/api/auth/login",
        filename: "route",
        bundlePath: "app/api/auth/login/route"
    },
    resolvedPagePath: "C:\\Users\\User\\Documents\\Research Review Blog Site (1)\\workspace\\research-review-blog\\app\\api\\auth\\login\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/auth/login/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,778,600,130], () => (__webpack_exec__(4698)));
module.exports = __webpack_exports__;

})();