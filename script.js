const Modal = {
  close() {
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}
const submit = document.querySelector('#submit')

submit.addEventListener('click', function (e) {
  e.preventDefault()
  let getGitHub = document.querySelector('#getGitHub').value
  let getYoutube = document.querySelector('#getYoutube').value
  let getFacebook = document.querySelector('#getFacebook').value
  let getInstagram = document.querySelector('#getInstagram').value
  let getTwitter = document.querySelector('#getTwitter').value

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

  changeSocialMediaLinks()
  getGithHubProfileInfos()
})
