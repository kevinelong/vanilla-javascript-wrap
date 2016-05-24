function wrap(targetElement, wrappingElement) {
    var p = targetElement.parentElement;
    var t = document.createElement("temp");
    p.insertBefore(t, targetElement);
    wrappingElement.appendChild(targetElement);
    p.insertBefore(wrappingElement, t);
    t.remove();
}
//
// function applyAll(elements,callback){
//     Array.prototype.forEach.call(elements, callback);
// }

function wrapEach(selector, wrappingElement) {
    var elements = document.querySelectorAll(selector);

    function wrapArray(element) {
        var wrapper = wrappingElement.cloneNode(true);
        wrap(element, wrapper);
    }

    // applyAll(elements,wrapArray)
    Array.prototype.forEach.call(elements, wrapArray);
}
