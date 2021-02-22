const fs = require('fs');
fs.readFile('./1.txt', 'utf8', function (err, dataStr) {
    if (err) {
        console.log('失败：' + err.message);
    }
    var oldarr = dataStr.split(' ')
    // console.log(oldarr);
    var newarr = []
    oldarr.forEach(item => {
        newarr.push(item.replace('=', ':'))

    });
    console.log(newarr);
    const newStr = newarr.join('\r\n')
    fs.writeFile('./2.txt',newStr, function (err) {
        if (err) {
            console.log('失败:' + err.message);
        }
        console.log('chengg');


    })
})

