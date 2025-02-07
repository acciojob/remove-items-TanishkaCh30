let btn = document.getElementById("button");
let select = document.getElementById("colorSelect");




function deleteItems(){

	let selectedOption = select.selectedIndex;
	if(selectedOption!==-1){
		select.remove(selectedOption);
	}
}


btn.addEventListener("click" , deleteItems);
