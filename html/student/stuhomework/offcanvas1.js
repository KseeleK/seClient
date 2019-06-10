$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });


  var question_json;
  $.ajax({
      url: "/client/json/questions/", async: false,
      xhrFields: {
          withCredentials: true // 这里设置了withCredentials
      },
      success: function (result) {
          question_json = result;
      }
  });

  var question_obj = JSON.parse(question_json);

  for(var i=0;i<question_obj.choice.number;i++){

  }
});