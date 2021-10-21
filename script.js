const linksSocialMedia = {
  github: 'srdmatheus',
  youtube: 'srdmatheus',
  facebook: 'srdmatheus',
  instagram: 'srdmatheus',
  twitter: 'srdmatheus'
}

function changeSocialMedia() {
  userName.textContent = 'Mateus Ribeiro'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMedia()
