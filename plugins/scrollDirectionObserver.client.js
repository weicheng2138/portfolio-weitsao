import Vue from 'vue'

const options = {
  threshold: [0, 0.5, 1],
}

const scrollTopObserver = new IntersectionObserver(
  (entries, scrollTopObserver) => {
    entries.forEach((entry) => {
      console.log(entry)
      console.log(entry.boundingClientRect.y)
      console.log(entry.intersectionRatio)
      // if (entry.isIntersecting) {
      // }
    })
  },
  options
)

// Register the directives
Vue.directive('direction-target-scroll', {
  bind: (el) => {
    scrollTopObserver.observe(el)
  },
})
