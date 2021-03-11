a = 20

b = 2

if a < b:
    print("a is less than b")
elif a == b:
    print("a is equal to b")
elif a > b + 10:
    print("a is greater than b plus 10")    
else:
    print("a is greater than b")    

name = 'yk'
height_m = 2
weight_kg = 90

bmi = weight_kg / (height_m ** 2)
print (bmi)

# comment check 

def function1():
    print("here we are")

print("this is out of the function")    

function1()

def function2(x, y):
    print(x+y)

function2(1, 77)

a = [1,2,3,4,5,6]

a.append(1)

for element in a:
    print(element)

#append, adds an item at the end of list
#pop, removes the last item from list

