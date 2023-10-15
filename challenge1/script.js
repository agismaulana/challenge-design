
document.addEventListener('DOMContentLoaded', () => {
    let icons = document.getElementById('icons-mode')

    icons.addEventListener('click', () => {
        let mode = icons.getAttribute('data-mode')
        let body = document.getElementsByTagName('body')[0];
        let boxEmbed = document.getElementsByClassName('box-embed')[0];
        let name = document.getElementsByClassName('box-profile-content-paragraph')[0].getElementsByTagName('p')[0];
        let sosialName = document.getElementsByClassName('box-profile-content-paragraph')[0].getElementsByTagName('span')[0];
        let contentEmbed = document.getElementsByClassName('box-content')[0].getElementsByTagName('p')[0];
        let paragraphComplement = document.getElementsByClassName('box-complement')[0];

        if(mode == 'dark') {
            icons.setAttribute('data-mode', 'light')
            icons.setAttribute('name', 'sunny-outline')
            icons.style.color = '#FFF'
            body.style.backgroundColor = "#141D26"
            boxEmbed.style.backgroundColor = "#243447"
            boxEmbed.style.boxShadow = "0px 15px 60px 0px rgba(52, 81, 116, 0.15)"
            name.style.color = "#FFF"
            sosialName.style.color = "rgba(255,255,255, 0.60)"
            contentEmbed.style.color = "#FFF"
            paragraphComplement.style.color = "rgba(255,255,255, 0.60)"
        } else {
            icons.setAttribute('data-mode', 'dark')
            icons.setAttribute('name', 'moon-outline')
            icons.style.color = '#000'
            body.style.backgroundColor = "#ECF8FF"
            boxEmbed.style.backgroundColor = "#FFF"
            boxEmbed.style.boxShadow = "0px 15px 60px 0px rgba(29, 161, 242, 0.15)"
            name.style.color = "#000"
            sosialName.style.color = "rgba(0,0,0, 0.60)"
            contentEmbed.style.color = "#000"
            paragraphComplement.style.color = "rgba(0,0,0, 0.60)"
        }
    })
})
