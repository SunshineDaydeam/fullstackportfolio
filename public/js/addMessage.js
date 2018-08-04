$("#openContactBtn").on("click", function(){
  $("#contactMeForm").removeClass("d-none")
  $("#openContactBtn").addClass("d-none")
})
$("#closeMesBtn").on("click", function(){
  $("#contactMeForm").addClass("d-none")
  $("#openContactBtn").removeClass("d-none")
})

$("#sendMesBtn").on("click", function(){

  var newMessage = {
    name: $("#mesName").val().trim(),
    company: $("#mesComp").val().trim(),
    email: $("#mesEmail").val().trim(),
    subject: $("#mesSubj").val().trim(),
    message: $("#mesMessage").val().trim()
  }
  // if (newMessage.name.email.length<6 && newMessage.message.length<20){
  //   return;
  // }

  $.ajax("/api/messages", {
    type: "POST",
    data: newMessage
  }).then(function(res) {
    console.log(res);
    location.reload();
    alert("Your message has been sent.")
  });

  // $.ajax("/api/comments", {
  //   type: "GET"
  // }).then(function(comment) {
  //   // console.log(comment);
  //   return comment;
  // });
})