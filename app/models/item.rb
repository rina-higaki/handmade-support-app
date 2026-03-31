class Item < ApplicationRecord
  has_one_attached :image

  # ===== バリデーション =====
  validates :title, presence: true
  validates :description, presence: true

  validates :price,
    presence: true,
    numericality: { greater_than_or_equal_to: 0, message: "は0以上で入力してください" }

  validates :stock,
    presence: true,
    numericality: { greater_than_or_equal_to: 0, message: "は0以上で入力してください" }
end