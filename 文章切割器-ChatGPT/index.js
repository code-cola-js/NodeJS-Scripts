const fs = require('fs');
const path = require('path'); // Add the path module

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

const outputDir = 'output';
// Create the 'output' directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

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
    const filename = path.join(outputDir, `output_${index + 1}.txt`);
    fs.writeFile(filename, chunk, 'utf8', (err) => {
      if (err) {
        console.error(`写入文件 ${filename} 时发生错误：`, err);
        return;
      }
      console.log(`已成功写入文件 ${filename}`);
    });
  });
});
