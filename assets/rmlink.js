require([
    'gitbook',
    'jquery'
], function (gitbook, $) {
    function changeLink() {
        var linkwrapper = $('<li class="divider"></li><div style="text-align: center;">');
        var link = $('.gitbook-link')
        link.attr('href', 'https://www.nknucsec.com')
        link.text('<li class="divider"></li><div style="text-align: center;">Published with IEC, NKNU</div>')
        
        var icon_link = $('link[rel=\'shortcut icon\']')
        icon_link.attr('href', 'https://drive.google.com/uc?export=download&id=1hvAlY4gOjjzHm4XA-Wv64A1_dX9z0pk0')
    }
    changeLink()
    gitbook.events.on('page.change', function () {
        changeLink()
    })


})
