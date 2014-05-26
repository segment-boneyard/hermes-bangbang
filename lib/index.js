
/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Teach Hermes to repeat the last command on !!.
 *
 * @return {Function}
 */

function plugin(){
  var last;

  return function(robot){
    robot.help('!!', 'A quick way to repeat the last command you told me.');

    robot.on('mention', /.*/, function(res){
      var msg = res.message.trim();
      if (!msg || '!!' == msg) return;
      last = msg;
    });

    robot.on('mention', '!!', function(res){
      if (!last) return;
      var msg = robot.mention() + last;
      res.hear(msg);
    });
  };
}