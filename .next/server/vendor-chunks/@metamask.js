"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@metamask";
exports.ids = ["vendor-chunks/@metamask"];
exports.modules = {

/***/ "(ssr)/./node_modules/@metamask/safe-event-emitter/dist/cjs/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@metamask/safe-event-emitter/dist/cjs/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst events_1 = __webpack_require__(/*! events */ \"events\");\nfunction safeApply(handler, context, args) {\n    try {\n        Reflect.apply(handler, context, args);\n    } catch (err) {\n        // Throw error after timeout so as not to interrupt the stack\n        setTimeout(()=>{\n            throw err;\n        });\n    }\n}\nfunction arrayClone(arr) {\n    const n = arr.length;\n    const copy = new Array(n);\n    for(let i = 0; i < n; i += 1){\n        copy[i] = arr[i];\n    }\n    return copy;\n}\nclass SafeEventEmitter extends events_1.EventEmitter {\n    emit(type, ...args) {\n        let doError = type === \"error\";\n        const events = this._events;\n        if (events !== undefined) {\n            doError = doError && events.error === undefined;\n        } else if (!doError) {\n            return false;\n        }\n        // If there is no 'error' event listener then throw.\n        if (doError) {\n            let er;\n            if (args.length > 0) {\n                [er] = args;\n            }\n            if (er instanceof Error) {\n                // Note: The comments on the `throw` lines are intentional, they show\n                // up in Node's output if this results in an unhandled exception.\n                throw er; // Unhandled 'error' event\n            }\n            // At least give some kind of context to the user\n            const err = new Error(`Unhandled error.${er ? ` (${er.message})` : \"\"}`);\n            err.context = er;\n            throw err; // Unhandled 'error' event\n        }\n        const handler = events[type];\n        if (handler === undefined) {\n            return false;\n        }\n        if (typeof handler === \"function\") {\n            safeApply(handler, this, args);\n        } else {\n            const len = handler.length;\n            const listeners = arrayClone(handler);\n            for(let i = 0; i < len; i += 1){\n                safeApply(listeners[i], this, args);\n            }\n        }\n        return true;\n    }\n}\nexports[\"default\"] = SafeEventEmitter; //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL3NhZmUtZXZlbnQtZW1pdHRlci9kaXN0L2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3RCxNQUFNQyxXQUFXQyxtQkFBT0EsQ0FBQyxzQkFBUTtBQUNqQyxTQUFTQyxVQUFVQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsSUFBSTtJQUNyQyxJQUFJO1FBQ0FDLFFBQVFDLEtBQUssQ0FBQ0osU0FBU0MsU0FBU0M7SUFDcEMsRUFDQSxPQUFPRyxLQUFLO1FBQ1IsNkRBQTZEO1FBQzdEQyxXQUFXO1lBQ1AsTUFBTUQ7UUFDVjtJQUNKO0FBQ0o7QUFDQSxTQUFTRSxXQUFXQyxHQUFHO0lBQ25CLE1BQU1DLElBQUlELElBQUlFLE1BQU07SUFDcEIsTUFBTUMsT0FBTyxJQUFJQyxNQUFNSDtJQUN2QixJQUFLLElBQUlJLElBQUksR0FBR0EsSUFBSUosR0FBR0ksS0FBSyxFQUFHO1FBQzNCRixJQUFJLENBQUNFLEVBQUUsR0FBR0wsR0FBRyxDQUFDSyxFQUFFO0lBQ3BCO0lBQ0EsT0FBT0Y7QUFDWDtBQUNBLE1BQU1HLHlCQUF5QmpCLFNBQVNrQixZQUFZO0lBQ2hEQyxLQUFLQyxJQUFJLEVBQUUsR0FBR2YsSUFBSSxFQUFFO1FBQ2hCLElBQUlnQixVQUFVRCxTQUFTO1FBQ3ZCLE1BQU1FLFNBQVMsSUFBSSxDQUFDQyxPQUFPO1FBQzNCLElBQUlELFdBQVdFLFdBQVc7WUFDdEJILFVBQVVBLFdBQVdDLE9BQU9HLEtBQUssS0FBS0Q7UUFDMUMsT0FDSyxJQUFJLENBQUNILFNBQVM7WUFDZixPQUFPO1FBQ1g7UUFDQSxvREFBb0Q7UUFDcEQsSUFBSUEsU0FBUztZQUNULElBQUlLO1lBQ0osSUFBSXJCLEtBQUtRLE1BQU0sR0FBRyxHQUFHO2dCQUNqQixDQUFDYSxHQUFHLEdBQUdyQjtZQUNYO1lBQ0EsSUFBSXFCLGNBQWNDLE9BQU87Z0JBQ3JCLHFFQUFxRTtnQkFDckUsaUVBQWlFO2dCQUNqRSxNQUFNRCxJQUFJLDBCQUEwQjtZQUN4QztZQUNBLGlEQUFpRDtZQUNqRCxNQUFNbEIsTUFBTSxJQUFJbUIsTUFBTSxDQUFDLGdCQUFnQixFQUFFRCxLQUFLLENBQUMsRUFBRSxFQUFFQSxHQUFHRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3ZFcEIsSUFBSUosT0FBTyxHQUFHc0I7WUFDZCxNQUFNbEIsS0FBSywwQkFBMEI7UUFDekM7UUFDQSxNQUFNTCxVQUFVbUIsTUFBTSxDQUFDRixLQUFLO1FBQzVCLElBQUlqQixZQUFZcUIsV0FBVztZQUN2QixPQUFPO1FBQ1g7UUFDQSxJQUFJLE9BQU9yQixZQUFZLFlBQVk7WUFDL0JELFVBQVVDLFNBQVMsSUFBSSxFQUFFRTtRQUM3QixPQUNLO1lBQ0QsTUFBTXdCLE1BQU0xQixRQUFRVSxNQUFNO1lBQzFCLE1BQU1pQixZQUFZcEIsV0FBV1A7WUFDN0IsSUFBSyxJQUFJYSxJQUFJLEdBQUdBLElBQUlhLEtBQUtiLEtBQUssRUFBRztnQkFDN0JkLFVBQVU0QixTQUFTLENBQUNkLEVBQUUsRUFBRSxJQUFJLEVBQUVYO1lBQ2xDO1FBQ0o7UUFDQSxPQUFPO0lBQ1g7QUFDSjtBQUNBUCxrQkFBZSxHQUFHbUIsa0JBQ2xCLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb29mLW9mLXdvcmstcGxhdGZvcm0vLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL3NhZmUtZXZlbnQtZW1pdHRlci9kaXN0L2Nqcy9pbmRleC5qcz8wM2EwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZXZlbnRzXzEgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xuZnVuY3Rpb24gc2FmZUFwcGx5KGhhbmRsZXIsIGNvbnRleHQsIGFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgICBSZWZsZWN0LmFwcGx5KGhhbmRsZXIsIGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIFRocm93IGVycm9yIGFmdGVyIHRpbWVvdXQgc28gYXMgbm90IHRvIGludGVycnVwdCB0aGUgc3RhY2tcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyKSB7XG4gICAgY29uc3QgbiA9IGFyci5sZW5ndGg7XG4gICAgY29uc3QgY29weSA9IG5ldyBBcnJheShuKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xuICAgICAgICBjb3B5W2ldID0gYXJyW2ldO1xuICAgIH1cbiAgICByZXR1cm4gY29weTtcbn1cbmNsYXNzIFNhZmVFdmVudEVtaXR0ZXIgZXh0ZW5kcyBldmVudHNfMS5FdmVudEVtaXR0ZXIge1xuICAgIGVtaXQodHlwZSwgLi4uYXJncykge1xuICAgICAgICBsZXQgZG9FcnJvciA9IHR5cGUgPT09ICdlcnJvcic7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgICAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkb0Vycm9yID0gZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghZG9FcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgICAgICAgaWYgKGRvRXJyb3IpIHtcbiAgICAgICAgICAgIGxldCBlcjtcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBbZXJdID0gYXJncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAgICAgICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihgVW5oYW5kbGVkIGVycm9yLiR7ZXIgPyBgICgke2VyLm1lc3NhZ2V9KWAgOiAnJ31gKTtcbiAgICAgICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgICAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcbiAgICAgICAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc2FmZUFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHNhZmVBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFNhZmVFdmVudEVtaXR0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJldmVudHNfMSIsInJlcXVpcmUiLCJzYWZlQXBwbHkiLCJoYW5kbGVyIiwiY29udGV4dCIsImFyZ3MiLCJSZWZsZWN0IiwiYXBwbHkiLCJlcnIiLCJzZXRUaW1lb3V0IiwiYXJyYXlDbG9uZSIsImFyciIsIm4iLCJsZW5ndGgiLCJjb3B5IiwiQXJyYXkiLCJpIiwiU2FmZUV2ZW50RW1pdHRlciIsIkV2ZW50RW1pdHRlciIsImVtaXQiLCJ0eXBlIiwiZG9FcnJvciIsImV2ZW50cyIsIl9ldmVudHMiLCJ1bmRlZmluZWQiLCJlcnJvciIsImVyIiwiRXJyb3IiLCJtZXNzYWdlIiwibGVuIiwibGlzdGVuZXJzIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@metamask/safe-event-emitter/dist/cjs/index.js\n");

/***/ })

};
;