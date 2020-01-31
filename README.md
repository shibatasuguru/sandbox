# 参考URL
https://qiita.com/wMETAw/items/8cb41425a5d0bdace2df

# rails newでプロジェクトを作成
docker-compose run ms-api-web rails new . --force --database=mysql --skip-bundle

# config/database.yml の修正
password: password # docker-compose.ymlのMYSQL_ROOT_PASSWORD
host: ms-api-db # docker-compose.ymlのサービス名
  
# 起動
docker-compose build
docker-compose up -d

# DB作成
docker-compose run ms-api-web rails db:create