$(function () { //es el mateix que document.addEventListener("DOMContentLoaded"...)

	//equivalent a document.querySelector("#navbarToggle").addEventListrener("blur",...)
	$("#navbarToggle").blur(function (event){
		var screenwidth = window.innerWidth;
		if (screenwidth < 768){
			$("#collapsable-nav").collapse('hide');
		}
	});
	  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});
(function (global) {

// var dc = {};

// var homeHtml = "snippets/home-snippets.html";

// // Convenience function for inserting innerHTML for 'select'
// var insertHtml = function (selector, html) {
//   var targetElem = document.querySelector(selector);
//   targetElem.innerHTML = html;
// };

// // Show loading icon inside element identified by 'selector'.
// var showLoading = function (selector) {
//   var html = "<div class='text-center'>";
//   html += "<img src='imatges/ajax-loader.gif'></div>";
//   insertHtml(selector, html);
// };

// // On page load (before images or CSS)
// document.addEventListener("DOMContentLoaded", function (event) {

// // On first load, show home view
// showLoading("#main-content");
// $ajaxUtils.sendGetRequest(
//   homeHtml,
//   function (responseText) {
//     document.querySelector("#main-content")
//       .innerHTML = responseText;
//   },
//   false);
// });


// global.$dc = dc;

})(window);
