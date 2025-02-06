# Тестовое задание

### Локальный запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/prot-alx/tradebotmarket
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите приложение:
```bash
npm run prod
```

Приложение будет доступно по адресу `http://localhost:4174`

### Запуск в Docker

1. Убедитесь, что у вас установлены Docker и Docker Compose

2. Запустите контейнер:
```bash
docker-compose up -d
```
Или
```bash
npm run docker:start
```

Приложение будет доступно по адресу `http://localhost:4173`