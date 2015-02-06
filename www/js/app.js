	 var handleLoginForm = function () {

        jQuery('#forget-password').click(function () {
            jQuery('.login-form').hide();
            jQuery('.forget-form').show(200);
        });

        jQuery('#forget-btn, #back-btn').click(function () {
            jQuery('.login-form').slideDown(200);
            jQuery('.forget-form').slideUp(200);
        });
    };
	 


var App = {
	init: function ()
	{
		handleLoginForm();
	},
	call : function()
	{

	}


};
	 
	 
	 
	 
