$(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
    });

    var filelist_json;
    console.log(document.cookie);
    $.ajax({
        //headers: {'Cookie': document.cookie},
        url: "/client/resources/files/", async: false,
        xhrFields: {
            withCredentials: true // 这里设置了withCredentials
        },
        crossDomain: true,
        success: function (result) {
            filelist_json = result;
        }
    });
// var assignment_json = $.ajax({url:"",async: false});
// var organization_json = $.ajax({url:"",async: false});
// var notice_obj=JSON.parse(notice_json);

    console.log(filelist_json);
    var filelist_obj = JSON.parse(filelist_json);

// var assignment_obj = JSON.parse(assignment_json);
// var organization_obj = JSON.parse(organization_json);
    for (i = 0; i < filelist_obj.files.length; i++) {
        $("#content_listContainer").append(`
    <li id="contentListItem:0" style="padding: 20px 30px;">
        <img src="../../../images/file_on.gif" class="item_icon" style="float: left;">
        <div class="item" style="height: 30px">
        <h3>
        <a href="` + filelist_obj.files[i].url + `">
        <span style="color:#000000;">` +
            filelist_obj.files[i].name + `
    </span>
    </a>
    </h3>
    </div>
    </li>`
        )
    }
});

