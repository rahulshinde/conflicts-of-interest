document.addEventListener('DOMContentLoaded', init);

function init(){
  fetch('https://extreme-ip-lookup.com/json/')
  .then( res => res.json())
  .then(response => {
      console.log(response);
      if (response.region != 'Pennsylvania' && response.region != 'Philadelphia'){
        document.querySelectorAll('.movable').forEach((e) => {
          e.remove();
        });
        document.body.classList.add('not_pa');    
      } else{
        document.body.classList.add('pa');
      }
   })
   .catch((data, status) => {
      console.log('Request failed');
   })

   
}


