const fs = require('fs');

console.log('开始同步文件');

const source = [
    './src/components/MagentoRoute/magentoRoute.gql.js',
    './src/components/MagentoRoute/useMagentoRoute.js',
    './src/components/MagentoRoute/magentoRoute.js',
    './src/components/LoadingIndicator/indicator.js',
    './src/components/LoadingIndicator/static.js',
    './needReplace/indicator.module.css',
    './needReplace/Parser.js',
];

const target = [
    './node_modules/@magento/peregrine/lib/talons/MagentoRoute/magentoRoute.gql.js',
    './node_modules/@magento/peregrine/lib/talons/MagentoRoute/useMagentoRoute.js',
    './node_modules/@magento/venia-ui/lib/components/MagentoRoute/magentoRoute.js',
    './node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js',
    './node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js',
    './node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.module.css',
    './node_modules/@magento/directive-parser/src/Parser.js'
];

for (let i = 0; i < source.length; i++) {
    const read = fs.createReadStream(source[i]);
    const write = fs.createWriteStream(target[i]);

    read.pipe(write);
}

console.log('同步文件完毕');
