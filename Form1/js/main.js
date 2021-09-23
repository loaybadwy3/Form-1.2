let form = document.getElementById("form")

form.addEventListener('submit', function(event){
    event.preventDefault()
    // ================== Personal Information =====================// 
    var list = document.querySelectorAll(".data") 
    var arr=[]
    for (var i=0 ; i < list.length ; i++  ){
        arr.push(list[i].name + " :" + list[i].value)
    }
    console.log(arr)
    // ================== Favourites -Multi-Selection =====================// 

    var select = document.getElementsByClassName("select")[0];
    var option= select && select.options
    var selArr =[]
    var opt=[];
    for( j=0 ; j < option.length ; j++ ) {
        opt = option[j];
        if (opt.selected) {
            selArr.push(opt.value)
        }
    }
    console.log(selArr)
        // ================== subjects & grades =====================// 
    var list = document.querySelectorAll(".subject") 
    var subArr=[]
    for (var i=0 ; i < list.length ; i++  ){
        subArr.push(list[i].name + " :" + list[i].value)
    }
    console.log(subArr)

})


// $('#form').on('submit', function(){
//     var arr = $(this).serializeArray();
//     console.log(arr);
// });