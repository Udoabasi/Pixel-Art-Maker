// Select color input
// Select size input (height and width)
let height, width, colour;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
})
function makeGrid(h, w) {
    $('tr').remove();
    for (let i = 1; i <= h; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (let j = 1; j <=w; j++) {
            $('#table' + i).append('<td></td>');
        }
    }
        $('td').click(function addColor() {
          color = $('#colorPicker').val();
            if ($(this).attr('style')) {
              $(this).removeAttr('style')
            } else {
              $(this).attr('style', 'background-color:' + color);
            }
          })
}
