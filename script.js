let btn = document.getElementById("button");
let select = document.getElementById("colorSelect");

let options = select.options;


function deleteItems(){
	let selectedOption = options[select.selectedIndex];
	if (selectedOption) {
    colorSelect.remove(selectedOption.index);
}
	
}


btn.addEventListener("click" , deleteItems);
