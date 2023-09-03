//Execute script after page is load
$(document).ready(function () 
{
  // Tooltip tonen bij hover
  $('img').hover
  (
    // functie handlerIn
    function () 
    {
        $('#divTooltip').css('display', 'block');
    },
    // functie handlerOut
    function () 
    {
        $('#divTooltip').css('display', 'none');
    }
  );// einde .hover()
}); // end of the document
