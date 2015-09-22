$(document).ready(function(){
  var contactnumber = 0;

  $('#new-first-name').focus();

  $("#contacts").submit(function(event){
    event.preventDefault();

    var inputfirstname = $("#new-first-name").val();
    var inputlastname = $("#new-last-name").val();
    var inputaddress = $("#new-address").val();

    var newcontact = {firstname: inputfirstname, lastname: inputlastname, address: inputaddress};

    clearandfocus();

    $("#ul").prepend("<li class='namelist" + contactnumber + "'>" + newcontact.firstname + " " + newcontact.lastname + "</li>");

    $('.namelist' + contactnumber).click(function() {
      $('.content').remove();
      $('li').removeClass('highlight');
      $(this).toggleClass('highlight');

      $(".info").append("<div class='content'><h3>" + newcontact.firstname + " " + newcontact.lastname + "</h3>" +
      "<br>" + "<p>" + newcontact.address + "</p></div>");

    });//end .namelist click
    contactnumber++;

    function clearandfocus() {    //Clears text fields and brings focus to first name
      $('#new-first-name').val("");
      $('#new-last-name').val("");
      $('#new-address').val("");
      $('#new-first-name').focus();
    };



  });//submit/contacts click
});//doc ready
