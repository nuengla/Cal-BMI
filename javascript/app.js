/* let name = document.getElementById('name');
let ok = document.getElementById('ok');
let showcal = document.getElementById('showcal');
function show() {
    let outputname = name.value;
    let cal = '';
    for (let i = 1; i<=24; i++) {
        cal += "<p>"
        cal += outputname + " x " + i + " = " + (outputname*i);
        cal += "</p>";
        
    }
    showcal.innerHTML =cal;
}
ok.addEventListener('click',show); */


let weight = document.getElementById('weight');
let height = document.getElementById('height');
let ok = document.getElementById('ok');
let showcal = document.getElementById('showcal');
let detail = document.getElementById('detail');



    function show() {
        let w1 = weight.value;
        let h1 = height.value;
        let bmidetail ;
       
        h1 = h1/100;
        h2 = h1*h1;
        let bmi = w1 / h2;
        
        if(bmi<18.5){
             bmidetail = "น้ำหนักน้อย/ผอม"
        }else if(bmi<=22.90){
             bmidetail = "น้ำหนักปกติ/สมส่วน"
        }else if(bmi<=24.90){
             bmidetail = "ท้วม/อ้วนระดับ1"
        }else if(bmi<=29.90){
             bmidetail = "อ้วน/อ้วนระดับ2"
        }else if(bmi>30){
             bmidetail = "อ้วนมาก/อ้วนระดับ3";
        }
        if(bmi){
            showcal.innerHTML = "BMI : "+bmi.toFixed(2);
            detail.innerHTML = bmidetail;
            
            
        }else{

            showcal.innerHTML = "กรุณาใส่ข้อมูลให้ถูกต้อง"
            detail.innerHTML = '';
        }
    
    
    
}

ok.addEventListener('click',show);

