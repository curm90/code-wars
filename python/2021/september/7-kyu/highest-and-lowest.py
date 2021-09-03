# https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python


def high_and_low(numbers):
    numList = [int(num) for num in numbers.split(' ')]
    max_int = max(numList)
    min_int = min(numList)

    return str(max_int) + ' ' + str(min_int)


def high_and_low(numbers):
    numList = list(map(int, numbers.split(' ')))

    return str(max(numList)) + ' ' + str(min(numList))


def high_and_low(numbers):
    numList = list(map(int, numbers.split(' ')))

    return '{} {}'.format(max(numList), min(numList))


def high_and_low(numbers):
    return ''.join(num(numbers.split(' '), key=int) for num in (max, min))


print(high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9")
print(high_and_low("1 2 3"), "3 1")
