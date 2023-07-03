// 引入 fs 模块
const fs = require('fs');

// 定义要复制的文件名
const files = ['robots.txt', 'sitemap.xml'];

// 定义目标目录
const dest = 'dist/venia-static';

// 遍历文件名数组
files.forEach(file => {
  // 拼接源文件路径
  const srcFile = `./${file}`;
  // 拼接目标文件路径
  const destFile = `./${dest}/${file}`;
  // 复制文件
  fs.copyFile(srcFile, destFile, err => {
    // 处理错误
    if (err) {
      console.error(err);
    } else {
      // 打印成功信息
      console.log(`Copied ${srcFile} to ${destFile}`);
    }
  });
});


setTimeout(() => {
  
  console.log("移动完毕++++++++++++++++++++++++++++")
}, 1000);