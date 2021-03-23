# A List is a collection which is ordered and changeable. Allows duplicate members

#create list
numbers = [1, 2, 3, 4, 5]
fruits = ['apples', 'oranges', 'grapes', 'pears']

# use constructor
# numbers2 = list((1, 2, 3, 4, 5))


# Get a value
print(fruits[1])

print(len(fruits))

#append to list
fruits.append("mangos")


# Remove from List
fruits.remove('grapes')

# Insert into position
fruits.insert(2, 'strawberries')

#change value
fruits[0] = 'blueberries'

#remove with pop
fruits.pop(2)

# reverse list
fruits.reverse()

# sort list
fruits.sort()

#reverse sot
fruits.sort(reverse=True)

print(fruits)