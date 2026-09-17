document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{const value=button.dataset.copy;try{await navigator.clipboard.writeText(value);button.textContent='Copied!';setTimeout(()=>button.textContent='Copy IP',1500)}catch{button.textContent=value}}));
