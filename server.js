const express = require('express');
const exec = require('child_process').exec;

const app = express();

let port = 12345;

//静态文件处理, HTTP对/static的请求都映射到相对目录的 /dist/static
app.use('/axure', express.static('axure/'));

app.get('/pull', (req, res) => {
    console.info(req.originalUrl);
    if(req.originalUrl === 'pull') {
        exec('./pull.sh', (err) => {
            if(err) {
                console.info('aaa');
                res.status(500).send('拉取失败');
            } else {
                console.info('bbb');
                res.status(200).send('拉取成功');
            }
        });
    }
});

app.listen(port, () => {
    console.info('服务器已启动');
});
