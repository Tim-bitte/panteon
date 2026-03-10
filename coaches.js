document.addEventListener('DOMContentLoaded', function() {
    const frames = Array.from(document.querySelectorAll('.coach__frame'))
    let current = 0

    // Hide all except first
    frames.forEach((frame, i) => {
        if (i !== 0) frame.style.display = 'none'
    })

    document.querySelector('.arrow__back').addEventListener('click', function(e) {
        e.preventDefault()
        frames[current].style.display = 'none'
        current = current === 0 ? frames.length - 1 : current - 1
        frames[current].style.display = 'flex'
    })

    document.querySelector('.arrow__forward').addEventListener('click', function(e) {
        e.preventDefault()
        frames[current].style.display = 'none'
        current = current === frames.length - 1 ? 0 : current + 1
        frames[current].style.display = 'flex'
    })
})