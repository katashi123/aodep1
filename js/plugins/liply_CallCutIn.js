(function(){
    var Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(cmd, args){
        if(cmd.toLowerCase() === 'callCutIn'.toLowerCase()){
            callCutIn(+args[0]);
        }

        return Game_Interpreter_pluginCommand.apply(this, arguments);
    }
})();