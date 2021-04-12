function tabFunction(evt,superHero){
      let i,info,tab;
      show = document.getElementsByClassName("show");
      for(i=0; i < show.length; i++){
        show[i].style.display = "none";
      }
      tab = document.getElementsByClassName("tab");
      for(i=0; i < tab.length; i++){
        tab[i].className = tab[i].className.replace(" active","");
      }
      document.getElementById(superHero).style.display = "block";
      evt.currentTarget.className += " active";
    }

    document.getElementById("defaultOpen").click();