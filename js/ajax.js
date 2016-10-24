$(document).ready(function(){
	$('#select').change(function(){

		if (this.value=="")
			return;
		//creating the ajax object
		var ajax= new XMLHttpRequest();
		
		// to check if the page has completed loading,if it does update the page
		ajax.onreadystatechange=function(){

			//conditions to check whether the page has loaded
			if(ajax.status==200 && ajax.readyState==4)
			{
				//Get div and update it whatever response from http request
				$('#infoid').html(ajax.responseText);
			}
		};
		//making a request to a particular page and sending it
		ajax.open('GET',this.value +'.html',true);
		ajax.send();
	});
});