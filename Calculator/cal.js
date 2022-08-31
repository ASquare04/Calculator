function addition()
{
    document.f.res.value=parseInt(document.f.fn.value)+parseInt(document.f.sn.value);
}
function subtract()
{
    document.f.res.value=parseInt(document.f.fn.value)-parseInt(document.f.sn.value);
}
function multiply()
{
    document.f.res.value=parseInt(document.f.fn.value)*parseInt(document.f.sn.value);
}
function division()
{
    document.f.res.value=parseInt(document.f.fn.value)/parseInt(document.f.sn.value);
}
function modulus()
{
    document.f.res.value=parseInt(document.f.fn.value)%parseInt(document.f.sn.value);
}
function cls()
{
    document.f.res.value=document.f.fn.value=document.f.sn.value="";
}
