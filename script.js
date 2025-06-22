const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const previewWindow = document.getElementById('preview-window');

function updatePreview() {
  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const js = `<script>${jsCode.value}<\/script>`;
  const output = `${html}\n${css}\n${js}`;
  const previewDoc = previewWindow.contentDocument || previewWindow.contentWindow.document;
  previewDoc.open();
  previewDoc.write(output);
  previewDoc.close();
}

htmlCode.addEventListener('input', updatePreview);
cssCode.addEventListener('input', updatePreview);
jsCode.addEventListener('input', updatePreview);

updatePreview();