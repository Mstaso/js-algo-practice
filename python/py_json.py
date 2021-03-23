import json

userJson = '{"first_name": "John", "last_name": "Doe", "age": 30}'


user = json.loads(userJson)

print(user['first_name'])


car = {'make': 'Ford', 'model': 'Mustang', 'year': 1970}

carJSON = json.dumps(car)

print(carJSON)