
function moveleft()
{
  // var amount = amount + 10;
  document.getElementsByTagName('div')[0].style.position = "relative";
  document.getElementsByTagName('div')[0].style.left = "-10px";
  console.log('left');



};

function moveright()
{
  document.getElementsByTagName('div')[0].style.position = 'relative';
  document.getElementsByTagName('div')[0].style.right = "-10px";
  console.log('right');
};

function moveup()
{
  document.getElementsByTagName('div')[0].style.position = 'relative';
  document.getElementsByTagName('div')[0].style.top = "-10px";
  console.log('up');
};

function movedown()
{
  document.getElementsByTagName('div')[0].style.position = 'relative';
  document.getElementsByTagName('div')[0].style.bottom = "-10px";
  console.log('down');
};
