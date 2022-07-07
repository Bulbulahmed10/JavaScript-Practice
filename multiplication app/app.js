const fistInput = document.getElementById('fistInput');
const secondInput = document.getElementById('secondInput');
const result = document.getElementById('result');
const resultShow = document.getElementById('resultShow');


result.addEventListener('click', function(e) {

  e.preventDefault();
 const fistInputPaseInt = parseInt(fistInput.value);
 const secondInputPaseInt = parseInt(secondInput.value);

  if(fistInputPaseInt === '' && secondInputPaseInt == ''){

    alert('Hello world')
  }else{

    for (let i = 1; i <= secondInputPaseInt; i++) {
     const finalResult = i * fistInputPaseInt;
     const secondInputPaseInt = i ;

     createElement(fistInputPaseInt, secondInputPaseInt, finalResult)
}


}    
});
function createElement(tdOne, tdTwo, tdThree){
     
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');

  const td1Value = document.createTextNode(tdOne);
  const td2Value = document.createTextNode(tdTwo);
  const td3Value = document.createTextNode(tdThree);
  
  td1.appendChild(td1Value);
  td2.appendChild(td2Value);
  td3.appendChild(td3Value);

 tr.appendChild(td1);
 tr.appendChild(td2);
 tr.appendChild(td3);

 resultShow.append(tr)
 

} 