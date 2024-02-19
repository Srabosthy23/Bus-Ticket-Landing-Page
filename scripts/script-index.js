// openPhParibahan() function
function openPhParibahan() {
    const buyTicket = document.getElementById('ph-paribahan');
    buyTicket.scrollIntoView();
}

// seat related work
const seats = document.querySelectorAll(".seat");
// console.log(seats)
let count4 = 0;
for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    let count = 0;
    seat.addEventListener("click", function () {
        console.log('clicked', seat.innerText)

        count++;
        // console.log(count)

        // can't select one seat twicely
        if (count < 2) {

            const phoneNo = document.getElementById('phone-no');
            const phoneNoValue = phoneNo.value;
            if (phoneNoValue.length > 0) {
                const nextButton = document.getElementById('next-active')
                console.log(nextButton)
                nextButton.classList.remove("pointer-events-none")
            }

            // can't select more than 4 seat & updated seat no 
            if (count4 < 4) {
                // seat not more than 4
                seatBackgroundColor(seat);
                count4++;

                // increase seat no
                const currentSeatNo = document.getElementById("seat-no");
                const currentSeatNoText = currentSeatNo.innerText;
                const currentSeatNoInt = parseInt(currentSeatNoText);
                const updatedSeatNo = currentSeatNoInt + 1;
                // show updated seat no
                currentSeatNo.innerText = updatedSeatNo;

                // decreasing available seat
                const curretSeatLeft = document.getElementById('available-seat');
                const currentSeatLeftText = curretSeatLeft.innerText;
                const curretSeatLeftInt = parseInt(currentSeatLeftText);
                const availableSeat = curretSeatLeftInt - 1;
                // show available seta
                curretSeatLeft.innerText = availableSeat;

                // get the seat-name, class-name and seat price
                const rowItem = document.getElementById('row')
                const tr = document.createElement("tr");

                const td1 = document.createElement("td");
                td1.innerText = seat.innerText;

                const td2 = document.createElement("td");
                td2.innerText = "Economoy";

                const td3 = document.createElement("td");
                td3.innerText = 550;

                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                rowItem.appendChild(tr)

                // total price count
                const totalPrice = document.getElementById('total-price')
                const price = updatedSeatNo * 550;
                //  console.log("total price:", price)
                totalPrice.innerText = price;
                // grand total Price
                const grandTotal = document.getElementById('grand-total');
                const grandPrice = updatedSeatNo * 550;
                grandTotal.innerText = grandPrice;

                // coupon apply
                const applyBtn = document.getElementById('apply-btn');
               
                if(count4 != 4){
                    applyBtn.addEventListener("click", select4)
                }
                else if(count4 === 4) {
                    applyBtn.removeEventListener("click", select4)
                    applyBtn.addEventListener("click", function () {
                        // console.log("clicked")

                        // get the coupon text NEW15
                        const couponText = document.getElementById('coupon-text');

                        if (couponText.value === "NEW15") {
                            const discount = price * 0.15;
                            const finalGrandTotal = grandPrice - discount;
                            grandTotal.innerText = finalGrandTotal;

                            // show discounted price
                            const discountPrice = document.getElementById('dicount-price')
                            const p = document.createElement('p');
                            p.innerText = "Discount price" + " - " + discount;
                            discountPrice.appendChild(p);

                            // hide coupon apply
                            const couponApply = document.getElementById('apply-coupon');
                            couponApply.classList.add("hidden");
                        }

                        // get the couple coupon text 
                        else if (couponText.value === "Couple 20") {
                            const discount = price * 0.2;
                            const finalGrandTotal = grandPrice - discount;
                            grandTotal.innerText = finalGrandTotal;

                            // show discounted price
                            const discountPrice = document.getElementById('dicount-price')
                            const p = document.createElement('p');
                            p.innerText = "Discount price" + " - " + discount;
                            discountPrice.appendChild(p);

                            // hide coupon apply
                            const couponApply = document.getElementById('apply-coupon');
                            couponApply.classList.add("hidden");
                        }
                        else {
                            alert('invalid coupon')
                        }
                    })
                }
                
            }
            else {
                alert("You can't select more than 4")
            }
        }
        else {
            alert("you can't select one seat twicely");
        }

        // modal task
        const phoneNo = document.getElementById('phone-no');
        const next = document.getElementById('next-active')
        
        phoneNo.addEventListener("keypress", (e)=> {
            const value = e.currentTarget.value.length;
            console.log(value)
            if(value >= 0){
                next.disabled = false
            }
        })

    })  

}


