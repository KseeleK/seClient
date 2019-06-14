$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});

function add_stu() {
$("#stulist").append("<input class=\"form-control\" id=\"stuname\" type=\"text\">\n" +
    "<input class=\"form-control\" id=\"stuid\" type=\"text\">")
}