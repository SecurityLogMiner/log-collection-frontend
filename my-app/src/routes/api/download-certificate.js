export async function get() {
    // Logic to fetch the file data
    // For example, reading a file from the filesystem
    const fs = require('fs');
    const path = require('path');
  
    try {
      const filePath = path.resolve('path', 'to', 'your', 'certificate.pem');
      const file = fs.readFileSync(filePath);
  
      return {
        status: 200,
        headers: {
          'Content-Type': 'application/octet-stream',
          'Content-Disposition': `attachment; filename="certificate.pem"`
        },
        body: file
      };
    } catch (error) {
      console.error(error);
      return {
        status: 500,
        body: 'Internal Server Error'
      };
    }
  }
  