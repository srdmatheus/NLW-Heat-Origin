/*const getName = prompt('Qual o seu nome?')
let getGitHub = prompt('Perfil do github')
let getYoutube = prompt('Perfil do youtube', getGitHub)
let getFacebook = prompt('Perfil do facebook', getYoutube)
let getInstagram = prompt('Perfil do instagram', getFacebook)
let getTwitter = prompt('Perfil do twitter', getInstagram)*/

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
