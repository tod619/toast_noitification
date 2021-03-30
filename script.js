const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

button.addEventListener('click', () => createNotification())

function createNotification () {
    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerText = getRandomMessage()
    toasts.appendChild(toast)

    setTimeout(() => {
        toast.remove()
    },3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}