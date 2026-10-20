// The al-folio runtime initially selects the system theme. Apply the site's
// dark default once, then let its native switch remember later choices.
try {
  if (typeof setThemeSetting === 'function' && !localStorage.getItem('kb-dark-default-v1')) {
    localStorage.setItem('kb-dark-default-v1', '1');
    setThemeSetting('dark');
  }
} catch (e) { document.documentElement.dataset.theme = 'dark'; }
document.addEventListener('DOMContentLoaded',()=>{const toggle=document.querySelector('#theme-toggle');if(toggle){toggle.onclick=()=>{const dark=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=dark?'dark':'light';try{localStorage.setItem('kb-theme-v2',dark?'dark':'light')}catch(e){}toggle.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme')}}const menu=document.querySelector('.menu-toggle');if(menu)menu.onclick=()=>{const open=document.querySelector('.mainnav').classList.toggle('open');menu.setAttribute('aria-expanded',String(open))};const input=document.querySelector('#publication-filter');if(input){const rows=[...document.querySelectorAll('.publication-entry')];const update=()=>{let count=0;for(const row of rows){const show=row.textContent.toLowerCase().includes(input.value.toLowerCase());row.hidden=!show;if(show)count++}document.querySelector('#publication-count').textContent=count+' of '+rows.length+' publications (articles, books and preprints)'};input.addEventListener('input',update);update()}});