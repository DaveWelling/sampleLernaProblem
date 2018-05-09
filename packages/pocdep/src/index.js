export default YourMom {
    constructor(){
        this.batch = {
            nuts: true
        }
    }
    makeBrownies() {
        return {
            chocolate: true,
            ...this.batch
        }
    }
}