let moshaf = document.querySelector(".elmoshaf"),
ayacontainer = document.querySelector(".ayacontainer");
verses = document.querySelector(".verses");
closing = document.querySelector(".close");
getmoshaf();
function getmoshaf(){
    fetch("https://api.alquran.cloud/v1/meta")
    .then(response => response.json())
    .then(data=>{
let num =114;
let suraInfo = data.data.surahs.references;
for(let i =0 ; i<num;i++){
    moshaf.innerHTML+= 
    `
    <div>
    <p> ${suraInfo[i].name}</p>
    <p> ${suraInfo[i].englishName}</p>
    <p> عَدَدُ ايَاتِهَا ${suraInfo[i].numberOfAyahs}   اية</p>
</div>
    


    `
}

let divs = document.querySelectorAll(".elmoshaf div");
divs.forEach((div,index)=>{
    
div.addEventListener("click",()=>{

ayacontainer.classList.add("opened");
fetch(`https://api.alquran.cloud/v1/surah/${index+1}`)
.then(response=>response.json())
.then(data=>{
    let ayat = data.data.ayahs;

    
verses.innerHTML = "";


ayat.forEach(aya=>{



    verses.innerHTML += 
    `
    <p>(${aya.numberInSurah}) - ${aya.text}</p> 
    <hr size="8" width="90%" color="black">  

    `

    
})

})


})


})

closing.addEventListener("click",()=>{
ayacontainer.classList.remove("opened");
})

})


}

