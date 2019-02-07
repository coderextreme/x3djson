mkdir x3d
cp `find /Users/johncarlson/Downloads/www.web3d.org/x3d/content/examples/X3dForWebAuthors/ -name '*.x3d'` x3d
node json.js x3d/*.x3d > json.log
