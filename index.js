const output = document.querySelector("#output-el")


function calc (digit) {
   output.value += digit
}

function equal() {
   try{
      // output.value = eval(output.value)
      output.value = Function("return " + output.value)()
   }
   catch(err) {
      alert("Syntax ERROR!")
   }
}

function clr() {
   output.value = " "
}

function del() {
   output.value =  output.value.slice(0, -1)
}