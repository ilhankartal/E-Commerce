window.addEventListener('load', fg_load)

function fg_load() {
    document.querySelector(".dot-spinner").style.display = 'none'
}


// Sepet
let sepetIkonu = document.querySelector("#sepet-icon");
let sepet = document.querySelector(".sepet");
let kapatSepet = document.querySelector("#kapat-sepet");
// Açılır Sepet
sepetIkonu.onclick = () => {
    sepet.classList.add("active");
}

// Kapatma Sepet
kapatSepet.onclick = () => {
    sepet.classList.remove("active");
}

// Sepet Çalışma Prensibi

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
}


//Fonksiyonlar
function ready(){
    // Sepettekilerin Silindiği Bölüm
    var sepetSilmeButon = document.getElementsByClassName('sepet-sil');
    console.log(sepetSilmeButon);
    for (var i = 0 ; i < sepetSilmeButon.length; i++){
        var button = sepetSilmeButon[i];
        button.addEventListener("click", sepetSilmeButonu);
    } 
    // Adet Değişimi
    var adetGirdi=document.getElementsByClassName('sepet-sayısı');
    for (var i = 0; i < adetGirdi.length; i++){
        var input = adetGirdi[i];
        input.addEventListener("change", adetGirdi);
    }
}


 // sepetSilmeButonu
 function sepetSilmeButonu(event){
    var butonaTıklamada = event.target;
    butonaTıklamada.parentElement.remove();
    toplamGüncelleme();
 }



// Sıkıntılı yer 
// Adet Güncelle

function adetGüncelleme(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    adetGüncelleme();
}


 // Toplamı Güncelleme
 function toplamGüncelleme(){
    var sepetIçeriği = document.getElementsByClassName("sepet-içeriği")[0];
    var sepetKutuları = sepetIçeriği.getElementsByClassName("sepet-kutusu");
    var toplam = 0;
    for(var i = 0 ; i < sepetKutuları.length; i++){
        var sepetKutusu=sepetKutuları[i];
        var tutarı=sepetKutusu.getElementsByClassName("sepet-fiyat")[0];
        var adedi=sepetKutusu.getElementsByClassName("sepet-sayısı")[0];
        var tutar=parseFloat(tutarı.innerText.replace("₺"," "));
        var adet=adedi.value;
        toplam = toplam + tutar * adet;

        document.getElementsByClassName("toplam-fiyat")[0].innerText = "₺" + toplam;
    } 
 }