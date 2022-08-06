# README

Esse projeto tem como objetivo ser o Backend das aplicações de Frontend como o Sheet Manager e o Compendium.

## Instalação

Para rodar esse projeto você precisará:

### 1. Instalar Ruby 3.1.2

Se você estiver no Linux, pode instalar via RVM, que é mais interessante. (https://rvm.io/)
Se estiver no Windows, pode instalar direto no site do Ruby: https://www.ruby-lang.org/en/

### 2. Instalar Rails

O Rails é uma Gem, então pra instalar ele é tão simples quanto rodar:

```gem install rails```

Isso deve instalar a última major do rails, que no nosso projeto é Rails 7.

### 3. Instalar o SQLite3

O Linux já vem com o SQLite instalado em muitas revisões, o MacOS acho que também vem.
Mas caso precise, é só instalar no site deles:

https://www.sqlite.org/download.html

Futuramente vamos precisar do PostgreSQL instalado também.

## Rodando o Projeto

Antes de rodar o projeto, você precisa rodar alguns comandos padrões do Ruby.

### 1. Atualizando Bundle

É sempre uma boa prática rodar o Bundle Install pra garantir que você tenha todas Gems instaladas no projeto.

```bundle install```

### 2. Atualizando Yarn

Como o node_modules é ignorado no git, você também vai precisar rodar o Yarn install:

```yarn install```

### 3. Criando banco e rodando migrations

Com as dependencias instaladas, você precisará criar o banco de dados do projeto e inserir a estrutura do projeto nele.
O Rails faz isso pra você também:

```bundle exec rake db:create```

e depois...

```bundle exec rake db:migrate```

### 4. Rodando o projeto

Com as dependencias e o banco de dados instalado, agora é só rodar o projeto.
Para isso, o JSBundling usa o Foreman, que já roda tanto o compilador de JS quanto o Puma, que é o servidor do Ruby.

Para isso, rode o seguinte comando:

```bin/dev```