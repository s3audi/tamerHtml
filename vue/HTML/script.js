const RenderHtmlApp = {
  data() {
    return {
      rawHtml: '<span style="color: red">This should be red.</span>'
    }
  }
}

Vue.createApp(RenderHtmlApp).mount('#example1')