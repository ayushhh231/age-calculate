function submit(){
    var y = document.getElementById("main").value;
    var date = new Date().getFullYear();
    x = date - y;
    document.getElementById("res").innerText = x;
    var z = document.getElementById("b-main").value;
    // alert(z);
    document.getElementById("res").innerHTML = ("Hey!"+" "+z+","+ " Your Current Age is"+" "+ x);
    }