function numberOneTriangle(length) {
    var line = "";
    for (var i = 1; i <= length; i++) {
      for(var j=1; j<=i; j++){ 
        line += "*";
      }
      line+="\n"; 
    }
    return line + "\n";
  }
  console.log(numberOneTriangle(3));