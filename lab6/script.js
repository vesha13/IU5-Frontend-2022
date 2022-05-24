 /////1/////

    const like = document.getElementById("root");
    like.style.backgroundColor = "black";
    const handleClick = (e) =>{
        const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
        like.style.backgroundColor = randomColor;

    };

    like.addEventListener("click", handleClick);

     /////2/////
    const time = document.getElementById("tim");
    const newTime = document.createElement("h1");
    let counter = 0;
    newTime.style.marginBlockStart = "10px";

    newTime.innerText =counter;
    time.append(newTime);


    const sstart =(e)=>{
     Inter = setInterval(() =>
    {
    counter += 1;
    newTime.innerText =counter;
    time.append(newTime);
    e.preventDefault();},
    1000);
    };
 
    //time.addEventListener("mouseleave", stop);
    time.addEventListener("mouseenter", sstart, {once:false});
    time.onmouseleave = () => clearInterval(Inter);


        /////3/////

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
        }

        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function(event) {
          if (!event.target.matches('.dropbtn')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
              let openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');}
            }
        }
        }

       /////4/////
const smile = document.getElementById("pacman");
const here = document.getElementById("love");
let cl = 0;
smile.onclick = () => ( cl = 1);

document.addEventListener("keydown", (event) =>
{if (event.code == "Escape") here.onmousemove=null});
here.onmousemove = (e) =>{
    if (cl)
    {
        smile.style.position = 'absolute';
        document.body.append(smile);
          smile.style.zIndex = 1000;
          function moveAt(e) {
            smile.style.left = e.pageX - smile.offsetWidth / 2  + 'px';
            smile.style.top = e.pageY - smile.offsetHeight / 2  + 'px';
          }
          here.onmousemove = function(e) {
            moveAt(e);
    }
}
}
document.addEventListener("click", here.onmousemove)

