$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });


  var question_json;
  $.ajax({
      url: "./text.txt", async: false,
      xhrFields: {
          withCredentials: true // 这里设置了withCredentials
      },
      success: function (result) {
          question_json = result;
      }
  });
  var question_obj = JSON.parse(question_json);
    // alert(question_obj.judge.number);

    for(var i=0;i<question_obj.judge.number;i++) {
      var tmp_html;
      tmp_html = `
            <div class="">
                    <span>`+
                        "1-"+(i+1)+
                            `
                    </span>
            <div>
            <div>
            <p>` +
          question_obj.judge.problems[i].content;
      if (question_obj.judge.problems[i].answer=="T") {
            tmp_html = tmp_html +
            `
              <span>(2分)</span>
              </p>
              </div>
              <input type="checkbox">
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
      }else{
          tmp_html = tmp_html +
              `<span>(2分)</span>
              <input type="checkbox">

              </p>
              </div>
              <div class="">
                  <label>
                  <input disabled name="" type="radio">
                  T
                  </label>
                  &nbsp; &nbsp; &nbsp; &nbsp;
          <label>
              <input disabled checked name="" type="radio">
                  F
                  </label>
                  </div>
                  </div>
            </div>`
      }
      $("#ques_entry").append(tmp_html);

  }
  }
);