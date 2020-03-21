document.getElementById('synchronous').addEventListener("click",sync);

function sync(){
	var synchronous_request = new XMLHttpRequest();

	synchronous_request.open("GET","https://reqres.in/api/users/2",false);
	//in synchronous methode use in open()methode third argument "false"
	//other wisse its working to asynchronous methode.

	synchronous_request.send();	
	
	//synchronous_request.onload=function(event){
		/*console.log(event);//typeof event
		 	console.log(synchronous_request.responseType);
		 	console.log(synchronous_request.responseText);
		 	console.log(synchronous_request.readyState);
		 	console.log(synchronous_request.status);
		 	console.log(synchronous_request.responseURL);
		if(synchronous_request.readyState === 4){*/
			//if(synchronous_request.status === 200){
				console.log(synchronous_request.responseText);
			//}
		//}
	//}
}