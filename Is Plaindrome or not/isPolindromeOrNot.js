function checkPalindrome(broj){
    let ourNum = broj;
    let pom;
    let pomosna = broj;
    for(pom = 0; broj!= 0; broj = parseInt(broj/10)){
       pom = parseInt( pom * 10 + broj %10);
    }
    if (pom == pomosna){
        console.log("the number " + ourNum + " is palindrome!")
    }
    else{
        console.log("the number " + ourNum + " is  not palindrome!")
    }
}
checkPalindrome(212);