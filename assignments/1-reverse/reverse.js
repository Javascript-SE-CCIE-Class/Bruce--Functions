function reverse(word) {
    var word = document.getElementById('num1').value;
    var arr_word = word.split("");
    arr_word = arr_word.reverse();
    arr_word = arr_word.join("");
    
    document.getElementById('ans').value = arr_word;
}










