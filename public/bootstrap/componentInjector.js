const components = document.querySelectorAll('component');

async function insertComponents() {
    for(let component of components) {
        console.log(component)
        const src = component.getAttribute('src');
        let response = await fetch(src);
        let componentHTML = (response.status == 404) ? '[component not found]' : await response.text();
        componentHTML = componentHTML.replace(/<Slot \/>/g, component.children[0]?.outerHTML)
        component.outerHTML = componentHTML;
    }
}

insertComponents();