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


//Input for mobile number takes only numbers
function only_nums(e){
    let x = e.which || e.keycode;
    if(x>=48 && x<=57)
        return true;
    else
        return false;
}
//Input for mobile number takes only numbers

//Input for mobile number takes only numbers (mobile devices)
let body_width;
function only_nums_mobile(){
    body_width = document.getElementById("footer_img").width;
    if(body_width<=980){
        document.getElementById("mobile").type="number";
    }else{
        document.getElementById("mobile").type="text";
    }
}
setInterval(only_nums_mobile, 10);
//Input for mobile number takes only numbers (mobile devices)

//Input for names takes only characters
function only_chars(e){
    let x = e.which || e.keycode;
    if(x>=65 && x<=90 || x>=97 && x<=122 || x==45)
        return true;
    else
        return false;
}
//Input for names takes only characters


//Form
let disable1 = 1, disable2 = 1, disable3 = 1, disable4 = 1, disable5 = 1, disable6 = 1, disable7 = 1, disable8 = 1, disable9 = 1, disable10 = 1, disable11 = 1, disable12 = 1, disable13 = 1;

//Fisr name
function fname(){
    let fname = document.getElementById('f_name').value;
    if(fname.length == 0){
        document.getElementById("error11").style.display="block";
        document.getElementById("f_name").style.borderColor="red";
        disable1 = 1;
        return false;
    }else{
        document.getElementById("error11").style.display="none";
        document.getElementById("f_name").style.borderColor="#1761CD";
        disable1 = 0;
        return true;
    }
}
//Fisr name

//Last name
function lname(){
    let lname = document.getElementById('l_name').value;
    if(lname.length == 0){
        document.getElementById("error12").style.display="block";
        document.getElementById("l_name").style.borderColor="red";
        disable2 = 1;
        return false;
    }else{
        document.getElementById("error12").style.display="none";
        document.getElementById("l_name").style.borderColor="#1761CD";
        disable2 = 0;
        return true;
    }
}
//Last name

//Email
function mail(){
    let email = document.getElementById('email').value;
    let at = 0, com = 0, error = 0, after_at_error = 0, i;
    let after_at = email.split("@");
    let after_at2 = after_at[1].split(".");
    for(i=0; i<=email.length; i++){
        if(email[i] == '@'){
            at++;
        }
    }
    if(email.slice(-4) == '.com'){
        com = 1;
    }
    if(email[0] == '@'){
        error = 1;
    }
    if(after_at2[0].length < 4){
        after_at_error = 1;
    }
    if(at==1 && com==1 && error==0 && after_at_error==0){
        document.getElementById("error6").style.display="none";
        document.getElementById("email").style.borderColor="#1761CD";
        disable3 = 0;
        return true;
    }else{
        document.getElementById("error6").style.display="block";
        document.getElementById("email").style.borderColor="red";
        disable3 = 1;
        return false;
    }
}
//Email

//Mobile number
function mobile_number(){
    let mobile = document.getElementById('mobile').value;
    if(mobile.length == 11){
        document.getElementById("error7").style.display="none";
        document.getElementById("mobile").style.borderColor="#1761CD";
        disable4 = 0;
        return true;
    }else{
        document.getElementById("error7").style.display="block";
        document.getElementById("mobile").style.borderColor="red";
        disable4 = 1;
        return false;
    }
}

function start(){
    let mobile = document.getElementById('mobile').value;
    let x = mobile.slice(0, 3);
    if(x=='011' || x=='010' || x=='012' || x=='015'){
        document.getElementById("error8").style.display="none";
        document.getElementById("mobile").style.borderColor="#1761CD";
        disable5 = 0;
        return true;
    }else{
        document.getElementById("error8").style.display="block";
        document.getElementById("mobile").style.borderColor="red";
        disable5 = 1;
        return false;
    }
}

function mobile_sure(){
    let mobile = document.getElementById('mobile').value;
    let complete = 0, start = 0;
    let x = mobile.slice(0, 3);
    if(mobile.length == 11){
        complete = 0;
    }else{
        complete = 1;
    }
    if(x=='011' || x=='010' || x=='012' || x=='015'){
        start = 0;
    }else{
        start = 1;
    }
    if(complete == 0 && start == 0){
        document.getElementById("mobile").style.borderColor="#1761CD";
    }else if(complete == 1 || start == 1){
        document.getElementById("mobile").style.borderColor="red";
    }
}
//Mobile number

//Password
function eight(){
    let password = document.getElementById('password').value;
    if(password.length == 8){
        document.getElementById("error1").style.display="none";
        document.getElementById("password").style.borderColor="#1761CD";
        disable6 = 0;
        return true;
    }else{
        document.getElementById("error1").style.display="block";
        document.getElementById("password").style.borderColor="red";
        disable6 = 1;
        return false;
    }
}

function sure(){
    let password = document.getElementById('password').value;
    let complete = 0, capital = 0, digit = 0, special = 0, space = 0, i, k, y, z, s, u;
    let x = password.charCodeAt(0);
    if(password.length != 8){
        complete = 1;
    }else{
        complete = 0;
    }
    if(x>=65 && x<=90){
        capital = 0;
    }else{
        capital = 1;
    }
    for(i=0; i<=password.length; i++){
        y = password.charCodeAt(i);
        if(y>=48 && y<=57){
            digit = 0;
            break;
        }else{
            digit = 1;
        }
    }
    for(k=0; k<=password.length; k++){
        z = password[k];
        if(z=='-' || z=='_' || z=='#' || z=='&' || z=='*'){
            special++;
        }
    }
    for(u=0; u<=password.length; u++){
        s = password.charCodeAt(u);
        if(s==32){
            space = 1;
            break;
        }else{
            space = 0;
        }
    }
    if(complete == 0 && capital == 0 && digit == 0 && special == 1 && space == 0){
        document.getElementById("password").style.borderColor="#1761CD";
    }else if (complete == 1 || capital == 1 || digit == 1 || special != 1 || space == 1){
        document.getElementById("password").style.borderColor="red";
    }

}

function capital(){
    let password = document.getElementById('password').value;
    let x = password.charCodeAt(0);
    if(x>=65 && x<=90){
        document.getElementById("error2").style.display="none";
        document.getElementById("password").style.borderColor="#1761CD";
        disable7 = 0;
        return true;
    }else{
        document.getElementById("error2").style.display="block";
        document.getElementById("password").style.borderColor="red";
        disable7 = 1;
        return false;
    }
}

function digit(){
    let password = document.getElementById('password').value;
    let x, i, c = 0;
    for(i=0; i<=password.length; i++){
        x = password.charCodeAt(i);
        if(x>=48 && x<=57){
            c = 1;
        }
    }
    if(c == 1){
        document.getElementById("error3").style.display="none";
        document.getElementById("password").style.borderColor="#1761CD";
        disable8 = 0;
        return true;
    }else{
        document.getElementById("error3").style.display="block";
        document.getElementById("password").style.borderColor="red";
        disable8 = 1;
        return false;
    }
}

function special(){
    let password = document.getElementById('password').value;
    let x, i, c = 0;
    for(i=0; i<=password.length; i++){
        x = password[i];
        if(x=='-' || x=='_' || x=='#' || x=='&' || x=='*'){
            c++;
        }
    }
    if(c == 1){
        document.getElementById("error4").style.display="none";
        document.getElementById("password").style.borderColor="#1761CD";
        disable9 = 0;
        return true;
    }else{
        document.getElementById("error4").style.display="block";
        document.getElementById("password").style.borderColor="red";
        disable9 = 1;
        return false;
    }
}

function space(){
    let password = document.getElementById('password').value;
    let x, i, c = 0;
    for(i=0; i<=password.length; i++){
        x = password.charCodeAt(i);
        if(x==32){
            c = 1;
        }
    }
    if(c == 1){
        document.getElementById("error5").style.display="block";
        document.getElementById("password").style.borderColor="red";
        disable10 = 1;
        return false;
    }else{
        document.getElementById("error5").style.display="none";
        document.getElementById("password").style.borderColor="#1761CD";
        disable10 = 0;
        return true;
    }
}
//Password

//Confirm password
function con_pas(){
    let password = document.getElementById('password').value;
    let con_password = document.getElementById('confirm').value;
    if(con_password == password){
        document.getElementById("error9").style.display="none";
        document.getElementById("confirm").style.borderColor="#1761CD";
        disable11 = 0;
        return true;
    }else{
        document.getElementById("error9").style.display="block";
        document.getElementById("confirm").style.borderColor="red";
        disable11 = 1;
        return false;
    }
}
//Confirm password

//Address
function adrs(){
    let address = document.getElementById('address').value;
    if(address.length == 0){
        document.getElementById("error10").style.display="block";
        document.getElementById("address").style.borderColor="red";
        disable12 = 1;
        return false;
    }else{
        document.getElementById("error10").style.display="none";
        document.getElementById("address").style.borderColor="#1761CD";
        disable12 = 0;
        return true;
    }
}
//Address

//Gender
let gender = document.getElementById("gender");
gender.addEventListener('blur', (e) => {
    let selected = e.target.value;
    if(selected == 'Male' || selected == 'Female'){
        document.getElementById("error13").style.display="none";
        document.getElementById("gender").style.borderColor="#1761CD";
        disable13 = 0;
        submit_disable();
        return true;
    }else{
        document.getElementById("error13").style.display="block";
        document.getElementById("gender").style.borderColor="red";
        disable13 = 1;
        submit_disable();
        return false;
    }
});
//Gender

//Buttons
function submit_disable(){
    let submit = document.getElementById("submit");
    if(disable1==1 || disable2==1 || disable3==1 || disable4==1 || disable5==1 || disable6==1 || disable7==1 || disable8==1 || disable9==1 || disable10==1 || disable11==1 || disable12==1 || disable13==1){
        submit.disabled=true;
        submit.style.background="#588CD7";
    }else{
        submit.disabled=false;
        submit.style.background="#EFEFEF";
        submit.addEventListener('mouseenter', () => submit.style.background="#C1C1C1");
        submit.addEventListener('mouseleave', () => submit.style.background="#EFEFEF");
    }
}

function clear_click(){
    disable1 = 1, disable2 = 1, disable3 = 1, disable4 = 1, disable5 = 1, disable6 = 1, disable7 = 1, disable8 = 1, disable9 = 1, disable10 = 1, disable11 = 1, disable12 = 1, disable13 = 1;
}
//Buttons

//Footer
edit_height();
function edit_height(){
    let x = document.getElementById("footer_img").height;
    document.getElementById("inner_footer").style.height=x+'px';
}
//Footer