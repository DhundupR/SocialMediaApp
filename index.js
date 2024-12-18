let users;
async function getUser(){
    let response = await fetch ('https://jsonplaceholder.typicode.com/users/'
)
    users = await response.json();
    return users;
 
}
let userTextEl = document.getElementById("Head");


getUser()
.then((json) =>{
    let info1 = document.getElementById("Stuff");
    let bot = document.getElementById("Bot");
    let cont = document.getElementById("Contacts");
    
    let rand = Math.floor(Math.random() * 10);
    let i = rand;
    userTextEl.innerHTML += (json[i].username);
    info1.innerHTML += json[i].name +'<br></br>' + "Location: " +'<br></br>';
    cont.innerHTML += '<br></br>' + "Email: " + json[i].email + '<br></br>' + "Phone Number: " + json[i].phone + '<br></br>' + "Website: " + json[i].website;
        for(const value in json[i].address){
            const obj = json[i].address[value] 
            if(value == "geo"){
                info1.innerHTML += '<br></br>' + "Latitude and Longitude: ";
                for(const min in obj){
                    info1.innerHTML += obj[min] + " "
                
                }
            }else {
                info1.innerHTML += (obj) + " ";
            }
        }
        info1.innerHTML += '<br></br>';

        for(const value in json[i].company){
            const obj = json[i].company[value] 
            bot.innerHTML += (obj) + " | ";
            
        }


    
    


})