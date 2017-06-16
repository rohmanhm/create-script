"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createScript(url, attrs) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = url;
        script.addEventListener('load', function () { return resolve(true); });
        script.addEventListener('error', function (e) { return reject(e); });
        document.body.appendChild(script);
    });
}
exports.default = createScript;
