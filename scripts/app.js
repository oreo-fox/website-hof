'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),            
            new Route('about', 'about.html'),
            new Route('bbq', 'bbq.html'),
            new Route('partner', 'partner.html'),
            new Route('spycher', 'spycher.html'),
            new Route('wandern', 'wandern.html'),
            new Route('news', 'news.html')

        ]);
    }
    init();
}());