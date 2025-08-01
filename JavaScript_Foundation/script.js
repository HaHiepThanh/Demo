let a1 = 0;
let b1 = 0;
let c1 = 0;
let namInput = 0;
let thangInput = 0;
let ngay = 0;

let a = parseInt(prompt("Nhap gia tri cho a",a1));
let b = parseInt(prompt("Nhap gia tri cho b",b1));
let c = parseInt(prompt("Nhap gia tri cho c",c1));

while (nam < 0){
    let nam = parseInt(prompt("Nhap gia tri cho nam",namInput));
}

while (thang < 0 || thang > 13){
    let thang = parseInt(prompt("Nhap gia tri cho thang",thangInput));
}

function bacNhat(x,y){
    if(x==0 && y==0){
        return `Phuong trinh co vo nghiem`;
    }else if(x==0){
        return `Phuong trinh vo nghiem`;
    }else  {
        let ketqua = (-y)/x;
        return `Phuong trinh co nghiem: ${ketqua}`;
    } 
}

function khuyetHangTu1(x,y){
    let z = -y/x;
    if(z>0){
        let ketqua1 = Math.sqrt(-y/a);
        let ketqua2 = -(Math.sqrt(-y/a));
        let array = [ketqua1,ketqua2];
        return array;
    }else if (z == 0){
        return `Phuong trinh co nghiem: x = 0`;
    }else{
        return `Phuong trinh vo nghiem`;
    }
}

function khuyetHangTu2(x,y){
    let ketqua = (-y)/x;
    let array = [0,ketqua];
    return array;
}

function bacHai(a,b,c){
    if(a==0){
        return bacNhat(b,c);
    }else if (b==0){
        return khuyetHangTu1(a,c);
    }else if (c==0){
        return khuyetHangTu2(a,b);
    }else{
        let delta = b * b - 4 * a * c;
        if (delta>0){
            let ketqua1 = (-b + Math.sqrt(delta)) / (2 * a);
            let ketqua2 = (-b - Math.sqrt(delta)) / (2 * a);
            return `Phuong trinh co 2 nghiem phan biet: x1 = ${ketqua1}, x2 = ${ketqua2}`;
        }else if (delta == 0) {
            return bacNhat(a,b);
        }else{
            return `Phuong trinh vo nghiem`;
        }
    }
}

console.log(bacHai(a,b,c));

function tinhNamNhuan(nam){
    if ((nam % 4 == 0 && nam % 100 != 0) || (nam % 400 == 0 && nam % 100 ==0)){
        switch (thang){
            case 1: case 3: case 5: case 7: case 8: case 10: case 12: ngay = 31; break;
            case 2: ngay = 29; break;
            case 4: case 6: case 9: case 11: ngay = 30; break;
        }
        return `Nam ${nam} la nam nhuan va thang ${thang} co ${ngay} ngay`;
    }else {
        switch (thang){
            case 1: case 3: case 5: case 7: case 8: case 10: case 12: ngay = 31; break;
            case 2: ngay = 28; break;
            case 4: case 6: case 9: case 11: ngay = 30; break;
        }
        return `Nam ${nam} khong phai la nam nhuan va thang ${thang} co ${ngay} ngay `;
    }
}

console.log(tinhNamNhuan(nam));

let buttonAdd = document.querySelector(".button-add");
let containerLast = document.querySelector(".container-last");
let input = document.querySelector(".input");
let buttonClear = document.querySelector(".button-clear");
let arrayComponent =[];

input.addEventListener("input", () => {
    console.log(input.value);
})

buttonAdd.addEventListener("click", ()=> {
    let newElement = document.createElement("p");
    newElement.innerText = input.value;
    containerLast.appendChild (newElement);
    arrayComponent.push(input.value);
    console.log(arrayComponent);
    input.value = "";
})

// buttonClear.addEventListener("click", () => {
//     let value = input.value;
//     console.log("test", value);
//     arrayComponent.slice(input,1);
// }

