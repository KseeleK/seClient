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
  for(var i=0;i<question_obj.judge.number;i++){
      var tmp_html;
      tmp_html =  `<div>
            <div>
            <p>`+
            question_obj.judge.problems[i].content
            +
            `<span>(2分)</span>
            </p>
            </div>
            <div class="">
                <label>
                <input disabled checked name="" type="radio">
                T
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp;
        <label>
            <input disabled name="" type="radio">
                F
                </label>
                </div>
                </div>
        `
      $("#ques_entry").append(tmp_html);
    }
  }
);