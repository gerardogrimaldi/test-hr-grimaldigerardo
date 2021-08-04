class File {
  fileName;
  isFolder;
  upperLevel;
  children;

  constructor(name, folder) {
    this.fileName = name;
    this.isFolder = folder;
    this.upperLevel = null;
    this.children = [];
  }
}

export default File;
