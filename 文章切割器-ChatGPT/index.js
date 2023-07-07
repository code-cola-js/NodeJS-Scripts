const fs = require('fs');

function splitArticle(article, chunkSize) {
  const chunks = [];
  let start = 0;
  let end = chunkSize;

  while (start < article.length) {
    if (end >= article.length) {
      end = article.length;
    }
    const chunk = article.substring(start, end);
    chunks.push(chunk);
    start = end;
    end += chunkSize;
  }

  return chunks;
}

// 读取本地txt文件
fs.readFile('./file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件时发生错误：', err);
    return;
  }

  const article = data; // 获取文件内容
  const chunkSize = 3500;

  const result = splitArticle(article, chunkSize);

  // 将每个数组元素写入单独的txt文件
  result.forEach((chunk, index) => {
    const filename = `output_${index + 1}.txt`; // 根据顺序生成文件名
    fs.writeFile(filename, chunk, 'utf8', (err) => {
      if (err) {
        console.error(`写入文件 ${filename} 时发生错误：`, err);
        return;
      }
      console.log(`已成功写入文件 ${filename}`);
    });
  });
});
