// Javascript substitute for $( document ).ready()
window.onload= function() {
    console.log( "ready!" );

}

function showSizeFilter(y){
		var x = document.getElementById("size-filters");

		console.log("expand filters for size!");


	    if (y.innerHTML === "Select") {
	    	 x.style.display = "block";        
	        y.innerHTML="Hide";
	        console.log("change to Hide!");

	    } else if (y.innerHTML === "Hide"){
	       	x.style.display = "none";
	       	y.innerHTML="Select";
	        console.log("change to Show!");
	    }

	}


function showShapeFilter(y){
		var x = document.getElementById("shape-filters");

		console.log("expand filters for shape!");


	    if (y.innerHTML === "Select") {
	    	 x.style.display = "block";        
	        y.innerHTML="Hide";
	        console.log("change to Hide!");

	    } else if (y.innerHTML === "Hide"){
	       	x.style.display = "none";
	       	y.innerHTML="Select";
	        console.log("change to Show!");
	    }

	}


function customizePillow(y) {
	    var x = document.getElementById("custom-request-section");

	    console.log( "ready to customizePillow!" );

	    if (y.value == 1) {

	        x.style.display = "block";
	    } else {
	        x.style.display = "none";
	    }
	}