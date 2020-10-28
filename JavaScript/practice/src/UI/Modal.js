const Modal = (contentId) => {
const contentTemplateEl = document.getElementById(contentId)
const modalTemplateEl = document.getElementById('modal-template')

const show = (fallbackText) => {
    if ('content' in document.createElement('template')) {
        const modalElements = document.importNode(modalTemplateEl.content, true);
        const modalElement = document.querySelector('.modal');
        const backdropElement = document.querySelector('.backdrop');
        const contentElement = document.importNode(contentTemplateEl, true);

        modalElement.appendChild(contentElement);

        document.body.insertAdjacentElement('afterbegin', modalElement)
        document.body.insertAdjacentElement('afterbegin', backdropElement)
    }
    else {
        alert(fallbackText);
    }
}

const hide = () => {

}

}

export default Modal


