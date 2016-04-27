$(function () {

    var $tylesheetVessel=$("#stylesheet-vessel")
    var $electVersions=$("#select-versions")
    var $stylesheetHead = $(".stylesheet-head")
    init($tylesheetVessel,$electVersions)
    onResizeTrigger($tylesheetVessel,$stylesheetHead)
    $(window).resize(function(){
        onResizeTrigger($(".stylesheet-main"),$stylesheetHead)
    });

    $electVersions.change(function () {


        var _url = $(this).val();

        if($tylesheetVessel.attr("src") == _url ) return;

        $.cookie('version', _url, { expires: 7, path: '/' });
        $tylesheetVessel.attr("src" ,_url + "/_demo/index.html")
    })

   
});

    function  init(d,b) {

        if($.cookie('version')){
            d.attr("src" ,$.cookie('version')+ "/_demo/index.html");
            selectOption($.cookie('version'),b)
        }else{
            d.attr("src" ,"1.0.0/_demo/index.html");
            selectOption("1.0.0",b)
        }
    }

    function selectOption(v,a) {
        a.find("option[dta-version='"+ v +"']").attr("selected" , true)
    }
    function onResizeTrigger(d,b) {
        var w= $(window),
            _h=w.height();
            d.height(_h-b.height()-20)

    }