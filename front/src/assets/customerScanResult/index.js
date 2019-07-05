// import $ from 'zepto';
import ScanResult from "@components/customerScanResult/"
class Index {
    constructor() {
        this.render();
    }
    render() {
        new ScanResult({
            el: $(".container")
        })
    }
}
new Index();