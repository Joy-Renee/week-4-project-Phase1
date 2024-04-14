let roomBooking = document.querySelector('#roomBooking')

const forTitles = function() {
    fetch('http://localhost:3000/rooms')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(room => {
            //console.log(room);
            const titleList = document.createElement('ul')
            titleList.innerHTML = `
            <ul class ='btn' id='${room.id}' > ${room.picture}</ul> 
            `
            // ul-btn.style.backgroundColor = 'yellow'
            roomBooking.appendChild(titleList)


        })
    })
    
}

forTitles()



function bookRooms(){
    fetch('http://localhost:3000/rooms')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        data.forEach(room => {
            const button = document.getElementById(`${room.id}`)  
            button.addEventListener('click', e =>{
                let roomBooking = document.querySelector('#roomBooking')
                
                roomBooking.innerHTML = `
                <div class="roomDetails">
                    <div class="details">
                        <div class='title'> ${room.title} </div>
                        <div class='capacity'> ${room.capacity} people </div>
                        <div class='description'> ${room.description} </div>
                        <div class='price'> ${room.price} $</div>
                    </div>
                </div>
                `
                let pic = document.getElementsByClassName('picture')
                pic.src = `${room.picture}`
            })         

        })
    })
}

bookRooms()

// roomBooking.innerHTML = `
// <div class="roomDetails">
//     <div class="picture">
//         ${room.picture}
//     </div>
//     <div class="details">
//     ${room.title}
//     ${room.capacity}
//     ${room.description}
//     </div>
// </div>
//`
