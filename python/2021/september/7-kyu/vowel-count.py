# https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python


def getCount(sentence):
    vowels = 'aeiou'
    count = 0

    for letter in sentence:
        if letter in vowels:
            count += 1
    return count


def getCount(sentence):
    return sum(letter in 'aeiou' for letter in sentence)


print(getCount('aeiou'), 5)
print(getCount('y'), 0)
print(getCount('bcdfghjklmnpqrstvwxz'), 0)
print(getCount(''), 0)
print(getCount('abracadabra'), 5)
