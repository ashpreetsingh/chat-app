// console.log(firebase)

// (function (){
//     database.ref("/chat").set({
//         msg:"hey",
//         author:"ash"
//     })


// }) ();
// (function (){
//     database.ref("/chat").set({
//         msg:"hey",
//         author:"ash"
//     })


// }) ();
let database=firebase.database();
let history=document.getElementById("display");
// database.ref('/chat').on('value', function(data) {
//   console.log(data.val())
// });

const writeInDatabase =(messageObject)=>{
    database.ref("/chat").push(messageObject);


}

const readFromDatabase =()=>{
    database.ref('/chat').on('value', function(data) {
        let messages=data.val();
        $('#display').empty();
        for(messageKey in messages){
            let message=messages[messageKey];
            $("#display").append(`<h6>${message.user}</h6><p>${message.message}</p>`)
        } 
      });

      }
const send=()=>{
    let message=document.getElementById('messageBox').value;
    let messageObject={
        message:message,
        user:"Ash",
        
    }
    writeInDatabase(messageObject); 
    $('#messageBox').val("");
}
readFromDatabase();