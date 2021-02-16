import $ from "jquery";
import Cookies from "js-cookie";

//MYSPH singleSignon Integration
const trySingleSignOnLogin=()=>{
    var f = document.createElement('iframe');
    f.src = "/ldap/login.php";
    f.style.width = "0px";
    f.style.height = "0px";
    f.style.border = "none";
    f.style.display = "none";
    $('body').append(f);
}
window.UpdateUserStatus = function() {
    console.log("In update user status function");
    $.ajax({
        type: "POST",
        url: "/ldap/details",
        dataType: "json",
        cache: true,
        success: function(data) {
            if (data.loginid) {
                registerUser(data);
            }
        }
    });
}

const registerUser=(data)=>{
    // Render User action dropdown
    var login_user =

        '<div class="dropdown d-inline">' +
        '<a href="javascript:;" class="dropdown-toggle p-0 user-login-dd dropdown-toggle-down" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img class="mysph_login" src="/sites/all/themes/mundus/svg/Loggedin.svg" height="20" alt="உள்நுழைய" style="padding-right:4px;"><span id="sph_user_name">'+data.loginid+'</span><span class="caret"></span></a>' +
        '<ul class="dropdown-menu mysph-dropdown-menu text-center px-2 py-0 text-nowrap">' +
        '<li><a class="mysph_user_name" href="javascript:;">' +
        'மறைச்சொல்லை மாற்ற</a></li><div class="mysph-line"></div><li><a class="mysph_logout" href="javascript:;" id="logout_link" role="button">வெளியே</a></li>' +
        '</ul> </div>';
    var meta = document.createElement('meta');
    meta.id = 'ldapw';
    meta.name = 'ldapw';
    meta.content = data.ldapw ? data.ldapw : '';
    document.getElementsByTagName('head')[0].appendChild(meta);
    $(".nav-subscription").html("");
    $(".user-signup-section").html(login_user);
    $(".user-signup-section-mobile").html(login_user);
    // Added for clearing localStorage on logout.
    $(".mysph_logout").on("click", function() {
        localStorage.removeItem('level');
        localStorage.removeItem('username');
    });
    // Added for mySph menu icon toggle dropdown.
    $('.user-login-dd').on("click", function () {
        if ($(this).hasClass('dropdown-toggle-down')) {
            $(this).removeClass('dropdown-toggle-down').addClass('dropdown-toggle-up');
        }
        else {
            $(this).removeClass('dropdown-toggle-up').addClass('dropdown-toggle-down');
        }
    });
}

export {
    trySingleSignOnLogin,
    registerUser
}

