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

    for(var i=0;i<question_obj.homework.judge.number;i++) {
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
          question_obj.homework.judge.problems[i].content;
      if (question_obj.homework.judge.problems[i].answer=="T") {
            tmp_html = tmp_html +
            `
              <span>(2分)</span>
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
      }else{
          tmp_html = tmp_html +
              `<span>(2分)</span>

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
        for (var i = 0; i < question_obj.homework.choice.number; i++) {
            var tmp_html1;
            tmp_html1 = `<div class="problemListItem">
            <span class="problemLabel">
            2-` + (i + 1) +
                `</span>
            <div class="problem">
            <div class="ques-view">
            <p>` + question_obj.homework.choice.problems[i].content+`</p>
                  

        <ol class="ques-answer ques-choice ques-list">
            <li>
            <label>
            <input disabled name="ques15" type="radio">
            </label>` +
                question_obj.homework.choice.problems[i].choiceA + `
        </li>
        <li>
        <label>
        <input disabled name="ques15" type="radio">
            </label>` +
                question_obj.homework.choice.problems[i].choiceB + `
        </li>
        <li>
        <label>
        <input disabled name="ques15" type="radio">
            </label>` +
                question_obj.homework.choice.problems[i].choiceC + `
        </li>
        <li>
        <label>
        <input disabled name="ques15" type="radio">
            </label>` +
                question_obj.homework.choice.problems[i].choiceD + `
        </li>
        </ol>
        </div>
        </div>
        </div>`;
            $("#ques_entry1").append(tmp_html1);
        }
  }
  }
);