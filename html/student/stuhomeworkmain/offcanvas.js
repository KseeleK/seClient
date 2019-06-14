$(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
    });

    var homework_json;
    console.log(document.cookie);
    $.ajax({
        //headers: {'Cookie': document.cookie},
        url: "text.txt", async: false,
        xhrFields: {
            withCredentials: true // 这里设置了withCredentials
        },
        crossDomain: true,
        success: function (result) {
            homework_json = result;
        }
    });
    // var assignment_json = $.ajax({url:"",async: false});
    // var organization_json = $.ajax({url:"",async: false});
    // var notice_obj=JSON.parse(notice_json);

    console.log(homework_json);
    var homework_obj = JSON.parse(homework_json);

    // var assignment_obj = JSON.parse(assignment_json);
    // var organization_obj = JSON.parse(organization_json);
    for (i = 0; i < homework_obj.homework_list.length; i++) {
        var tmp_html =
            `<li id="contentListItem:3" style="padding: 20px 30px;">
            <img src="../../../images/test_on.gif" class="item_icon" style="float: left">
            <div class="item" style="height: 30px">
            <h3>
            <a href="../stuhomework/index.html?homeworkid=` + homework_obj.homework_list[i].id + `">
            <span style="color:#000000;">` +
            homework_obj.homework_list[i].name + `
        </span>
        </a>
        </h3>
        </div>
        <div class="details">
            <div class="vtbegenerated">
            <p>"在2019年10月15日前完成，完成作业后必须要""
        <span style="color: #ff0000;">
            <strong>保存并提交</strong>
            </span>
        """</p>
        </div>
        </div>
        </li>`;

        $("#content_listContainer").append(tmp_html);
    }
});

