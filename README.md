# dockerをビルド
docker-compose build --no-cache

# compose up
docker-compose up -d

# dockerに入る
docker exec -it node sh

# appフォルダ内にpackage.jsを生成する
yarn init --yes

# package.jsを書き換える

```
{
  "name": "app",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "axios": "^0.16.2",
    "dotenv": "^8.2.0",
    "querystring": "^0.2.0"
  }
}
```

# npm install
npm install
npm install --save readline-async

# .env のトークンを書き換える

# line.jsを実行
node line.js