# A variable is a container for a value, which can be of various types

'''
This is a 
multiline comment
or docstring (used to define a functions purpose)
can be single or double quotes
'''

"""
VARIABLE RULES:
  - Variable names are case sensitive (name and NAME are different variables)
  - Must start with a letter or an underscore
  - Can have numbers but can not start with one
"""

x = 1           #int
y = 2.5         #float
name = 'John'   #string
is_cool = True  #bool (needs to be capital)

# multiple assignment, samething as above
x, y, name, is_cool = (1, 2.5, 'John', True)


x = str(x)
y = int(y)
print(type(y), y)

