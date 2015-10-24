var WebTorrent = require('webtorrent');
var fs = require('fs');

var magneturi = 'magnet:?xt=urn:btih:61e9db37e139315bd22385aae505cef123b1538d&dn=README.md&tr=wss%3A%2F%2Ftracker.webtorrent.io'
var link = 'magnet:?xt=urn:btih:0ca4c8e7fb26a354b1a7aa15baeaf26067c66811&dn=Hacking+Wireless+Networks+For+Dummies&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969';

exports.downloadTorrent = function(){

  var client = new WebTorrent();
  var magnetUri = link;

  client.add(magnetUri, function (torrent) {
    // Got torrent metadata!
    console.log('Client is downloading:', torrent.infoHash);

    torrent.files.forEach(function (file) {
      // Display the file by appending it to the DOM. Supports video, audio, images, and
      // more. Specify a container element (CSS selector or reference to DOM node).
      var source = file.createReadStream();
      var destination = fs.createWriteStream('downloads/'+file.name);
      source.pipe(destination);
    });
    console.log('download complete');
  });

};
