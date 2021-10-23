const Modal = {
  close() {
    // fechar o modal
    // remover a class active do modal
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}

//let getGitHub = prompt('github.com/')
//let getYoutube = prompt('youtube.com/', getGitHub)
//let getFacebook = prompt('facebook.com/', getYoutube)
//let getInstagram = prompt('instagram.com/', getFacebook)
//let getTwitter = prompt('twitter.com/', getInstagram)

const linksSocialMedia = {
  github: getGitHub,
  youtube: getYoutube,
  facebook: getFacebook,
  instagram: getInstagram,
  twitter: getTwitter
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGithHubProfileInfos() {
  const url = `https://api.github.com/users/${getGitHub}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      usernameGitHub.textContent = data.login
      userLink.href = data.html_url
      document.title = `${data.name} - DoWhile 2021`
      userAvatar.src = data.avatar_url
    })
}
getGithHubProfileInfos()
