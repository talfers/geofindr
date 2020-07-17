var input = document.querySelector( '.file-input' );
var label = document.querySelector( '.upload-btn span' );
var fileNameSpan = document.querySelector( '#file-name' );

input.addEventListener( 'change', function( e ) {
  var fileName = '';
  var i = e.target.value.indexOf("fakepath");
  fileName = e.target.value.substring(i + 9);
  console.log(fileName)
  if( fileName ) {
    fileNameSpan.innerHTML = fileName;
  }
  else {
    fileNameSpan.innerHTML = "";
  }
});
