require([
    'gitbook',
    'jquery'
], function (gitbook, $) {
    function changeLink() {
        var link = $('.gitbook-link');
        link.attr('href', 'https://www.nknucsec.com');
        link.text('Authorized by IEC, NKNU');
        link.before('<div class="gitbook-link" style="text-align: center;"><strong>' + link.text() + '</strong><br><div style="letter-spacing: 5px;">國立高雄師範大學</div><div style="letter-spacing: 4px;">資訊教育中心授權使用<br>著作權所有，請勿轉載</div></div>');
        link.remove();
        var icon_link = $('link[rel=\'shortcut icon\']');
        icon_link.attr('href', 'https://drive.google.com/uc?export=download&id=1hvAlY4gOjjzHm4XA-Wv64A1_dX9z0pk0');
    }
    changeLink()
    gitbook.events.on('page.change', function () {
        changeLink()
    })


})
