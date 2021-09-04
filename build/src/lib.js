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
exports.__esModule = true;
exports.cc = exports.debugOut = exports.pp = exports.getTestWorkFolderFullPath = exports.checkNotInGitWorking = exports.pathResolve = exports.inputSkip = exports.inputPath = exports.getInputObject = exports.input = void 0;
var fs = require("fs");
var path = require("path");
var readline = require("readline");
var inputDefault = [
    '' //    'test.json.txt'
];
// StandardInputBuffer
var StandardInputBuffer = /** @class */ (function () {
    function StandardInputBuffer() {
        this.inputBuffer = [];
        this.inputResolver = undefined;
    }
    StandardInputBuffer.prototype.delayedConstructor = function () {
        var _this = this;
        this.readlines = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.readlines.on('line', function (line) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.inputResolver) {
                    this.inputResolver(line);
                    this.inputResolver = undefined;
                }
                else {
                    this.inputBuffer.push(line);
                }
                return [2 /*return*/];
            });
        }); });
        this.readlines.setPrompt('');
        this.readlines.prompt();
    };
    StandardInputBuffer.prototype.input = function (guide) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.readlines) {
                    this.delayedConstructor();
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var nextLine = _this.inputBuffer.shift();
                        if (nextLine) {
                            console.log(guide + nextLine);
                            resolve(nextLine);
                        }
                        else {
                            process.stdout.write(guide);
                            _this.inputResolver = resolve;
                        }
                    })];
            });
        });
    };
    StandardInputBuffer.prototype.close = function () {
        if (this.readlines) {
            this.readlines.close();
        }
    };
    return StandardInputBuffer;
}());
// InputOption
var InputOption = /** @class */ (function () {
    function InputOption(inputLines) {
        this.inputLines = inputLines;
        this.nextLineIndex = 0;
        this.nextParameterIndex = 2;
    }
    return InputOption;
}());
// inputOption
var inputOption = new InputOption(inputDefault);
// input
// Example: const name = await input('What is your name? ');
function input(guide) {
    return __awaiter(this, void 0, void 0, function () {
        var value, value;
        return __generator(this, function (_a) {
            // Input emulation
            if (inputOption.inputLines) {
                if (inputOption.nextLineIndex < inputOption.inputLines.length) {
                    value = inputOption.inputLines[inputOption.nextLineIndex];
                    inputOption.nextLineIndex += 1;
                    console.log(guide + value);
                    return [2 /*return*/, value];
                }
            }
            // Read the starting process parameters
            while (inputOption.nextParameterIndex < process.argv.length) {
                value = process.argv[inputOption.nextParameterIndex];
                inputOption.nextParameterIndex += 1;
                if (value.substr(0, 1) !== '-') {
                    console.log(guide + value);
                    return [2 /*return*/, value];
                }
                if (value !== '--test') {
                    inputOption.nextParameterIndex += 1;
                }
            }
            // input
            return [2 /*return*/, InputObject.input(guide)];
        });
    });
}
exports.input = input;
var InputObject = new StandardInputBuffer();
function getInputObject() {
    return InputObject;
}
exports.getInputObject = getInputObject;
// inputPath
// Example: const name = await input('What is your name? ');
function inputPath(guide) {
    return __awaiter(this, void 0, void 0, function () {
        var key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, input(guide)];
                case 1:
                    key = _a.sent();
                    if (key.endsWith('()')) {
                        return [2 /*return*/, key];
                    }
                    else {
                        return [2 /*return*/, pathResolve(key)];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.inputPath = inputPath;
// inputSkip
function inputSkip(count) {
    inputOption.nextParameterIndex += count;
}
exports.inputSkip = inputSkip;
// pathResolve
function pathResolve(path_) {
    // '/c/home' format to current OS format
    if (path_.length >= 3) {
        if (path_[0] === '/' && path_[2] === '/') {
            path_ = path_[1] + ':' + path_.substr(2);
        }
    }
    // Replace separators to OS format
    path_ = path.resolve(path_);
    return path_;
}
exports.pathResolve = pathResolve;
// checkNotInGitWorking
function checkNotInGitWorking() {
    var path_ = process.cwd();
    if (!path_.includes('extract_git_branches')) {
        throw new Error('This is not in project folder.');
    }
    while (path_.includes('extract_git_branches')) {
        path_ = path.dirname(path_);
    }
    while (path_ !== '/') {
        if (fs.existsSync(path_ + "/.git")) {
            throw new Error('This test is not supported with git submodule.');
        }
        path_ = path.dirname(path_);
    }
}
exports.checkNotInGitWorking = checkNotInGitWorking;
// getTestWorkFolderFullPath
function getTestWorkFolderFullPath() {
    var path_ = process.cwd();
    if (!path_.includes('extract_git_branches')) {
        throw new Error('This is not in project folder.');
    }
    while (path_.includes('extract_git_branches')) {
        path_ = path.dirname(path_);
    }
    return path_ + "/_test_of_extract_git_branches";
}
exports.getTestWorkFolderFullPath = getTestWorkFolderFullPath;
// pp
// Debug print.
// #keyword: pp
// Example:
//    pp(var);
// Example:
//    var d = pp(var);
//    d = d;  // Set break point here and watch the variable d
// Example:
//    try {
//
//        await main();
//    } finally {
//        var d = pp('');
//        d = [];  // Set break point here and watch the variable d
//    }
function pp(message) {
    if (typeof message === 'object') {
        message = JSON.stringify(message);
    }
    exports.debugOut.push(message.toString());
    return exports.debugOut;
}
exports.pp = pp;
exports.debugOut = [];
// cc
// Through counter.
// #keyword: cc
// Example:
//   cc();
// Example:
//   var c = cc().debugOut;  // Set break point here and watch the variable c
// Example:
//   if ( cc(2).isTarget )
//   var d = pp('');  // Set break point here and watch the variable d
function cc(targetCount, label) {
    if (targetCount === void 0) { targetCount = 9999999; }
    if (label === void 0) { label = '0'; }
    if (!(label in gCount)) {
        gCount[label] = 0;
    }
    gCount[label] += 1;
    pp(label + ":countThrough[" + label + "] = " + gCount[label]);
    var isTarget = (gCount[label] === targetCount);
    if (isTarget) {
        pp('    **** It is before the target! ****');
    }
    return { isTarget: isTarget, debugOut: exports.debugOut };
}
exports.cc = cc;
var gCount = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBeUI7QUFDekIsMkJBQTZCO0FBQzdCLG1DQUFxQztBQUVyQyxJQUFNLFlBQVksR0FBYTtJQUMvQixFQUFFLENBQUEscUJBQXFCO0NBQ3RCLENBQUM7QUFFRixzQkFBc0I7QUFDdEI7SUFBQTtRQUVJLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLGtCQUFhLEdBQTJCLFNBQVMsQ0FBQztJQTRDdEQsQ0FBQztJQTFDRyxnREFBa0IsR0FBbEI7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFDdEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtTQUN6QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBTyxJQUFZOztnQkFDekMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztpQkFDbEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQy9COzs7YUFDSixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTSxtQ0FBSyxHQUFaLFVBQWEsS0FBYTs7OztnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JB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LENBQUM7SUFDbEMsT0FBTyxnQkFBUSxDQUFDO0FBQ3BCLENBQUM7QUFORCxnQkFNQztBQUNhLFFBQUEsUUFBUSxHQUFhLEVBQUUsQ0FBQztBQUV0QyxLQUFLO0FBQ0wsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZixXQUFXO0FBQ1gsVUFBVTtBQUNWLFdBQVc7QUFDWCw2RUFBNkU7QUFDN0UsV0FBVztBQUNYLDBCQUEwQjtBQUMxQixzRUFBc0U7QUFDdEUsU0FBaUIsRUFBRSxDQUFFLFdBQTZCLEVBQUUsS0FBbUI7SUFBbEQsNEJBQUEsRUFBQSxxQkFBNkI7SUFBRSxzQkFBQSxFQUFBLFdBQW1CO0lBQ25FLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsRUFBRTtRQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3JCO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixFQUFFLENBQUssS0FBSyxzQkFBaUIsS0FBSyxZQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUcsQ0FBRSxDQUFDO0lBQzNELElBQU0sUUFBUSxHQUFHLENBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLFdBQVcsQ0FBRSxDQUFDO0lBRW5ELElBQUksUUFBUSxFQUFFO1FBQ1YsRUFBRSxDQUFFLHdDQUF3QyxDQUFFLENBQUM7S0FDbEQ7SUFDRCxPQUFRLEVBQUUsUUFBUSxVQUFBLEVBQUUsUUFBUSxrQkFBQSxFQUFFLENBQUM7QUFDbkMsQ0FBQztBQWJELGdCQWFDO0FBQ0QsSUFBTyxNQUFNLEdBQTZCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCAqIGFzIHJlYWRsaW5lIGZyb20gJ3JlYWRsaW5lJztcclxuXHJcbmNvbnN0IGlucHV0RGVmYXVsdDogc3RyaW5nW10gPSBbXHJcbicnLy8gICAgJ3Rlc3QuanNvbi50eHQnXHJcbl07XHJcblxyXG4vLyBTdGFuZGFyZElucHV0QnVmZmVyXHJcbmNsYXNzICBTdGFuZGFyZElucHV0QnVmZmVyIHtcclxuICAgIHJlYWRsaW5lczogcmVhZGxpbmUuSW50ZXJmYWNlIHwgdW5kZWZpbmVkO1xyXG4gICAgaW5wdXRCdWZmZXI6IHN0cmluZ1tdID0gW107XHJcbiAgICBpbnB1dFJlc29sdmVyPzogKGFuc3dlcjpzdHJpbmcpPT52b2lkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIGRlbGF5ZWRDb25zdHJ1Y3RvcigpIHsgIC8vIEl0IGlzIG5vdCBjb25zdHJ1Y3RvciwgYmVjYXVzZSBcImNyZWF0ZUludGVyZmFjZVwiIHN0b3BzIHRoZSBwcm9ncmFtLCBpZiBzdGRpbiB3YXMgbm90IHVzZWQuXHJcbiAgICAgICAgdGhpcy5yZWFkbGluZXMgPSByZWFkbGluZS5jcmVhdGVJbnRlcmZhY2Uoe1xyXG4gICAgICAgICAgICBpbnB1dDogcHJvY2Vzcy5zdGRpbixcclxuICAgICAgICAgICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVhZGxpbmVzLm9uKCdsaW5lJywgYXN5bmMgKGxpbmU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dFJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0UmVzb2x2ZXIobGluZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0UmVzb2x2ZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0QnVmZmVyLnB1c2gobGluZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWFkbGluZXMuc2V0UHJvbXB0KCcnKTtcclxuICAgICAgICB0aGlzLnJlYWRsaW5lcy5wcm9tcHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyAgaW5wdXQoZ3VpZGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlYWRsaW5lcykge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGF5ZWRDb25zdHJ1Y3RvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICBuZXcgUHJvbWlzZShcclxuICAgICAgICAgICAgKHJlc29sdmU6IChhbnN3ZXI6c3RyaW5nKT0+dm9pZCwgIHJlamVjdDogKGFuc3dlcjpzdHJpbmcpPT52b2lkICkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0ICBuZXh0TGluZSA9IHRoaXMuaW5wdXRCdWZmZXIuc2hpZnQoKTtcclxuICAgICAgICAgICAgaWYgKG5leHRMaW5lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhndWlkZSArIG5leHRMaW5lKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV4dExpbmUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoZ3VpZGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFJlc29sdmVyID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWRsaW5lcykge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRsaW5lcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gSW5wdXRPcHRpb25cclxuY2xhc3MgSW5wdXRPcHRpb24ge1xyXG4gICAgaW5wdXRMaW5lczogc3RyaW5nW107XHJcbiAgICBuZXh0TGluZUluZGV4OiBudW1iZXI7XHJcbiAgICBuZXh0UGFyYW1ldGVySW5kZXg6IG51bWJlcjsgIC8vIFRoZSBpbmRleCBvZiB0aGUgc3RhcnRpbmcgcHJvY2VzcyBwYXJhbWV0ZXJzXHJcblxyXG4gICAgY29uc3RydWN0b3IoaW5wdXRMaW5lczogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLmlucHV0TGluZXMgPSBpbnB1dExpbmVzO1xyXG4gICAgICAgIHRoaXMubmV4dExpbmVJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5uZXh0UGFyYW1ldGVySW5kZXggPSAyO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBpbnB1dE9wdGlvblxyXG5jb25zdCBpbnB1dE9wdGlvbiA9IG5ldyBJbnB1dE9wdGlvbihpbnB1dERlZmF1bHQpO1xyXG5cclxuLy8gaW5wdXRcclxuLy8gRXhhbXBsZTogY29uc3QgbmFtZSA9IGF3YWl0IGlucHV0KCdXaGF0IGlzIHlvdXIgbmFtZT8gJyk7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiAgaW5wdXQoIGd1aWRlOiBzdHJpbmcgKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIC8vIElucHV0IGVtdWxhdGlvblxyXG4gICAgaWYgKGlucHV0T3B0aW9uLmlucHV0TGluZXMpIHtcclxuICAgICAgICBpZiAoaW5wdXRPcHRpb24ubmV4dExpbmVJbmRleCA8IGlucHV0T3B0aW9uLmlucHV0TGluZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICB2YWx1ZSA9IGlucHV0T3B0aW9uLmlucHV0TGluZXNbaW5wdXRPcHRpb24ubmV4dExpbmVJbmRleF07XHJcbiAgICAgICAgICAgIGlucHV0T3B0aW9uLm5leHRMaW5lSW5kZXggKz0gMTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZ3VpZGUgKyB2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWFkIHRoZSBzdGFydGluZyBwcm9jZXNzIHBhcmFtZXRlcnNcclxuICAgIHdoaWxlIChpbnB1dE9wdGlvbi5uZXh0UGFyYW1ldGVySW5kZXggPCBwcm9jZXNzLmFyZ3YubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgIHZhbHVlID0gcHJvY2Vzcy5hcmd2W2lucHV0T3B0aW9uLm5leHRQYXJhbWV0ZXJJbmRleF07XHJcbiAgICAgICAgaW5wdXRPcHRpb24ubmV4dFBhcmFtZXRlckluZGV4ICs9IDE7XHJcbiAgICAgICAgaWYgKHZhbHVlLnN1YnN0cigwLDEpICE9PSAnLScpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZ3VpZGUgKyB2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgIT09ICctLXRlc3QnKSB7XHJcbiAgICAgICAgICAgIGlucHV0T3B0aW9uLm5leHRQYXJhbWV0ZXJJbmRleCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBpbnB1dFxyXG4gICAgcmV0dXJuICBJbnB1dE9iamVjdC5pbnB1dChndWlkZSk7XHJcbn1cclxuY29uc3QgIElucHV0T2JqZWN0ID0gbmV3IFN0YW5kYXJkSW5wdXRCdWZmZXIoKTtcclxuZXhwb3J0IGZ1bmN0aW9uICBnZXRJbnB1dE9iamVjdCgpOiBTdGFuZGFyZElucHV0QnVmZmVyIHtcclxuICAgIHJldHVybiAgSW5wdXRPYmplY3Q7XHJcbn1cclxuXHJcbi8vIGlucHV0UGF0aFxyXG4vLyBFeGFtcGxlOiBjb25zdCBuYW1lID0gYXdhaXQgaW5wdXQoJ1doYXQgaXMgeW91ciBuYW1lPyAnKTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uICBpbnB1dFBhdGgoIGd1aWRlOiBzdHJpbmcgKSB7XHJcbiAgICBjb25zdCAga2V5ID0gYXdhaXQgaW5wdXQoZ3VpZGUpO1xyXG4gICAgaWYgKGtleS5lbmRzV2l0aCgnKCknKSkge1xyXG4gICAgICAgIHJldHVybiAga2V5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gIHBhdGhSZXNvbHZlKGtleSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGlucHV0U2tpcFxyXG5leHBvcnQgZnVuY3Rpb24gIGlucHV0U2tpcChjb3VudDogbnVtYmVyKSB7XHJcbiAgICBpbnB1dE9wdGlvbi5uZXh0UGFyYW1ldGVySW5kZXggKz0gY291bnQ7XHJcbn1cclxuXHJcbi8vIHBhdGhSZXNvbHZlXHJcbmV4cG9ydCBmdW5jdGlvbiAgcGF0aFJlc29sdmUocGF0aF86IHN0cmluZykge1xyXG5cclxuICAgIC8vICcvYy9ob21lJyBmb3JtYXQgdG8gY3VycmVudCBPUyBmb3JtYXRcclxuICAgIGlmIChwYXRoXy5sZW5ndGggPj0gMykge1xyXG4gICAgICAgIGlmIChwYXRoX1swXSA9PT0gJy8nICAmJiAgcGF0aF9bMl0gPT09ICcvJykge1xyXG4gICAgICAgICAgICBwYXRoXyA9IHBhdGhfWzFdICsnOicrIHBhdGhfLnN1YnN0cigyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVwbGFjZSBzZXBhcmF0b3JzIHRvIE9TIGZvcm1hdFxyXG4gICAgcGF0aF8gPSBwYXRoLnJlc29sdmUocGF0aF8pO1xyXG5cclxuICAgIHJldHVybiBwYXRoX1xyXG59XHJcblxyXG4vLyBjaGVja05vdEluR2l0V29ya2luZ1xyXG5leHBvcnQgZnVuY3Rpb24gIGNoZWNrTm90SW5HaXRXb3JraW5nKCkge1xyXG4gICAgdmFyICBwYXRoXyA9IHByb2Nlc3MuY3dkKCk7XHJcblxyXG4gICAgaWYgKCAhIHBhdGhfLmluY2x1ZGVzKCdleHRyYWN0X2dpdF9icmFuY2hlcycpKSB7XHJcbiAgICAgICAgdGhyb3cgIG5ldyBFcnJvcignVGhpcyBpcyBub3QgaW4gcHJvamVjdCBmb2xkZXIuJylcclxuICAgIH1cclxuICAgIHdoaWxlIChwYXRoXy5pbmNsdWRlcygnZXh0cmFjdF9naXRfYnJhbmNoZXMnKSkge1xyXG4gICAgICAgIHBhdGhfID0gcGF0aC5kaXJuYW1lKHBhdGhfKTtcclxuICAgIH1cclxuICAgIHdoaWxlIChwYXRoXyAhPT0gJy8nKSB7XHJcblxyXG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGAke3BhdGhffS8uZ2l0YCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgIG5ldyBFcnJvcignVGhpcyB0ZXN0IGlzIG5vdCBzdXBwb3J0ZWQgd2l0aCBnaXQgc3VibW9kdWxlLicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhdGhfID0gcGF0aC5kaXJuYW1lKHBhdGhfKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZ2V0VGVzdFdvcmtGb2xkZXJGdWxsUGF0aFxyXG5leHBvcnQgZnVuY3Rpb24gIGdldFRlc3RXb3JrRm9sZGVyRnVsbFBhdGgoKTogc3RyaW5nIHtcclxuICAgIHZhciAgcGF0aF8gPSBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuICAgIGlmICggISBwYXRoXy5pbmNsdWRlcygnZXh0cmFjdF9naXRfYnJhbmNoZXMnKSkge1xyXG4gICAgICAgIHRocm93ICBuZXcgRXJyb3IoJ1RoaXMgaXMgbm90IGluIHByb2plY3QgZm9sZGVyLicpXHJcbiAgICB9XHJcbiAgICB3aGlsZSAocGF0aF8uaW5jbHVkZXMoJ2V4dHJhY3RfZ2l0X2JyYW5jaGVzJykpIHtcclxuICAgICAgICBwYXRoXyA9IHBhdGguZGlybmFtZShwYXRoXyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICBgJHtwYXRoX30vX3Rlc3Rfb2ZfZXh0cmFjdF9naXRfYnJhbmNoZXNgO1xyXG59XHJcblxyXG4vLyBwcFxyXG4vLyBEZWJ1ZyBwcmludC5cclxuLy8gI2tleXdvcmQ6IHBwXHJcbi8vIEV4YW1wbGU6XHJcbi8vICAgIHBwKHZhcik7XHJcbi8vIEV4YW1wbGU6XHJcbi8vICAgIHZhciBkID0gcHAodmFyKTtcclxuLy8gICAgZCA9IGQ7ICAvLyBTZXQgYnJlYWsgcG9pbnQgaGVyZSBhbmQgd2F0Y2ggdGhlIHZhcmlhYmxlIGRcclxuLy8gRXhhbXBsZTpcclxuLy8gICAgdHJ5IHtcclxuLy9cclxuLy8gICAgICAgIGF3YWl0IG1haW4oKTtcclxuLy8gICAgfSBmaW5hbGx5IHtcclxuLy8gICAgICAgIHZhciBkID0gcHAoJycpO1xyXG4vLyAgICAgICAgZCA9IFtdOyAgLy8gU2V0IGJyZWFrIHBvaW50IGhlcmUgYW5kIHdhdGNoIHRoZSB2YXJpYWJsZSBkXHJcbi8vICAgIH1cclxuZXhwb3J0IGZ1bmN0aW9uICBwcChtZXNzYWdlOiBhbnkpIHtcclxuICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBkZWJ1Z091dC5wdXNoKG1lc3NhZ2UudG9TdHJpbmcoKSk7XHJcbiAgICByZXR1cm4gZGVidWdPdXQ7XHJcbn1cclxuZXhwb3J0IGNvbnN0ICBkZWJ1Z091dDogc3RyaW5nW10gPSBbXTtcclxuXHJcbi8vIGNjXHJcbi8vIFRocm91Z2ggY291bnRlci5cclxuLy8gI2tleXdvcmQ6IGNjXHJcbi8vIEV4YW1wbGU6XHJcbi8vICAgY2MoKTtcclxuLy8gRXhhbXBsZTpcclxuLy8gICB2YXIgYyA9IGNjKCkuZGVidWdPdXQ7ICAvLyBTZXQgYnJlYWsgcG9pbnQgaGVyZSBhbmQgd2F0Y2ggdGhlIHZhcmlhYmxlIGNcclxuLy8gRXhhbXBsZTpcclxuLy8gICBpZiAoIGNjKDIpLmlzVGFyZ2V0IClcclxuLy8gICB2YXIgZCA9IHBwKCcnKTsgIC8vIFNldCBicmVhayBwb2ludCBoZXJlIGFuZCB3YXRjaCB0aGUgdmFyaWFibGUgZFxyXG5leHBvcnQgZnVuY3Rpb24gIGNjKCB0YXJnZXRDb3VudDogbnVtYmVyID0gOTk5OTk5OSwgbGFiZWw6IHN0cmluZyA9ICcwJyApIHtcclxuICAgIGlmICghKGxhYmVsIGluIGdDb3VudCkpIHtcclxuICAgICAgICBnQ291bnRbbGFiZWxdID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnQ291bnRbbGFiZWxdICs9IDE7XHJcbiAgICBwcCggYCR7bGFiZWx9OmNvdW50VGhyb3VnaFske2xhYmVsfV0gPSAke2dDb3VudFtsYWJlbF19YCApO1xyXG4gICAgY29uc3QgaXNUYXJnZXQgPSAoIGdDb3VudFtsYWJlbF0gPT09IHRhcmdldENvdW50ICk7XHJcblxyXG4gICAgaWYgKGlzVGFyZ2V0KSB7XHJcbiAgICAgICAgcHAoICcgICAgKioqKiBJdCBpcyBiZWZvcmUgdGhlIHRhcmdldCEgKioqKicgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAgeyBpc1RhcmdldCwgZGVidWdPdXQgfTtcclxufVxyXG5jb25zdCAgZ0NvdW50OiB7W25hbWU6IHN0cmluZ106IG51bWJlcn0gPSB7fTtcclxuIl19