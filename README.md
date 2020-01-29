# 参考URL
https://qiita.com/wMETAw/items/8cb41425a5d0bdace2df

# rails newでプロジェクトを作成
docker-compose run web rails new . --force --database=mysql --skip-bundle

# DBhostの修正
default: &default
  adapter: mysql2
  encoding: utf8
  pool: 5
  username: root
  password: root # docker-compose.ymlのMYSQL_ROOT_PASSWORD 
  host: db       # docker-compose.ymlのサービス名
  
# 起動
docker-compose build
docker-compose up -d

# DB作成
docker-compose run web rails db:create