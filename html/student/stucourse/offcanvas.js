$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
    // alert("1234");
    var info_json;
    $.ajax({
        url: "text.txt", async: false, success: function (result) {
            info_json = result;
        }
    });
    console.log(info_json);
    var course_obj = JSON.parse(info_json);
    // alert(course_obj.description);
    var txt3=document.createElement("p");
    txt3.innerHTML=course_obj.description;
    $("#course_summary").append(txt3)
    $("#course_summary").text = course_obj.description;

});