/* .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. . /
.--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. . /

*/
document.addEventListener('click',(event)=>{
  const evTar = event.target;
  if (evTar.className.includes('clearinput')){
  // console.log(event,'<<clearinput::',evTar);
    const el = evTar.previousSibling;
    if (el){
      el.value = '';
    };
    return;
  };
  return;
});
