function getChart (selector, options) {
  let dom = document.querySelector(`${selector}`)
  let chart = echarts.init(dom)
  console.log(chart)
  chart.setOption(options)
}