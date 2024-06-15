<!DOCTYPE html>
<html ng-app="laxmi">

<head>

	<base href="/laxmi/">
	<!-- <base href="/"> -->

	<title ng-bind-template="{{page_title}}">Loading...</title>
	<meta name="revised" content="23/02/2023"/>
	<meta name="description" content="{{page_description}}">
	<meta name="keywords" content="{{page_keywords}}">
	<meta property="og:image" content="{{page_image}}" />
	<meta name="twitter:image" content="{{page_image}}">
	<link rel="shortcut icon" href="{{favicon | trustUrl}}" type="image/x-icon">
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="ScreenOrientation" content="autoRotate:disabled">

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

	<!-- minify css -->
	<link rel="stylesheet" type="text/css" href="assets/css/minify_css.css?ver=30-01-2023-v1" />

	<!-- minify js -->
	<script type="text/javascript" src="assets/js/com.js?ver=30-01-2023-v1"></script>

	<script type="text/javascript" src="app.js?ver=30-01-2023-v1"></script>

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

		.loading_body_wrapper {
			opacity: 0;
			/* transition: opacity ease 0.6s; */
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
		}

		/*animation: 3s linear 1s infinite running slidein;*/
		.loading_bar {
			width: 200%;
			height: 6px;
			position: fixed;
			/*left: 0;*/
			top: 0;
			transform: translateX(-100%);
			z-index: 9999999999999;
			background-color: #000000;
			/*display: none;*/
			/*animation: rotateRound 6s ease-in-out both infinite;*/
		}

		.loading_bar.active.load_active {
			/*opacity: 1;*/
			/*display: block;*/
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
		}
	</style>

</head>

<body ng-controller="MainController"
	ng-class="{'no-scroll-body': view_moreless_toggleF || inquire_popup_toggleF || profile_video_click_f || view_moreless_toggleF || inquire_popup_web_toggleF || career_click_f, 'menu_display' : mobile_menu_toggleF , 'header_color_change_div' : color_changediv_2, 'header_contact_open' : open_contact_dropdown_f, 'mobile_dropdown' : project_detail_dropdown_f}"
	ng-click="close_dropdown_category_get(); close_contact_dropdown();">

	<div class="fullpageloader">
		<h1></h1>
	</div>

	<div ng-include="'templates/include/header.html'"></div>
	<div class="page-view">
		<ng-view></ng-view>
	</div>
	<div ng-include="'templates/include/footer.html'"></div>

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

	$(window).load(function () {
		if (window.orientation > 0 && screen.width < 500) {
			$("body").css("opacity", "0").css("visibility", "hidden").css("overflow-y", "hidden");
		}
	});
	window.addEventListener("orientationchange", function () {
		if (window.orientation > 0 && screen.width < 500) {
			$("body").css("opacity", "0").css("visibility", "hidden").css("overflow-y", "hidden");
		}
		if (window.orientation > 0 && screen.width > 500) {
			$("body").css("opacity", "1").css("visibility", "visible").css("overflow-y", "visible");
		}
	}); 
</script>

</html>