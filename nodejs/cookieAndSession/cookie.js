// 쿠키 서버 만들기
// writeHead 안에 Set-Cookie를 보냄
const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {'Set-Cookie':'mycookie=test'});
    res.end('Hello cookie');
})
    .listen(8083, () => {
        console.log('8083번 포트에서 서버 대기 중입니다.')
    })
    