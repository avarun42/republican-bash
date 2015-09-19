
		function init(){
		}

		var UP_KEY = 38;
		var SPACE_KEY = 32;
		var keys = {};
		
		function showValue(val) {
			//document.getElementById() how you refer to an id. For right now, just believe that this works. Soon you will understand how it works.
			document.getElementById('display').innerHTML = val;
		}
			
		init();
		jump();

		var jump(){
			if(keys[UP_KEY]){
				$('img.trumphead').animate({top:'+=20px'},200,function(){

				})
			}
		}