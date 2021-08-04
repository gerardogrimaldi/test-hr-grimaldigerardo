import FileSystem from './fileSystem.js';

function getParameter(commands, i) {
  if (!commands) return;
  if(commands[i + 1][0] === '-') {
    commands[i + 1].slice(1);
    return commands[i + 1].substring(1);
  }
  return false;
}

export default function processor(commands) {
  const fileSystem = new FileSystem;
  console.log(fileSystem.current.fileName);
  for (let i = 0; i < commands.length; i++) {
    let param;
    let nextCommand = commands[i + 1] ? commands[i + 1] : null;
    switch (commands[i]) {
      case 'ls':
        param = getParameter(commands, i);
        if (param) i++;
        fileSystem.list(param)
        break;
      case 'mkdir':
        param = getParameter(commands, i);
        if (param) i++;
        if (param.length < 101) {
          fileSystem.create(param,true);
        } else {
          console.log("Invalid Folder Name\n");
        }
        break;
      case 'touch':
        param = getParameter(commands, i);
        if (param) i++;
        if (param.length < 101) {
          fileSystem.create(param,false);
        } else {
          console.log("Invalid File Name\n");
        }
        break;
      case 'cd':
        param = getParameter(commands, i);
        if (nextCommand === '..') param = nextCommand;
        if (param) i++;
        fileSystem.changeDirectory(param);
        break;
      case 'rm':
        if (nextCommand) param = getParameter(commands, i);
        if (param) i++;
        fileSystem.remove(param);
        break;
      case 'quit':
        console.log('Terminated');
        break;
      default:
        console.log('Sorry, incorrect command.', commands[i]);

    }
  }
}

