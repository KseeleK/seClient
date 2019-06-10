$(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
    });
    // alert("1234");


    // notice_json = $.ajax({url:"/jquery/test1.txt",async:false});
    var course_json;
    // var cookie_value = $.cookie('the_cookie');
    console.log(document.cookie);
    $.ajax({
        headers: {'Cookie' : "_jly:12777777" },
        url: "/client/json/course/", async: false,
        xhrFields: {
            withCredentials: true // 这里设置了withCredentials
        },
        crossDomain: true,
        success: function (result) {
            course_json = result;
        }
    });
    // var assignment_json = $.ajax({url:"",async: false});
    // var organization_json = $.ajax({url:"",async: false});
    // var notice_obj=JSON.parse(notice_json);

    console.log(course_json);
    var course_obj = JSON.parse(course_json);

    // var assignment_obj = JSON.parse(assignment_json);
    // var organization_obj = JSON.parse(organization_json);
    for (i = 0; i < course_obj.courses.length; i++) {
        $("#courseList").append('<li class=\"list-group-item\">' +
            '<a href=\"/client/class/' + course_obj.courses[i] + '\">' +
            course_obj.courses[i] +
            '</a>' +
            "</li>")
    }

});