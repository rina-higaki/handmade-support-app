// app/javascript/application.js
document.addEventListener('DOMContentLoaded', () => {
  const titleInput = document.getElementById('item_title_input');
  const descriptionInput = document.getElementById('item_description_input');
  const priceInput = document.getElementById('item_price_input');
  const stockInput = document.getElementById('item_stock_input');
  const imageInput = document.getElementById('item_image_input');

  const previewTitle = document.getElementById('preview_title');
  const previewDescription = document.getElementById('preview_description');
  const previewPrice = document.getElementById('preview_price');
  const previewStock = document.getElementById('preview_stock');
  const previewImage = document.getElementById('preview_image');

  if (!titleInput) return; // フォームページ以外では実行しない

  // テキスト系の更新
  titleInput.addEventListener('input', () => previewTitle.textContent = titleInput.value || "タイトル");
  descriptionInput.addEventListener('input', () => previewDescription.textContent = descriptionInput.value || "説明文がここに表示されます");
  priceInput.addEventListener('input', () => previewPrice.textContent = priceInput.value ? `¥${priceInput.value}` : "¥0");
  stockInput.addEventListener('input', () => previewStock.textContent = stockInput.value ? `在庫数：${stockInput.value}` : "在庫数：0");

  // 画像プレビュー
  imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';
      }
      reader.readAsDataURL(file);
    } else {
      previewImage.src = '';
      previewImage.style.display = 'none';
    }
  });
});