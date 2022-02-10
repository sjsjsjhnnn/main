var masHeight = [0,0,0]
var masBtn = ["spacilLi","sub_main_li","sub_sub_main_li"]
var sub_main_Mas = ["sub_main","sub_sub_main","sub_sub_sub_main"]
function openModal(ark){
    var btn = document.getElementsByClassName(masBtn[ark])[0];
    btn.style.overflow = "visible"
    var sub_main = document.getElementsByClassName(sub_main_Mas[ark])[0];
    if(!btn.classList.contains("active")){
        btn.classList.add("active");
        console.log(masHeight[ark]);
        sub_main.style.height = "max-content";
        let btn__Height = sub_main.offsetHeight; 

        sub_main.style.height = `${masHeight[ark]}px`;
        var Interval__btn = setInterval(function(){
             if(ark == 0){
                masHeight[ark]+= 5;
                sub_main.style.height = `${masHeight[ark]}px`;
             }else if(ark == 1){
                masHeight[ark]+= 3;
                masHeight[0] += 3;
                document.getElementsByClassName("sub_main")[0].style.height = `${masHeight[0]}px`;
                sub_main.style.height = `${masHeight[ark]}px`;
             }else{
                 masHeight[ark]+= 3;
                 masHeight[1]+= 3;
                 masHeight[0] += 3;
                 document.getElementsByClassName("sub_sub_main")[0].style.height = `${masHeight[1]}px`;
                 document.getElementsByClassName("sub_main")[0].style.height = `${masHeight[0]}px`;
                 sub_main.style.height = `${masHeight[ark]}px`;
             }
             if(masHeight[ark] + 1 > btn__Height){
                 clearInterval(Interval__btn);
             }
        },1)
 
    }else{
        var Interval__btn = setInterval(function(){
            if(ark == 0){
                masHeight[ark]-= 5;
                sub_main.style.height = `${masHeight[ark]}px`;
             }else if(ark == 1){
                masHeight[ark]-= 3;
                masHeight[0] -= 3;
                document.getElementsByClassName("sub_main")[0].style.height = `${masHeight[0]}px`;
                sub_main.style.height = `${masHeight[ark]}px`;
             }else{
                 masHeight[ark]-= 3;
                 masHeight[1]-= 3;
                 masHeight[0] -= 3;
                 document.getElementsByClassName("sub_sub_main")[0].style.height = `${masHeight[1]}px`;
                 document.getElementsByClassName("sub_main")[0].style.height = `${masHeight[0]}px`;
                 sub_main.style.height = `${masHeight[ark]}px`;
             }
            if(masHeight[ark] - 1 < 0){
                clearInterval(Interval__btn);
            }
       },1)
       btn.classList.remove("active")
    }
}