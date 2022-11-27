
//BT1
function century(year){
    
    let centur;
    if(year% 100 == 0){
        centur = year/100
    }else{
        centur = year/100 +1
    }
    return 'năm:'+ year + '  '+
         'Thế kỷ: ' + Math.round(centur)
}
console.log(century(2022));
//BT2
let arr = ["xin","chào","mình","tên","là"]
function arrx(ts){
    arr.push(ts)
    return arr.join(" ")
}
console.log(arrx("BITC"));
//BT3
function ejectFalsy(ts){

    for(let i=0; i<ts.length; i++){
        if(Boolean(ts[i])== false){
            ts.splice(i,1);
            i =i-1;
        }
    }  
    return ts
}
console.log(ejectFalsy([null,"",undefined,1,"hello"]));
//BT4

{
    
    function noVn(str){

        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/ /g,"-");

        return str;
    }
    
    
}
console.log(noVn("xin chào việt nam"));
