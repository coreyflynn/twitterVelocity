function listCollapse(el, cat)
{
	if(el.nextSibling.style.display=='none')
	{
		el.innerHTML=cat + ' &uarr;';
		el.nextSibling.style.display='block'; 
	}
	else
	{ 
		el.innerHTML=cat + ' &darr;';
		el.nextSibling.style.display='none';
	}
}