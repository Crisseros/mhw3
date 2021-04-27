function onClick()
{
    console.log("Cliccato");
    location.reload();
}
const refresh = document.querySelector(".home")
refresh.addEventListener("click", onClick);

function toggle(event){
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details');
  //const image = event.currentTarget.querySelector('img');
  const text = event.currentTarget.querySelector('.button');

  isVisible = !isVisible;
  if (isVisible) {
    details.classList.remove('hidden');
    //image.src = DOWN_ARROW;
  } else {
    details.classList.add('hidden');
    //image.src = RIGHT_ARROW;
    text.textContent = 'Account';
  }
}
let isVisible = false;

const detailToggle = document.querySelector('.button');
detailToggle.addEventListener('click', toggle);




function search(event){

  event.preventDefault();

  const author_input= event.currentTarget.value;
  const elems= document.querySelectorAll(".contenuto h1");
  
  for(let elem of elems){
    if(elem.textContent.toLowerCase().search(author_input.toLowerCase()) === -1){
       elem.parentElement.classList.add("hidden");
    }
    else if(elem.parentElement.classList.contains("hidden")) elem.parentElement.classList.remove("hidden");
  }


}

const form = document.querySelector("form");
form.addEventListener("submit",search)






/*function onResearch(event){
  const strsrch = event.currentTarget.value;
  const elems = document.querySelectorAll("#unfollowed div h2");

  for(let elem of elems){
      if(elem.textContent.toLowerCase().search(strsrch.toLowerCase()) === -1){
          elem.parentElement.classList.add("hidden");
      }
      else if(elem.parentElement.classList.contains("hidden")) elem.parentElement.classList.remove("hidden");
  }

}
function onResearch(event){
    const strsrch = event.currentTarget.value;
    const elems = document.querySelectorAll("#unfollowed div h2");

    for(let elem of elems){
        if(elem.textContent.toLowerCase().search(strsrch.toLowerCase()) === -1){
            elem.parentElement.classList.add("hidden");
        }
        else if(elem.parentElement.classList.contains("hidden")) elem.parentElement.classList.remove("hidden");
    }

}









function ricerca(tab, lists) {
    var input; 
    var filtro;
    var lista;
    var voci;
    var x;
    var i;
    var testo;
      input = document.getElementById(tab);
      filtro = input.value.toUpperCase();
      lista = document.getElementById(lists);
      voci = lista.getElementsByTagName("span");
      for (i = 0; i < voci.length; i++) {
        x = lista.getElementsByTagName("span")[i];
        testo = x.textContent || x.innerText;
        if (testo.toUpperCase().indexOf(filtro) > -1) {
          voci[i].style.display = "";
        } else {
          voci[i].style.display = "none";
        }
      }
    }*/






