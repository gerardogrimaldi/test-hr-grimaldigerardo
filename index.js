import processor from './processor.js'
const test1 = [
    'ls',
    'mkdir', '-directoryempthy',
    'ls',
    'mkdir', '-directoryfull',
    'cd', '-directoryfull',
    'touch', '-fileName',
    'ls','-r',
    'cd', '..',
    'rm', '-directoryempthy',
    'ls',
    'cd', '..',
    'ls',
    'quit',
    ];


processor(test1);
