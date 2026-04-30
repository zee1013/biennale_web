$(function(){
    let checkBox = $("#checkbox")
    if($.cookie("popup") !== "none"){
        $(".modal_wrap").fadeIn("fast")
    }
    $("#checkbox").click(function(){
        if(checkBox.is(":checked")){
            $.cookie("popup", "none", {expires:1, path:"/"})
        }
        $(".modal_wrap").fadeOut("fast")
    })
})