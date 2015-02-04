var LocalStorageStore = function(successCallback, errorCallback) {

    this.save = function(item,data, callback) {
		window.localStorage.setItem("userdetail", JSON.stringify(users));
     
        
        callLater(callback, results);
    };
	

   this.save = function(item, callback) {
	        var employees = JSON.parse(window.localStorage.getItem("employees"));
        
        callLater(callback, results);
    }
   // window.localStorage.setItem("userdetail", JSON.stringify(reservations));
    var user = JSON.parse(window.localStorage.getItem("userdetail"));
	if($.isEmptyObject(user)){
	window.localStorage.setItem("userdetail", JSON.stringify(users));
	};
	
   

    callLater(successCallback);

}

var LocalStorage= function() {

    this.save = function(user,data) {
		window.localStorage.setItem(item, JSON.stringify(data));
     
    };
   this.get = function(item) {
	       return JSON.parse(window.localStorage.getItem(item));
        
    
    }
}