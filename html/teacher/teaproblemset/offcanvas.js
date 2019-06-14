var question_obj;
var id_map = [];
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
        question_obj = JSON.parse(question_json);
        // alert(question_obj.judge.number);

        for (var i = 0; i < question_obj.judge.number; i++) {
            id_map[i] = question_obj.judge.problems[i].id;
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
                question_obj.judge.problems[i].content;
            if (question_obj.judge.problems[i].answer == "T") {
                tmp_html = tmp_html +
                    `
              <span>(2分)</span>
              </p>
              </div>
              <input type="checkbox" id="` + (i) + `\"">
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
            } else {
                tmp_html = tmp_html +
                    `<span>(2分)</span>
              <input type="checkbox" id="` + (i) + `">

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
        // alert(question_obj.choice.number);
        for (var i = 0; i < question_obj.choice.number; i++) {
            id_map[i + question_obj.judge.number] = question_obj.choice.problems[i].id;

            var tmp_html1;
            tmp_html1 = `<div class="problemListItem">
            <span class="problemLabel">
            2-` + (i + 1) +
                `</span>
            <div class="problem">
            <div class="ques-view">
            <p>` + question_obj.choice.problems[i].content + ` <input type="checkbox" id="` + (i + question_obj.judge.number) + `"></p>
                  

        <ol class="ques-answer ques-choice ques-list">
            <li>
            <label>
            <input disabled name="ques15" type="radio">
            </label>` +
                question_obj.choice.problems[i].choiceA + `
        </li>
        <li>
        <label>
        <input disabled name="ques15" type="radio">
            </label>` +
                question_obj.choice.problems[i].choiceB + `
        </li>
        <li>
        <label>
        <input disabled name="ques15" type="radio">
            </label>` +
                question_obj.choice.problems[i].choiceC + `
        </li>
        <li>
        <label>
        <input disabled name="ques15" type="radio">
            </label>` +
                question_obj.choice.problems[i].choiceD + `
        </li>
        </ol>
        </div>
        </div>
        </div>`;
            $("#ques_entry1").append(tmp_html1);
        }
        alert(id_map);
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
    var arr = [];
    $.each($('input:checkbox'), function () {
        if (this.checked) {
            // alert(count);
            // window.alert("你选了："+ $('input[type=checkbox]:checked').length+"个，其中有："+$(this).val());
            arr[count1] = id_map[count];
            count1++;
        }

        count++;
    });
    var url = "/client/json/homework/generate/";
    //alert($("#homeName").val());
    alert(arr);
    $.post(url, {QuestionIDs: arr, Name: $("#homeName").val()}, function (resultJSONObject) {
        if (resultJSONObject.success) {
            // $.messager.alert("系统提示", "添加成功", "info");
            alert("创建作业成功");
        } else {
            // $.messager.alert("系统提示", "添加失败", "error");
            alert("创建作业失败");
        }
    }, "json");
});