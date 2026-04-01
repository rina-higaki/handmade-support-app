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

  const feedback = document.getElementById('image_feedback');
  const placeholder = document.getElementById('image_placeholder');

  if (!titleInput) return; // フォームページ以外では実行しない

  // ===== テキスト系プレビュー =====
  titleInput.addEventListener('input', () => {
    previewTitle.textContent = titleInput.value || "タイトル";
  });

  descriptionInput.addEventListener('input', () => {
    previewDescription.textContent = descriptionInput.value || "説明文がここに表示されます";
  });

  priceInput.addEventListener('input', () => {
    let value = priceInput.value;

    value = value.replace(/[^0-9]/g, '');
    value = value.replace(/^0+(\d)/, '$1');

    priceInput.value = value;
    previewPrice.textContent = value ? `¥${value}` : "¥0";
  });

  stockInput.addEventListener('input', () => {
    let value = stockInput.value;

    value = value.replace(/[^0-9]/g, '');
    value = value.replace(/^0+(\d)/, '$1');

    stockInput.value = value;
    previewStock.textContent = value ? `在庫数：${value}` : "在庫数：0";
  });

  // ===== 画像プレビュー + プレースホルダー + フィードバック =====
  imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];

    if (file) {
      // プレビュー表示
      const reader = new FileReader();
      reader.onload = e => {
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';
        placeholder.style.display = 'none'; // プレースホルダー非表示
      };
      reader.readAsDataURL(file);

      // ===== フィードバック =====
      if (file.size > 2 * 1024 * 1024) {
        feedback.textContent = "⚠️ 画像サイズが大きいです（2MB以下推奨）";
        return;
      }

      const fileName = file.name.toLowerCase();

      if (fileName.includes("dark")) {
        feedback.textContent = "💡 少し暗い可能性があります。明るい場所で撮影するとより魅力的です";
      } else if (fileName.includes("back")) {
        feedback.textContent = "💡 背景が目立つ可能性があります。シンプルな背景がおすすめです";
      } else if (fileName.includes("blur")) {
        feedback.textContent = "💡 ぼやけている可能性があります。ピントを合わせて撮影しましょう";
      } else {
        feedback.textContent = "✅ いい写真です！このままでも魅力が伝わります";
      }

    } else {
      // リセット
      previewImage.src = '';
      previewImage.style.display = 'none';
      placeholder.style.display = 'flex'; // プレースホルダー再表示
      feedback.textContent = "画像を選択するとアドバイスが表示されます";
    }
  });
});

// ダミーボタン用
document.addEventListener('DOMContentLoaded', () => {
  // トースト要素を作成
  let toast = document.createElement('div');
  toast.className = 'toast-message';
  document.body.appendChild(toast);

  function showToast(message, duration = 2000) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  // dummy クラスをもつボタンにイベント追加
  document.querySelectorAll('.dummy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast("現在改修中です✨");
    });
  });
});