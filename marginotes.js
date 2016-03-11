var marginotes = function (options) {
  options = options || {};
  var field = options.field || 'desc';
  var spans = this.filter('span');

  $('body').append('<div class="margintooltip" style="display: none;"></div>');
  spans.css({
    'border-bottom': '1px dashed #337ab7',
    'cursor': 'help'
  });
  this.hover(function (e) {
    var description = $(this).attr(field);
    var parent = $(this.parentElement);
    var position = parent.position();
    var tooltip = $('.margintooltip');
    var width = Math.min(options.width || 100, position.left);

    if (width < 60 || !description) {
      return;
    }

    tooltip
      .css({
        'border-right': 'solid 2px #337ab7',
        'font-size': '13px',
        'left': position.left - width - 5,
        'min-height': parent.height(),
        'padding-right': '7px',
        'position': 'absolute',
        'text-align': 'right',
        'top': position.top,
        'width': width
      })
      .text(description)
      .stop()
      .fadeIn({
        duration:100,
        queue: false
      });
  }, function () {
    $('.margintooltip').stop();
    $('.margintooltip').fadeOut({
      duration: 100
    });
  });
};

window.jQuery.prototype.marginotes = window.$.prototype.marginotes = marginotes;
