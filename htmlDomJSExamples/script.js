$(function(){

	$(".object-list").on("click", ".addButton", function(){
		$(this).parent().find("span:last-child").html($("<input/>", {
			class : "newEl"
		}));
	});
	
	$(".myList").on("keyup", ".newEl", function(e){
		var code;
		code = e.keyCode || e.which;
		if( code.toString() == 13 ) {
			$(".object-list").append("<li>"+$(this).val()+"<button class=\"addButton\">+</button><span></span></li>");
		}
	});
	
	$("#myForm").on("submit", function(e){
		var valid = true,
			messages = [];
		$(".form-input").each(function(){
			if(!$(this).val()) {
				valid = false;
				messages.push("field " +$(this).attr("name")+" is requierd");
			};
		});
		if($("[name=pwd]").val() != $("[name=confirm-pwd]").val()) {
			messages.push("passwords do not match");
			valid = false;
		}
		if(!$("[name=email]").val().match(/^(?:[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6})?$/i)) {
			messages.push("email is invalid");
			valid = false;
		}
		if(!valid) {
			e.preventDefault();
			alert(messages.join(". "));
		}
		
	})
});
	

