function customRender(reactelement, elemntcontainer) {
  //   const domElement = document.createElement(reactelement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactelement.prop.href);
  //   domElement.setAttribute("target", reactelement.prop.target);
  //   elemntcontainer.appendChild(domElement);
  const domElement = document.createElement(reactelement.type);
  domElement.innerHTML = reactelement.children;
  for (const props in reactelement.prop) {
    if ("props" === "children") continue;
    domElement.setAttribute(props, reactelement.prop[props]);
  }
  elemntcontainer.appendChild(domElement);
}

const reactElement = {
  type: "a",
  prop: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click me to go google",
};

const ElementContainer = document.querySelector("#root");

customRender(reactElement, ElementContainer);
