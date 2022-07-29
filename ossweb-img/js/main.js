const HTML = require("./src/index");
const http = require("http");
// const cheerio = require("cheerio");

let newHtml = "";
function getUrl(url) {
  var strHtml = "";
  http.get(url, function (res) {
    res.on("data", function (chunk) {
      strHtml += chunk;
    });
    res.on("end", function () {
      newHtml = new HTML(strHtml);
      if (newHtml.hasTitle()) {
        console.log(newHtml.getTitle());
      } else {
        console.log("没有title");
      }
      newHtml.hasTag("<script>")
        ? console.log("有script")
        : console.log("无script");

      console.log(newHtml.getKeywords());
    });
  });
}

getUrl("http://192.168.31.93/202207/vue-other-check/");
