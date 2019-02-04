let btn = document.querySelector("button");
let inp = document.querySelector("input");
btn.addEventListener('click', function(){
  let val = inp.value;
  fetch(`https://api.apixu.com/v1/current.json?key=94b14d7847ed4430b5c83532192101&q=${val}`)
  .then(function(data){
    return data.json();
  })
  .then(function(data){
    let a = data.current.temp_c;
     let b = data.location.name
    let template = `
      <div>Temperature: ${a}℃</div>
      <div>City: ${b}</div>
    `;
    document.querySelector("div").innerHTML = template;  

  })
})