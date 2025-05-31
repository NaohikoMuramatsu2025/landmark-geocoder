# ランドマークジオコーダー（Landmark Geocoder）

ランドマーク名を入力することで、緯度・経度を取得し、Googleマップやカスタム地図に表示できるChrome拡張機能です。

## 🧩 主な機能

- 日本語のランドマーク名を検索
- 緯度・経度をクリップボードにコピー
- Googleマップ上で該当地点を表示
- カスタム地図（article14_map49）上で表示

## 📁 フォルダ構成

```
landmark-geocoder/
├── geocoding-extension/
│   ├── manifest.json
│   ├── popup.html
│   └── popup.js
└── README.md
```

## 🔧 Chrome拡張機能としての使い方

1. このリポジトリをクローンまたはZIPでダウンロード
2. Chromeで `chrome://extensions/` を開く
3. 「デベロッパーモード」をオンにする
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. `geocoding-extension` フォルダを選択

## 🔗 使用API

- [geocoding.jp](https://www.geocoding.jp/)  
  日本語の地名から緯度経度を取得するために使用

## 📝 ライセンス

このプロジェクトは [MIT License](LICENSE) のもとで公開されています。

## 🙌 貢献・改善歓迎！

Pull Request や Issue はいつでも歓迎します。
