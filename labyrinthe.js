//labyrinthe : tp1 of ift1015 class.
// on the site named 'codeboot.org', we can test the source code.

function iota(n) {
	var tab = [];
	for(var i=0; i < n; i++) {
		tab.push(i);
	}
}
// if the n is negative, error message! 
iota(5);

function contient(tab, x) {
	print(tab.includes(x));
}

function ajouter(tab, x) {
	if(tab.includes(x)) {
		print(tab);
	} else {
		print(tab.push(x));
	}
}

function retirer(tab, x) {
	if(tab.includes(x)) {
		var ind = tab.indexOf(x);
        tab.splice(ind, 1);
		print(tab);
	} 
	print(tab);
}










