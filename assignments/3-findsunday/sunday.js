
function find_sunday() {
    arr_ans = [];
    for (let _year = 2014; _year <= 2050; _year++) {
        let _date = new Date(_year, 0, 1);
        if (_date.getDay() === 0 ) {
            // console.log(`The 1st of January in ${_year} is on a Sunday`);
            arr_ans.push('The 1st of January in ' + _year + ' is on a Sunday<br>');
        }
       
    }
        document.getElementById('answer').innerHTML= arr_ans.join(" ");
        console.log(arr_ans);

}