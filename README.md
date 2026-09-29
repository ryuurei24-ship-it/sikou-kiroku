# 思考記録（sikou-kiroku）

公開サイト: https://ryuurei24-ship-it.github.io/sikou-kiroku/

GitHubのWeb画面だけで、記事の追加と更新ができる。

## 新しい問いを追加する

1. このリポジトリを開き、`src` → `content` → `questions` と進む
2. 右上の「Add file」→「Create new file」を押す
3. ファイル名を入力する。形式は `テーマの英語名-番号.md`（例: `rule-of-law-1.md`）。同じテーマで2つ目の問いなら `rule-of-law-2.md`
4. 下のテンプレートをコピーして貼り付け、中身を書き換える
5. 右上の「Commit changes...」→「Commit changes」を押す（mainに直接コミット）
6. 「Actions」タブで、緑のチェックが付くまで待つ（反映の完了）

## 既存の問いを更新する

1. `src/content/questions/` の中から対象のファイルを開く
2. 右上の鉛筆アイコン（Edit）を押す
3. 「問いの検討」に追記し、冒頭の `updated:` を今日の日付に直す
4. 「Commit changes...」→「Commit changes」を押す
5. 「Actions」タブで緑のチェックを確認する

## テンプレート

```markdown
---
title: 問いのタイトル
topics:
  - トピック名
created: 2026-00-00
updated: 2026-00-00
sources:
  - title: 記事のタイトル
    url: https://example.com/
---

### 記事の要約

### 記事から生じた問い

### 問いの検討
```
---

以前のREADMEになる。記録として残しておく。

# 問いの記録

Astro + GitHub Pages で運用する、問いと思考の途中経過を記録するブログ。

## 公開までの手順（最初の1回だけ）

1. GitHubに新しいリポジトリを作成する（Public、README等は追加しない）
2. このフォルダの中身をすべてアップロードする
   - リポジトリページで「Add file」→「Upload files」を開き、フォルダの中身をドラッグ＆ドロップ
   - 隠しフォルダの `.github` も忘れずにアップロードする（見えにくい場合は個別にアップロード）
3. `astro.config.mjs` をGitHub上で直接編集する（鉛筆アイコン）
   - `site` を `https://自分のユーザー名.github.io` に書き換える
   - `base` を `/リポジトリ名` に書き換える（例: リポジトリ名が `shikou-kiroku` なら `/shikou-kiroku`）
4. リポジトリの「Settings」→「Pages」を開き、「Source」を **GitHub Actions** に設定する
5. 数分待つと、`https://自分のユーザー名.github.io/リポジトリ名/` でサイトが公開される
   - 進行状況は「Actions」タブで確認できる

## 新しい記事を書く手順（普段の運用）

1. `src/content/posts/` フォルダを開く
2. 「Add file」→「Create new file」で新しいファイルを作る（ファイル名は英数字、拡張子は `.md`）
3. 以下の形式で書く

   ```
   ---
   title: 記事タイトル
   date: 2026-09-01
   tags: ["タグ1", "タグ2"]
   ---

   本文をここに書く。
   ```

4. 画面下の「Commit changes」を押すと、自動でビルド・公開される（数分かかる）

## 下書きにしたいとき

frontmatterに `draft: true` を追加すると、一覧・個別ページどちらにも表示されなくなる。
公開時に `draft: true` の行を消すか `false` にする。

## ローカルで確認したい場合（任意）

エンジニア的な操作が必要になるが、以下でローカルプレビューできる。

```
npm install
npm run dev
```
