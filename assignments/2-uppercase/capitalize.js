
function _upperCase(str) {
    var str = document.getElementById('num1').value;
    let arr_str = str.split(" ");
    let arr_new = [];
    for (index = 0; index < arr_str.length; ++index){
        let first = arr_str[index].charAt(0).toUpperCase();
        let sec = arr_str[index].substring(1);
        let res = first.concat(sec);
        arr_new[index] = res;
    }
    document.getElementById('ans').value = arr_new.join(" ");
    document.getElementById('num1').value = "";
}








