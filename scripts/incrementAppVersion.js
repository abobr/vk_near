var fs = require('fs');
var path = require('path');

function PatchVersionIncrement(oldVersion) {
  return oldVersion.split('.').reduce((version, versionPart, partIndex) => {
    return partIndex === 2 ? version + '.' + (parseInt(versionPart) + 1) : version + '.' + versionPart;
  }, "").slice(1);
}

function getDateString(oDate) {
  var sDate;
  if (oDate instanceof Date) {
    sDate =
      oDate.getDate()
      + '.' + ((oDate.getMonth() + 1 < 10) ? '0' + (oDate.getMonth() + 1) : oDate.getMonth() + 1)
      + '.' + (oDate.getYear() + 1900)
      + ' ' + oDate.getHours()
      + ':' + ((oDate.getMinutes() < 10) ? '0' + (oDate.getMinutes()) : oDate.getMinutes())
      + ':' + ((oDate.getSeconds() < 10) ? '0' + (oDate.getSeconds()) : oDate.getSeconds());
  } else {
    throw new Error("oDate is not an instance of Date");
  }
  return sDate;
}

var versionPath = path.resolve(__dirname, '../src/version.json');
var config = null;

if(fs.existsSync(versionPath)){
  config = fs.readFileSync(versionPath, {encoding: 'utf8'});
  config = config ? JSON.parse(config) : null;
}


var newVersion = config && config.version ? PatchVersionIncrement(config.version) : "1.0.0";
var timestamp = new Date();

fs.writeFileSync(versionPath, JSON.stringify({version: newVersion, timestamp: getDateString(timestamp)}, null, 2));

// console.log(getDateString(timestamp));