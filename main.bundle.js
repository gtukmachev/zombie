webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"go()\">go | pause</button>\n<button (click)=\"restart()\">restart</button>\n<p>fps: {{game.framesPerSecond | number}}</p>\n<p>tps: {{game.turnsPerSecond | number}}</p>\n<p>cache: {{CachedFilmGameObjectFCL() | number}}</p>\n<app-game-screen-field [game]=\"game\" [matrixStepSize]=\"60\"></app-game-screen-field>\n<img id=\"zi1\"  [src]=\"'assets/accountant-zombie.png'\" alt=\"\" hidden=\"true\">\n<img id=\"ai1\"  [src]=\"'assets/actor1.png'\" alt=\"\" hidden=\"true'\">\n<img id=\"ai2\"  [src]=\"'assets/actor2.png'\" alt=\"\" hidden=\"true'\">\n<img id=\"ai3\"  [src]=\"'assets/actor3.png'\" alt=\"\" hidden=\"true'\">\n<img id=\"ai4\"  [src]=\"'assets/actor4.png'\" alt=\"\" hidden=\"true'\">\n<img id=\"ai5\"  [src]=\"'assets/actor5.png'\" alt=\"\" hidden=\"true'\">\n<img id=\"ai6\"  [src]=\"'assets/actor6.png'\" alt=\"\" hidden=\"true'\">\n<img id=\"ai7\"  [src]=\"'assets/actor7.png'\" alt=\"\" hidden=\"true'\">\n<img id=\"ai8\"  [src]=\"'assets/actor8.png'\" alt=\"\" hidden=\"true'\">\n<img id=\"ai9\"  [src]=\"'assets/actor9.png'\" alt=\"\" hidden=\"true'\">\n<img id=\"ai10\" [src]=\"'assets/actor10.png'\" alt=\"\" hidden=\"true'\">\n<img id=\"ai11\" [src]=\"'assets/actor11.png'\" alt=\"\" hidden=\"true'\">\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_zombies_game__ = __webpack_require__("../../../../../src/app/game/zombies-game.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_game_core_cached_film_game_object__ = __webpack_require__("../../../../../src/lib/game-core/cached-film-game-object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        //this.game = new TestGame();
        this.game = new __WEBPACK_IMPORTED_MODULE_1__game_zombies_game__["a" /* ZombiesGame */]();
    }
    AppComponent.prototype.go = function () { this.game.toggleStartPause(); };
    AppComponent.prototype.restart = function () {
        this.game.clearGameState();
        this.game.initLevel(0);
        this.game.gameFrameDraw();
        this.game.startGame();
    };
    AppComponent.prototype.CachedFilmGameObjectFCL = function () {
        return Object.keys(__WEBPACK_IMPORTED_MODULE_2__lib_game_core_cached_film_game_object__["a" /* CachedFilmGameObject */].framesCache).length;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_game_core_angular_game_module__ = __webpack_require__("../../../../../src/lib/game-core/angular/game.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__lib_game_core_angular_game_module__["a" /* GameModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/game/actor/actor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actor; });
/* unused harmony export ActorFrameDetails */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_game_core_game_object__ = __webpack_require__("../../../../../src/lib/game-core/game-object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guns_machine_gun__ = __webpack_require__("../../../../../src/app/game/guns/machine-gun.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_game_core_events_game_mouse_event__ = __webpack_require__("../../../../../src/lib/game-core/events/game-mouse-event.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_game_core_events_game_keyboard_event__ = __webpack_require__("../../../../../src/lib/game-core/events/game-keyboard-event.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_game_core_position__ = __webpack_require__("../../../../../src/lib/game-core/position.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_game_core_cached_film_game_object__ = __webpack_require__("../../../../../src/lib/game-core/cached-film-game-object.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var Actor = (function (_super) {
    __extends(Actor, _super);
    function Actor(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.r = 16;
        _this.angleType = __WEBPACK_IMPORTED_MODULE_0__lib_game_core_game_object__["a" /* AngleType */].ON_EYE;
        _this.suit = 1;
        _this._m_up = false;
        _this._m_down = false;
        _this._m_right = false;
        _this._m_left = false;
        _this.speed = 4;
        _this.speed_diagonal = _this.speed * Actor.s2;
        _this.speedVector = new __WEBPACK_IMPORTED_MODULE_5__lib_game_core_position__["a" /* Pos */](0, 0);
        _this.gun = new __WEBPACK_IMPORTED_MODULE_2__guns_machine_gun__["a" /* MachineGun */]();
        _this.withHelth(500, 30);
        return _this;
    }
    Object.defineProperty(Actor.prototype, "m_up", {
        get: function () {
            return this._m_up;
        },
        set: function (value) { this._m_up = value; this.calcAngle(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Actor.prototype, "m_down", {
        get: function () {
            return this._m_down;
        },
        set: function (value) { this._m_down = value; this.calcAngle(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Actor.prototype, "m_right", {
        get: function () {
            return this._m_right;
        },
        set: function (value) { this._m_right = value; this.calcAngle(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Actor.prototype, "m_left", {
        get: function () {
            return this._m_left;
        },
        set: function (value) { this._m_left = value; this.calcAngle(); },
        enumerable: true,
        configurable: true
    });
    Actor.prototype.onAddIntoGame = function (game) {
        var _this = this;
        _super.prototype.onAddIntoGame.call(this, game);
        this.mouseSubscription = this.game.mouse.subscribe(function (e) {
            if (e.type === __WEBPACK_IMPORTED_MODULE_3__lib_game_core_events_game_mouse_event__["b" /* MouseEventType */].DOWN) {
                _this.onMouseDown(e.event);
            }
            else if (e.type === __WEBPACK_IMPORTED_MODULE_3__lib_game_core_events_game_mouse_event__["b" /* MouseEventType */].UP) {
                _this.onMouseUp(e.event);
            }
        });
        this.keyboardSubscription = this.game.keyboard.subscribe(function (e) {
            if (e.type === __WEBPACK_IMPORTED_MODULE_4__lib_game_core_events_game_keyboard_event__["b" /* KeyboardEventType */].DOWN) {
                _this.onKeyDown(e.event);
            }
            else if (e.type === __WEBPACK_IMPORTED_MODULE_4__lib_game_core_events_game_keyboard_event__["b" /* KeyboardEventType */].UP) {
                _this.onKeyUp(e.event);
            }
        });
    };
    Actor.prototype.onRemovingFromGame = function () {
        _super.prototype.onRemovingFromGame.call(this);
        this.mouseSubscription.unsubscribe();
        this.keyboardSubscription.unsubscribe();
    };
    Actor.prototype.getCurrentFilmFrameDescription = function () {
        var state = new ActorFrameDetails(this.helth, this.maxHelth, this.suit);
        var center = Math.floor(this.r * 2.5);
        var sz = center * 2;
        return new __WEBPACK_IMPORTED_MODULE_6__lib_game_core_cached_film_game_object__["b" /* FilmFrameDescription */](state.getKey(), new __WEBPACK_IMPORTED_MODULE_5__lib_game_core_position__["a" /* Pos */](sz, sz), new __WEBPACK_IMPORTED_MODULE_5__lib_game_core_position__["a" /* Pos */](center, center), state);
    };
    Actor.prototype.drawFrame = function (frameCtx, frameDescr) {
        var ctx = frameCtx;
        var image = document.getElementById("ai" + frameDescr.details.suit);
        ctx.drawImage(image, 0, 0, frameDescr.size.x, frameDescr.size.y);
        /*
            let strokeStyle = '#65b9b3';
            let fillStyle = '#6a8dff';
        
            const subr = this.r - 3;
            let l = frameDescr.center.x;
        
            let ctx = frameCtx;
            let path = new Path2D();
            path.moveTo(frameDescr.center.x, frameDescr.center.y);
            path.lineTo(frameDescr.center.x + l, frameDescr.center.y );
            ctx.lineWidth = frameDescr.details.healthWidth > 0 ? frameDescr.details.healthWidth : 0.5;
        
            ctx.strokeStyle = strokeStyle;
            ctx.stroke(path);
        
            ctx.beginPath();
            ctx.fillStyle = fillStyle;
            ctx.arc(frameDescr.center.x, frameDescr.center.y, subr, 0, GameObject.PIx2);
            ctx.fill();
            ctx.stroke();
        
            //ctx.strokeRect(0,0, frameDescr.size.x, frameDescr.size.y)
        */
    };
    Actor.prototype.drawHelth = function (ctx) {
        var hx = 550;
        var hy = 15;
        var h_lineWidth = 7;
        var h_length = 700;
        ctx.lineCap = 'round';
        ctx.lineWidth = h_lineWidth;
        var hl = new Path2D();
        hl.moveTo(hx, hy);
        hl.lineTo(hx + h_length, hy);
        if (this.helth === this.maxHelth) {
            ctx.strokeStyle = '#ff7716';
            ctx.stroke(hl);
        }
        else {
            ctx.strokeStyle = '#a9a9a9';
            ctx.stroke(hl);
            if (this.helth > 0) {
                if (this.helth > 0) {
                    var dl = new Path2D();
                    dl.moveTo(hx, hy);
                    dl.lineTo(hx + h_length * (this.helth / this.maxHelth), hy);
                    ctx.strokeStyle = '#ff7716';
                    ctx.stroke(dl);
                }
            }
        }
    };
    Actor.prototype.beforeTurn = function () {
        this.gun.finishReloading();
    };
    Actor.prototype.turn = function () {
        this.moveForwardSafe();
        this.setEyeDirectionOn_xy(this.game.mousePos.x, this.game.mousePos.y);
        var bullet = this.gun.shot(this);
        if (bullet) {
            this.game.add(bullet);
        }
    };
    Actor.prototype.afterTurn = function () {
        if (this.helth <= 0) {
            this.game.loose();
        }
        this.scale = this.getDeathStageK();
    };
    Actor.prototype.way = function (xd, yd, xs, ys) {
        this.directionVector.x = xd;
        this.directionVector.y = yd;
        this.speedVector.x = xs;
        this.speedVector.y = ys;
    };
    Actor.prototype.calcAngle = function () {
        var o = 0;
        var l = 1;
        var p = Actor.s2;
        var s = this.speed;
        var d = this.speed_diagonal;
        if (this._m_up && !this._m_down && !this._m_right && !this._m_left) {
            this.way(o, -l, o, -s);
        }
        else if (this._m_up && !this._m_down && this._m_right && !this._m_left) {
            this.way(p, -p, d, -d);
        }
        else if (!this._m_up && !this._m_down && this._m_right && !this._m_left) {
            this.way(l, o, s, o);
        }
        else if (!this._m_up && this._m_down && this._m_right && !this._m_left) {
            this.way(p, p, d, d);
        }
        else if (!this._m_up && this._m_down && !this._m_right && !this._m_left) {
            this.way(o, l, o, s);
        }
        else if (!this._m_up && this._m_down && !this._m_right && this._m_left) {
            this.way(-p, p, -d, d);
        }
        else if (!this._m_up && !this._m_down && !this._m_right && this._m_left) {
            this.way(-l, o, -s, o);
        }
        else if (this._m_up && !this._m_down && !this._m_right && this._m_left) {
            this.way(-p, -p, -d, -d);
        }
        else {
            this.way(o, o, o, o);
        }
    };
    Actor.prototype.onMouseDown = function (event) { this.gun.onMouseDown(event); };
    Actor.prototype.onMouseUp = function (event) { this.gun.onMouseUp(event); };
    Actor.prototype.onKeyDown = function (event) {
        if (event.code === 'KeyW') {
            this.m_up = true;
        }
        else if (event.code === 'KeyS') {
            this.m_down = true;
        }
        else if (event.code === 'KeyA') {
            this.m_left = true;
        }
        else if (event.code === 'KeyD') {
            this.m_right = true;
        }
    };
    Actor.prototype.onKeyUp = function (event) {
        if (event.code === 'KeyW') {
            this.m_up = false;
        }
        else if (event.code === 'KeyS') {
            this.m_down = false;
        }
        else if (event.code === 'KeyA') {
            this.m_left = false;
        }
        else if (event.code === 'KeyD') {
            this.m_right = false;
        }
    };
    Actor.s2 = 1 / Math.sqrt(2);
    return Actor;
}(__WEBPACK_IMPORTED_MODULE_6__lib_game_core_cached_film_game_object__["a" /* CachedFilmGameObject */]));

var ActorFrameDetails = (function () {
    function ActorFrameDetails(helth, maxHealth, suit) {
        this.healthWidth = Math.floor(7 * (helth / maxHealth));
        this.suit = suit;
    }
    ActorFrameDetails.prototype.getKey = function () {
        return "a-" + this.suit + "-" + this.healthWidth;
    };
    return ActorFrameDetails;
}());



/***/ }),

/***/ "../../../../../src/app/game/bullets/point-bullet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointBullet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_game_core_game_object__ = __webpack_require__("../../../../../src/lib/game-core/game-object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zombies_zombie__ = __webpack_require__("../../../../../src/app/game/zombies/zombie.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PointBullet = (function (_super) {
    __extends(PointBullet, _super);
    function PointBullet(game, x, y, direction) {
        var _this = _super.call(this, x, y) || this;
        _this.atack = 1;
        _this.r = 0.5;
        _this.speed = 20;
        _this.setDirection(direction);
        return _this;
    }
    PointBullet.prototype.draw = function () {
        var ctx = this.game.ctx;
        var path = new Path2D();
        path.moveTo(this.p.x, this.p.y);
        path.lineTo(this.p.x + 7 * this.directionVector.x, this.p.y + 7 * this.directionVector.y);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#b97686';
        ctx.stroke(path);
    };
    PointBullet.prototype.beforeTurn = function () {
        this.checkForZombie();
    };
    PointBullet.prototype.turn = function () {
        this.moveForward();
        if (this.isOutOfField()) {
            this.game.markForDelete(this);
        }
    };
    PointBullet.prototype.afterTurn = function () {
    };
    PointBullet.prototype.checkForZombie = function () {
        var _this = this;
        this.game.matrix.applyForNearestObjects(this, function (z) {
            if (z instanceof __WEBPACK_IMPORTED_MODULE_1__zombies_zombie__["a" /* Zombie */]) {
                if (z.helth > 0 && _this.p.distanceTo(z.p) <= (_this.r + (z.r + z.helth) * 2)) {
                    z.damage(_this.atack);
                    _this.game.markForDelete(_this);
                }
            }
        });
    };
    return PointBullet;
}(__WEBPACK_IMPORTED_MODULE_0__lib_game_core_game_object__["b" /* GameObject */]));



/***/ }),

/***/ "../../../../../src/app/game/guns/gun.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gun; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_game_core_time_counter__ = __webpack_require__("../../../../../src/lib/game-core/time-counter.ts");

var Gun = (function () {
    function Gun(capacity, reloadingDuration) {
        this.isRelodingInProcess = false;
        this.isShotModeOn = false;
        this.capacity = capacity;
        this.bullets = capacity;
        this.reloadingDuration = new __WEBPACK_IMPORTED_MODULE_0__lib_game_core_time_counter__["a" /* TimeCounter */](reloadingDuration);
    }
    Gun.prototype.shot = function (actor) {
        if (!this.isShotModeOn) {
            return;
        }
        if (this.bullets > 0) {
            this.bullets -= 1;
            return this.makeBullet(actor);
        }
        else {
            this.startReaload();
        }
        return null;
    };
    Gun.prototype.drawBullets = function (ctx) {
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#b97686';
        for (var i = 0; i < this.bullets; i++) {
            this.drawBullet(ctx, i);
        }
    };
    Gun.prototype.drawBullet = function (ctx, i) {
        var path = new Path2D();
        path.moveTo(10 + (i % 100) * 5, 10 + (Math.floor(i / 100)) * 10);
        path.lineTo(10 + (i % 100) * 5, 10 + (Math.floor(i / 100)) * 10 + 7);
        ctx.stroke(path);
    };
    Gun.prototype.startReaload = function () {
        if (this.isRelodingInProcess) {
            return;
        }
        this.isRelodingInProcess = true;
        this.reloadingDuration.isItTime();
        this.reloadingDuration.fixLastChecking();
        this.bullets = 0;
    };
    Gun.prototype.finishReloading = function () {
        if (this.isRelodingInProcess && this.reloadingDuration.isItTime()) {
            this.bullets = this.capacity;
            this.isRelodingInProcess = false;
        }
    };
    Gun.prototype.onMouseDown = function (event) {
        this.isShotModeOn = true;
    };
    Gun.prototype.onMouseUp = function (event) {
        this.isShotModeOn = false;
    };
    return Gun;
}());



/***/ }),

/***/ "../../../../../src/app/game/guns/machine-gun.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MachineGun; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gun__ = __webpack_require__("../../../../../src/app/game/guns/gun.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bullets_point_bullet__ = __webpack_require__("../../../../../src/app/game/bullets/point-bullet.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MachineGun = (function (_super) {
    __extends(MachineGun, _super);
    function MachineGun() {
        return _super.call(this, 300, 1200) || this;
    }
    MachineGun.prototype.makeBullet = function (actor) {
        return new __WEBPACK_IMPORTED_MODULE_1__bullets_point_bullet__["a" /* PointBullet */](actor.game, actor.p.x + 40 * actor.eyeDirectionVector.x, actor.p.y + 40 * actor.eyeDirectionVector.y, actor.eyeDirectionVector);
    };
    return MachineGun;
}(__WEBPACK_IMPORTED_MODULE_0__gun__["a" /* Gun */]));



/***/ }),

/***/ "../../../../../src/app/game/zombies-game.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZombiesGame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_game_core_game__ = __webpack_require__("../../../../../src/lib/game-core/game.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_game_core_transparent_background__ = __webpack_require__("../../../../../src/lib/game-core/transparent-background.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_game_core_world_frame_object__ = __webpack_require__("../../../../../src/lib/game-core/world-frame-object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actor_actor__ = __webpack_require__("../../../../../src/app/game/actor/actor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__zombies_zombie__ = __webpack_require__("../../../../../src/app/game/zombies/zombie.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_game_core_time_counter__ = __webpack_require__("../../../../../src/lib/game-core/time-counter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_game_core_text_game_object__ = __webpack_require__("../../../../../src/lib/game-core/text-game-object.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var ZombiesGame = (function (_super) {
    __extends(ZombiesGame, _super);
    function ZombiesGame() {
        var _this = _super.call(this) || this;
        _this.ztc = new __WEBPACK_IMPORTED_MODULE_5__lib_game_core_time_counter__["a" /* TimeCounter */](1000);
        return _this;
    }
    ZombiesGame.prototype.initLevel = function (levelNumber) {
        var xSize = this.worldSize.x;
        var ySize = this.worldSize.y;
        this.backGround = new __WEBPACK_IMPORTED_MODULE_1__lib_game_core_transparent_background__["a" /* TransparentBackground */]();
        this.actor = new __WEBPACK_IMPORTED_MODULE_3__actor_actor__["a" /* Actor */](Math.floor(xSize / 2), Math.floor(ySize / 2));
        this.followingActor = false;
        this.add(this.backGround);
        //this.add( new MatrixVisualizerGameObject('15px Arial', '#6b6e70', '#f68200' ) );
        this.add(this.actor);
        var zr = 30;
        this.add(new __WEBPACK_IMPORTED_MODULE_4__zombies_zombie__["a" /* Zombie */](zr, zr));
        this.add(new __WEBPACK_IMPORTED_MODULE_4__zombies_zombie__["a" /* Zombie */](xSize - zr, zr));
        this.add(new __WEBPACK_IMPORTED_MODULE_4__zombies_zombie__["a" /* Zombie */](xSize - zr, ySize - zr));
        this.add(new __WEBPACK_IMPORTED_MODULE_4__zombies_zombie__["a" /* Zombie */](zr, ySize - zr));
        this.add(new __WEBPACK_IMPORTED_MODULE_2__lib_game_core_world_frame_object__["a" /* WorldFrameObject */]('#f3ffa2'));
        this.ztc.actionPeriodMillis = 1000;
        //this.gameTimeFrame = 20;
        this.actor.suit = Math.floor(Math.random() * 11) + 1;
    };
    ZombiesGame.prototype.loose = function () {
        _super.prototype.loose.call(this);
        this.add(new __WEBPACK_IMPORTED_MODULE_6__lib_game_core_text_game_object__["a" /* TextGameObject */]('Game Over !', '80px Arial', '#ff7716', '#6b6e70'));
    };
    ZombiesGame.prototype.gameActionTurn = function () {
        _super.prototype.gameActionTurn.call(this);
        if (this.ztc.isItTime()) {
            this.ztc.fixLastChecking();
            if (this.ztc.actionPeriodMillis > 140) {
                this.ztc.actionPeriodMillis -= 20;
            }
            var factor = ZombiesGame.rnd01();
            var zx = void 0, zy = void 0;
            if (Math.random() > 0.5) {
                zx = factor * this.worldSize.x;
                zy = Math.random() * this.worldSize.y;
            }
            else {
                zx = Math.random() * this.worldSize.x;
                zy = factor * this.worldSize.y;
            }
            this.add(new __WEBPACK_IMPORTED_MODULE_4__zombies_zombie__["a" /* Zombie */](zx, zy));
        }
    };
    ZombiesGame.rnd01 = function () { return Math.round(Math.random()); };
    ZombiesGame.prototype.gameFrameDraw = function () {
        _super.prototype.gameFrameDraw.call(this);
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.actor.gun.drawBullets(this.ctx);
        this.actor.drawHelth(this.ctx);
    };
    return ZombiesGame;
}(__WEBPACK_IMPORTED_MODULE_0__lib_game_core_game__["a" /* Game */]));



/***/ }),

/***/ "../../../../../src/app/game/zombies/zombie.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Zombie; });
/* unused harmony export ZombieFrameDetails */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actor_actor__ = __webpack_require__("../../../../../src/app/game/actor/actor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_game_core_cached_film_game_object__ = __webpack_require__("../../../../../src/lib/game-core/cached-film-game-object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_game_core_position__ = __webpack_require__("../../../../../src/lib/game-core/position.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Zombie = (function (_super) {
    __extends(Zombie, _super);
    function Zombie(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.r = 12;
        _this.speed = 0.7;
        _this.withHelth(3, 15);
        return _this;
    }
    Zombie.prototype.checkActorDamage = function () {
        var _this = this;
        if (this.helth <= 0)
            return;
        this.game.matrix.applyForNearestObjects(this, function (actor) {
            if (actor instanceof __WEBPACK_IMPORTED_MODULE_0__actor_actor__["a" /* Actor */]) {
                if (_this.p.distanceTo(actor.p) <= (_this.r + actor.r)) {
                    actor.damage(1);
                }
            }
        });
    };
    Zombie.prototype.getCurrentFilmFrameDescription = function () {
        var state = new ZombieFrameDetails(this.helth);
        var center = Math.floor(this.r * 2.5);
        var sz = center * 2;
        return new __WEBPACK_IMPORTED_MODULE_1__lib_game_core_cached_film_game_object__["b" /* FilmFrameDescription */](state.getKey(), new __WEBPACK_IMPORTED_MODULE_2__lib_game_core_position__["a" /* Pos */](sz, sz), new __WEBPACK_IMPORTED_MODULE_2__lib_game_core_position__["a" /* Pos */](center, center), state);
    };
    Zombie.prototype.drawFrame = function (frameCtx, frameDescr) {
        var ctx = frameCtx;
        var image = document.getElementById("zi1");
        ctx.drawImage(image, 0, 0, frameDescr.size.x, frameDescr.size.y);
        /*
            const strokeStyle = '#9cb9b7';
            const fillStyle = '#aa0600';
        
            const subr = this.r - 3;
            let l = frameDescr.center.x;
        
            let path = new Path2D();
            path.moveTo(frameDescr.center.x, frameDescr.center.y);
            path.lineTo(frameDescr.center.x + l, frameDescr.center.y );
            ctx.lineWidth = 1 + frameDescr.details.helth;
        
            ctx.strokeStyle = strokeStyle;
            ctx.stroke(path);
        
            ctx.beginPath();
            ctx.fillStyle = fillStyle;
            ctx.arc(frameDescr.center.x, frameDescr.center.y, subr, 0, Zombie.PIx2);
            ctx.fill();
            ctx.stroke();
        
            ctx.strokeRect(0,0, frameDescr.size.x, frameDescr.size.y)
        */
    };
    Zombie.prototype.beforeTurn = function () {
        this.checkActorDamage();
        this.setDirectionOn(this.game.actor.p);
    };
    Zombie.prototype.turn = function () {
        if (this.helth > 0) {
            this.moveForward();
        }
    };
    Zombie.prototype.afterTurn = function () {
        this.scale = this.getDeathStageK();
    };
    Zombie.PIx2 = Math.PI * 2;
    return Zombie;
}(__WEBPACK_IMPORTED_MODULE_1__lib_game_core_cached_film_game_object__["a" /* CachedFilmGameObject */]));

var ZombieFrameDetails = (function () {
    function ZombieFrameDetails(helth) {
        this.helth = helth;
    }
    ZombieFrameDetails.prototype.getKey = function () {
        return "z-" + this.helth;
    };
    return ZombieFrameDetails;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    base_url: ''
};


/***/ }),

/***/ "../../../../../src/lib/game-core/angular/game-screen-field/game-screen-field.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gameField {\r\n  border: 1px solid #3a599a;\r\n  position: absolute;\r\n  width: 1280px;\r\n  height: 720px;\r\n  top:0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n\r\n  margin: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/lib/game-core/angular/game-screen-field/game-screen-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gameField\"><canvas #gameCanvasField width=\"1280\" height=\"720\"></canvas></div>\n"

/***/ }),

/***/ "../../../../../src/lib/game-core/angular/game-screen-field/game-screen-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameScreenFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__("../../../../../src/lib/game-core/game.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cached_film_game_object__ = __webpack_require__("../../../../../src/lib/game-core/cached-film-game-object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameScreenFieldComponent = (function () {
    function GameScreenFieldComponent() {
        this.matrixStepSize = 100;
    }
    GameScreenFieldComponent.prototype.ngOnInit = function () {
        var canvas = this.canvasRef.nativeElement;
        this.xWorldSize = (this.xWorldSize) || canvas.width;
        this.yWorldSize = (this.yWorldSize) || canvas.height;
        this.game.init(canvas, this.xWorldSize, this.yWorldSize, this.matrixStepSize);
        this.game.initLevel(1);
    };
    GameScreenFieldComponent.prototype.onMouseMove = function (event) { this.game.onMouseMove(event); };
    GameScreenFieldComponent.prototype.onMouseDown = function (event) { this.game.onMouseDown(event); };
    GameScreenFieldComponent.prototype.onMouseUp = function (event) { this.game.onMouseUp(event); };
    GameScreenFieldComponent.prototype.onMouseClick = function (event) { this.game.onMouseClick(event); };
    GameScreenFieldComponent.prototype.onMouseDblClick = function (event) { this.game.onMouseDblClick(event); };
    GameScreenFieldComponent.prototype.onMouseEnter = function (event) { this.game.onMouseEnter(event); };
    GameScreenFieldComponent.prototype.onMouseLeave = function (event) { this.game.onMouseLeave(event); };
    GameScreenFieldComponent.prototype.onKeyPress = function (event) { this.game.onKeyboardPress(event); };
    GameScreenFieldComponent.prototype.onKeyDown = function (event) { this.game.onKeyboardDown(event); };
    GameScreenFieldComponent.prototype.onKeyUp = function (event) { this.game.onKeyboardUp(event); };
    GameScreenFieldComponent.prototype.ngOnDestroy = function () {
        this.game.onDestroy();
    };
    GameScreenFieldComponent.prototype.CachedFilmGameObjectFCL = function () {
        return Object.keys(__WEBPACK_IMPORTED_MODULE_2__cached_film_game_object__["a" /* CachedFilmGameObject */].framesCache).length;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__game__["a" /* Game */])
    ], GameScreenFieldComponent.prototype, "game", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Number)
    ], GameScreenFieldComponent.prototype, "xWorldSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Number)
    ], GameScreenFieldComponent.prototype, "yWorldSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Number)
    ], GameScreenFieldComponent.prototype, "matrixStepSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])('gameCanvasField'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], GameScreenFieldComponent.prototype, "canvasRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], GameScreenFieldComponent.prototype, "onMouseMove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], GameScreenFieldComponent.prototype, "onMouseDown", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('mouseup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], GameScreenFieldComponent.prototype, "onMouseUp", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], GameScreenFieldComponent.prototype, "onMouseClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('dblclick', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], GameScreenFieldComponent.prototype, "onMouseDblClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('mouseenter', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], GameScreenFieldComponent.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('mouseleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], GameScreenFieldComponent.prototype, "onMouseLeave", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], GameScreenFieldComponent.prototype, "onKeyPress", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], GameScreenFieldComponent.prototype, "onKeyDown", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('document:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], GameScreenFieldComponent.prototype, "onKeyUp", null);
    GameScreenFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-game-screen-field',
            template: __webpack_require__("../../../../../src/lib/game-core/angular/game-screen-field/game-screen-field.component.html"),
            styles: [__webpack_require__("../../../../../src/lib/game-core/angular/game-screen-field/game-screen-field.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameScreenFieldComponent);
    return GameScreenFieldComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/game-core/angular/game.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_screen_field_game_screen_field_component__ = __webpack_require__("../../../../../src/lib/game-core/angular/game-screen-field/game-screen-field.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GameModule = (function () {
    function GameModule() {
    }
    GameModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__game_screen_field_game_screen_field_component__["a" /* GameScreenFieldComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__game_screen_field_game_screen_field_component__["a" /* GameScreenFieldComponent */]
            ]
        })
    ], GameModule);
    return GameModule;
}());



/***/ }),

/***/ "../../../../../src/lib/game-core/cached-film-game-object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CachedFilmGameObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FilmFrameDescription; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__("../../../../../src/lib/game-core/game-object.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CachedFilmGameObject = (function (_super) {
    __extends(CachedFilmGameObject, _super);
    function CachedFilmGameObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CachedFilmGameObject.prototype.draw = function () {
        var currentFrameDescr = this.getCurrentFilmFrameDescription();
        var actualFrame;
        if (currentFrameDescr.key in CachedFilmGameObject.framesCache) {
            actualFrame = CachedFilmGameObject.framesCache[currentFrameDescr.key];
        }
        else {
            var frameCanvas = document.createElement('canvas');
            frameCanvas.width = currentFrameDescr.size.x;
            frameCanvas.height = currentFrameDescr.size.y;
            var frameCtx = frameCanvas.getContext('2d');
            this.drawFrame(frameCtx, currentFrameDescr);
            actualFrame = currentFrameDescr.withImage(frameCanvas);
            CachedFilmGameObject.framesCache[currentFrameDescr.key] = actualFrame;
        }
        // affine matrix (rotate and movement)
        // [   cos(a)    sin(a)   0  ]
        // [  -sin(a)    cos(a)   0  ]
        // [   tx        ty       1  ]
        var cosa = 1;
        var sina = 0;
        if (this.angleType === __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* AngleType */].ON_MOVEMET) {
            cosa = this.directionVector.x;
            sina = this.directionVector.y;
        }
        else if (this.angleType === __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* AngleType */].ON_EYE) {
            cosa = this.eyeDirectionVector.x;
            sina = this.eyeDirectionVector.y;
        }
        this.game.ctx.transform(cosa * this.scale, sina * this.scale, -sina * this.scale, cosa * this.scale, this.p.x, this.p.y);
        this.game.ctx.drawImage(actualFrame.image, -actualFrame.center.x, -actualFrame.center.y);
    };
    CachedFilmGameObject.framesCache = { target: 'cache' };
    return CachedFilmGameObject;
}(__WEBPACK_IMPORTED_MODULE_0__game_object__["b" /* GameObject */]));

var FilmFrameDescription = (function () {
    function FilmFrameDescription(key, size, center, details) {
        this._key = key;
        this._size = size;
        this._center = center;
        this._details = details;
    }
    Object.defineProperty(FilmFrameDescription.prototype, "key", {
        get: function () {
            return this._key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilmFrameDescription.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilmFrameDescription.prototype, "center", {
        get: function () {
            return this._center;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilmFrameDescription.prototype, "details", {
        get: function () {
            return this._details;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilmFrameDescription.prototype, "image", {
        get: function () {
            return this._image;
        },
        enumerable: true,
        configurable: true
    });
    FilmFrameDescription.prototype.withImage = function (image) {
        var v = new FilmFrameDescription(this._key, this._size, this._center, this._details);
        v._image = image;
        return v;
    };
    return FilmFrameDescription;
}());



/***/ }),

/***/ "../../../../../src/lib/game-core/events/game-keyboard-event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KeyboardEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameKeyboardEvent; });
var KeyboardEventType;
(function (KeyboardEventType) {
    KeyboardEventType[KeyboardEventType["UP"] = 0] = "UP";
    KeyboardEventType[KeyboardEventType["DOWN"] = 1] = "DOWN";
    KeyboardEventType[KeyboardEventType["PRESS"] = 2] = "PRESS";
})(KeyboardEventType || (KeyboardEventType = {}));
var GameKeyboardEvent = (function () {
    function GameKeyboardEvent(event, type) {
        this._event = event;
        this._type = type;
    }
    Object.defineProperty(GameKeyboardEvent.prototype, "event", {
        get: function () { return this._event; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameKeyboardEvent.prototype, "type", {
        get: function () { return this._type; },
        enumerable: true,
        configurable: true
    });
    return GameKeyboardEvent;
}());



/***/ }),

/***/ "../../../../../src/lib/game-core/events/game-mouse-event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MouseEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameMouseEvent; });
var MouseEventType;
(function (MouseEventType) {
    MouseEventType[MouseEventType["UP"] = 0] = "UP";
    MouseEventType[MouseEventType["DOWN"] = 1] = "DOWN";
    MouseEventType[MouseEventType["CLICK"] = 2] = "CLICK";
    MouseEventType[MouseEventType["MOVE"] = 3] = "MOVE";
    MouseEventType[MouseEventType["DBL_CLICK"] = 4] = "DBL_CLICK";
    MouseEventType[MouseEventType["ENTER"] = 5] = "ENTER";
    MouseEventType[MouseEventType["LEAVE"] = 6] = "LEAVE";
})(MouseEventType || (MouseEventType = {}));
var GameMouseEvent = (function () {
    function GameMouseEvent(mouseEvent, type, gamePoint) {
        this._event = mouseEvent;
        this._type = type;
        this._gamePoint = gamePoint;
    }
    Object.defineProperty(GameMouseEvent.prototype, "event", {
        get: function () { return this._event; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameMouseEvent.prototype, "type", {
        get: function () { return this._type; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameMouseEvent.prototype, "gamePoint", {
        get: function () { return this._gamePoint; },
        enumerable: true,
        configurable: true
    });
    return GameMouseEvent;
}());



/***/ }),

/***/ "../../../../../src/lib/game-core/game-object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GameObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngleType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__position__ = __webpack_require__("../../../../../src/lib/game-core/position.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object_frame__ = __webpack_require__("../../../../../src/lib/game-core/object-frame.ts");


var GameObject = (function () {
    function GameObject(x, y, outerFrame) {
        this.isDrawable = true;
        this.speed = 2; // movement speed (in pixels)
        this.speedVector = new __WEBPACK_IMPORTED_MODULE_0__position__["a" /* Pos */](1, 0); // movement vector speed (length = speed )
        this.directionVector = new __WEBPACK_IMPORTED_MODULE_0__position__["a" /* Pos */](1, 0); // direction vector (length = 1)
        this.eyeDirectionVector = new __WEBPACK_IMPORTED_MODULE_0__position__["a" /* Pos */](1, 0); // direction vector (length = 1)
        this.angleType = AngleType.ON_MOVEMET;
        this.scale = 1;
        this.isAlife = false;
        this.r = 2; // default size of this object
        this.p = new __WEBPACK_IMPORTED_MODULE_0__position__["a" /* Pos */](x, y);
        this.outerFrame = outerFrame;
    }
    // life cycle hooks
    GameObject.prototype.onAddIntoGame = function (game) {
        this.id = game.getNextId();
        this.game = game;
        this.outerFrame = this.outerFrame || new __WEBPACK_IMPORTED_MODULE_1__object_frame__["a" /* ObjectFrame */](-this.r, -this.r, this.r * 2, this.r * 2);
        this.initMatrixLocation();
    };
    GameObject.prototype.onRemovingFromGame = function () {
        // remove event subscriptions here
    };
    //////////////////
    GameObject.prototype.withHelth = function (helth, deadStages) {
        this.isAlife = true;
        this.helth = helth;
        this.maxHelth = helth;
        this.deadStage = deadStages;
        this.deadStages = deadStages;
        return this;
    };
    GameObject.prototype.damage = function (damageVal) {
        if (this.isAlife && this.helth > 0) {
            this.helth -= damageVal;
            this.helth = this.helth < 0 ? 0 : this.helth;
        }
    };
    GameObject.prototype.checkHealth = function () {
        if (!this.isAlife) {
            return;
        }
        if (this.helth <= 0) {
            this.deadStage -= 1;
            this.deadStage = this.deadStage < 0 ? 0 : this.deadStage;
        }
        if (this.helth <= 0 && this.deadStage <= 0) {
            this.game.markForDelete(this);
        }
    };
    GameObject.prototype.getDeathStageK = function () {
        return this.deadStage / this.deadStages;
    };
    // movement helper methods
    GameObject.prototype.setDirectionOn_xy = function (targetX, targetY) {
        var vectorX = targetX - this.p.x;
        var vectorY = targetY - this.p.y;
        var vectorLen = Math.sqrt(vectorX * vectorX + vectorY * vectorY);
        this.directionVector.x = (vectorX / vectorLen);
        this.directionVector.y = (vectorY / vectorLen);
        this.speedVector.x = this.directionVector.x * this.speed;
        this.speedVector.y = this.directionVector.y * this.speed;
    };
    GameObject.prototype.setDirectionOn = function (targetPosition) {
        this.setDirectionOn_xy(targetPosition.x, targetPosition.y);
    };
    GameObject.prototype.setDirection = function (normalizedVector) {
        this.directionVector.x = normalizedVector.x;
        this.directionVector.y = normalizedVector.y;
        this.speedVector.x = this.directionVector.x * this.speed;
        this.speedVector.y = this.directionVector.y * this.speed;
    };
    GameObject.prototype.setEyeDirectionOn = function (p) {
        this.setEyeDirectionOn_xy(p.x, p.y);
    };
    GameObject.prototype.setEyeDirectionOn_xy = function (x, y) {
        var vectorX = x - this.p.x;
        var vectorY = y - this.p.y;
        var vectorLen = Math.sqrt(vectorX * vectorX + vectorY * vectorY);
        this.eyeDirectionVector.x = (vectorX / vectorLen);
        this.eyeDirectionVector.y = (vectorY / vectorLen);
    };
    GameObject.prototype.moveOn = function (p) {
        this.p.x = p.x;
        this.p.y = p.y;
        this.updateMatrixLoaction();
    };
    GameObject.prototype.moveTo = function (x, y) {
        this.p.x = x;
        this.p.y = y;
        this.updateMatrixLoaction();
    };
    GameObject.prototype.moveToSafe = function (x, y) {
        moveTo(x, y);
        this.moveReturnOnField();
        this.updateMatrixLoaction();
    };
    GameObject.prototype.moveForward = function () {
        this.p.x += this.speedVector.x;
        this.p.y += this.speedVector.y;
        this.updateMatrixLoaction();
    };
    GameObject.prototype.moveForwardSafe = function () {
        this.p.x += this.speedVector.x;
        this.p.y += this.speedVector.y;
        this.moveReturnOnField();
        this.updateMatrixLoaction();
    };
    GameObject.prototype.updateMatrixLoaction = function () {
        this.pNext.setAsOffsetOf(this.p, this.speedVector);
        this.game.matrix.update(this);
    };
    GameObject.prototype.initMatrixLocation = function () {
        this.pNext = this.p.copy();
        if (this.speedVector && (Math.abs(this.speedVector.x) + Math.abs(this.speedVector.y)) > 0) {
            this.pNext.setAsOffsetOf(this.p, this.speedVector);
        }
        this.game.matrix.update(this);
    };
    GameObject.prototype.moveReturnOnField = function () {
        if (this.p.x < 0) {
            this.p.x = 0;
        }
        else {
            if (this.p.x > this.game.worldSize.x) {
                this.p.x = this.game.worldSize.x;
            }
        }
        if (this.p.y < 0) {
            this.p.y = 0;
        }
        else {
            if (this.p.y > this.game.worldSize.y) {
                this.p.y = this.game.worldSize.y;
            }
        }
    };
    GameObject.prototype.isOutOfField = function () {
        return this.p.x < 0 || this.p.x > this.game.worldSize.x || this.p.y < 0 || this.p.y > this.game.worldSize.y;
    };
    // draw helper methods
    GameObject.prototype.fillCircle = function (x, y, radius, fillStyle) {
        this.game.ctx.beginPath();
        this.game.ctx.fillStyle = fillStyle;
        this.game.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.game.ctx.fill();
    };
    GameObject.prototype.strokeCircle = function (x, y, radius, strokeStyle) {
        this.game.ctx.beginPath();
        this.game.ctx.lineWidth = 1;
        this.game.ctx.strokeStyle = strokeStyle;
        this.game.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.game.ctx.stroke();
    };
    GameObject.prototype.fcCircle = function (x, y, radius, strokeStyle, fillStyle) {
        var ctx = this.game.ctx;
        ctx.beginPath();
        ctx.fillStyle = fillStyle;
        ctx.strokeStyle = strokeStyle;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    };
    GameObject.PIx2 = Math.PI * 2;
    return GameObject;
}());

var AngleType;
(function (AngleType) {
    AngleType[AngleType["ON_MOVEMET"] = 0] = "ON_MOVEMET";
    AngleType[AngleType["ON_EYE"] = 1] = "ON_EYE";
})(AngleType || (AngleType = {}));


/***/ }),

/***/ "../../../../../src/lib/game-core/game.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__position__ = __webpack_require__("../../../../../src/lib/game-core/position.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__time_counter__ = __webpack_require__("../../../../../src/lib/game-core/time-counter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_game_mouse_event__ = __webpack_require__("../../../../../src/lib/game-core/events/game-mouse-event.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_game_keyboard_event__ = __webpack_require__("../../../../../src/lib/game-core/events/game-keyboard-event.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__location_matrix__ = __webpack_require__("../../../../../src/lib/game-core/location-matrix.ts");







var Game = (function () {
    function Game() {
        this.running = false;
        this.isLoose = false;
        this.showOuterFrames = false;
        this.outerFramesColor = '#596193';
        this.secondsTimerCounter = new __WEBPACK_IMPORTED_MODULE_1__time_counter__["a" /* TimeCounter */](1000); // every second
        this.framesCounter = 0;
        this.turnsCounter = 0;
        this.framesPerSecond = 0;
        this.turnsPerSecond = 0;
        this.lastFrameDuration = 0;
        this.gameTimeFrame = 1;
        this.mouse = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.keyboard = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.followingActor = false;
        this.gameObjects = [];
        this.gameObjectsForDelete = [];
        this.mousePos = new __WEBPACK_IMPORTED_MODULE_0__position__["a" /* Pos */](0, 0);
        this.worldSize = new __WEBPACK_IMPORTED_MODULE_0__position__["a" /* Pos */](0, 0);
        this.cameraShift = new __WEBPACK_IMPORTED_MODULE_0__position__["a" /* Pos */](0, 0); //
        this._idCounter = 0;
    }
    Game.prototype.init = function (canvas, xWorldSize, yWorldSize, matrixStepSize) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.worldSize.x = xWorldSize;
        this.worldSize.y = yWorldSize;
        this.matrix = new __WEBPACK_IMPORTED_MODULE_6__location_matrix__["a" /* LocationMatrix */](matrixStepSize, this.worldSize);
        this.gameTimeFrame = 20;
        this.cameraPos = new __WEBPACK_IMPORTED_MODULE_0__position__["a" /* Pos */](Math.floor(canvas.width / 2), Math.floor(canvas.height / 2));
        this.cameraInitialPos = new __WEBPACK_IMPORTED_MODULE_0__position__["a" /* Pos */](this.cameraPos.x, this.cameraPos.y);
        this.cameraActorFrame = new __WEBPACK_IMPORTED_MODULE_0__position__["a" /* Pos */](Math.floor(canvas.width / 9), Math.floor(canvas.height / 8));
    };
    Game.prototype.clearGameState = function () {
        this.pauseGame();
        this.matrix.forceClear();
        this.gameObjects.forEach(function (o) { return o.onRemovingFromGame(); });
        this.gameObjects = [];
    };
    Game.prototype.initLevel = function (levelNumber) { };
    Game.prototype.gameStep = function () {
        if (!this.running) {
            return;
        }
        this.gameActionTurn();
        this.turnsCounter++;
    };
    Game.prototype.paint = function () {
        var _this = this;
        if (!this.running) {
            return;
        }
        this.gameFrameDraw();
        this.framesCounter++;
        requestAnimationFrame(function () { return _this.paint(); });
    };
    Game.prototype.startGame = function () {
        var _this = this;
        if (this.running) {
            return;
        }
        this.gameTimer = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].timer(500, this.gameTimeFrame)
            .subscribe(function () { return _this.gameStep(); });
        this.secondsTimerCounter.isItTime();
        this.secondsTimerCounter.fixLastChecking();
        this.framesCounterSubscription = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].timer(1000, 1000).subscribe(function () {
            if (_this.secondsTimerCounter.isItTime()) {
                _this.secondsTimerCounter.fixLastChecking();
                _this.lastFrameDuration = _this.secondsTimerCounter.lastDuration;
                _this.framesPerSecond = Math.floor(_this.framesCounter / _this.lastFrameDuration * 1000);
                _this.framesCounter = 0;
                _this.turnsPerSecond = Math.floor(_this.turnsCounter / _this.lastFrameDuration * 1000);
                _this.turnsCounter = 0;
            }
        });
        this.running = true;
        this.paint();
    };
    Game.prototype.pauseGame = function () {
        this.running = false;
        this.gameTimer.unsubscribe();
        this.framesCounterSubscription.unsubscribe();
    };
    Game.prototype.toggleStartPause = function () {
        if (this.running) {
            this.pauseGame();
        }
        else {
            this.startGame();
        }
    };
    Game.prototype.loose = function () {
        this.isLoose = true;
    };
    Game.prototype.gameActionTurn = function () {
        if (this.followingActor && this.actor) {
            this.followActor();
        }
        this.gameObjects.forEach(function (go) { go.checkHealth(); go.beforeTurn(); });
        this.deleteMarkedElements();
        this.gameObjects.forEach(function (go) { return go.turn(); });
        this.deleteMarkedElements();
        this.gameObjects.forEach(function (go) { return go.afterTurn(); });
        this.deleteMarkedElements();
    };
    Game.prototype.followActor = function () {
        var p = this.actor.p;
        if (p.x < this.cameraPos.x - this.cameraActorFrame.x) {
            this.cameraPos.x = Math.floor(p.x + this.cameraActorFrame.x);
            this.cameraShift.x = this.cameraInitialPos.x - this.cameraPos.x;
        }
        else if (p.x > this.cameraPos.x + this.cameraActorFrame.x) {
            this.cameraPos.x = Math.floor(p.x - this.cameraActorFrame.x);
            this.cameraShift.x = this.cameraInitialPos.x - this.cameraPos.x;
        }
        if (p.y < this.cameraPos.y - this.cameraActorFrame.y) {
            this.cameraPos.y = Math.floor(p.y + this.cameraActorFrame.y);
            this.cameraShift.y = this.cameraInitialPos.y - this.cameraPos.y;
        }
        else if (p.y > this.cameraPos.y + this.cameraActorFrame.y) {
            this.cameraPos.y = Math.floor(p.y - this.cameraActorFrame.y);
            this.cameraShift.y = this.cameraInitialPos.y - this.cameraPos.y;
        }
    };
    Game.prototype.resetCanvasTransform = function () {
        // affine matrix (rotate and movement)
        // [ cos(phi)  sin(phi)  0 ]
        // [-sin(phi)  cos(phi)  0 ]
        // [ tx        ty        1 ]
        // affine matrix (scaling)
        // [ Kx        0         0 ]
        // [ 0         Ky        0 ]
        // [ 0         0         1 ]
        // (dx,dy) - the offset to follow the camera
        var dx = 0;
        var dy = 0;
        if (!this.cameraPos.equals(this.cameraInitialPos)) {
            dx = this.cameraInitialPos.x - this.cameraPos.x;
            dy = this.cameraInitialPos.y - this.cameraPos.y;
        }
        this.ctx.setTransform(1, 0, 0, 1, dx, dy);
    };
    Game.prototype.gameFrameDraw = function () {
        var _this = this;
        this.gameObjects.forEach(function (it) {
            if (it.isDrawable) {
                _this.resetCanvasTransform();
                it.draw();
                if (_this.showOuterFrames) {
                    _this.ctx.beginPath();
                    _this.ctx.rect(it.p.x + it.outerFrame.x, it.p.y + it.outerFrame.y, it.outerFrame.w, it.outerFrame.h);
                    _this.ctx.strokeStyle = _this.outerFramesColor;
                    _this.ctx.stroke();
                }
            }
        });
    };
    Game.prototype.add = function (gameObject) {
        this.gameObjects.push(gameObject);
        gameObject.onAddIntoGame(this);
    };
    Game.prototype.del = function (gameObject) {
        this.rmFromArr(this.gameObjects, gameObject);
        if (gameObject === this.actor) {
            this.pauseGame();
        }
        this.matrix.remove(gameObject);
    };
    Game.prototype.rmFromArr = function (arr, obj) {
        var i = arr.indexOf(obj);
        if (i !== -1) {
            arr.splice(i, 1);
        }
    };
    Game.prototype.markForDelete = function (gameObject) {
        this.gameObjectsForDelete.push(gameObject);
    };
    ;
    Game.prototype.deleteMarkedElements = function () {
        var _this = this;
        if (this.gameObjectsForDelete.length === 0) {
            return;
        }
        this.gameObjectsForDelete.forEach(function (it) { return _this.del(it); });
    };
    Game.prototype.onMouseMove = function (event) { this.processMouseEvent(event, __WEBPACK_IMPORTED_MODULE_4__events_game_mouse_event__["b" /* MouseEventType */].MOVE); };
    Game.prototype.onMouseDown = function (event) { this.processMouseEvent(event, __WEBPACK_IMPORTED_MODULE_4__events_game_mouse_event__["b" /* MouseEventType */].DOWN); };
    Game.prototype.onMouseUp = function (event) { this.processMouseEvent(event, __WEBPACK_IMPORTED_MODULE_4__events_game_mouse_event__["b" /* MouseEventType */].UP); };
    Game.prototype.onMouseClick = function (event) { this.processMouseEvent(event, __WEBPACK_IMPORTED_MODULE_4__events_game_mouse_event__["b" /* MouseEventType */].CLICK); };
    Game.prototype.onMouseEnter = function (event) { this.processMouseEvent(event, __WEBPACK_IMPORTED_MODULE_4__events_game_mouse_event__["b" /* MouseEventType */].ENTER); };
    Game.prototype.onMouseLeave = function (event) { this.processMouseEvent(event, __WEBPACK_IMPORTED_MODULE_4__events_game_mouse_event__["b" /* MouseEventType */].LEAVE); };
    Game.prototype.onMouseDblClick = function (event) { this.processMouseEvent(event, __WEBPACK_IMPORTED_MODULE_4__events_game_mouse_event__["b" /* MouseEventType */].DBL_CLICK); };
    Game.prototype.onKeyboardDown = function (event) { this.processKeyboardEvent(event, __WEBPACK_IMPORTED_MODULE_5__events_game_keyboard_event__["b" /* KeyboardEventType */].DOWN); };
    Game.prototype.onKeyboardUp = function (event) { this.processKeyboardEvent(event, __WEBPACK_IMPORTED_MODULE_5__events_game_keyboard_event__["b" /* KeyboardEventType */].UP); };
    Game.prototype.onKeyboardPress = function (event) { this.processKeyboardEvent(event, __WEBPACK_IMPORTED_MODULE_5__events_game_keyboard_event__["b" /* KeyboardEventType */].PRESS); };
    Game.prototype.processMouseEvent = function (event, type) {
        this.mousePos.setVector(event.layerX - this.cameraShift.x, event.layerY - this.cameraShift.y);
        this.mouse.next(new __WEBPACK_IMPORTED_MODULE_4__events_game_mouse_event__["a" /* GameMouseEvent */](event, type, this.mousePos.copy()));
    };
    Game.prototype.processKeyboardEvent = function (event, type) {
        this.keyboard.next(new __WEBPACK_IMPORTED_MODULE_5__events_game_keyboard_event__["a" /* GameKeyboardEvent */](event, type));
    };
    Game.prototype.onDestroy = function () {
        this.gameTimer.unsubscribe();
        this.framesCounterSubscription.unsubscribe();
    };
    Game.prototype.getNextId = function () { return ++this._idCounter; };
    return Game;
}());



/***/ }),

/***/ "../../../../../src/lib/game-core/location-matrix.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationMatrix; });
var LocationMatrix = (function () {
    function LocationMatrix(size, worldSize) {
        this.positions = {}; // map object -> ceils of the matrix where this project present
        this.size = size;
        this.worldSize = worldSize.copy();
        this.forceClear();
    }
    LocationMatrix.prototype.forceClear = function () {
        this.lines = Math.ceil(this.worldSize.y / this.size) + 1;
        this.columns = Math.ceil(this.worldSize.x / this.size) + 1;
        this.index = [];
        for (var l = 0; l < this.lines; l++) {
            this.index[l] = [];
            for (var c = 0; c < this.columns; c++) {
                this.index[l][c] = [];
            }
        }
        this.positions = {};
    };
    LocationMatrix.prototype.remove = function (o) {
        var id = "" + o.id;
        var prevPositions = this.positions[id];
        if (prevPositions) {
            for (var l = prevPositions.lb; l <= prevPositions.le; l++) {
                var prevIndexLine = this.index[l];
                if (prevIndexLine) {
                    for (var c = prevPositions.cb; c <= prevPositions.ce; c++) {
                        var prevIndex = prevIndexLine[c];
                        if (prevIndex) {
                            this.removeFromSet(prevIndex, o);
                        }
                    }
                }
            }
        }
        this.positions[id] = undefined;
    };
    LocationMatrix.prototype.update = function (o) {
        var _this = this;
        var id = "" + o.id;
        var pTopY = o.p.y + o.outerFrame.y;
        var pLeftX = o.p.x + o.outerFrame.x;
        var prevPositions = this.positions[id];
        var newPositions = {
            lb: Math.floor(pTopY / this.size), cb: Math.floor(pLeftX / this.size),
            le: Math.floor((pTopY + o.outerFrame.h) / this.size), ce: Math.floor((pLeftX + o.outerFrame.w) / this.size)
        };
        if (prevPositions && newPositions.lb === prevPositions.lb && newPositions.cb === prevPositions.cb
            && newPositions.le === prevPositions.le && newPositions.ce === prevPositions.ce) {
            return;
        }
        this.applyForRegion(prevPositions, function (cellObjectsSet) { return _this.removeFromSet(cellObjectsSet, o); });
        this.applyForRegion(newPositions, function (cellObjectsSet) { return _this.addIntoSet(cellObjectsSet, o); });
        this.positions[id] = newPositions;
    };
    LocationMatrix.prototype.applyForNearestObjects = function (o, callback) {
        this.applyForRegionObjects(this.positions["" + o.id], callback);
    };
    LocationMatrix.prototype.applyForRegion = function (pos, callback) {
        if (pos) {
            for (var l = pos.lb; l <= pos.le; l++) {
                var line = this.index[l];
                if (line) {
                    for (var c = pos.cb; c <= pos.ce; c++) {
                        var col = line[c];
                        if (col) {
                            callback(col);
                        }
                    }
                }
            }
        }
    };
    LocationMatrix.prototype.applyForRegionObjects = function (pos, callback) {
        this.applyForRegion(pos, function (index) { return index.forEach(callback); });
    };
    LocationMatrix.prototype.addIntoSet = function (set, o) {
        var i = 0;
        while (i < set.length && set[i] !== o) {
            i++;
        }
        if (i == set.length)
            set.push(o);
    };
    LocationMatrix.prototype.removeFromSet = function (set, o) {
        var i = 0;
        while (i < set.length && set[i] !== o) {
            i++;
        }
        if (i < set.length)
            set.splice(i);
    };
    return LocationMatrix;
}());



/***/ }),

/***/ "../../../../../src/lib/game-core/object-frame.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectFrame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__position__ = __webpack_require__("../../../../../src/lib/game-core/position.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ObjectFrame = (function (_super) {
    __extends(ObjectFrame, _super);
    function ObjectFrame(left, top, w, h) {
        var _this = _super.call(this, left, top) || this;
        _this.w = w;
        _this.h = h;
        return _this;
    }
    return ObjectFrame;
}(__WEBPACK_IMPORTED_MODULE_0__position__["a" /* Pos */]));



/***/ }),

/***/ "../../../../../src/lib/game-core/position.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pos; });
var Pos = (function () {
    function Pos(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    Pos.prototype.copy = function () { return new Pos(this.x, this.y); };
    Pos.prototype.distanceTo = function (p) {
        var dx = p.x - this.x;
        var dy = p.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Pos.prototype.equals = function (p) {
        return this.x === p.x && this.y === p.y;
    };
    Pos.prototype.getOffsetVector = function (directionVector, distance) {
        return new Pos(this.x + directionVector.x * distance, this.y + directionVector.y * distance);
    };
    Pos.prototype.setVector = function (x, y) { this.x = x; this.y = y; };
    Pos.prototype.setAsOffsetOf = function (originalPosition, offsetVector) {
        this.x = originalPosition.x + offsetVector.x;
        this.y = originalPosition.y + offsetVector.y;
    };
    /**
     * restore angle by vector v, only for len(v) = 1
     */
    Pos.prototype.angle = function () {
        if (this.x === 0) {
            return (this.y > 0) ? Pos.angle_90 : Pos.angle_270;
        }
        if (this.y === 0) {
            return (this.x > 0) ? Pos.angle_0 : Pos.angle_180;
        }
        if (this.x > 0)
            return Math.asin(this.y);
        if (this.x < 0 && this.y > 0)
            return Math.acos(this.x);
        if (this.x < 0 && this.y < 0)
            return -Math.acos(this.x);
    };
    Pos.prototype.fLine = function (directionVector, x) {
        return this.y + (directionVector.y / directionVector.x) * (x - this.x);
        // line L : y = kx + t
        // const x1 = this.x; // point on the line
        // const y1 = this.y;
        // const dx = directionVector.x; // line direction vector
        // const dy = directionVector.y;
        //
        // const k = dy / dx;
        // const t = y1 - k*x1;
        //
        // const y = k*x + t;
        // return y;
    };
    Pos.prototype.thisCircleWirhLineCrossing = function (line_p, line_directionVector, circle_radius) {
        // line L : y = kx + t
        //const x1 = line_p.x; // point on the line
        //const y1 = line_p.y;
        //const dx = line_directionVector.x; // line direction vector
        //const dy = line_directionVector.y;
        // circle_center coordinates - get from this object
        // y = y1 + (dy/dx) * (x - x1) =>
        var k = line_directionVector.y / line_directionVector.x;
        var t = line_p.y - k * line_p.x;
        return this.circleAndLineCrossingMath(k, t, this.x, this.y, circle_radius);
    };
    Pos.prototype.circleAndLineCrossingMath = function (k, t, Xc, Yc, R) {
        // 1
        //  /--
        //  |   line L:  y = kx + t
        // /
        // \                  2        2   2
        //  |   circle:  (x-Xc) + (y-Yc) = R
        //  \--
        // 2
        // ax + bx + c = 0
        var a = 1 + k * k;
        var b = 2 * (t * k - Xc - Yc * k);
        var c = t * t - 2 * Yc * t - R * R + Yc * Yc + Xc * Xc;
        // solution of the square equation
        var res1 = null;
        var res2 = null;
        var D = b * b - 4 * a * c;
        if (D < 0) {
            return [];
        }
        else if (D == 0) {
            res1 = new Pos(0, 0);
            res1.x = (-b) / (2 * a);
            res1.y = k * res1.x + t;
            return [res1];
        }
        else {
            res1 = new Pos(0, 0);
            res1.x = (-b + Math.sqrt(D)) / (2 * a);
            res1.y = k * res1.x + t;
            res2 = new Pos(0, 0);
            res2.x = (-b - Math.sqrt(D)) / (2 * a);
            res2.y = k * res2.x + t;
        }
        return [res1, res2];
    };
    Pos.prototype.setAngle = function (angle) {
        this.x = Math.cos(angle);
        this.y = Math.sin(angle);
    };
    Pos.prototype.rotateOn = function (angleDelta) {
        this.setAngle(this.angle() + angleDelta);
    };
    Pos.angle_0 = 0;
    Pos.angle_90 = Math.PI / 2;
    Pos.angle_180 = Math.PI / 2;
    Pos.angle_270 = -Math.PI / 2;
    Pos.angle_360 = Math.PI * 2;
    return Pos;
}());



/***/ }),

/***/ "../../../../../src/lib/game-core/text-game-object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextGameObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__("../../../../../src/lib/game-core/game-object.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextGameObject = (function (_super) {
    __extends(TextGameObject, _super);
    function TextGameObject(text, font, color, fill) {
        var _this = _super.call(this, 0, 0) || this;
        _this.color = color;
        _this.text = text;
        _this.font = font;
        _this.fill = fill;
        return _this;
    }
    TextGameObject.prototype.draw = function () {
        var ctx = this.game.ctx;
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = this.font;
        ctx.fillStyle = this.fill;
        this.game.ctx.fillText(this.text, this.game.worldSize.x / 2, this.game.worldSize.y / 2);
        this.game.ctx.strokeText(this.text, this.game.worldSize.x / 2, this.game.worldSize.y / 2);
    };
    TextGameObject.prototype.beforeTurn = function () {
    };
    TextGameObject.prototype.turn = function () {
    };
    TextGameObject.prototype.afterTurn = function () {
    };
    return TextGameObject;
}(__WEBPACK_IMPORTED_MODULE_0__game_object__["b" /* GameObject */]));



/***/ }),

/***/ "../../../../../src/lib/game-core/time-counter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeCounter; });
var TimeCounter = (function () {
    function TimeCounter(actionPeriodMillis) {
        this.lastActionTimeMillis = 0; // in miliseconds
        this.actionPeriodMillis = 0; // in miliseconds
        this.lastCheckingMoment = 0;
        this.lastDuration = 0;
        this.lastActionTimeMillis = 0;
        this.actionPeriodMillis = actionPeriodMillis;
    }
    TimeCounter.prototype.isItTime = function () {
        this.lastCheckingMoment = new Date().getTime();
        return (this.lastActionTimeMillis + this.actionPeriodMillis) < this.lastCheckingMoment;
    };
    TimeCounter.prototype.fixLastChecking = function () {
        this.lastDuration = this.lastCheckingMoment - this.lastActionTimeMillis;
        this.lastActionTimeMillis = this.lastCheckingMoment;
    };
    return TimeCounter;
}());



/***/ }),

/***/ "../../../../../src/lib/game-core/transparent-background.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransparentBackground; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__("../../../../../src/lib/game-core/game-object.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TransparentBackground = (function (_super) {
    __extends(TransparentBackground, _super);
    function TransparentBackground() {
        return _super.call(this, 0, 0) || this;
    }
    TransparentBackground.prototype.draw = function () {
        // Draw background: optimized 'magic' hack-version
        this.game.canvas.width = this.game.canvas.width;
    };
    TransparentBackground.prototype.beforeTurn = function () {
    };
    TransparentBackground.prototype.turn = function () {
    };
    TransparentBackground.prototype.afterTurn = function () {
    };
    return TransparentBackground;
}(__WEBPACK_IMPORTED_MODULE_0__game_object__["b" /* GameObject */]));



/***/ }),

/***/ "../../../../../src/lib/game-core/world-frame-object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldFrameObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__("../../../../../src/lib/game-core/game-object.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var WorldFrameObject = (function (_super) {
    __extends(WorldFrameObject, _super);
    function WorldFrameObject(color) {
        var _this = _super.call(this, 0, 0) || this;
        _this.color = color;
        return _this;
    }
    WorldFrameObject.prototype.draw = function () {
        var ctx = this.game.ctx;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.strokeRect(0, 0, this.game.worldSize.x, this.game.worldSize.y);
    };
    WorldFrameObject.prototype.beforeTurn = function () {
    };
    WorldFrameObject.prototype.turn = function () {
    };
    WorldFrameObject.prototype.afterTurn = function () {
    };
    return WorldFrameObject;
}(__WEBPACK_IMPORTED_MODULE_0__game_object__["b" /* GameObject */]));



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map