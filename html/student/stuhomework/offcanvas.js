var question_json;
var question_obj;
var id_map = [];


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
        // alert(question_obj.homework.judge.number);
        for (var i = 0; i < question_obj.homework.judge.number; i++) {
            id_map[i] = question_obj.homework.judge.problems[i].id;
            var tmp_html;
            tmp_html = `
            <div class="">
                    <span class="problemLabel">` +
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
              <span>&nbsp&nbsp(2分)</span>
              </p>
              </div>
              <div class="">
                  <label class="radio-inline">
                  <input  checked name="` + i + `" type="radio" value="T">
                  T
                  </label>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <label class="radio-inline">
                  <input  name="` + i + `" type="radio" value="F">
                  F
                  </label>
                  </div>
                  </div>
          `
            } else {
                tmp_html = tmp_html +
                    `<span>&nbsp&nbsp(2分)</span>

              </p>
              </div>
              <div class="">
                  <label class="radio-inline">
                  <input name="` + i + `" type="radio" value="T">
                  T
                  </label>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                <label class="radio-inline">
              <input checked name="` + i + `" type="radio" value="F">
                  F
                  </label>
                  </div>
                  </div>
            </div>`
            }
            $("#ques_entry").append(tmp_html + '<br>');
        }
        for (var i = 0; i < question_obj.homework.choice.number; i++) {
            id_map[i + question_obj.homework.judge.number] = question_obj.homework.choice.problems[i].id;

            var tmp_html1;
            tmp_html1 = `<div class="problemListItem">
            <span class="problemLabel">
            2-` + (i + 1) +
                `</span>
            
            <div class="problem">
            <div class="ques-view">
            <p>` + question_obj.homework.choice.problems[i].content + `<span>&nbsp&nbsp(2分)</span></p>
                  

            <div>
                    <label class="radio-inline">
                    <input  name="` + (i + question_obj.homework.judge.number) + `" type="radio" value="A">
                    A.` + question_obj.homework.choice.problems[i].choiceA + `</label><br>
                        
                    <label class="radio-inline">
                    <input  name="` + (i + question_obj.homework.judge.number) + `" type="radio" value="B">
                        B.` + question_obj.homework.choice.problems[i].choiceB + `</label><br>
       
                    <label class="radio-inline">
                    <input  name="` + (i + question_obj.homework.judge.number) + `" type="radio" value="C">
                        C.` + question_obj.homework.choice.problems[i].choiceC + `</label><br>
   
                    <label class="radio-inline">
                    <input  name="` + (i + question_obj.homework.judge.number) + `" type="radio" value="D">
                       D.` + question_obj.homework.choice.problems[i].choiceD + ` </label><br>
            </div>
        </div>
        </div>
        </div>`;
            $("#ques_entry1").append(tmp_html1 + '<br>');
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

    var arr1 = new Array();
    for (var i = 0; i < question_obj.homework.choice.number + question_obj.homework.judge.number; i++) {
        var tmp = i.toString();
        arr[i] = ($("input[name=" + tmp + "]:checked").val());
        arr1[i] = id_map[i];

    }
    // alert(arr);
    // alert(arr1);
    var url = "/client/json/homework/submit/";
    // alert($("#homeName").val());

    $.post(url, {
        HomeworkID: arr1,
        HomeworkAns: arr,
        Name: $("#homeName").val()
    }, function (resultJSONObject) {
        alert("你本次的得分是"+resultJSONObject)
        // if (resultJSONObject.success) {
        //     $.messager.alert("系统提示", "添加成功", "info");
        // } else {
        //     $.messager.alert("系统提示", "添加失败", "error");
        // }
    }, "json");
});