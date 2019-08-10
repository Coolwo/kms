function clearInput(){
	var r = confirm("Are you sure?");
    if (r == true) {
        var inputs = document.getElementById("hpInputs");
		inputs.reset();
    }
	
	
}