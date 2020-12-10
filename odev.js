/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */

var person = {
  name: "John",
  message: function () {    
    console.log("Hello, " + this.name)
  }
}
var messageFunc = person.message.bind(person)
messageFunc();


/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    this.numbers[0].map((number)=>{
        const result = number *this.numbers[1];
        console.log(result)
    })
  }
};

numbers.multiply();


/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/
  function isValidName(name){
  if(isNaN(name)) {
      var data=Array.from(name);
    let control=0;
    data.map((item,i)=>{
      if(item===" "||!isNaN(item)) {
        control=1;
      }
    });
    if(control===1){
      return false;
    }
    else {
      return true;
    }
  }
    else {
      return false;
    }
}
console.log(isValidName("John"));
/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/
function katilimSaati(dersSayisi, dersSuresi){  
 if(typeof(dersSayisi)==="boolean"||typeof(dersSuresi)==="boolean") {
    return false;
}
else if(isNaN(dersSayisi)||isNaN(dersSuresi)){
  return false;
}
else {
  if(typeof dersSuresi==="string"&&dersSuresi.includes('.')===true) {
    return false;
  }
  else {
        if(typeof dersSuresi==="number") {
          let control=dersSuresi.toString();
          if(control.includes('.')){
            return false;
          }
          else {
            return dersSayisi*dersSuresi;
          }
        }
    else {
              return dersSayisi*dersSuresi;
    }
  }
  
}
}
console.log(katilimSaati("3",20));



