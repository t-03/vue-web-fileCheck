const cheerio = require("cheerio");
class HtmlContent {
  html = "";
  $ = "";
  constructor(html) {
    this.html = html;
    this.$ = cheerio.load(this.html);
  }
  //是否存在指定的标签
  hasTag(tag) {
    return this.html.indexOf(tag) > -1;
  }
  //是否存在标题
  hasTitle() {
    return this.html.indexOf("<title>") > -1;
  }
  //获取标题
  getTitle() {
    var title = "";
    if (this.hasTitle()) {
      title = this.html.match(/<title>(.*?)<\/title>/)[1].trim();
    }
    return title;
  }
  //获取keywords
  getKeywords() {
    var keywords = "";
    if (this.hasTag('<meta name="keywords"')) {
      keywords = this.html.match(
        /<meta name=\"keywords\" content=\"(.*?)\"/
      )[1];
    }
    return keywords;
  }
  //获取description
  getDescription() {
    var description = "";
    if (this.hasTag('<meta name="description"')) {
      description = this.html.match(
        /<meta name=\"description\" content=\"(.*?)\"/
      )[1];
    }
    return description;
  }
}

module.exports = HtmlContent;
