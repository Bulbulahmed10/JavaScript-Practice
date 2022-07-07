/*
--------->>> Length Converter Decimal to Binary <<<---------
*/

// selecting DOM 

const result = document.getElementById('result');

const submit = document.getElementById('submit');
// input validation

function binary (e) {
  e.preventDefault();
  const num = document.getElementById('number').value;
  
  if(num === '') {
    alert('Please Enter A Number')
  }else if (num < 0) {
    alert('Please Enter A Positive Number')
  } else {
    result.style.visibility = 'visible';
  }
  //converting to binary
  let binary = Number(num).toString(2)
  result.innerHTML = binary;
}

submit.addEventListener('click', binary);
