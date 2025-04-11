export function readFile(filePath) {
    // 浏览器环境下需要使用 fetch 等方式
    try {
        const fs = require('fs');
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error('Error reading file:', error);
        return null;
    }
}
    
