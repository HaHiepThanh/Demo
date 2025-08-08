function delay(ms){
    return new Promise((resolve) => setTimeout(resolve,ms));
}

async function diCho(){
    console.log("Đi chợ");
    await delay (2000);
    console.log("Đã tới chợ");
}

async function muaDoAn(){
    console.log("Mua đồ ăn");
    await delay (2000);
    console.log("Đã mua đồ ăn");
}

async function diVe(){
    console.log("Đi về");
    await delay (3000);
    console.log("Về tới nhà");
}

async function voGao(){
    console.log("Vo gạo");
    await delay (1000);
    console.log("Vo gạo xong");
}

async function nauCom(){
    console.log("Nấu cơm");
    await delay (2000);
    console.log("Cơm chín rồi");
}

async function ruaThit(){
    console.log("Rửa thịt");
    await delay (1000);
    console.log("Thịt sạch");
}

async function luocTrung(){
    console.log("Luộc trứng");
    await delay (2000);
    console.log("Trứng chín");
}

async function ruaRau(){
    console.log("Rửa rau");
    await delay (1000);
    console.log("Rửa xong rau");
}

async function catThit(){
    console.log("Cắt thịt");
    await delay (500);
    console.log("Cắt xong thịt");
}

async function lotTrung(){
    console.log("Lột trứng");
    await delay (500);
    console.log("Lột xong trứng");
}

async function khoThit(){
    console.log("Kho thịt");
    await delay (3000);
    console.log("Thịt chín");
}

async function luocRau(){
    console.log("Luộc rau");
    await delay (1000);
    console.log("Rau chín");
}

async function nauCanh(){
    console.log("Nấu canh");
    await delay (2000);
    console.log("Canh xong rồi");
}

async function tatBep(){
    console.log("Tắt bếp");
    await delay (500);
    console.log("Đã tắt bếp");
}

async function donDoNghe(){
    console.log("Dọn đồ nghề");
    await delay (500);
    console.log("Đã dọn đồ nghề");
}

async function moiAnCom(){
    console.log("Mời ăn cơm");
    await delay (500);
    console.log("Đã mời ăn cơm");
}

async function anCom(){
    console.log("Ăn cơm");
    await delay (1000);
    console.log("Ăn cơm xong");
}

async function ruaBat(){
    console.log("Rửa bát");
    await delay (1000);
    console.log("Rửa bát xong");
}

async function diNgu(){
    console.log("Đi ngủ");
    await delay (8000);
    console.log("Đã vào giấc ngủ");
}

async function  quyTrinhNauAn() {
    console.time("Thời gian thực hiện");
    await diCho();
    await muaDoAn();
    await diVe();
    await Promise.all([voGao(),ruaThit(),catThit(),ruaRau()]);
    await Promise.all([nauCom(),khoThit(),luocRau(),nauCanh(),luocTrung()]);
    await lotTrung();
    await tatBep();
    await donDoNghe();
    await Promise.all([moiAnCom(),anCom()]);
    await ruaBat();
    await diNgu();
    console.timeEnd("Thời gian thực hiện");
}

quyTrinhNauAn();
