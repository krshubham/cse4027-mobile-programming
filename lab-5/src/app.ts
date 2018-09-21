let link:HTMLElement = document.getElementById('sample-link');


let colorsArray: Array<string> = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];

function getIndex(): number{
    const min = 0;
    const max = colorsArray.length;
    const idx: number = Math.floor(Math.random() * (max - min + 1)) + min;
    return idx;
}

link.addEventListener('touchstart', (event): void => {
    event.preventDefault();
    let color = `#`;
    for(let i = 0; i < 6; i++){
        color += colorsArray[getIndex()];
    }
    document.body.style.backgroundColor = color;
}, false);