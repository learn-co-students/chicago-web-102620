# The Internet and Rack

## Objectives
- explain the internet in general terms
- describe the client-server model (request-response cycle)
- introduce postman to make a GET request
- utilize the browser to make a request
- make a web server with Rack!

## Questions
- 'thin' gem

## Notes
HTTP - HYpertext transfer protocol
HTML - Hypertext markup language

cmd+opt+i => open chrome dev tools

### request example
```
GET /getting_started HTTP/1.1
User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
Host: go.flatironschool.com
Accept-Language: en-us
Accept-Encoding: gzip, deflate
Connection: Keep-Alive
```

### response 

```
HTTP/1.1 500
Date: Sun, 18 Oct 2012 10:36:20 GMT
Server: Apache/2.2.14 (Win32)
Content-Length: 230
Connection: Closed
Content-Type: text/html; charset=iso-8859-1

<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html>
<head>
   <title>404 Not Found</title>
</head>
<body>
   <h1>Not Found</h1>
   <p>The requested URL /t.html was not found on this server.</p>
</body>
</html>
```

200: ok
404: not found
500: internal server error

ngrok - creates a "tunnel" to expose local ports to the internet
## Icebox
- use the splat method
- can you access local host through a local network

## Images
### Map of the Internet
![the internet](https://62e528761d0685343e1c-f3d1b99a743ffa4142d9d7f1978d9686.ssl.cf2.rackcdn.com/files/100571/wide_article/width1356x668/xc3r6bkv-1446489061.png)
### Request Response Cycle
![request response cycle](https://www.ryanckulp.com/wp-content/uploads/2017/08/request-response-cycle.jpg)
### DNS Lookup
![DNS Lookup](https://vanseodesign.com/blog/wp-content/uploads/2017/08/dns-lookup.png)