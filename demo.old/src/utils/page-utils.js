export function copyHeading (id, message = 'Anchor has been copied to clipboard.', color = 'white', textColor = 'primary', icon = 'done', position = 'top', timeout = 2000) {
  const text = window.location.origin + window.location.pathname + '#' + id

  var textArea = document.createElement('textarea')
  textArea.className = 'fixed-top'
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  document.execCommand('copy')
  document.body.removeChild(textArea)

  this.$q.notify({
    message: message,
    color: color,
    textColor: textColor,
    icon: icon,
    position: position,
    timeout: timeout
  })
}

export function slugify (str) {
  return encodeURIComponent(String(str).trim().replace(/\s+/g, '-'))
}
