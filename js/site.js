window.EVENTCODE="jKepl_Rc6JlyH09ipVtvU3WS_vLeQZpCHQuJ5ohfjr6";
$(document).ready(function(){
    var client = new Asteroid('');
    $('#dangkyform').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            // handle the invalid form...
        } else {
            var hovaten = $( "#hovaten" ).val();
            var sodienthoai = $( "#sodt" ).val();
            var nguoidangkyla = $( "#danhtinh" ).val();
            var chuongtrinh = $( "#chuongtrinh").val()  || null;
            var email = $( "#dcemail" ).val();
            var thoigianduhoc = $( "#tgduhoc" ).val();
            var thanhphodangsong = $( "#diachi" ).val();
            var nhucau = $( "#nhucau" ).val();
            var bietchuongtrinhquakenh = $( "#kenh" ).val() || null;
            if(hovaten && sodienthoai && email && thanhphodangsong && nguoidangkyla && chuongtrinh && thoigianduhoc && nhucau && bietchuongtrinhquakenh) {
                var obj = {
                    hovaten: hovaten,
                    sodienthoai: sodienthoai,
                    email: email,
                    thanhphodangsong: thanhphodangsong,
                    nguoidangkyla: nguoidangkyla,
                    chuongtrinh: chuongtrinh,
                    thoigianduhoc: thoigianduhoc,
                    nhucau: nhucau,
                    bietchuongtrinhquakenh: bietchuongtrinhquakenh
                }
                window.location="/thankyou.html"

                var ret = client.call('registerEventGLVH', window.EVENTCODE, obj);
                ret.result
                    .then(function (result) {
                        if(result && result !== 'FAILED'){
                            /*analytics.identify(result, {
                                name : obj.hovaten,
                                email : obj.email,
                                phone : obj.sodienthoai
                            },{
                                anonymousId : analytics.user().anonymousId()
                            });*/
                            window.location.href = '/thankyou.html';
                        }
                    }).catch(function (error) {
                        console.error('Error:', error);
                    });
            }
            else {alert("Chua nhap du thong tin")}
        }

        return false
    })

    $(document).on('click','.navbar-nav li a', function(event) {
        event.preventDefault();
        $('.navbar-nav li').each(function(){
            $(this).removeClass('active');
        });

        $(this).parent().addClass('active');
        var target = "#" + this.getAttribute('data-target');
        $('html, body').animate({
            scrollTop: ($(target).offset().top - 50)
        }, 1000);
    });
})
