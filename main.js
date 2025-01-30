/*Navigation-Bar Function*/
function mymenufunction(){
    var menubtn = document.getElementById("myNavMenu") ;

    if(menubtn.className === "nav-menu"){
        menubtn.className += "responsive" ;
    }else{
        menubtn.className = "nav-menu";
    }
}


var typed = new Typed(".typedText" , {
    strings : ["Programmer" , "Full Stack Developer" , "Data Enthusiast"] ,
    typeSpeed : 150 ,
    backSpeed : 150 ,
    loop : true 
})


function sendMail() {
    let params = {
        name : document.querySelector("#inputname").value ,
        email : document.querySelector("#inputemail").value ,
        message : document.querySelector("#inputmessage").value
    }

    emailjs.sendForm("service_90q5jy2","template_r9ks1hu",params,"GZzpHITT7i2s0itbd").then(alert("Thank you for messaging !")) ;
}



const Right = ScrollReveal({
        origin : 'right' ,
        distance : '80px',
        duration : 2000 ,
        reset : true
})



srRight.reveal('.certifications-container' , {delay:300});







