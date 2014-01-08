var ff_url = 'http://www.fictfact.com';

var fictfact = (function(){
	return {
		getBooksReading : function(userid, callback){
			
			var request = $.ajax({
				url: ff_url + '/Ajax/GetBookListByStatus/'+ userid +'/2?callback=' + callback,
			    type: 'GET',
			    dataType: 'jsonp',
				jsonpCallback: callback
			});
			
		}
	}
	
}());
