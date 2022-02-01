const linksSocialMedia = {
    github: 'senhortiago',
    instagram:'tiago_lbarcelos',
    facebook: 'tiago_leal',
    twitter: 'tibarcelos',
    youtube: 'channel/UCh4fizx0zPV9TFMcAF_Ao7w'
}
function changeSocialMidea(){
    for (let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }  
}
changeSocialMidea()
function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        paragraph.textContent = data.bio
        userLogin.textContent = data.login
        })
}
getGitHubProfileInfos()