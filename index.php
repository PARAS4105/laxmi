<!DOCTYPE html>
<html ng-app="laxmigroup">

<head>

			
			<!-- <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-NDDL5N8W');</script> -->
			






			





			<!-- <base href="/laxmigroup/"> -->
			<base href="/beta/">


	<!-- <base href="/"> -->

	<title ng-bind-template="{{page_title}}">Loading...</title>
	<meta name="revised" content="23/02/2023"/>
	<meta name="description" content="{{page_description}}">
	<meta name="keywords" content="{{page_keywords}}">
	<meta property="og:image" content="{{page_image}}" />
	<meta name="twitter:image" content="{{page_image}}">
	<link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon">
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="ScreenOrientation" content="autoRotate:disabled">



	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">


	<!-- css -->
	<!-- <link rel="stylesheet" type="text/css" href="assets/css/sweetalert2.min.css?ver=09-12-2022"> -->
	<!-- <link rel="stylesheet" type="text/css" href="assets/css/jquery.fancybox.min.css?ver=09-12-2022"> -->
	<!-- <link rel="stylesheet" type="text/css" href="assets/css/angular-material.min.css?ver=09-12-2022"> -->
	<!-- <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css" /> -->
	<!-- <link rel="stylesheet" type="text/css" href="assets/css/animate.css?ver=09-12-2022" /> -->
	<!-- <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css?ver=09-12-2022" /> -->
	<!-- <link type="text/css" rel="stylesheet" href="assets/css/angular-ui-swiper.css?ver=09-12-2022"> -->
	<!-- <link rel="stylesheet" type="text/css" href="assets/css/style.css?ver=09-12-2022" /> -->
	<!-- <link rel="stylesheet" type="text/css" href="assets/css/responsive.css?ver=09-12-2022" /> -->
	<!-- <link type="text/css" rel="stylesheet" href="assets/css/daterangepicker.css?ver=09-12-2022" /> -->

	<!-- js -->
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.2/vue.min.js"></script> -->
	<!-- <script src="https://unpkg.com/ks-vue-scrollmagic@1.0.2/dist/ks-vue-scrollmagic.js"></script> -->
	<!-- <script type="text/javascript" src="assets/js/jquery.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/jquery-validate.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular-validate.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular-route.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular-idle.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular-base64.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/ngStorage.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular-sanitize.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/ng-file-upload.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/checklist-model.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/ui-bootstrap.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular-google-analytics.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/swiper.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular-swiper.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/sweetalert2.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular-sweetalert2.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/rzslider.js?ver=09-12-2022"></script> -->

	<!-- Angular Material requires Angular.js Libraries -->
	<!-- <script type="text/javascript" src="assets/js/angular-animate.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular-aria.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular-messages.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angularjs-social-login.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular-sticky.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular-nicescroll.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/jquery.nicescroll.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/jquery.mousewheel.js"></script> -->
	<!-- <script type="text/javascript" src="assets/js/jquery.fancybox.min.js"></script> -->
	<!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script> -->
	<!-- <script type="text/javascript" src="assets/js/jquery.ez-plus.js"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular-material.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular-ui-swiper.min.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/moment.js"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular-moment.min.js"></script> -->
	<!-- <script type="text/javascript" src="assets/js/angular-progress-arc.min.js"></script> -->
	<!-- <script type="text/javascript" src="assets/js/datetimepicker.js"></script> -->
	<!-- <script type="text/javascript" src="assets/js/datetimepicker.templates.js"></script> -->
	<!-- <script type="text/javascript" src="assets/js/validation.js?ver=09-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/jquery.easing.min.js?ver=15-12-2022"></script> -->
	<!-- <script type="text/javascript" src="assets/js/scripts.min.js?ver=15-12-2022"></script> -->

	<link rel="stylesheet" type="text/css" href="assets/css/minify_css.css?ver=13-2-2023v.1" />

	<script type="text/javascript" src="assets/js/com.js?ver=13-2-2023v.1"></script>

	<script type="text/javascript" src="app.js?ver=13-2-2023v.1"></script>

	<style>
		body {
			overflow-x: hidden !important;
		}

		.page-view {
			min-height: 100vh;
		}

		.fullpageloader {
			display: block;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 99999999999999;
			background-color: #ffffff;
			transition: opacity ease 0.4s;
			-moz-transition: opacity ease 0.4s;
			-webkit-transition: opacity ease 0.4s;
			-ms-transition: opacity ease 0.4s;
			-o-transition: opacity ease 0.4s;
		}

		.fullpageloader h1 {
			text-align: center;
			font-size: 3rem;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			-moz-transform: translate(-50%, -50%);
			-webkit-transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%);
			-o-transform: translate(-50%, -50%);
			font-weight: 'rubikbold';
			display: flex;
			justify-content: center;
			width: 100%;
			padding: 1rem;
		}

		.fullpageloader.hiddenloader {
			opacity: 0;
			visibility: hidden;
			display: none;
		}

		/*.loading_body_wrapper {
			opacity: 0;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #ffffff;
			z-index: 999999999999;
			visibility: hidden;
		}

		.loading_body {
			opacity: 1;
			visibility: visible;
		} */

		/*animation: 3s linear 1s infinite running slidein;*/
		/* .loading_bar {
			width: 200%;
			height: 6px;
			position: fixed;
			
			top: 0;
			transform: translateX(-100%);
			z-index: 9999999999999;
			background-color: #000000;			
		}

		.loading_bar.active.load_active {
			
			transition: all ease 5s;
			transform: translateX(200%);
		}

		@-webkit-keyframes rotateRound {
			0% {
				-webkit-transform-transform: translateX(-200%);
				-ms-transform: translateX(-200%);
				transform: translateX(-200%);
			}

			100% {
				-webkit-transform-transform: translateX(200%);
				-ms-transform: translateX(200%);
				transform: translateX(200%);
			}
		}

		@keyframes rotateRound {
			0% {
				-webkit-transform-transform: translateX(-200%);
				-ms-transform: translateX(-200%);
				transform: translateX(-200%);
			}

			100% {
				-webkit-transform-transform: translateX(200%);
				-ms-transform: translateX(200%);
				transform: translateX(200%);
			}
		} */
	</style>

	<meta name="facebook-domain-verification" content="t3s56lhj8pef8exdzcwpzm5mj7f2fe" />
</head>

<body ng-controller="MainController"
	ng-class="{'no-scroll-body': view_moreless_toggleF || inquire_popup_toggleF || profile_video_click_f || view_moreless_toggleF || inquire_popup_web_toggleF || career_click_f, 'menu_display' : mobile_menu_toggleF , 'header_color_change_div' : color_changediv_2, 'header_contact_open' : open_contact_dropdown_f, 'mobile_dropdown' : project_detail_dropdown_f}"
	ng-click="close_dropdown_category_get(); close_contact_dropdown();">


			<!-- Google Tag Manager (noscript) -->
			<!-- <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDDL5N8W"
			height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> -->
			<!-- End Google Tag Manager (noscript) -->



	<!-- <div class="fullpageloader">
		<h1>Building Landmarks Since 1998</h1>
	</div> -->

	<div ng-include="'templates/include/header.html?ver=13-02-2023'"></div>
	<div class="page-view">
		<ng-view></ng-view>
	</div>
	<div ng-include="'templates/include/footer.html?ver=13-02-2023'"></div>

	<div class="loading_body_wrapper" ng-class="{'loading_body':page_load_start}">
		<!-- <div class="loading_bar" ng-class="{'load_active': load_start, 'active':page_load_start}"></div> -->
	</div>
	<div ng-if="page_load_start"></div>


	<div class="cookies-declaration-div" ng-class="{'active-cookie' : understant_cookie_f}">
		<div class="small-font-size-div">
			<p>
				We use cookies to improve your experience on our site. <a href="cookie" ng-click="understant_cookie();">
					View our cookie policy.
				</a>
			</p>
		</div>
		<div class="cookies-decration-button" ng-click="understant_cookie();">
			<button>
				I Understand & Agree
			</button>
		</div>
	</div>


<!-- <div class="inquiry_toggle">
	<div class="inquiry_toggle_icon_wrapper" ng-click="inquire_popup_web_toggle()">
		<div class="inquiry_toggle_icon">
			<img src="assets/images/icons/inquire-now-white.svg">
		</div>
	</div>
</div> -->
 

<!-- 
<div class="popup-overlay" ng-class="{'active-popup-overlay': onload_popup_f }" ng-click="inquire_close();"></div>
<div class="popup_wrapper" ng-if="onload_popup_f">
	<div class="close_icon_popup" ng-click="inquire_close();" role="button" tabindex="0">
		<img src="assets/images/close.svg" />
	</div>
	<div class="popup_img ">
		<img src="assets/images/popup/laxmi_courtyard_board.jpg" />
	</div>
</div> -->



</body>

<script type="text/javascript">
    $(document).ready(function(){
        new WOW().init();
    });

	$(document).ready(function () {
		setTimeout(function () {
			$(".fullpageloader").addClass("hiddenloader");
		}, 3000);
	})

	function shareUrlFunAll(value) {
		var title = value.getAttribute("data-title");
		var text = value.getAttribute("data-text");
		var url = value.getAttribute("data-url");

		var shareData = {
			title: title,
			text: text,
			url: url,
		}
		// console.log(shareData, "<><>");

		try {
			navigator.share(shareData)
		} catch (err) {

		}
	}

	$(window).load(function () {
		// alert(screen.width);
		// alert(window.orientation);
		if (window.orientation > 0 && screen.width < 500) {
			$("body").css("opacity", "0").css("visibility", "hidden").css("overflow-y", "hidden");
			// alert("Please rotate your device");
		}
	});
	window.addEventListener("orientationchange", function () {
		if (window.orientation > 0 && screen.width < 500) {
			$("body").css("opacity", "0").css("visibility", "hidden").css("overflow-y", "hidden");
			// alert("mobile");
			// alert(screen.width);
		}
		if (window.orientation > 0 && screen.width > 500) {
			$("body").css("opacity", "1").css("visibility", "visible").css("overflow-y", "visible");
			// location.reload(true);
			// alert("web");
			// alert(screen.width);
		}
	});

	var prev_toggle = 0;
    var $window_toggle = $(window);
    var nav_toggle = $(".inquiry_toggle");
    $window_toggle.on("scroll", function (e) {
        var scrollTop_toggle = $window_toggle.scrollTop();
        if (scrollTop_toggle <= 80) {
            nav_toggle.removeClass("active");
            prev_toggle = 0;
        } else {
            nav_toggle.toggleClass("active", scrollTop_toggle > prev_toggle);
            prev_toggle = scrollTop_toggle;
        }
    });
</script>





<style>

.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 50%);
    z-index: 999999;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    opacity: 0;
    visibility: hidden;
    transition: all ease 0.4s;
}
.popup-overlay.active-popup-overlay {
    opacity: 1;
    visibility: visible;
}
.close_icon_popup {
    position: absolute;
    top: 3px;
    right: 5px;
    width: 1.5rem;
    filter: invert(0);
}

.popup_wrapper {
    position: fixed;
    z-index: 999999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:30vw;
   
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    justify-content: space-between;
    
}
@media only screen and (max-width: 767px) { 
.popup_wrapper {
    position: fixed;
    z-index: 999999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
   
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    justify-content: space-between;
    
}	
}

/* 
.popup_wrapper {
    position: fixed;
    z-index: 9999999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    justify-content: space-between;
} */
</style>
</html>