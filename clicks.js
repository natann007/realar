(
   function(htmel,url){
      
      const http = {
         method: 'POST',
         headers: {
            'X-CSRF-TOKEN': document.querySelector('#csrf').getAttribute('content'),
            'Content-Type': 'application/json'
         }
      };

      const sendClick = async event => {
         http.body = JSON.stringify({
            page: document.documentURI,
            target: event.target.tagName.toLowerCase(),
            x: event.clientX,
            y: event.clientY
         });
         let response = await fetch(url,http).catch(err => null);
         response && (response=await response.json().catch(err => null));
         response && console.log(response.result);
      };

      htmel.addEventListener('pointerup',sendClick);
   }
)(window,document.baseURI+'click');