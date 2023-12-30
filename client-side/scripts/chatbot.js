function chat(){
    let quetions={
        "hi":"hello :)",
        "how are you":"Good :) You say?",
        "i'm also good":"How can i help you!",
        "what location do you operate":"Currently operational in Nigeria",
        "can i get produce by Way-bill":"Yes pls Way-Bill services available with charges",
        "How much is a basket of potatoes":"1600 Naira per basket",
        "who are you":"I'm 9ja-FarmYard Chatbot",
        "who are you":"I'm 9ja-FarmYard Chatbot",
        "who are you":"I'm 9ja-FarmYard Chatbot",
        "who are you":"I'm 9ja-FarmYard Chatbot",
        "your favourite language":"Java, but most people hate it :(",
        "okay":"Thanku for being here!",
        "bye":"Okay! see you soon... :)",
    };
    let user=document.getElementById("questionBox").value;
    document.getElementById("answerBox").innerHTML=user + "<br>";
    if(user in quetions){
        document.getElementById("answerBox").innerHTML=quetions[user] +"<br>";
    }
    else{
        document.getElementById("answerBox").innerHTML="sorry :( Not in my Database, check contact us page for more Enquiries..!!!";
    }
}