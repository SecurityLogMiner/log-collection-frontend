<script>
    async function downloadCertificate() {
      const response = await fetch('/api/download-certificate');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'certificate.pem'; // Or another appropriate filename
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        console.error('Download failed');
      }
    }
  </script>
  
  <button on:click={downloadCertificate}>Download Certificate</button>
  