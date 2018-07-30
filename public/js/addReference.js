
$("#addReference").on("click", function(){

  var newComment = {
    name: $("#refName").val().trim(),
    occupation: $("#refOccupation").val().trim(),
    company: $("#refCompany").val().trim(),
    location: $("#refLocation").val().trim(),
    image: $("#refImageLink").val().trim(),
    message: $("#refMessage").val().trim()
  }
  if (newComment.name.length<6 && newComment.reference.length<20){
    return;
  }


  $.ajax("/api/comments", {
    type: "POST",
    data: newComment
  }).then(function(res) {
    console.log(res);
    location.reload();
  });

  // $.ajax({
  //   url: "/api/comments",
  //   method: "GET",
  //   data: comments
  // }).then(function (res) {
  //   console.log(res);
  // });

  $.ajax("/api/comments", {
    type: "GET"
  }).then(function(comment) {
    // console.log(comment);
    return comment;
  });
})