const getName = prompt('Qual o seu nome?')
let getGitHub = prompt('github.com/')
let getYoutube = prompt('youtube.com/', getGitHub)
let getFacebook = prompt('facebook.com/', getYoutube)
let getInstagram = prompt('instagram.com/', getFacebook)
let getTwitter = prompt('twitter.com/', getInstagram)

const linksSocialMedia = {
  github: getGitHub,
  youtube: getYoutube,
  facebook: getFacebook,
  instagram: getInstagram,
  twitter: getTwitter
}

function changeSocialMedia() {
  userName.textContent = getName
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMedia()

function changeUserGitHub() {
  userGithub.textContent = getGitHub
}
changeUserGitHub()

function setAvatar() {
  userAvatar.src = `https://github.com/${getGitHub}.png`
}
setAvatar()

function setLinkGithub() {
  linkGithub.href = `https://github.com/${getGitHub}`
}
setLinkGithub()
