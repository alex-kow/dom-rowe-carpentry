
const prev = document.getElementById("prev-btn")
const next = document.getElementById("next-btn")
const list = document.getElementById("item-list")

const itemWidth = 200
const padding = 20

prev.addEventListener('click', () => {
    list.scrollBy({ left: -(itemWidth + padding), behavior: 'smooth' });
  });
  
  next.addEventListener('click', () => {
    list.scrollBy({ left: itemWidth + padding, behavior: 'smooth' });
  });