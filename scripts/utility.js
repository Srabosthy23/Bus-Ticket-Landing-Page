// seat background color
function seatBackgroundColor(seat) {
    seat.classList.add('bg-greeny', "text-white");
}

// -----------------------
function select4(){
    alert("Please Select 4 seat")
}

// ------------
// const applyBtn = document.getElementById('apply-btn');
// applyBtn.addEventListener("click", function (){
//     if(count4 < 4){
//         alert('muri khaa')
//     }
//     else if (count4 === 4) {
//         // get the coupon text NEW15
//         const couponText = document.getElementById('coupon-text');

//         if (couponText.value === "NEW15") {
//             const discount = price * 0.15;
//             const finalGrandTotal = grandPrice - discount;
//             grandTotal.innerText = finalGrandTotal;

//             // show discounted price
//             const discountPrice = document.getElementById('dicount-price')
//             const p = document.createElement('p');
//             p.innerText = "Discount price" + " - " + discount;
//             discountPrice.appendChild(p);

//             // hide coupon apply
//             const couponApply = document.getElementById('apply-coupon');
//             couponApply.classList.add("hidden");
//         }

//         // get the couple coupon text 
//         // const coupleText = document.getElementById('coupon-text');
//         // console.log(couponText.value);
//         else if (couponText.value === "Couple 20") {
//             const discount = price * 0.2;
//             const finalGrandTotal = grandPrice - discount;
//             grandTotal.innerText = finalGrandTotal;

//             // show discounted price
//             const discountPrice = document.getElementById('dicount-price')
//             const p = document.createElement('p');
//             p.innerText = "Discount price" + " - " + discount;
//             discountPrice.appendChild(p);

//             // hide coupon apply
//             const couponApply = document.getElementById('apply-coupon');
//             couponApply.classList.add("hidden");
//         }
//         else {
//             alert('invalid coupon')
//         }
//     }
// })