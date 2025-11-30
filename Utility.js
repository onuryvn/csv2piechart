/** 
 * @description         Apply setAttribute to a DOM object
 * @source              Prof. Dr. Carlo Simon
 * 
 * @param {Object} o    Object of the DOM setAttribute() is applied to
 * @param {Object} a    Object that contains a set of attributes and their values
 */
function _setAttr(o, a) {
    for (let i in a)
        o.setAttribute(i, a[i]);
} // _setAttr(o, a)

/** 
 * @description         Create a SVG element, add it to its context, 
 *                      set its attributes and return it
 * @source              Prof. Dr. Carlo Simon
 * 
 * @param {Object} c    SVG-Context of the element
 * @param {string} f    Form of the SVG to add
 * @param {Object} a    Object with all attributes and their new values
 * 
 * @return              The new SVG element
 */
function _addSVG(c, f, a) {
	let n = document.createElementNS('http://www.w3.org/2000/svg', f);
	_setAttr(n,a);
	return c.appendChild(n);
} // _addSVG(c, f, a)

/**
 * @description         User input, to get information about the CSV file
 */
function addTitle() {
    let input = prompt('Please input: "City, Year, Topic"');

    let inputValues = input.split(',');
    
    let city = inputValues[0].trim();
    let year = inputValues[1].trim();
    let topic = inputValues[2].trim();

    const title = document.getElementById('title');
    title.textContent = `${city} (${year})`;
    const subtitle = document.createElement('div');
    subtitle.textContent = `${topic}`;

    title.appendChild(subtitle);
} // addTitle()

/**
 * @description         Load CSV file, create a new FileReader object
 *                      and a new ClassData object.
 *                      Then create new PieChart object and call draw function
 */
function load() {
    const file = document.getElementById('csvFile').files[0];
    if(!file)
        return;
    const reader = new FileReader();
    reader.onload = function(event) {
        const data = new ClassData;
        const d = data.build(event.target.result);
        const piechart = new PieChart(d);
        piechart.draw();
    };
    reader.readAsText(file);
} // load()