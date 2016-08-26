// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-9039292-1', 'auto');
ga('send', 'pageview');
// End Google Analytics

window.onload = function() {
	var head = document.getElementsByTagName('head')[0];
	var css = document.createElement('style');
	css.innerText = '.bannerlogo { position: relative; }'
		+ '.search-form { bottom: 0; position: absolute; width: 100%; }'
		+ '.search-form > form { float: right; display: block; margin: 10px 25px; width: 25%; }'
		+ '.search-form input[name=q] { font-size: 3em; width: 100%; }'
		+ '@media (max-width: 600px) { .search-form > form { width: 75%; } }';
	head.appendChild(css);

	var isSearchHtml = window.location.pathname.substr(-11) === 'search.html';
	if (!isSearchHtml) {
		var bannerLogo = document.getElementsByClassName('bannerlogo')[0];
		bannerLogo.innerHTML = '<div class="search-form">'
			+ '<form action="search.html" method="get">'
			+ '<input type="search" name="q" placeholder="Search" />'
			+ '</form></div>';
	}
};