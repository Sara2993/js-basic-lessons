const bt1=document.queryselector('.btn1');
const coolbutton=document.queryselector('.btn2');

function handleclick(){
    console.log('it got clicked!!!');
}
btn1.addeventlistner('click',handclick);
const hooray=()=>console.log('hooray!');
coolbutton.addeventlistner('click',hooray);
btn1.removeeventlistener('click',handleclick);