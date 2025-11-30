class ClassLegend {
    constructor(data, totalValue) {
        this.data = data;
        this.totalValue = totalValue;
    }

    createLegend() {
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';

        const colorBox = document.createElement('div');
        colorBox.className = 'legend-color';
        colorBox.style.backgroundColor = this.data.color;

        const labelText = document.createElement('div');
        labelText.textContent = `${this.data.group}: ${(this.data.value/this.totalValue*100).toFixed(1)}%`;
        labelText.className = 'legend-label';

        legendItem.appendChild(colorBox);
        legendItem.appendChild(labelText);

        return legendItem;
    }
}