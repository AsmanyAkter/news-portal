function getTextElementValueById(elementId) {
    const Element = document.getElementById(elementId);
    const value = Element.innerText;
    return value;
}