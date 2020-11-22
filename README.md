# audio-stream-server-nodejs
This repository includes a simple audio streaming server, which randomly selects a audio and plays it. This server is written in nodejs.

#### Programmer: [Ravin Kumar](http://mr-ravin.github.io)

#### Directory structure:
```
---|
   |--server.js
   |
   |--audio (this is a folder)

---|
   |--client.html (this is the html page to access the audio streaming server from client side)
```

- create a folder "audio" inside the directory where server.js is present
- inside "audio" folder, include all the audio files which you want your server to select from randomly to play.

#### Steps to start the server:

```python
$ node server.js
```

#### Steps to connect to server from the client side:

```
open client.html on the client-side browser.
```

#### Preferred Web Browser: Mozilla Firefox

```python
Copyright (c) 2020 Ravin Kumar
Website: https://mr-ravin.github.io

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation 
files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, 
modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the 
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the 
Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
