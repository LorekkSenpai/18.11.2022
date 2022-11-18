// const wyswietl = document.getElementsByTagName("p")[0];
const wyswietl = document.getElementById("wyswietl");

function data() {
    // console.log(wyswietl);
    let data = new Date();
    let rok = data.getFullYear();
    let miesiac = data.getMonth();
    let dzien = data.getDate();
    let godzina = data.getHours();
    let minuta = data.getMinutes();
    if (minuta < 10) { minuta = "0" + minuta; }
    let sekunda = data.getSeconds();
    if (sekunda <10) { sekunda = "0" + sekunda;}
    let dTygodnia = data.getDay();

    let dzienTygodnia = new Array( "Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota");

    let miesionc = new Array("Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień");


    wyswietl.innerHTML = dzienTygodnia[dTygodnia] + "<br>" + dzien + " " + miesionc[miesiac] + " " + rok + "<br>" + godzina + ":" + minuta + ":" + sekunda;
}