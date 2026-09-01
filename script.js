function trailingZeros(n) {
	let count = 0;
	while(n>0){
		n = Math.Floor(n/5);
		count += n;
	}
	return count;
  //your JS code here. If required.
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
