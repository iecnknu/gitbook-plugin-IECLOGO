module.exports = {
    book:{
        assets:'./assets',
        js:[
            'rmlink.js'
        ]
    },
    hooks:{
        'page':function(page){
            if(page.path==='pages.md'){
                // console.log(page.content)
            }
            // page.content = page.content.replace('https://www.gitbook.com','http://www.joinforwin.com:90').replace('Published with GitBook','Published by Joinforwin')
            return page
        },
        "finish" : function () {
            var pathFile = this.options.pluginsConfig && this.options.pluginsConfig.favicon;
            var favicon = path.join(process.cwd(), pathFile);
            var gitbookFaviconPath = path.join(process.cwd(), '_book', 'gitbook', 'images', 'favicon.ico');
            if (pathFile && fs.existsSync(pathFile) && fs.existsSync(gitbookFaviconPath)){
                fs.unlinkSync(gitbookFaviconPath);
                fs.createReadStream(favicon).pipe(fs.createWriteStream(gitbookFaviconPath));
            }
        }
    }
}