"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var Chrome = __importStar(require("chrome-launcher"));
var chrome_remote_interface_1 = __importDefault(require("chrome-remote-interface"));
var cheerio_1 = __importDefault(require("cheerio"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var formdata_node_1 = __importDefault(require("formdata-node"));
var SEARCH_BY_FILE_URI = "https://www.google.com/searchbyimage/upload";
var SEARCH_BY_URL_URI = "https://www.google.com/searchbyimage";
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var chrome;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Chrome.launch({ chromeFlags: ["--disable-gpu"] })];
                case 1:
                    chrome = _a.sent();
                    console.log(chrome.port);
                    return [2 /*return*/];
            }
        });
    });
}
var GRIS = /** @class */ (function () {
    function GRIS() {
        var _this = this;
        this.ready = Chrome.launch({ chromeFlags: ["--disable-gpu", "--headless"] })
            .then(function (chrome) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, Page, DOM;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.chrome = chrome;
                        _a = this;
                        return [4 /*yield*/, chrome_remote_interface_1.default({ port: chrome.port })];
                    case 1:
                        _a.protocol = _c.sent();
                        _b = this.protocol, Page = _b.Page, DOM = _b.DOM;
                        this.page = Page;
                        this.DOM = DOM;
                        return [2 /*return*/, Promise.all([
                                Page.enable(),
                                DOM.enable(),
                            ]).then(function () { return _this; })];
                }
            });
        }); });
    }
    GRIS.prototype.getResultUrlByFile = function (imagePath) {
        return __awaiter(this, void 0, void 0, function () {
            var filePath, stream, data, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filePath = path.resolve(imagePath);
                        if (!fs.existsSync(filePath)) {
                            return [2 /*return*/];
                        }
                        stream = fs.createReadStream(filePath);
                        data = new formdata_node_1.default();
                        data.append("encoded_image", stream, path.basename(filePath));
                        data.append("image_content", "");
                        return [4 /*yield*/, node_fetch_1.default(SEARCH_BY_FILE_URI, {
                                method: "post",
                                redirect: "manual",
                                headers: data.headers,
                                body: data.stream,
                            })];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 302) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, response.headers.get("location")];
                }
            });
        });
    };
    GRIS.prototype.getResultUrlByUrl = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new URL(SEARCH_BY_URL_URI);
                        uri.searchParams.append("image_url", url);
                        uri.searchParams.append("encoded_image", "");
                        uri.searchParams.append("image_content", "");
                        uri.searchParams.append("filename", "");
                        return [4 /*yield*/, node_fetch_1.default(uri.toString(), { redirect: "manual" })];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 302) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, response.headers.get("location")];
                }
            });
        });
    };
    GRIS.prototype.parsePage = function (page) {
        var results = [];
        var $ = cheerio_1.default.load(page);
        $(".g .rc").each(function (i, el) {
            var imageLink = $(el).find(".s .th a").attr("href");
            if (imageLink) {
                var imageObj = new URL(imageLink, SEARCH_BY_FILE_URI);
                var image = imageObj.searchParams.get("imgurl");
                var page_1 = imageObj.searchParams.get("imgrefurl");
                var width = parseInt(imageObj.searchParams.get("w"));
                var height = parseInt(imageObj.searchParams.get("h"));
                results.push({ image: image, page: page_1, width: width, height: height });
            }
        });
        return results;
    };
    GRIS.prototype.kill = function () {
        return Promise.all([
            this.protocol.close(),
            this.chrome.kill(),
        ]).then(function () { });
    };
    GRIS.prototype.searchByFile = function (imagePath, page) {
        if (page === void 0) { page = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var url, urlObj, root, source;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getResultUrlByFile(imagePath)];
                    case 1:
                        url = _a.sent();
                        if (!url) {
                            return [2 /*return*/, []];
                        }
                        urlObj = new URL(url);
                        urlObj.searchParams.append("start", (page * 10).toString());
                        this.page.navigate({ url: urlObj.toString() });
                        return [4 /*yield*/, this.page.loadEventFired()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.DOM.getDocument({ depth: -1 })];
                    case 3:
                        root = _a.sent();
                        return [4 /*yield*/, this.DOM.getOuterHTML({ nodeId: root.root.nodeId })];
                    case 4:
                        source = _a.sent();
                        return [2 /*return*/, this.parsePage(source.outerHTML)];
                }
            });
        });
    };
    GRIS.prototype.searchByUrl = function (url, page) {
        if (page === void 0) { page = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var uri, urlObj, root, source;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getResultUrlByUrl(url)];
                    case 1:
                        uri = _a.sent();
                        if (!uri) {
                            return [2 /*return*/, []];
                        }
                        urlObj = new URL(uri);
                        urlObj.searchParams.append("start", (page * 10).toString());
                        this.page.navigate({ url: urlObj.toString() });
                        return [4 /*yield*/, this.page.loadEventFired()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.DOM.getDocument({ depth: -1 })];
                    case 3:
                        root = _a.sent();
                        return [4 /*yield*/, this.DOM.getOuterHTML({ nodeId: root.root.nodeId })];
                    case 4:
                        source = _a.sent();
                        return [2 /*return*/, this.parsePage(source.outerHTML)];
                }
            });
        });
    };
    return GRIS;
}());
exports.GRIS = GRIS;
