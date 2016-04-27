$(function () {
    $(".domenav li").on("click",function (e) {
        $(".domenav li a").removeClass("active");
        $(this).find("a").addClass("active")
    })
});
