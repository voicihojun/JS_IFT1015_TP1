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

function voisins(x, y, nx, ny) {
	var n,e,s,o;
    var result = [];
	n = x + y * nx;
	e = 1 + x + y * (nx + 1);
	s = x + (y + 1) * nx;
	o = x + y * (nx + 1);
	
    if (n < nx) {
    	if(n%nx == 0) {
            result.push(n+1);
            result.push(n+nx);    
        } else if(n%nx == nx -1) {
		    result.push(n-1);
    		result.push(n+nx);
        } else {
		    result.push(n-1);
    		result.push(n+1);
    		result.push(n+nx);
        }
    } else if(n >= nx*(ny-1)) {
    	if(n%nx == 0) {
    		result.push(n-nx);
            result.push(n+1);
        } else if(n%nx == nx -1) {
    		result.push(n-nx);
            result.push(n-1);
        } else {
            result.push(n-nx);
		    result.push(n-1);
    		result.push(n+1);
        }
    } else if(n % nx == 0) {
    	result.push(n-nx);
    	result.push(n+1);
    	result.push(n+nx);
    } else if(n % nx == nx-1) {
    	result.push(n-nx);
    	result.push(n-1);
    	result.push(n+nx);
    } else {
    	result.push(n-nx);
    	result.push(n-1);
    	result.push(n+1);
    	result.push(n+nx);
    }
    print(result);
}







