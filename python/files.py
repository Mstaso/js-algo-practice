
myFile = open('myfile.txt', 'w')


# get some info

print('Name: ', myFile.name)
print('Is Closed : ', myFile.closed)
print('Opening Mode: ', myFile.mode)


#  write to file
myFile.write('I love Python')
myFile.write(' and Javascript')
myFile.close()


# Append to file
myFile = open('myfile.txt', 'a')
myFile.write(' I also like Ruby')
myFile.close()


myFile = open('myfile.txt', 'r+')
text = myFile.read(100)
print(text)