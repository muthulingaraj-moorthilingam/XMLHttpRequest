document.getElementById('asynchronous').addEventListener("click",asyn);

 function asyn(event){

 	 var asynchronous_request = new XMLHttpRequest();//constructor initilize an Xmlhttprequest
		//initilize a newly created request
		asynchronous_request.open("GET","https://jsonplaceholder.typicode.com/posts/1",true);////in asynchronous the open methode third argument true or by default is true

		asynchronous_request.send(null); // sent the request to server.
		asynchronous_request.onload=function(event){//typeof event
		 		console.log(event);
		 		//here check readystate and ahttp status
		 		if(asynchronous_request.readyState === 4 && asynchronous_request.status === 200){
		 			console.log(asynchronous_request.responseText);
		 			console.log(asynchronous_request.getAllResponseHeaders());
		 		}

		 	}
		 	// responseText is return from servar its String value.
 }