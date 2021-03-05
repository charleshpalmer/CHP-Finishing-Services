const nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

function fixNav() {

    if(window.scrollY > nav.offsetHeight + 150) {

        nav.classList.add('active')

    } else {

        nav.classList.remove('active')

    }
    
}

const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Jane Doe',
    position: 'Plymouth',
    photo:
      'assets/img/woman.png',
    text:
      "OK it was an accident, but how unfortunate for the owner of the yacht, just days before it was due to be put up for sale, and a potential buyer who is coming to view in just a few days. To replace the damaged panel would cost many thousands not to mention the time it would take. So you can imagine how delighted the owner was to learn of CHP Finishing Services Ltd, so without delay the repair was underway and within a day the yacht was back to its former glory and at a fraction of the panel replacement cost, the owner delighted.",
  },
  {
    name: 'John Smith',
    position: 'Bath',
    photo: 'assets/img/man.png',
    text:
      'The electricians were at it again, trying to bring a dated old hotel up to speed... quite a job as the building hadn’t been touched for many years, to add to the problem it was grade two listed! Whilst attempting to carefully install wiring behind some very delicate mouldings the inevitable happens "oh shucks" he was heard to say or something similar!!! Not to worry CHP Finishing were on hand, we made a copy of the design and reproduced, inserted and refinished, repair done and dusted in no time at all.',
  },
  {
    name: 'Jane Doe',
    position: 'Swindon',
    photo: 'assets/img/woman.png',
    text:
      "On site today the Tiller dropped his tile in the bath woops, so we attended and within just two hours the chip was gone. Another invisible repair by CHP Finishing Services.",
  }
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)

const panels = document.querySelectorAll('.panel')

console.log(panels)

panels.forEach((panel) => {

    panel.addEventListener('click', () => {

        removeActiveClasses()

        panel.classList.add('active')

    })

})

function removeActiveClasses() {

    panels.forEach(panel => {

        panel.classList.remove('active')

    })

}