 $(document).ready(function () {
     //program
     $(".itemBlock>a").click(function () {
         $(this).addClass("active");
         $("a").removeClass("active");
         $(".catBlock>div").hide();
         t_content = $(this).attr("href");
         $(t_content).fadeIn(600);
         return false
     })
 });