/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'send': '&#xe900;',
            'request': '&#xe935;',
            'man': '&#xe901;',
            'woman': '&#xe902;',
            'profile': '&#xe903;',
            'add-profile': '&#xe904;',
            'delete-profile': '&#xe905;',
            'trash': '&#xe906;',
            'ach': '&#xe907;',
            'bank': '&#xe908;',
            'alert-circle': '&#xe909;',
            'alert': '&#xe90a;',
            'lock': '&#xe90b;',
            'camera': '&#xe90c;',
            'wifi': '&#xe90d;',
            'globe': '&#xe90e;',
            'check-circle': '&#xe90f;',
            'close-circle': '&#xe910;',
            'card': '&#xe911;',
            'id': '&#xe912;',
            'up': '&#xe913;',
            'down': '&#xe914;',
            'transfer': '&#xe915;',
            'check': '&#xe916;',
            'close': '&#xe917;',
            'help-circle': '&#xe918;',
            'help': '&#xe919;',
            'setting': '&#xe91a;',
            'logout': '&#xe91b;',
            'mobile': '&#xe91c;',
            'pending': '&#xe91d;',
            'comments': '&#xe91e;',
            'home': '&#xe91f;',
            'link': '&#xe920;',
            'joint-account': '&#xe921;',
            'notification': '&#xe922;',
            'message': '&#xe923;',
            'eye': '&#xe924;',
            'notification-2': '&#xe925;',
            'gift': '&#xe926;',
            'search': '&#xe927;',
            'verification': '&#xe928;',
            'briefcase': '&#xe929;',
            'receipt': '&#xe92a;',
            'comment': '&#xe92b;',
            'edit': '&#xe92c;',
            'money': '&#xe92d;',
            'line-graph': '&#xe92e;',
            'bar-chart': '&#xe92f;',
            'chat-pending': '&#xe930;',
            'document': '&#xe931;',
            'documents': '&#xe932;',
            'pdf': '&#xe933;',
            'menu': '&#xe934;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
