var fictfact = (function(){
	return {
		getBooksReading : function(userid, callback){
			
			var request = $.ajax({
				url: 'http://www.fictfact.com/Ajax/GetBookListByStatus/'+ userid +'/2?callback=' + callback,
			    type: 'GET',
			    dataType: 'jsonp',
				jsonpCallback: callback
			});
			
		}
	}
	
}());
