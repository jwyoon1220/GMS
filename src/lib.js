let clk = 0;
let bak = 0;

function onclk() {
    console.log('clk');
    clk++;
    document.getElementById('bak').innerText = clk;

    if (clk >= 100) {
        bak++;
        clk = 0;
        document.getElementById('clk_meter').innerText = bak; 
    }
}