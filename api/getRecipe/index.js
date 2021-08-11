const axios = require("axios");
const cheerio = require("cheerio");

module.exports = async function (context, req) {
  try {
    const result = await axios({
      method: "get",
      url: `https://www.10000recipe.com/recipe/list.html?q=${encodeURI(
        req.params.item
      )}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const $ = cheerio.load(result.data);
    const li = $("ul.rcp_m_list2")
      .find("ul.common_sp_list_ul")
      .children("li.common_sp_list_li");
    var title;
    var href;
    li.each(function (i, elem) {
      title = $(this).find("div.common_sp_caption_tit").text();
      href =
        "https://www.10000recipe.com" +
        $(this).find("a.common_sp_link").attr("href");
      if (i === 0) return false;
    });
    context.res.status(200).json({ success: "ok", title, href });
  } catch (e) {
    console.log(e);
    context.res.status(400).json({ success: "fail", e });
  }
};
