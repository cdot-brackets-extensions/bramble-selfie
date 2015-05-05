/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4,
maxerr: 50, browser: true */
/*global define, brackets, $, document, Mustache*/

/**
 * This extension provides in-editor livepreview through an iframe,
 * and leverages the experimental Multi Browser implementation of brackets
 * (see https://github.com/adobe/brackets/tree/master/src/LiveDevelopment/MultiBrowserImpl)
 */
define(function (require, exports, module) {
    "use strict";

    var cameraWidgetHtml = require("text!cameraWidget.html"),
    var cameraWidget;

    function showCamera(lineNumber) {
        var description = document.createElement("div");
        description.className = "cameraPanel";
        description.innerHTML = cameraWidgetHtml;
        var options = {coverGutter: false, noHScroll: false, above: false, showIfHidden: false};

        cameraWidget = getCodeMirror().addLineWidget(lineNumber, description, options);
    }

    function hideCamera() {
        if(!cameraWidget) {
            return;
        }
        cameraWidget.clear();
        cameraWidget = null;
    }

    AppInit.appReady(function (){
        // Inject option into autocomplete menu
        // Attach listener to autocomplete
    });
});