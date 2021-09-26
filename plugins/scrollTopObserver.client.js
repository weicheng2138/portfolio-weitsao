import Vue from 'vue'

const options = {
  threshold: [0],
}

const hiddenTargets = []

const scrollTopObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      hiddenTargets.forEach((el) => {
        el.classList.add('hidden')
      })
    } else {
      hiddenTargets.forEach((el) => {
        el.classList.remove('hidden')
      })
    }
  })
}, options)

// Register the directives
Vue.directive('top-target-scroll', {
  bind: (el) => {
    scrollTopObserver.observe(el)
  },
})

Vue.directive('top-hidden-scroll', {
  bind: (el) => {
    hiddenTargets.push(el)
  },
})
