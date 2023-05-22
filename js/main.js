/* Date in JS */

let sana = new Date();

sana.setFullYear(2022);


let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay();
let oylar = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust",
            "Sentyabr","Oktyabr","Noyabr","Dekabr"];
let kunlar = ["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba",
            "Juma","Shanba"];

document.write("Bugun " + yil + "-yil " + oylar[oy] + " oyining " + kun + "-kuni. Haftaning "
                + kunlar[haftaKuni] + " kuni.");




