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

//Footer
edit_height();
function edit_height(){
    let x = document.getElementById("footer_img").height;
    document.getElementById("inner_footer").style.height=x+'px';
}
//Footer