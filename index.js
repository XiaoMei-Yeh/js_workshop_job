document.addEventListener('DOMContentLoaded', function(){
  
  const tem = document.querySelector('template')
  // console.log(tem.content)
  const job = tem.content.querySelector('.job')
  const fulltime = tem.content.querySelector('.fulltime')
  const locationshow = tem.content.querySelector('.location')
  
  document.querySelector('#navbar-burger').addEventListener('click',function(){
    document.querySelector('.navbar-menu').classList.toggle('is-active')
    document.querySelector('.navbar-burger').classList.toggle('is-active')
  })
  
  const searchForm = document.forms['search-job']
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    document.querySelector("#job-pannel").innerHTML='';
    const des = searchForm.description.value
    const location = searchForm.location.value
    const full_time = searchForm.full_time.checked
    if (full_time){
      var full_time_value = "on"
    }
    
    // console.log(full_time)
    const uri = `https://still-spire-37210.herokuapp.com/positions.json?description=${des}&location=${location}&full_time=${full_time_value}`;
    
    fetch(uri)
    .then( response => response.json())
    .then( data=>{
      data.forEach(element => {
        job.textContent = element.title
        full_time.textContent = element.type
        locationshow.textContent = element.location
        var clone = document.importNode(tem.content, true)
        document.querySelector("#job-pannel").append(clone)
      });
    })
        
  })
})