//layout tool

document.body.insertAdjacentHTML("afterbegin",
    `<div id="checkboxes" >
<label>color<input 
type="checkbox" 
name="colorLayout" 
id="colorLayout"/>
</label>
<label>outline<input 
type="checkbox" 
name="outlineLayout" 
id="outlineLayout"/>
</label>
<label>overflow<input 
type="checkbox" 
name="overflowLayout" 
id="overflowLayout"/>
</label>
<label>multi-color<input 
type="checkbox" 
name="multicolorLayout" 
id="multicolorLayout"/>
</label>
</div>`)

const els = document.querySelectorAll("*")
const checkboxes = document.querySelector("#checkboxes")
const colorLayout = document.querySelector("#colorLayout")
const outlineLayout = document.querySelector("#outlineLayout")
const overflowLayout = document.querySelector("#overflowLayout")
const multicolorLayout = document.querySelector("#multicolorLayout")


setCheckboxStyles=()=>{
    checkboxes.style.setProperty("position", "fixed", "important")
    checkboxes.style.setProperty("margin", "0", "important")
    checkboxes.style.setProperty("padding", "0", "important")
    checkboxes.style.setProperty("background-color", "transparent", "important")
}

setCheckboxStyles()

multicolorLayout.addEventListener("click", () => {
    const depth = new Set()
    function findNestedEl(counter, children, length) {
        if (length) {
            counter++
            depth.add(counter)
            Array.from(children).forEach((child) => {
                findNestedEl(counter, child.children, child.children.length)
            })
        }
    }
    const getElementDepth = () => {
        let counter = 0
        if (document.body.children.length) {
            counter++
            Array.from(document.body.children).forEach((child) => {
                findNestedEl(counter, child.children, child.children.length)
            })
        }
    }
    getElementDepth()
    const maxDepth = Math.max(...Array.from(depth))
    console.log("maxDepth:",maxDepth)
    const selectAllNestedNodes = "* "
    const colors = [
          null, null, null,
         "green", "purple","orange", 
         "blue","pink","white","yellow",
         "black","red","brown","gray","azure",
         "navy","cyan","maroon","khaki","wheat",
         "lime","chocolate","crimson","whitesmoke",
         "lavender","hotpink","lightblue","honeydew",
         "darkred","darkblue","orangered","palegreen","gold","silver"
    ]
    for (let i = 3; i <= maxDepth + 3; i++) {
        const selector = selectAllNestedNodes.repeat(i)
        const tags = document.querySelectorAll(selector)
        if (multicolorLayout.checked) {
            if(colors[i] && i<maxDepth+3){
            console.log(`layer ${i}:${colors[i]}`)}
            tags.forEach((tag) => {
                tag.style.setProperty("background-color", `${colors[i]}`, "important")
            })
        }
        if (!multicolorLayout.checked) {
            tags.forEach((tag) => {
                tag.style.removeProperty("background-color", `${colors[i]}`, "important")
            })
        }
        
    }setCheckboxStyles()
})

colorLayout.addEventListener("click", () => {
    if (colorLayout.checked) {
        els.forEach((el) => {
            el.style.setProperty("background-color", "RGBA(0,0,255,0.2)", "important")
        })
    }
    if (!colorLayout.checked) {
        els.forEach((el) => {
            el.style.removeProperty("background-color", "RGBA(0,0,255,0.2)", "important")
        })
    }setCheckboxStyles()
})

outlineLayout.addEventListener("click", () => {
    if (outlineLayout.checked) {
        els.forEach((el) => {
            el.style.setProperty("outline", "1px solid RGBA(255,0,0)", "important")
        })
    }
    if (!outlineLayout.checked) {
        els.forEach((el) => {
            el.style.removeProperty("outline", "1px solid RGBA(0,0,255)", "important")
        })
    }setCheckboxStyles()
})

overflowLayout.addEventListener("click", () => {
    if (overflowLayout.checked) {
        document.body.style.setProperty("padding", "0 2em", "important")
    }
    if (!overflowLayout.checked) {
        document.body.style.removeProperty("padding", "0 2em", "important")
    }setCheckboxStyles()
})





