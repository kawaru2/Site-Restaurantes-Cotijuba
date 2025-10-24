 const escolhas = document.querySelectorAll(".escolha")
    escolhas.forEach(tags=> {
    tags.addEventListener("click", (e) => {
        e.preventDefault()

        const n = tags.textContent.toLowerCase()
        const a = document.querySelector(`#${n}`)
        a.scrollIntoView({behavior: "smooth"})

    } )
 
})