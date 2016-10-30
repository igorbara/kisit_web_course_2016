var socket = io('http://localhost:3000');

		
socket.on("productAdded", function(data){
	console.log(data);
});

socket.on("hi", function(){

})

$(function(){
	$(".js_add-to-cart").on("click", function(){
		socket.emit("addProduct", {
			pid : $(this).data("productId")
		});
	});
})

