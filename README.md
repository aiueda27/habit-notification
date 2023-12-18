# Habit Notification

## このリポジトリについて

サーバーベースのリポジトリに、frontendディレクトリが入っているモノリポジトリになっています

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




## 技術スタック

- Ruby version 3.0.2
- Rails version 7
- React
- Redux
- TypeScript
- Chakra Ui

