rightFit.User = (function(){

	var userAccount;

	return {
		checkLogin: function(){
			var access_token = localStorage.getItem("access_token");

			if(access_token && access_token != '' && access_token != undefined){
				//mainView.router.loadPage('pages/dashboard.html');
				rightFit.Router.goPage('dashboard.html');
			}else{
				mainView.router.loadPage('index.html');
				//rightFit.Router.goPage('index');
			}
		},

		getCurrentUser: function getCurrentUser() {
            return userAccount;
        },

        login: function(email,password){
        	return new Promise(function(resolve,reject){
	        	$$.ajax({
					url: 'http://localhost:3000/api/users/login',
					method: 'post',
					dataType: 'json',
					data: {email:email,password:password},
					beforeSend: function(){
						console.log('validate data');
					},
					error: function(xhr, status){
						console.log('error');
						console.log(xhr);
						console.log(status);
						reject( new Error( 'Could not log in.'));
						return false;
					},
					success: function(data, status, xhr){
						console.log('success');
						console.log(data);
						console.log(xhr);
						console.log(status);

						localStorage.setItem("access_token", data.id);
						
						//return true;
						resolve();
					}
				});
	        });	
        },

        logOut: function(){
        	return new Promise(function(resolve,reject){
	    		localStorage.removeItem('access_token');

	    		resolve();
    		});
        }


	}

})()