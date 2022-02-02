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
        /*
        Não entendi muito bem esse for, pq ele não pega o link do github, começa a pegar apenas do instagram,
        eu sei que essa era a intenção mas não entendi o pq ele não pega de lá.
        */
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
