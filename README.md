# �Q�lURL
https://qiita.com/wMETAw/items/8cb41425a5d0bdace2df

# rails new�Ńv���W�F�N�g���쐬
docker-compose run ms-api-web rails new . --force --database=mysql --skip-bundle

# config/database.yml �̏C��
password: password # docker-compose.yml��MYSQL_ROOT_PASSWORD
host: ms-api-db # docker-compose.yml�̃T�[�r�X��
  
# �N��
docker-compose build
docker-compose up -d

# DB�쐬
docker-compose run ms-api-web rails db:create