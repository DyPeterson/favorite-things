$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let favOne = $("input#fav1").val();
    let favTwo = $("input#fav2").val();
    let favThree = $("input#fav3").val();
    let favFour = $("input#fav4").val();
    let favFive = $("input#fav5").val();
    const result = [favOne , favTwo , favThree , favFour , favFive];
    
    let result1 = [];
    result1.push(result[1] , result[0] , result[2])
    $("#output").text("");
    $("#output").append("<li>" + result1[0] + "</li>" + "<li>" + result1[1] + "</li>" + "<li>" + result1[2] + "</li>");
    // output1.text(result1[1])
    // output2.text(result1[2])
    // console.log(result1)
    // let outputText = "<ul>";
    // result1.forEach(myFunction);
    // outputText += "</ul>";
    // document.getElementById("outputOne").innerHTML = outputText;
    // function myFunction(value) {
    // outputText += "<li>" + value + "</li>";
  });
});