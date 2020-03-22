let nameValue = document.getElementById("my_name");

nameValue.innerHTML = "Ugwu Abraham Chidozie";

let courses = [ 'HTML', 
                "CSS",
                "JavaScript"
              ];
var y;

for (y of courses) {
    document.write(y + "<br/>");
}

for (let i = 1; i <= 200; i++){
  if ((i % 2) !== 0) document.writeln(i + '<br/>');
}