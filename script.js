window.onload = ()=>{
    document.querySelectorAll('ul.carousel li').forEach((e, idx)=>{
        const ul = document.querySelector('ul.carousel_list');
        const li = document.createElement('li');
        li.textContent= idx;
        ul.appendChild(li);
    });
    document.querySelectorAll('ul.carousel_list li').forEach((e, idx)=>{
        e.addEventListener('click',el=>{
            document.querySelector('ul.carousel').style.marginLeft = `-${idx*100}%`;
        });
    });
}