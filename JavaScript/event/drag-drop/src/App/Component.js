export function doSomething() {};

export default class {
  constructor(hostElementId, insertBefore = false) {
    this.hostElement = hostElementId ? document.getElementById(hostElementId) : document.body;
    this.insertBefore = insertBefore;
  }

  detach() {
    if (this.element) {
      this.element.remove();
      // this.element.parentElement.removeChild(this.element);
    }
  }

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}