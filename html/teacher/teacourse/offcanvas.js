$(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
    });
    // alert("1234");
    var course_json;
    console.log(document.cookie);
    $.ajax({
        //headers: {'Cookie': document.cookie},az
        url: "/client/json/courseDesc/", async: false,
        xhrFields: {
            withCredentials: true // 这里设置了withCredentials
        },
        crossDomain: true,
        success: function (result) {
            course_json = result;
        }
    });
    console.log(course_json);
    var course_obj = JSON.parse(course_json);
    // alert(course_obj.description);
    var txt3 = document.createElement("p");
    txt3.innerHTML = course_obj.description;
    $("#course_summary").append(txt3);
    $("#course_summary").text = course_obj.description;

});