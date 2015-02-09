	 var handleLoginForm = function () {
            jQuery('.signup-form').hide();

        jQuery('#forget-password').click(function () {
            jQuery('.login-form').hide();
            jQuery('.signup-form').hide();
            jQuery('.forget-form').show(200);
        });
	    jQuery('#signup-btn').click(function () {
            jQuery('.login-form').hide();
            jQuery('.forget-form').hide();
           jQuery('.signup-form').show(200);
        });



        jQuery('#forget-btn, #back-btn').click(function () {
            jQuery('.login-form').slideDown(200);
            jQuery('.forget-form').slideUp(200);
        });
    };
	 

$('#saveSignUp-btn').click(function(){
console.log(	$('#signup_username').val() ) ;
	// var formData= $('#signup-form')[0].serializeArray(); 

	// console.log(formData);


	var newUser= {};
	newUser['username'] = $('#signup_username').val();
	console.log(newUser);


	/// after validate

	LocalStorage.save('user',newUser); 

})
var App = {
	init: function ()
	{
		handleLoginForm();
	},
	call : function()
	{

	}


};
	 
	 
	 
	 
