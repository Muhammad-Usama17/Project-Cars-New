//Show and hide mobile number
let show_opacity = 0, hide_opacity = 1;
let delay_in, delay_out;
let q=0;
function show(){
    document.getElementById('num').style.opacity=show_opacity;
    show_opacity+=0.1;
    if(show_opacity>=1){
        clearInterval(delay_in);
        show_opacity = 0;
    }
}
function fade_in(){
    delay_in = setInterval(show, 10);
}
function hide(){
    document.getElementById('num').style.opacity=hide_opacity;
    hide_opacity-=0.1;
    if(hide_opacity<=0){
        clearInterval(delay_out);
        hide_opacity = 1;
    }
}
function fade_out(){
    delay_out = setInterval(hide, 10);
}
function mobile(){
    if(q==0){
        fade_in();
        document.getElementById('num').style.display='block';
        document.getElementById("phone1").style.display="none";
        document.getElementById("phone2").style.display="block";
        q=1;
    }else if(q==1){
        fade_out();
        document.getElementById("phone1").style.display="block";
        document.getElementById("phone2").style.display="none";
        q=0;
    }
}
function none(){
    if(q==0){
        document.getElementById('num').style.display='none';
    }
}
function display(){
    setTimeout(none, 1000);
}
//Show and hide mobile number

//Show and hide mobile number
{
    let show_opacity = 0, hide_opacity = 1;
    let delay_in, delay_out;
    let q=0;
    function show2(){
        document.getElementById('num2').style.opacity=show_opacity;
        show_opacity+=0.1;
        if(show_opacity>=1){
            clearInterval(delay_in);
            show_opacity = 0;
        }
    }
    function fade_in2(){
        delay_in = setInterval(show2, 10);
    }
    function hide2(){
        document.getElementById('num2').style.opacity=hide_opacity;
        hide_opacity-=0.1;
        if(hide_opacity<=0){
            clearInterval(delay_out);
            hide_opacity = 1;
        }
    }
    function fade_out2(){
        delay_out = setInterval(hide2, 10);
    }
    function mobile2(){
        if(q==0){
            fade_in2();
            document.getElementById('num2').style.display='block';
            q=1;
        }else if(q==1){
            fade_out2();
            q=0;
        }
    }
    function none2(){
        if(q==0){
            document.getElementById('num2').style.display='none';
        }
    }
    function display2(){
        setTimeout(none2, 1000);
    }
}
//Show and hide mobile number


//Slideshow for 1st and 2ns rows
let slideIndex = [0, 0, 0, 0, 0, 0];
let delay;
let car = ["fiesta", "ecoSport", "kuga", "fusion", "focus", "bronco"];
let x;
function showSlides(n){
    let y, z;
    if(n==0){x=0;}
    if(n==1){x=1;}
    if(n==2){x=2;}
    if(n==3){x=3;}
    if(n==4){x=4;}
    if(n==5){x=5;}
    if(x==0){
        y=1;
        z=2;
    }else if(x==1){
        y=0;
        z=2;
    }else if(x==2){
        y=0;
        z=1;
    }else if(x==3){
        y=4;
        z=5;
    }else if(x==4){
        y=3;
        z=5;
    }else if(x==5){
        y=3;
        z=4;
    }
    let h = document.getElementById(car[y]).height;
    document.getElementById(car[x]).style.height='auto';
    document.getElementById(car[y]).style.height=h+'px';
    document.getElementById(car[z]).style.height=h+'px';
    let i;
    let slides = document.getElementsByClassName(car[x]);
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex[x]++;
    if (slideIndex[x] > slides.length){
        slideIndex[x] = 1;
    }
    slides[slideIndex[x]-1].style.display = "block";
    delay = setTimeout(showSlides, 5000);
}

function showSlides_off(){
    clearTimeout(delay);
    slideIndex[x]--;
    let i;
    let slides = document.getElementsByClassName(car[x]);
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[0].style.display='block';
}
//Slideshow for 1st and 2ns rows


//Slideshow for 3rd row
let slideIndex2 = [0, 0, 0];
let delay2;
let cars = ["f-150", "gt", "mustang"];
let m;
function showSlides2(v){
    let y, z;
    if(v==0){m=0;}
    if(v==1){m=1;}
    if(v==2){m=2;}
    if(m==0){
        y=1;
        z=2;
    }else if(m==1){
        y=0;
        z=2;
    }else if(m==2){
        y=0;
        z=1;
    }
    let h = document.getElementById(car[y]).height;
    document.getElementById(car[m]).style.height='auto';
    document.getElementById(car[y]).style.height=h+'px';
    document.getElementById(car[z]).style.height=h+'px';
    let i;
    let slides = document.getElementsByClassName(cars[m]);
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex2[m]++;
    if (slideIndex2[m] > slides.length){
        slideIndex2[m] = 1;
    }
    slides[slideIndex2[m]-1].style.display = "block";
    delay2 = setTimeout(showSlides2, 5000);
}

function showSlides_off2(){
    clearTimeout(delay2);
    slideIndex2[m]--;
    let i;
    let slides = document.getElementsByClassName(cars[m]);
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[0].style.display='block';
}
//Slideshow for 3rd row

//Footer
edit_height();
function edit_height(){
    let x = document.getElementById("footer_img").height;
    document.getElementById("inner_footer").style.height=x+'px';
}
//Footer