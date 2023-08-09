var botResponses = [
    "Votre commande est en cours de préparation.",
    "Votre commande a été expédiée.",
    "Malheureusement, nous ne livrons pas à cette adresse.",
    "Veuillez sélectionner un autre article.",
    "Merci pour votre commande !",
  ];
  
  function sendMessage() {
    var userInput = document.getElementById("userInput").value;
  
    var messages = document.getElementById("messages");
    if(userInput.length == ""){
      alert("Saisissez quelque chose dans le champ de messagerie");
    }
    else{
      messages.innerHTML += "<div style='border: 2px solid black; width: 240px; border-radius: 15px 15px 0px 15px; margin-top:20px;margin-left: 270px;overflow-y:auto; background-color: rgb(59, 39, 0); color: white'><p><strong>Vous :</strong><br> " + userInput + "</p></div>";
    
      var botResponse = generateBotResponse();
    
      messages.innerHTML += "<div style='border: 2px solid black; width: 240px; border-radius: 15px 15px 0px 15px; margin-top:20px;margin-left: 20px;'><p><strong>Tuma :</strong><br> " + botResponse + "</p></div>";
    
      document.getElementById("userInput").value = "";
    }
  }

  function generateBotResponse() {
    var randomIndex = Math.floor(Math.random() * botResponses.length);
  
    return botResponses[randomIndex];
    
  }