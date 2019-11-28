 $(document).ready(function () {
     $(".items>a").click(function () {
         $("a").removeClass("active");
         $(this).addClass("active");
         $(".content>div").hide();
         t_content = $(this).attr("href");
         $(t_content).fadeIn(600);
         return false
     })
 });