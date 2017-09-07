let days = ["M", "T", "W", "Th", "F", "S", "Su"]
let theWeek = days.map(function(a){ let thi = {}; thi[a] = []; return thi })

function calcStretch(stretchTo){

	let week = (typeof(stretchTo) === "string"? stretchTo.length : stretchTo)
	console.log(typeof(stretchTo))
	let calcDist = function(leng, sym) { let len = leng, unit = sym; 

				for(let i = 0; i < len; i++){
		
					sym += unit; 
					
			
					}
					return sym
				}
	return calcDist.bind(null, week)

}

function deepClone(obje){
	return JSON.parse(JSON.stringify(obje))
}
/*
function displayWeek(){
	let week =  "|  M  |" + "  T  |" + "  W  |" + "  Th  |"+ "  F  |"+"  S  |"+ "  Su  |"
	let disp = calcStretch((week))("-")
	let redisp = disp + "\n" + week + "\n" + disp
	function addItem(){

	}
	console.log(redisp)

}
*/
//Current working version of function

function displayWeek(state){
    let daysOfWeek = deepClone(state); 
    let dayNames = takeKeys(daysOfWeek)
    let itemNum = mapObjArrLen(days).checkArr
    let week =  "|  M  |" + "  T  |" + "  W  |" + "  Th |"+ "  F  |"+"  S  |"+ "  Su |"
    daysOfWeek[0].M.push(daysOfWeek[0].M.length)
    let items = calcStretch((6))("| " + " |").split("||")
    let reter = items.map(function(a, b){ var len; for(x in a){ console.log(a)}; return len} )
    let dispWeek =  mapAndRemove(dayNames)
    let dispItems = mapAndRemove(itemNum())
    let divi = calcStretch((week))("-")
    let redisp = divi + "\n" + dispWeek + "\n" + divi + "\n" + divi + "\n" + dispItems;
	
    function addItem(day){
		return daysOfWeek.filter(function(a){ return dayNames})
    }
    
    console.log(redisp);

}


//utils:
function takeKeys (obj) { 
		let mapped = Object.keys(obj).map(function(key){ 
		var name; 
		for(x in obj[key]){ 
			name = x;
		}; 
		return name}) 
		return mapped;
} 

function mapObjArrLen(obj){ 
	let remState = obj;
	return { checkArr: function(){ return remState.map(objArLengths) } }
                           
}

function mapNLSpace(arr, sym){
	return "|" + arr.map(function(a){ return "  " + a + calcStretch(0)("  |")})
}
undefined
function removeCommas(arr){
	return arr.split("").filter(function(a){ return a !== ","}).join("")
}

function mapAndRemove(arr){
	return removeCommas((mapNLSpace(arr)))
}
function objArLengths (obj){ var len; for(x in obj){ len = obj[x].length}; return len }
//*/

displayWeek(theWeek);
