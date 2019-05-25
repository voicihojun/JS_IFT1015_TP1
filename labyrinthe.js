//labyrinthe : tp1 of ift1015 class.
// on the site named 'codeboot.org', we can put and test the source code.

function iota(n) {
	var tab = [];
	for(var i=0; i < n; i++) {
		tab.push(i);
	}
	return tab;
}
// if the n is negative, error message! 


function contient(tab, x) {
	return tab.includes(x);
}

function ajouter(tab, x) {
	if(!tab.includes(x))
		tab.push(x)
	return tab;
}

function retirer(tab, x) {
	if(tab.includes(x)) 
  	tab.splice(tab.indexOf(x), 1);
	return tab;
}

function voisins(x, y, nx, ny) {
	var n,e,s,o;
    var result = [];
	n = x + y * nx;
	e = 1 + x + y * (nx + 1);
	s = x + (y + 1) * nx;
	o = x + y * (nx + 1);
	//e,s,o 는 이 함수에서는 필요없음
	
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
    return(result);
}

function laby(nx, ny, pas) {

    function returnN(x, y) {return x + y * nx;}
    function returnE(x, y) {return 1 + x + y * (nx + 1);}
    function returnS(x, y) {return x + (y + 1) * nx;}
    function returnO(x, y) {return x + y * (nx + 1);}

	var mursH = [], mursV = [], cave = [], front = [];
	var cavite, x, y, voisin;
	mursH = iota(nx * (ny+1));
	mursV = iota((nx+1) * ny);
	print("mursV = " + mursV);
	print("mursH = " + mursH);

	// randomX = Math.floor(Math.random() * (nx+1));
	// randomY = Math.floor(Math.random() * (ny+1));
	// 일단 편하게 코딩 하기 위해 임으로 (3,1)을 정함

	x = 3; y = 1;
	cavite = x + y * nx;
	// caviteCoordonnees = [x, y];
	
	for(var i=0; i < nx*ny; i++) {
		if(i == 0) {
			// for the first time, we dont need to compare the value inside of array. just put!
			ajouter(cave, cavite); 
			voisin = voisins(x, y, nx, ny);
			for(var j=0; j< voisin.length; j++) {
				ajouter(front, voisin[j]);
			}
		} else {
			var frontRandomNum = Math.floor(Math.random() * front.length);
			var newCavite = front[frontRandomNum];

			voisin = voisins(newCavite % nx, parseInt(newCavite/nx), nx, ny);
			for(var j=0; j< voisin.length; j++) {
				if(contient(cave, voisin[j])) {
					cavite = voisin[j];
				}			
			}

			ajouter(cave, front[frontRandomNum]); //add one from the front array to cave array
			retirer(front, front[frontRandomNum]); //delete the one added to the cave from the front array

			var diff = cavite - cave[cave.length - 1];
			
			x = cavite % nx;
			y = parseInt(cavite/nx);

			if(diff == nx) {
				retirer(mursH, returnN(x,y, nx));
			} else if(diff == -nx) {
				retirer(mursH, returnS(x,y,nx));
			} else if(diff == 1) {
				retirer(mursV, returnO(x,y,nx));
			} else if(diff == -1) {
				retirer(mursV, returnE(x,y,nx));
			} else {
				//에러 메세지
			}

			voisin = voisins(newCavite % nx, parseInt(newCavite/nx), nx, ny);

			for(var j=0; j< voisin.length; j++) {
				if(!contient(cave, voisin[j]) && 
					!contient(front, voisin[j])) {
					ajouter(front, voisin[j]);	
				}
				
			}

		} // else 

	} // for

	print("mursV = " + mursV);
	print("mursH = " + mursH);
	print("cavite : " + cavite);
	print("new Cavite : " + newCavite);
	print("cave : " + cave);
	print("cave length : " + cave.length);
	print("front : " + front);
	
} // function laby


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// I need to make a function to draw the labyrinthe on the codeboot.org
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



// laby(10,4,20);


