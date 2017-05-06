rightFit.Pages.Index = (function(){

	function init() {
		console.log('index init');
		
	}

	function login(){
		console.log('login');
	}

	return{
		init: init,
		login: login
	}

})();

rightFit.Pages.Index.init();