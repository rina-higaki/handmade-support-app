# Database Design

## ◇概要
本アプリでは、ユーザー（出品者）・作品・画像を中心にデータを管理する。
シンプルな構成とし、拡張しやすい設計とする。

## ◇テーブル一覧
・users  
・items  
・images  

---
## ◇users
ユーザー情報を管理するテーブル

| カラム名 | 型 | 説明 |
|---|---|---|
| id | integer | ユーザーID |
| email | string | メールアドレス |
| password_digest | string | パスワード |

---
## ◇items
作品情報を管理するテーブル

| カラム名 | 型 | 説明 |
|---|---|---|
| id | integer | 作品ID |
| user_id | integer | ユーザーID（外部キー） |
| title | string | タイトル |
| description | text | 説明 |
| price | integer | 価格（単位：円） |
| stock | integer | 在庫数（0以上の整数）|
| main_image_id | integer | メイン画像ID |

---
## ◇images
作品画像を管理するテーブル

| カラム名 | 型 | 説明 |
|---|---|---|
| id | integer | 画像ID |
| item_id | integer | 作品ID（外部キー） |
| image_url | string | 画像URL |

---
## ◇リレーション

・users は複数の items を持つ（1対多） 
・items は複数の images を持つ（1対多）  

---

## ◇設計意図

・作品（items）を中心にシンプルな構造とすることで、開発のしやすさと拡張性を両立する  
・画像を別テーブルに分けることで、複数画像に対応する  
・メイン画像を明示的に持たせることで、一覧表示時のUXを向上させる 
