$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
  notice_json = $.ajax({url:"/jquery/test1.txt",async:false});
  course_json = $.ajax({url:"",async: false});
  assignment_json = $.ajax({url:"",async: false});
  organization_json = $.ajax({url:"",async: false});
  notice_obj=JSON.parse(notice_json);
  course_obj = JSON.parse(course_json);
  assignment_obj = JSON.parse(assignment_json);
  organization_obj = JSON.parse(organization_json);
  for(i=0;i<course_obj[courses].length;i++)
    $("#courseList").append('<li class=\"list-group-item\">'+course_obj.courses[i]+"</li>")


});