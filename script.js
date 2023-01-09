(()=>{
    const width = document.getElementById('input_width');
    const height = document.getElementById('input_height');
    const radius = document.getElementById('input_radius');
    const color = document.getElementById('input_color');
    const count = document.getElementById('input_count');
    const button = document.getElementById('btn_show');
    const playground = document.getElementById('playground');

    button.addEventListener('click', ()=>{

        for(let i = count.value; i>0; i--){
            const figure = document.createElement('div');
            figure.style.width = `${width.value}px`;
            figure.style.height = `${height.value}px`;
            figure.style.borderRadius = `${radius.value}px`;
            figure.style.backgroundColor = color.value;
            playground.appendChild(figure);
        }
    });
})();