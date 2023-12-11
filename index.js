let messages =[];
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
 let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
 messages.push(message);
}
return messages;
  }


function countDown(n){
    console.log(n);
    while (n > 0) {
        n--;
        console.log(n);
      }
}