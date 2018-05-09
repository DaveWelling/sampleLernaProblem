export default ArgyleSocks {
    constructor(){
        this.construction = {
            cotton: true
        }
    }
    getPremium() {
        return {
            artisanal: true,
            ...this.construction
        };
    }
}