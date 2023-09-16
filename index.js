const names = ["Ada", "Brendan", "Ali"];
const event = "birthday";

function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouMessages.push(message);
    }
    return thankYouMessages;
  }
  
  const messages = writeCards(names, event);
  console.log(messages);
  
  function countDown(number) {
    let i = number;
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
  
  countDown(10);
  