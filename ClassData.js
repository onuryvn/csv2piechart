class ClassData {
    constructor() {
        this.data = [];
    }

    build(csvText) {
        const lines = csvText.split('\n');

        for(let i=1; i<lines.length; i++) {
            const columns = lines[i].split(',');

            const group = columns[0].trim();
            const value = parseInt(columns[1]);
            const color = columns[2].trim();

            this.data.push({group, value, color}); // short of {group:group, value:value, color:color}
        }
        return(this.data);
    } 
}