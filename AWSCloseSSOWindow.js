// ==UserScript==
// @name         AWSCloseSSOWindow
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Just close the damn window...
// @author       Artem Nefedov
// @match        https://*.awsapps.com/start/user-consent/login-success.html
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';
    window.close();
})();
