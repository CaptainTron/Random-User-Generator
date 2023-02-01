const details = document.querySelector('.userdetails');
const userphoto = document.querySelector('.userphoto');
let url = "https://random-data-api.com/api/v2/users?response_type=json";
let getuserdetails = () => {
    fetch(url)
    .then((res) => res.json())
    // .then((data) => (console.log(data)))
    .then((detail) => {
        userphoto.src = `${detail.avatar}`
        details.innerHTML = `
        <p> Name : ${detail.first_name} ${detail.last_name}</p>
        <p> Gender : ${detail.gender} </p>
        <p> DOB : ${detail.date_of_birth} </p>
        <p> Key Skill : ${detail.employment.key_skill}</p>
        <p> Employment : ${detail.employment.title}</p>
        <p> Address : ${detail.address.city}, ${detail.address.state}, ${detail.address.country} </p>
        <p> Coordinates </p>
        <p> Lattitude: ${detail.address.coordinates.lat} </p>
        <p> Longitude : ${detail.address.coordinates.lng} </p>
        <p> E-Mail :  ${detail.email} </p>
        <p> Phone-Number :  ${detail.phone_number} </p>
        <p> Credit Card Number :  ${detail.credit_card.cc_number} </p>
        <p> Social Insurance Number :  ${detail.social_insurance_number} </p>
        `
    })



    
}
getuserdetails()