$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});
var counter = 0;
var counter1 = 0;
function add_stu() {
  counter++;
$("#stulist").append("<input class=\"form-control\"  type=\"text\" name=\"stuname"+ counter+"\">\n" +
    "<input class=\"form-control\"  type=\"text\" name=\"stuid"+counter+"\"><br>")
    return false;
}

function delete_stu() {
    counter1++;
    $("#stulist1").append("<input class=\"form-control\"  type=\"text\" name=\"stuname"+ counter1+"\">\n" +
        "<input class=\"form-control\"  type=\"text\" name=\"stuid"+counter+"\"><br>")
    return false;
}''