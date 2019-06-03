



function insertItems() {
	for (let i = 0; i < items.length; i++) {
		var member = '<h3>' + items[i].name + '<\/h3><br>';
			member += '<img src=\"' + items[i].pic +'\" class=\"photo\">';
			member += '<div class=\"price\">' + items[i].price + '<\/div>';

		document.getElementsByClassName('team_member')[i].innerHTML = member;
	}
}