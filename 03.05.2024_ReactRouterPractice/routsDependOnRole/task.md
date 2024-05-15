TASK-03
Створити систему ротінгу з можливістю змінювати роль.
ролі:
admin
user
guest
на головній сторінці - кнопки з назвами ролей. по кліку на кожну з ролей - зʼявляється список посилань зі сторінками які доступні тільки цій ролі.

список сторінок для ролі admin:
Home - "/"
Products - "/products"
Users - "/users"
Sessions - "/sessions"


список сторінок для ролі user:
Home - "/"
Products - "/products"
Product - "/products/:id"


список сторінок для ролі guest:
Login - '/login'