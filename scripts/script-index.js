// openPhParibahan() function
function openPhParibahan(){
    const buyTicket = document.getElementById('ph-paribahan');
    buyTicket.scrollIntoView();
}

// seat related work
const seats = document.querySelectorAll(".seat");
// console.log(seats)
let count4 = 0;
for(let index = 0 ; index < seats.length ; index++){
    const seat = seats[index];
    let count = 0;
    seat.addEventListener("click", function(){
        console.log('clicked')

        // can't select one seat twicely
        count++;
        // console.log(count)
        if(count > 1){
            alert("you can't select one seat twicely");
        }
        
        // can't select more than 4 seat & updated seat no 
        if(count4 < 4){
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

            // append seat-name, seat-class-name, seat-price
            
        }
        else{
            alert("ksdjk")
        }

        
        
        
        
        


    })
}