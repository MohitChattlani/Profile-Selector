$(document).ready(function(){
	$('#select').change(function(){

		if (this.value=="")
			return;
		var name=this.value;
		//creating the ajax object
		$.ajax({
			//url to make requests to 
			url: name+'.html' ,
			//requests type ie GET or POST
			type: 'GET' ,
			//Type of data to expect
			dataType:'html'
		})
		//if requests success 
		.done(function(html){
			console.log('Success');
			//getting at div tag with id infoid and updating its html to whatever the response we get by making requests
			$('#infoid').html(html);
		})
		//if requests fail
		.fail(function(xhr,status,errorThrown){
			alert('there was a problem');
			console.log('Error'+errorThrown);
			console.log('Status'+status);
			console.dir(xhr);
		})
		//whether requests fail or not
		.always(function(xhr,status){
			console.log('Request made');
		})	

	});
});