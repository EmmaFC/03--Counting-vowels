let iptIntroduceText = document.getElementById("inp_introduce_text");
let btnSubmitText = document.getElementById("btn_submit_text");
let areaShowVowels = document.getElementById("area_show_vowels");

iptIntroduceText.addEventListener("keyup", () =>{
    let givenTExt = iptIntroduceText.value
    console.log("This is the given text: " + givenTExt);
    let vowels = /[aeiou]/gi;
    let vowelREsult = givenTExt.match(vowels);
    console.log("Those are the vowels in the text: " + vowelREsult);
    document.getElementById("area_show_vowels").innerHTML = `<p class="text_styles">${vowelREsult}</p>`
});