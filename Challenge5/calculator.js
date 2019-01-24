// Here, you will be using HTML, CSS, and JS, where you will build a calculator that can take in two values and, based on the button click, you would be able to display the results below.



// parseFloat parses its argument, and returns a floating point number. If it encounters a character other than a sign (+ or -), numeral (0-9), a decimal point, or an exponent, it returns the value up to that point and ignores that character and all succeeding characters.
function calc()
{
	let n1 = parseFloat(document.getElementById('n1').value);
	let n2 = parseFloat(document.getElementById('n2').value);
	
	var oper = document.getElementById('operators').value;
	
	if(oper === '+')
	{
		document.getElementById('result').value = n1+n2;
	}
	
	if(oper === '-')
	{
		document.getElementById('result').value = n1-n2;
	}
	
	if(oper === '/')
	{
		document.getElementById('result').value = n1/n2;
	}
	
	if(oper === 'X')
	{
		document.getElementById('result').value = n1*n2;
	}
}