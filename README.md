# 売上管理システム Firebase対応版

このプロジェクトは、売上日報データをFirebase Realtime Databaseに保存・取得する機能を持つ売上管理システムです。

## 主な機能

- 売上日報データの登録・編集
- Firebase Realtime Databaseへのデータ同期
- リアルタイムでのデータ更新
- 店舗管理機能
- 予算管理機能
- 売上分析・レポート機能

## Firebase設定

### 必要なファイル
1. `uriage.html` - メインのアプリケーションファイル
2. `firebase-config.js` - Firebase設定とヘルパー関数

### Firebase設定情報
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyCPAFs5hVHNgG9X5z9enzspidT1ZwJJ9-A",
  authDomain: "uriagehoukoku-7f691.firebaseapp.com",
  projectId: "uriagehoukoku-7f691",
  databaseURL: "https://uriagehoukoku-7f691-default-rtdb.firebaseio.com/",
  storageBucket: "uriagehoukoku-7f691.appspot.com",
  messagingSenderId: "343060704167",
  appId: "1:343060704167:web:1aa32a7a64b485cab02482",
  measurementId: "G-7LDF9CLPWV"
};
```

## データ構造

### Realtime Databaseの構造
```
uriagehoukoku-7f691/
├── salesData/          # 売上データ
├── editHistory/        # 編集履歴
├── storeData/          # 店舗データ
├── budgetData/         # 予算データ
├── closedDaysData/     # 店休日データ
└── stores/             # 店舗一覧
```

## 使用方法

1. Webブラウザで `uriage.html` を開く
2. 売上日報データを入力して登録
3. データは自動的にFirebase Realtime Databaseに保存される
4. 他のユーザーと リアルタイムでデータを共有

## 主な変更点

### localStorage → Firebase Realtime Database
- 全てのデータ保存処理をFirebaseに移行
- 非同期処理に対応（async/await）
- エラーハンドリングの強化
- フォールバック機能（Firebase接続エラー時はlocalStorageを使用）

### 新機能
- リアルタイムデータ同期
- 複数ユーザー間でのデータ共有
- データの永続化（ブラウザを閉じてもデータが保持される）

## セキュリティ注意点

- 本設定では認証を使用していないため、Firebaseのセキュリティルールの設定が重要
- 本番環境では適切な認証・認可システムの実装を推奨

## トラブルシューティング

### Firebase接続エラー
- ネットワーク接続を確認
- Firebaseプロジェクトの設定を確認
- エラー時は自動的にlocalStorageにフォールバック

### データが同期されない
- Firebaseコンソールでリアルタイムデータベースの状態を確認
- ブラウザの開発者ツールでエラーログを確認

## 開発情報

### 技術スタック
- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (ES6+)
- Firebase SDK 9.22.0
- Flatpickr (日付選択)

### 対応ブラウザ
- Chrome (推奨)
- Firefox
- Safari
- Edge

---

## 更新履歴

### v2.0.0 (Firebase対応版)
- Firebase Realtime Database統合
- リアルタイムデータ同期機能
- 非同期処理対応
- エラーハンドリング強化