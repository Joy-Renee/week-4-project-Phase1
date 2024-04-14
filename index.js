let roomBooking = document.querySelector('#roomBooking')

let link = "https://json-server-a9u1.onrender.com/rooms"

function bookRooms(){
    fetch(link)
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
                    <div>
                    <button class= 'bookbtn'>Book Now</button>
                    </div>
                </div>
                `
                
            })         

        })
    })
}

bookRooms()


// const forTitles = function() {
//     fetch(link)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         data.forEach(room => {
//             //console.log(room);
//             const titleList = document.createElement('ul')
//             titleList.innerHTML = `
//             <ul class ='btn' id='${room.id}' > ${room.title}</ul> 
//             `
//             roomBooking.appendChild(titleList)


//         })
//     })
    
// }

// forTitles()
