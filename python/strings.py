# Strings in python are surrounded by either single or double quotation marks. Let's look at string formatting and some string methods

name = 'Brad'
age = 37


#concatenate

# print('Hello, my name is ' + name + ' and I am ' + str(age))
# String Formatting



#arguments by position
# print('My name is {name} and I am {age}'.format(name=name, age=age))

# String Methods

s = 'hello world'

#capitalize string
print(s.capitalize())


# Make all uppercase
print(s.upper())

# Make all lower
print(s.lower())

# Swap case
print(s.swapcase())

# Get length
print(len(s))

# Replace
print(s.replace('world', 'everyone'))

# Count
sub = 'h'
# counts the number of H's within the string
print(s.count(sub))

# Starts with
print(s.startswith('hello'))

# Ends with
print(s.endswith('d'))

# Split into a list, which is similar to an array
print(s.split())

# Find position
print(s.find('r'))

# Is all alphanumeric
print(s.isalnum())

# Is all alphabetic
print(s.isalpha())

# Is all numeric
print(s.isnumeric())