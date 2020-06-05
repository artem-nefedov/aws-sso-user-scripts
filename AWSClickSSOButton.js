// ==UserScript==
// @name         AWSClickSSOButton
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Just click the damn button...
// @author       Artem Nefedov
// @match        https://aligntech.awsapps.com/start/user-consent/authorize.html?clientId=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById('cli_login_button').click();
})();
