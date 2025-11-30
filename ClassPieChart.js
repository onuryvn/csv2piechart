class PieChart {
    constructor(data) {
        this.data = data;
    }

    draw() {
        const container = document.getElementById('container');
        const legend = document.getElementById('legend');

        let svg = _addSVG(container, 'svg', {
            width: '300',
            height: '300',
            viewBox: `0 0 300 300`
        });

        let centerX = 150;
        let centerY = 150;
        let radius = 150;

        // sum of values[] to determine the percentages
        let totalValue = 0;
        for(let data of this.data) { totalValue += data.value; }

        let startAngle = -(Math.PI/2); // radiant of -90°; starting position at 12 am 

        for(let data of this.data) {
            let degrees = data.value/totalValue * 360;
            let radiant = degrees * (Math.PI/180); // radiant of the angle of this section
            let endAngle = startAngle + radiant;

            let x1 = centerX + radius * Math.cos(startAngle);
            let y1 = centerY + radius * Math.sin(startAngle);
            let x2 = centerX + radius * Math.cos(endAngle);
            let y2 = centerY + radius * Math.sin(endAngle);

            let largeArc = radiant > Math.PI ? 1 : 0; // for angles > 180°, largeArc is set to 1

            let pathData = `M${centerX},${centerY} L${x1},${y1} A${radius},${radius} 0 ${largeArc},1 ${x2},${y2} Z`;   

            _addSVG(svg, 'path', {
                d: pathData,
                fill: data.color,
                stroke: 'white',
                'stroke-width': '1'
            });      
            
            let legendItem = new ClassLegend(data, totalValue);
            legend.appendChild(legendItem.createLegend());   

            startAngle = endAngle; // update angle for next section
        }
        container.appendChild(legend);
    }
}