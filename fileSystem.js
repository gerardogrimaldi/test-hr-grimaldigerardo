import File from './file.js';

class FileSystem {
  root = new File();
  current = this.root;

  constructor() {
    this.root.fileName = '/root';
    this.root.isFolder = true;
  }

  create(name, isFolder) {
    if (this.current.isFolder) {
      for (let i = 0; i < this.current.children.length; i++) {
        if (this.current.children[i].fileName === name) {
          console.log("Directory already exists\n");
        }
      }
      let newFile = new File(name, isFolder);
      newFile.fileName = name;
      newFile.isFolder = isFolder;
      newFile.upperLevel = this.current;
      this.current.children.push(newFile);
      return true;
    } else {
      console.log("Can only create a file under a directory\n");
      return false;
    }
  }

  list(r) {
    for (let i = 0; i < this.current.children.length; i++) {
      console.log(this.current.children[i].fileName + (this.current.children[i].isFolder ? '/' : '') );
    }
  }

  changeDirectory(dir) {
    if (dir === '..' && this.current.upperLevel !== null) {
      this.current = this.current.upperLevel;
      return true;
    }
    for (let i = 0; i < this.current.children.length; i++) {
      if (this.current.children[i].fileName === dir) {
        this.current = this.current.children[i];
        return true;
      }
    }
    console.log()
    return false;
  }

  remove(name) {
    let deleted = false;
    for (let i = 0; i < this.current.children.length; i++) {
      if (this.current.children[i].fileName === name) {
        this.current.children.splice(i, 1);
        deleted = true;
      }
      return deleted;
    }
  }
}


export default FileSystem;
