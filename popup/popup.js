document.addEventListener("DOMContentLoaded", function () {
  browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = new URL(tabs[0].url);

    browser.tabs.create({
      url: `https://${url.host.replace(/\./g, "-")}.translate.goog${
        url.pathname
      }/?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp`,
    });
  });
});
