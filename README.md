# �Q�lURL
https://qiita.com/wMETAw/items/8cb41425a5d0bdace2df

# rails new�Ńv���W�F�N�g���쐬
docker-compose run web rails new . --force --database=mysql --skip-bundle

# DBhost�̏C��
default: &default
  adapter: mysql2
  encoding: utf8
  pool: 5
  username: root
  password: root # docker-compose.yml��MYSQL_ROOT_PASSWORD 
  host: db       # docker-compose.yml�̃T�[�r�X��
  
# �N��
docker-compose build
docker-compose up -d

# DB�쐬
docker-compose run web rails db:create