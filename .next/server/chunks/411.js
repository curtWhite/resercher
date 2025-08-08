exports.id = 411;
exports.ids = [411];
exports.modules = {

/***/ 6394:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6408));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1831))

/***/ }),

/***/ 5680:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 715))

/***/ }),

/***/ 7326:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 6408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1831);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Header() {
    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const auth = (0,_app_context_auth__WEBPACK_IMPORTED_MODULE_4__.useAuth)();
    // Mock authentication state - in a real app, this would be from a context or auth hook
    const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Check if user is authenticated on mount
        setIsAuthenticated(auth.isAuthenticated);
        if (auth.user) {
            console.log("Authenticated user:", auth.user, isAuthenticated);
        } else {
            console.log("No authenticated user found");
        }
    }, [
        auth.user,
        auth.isAuthenticated
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [
        isAuthenticated
    ]);
    const mockUser = {
        name: "Dr. Alex Johnson",
        avatarUrl: "/images/avatar.jpg"
    };
    const handleLogout = async ()=>{
        try {
            const response = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                // In a real app, this would clear auth tokens/state
                setIsAuthenticated(false);
                router.push("/");
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
        setIsUserMenuOpen(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "bg-white shadow-sm sticky top-0 z-50",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-center py-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            className: "text-2xl font-bold text-blue-900",
                            children: "ResearchReviews"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                            className: "hidden md:flex items-center space-x-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/reviews",
                                    className: "text-gray-700 hover:text-blue-600 transition",
                                    children: "Reviews"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/papers",
                                    className: "text-gray-700 hover:text-blue-600 transition",
                                    children: "Papers"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/categories",
                                    className: "text-gray-700 hover:text-blue-600 transition",
                                    children: "Categories"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/upload",
                                    className: "text-gray-700 hover:text-blue-600 transition",
                                    children: "Submit Review"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "flex items-center text-gray-700 hover:text-blue-600 focus:outline-none",
                                        onClick: ()=>router.push("/search"),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-5 w-5",
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
                                    })
                                }),
                                isAuthenticated ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            className: "flex items-center focus:outline-none",
                                            onClick: ()=>setIsUserMenuOpen(!isUserMenuOpen),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "h-8 w-8 rounded-full overflow-hidden bg-gray-200 mr-2",
                                                    children: mockUser.avatarUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: mockUser.avatarUrl,
                                                        alt: mockUser.name,
                                                        className: "h-full w-full object-cover"
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        className: "h-full w-full text-gray-400",
                                                        fill: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    className: "h-4 w-4 text-gray-500",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                        clipRule: "evenodd"
                                                    })
                                                })
                                            ]
                                        }),
                                        isUserMenuOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-50",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/profile",
                                                    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                                    onClick: ()=>setIsUserMenuOpen(false),
                                                    children: "Your Profile"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/dashboard",
                                                    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                                    onClick: ()=>setIsUserMenuOpen(false),
                                                    children: "Dashboard"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/settings",
                                                    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                                    onClick: ()=>setIsUserMenuOpen(false),
                                                    children: "Settings"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                                    onClick: handleLogout,
                                                    children: "Sign out"
                                                })
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex space-x-4 items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/login",
                                            className: "text-gray-700 hover:text-blue-600 transition",
                                            children: "Sign in"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/register",
                                            className: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition",
                                            children: "Sign up"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center space-x-4 md:hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/search",
                                    className: "text-gray-700",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5",
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
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "text-gray-600 focus:outline-none",
                                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-6 w-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: isMenuOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 6h16M4 12h16m-7 6h7"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                isMenuOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:hidden py-4 border-t",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "flex flex-col space-y-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/reviews",
                                className: "text-gray-700 hover:text-blue-600",
                                onClick: ()=>setIsMenuOpen(false),
                                children: "Reviews"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/papers",
                                className: "text-gray-700 hover:text-blue-600",
                                onClick: ()=>setIsMenuOpen(false),
                                children: "Papers"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/categories",
                                className: "text-gray-700 hover:text-blue-600",
                                onClick: ()=>setIsMenuOpen(false),
                                children: "Categories"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/upload",
                                className: "text-gray-700 hover:text-blue-600",
                                onClick: ()=>setIsMenuOpen(false),
                                children: "Submit Review"
                            }),
                            isAuthenticated ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/profile",
                                        className: "text-gray-700 hover:text-blue-600",
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: "Your Profile"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/dashboard",
                                        className: "text-gray-700 hover:text-blue-600",
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: "Dashboard"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "text-left text-gray-700 hover:text-blue-600",
                                        onClick: handleLogout,
                                        children: "Sign out"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col space-y-2 pt-2 border-t",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/login",
                                        className: "text-gray-700 hover:text-blue-600",
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: "Sign in"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/register",
                                        className: "bg-blue-600 text-white px-4 py-2 rounded-md text-center",
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: "Sign up"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 1831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),
/* harmony export */   useAuth: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ 

const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
const AuthProvider = ({ children })=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Mock login function - in a real app, this would call an API
    // and set the user state based on the response
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const userData = JSON.parse(storedUser);
                // Optionally, validate user session with API
                fetch("/api/auth/login/validate", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${userData.token}` // Assumes userData has a token property
                    }
                }).then((res)=>res.json()).then((data)=>{
                    console.log("User validation response:", data);
                    if (data.user) {
                        setUser(userData.user);
                        setIsAuthenticated(true);
                    } else {
                        setUser(null);
                        localStorage.removeItem("user");
                        setIsAuthenticated(false);
                    }
                }).catch(()=>{
                    setUser(null);
                    localStorage.removeItem("user");
                    setIsAuthenticated(false);
                });
            } catch  {
                setUser(null);
                localStorage.removeItem("user");
                setIsAuthenticated(false);
            }
        }
    }, []);
    async function login(email, password) {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();
        console.error("Login response:", data);
        if (!response.ok) {
            throw new Error(data.message || "Failed to log in");
        }
        setUser(data.user);
        setIsAuthenticated(true);
        // Optionally, persist user data to localStorage/sessionStorage here
        localStorage.setItem("user", JSON.stringify(data));
    }
    const logout = ()=>{
        setUser(null);
        setIsAuthenticated(false);
        // Optionally, remove user data from storage here
        localStorage.removeItem("user");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user,
            login,
            logout,
            isAuthenticated
        },
        children: children
    });
};
const useAuth = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};


/***/ }),

/***/ 715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFoundPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function NotFoundPage() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-9xl font-bold text-blue-600",
                    children: "404"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "mt-4 text-3xl font-bold tracking-tight text-gray-900",
                    children: "Page not found"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-6 text-base leading-7 text-gray-600",
                    children: "Sorry, we couldn't find the page you're looking for."
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-10 flex items-center justify-center gap-x-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/",
                            className: "px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition",
                            children: "Go back home"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/reviews",
                            className: "px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition",
                            children: "Browse reviews"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 5438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(2411);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./app/components/layout/header.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\User\Documents\Research Review Blog Site (1)\workspace\research-review-blog\app\components\layout\header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const header = (__default__);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/components/layout/footer.tsx


function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-gray-900 text-white",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto py-12 px-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-xl font-bold mb-4",
                                    children: "ResearchReviews"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-gray-300 mb-4",
                                    children: "A platform dedicated to reviewing and discussing the latest research papers across various scientific disciplines."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Quick Links"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                className: "text-gray-300 hover:text-white",
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/reviews",
                                                className: "text-gray-300 hover:text-white",
                                                children: "Reviews"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/papers",
                                                className: "text-gray-300 hover:text-white",
                                                children: "Papers"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/categories",
                                                className: "text-gray-300 hover:text-white",
                                                children: "Categories"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Resources"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contribute",
                                                className: "text-gray-300 hover:text-white",
                                                children: "Contribute"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/guidelines",
                                                className: "text-gray-300 hover:text-white",
                                                children: "Submission Guidelines"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/faq",
                                                className: "text-gray-300 hover:text-white",
                                                children: "FAQ"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Contact"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-gray-300 mb-2",
                                    children: "Have questions or suggestions?"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/contact",
                                    className: "text-blue-400 hover:text-blue-300",
                                    children: "Contact Us"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-gray-400 text-sm",
                            children: [
                                "\xa9 ",
                                new Date().getFullYear(),
                                " ResearchReviews. All rights reserved."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex space-x-4 mt-4 md:mt-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/privacy",
                                    className: "text-gray-400 text-sm hover:text-white",
                                    children: "Privacy Policy"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/terms",
                                    className: "text-gray-400 text-sm hover:text-white",
                                    children: "Terms of Service"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/context/auth/index.tsx

const auth_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\User\Documents\Research Review Blog Site (1)\workspace\research-review-blog\app\context\auth\index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: auth_esModule, $$typeof: auth_$$typeof } = auth_proxy;
const auth_default_ = auth_proxy.default;

const e0 = auth_proxy["AuthProvider"];

const e1 = auth_proxy["useAuth"];

;// CONCATENATED MODULE: ./app/layout.tsx






const metadata = {
    title: "Research Review Blog",
    description: "A platform for reviewing and discussing academic research papers"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col min-h-screen",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            className: "flex-grow",
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 6061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\User\Documents\Research Review Blog Site (1)\workspace\research-review-blog\app\not-found.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;