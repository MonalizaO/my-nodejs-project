document.querySelector("p").innerHTML = "Good Bye";

function changeTitle(){
    document.getElementById('title').innerHTML = "Google Page";
}

function cal(){
    var r = parseFloat(document.getElementById('txt').value);
    document.getElementById('result').innerHTML = 3.14159 * r * r;
} 