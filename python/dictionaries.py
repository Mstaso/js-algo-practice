
# A Dictionary is a collection which is unordered, changeable and indexed. No duplicate members.
# Read more about dictionaries at https://docs.python.org/3/tutorial/datastructures.html#dictionaries


# Create Dict

person = {
    'first_name': 'John',
    'last_name': 'Doe',
    'age': 30
}

print(person['first_name'])
print(person.get('last_name'))

# add key/value
person['phone'] = '555-555-5555'

#get dict keys
print(person.keys())

# print(person)

# copy dict
person2 = person.copy()
person2['city'] = 'boston'



#Remove item
del(person['age'])
person.pop('phone')


#clear
person.clear()


# get length
print(len(person2))

print(person2)

# list of dict

people = [
    {'name': 'Martha', 'age': 30},
    {'name': 'Sam', 'age': 25}
]

print(people[1]['name'])