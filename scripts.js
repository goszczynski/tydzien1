(function($) {
	$(document).ready(function(){

		// Zadanie 2, selektory w jQuery
		var divGrid = $(".grid.grid-12").addClass("red");
		var links = $("#nav a[href^='http']");
		links.addClass("red");
		var inputChecked = $("input:checkbox, input:radio").not(":checked");		
		var firstParagraph = $("#text p:first:empty");
		var paginationItem = $(".pagination-item").not("span");
		

		
		// Zadanie 3, pokazywanie elementów i animacje
		var toggler = $(".toggler"),
				nav = $("#nav");
		toggler.on("click", function() {
			nav.slideToggle();
		});



		//Zadanie 4, dynamiczne tworzenie elementów
		var button = $(".button-add");
		button.on("click", function(e){
			e.preventDefault();
			input = $("#input-name");
			if(input.val() === ""){	   
              input.toggleClass("border-error");
			} else{
			  newLi = $("<li>").text(input.val());
			  newLi.appendTo('.wynik');
			};
			input.val("");
		});



		//Zadanie 5, AJAX i JSON
		var buttonAjax = $("#button-ajax"),
				output = $("#output");
		buttonAjax.on("click", function(e){  
        	$.getJSON("https://jsonplaceholder.typicode.com/users", function(data) {
	            $.each(data, function(i,val){
	                var name = val.name,
	                    username = val.username,
	                    email = val.email,
	                    phone = val.phone,
	                	li = $("<li></li>",{
	                		text:name + ",  " + username + ",  " + email + ",  " + phone
	                		});
	            li.appendTo("output");
	            });
        	});
        });      
	});
})(jQuery);