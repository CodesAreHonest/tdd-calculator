/**
 * Created by yinghua on 21/09/17.
 */
$(document).ready(function () {

    $(document).keypress(function (e) {

        if (e.which == 42) {
            $("#multiply").click();
        }

        if (e.which == 43) {
            $("#plus").click();
        }

        if (e.which == 45) {
            $("#minus").click();
        }

        if (e.which == 47) {
            $("#divide").click();
        }
        if (e.which == 48) {
            $("#zero").click();
        }

        if (e.which == 49) {
            $("#one").click();
        }
        if (e.which == 50) {
            $("#two").click();
        }
        if (e.which == 51) {
            $("#three").click();
        }
        if (e.which == 52) {
            $("#four").click();
        }
        if (e.which == 53) {
            $("#five").click();
        }
        if (e.which == 54) {
            $("#six").click();
        }
        if (e.which == 55) {
            $("#seven").click();
        }
        if (e.which == 56) {
            $("#eight").click();
        }
        if (e.which == 57) {
            $("#nine").click();
        }
        if (e.which == 61) {
            $("equal").click();
        }
    })


});