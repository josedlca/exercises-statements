// ====================================================
//              Problema 1
// ====================================================
// checkFunc = (vowOrCon) =>{
//     var vowelArr = [97, 101, 105, 111, 117, 65, 69, 73, 79, 85]
//     var consonant = 0
//     // console.log(consonant)
//     for( var i = 0; i < vowelArr.length ; i++){
//         if( vowelArr[i] === vowOrCon){
//             consonant = 1
//             console.log(`${vowOrCon} The alphabet is a vowel`)
//         }
//     }  
//     if(consonant === 0){
//         console.log(`${vowOrCon} The alphabet is a consonant`)
//     }
// }

// var btn = document.getElementById('here')
//     alphabetCheck = () => {
//         var x = prompt("ingresa una letra")
//         if( x.length === 1){
//             var vowOrCon = x.charCodeAt(0)
//             checkFunc(vowOrCon)
//         }else{
//             console.log('Ingresa solo un caracter')
//         }
//     }

// btn.addEventListener('click',function(){
//     alphabetCheck()
// })
// ====================================================
//              Problema 1 end
// ====================================================

// ====================================================
//              Problema 2
// ====================================================

calculate = (cleanBill) =>{
    if(cleanBill > 400){
        var extraCharge = cleanBill * 0.15
        var finalAmount = cleanBill + extraCharge
        var moreData = [extraCharge, finalAmount]
        return moreData
    }else{
        var extraCharge = 100
        var finalAmount = cleanBill + extraCharge
        var moreData = [extraCharge, finalAmount]
        return moreData
    }
}

var btn = document.getElementById('here')
    payBills = () => {
        var name = prompt("ingresa tu nombre")
        var id = prompt("ingresa un id")
        var consumo = prompt("ingresa tu consumo")
        
        if( consumo > 0 && consumo <= 199){
            var cleanBill = consumo * 1.20
            var allData = calculate(cleanBill)
            console.log(`Customer IDNO ${id}`)
            console.log(`Customer Name ${name}`)
            console.log(`unit Consumed ${consumo}`)
            console.log(`Amount Charges @Rs.1.20 per unit : ${cleanBill}`)
            console.log(`Surchage Amount : ${allData[0]}`)
            console.log(`Net Amount Paid By the Customer : ${allData[1]}`)
        }else if(consumo >= 200 && consumo < 400){
            var cleanBill = consumo * 1.50
            var allData = calculate(cleanBill)
            console.log(`Customer IDNO ${id}`)
            console.log(`Customer Name ${name}`)
            console.log(`unit Consumed ${consumo}`)
            console.log(`Amount Charges @Rs.1.50 per unit : ${cleanBill}`)
            console.log(`Surchage Amount : ${allData[0]}`)
            console.log(`Net Amount Paid By the Customer : ${allData[1]}`)
        }else if(consumo >= 400 && consumo <= 600){
            var cleanBill = consumo * 1.80
            var allData = calculate(cleanBill)
            console.log(`Customer IDNO ${id}`)
            console.log(`Customer Name ${name}`)
            console.log(`unit Consumed ${consumo}`)
            console.log(`Amount Charges @Rs.1.80 per unit : ${cleanBill}`)
            console.log(`Surchage Amount : ${allData[0]}`)
            console.log(`Net Amount Paid By the Customer : ${allData[1]}`) 
        }else{
            var cleanBill = consumo * 2.00
            var allData = calculate(cleanBill)
            console.log(`Customer IDNO ${id}`)
            console.log(`Customer Name ${name}`)
            console.log(`unit Consumed ${consumo}`)
            console.log(`Amount Charges @Rs.2.00 per unit : ${cleanBill}`)
            console.log(`Surchage Amount : ${allData[0]}`)
            console.log(`Net Amount Paid By the Customer : ${allData[1]}`) 
        }
    }

btn.addEventListener('click',function(){
    payBills()
})
