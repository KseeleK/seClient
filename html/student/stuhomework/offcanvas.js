var question_json;
var question_objl
$(document).ready(function () {
        $('[data-toggle="offcanvas"]').click(function () {
            $('.row-offcanvas').toggleClass('active')
        });


        $.ajax({
            url: "/client/json/homework/get/", async: false,
            xhrFields: {
                withCredentials: true // 这里设置了withCredentials
            },
            success: function (result) {
                question_json = result;
            }
        });
        question_obj = JSON.parse(question_json);
        // alert(question_obj.judge.number);
        alert(question_obj.homework.judge.number);
        for (var i = 0; i < question_obj.homework.judge.number; i++) {
            var tmp_html;
            tmp_html = `
            <div class="">
                    <span>` +
                "1-" + (i + 1) +
                `
                    </span>
            <div>
            <div>
            <p>` +
                question_obj.homework.judge.problems[i].content;
            if (question_obj.homework.judge.problems[i].answer == "T") {
                tmp_html = tmp_html +
                    `
              <span>(2分)</span>
              </p>
              </div>
              <div class="">
                  <label>
                  <input  checked name="` + i + `" type="radio" value="T">
                  T
                  </label>
                  &nbsp; &nbsp; &nbsp; &nbsp;
          <label>
              <input  name="` + i + `" type="radio" value="F">
                  F
                  </label>
                  </div>
                  </div>
          `
            } else {
                tmp_html = tmp_html +
                    `<span>(2分)</span>

              </p>
              </div>
              <div class="">
                  <label>
                  <input name="` + i + `" type="radio" value="T">
                  T
                  </label>
                  &nbsp; &nbsp; &nbsp; &nbsp;
          <label>
              <input checked name="` + i + `" type="radio" value="F">
                  F
                  </label>
                  </div>
                  </div>
            </div>`
            }
            $("#ques_entry").append(tmp_html);
        }
        for (var i = 0; i < question_obj.homework.choice.number; i++) {
            var tmp_html1;
            tmp_html1 = `<div class="problemListItem">
            <span class="problemLabel">
            2-` + (i + 1) +
                `</span>
            <div class="problem">
            <div class="ques-view">
            <p>` + question_obj.homework.choice.problems[i].content + `</p>
                  

        <ol class="ques-answer ques-choice ques-list">
            <li>
            <label>
            <input  name="` + (i + question_obj.homework.judge.number) + `" type="radio" value="A">
            </label>` +
                question_obj.homework.choice.problems[i].choiceA + `
        </li>
        <li>
        <label>
        <input  name="` + (i + question_obj.homework.judge.number) + `" type="radio" value="B">
            </label>` +
                question_obj.homework.choice.problems[i].choiceB + `
        </li>
        <li>
        <label>
        <input  name="` + (i + question_obj.homework.judge.number) + `" type="radio" value="C">
            </label>` +
                question_obj.homework.choice.problems[i].choiceC + `
        </li>
        <li>
        <label>
        <input  name="` + (i + question_obj.homework.judge.number) + `" type="radio" value="D">
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
);

$("#upload").click(function () {
    // for(var i=0;i<question_obj.choice.number+question_obj.judge.number;i++) {
    //     var tmp = i.toString();
    //     alert($("input[id=tmp]").checked(
    //     ));
    // }
    var count = 0;
    var count1 = 0;
    var arr = new Array();
    for (var i = 0; i < question_obj.homework.choice.number + question_obj.homework.judge.number; i++) {
        var tmp = i.toString();
        arr[i] = ($("input[name=" + tmp + "]:checked").val());
    }
    alert(arr);
    var url = "/client/json/homework/submit/";
    // alert($("#homeName").val());
    $.post(url, {QuestionIDs: arr, Name: $("#homeName").val()}, function (resultJSONObject) {
        if (resultJSONObject.success) {
            $.messager.alert("系统提示", "添加成功", "info");
        } else {
            $.messager.alert("系统提示", "添加失败", "error");
        }
    }, "json");
});