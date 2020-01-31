FROM ruby:2.3.3

# RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN apt-get update -qq
RUN apt-get install -y build-essential 
RUN apt-get install -y libpq-dev
RUN apt-get install -y nodejs

# ���[�L���O�f�B���N�g���̐ݒ�
RUN mkdir /myapp
WORKDIR /myapp

# gemfile��ǉ�����
ADD Gemfile /myapp/Gemfile
ADD Gemfile.lock /myapp/Gemfile.lock

# gemfile��install
RUN bundle install
ADD . /myapp