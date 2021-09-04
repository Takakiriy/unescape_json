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
var fs = require("fs");
var lib = require("./lib");
var clipboardy = require("clipboardy");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var input_file_path, output_file_path, escaped_JSON, a_JSON_string, a_JSON, formatted_JSON, escaped_JSON, a_JSON_string, a_JSON, formatted_JSON;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Enter only: unescape the text in the clipboard");
                    return [4 /*yield*/, lib.input("Input escaped JSON UTF-8 file path>")];
                case 1:
                    input_file_path = _a.sent();
                    if (input_file_path) {
                        output_file_path = input_file_path + ".updating";
                        escaped_JSON = fs.readFileSync(input_file_path, "utf-8");
                        a_JSON_string = JSON.parse(escaped_JSON);
                        a_JSON = JSON.parse(a_JSON_string);
                        formatted_JSON = JSON.stringify(a_JSON, null, "\t");
                        fs.writeFileSync(output_file_path, formatted_JSON);
                    }
                    else {
                        escaped_JSON = clipboardy.readSync();
                        a_JSON_string = JSON.parse(escaped_JSON);
                        a_JSON = JSON.parse(a_JSON_string);
                        formatted_JSON = JSON.stringify(a_JSON, null, "\t");
                        clipboardy.writeSync(formatted_JSON);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function callMain() {
    return __awaiter(this, void 0, void 0, function () {
        var dummy, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, main()];
                case 1:
                    _a.sent();
                    dummy = 0;
                    return [3 /*break*/, 4];
                case 2:
                    e_1 = _a.sent();
                    console.log("ERROR: " + e_1.message);
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var notFound = -1;
callMain();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5lc2NhcGVfanNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmVzY2FwZV9qc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXlCO0FBQ3pCLDJCQUE2QjtBQUM3Qix1Q0FBeUM7QUFFekMsU0FBZ0IsSUFBSTs7Ozs7O29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUE7b0JBQ3BDLHFCQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUUscUNBQXFDLENBQUUsRUFBQTs7b0JBQTFFLGVBQWUsR0FBRyxTQUF3RDtvQkFDakYsSUFBSSxlQUFlLEVBQUU7d0JBQ2IsZ0JBQWdCLEdBQUcsZUFBZSxHQUFFLFdBQVcsQ0FBQzt3QkFDaEQsWUFBWSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUUsZUFBZSxFQUFHLE9BQU8sQ0FBRSxDQUFDO3dCQUU1RCxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxZQUFZLENBQUUsQ0FBQzt3QkFDM0MsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsYUFBYSxDQUFFLENBQUM7d0JBQ3JDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFFLENBQUM7d0JBRTdELEVBQUUsQ0FBQyxhQUFhLENBQUUsZ0JBQWdCLEVBQUcsY0FBYyxDQUFFLENBQUM7cUJBQ3REO3lCQUFNO3dCQUNDLFlBQVksR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBRXJDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLFlBQVksQ0FBRSxDQUFDO3dCQUMzQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxhQUFhLENBQUUsQ0FBQzt3QkFDckMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUUsQ0FBQzt3QkFFN0QsVUFBVSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztxQkFDckM7Ozs7O0NBQ0Q7QUFFRCxTQUFnQixRQUFROzs7Ozs7O29CQUV0QixxQkFBTyxJQUFJLEVBQUUsRUFBQTs7b0JBQWIsU0FBYSxDQUFDO29CQUNQLEtBQUssR0FBRyxDQUFDLENBQUM7Ozs7b0JBRWpCLE9BQU8sQ0FBQyxHQUFHLENBQUUsWUFBVSxHQUFDLENBQUMsT0FBUyxDQUFFLENBQUM7b0JBQ3JDLHFCQUFNLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxFQUFBOztvQkFBdkQsU0FBdUQsQ0FBQzs7Ozs7O0NBRXpEO0FBQ0QsSUFBTyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckIsUUFBUSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0ICogYXMgbGliIGZyb20gXCIuL2xpYlwiO1xyXG5pbXBvcnQgKiBhcyBjbGlwYm9hcmR5IGZyb20gJ2NsaXBib2FyZHknO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gIG1haW4oKSB7XHJcblx0Y29uc29sZS5sb2coXCJFbnRlciBvbmx5OiB1bmVzY2FwZSB0aGUgdGV4dCBpbiB0aGUgY2xpcGJvYXJkXCIpXHJcblx0Y29uc3QgIGlucHV0X2ZpbGVfcGF0aCA9IGF3YWl0IGxpYi5pbnB1dCggXCJJbnB1dCBlc2NhcGVkIEpTT04gVVRGLTggZmlsZSBwYXRoPlwiICk7XHJcblx0aWYgKGlucHV0X2ZpbGVfcGF0aCkge1xyXG5cdFx0Y29uc3QgIG91dHB1dF9maWxlX3BhdGggPSBpbnB1dF9maWxlX3BhdGggK1wiLnVwZGF0aW5nXCI7XHJcblx0XHRjb25zdCAgZXNjYXBlZF9KU09OID0gZnMucmVhZEZpbGVTeW5jKCBpbnB1dF9maWxlX3BhdGgsICBcInV0Zi04XCIgKTtcclxuXHJcblx0XHRjb25zdCAgYV9KU09OX3N0cmluZyA9IEpTT04ucGFyc2UoIGVzY2FwZWRfSlNPTiApOyAgLy8gVW5lc2NhcGVcclxuXHRcdGNvbnN0ICBhX0pTT04gPSBKU09OLnBhcnNlKCBhX0pTT05fc3RyaW5nICk7XHJcblx0XHRjb25zdCAgZm9ybWF0dGVkX0pTT04gPSBKU09OLnN0cmluZ2lmeSggYV9KU09OLCBudWxsLCBcIlxcdFwiICk7XHJcblxyXG5cdFx0ZnMud3JpdGVGaWxlU3luYyggb3V0cHV0X2ZpbGVfcGF0aCwgIGZvcm1hdHRlZF9KU09OICk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnN0ICBlc2NhcGVkX0pTT04gPSBjbGlwYm9hcmR5LnJlYWRTeW5jKCk7XHJcblxyXG5cdFx0Y29uc3QgIGFfSlNPTl9zdHJpbmcgPSBKU09OLnBhcnNlKCBlc2NhcGVkX0pTT04gKTsgIC8vIFVuZXNjYXBlXHJcblx0XHRjb25zdCAgYV9KU09OID0gSlNPTi5wYXJzZSggYV9KU09OX3N0cmluZyApO1xyXG5cdFx0Y29uc3QgIGZvcm1hdHRlZF9KU09OID0gSlNPTi5zdHJpbmdpZnkoIGFfSlNPTiwgbnVsbCwgXCJcXHRcIiApO1xyXG5cclxuXHRcdGNsaXBib2FyZHkud3JpdGVTeW5jKGZvcm1hdHRlZF9KU09OKTtcclxuXHR9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uICBjYWxsTWFpbigpIHtcclxuXHR0cnkge1xyXG5cdFx0YXdhaXQgIG1haW4oKTtcclxuXHRcdGNvbnN0ICBkdW1teSA9IDA7XHJcblx0fSBjYXRjaCAoZTogYW55KSB7XHJcblx0XHRjb25zb2xlLmxvZyggYEVSUk9SOiAke2UubWVzc2FnZX1gICk7XHJcblx0XHRhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xyXG5cdH1cclxufVxyXG5jb25zdCAgbm90Rm91bmQgPSAtMTtcclxuY2FsbE1haW4oKTtcclxuIl19