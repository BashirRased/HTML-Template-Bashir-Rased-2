/**
  
* Template Name: Bashir Rased - Freelancer HTML Portfolio Template
* Version: 1.0.3
* Author: Bashir Rased
* Author URL: www.bashir-rased.com
* Email: info@bashir-rased.com
* First Release: 09 September 2019

**/

/*============================
Table of JS Content Start Here
==============================
	01.	Preloader
	02. Nice Scrollbar
	03. Header Menu
		3.1 Mobile Menu
			3.1.1 Mobile Menu Toggle
			3.1.2 Menu Resize Open and Close
		3.2 Active Menu
			3.2.1 Active Menu Click Highlight
			3.2.2 Active Menu Scroll Highlight			
		3.3 Click Menu Going Smoothly
		3.4 Header Fixed Menu
	04. Skillbar Scroll Effect
	05. Portfolio Section Effect
		5.1 Isotope Masonry
		5.2 Isotope Filtering
		5.3 Active Filter Menu Highlight
		5.4 FancyApps 3 Plugin Active
	06. Scroll To Top Button
		6.1 Scroll To Top Button Hide and Show
		6.2 Scroll To Top Button Click Effect
============================
Table of JS Content End Here
==========================*/

(function(jQuery){
	'use strict';
	
	/*=============================
	01. Preloader jQuery Start Here
	=============================*/
	jQuery(window).on("load",function (){
		jQuery(".preloader").delay(100).fadeOut(),
		setTimeout(function(){jQuery("#preloader").addClass("loading-end"),
		setTimeout(function(){jQuery("#preloader").hide()},1500)},800)
	});
	/*===========================
	01. Preloader jQuery End Here
	===========================*/

	jQuery(document).ready(function(){
		
		/*==================================
		02. Nice Scrollbar jQuery Start Here
		==================================*/
		jQuery("body").niceScroll({
			cursorwidth:8,
			cursorcolor:'#007bff',
			cursorborder: "none",
			cursorborderradius:15,
			zindex: 9999,
			autohidemode: false,
			cursorminheight:200,
		});
		/*================================
		02. Nice Scrollbar jQuery End Here
		================================*/
		
		/*===============================
		03. Header Menu jQuery Start Here
		===============================*/
			
			/*===== 3.1 Mobile Menu Start Here =====*/
			
				/* 3.1.1 Mobile Menu Toggle */
				jQuery(".rb-mobile-menu-icons").click(function(){
					jQuery(".rb-desktop-menu-toggle").slideToggle();
				});
				/* End */
				
				/* 3.1.2 Menu Resize Open and Close */
				jQuery(window).resize(function(){
					var RBMenu = jQuery(window).width();
					
					if(RBMenu > 992){
						jQuery(".rb-desktop-menu-toggle").show();				
					}
					else{
						jQuery(".rb-desktop-menu-toggle").hide();			
					}
				});
				/* End */
				
			/*===== 3.1 Mobile Menu End Here =====*/
			
			/*===== 3.2 Active Menu Start Here =====*/
			
				/* 3.2.1 Active Menu Click Highlight */
				var sidenav = jQuery('.rb-header-menu a');
				jQuery(sidenav).on('click', '.rb-header-menu a', function() {
					jQuery(this).addClass('rb-header-active-menu').siblings().removeClass('rb-header-active-menu');			
				});		
				/* End */
				
				/* 3.2.2 Active Menu Scroll Highlight */
				jQuery(window).on('scroll', function() {
					jQuery('.rb-scroll-menu').each(function() {
						if (jQuery(window).scrollTop() >= jQuery(this).position().top - 50) {
							var id = jQuery(this).attr('id');
							jQuery('.rb-header-menu a').removeClass('rb-header-active-menu');
							jQuery('.rb-header-menu a[href*=\\#' + id + ']').addClass('rb-header-active-menu');
						}
					});
				});
				/* End */
			
			/*===== 3.2 Active Menu End Here =====*/
			
			/*===== 3.3 Click Menu Going Smoothly Start Here =====*/
			jQuery('a.smooth-scroll').on("click", function(e) {
				var anchor = jQuery(this);
				jQuery('html, body').stop().animate({
					scrollTop: jQuery(anchor.attr('href')).offset().top
				}, 1000);
				e.preventDefault();
			});
			/*===== 3.3 Click Menu Going Smoothly End Here =====*/
			
			/*===== 3.4 Header Fixed Menu Start Here =====*/
			jQuery(window).scroll(function(){
				if (jQuery(window).scrollTop() >= 50) {
					jQuery('.rb-header-menu-area').addClass('rb-header-fixed');
				}
				else {
					jQuery('.rb-header-menu-area').removeClass('rb-header-fixed');
				}
			});
			/*===== 3.4 Header Fixed Menu End Here =====*/			
			
		/*=============================
		03. Header Menu jQuery End Here
		=============================*/
		
		/*==========================================
		04. Skillbar Scroll Effect jQuery Start Here
		==========================================*/
		jQuery('.rb-skills-bar').each(function() {
			jQuery(this).find('.rb-skills-bar-animation').animate({ width: jQuery(this).attr('data-percent') }, 3000);
		});
		/*========================================
		04. Skillbar Scroll Effect jQuery End Here
		========================================*/
		
		/*============================================
		05. Portfolio Section Effect jQuery Start Here
		============================================*/
		
		/*===== 5.1 Isotope Masonry Start Here =====*/
		var jQuerygrid = jQuery('.rb-portfolio').isotope({
		  itemSelector: '.rb-portfolio-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: 1
		  }
		});
		/*===== 5.1 Isotope Masonry End Here =====*/
		
		/*===== 5.2 Isotope Filtering Start Here =====*/
		jQuery('.rb-portfolio-btn-area ul').on( 'click', 'li', function() {
		  var filterValue = jQuery(this).attr('data-filter');
		  jQuerygrid.isotope({ filter: filterValue });
		});
		/*===== 5.2 Isotope Filtering End Here =====*/
		
		/*===== 5.3 Active Filter Menu Highlight Start Here =====*/
		jQuery('.rb-portfolio-btn-area li').on('click', function(event){
			jQuery(this).siblings('.rb-portfolio-active').removeClass('rb-portfolio-active');
			jQuery(this).addClass('rb-portfolio-active');
			event.preventDefault();
		});
		/*===== 5.3 Active Filter Menu Highlight End Here =====*/
		
		/*===== 5.4 FancyApps 3 Plugin Active Start Here =====*/
		jQuery('[data-fancybox]').fancybox({
			  protect: true,
			  buttons : [
				'zoom',
				'thumbs',
				'close'
			  ],
			  slideShow: {
				autoStart: true,
				speed: 1200
			 },
			 transitionEffect: "tube",
			 transitionDuration: 1500,
		});
		/*===== 5.4 FancyApps 3 Plugin Active End Here =====*/
		
		/*==========================================
		05. Portfolio Section Effect jQuery End Here
		==========================================*/
		
		/*========================================
		06. Scroll To Top Button jQuery Start Here
		========================================*/
		
		/*===== 6.1 Scroll To Top Button Hide and Show Start Here =====*/
		jQuery(window).scroll(function(){		  
		  var RBScroll = jQuery(window).scrollTop();		  
		  if( RBScroll > 100 ){
			  jQuery(".rb-scroll-to-top-area").fadeIn();
		  }else {
			  jQuery(".rb-scroll-to-top-area").fadeOut();
		  }
		});
		/*===== 6.1 Scroll To Top Button Hide and Show End Here =====*/
		
		/*===== 6.2 Scroll To Top Button Click Effect Start Here =====*/
		jQuery(".rb-scroll-to-top-area").on('click', function(){
			jQuery("html, body").animate({'scrollTop' : 0}, 500);
			return false;
		});
		/*===== 6.2 Scroll To Top Button Click Effect End Here =====*/
		
		/*======================================
		06. Scroll To Top Button jQuery End Here
		======================================*/
		
	});

}(jQuery));