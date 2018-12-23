require([
    'gitbook',
    'jquery'
], function (gitbook, $) {
    function changeLink() {
        var link = $('.gitbook-link')
        link.attr('href', 'https://www.nknucsec.com')
        link.text('Published with IEC, NKNU')
    }
    changeLink()
    gitbook.events.on('page.change', function () {
        changeLink()
    })


})