vketik1=kalimat.innerHTML;kalimat.innerHTML = "";var aa=0,vketik1;
function mulaiketik1(){
  if(aa<vketik1.length){
    kalimat.innerHTML += vketik1.charAt(aa);aa++;
    setTimeout(mulaiketik1,60);
  }
  if(aa==vketik1.length){setTimeout(mulaiketik2,400);}
}

vketik2=kalimatb.innerHTML;kalimatb.innerHTML = "";var ab=0,vketik2;
function mulaiketik2(){
  if(ab<vketik2.length){
    kalimatb.innerHTML += vketik2.charAt(ab);ab++;
    setTimeout(mulaiketik2,60);
  }
  if(ab==vketik2.length){setTimeout(mulaiketik3,400);}
}

vketik3=kalimatc.innerHTML;kalimatc.innerHTML = "";var ac=0,vketik3;
function mulaiketik3(){
  if(ac<vketik3.length){
    kalimatc.innerHTML += vketik3.charAt(ac);ac++;
    setTimeout(mulaiketik3,60);
  }
  if(ac==vketik3.length){}
}
