let curElementNumber = 0;
window.addEventListener('scroll', () => {
    const distanceToBottom = document.body.getBoundingClientRect().bottom;

    if (distanceToBottom < document.documentElement.clientHeight + 150){
        const newDataElement = document.createElement("div");
        curElementNumber++;
        newDataElement.innerHTML = `<p> Element ${curElementNumber}`;
        document.body.append(newDataElement);
    }
});