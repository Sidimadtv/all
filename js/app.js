let ayaCounter;
let ayaSelect = document.getElementById('aya');
let chapterSelect = document.getElementById("chapter").value;
let imgLink = document.getElementById("imgLink");
let reciterSelect = document.getElementById("reciter").value;
let audioLink = document.getElementById("audioLink");

function handle(removeInnerHtml = false)
{
    ayaCounter;
    ayaSelect = document.getElementById('aya');
    chapterSelect = document.getElementById("chapter").value;
    imgLink = document.getElementById("imgLink");
    if (removeInnerHtml === true){
    ayaSelect.innerHTML = '';
    }
    if (chapterSelect == 1){
      ayaCounter = 7;
    }else if(chapterSelect == 2){
      ayaCounter = 286;
    }else if(chapterSelect == 3){
      ayaCounter = 200;
    }else if(chapterSelect == 4){
      ayaCounter = 176;
    }else if(chapterSelect == 5){
      ayaCounter = 120;
    }else if(chapterSelect == 6){
      ayaCounter = 165;
    }else if(chapterSelect == 7){
      ayaCounter = 206;
    }else if(chapterSelect == 8){
      ayaCounter = 75;
    }else if(chapterSelect == 9){
      ayaCounter = 129;
    }else if(chapterSelect == 10){
      ayaCounter = 109;
    }else if(chapterSelect == 11){
      ayaCounter = 123;
    }else if(chapterSelect == 12){
      ayaCounter = 111;
    }else if(chapterSelect == 13){
      ayaCounter = 43;
    }else if(chapterSelect == 14){
      ayaCounter = 52;
    }else if(chapterSelect == 15){
      ayaCounter = 99;
    }else if(chapterSelect == 16){
      ayaCounter = 128;
    }else if(chapterSelect == 17){
      ayaCounter = 111;
    }else if(chapterSelect == 18){
      ayaCounter = 110;
    }else if(chapterSelect == 19){
      ayaCounter = 98;
    }else if(chapterSelect == 20){
      ayaCounter = 135;
    }else if(chapterSelect == 21){
      ayaCounter = 112;
    }else if(chapterSelect == 22){
      ayaCounter = 78;
    }else if(chapterSelect == 23){
      ayaCounter = 118;
    }else if(chapterSelect == 24){
      ayaCounter = 64;
    }else if(chapterSelect == 25){
      ayaCounter = 77;
    }else if(chapterSelect == 26){
      ayaCounter = 227;
    }else if(chapterSelect == 27){
      ayaCounter = 93;
    }else if(chapterSelect == 28){
      ayaCounter = 88;
    }else if(chapterSelect == 29){
      ayaCounter = 69;
    }else if(chapterSelect == 30){
      ayaCounter = 60;
    }else if(chapterSelect == 31){
      ayaCounter = 34;
    }else if(chapterSelect == 32){
      ayaCounter = 30;
    }else if(chapterSelect == 33){
      ayaCounter = 73;
    }else if(chapterSelect == 34){
      ayaCounter = 54;
    }else if(chapterSelect == 35){
      ayaCounter = 45;
    }else if(chapterSelect == 36){
      ayaCounter = 83;
    }else if(chapterSelect == 37){
      ayaCounter = 182;
    }else if(chapterSelect == 38){
      ayaCounter = 88;
    }else if(chapterSelect == 39){
      ayaCounter = 75;
    }else if(chapterSelect == 40){
      ayaCounter = 85;
    }else if(chapterSelect == 41){
      ayaCounter = 54;
    }else if(chapterSelect == 42){
      ayaCounter = 53;
    }else if(chapterSelect == 43){
      ayaCounter = 89;
    }else if(chapterSelect == 44){
      ayaCounter = 59;
    }else if(chapterSelect == 45){
      ayaCounter = 37;
    }else if(chapterSelect == 46){
      ayaCounter = 35;
    }else if(chapterSelect == 47){
      ayaCounter = 38;
    }else if(chapterSelect == 48){
      ayaCounter = 29;
    }else if(chapterSelect == 49){
      ayaCounter = 18;
    }else if(chapterSelect == 50){
      ayaCounter = 45;
    }else if(chapterSelect == 51){
      ayaCounter = 60;
    }else if(chapterSelect == 52){
      ayaCounter = 49;
    }else if(chapterSelect == 53){
      ayaCounter = 62;
    }else if(chapterSelect == 54){
      ayaCounter = 55;
    }else if(chapterSelect == 55){
      ayaCounter = 78;
    }else if(chapterSelect == 56){
      ayaCounter = 96;
    }else if(chapterSelect == 57){
      ayaCounter = 29;
    }else if(chapterSelect == 58){
      ayaCounter = 22;
    }else if(chapterSelect == 59){
      ayaCounter = 24;
    }else if(chapterSelect == 60){
      ayaCounter = 13;
    }else if(chapterSelect == 61){
      ayaCounter = 14;
    }else if(chapterSelect == 62){
      ayaCounter = 11;
    }else if(chapterSelect == 63){
      ayaCounter = 11;
    }else if(chapterSelect == 64){
      ayaCounter = 18;
    }else if(chapterSelect == 65){
      ayaCounter = 12;
    }else if(chapterSelect == 66){
      ayaCounter = 12;
    }else if(chapterSelect == 67){
      ayaCounter = 30;
    }else if(chapterSelect == 68){
      ayaCounter = 52;
    }else if(chapterSelect == 69){
      ayaCounter = 52;
    }else if(chapterSelect == 70){
      ayaCounter = 44;
    }else if(chapterSelect == 71){
      ayaCounter = 28;
    }else if(chapterSelect == 72){
      ayaCounter = 28;
    }else if(chapterSelect == 73){
      ayaCounter = 20;
    }else if(chapterSelect == 74){
      ayaCounter = 56;
    }else if(chapterSelect == 75){
      ayaCounter = 40;
    }else if(chapterSelect == 76){
      ayaCounter = 31;
    }else if(chapterSelect == 77){
      ayaCounter = 50;
    }else if(chapterSelect == 78){
      ayaCounter = 40;
    }else if(chapterSelect == 79){
      ayaCounter = 46;
    }else if(chapterSelect == 80){
      ayaCounter = 42;
    }else if(chapterSelect == 81){
      ayaCounter = 29;
    }else if(chapterSelect == 82){
      ayaCounter = 19;
    }else if(chapterSelect == 83){
      ayaCounter = 36;
    }else if(chapterSelect == 84){
      ayaCounter = 25;
    }else if(chapterSelect == 85){
      ayaCounter = 22;
    }else if(chapterSelect == 86){
      ayaCounter = 17;
    }else if(chapterSelect == 87){
      ayaCounter = 19;
    }else if(chapterSelect == 88){
      ayaCounter = 26;
    }else if(chapterSelect == 89){
      ayaCounter = 30;
    }else if(chapterSelect == 90){
      ayaCounter = 20;
    }else if(chapterSelect == 91){
      ayaCounter = 15;
    }else if(chapterSelect == 92){
      ayaCounter = 21;
    }else if(chapterSelect == 93){
      ayaCounter = 11;
    }else if(chapterSelect == 94){
      ayaCounter = 8;
    }else if(chapterSelect == 95){
      ayaCounter = 8;
    }else if(chapterSelect == 96){
      ayaCounter = 19;
    }else if(chapterSelect == 97){
      ayaCounter = 5;
    }else if(chapterSelect == 98){
      ayaCounter = 8;
    }else if(chapterSelect == 99){
      ayaCounter = 8;
    }else if(chapterSelect == 100){
      ayaCounter = 11;
    }else if(chapterSelect == 101){
      ayaCounter = 11;
    }else if(chapterSelect == 102){
      ayaCounter = 8;
    }else if(chapterSelect == 103){
      ayaCounter = 3;
    }else if(chapterSelect == 104){
      ayaCounter = 9;
    }else if(chapterSelect == 105){
      ayaCounter = 5;
    }else if(chapterSelect == 106){
      ayaCounter = 4;
    }else if(chapterSelect == 107){
      ayaCounter = 7;
    }else if(chapterSelect == 108){
      ayaCounter = 3;
    }else if(chapterSelect == 109){
      ayaCounter = 6;
    }else if(chapterSelect == 110){
      ayaCounter = 3;
    }else if(chapterSelect == 111){
      ayaCounter = 5;
    }else if(chapterSelect == 112){
      ayaCounter = 4;
    }else if(chapterSelect == 113){
      ayaCounter = 5;
    }else if(chapterSelect == 114){
      ayaCounter = 6;
    }
    if (removeInnerHtml ===true){
    for(let i = 1 ; i <= ayaCounter ; i++)
    {
      ayaSelect.options[ayaSelect.options.length] = new Option(i.toString(), i.toString());
    }
    }
    imgLink.src = "http://www.everyayah.com/data/images_png/"+ chapterSelect.toString()+"_"+ ayaSelect.value.toString()+".png";
    getReciter();
}

function getReciter()
{
    reciterSelect = document.getElementById("reciter").value;
    audioLink = document.getElementById("audioLink");
    if (chapterSelect > 0 && chapterSelect < 10 && ayaSelect.value > 0 && ayaSelect.value < 10)
    {
        audioLink.src ="http://www.everyayah.com/data/"+reciterSelect.toString()+"/" + "00" + chapterSelect.toString() + "00" + ayaSelect.value.toString() + ".mp3";
    }
    else if (chapterSelect > 0 && chapterSelect < 10 && ayaSelect.value > 9 && ayaSelect.value < 100)
    {
  audioLink.src ="http://www.everyayah.com/data/"+reciterSelect.toString()+"/" + "00" + chapterSelect.toString() + "0" + ayaSelect.value.toString() + ".mp3";
    }
    else if (chapterSelect > 0 && chapterSelect < 10 && ayaSelect.value > 99)
    {
  audioLink.src ="http://www.everyayah.com/data/"+reciterSelect.toString()+"/" + "00" + chapterSelect.toString()  + ayaSelect.value.toString() + ".mp3";
    }

    else if (chapterSelect > 9 && chapterSelect < 100 && ayaSelect.value > 0 && ayaSelect.value < 10)
    {
  audioLink.src ="http://www.everyayah.com/data/"+reciterSelect.toString()+"/" + "0" + chapterSelect.toString() + "00" + ayaSelect.value.toString() + ".mp3";
    }
    else if (chapterSelect > 9 && chapterSelect < 100 && ayaSelect.value > 9 && ayaSelect.value < 100)
    {
  audioLink.src ="http://www.everyayah.com/data/"+reciterSelect.toString()+"/" + "0" + chapterSelect.toString() + "0" + ayaSelect.value.toString() + ".mp3";
    }
    else if (chapterSelect > 9 && chapterSelect < 100 && ayaSelect.value > 99)
    {
  audioLink.src ="http://www.everyayah.com/data/"+reciterSelect.toString()+"/" + "0" + chapterSelect.toString() + ayaSelect.value.toString() + ".mp3";
    }

    else if (chapterSelect > 99 && ayaSelect.value > 0 && ayaSelect.value < 10)
    {
  audioLink.src ="http://www.everyayah.com/data/"+reciterSelect.toString()+"/" + chapterSelect.toString() + "00" + ayaSelect.value.toString() + ".mp3";
    }
    else if (chapterSelect > 99 && ayaSelect.value > 9 && ayaSelect.value < 100)
    {
  audioLink.src ="http://www.everyayah.com/data/"+reciterSelect.toString()+"/" + chapterSelect.toString() + "0" + ayaSelect.value.toString() + ".mp3";
    }
    else if (chapterSelect > 99 && ayaSelect.value > 99)
    {
  audioLink.src ="http://www.everyayah.com/data/"+reciterSelect.toString()+"/"  + chapterSelect.toString()  + ayaSelect.value.toString() + ".mp3";
    }
}

