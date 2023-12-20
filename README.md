# Habit Notification

## このリポジトリについて

サーバーベースのリポジトリに、frontendディレクトリが入っているモノリポジトリになっています
この課題がトークンを用意していてAPIを叩くときにbearer tokenで渡す予定だったが、すでに認証部分を実装してしまったため一旦認証機能追加でフロントでトークンを保存するようになってます。

## サーバー側環境構築

- 以下コマンドを実行してサーバー側に必要なパッケージをインストールする

```
bundle install
```

- 以下コマンドでデータベースを同期します

```
rails db:migrate
```

- 必要な環境構築をセット


- 立ち上げれば、localhost3001で起動しています。
```
rails s
```


## フロント側環境構築

- 以下コマンドを実行してフロントディレクトリに移動
```
cd frontend 
```

- 以下コマンドを実行してフロント側に必要なパッケージをインストールする
```
npm install
```

```
npm run dev
```

- localhost3000にアクセス



## アプリの使い方

- ログインID、パスワードを入力して(name: ‘ai’,  password: '123')ログイン
- 習慣化したいことを作成、編集、削除
- slack通知（rakeタスク起動）
```
rails habit_notifier:habits
```
- slackに通知が来ていることを確認してください



## 技術スタック

- Ruby version 3.0.2
- Rails version 7
- React
- Redux
- TypeScript
- Chakra Ui


## 実装しきれなかったこと
TODOに一部残してありますが、こちらにも記録しておきます

- Validation
- axios
- showpassword function in login
- Import整形ライブラリ追加
- Type
- Test (factory-bot 使用）
  など

