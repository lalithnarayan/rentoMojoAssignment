! function() { "use strict";
    angular.module("myApp", ["ngResource", "ui.router"]) }(),
function() { "use strict";

    function i(i, s) { i.showLoader = !0, i.listing = [{ name: "Peter England Cap", image: "../assets/images/cap1.jpg", type: "sale", oldPrice: 120, NewPrice: 90 }, { name: "Peter England Cap", image: "../assets/images/cap3.jpg", type: "normal", oldPrice: 120, NewPrice: 90 }, { name: "Peter England Cap", image: "../assets/images/shirt1.jpg", type: "hit", oldPrice: 120, NewPrice: 90 }, { name: "Peter England Cap", image: "../assets/images/shirt2.jpg", type: "sale", oldPrice: 120, NewPrice: 90 }, { name: "Peter England Cap", image: "../assets/images/shirt3.jpg", type: "sale", oldPrice: 120, NewPrice: 90 }, { name: "Peter England Cap", image: "../assets/images/shirt1.jpg", type: "sale", oldPrice: 120, NewPrice: 90 }, { name: "Peter England Cap", image: "../assets/images/shirt2.jpg", type: "sale", oldPrice: 120, NewPrice: 90 }, { name: "Peter England Cap", image: "../assets/images/shirt3.jpg", type: "sale", oldPrice: 120, NewPrice: 90 }], i.sidePanelImages = [{ image: "../assets/images/side1.jpg" }, { image: "../assets/images/side2.jpg" }, { image: "../assets/images/side3.jpg" }, { image: "../assets/images/side4.jpg" }], i.brands = [{ image: "../assets/images/logo2.jpeg" }, { image: "../assets/images/logo3.png" }, { image: "../assets/images/logo4.png" }, { image: "../assets/images/logo4.png" }, { image: "../assets/images/logo4.png" }, { image: "../assets/images/logo2.jpeg" }, { image: "../assets/images/logo3.png" }], i.socialLogos = [{ image: "../assets/images/twitter.png" }, { image: "../assets/images/insta.png" }, { image: "../assets/images/pin.png" }, { image: "../assets/images/fb.png" }], i.payLogos = [{ image: "../assets/images/visa.png" }, { image: "../assets/images/master.png" }, { image: "../assets/images/paypal.png" }], i.bannerImages = [{ image: "../assets/images/1.jpg" }, { image: "../assets/images/2.jpg" }, { image: "../assets/images/3.jpg" }], i.getBrandImageBg = function(i) {
            return { "background-image": "url(" + i + ")" } } }
    i.$inject = ["$scope", "$http"], angular.module("myApp").controller("MainController", i) }(),
function() { "use strict";

    function i(i) { i.debug("runBlock end") }
    i.$inject = ["$log"], angular.module("myApp").run(i) }(),
function() { "use strict";

    function i(i, s) { i.state("home", { url: "/", templateUrl: "app/main/main.html", controller: "MainController", controllerAs: "main" }), s.otherwise("/") }
    i.$inject = ["$stateProvider", "$urlRouterProvider"], angular.module("myApp").config(i) }(), angular.module("myApp").run(["$templateCache", function(i) { i.put("app/main/main.html", ' <header> <div class="header-ham-icon"><img ng-src="assets/images/ham.png"></div> <div class="header-logo">BuyBlue</div> <ul class="header-nav-wrp clearfix visible-lg visible-md"> <li class="header-nav-item"> <div class="text">Men</div> <div class="icon"></div> </li> <li class="header-nav-item"> <div class="text">Women</div> <div class="icon"></div> </li> <li class="header-nav-item"> <div class="text">Kids</div> <div class="icon"></div> </li> <li class="header-nav-item"> <div class="text">Accessories</div> <div class="icon"> </div> </li> </ul> <div class="header-options-wrp"> <ul> <li class="header-opt-wrp"> <div class="badge">3</div> <div class="icon"><img ng-src="assets/images/bag.png"></div> </li> <li class="header-opt-wrp"> <div class="icon"><img ng-src="assets/images/user.png"></div> </li> <li class="header-opt-wrp"> <div class="icon"><img ng-src="assets/images/search.png"></div> </li> </ul> </div> </header> <div id="page-content"> <div class="page-top-wrp"> <div class="page-top-wrp container-fluid"> <div class="row"> <div class="page-carousel-wrp col-sm-12 col-md-12 col-lg-9"> <div id="myCarousel" data-ride="carousel" class="carousel slide"> <div role="listbox" class="carousel-inner"> <div class="item active"><img ng-src="assets/images/1.jpg"></div> <div class="item"><img ng-src="assets/images/2.jpg"></div> <div class="item"><img ng-src="assets/images/3.jpg"></div> </div> </div> </div> <div class="page-right-ad-wrp col-sm-12 col-md-3 col-lg-3 visible-lg"> <div class="page-right-widget-container"> <div ng-repeat="item in sidePanelImages" ng-style="getBrandImageBg(item.image)" class="content-item"> <div class="overlay"></div> <div class="overlay-content"></div> </div> </div> </div> </div> </div> </div> <div class="page-bottom-content"> <div class="cat-widget-content container-fluid"> <div class="row"> <div ng-repeat="list in listing" class="cat-widget-item col-sm-6 col-md-3 col-lg-3"> <div class="cat-item-wrp"> <div class="cat-item-name">{{list.name}}</div> <div ng-style="getBrandImageBg(list.image)" class="cat-item-image"></div> <div ng-if="list.type=== &quot;sale&quot;" class="cat-item-bottom-wrp clearfix"> <div class="offer-info"> <div class="arrow_box hit">Hit</div> </div> <div class="price">$123</div> </div> <div ng-if="list.type=== &quot;hit&quot;" class="cat-item-bottom-wrp clearfix"> <div class="offer-info"></div> <div class="price">$123</div> </div> <div ng-if="list.type=== &quot;normal&quot;" class="cat-item-bottom-wrp clearfix"> <div class="offer-info"> <div class="arrow_box sale">Sale</div> </div> <div class="price">$123</div> <div class="old-price">$180</div> </div> </div> </div> </div> </div> <div class="cat-widget-content container-fluid"> <div class="row"> <div ng-repeat="brand in brands" ng-style="getBrandImageBg(brand.image)" class="cat-brand-item"></div> <div class="cat-brand-item"> <div class="text">ALL BRANDS</div> </div> </div> </div> </div> </div> <footer> <div class="footer-top-wrp"> <ul> <li>Men</li> <li>Women</li> <li>Kids</li> <li>Accessories</li> <li>Look Book</li> <li>Blog</li> </ul> </div> <div class="footer-bottom-wrp container-fluid"> <div class="row"> <div class="footer-bottom-left col-md-3 col-sm-6 col-lg-3"> <div class="text">Buy Blue</div> <div class="msg">© 2015 DivanRaj UI Kit. All rights resrved.</div> </div> <div class="footer-bottom-center col-md-6 col-sm-6 col-lg-6"> <div class="footer-search-wrp"> <div class="mail-icon"></div> <input> <div class="next-icon"> </div> </div> <div class="footer-options-wrp"> <ul> <li>Privacy & Cookies </li> <li>Terms & Conditions</li> <li>Accessibility </li> </ul> </div> </div> <div class="footer-bottom-right col-md-3 col-sm-6 col-lg-3"> <div class="footer-right-top"> <div ng-repeat="logo in socialLogos" ng-style="getBrandImageBg(logo.image)" class="social-icon"></div> </div> <div class="footer-right-bottom"> <div ng-repeat="logo in payLogos" ng-style="getBrandImageBg(logo.image)" class="social-icon"> </div> </div> </div> </div> </div> </footer>') }]);
//# sourceMappingURL=../maps/scripts/app-fe07c7940d.js.map
