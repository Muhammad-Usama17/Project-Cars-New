function fix_height(a, b){
    let y, z;
    if(a==0){y=0;}
    if(a==1){y=1;}
    if(a==2){y=2;}
    if(b==0){z=0;}
    if(b==1){z=1;}
    if(b==2){z=2;}
    document.getElementById(car[y]).style.height='329px';
    document.getElementById(car[z]).style.height='329px';
}

function auto_height_code(){
    let y, z;
    if(x==0){
        y=1;
        z=2;
    }else if(x==1){
        y=0;
        z=2;
    }else if(x==2){
        y=0;
        z=1;
    }
    document.getElementById(car[y]).style.height='auto';
    document.getElementById(car[z]).style.height='auto';
}

function auto_height(){
    setTimeout(auto_height_code, 900);
}