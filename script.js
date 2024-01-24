
const progress=document.getElementById('progress');
const Previous=document.getElementById('Previous');
const Next=document.getElementById('Next');
const circles=document.querySelectorAll('.circle')

let currentActive = 1;

Next.addEventListener('click',() =>{
currentActive++;
if(currentActive > circles.length){
    currentActive = circles.length
}
update();
})

Previous.addEventListener('click',() =>{
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    update();
    })

    function update()
    {
        circles.forEach((circle,idx) => {
            if(idx < currentActive)
            {
                circle.classList.add('active')
            }
            else
            {
                circle.classList.remove('active')
            }
        })

        const actives = document.querySelectorAll('.active');
       
        progress.style.width = (actives.length-1) / (circles.length -1) * 100 + '%'
        if(currentActive === 1)
        {
            Previous.disabled = true;
        }
        else if(currentActive === circles.length)
        {
            Next.disabled = true;
        }
        else
        {
            Previous.disabled = false;
            Next.disabled = false;
        }

    }