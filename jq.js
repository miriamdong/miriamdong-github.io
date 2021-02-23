$( function () {
  var myEl = document.querySelector( '#cats' )

  myEl.addEventListener( 'click', function () {

    let graphTimer =
      setTimeout( () => {
          $( '.bar' ).each( function ( i ) {
            var $bar = $( this );
            $( this ).append( '<span class="count"></span>' );
            setTimeout( function () {
              $bar.css( 'width', $bar.attr( 'data-percent' ) );
            }, i * 100 );
          } );

          $( '.count' ).each( function () {
            $( this ).prop( 'Counter', 0 ).animate( {
              Counter: $( this ).parent( '.bar' ).attr( 'data-percent' )
            }, {
              duration: 2000,
              easing: 'swing',
              step: function ( now ) {
                $( this ).text( Math.ceil( now ) + '%' );
              }
            } );
          } );

        },
        500 )


  } );


  $( '.bar' ).hover( showinfo );
  $( '.bar' ).on( 'click', whenClick );
  $( '.bar' ).on( 'mouseleave', whenLeave );


  function showinfo() {
    $( this ).toggleClass( 'a' );
  }

  function whenClick() {
    $( this ).append( '<span class="count"></span>' );
    $( this ).css( 'width', $( this ).attr( 'data-percent' ) );

    $( '.count' ).each( function () {
      $( this ).prop( 'Counter', 0 ).animate( {
        Counter: $( this ).parent( '.bar' ).attr( 'data-percent' )
      }, {
        duration: 1000,
        easing: 'swing',
        step: function ( now ) {
          $( this ).text( Math.ceil( now ) + '%' );
        }
      } );
    } );

  }
} );