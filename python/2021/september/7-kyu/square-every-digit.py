# https://www.codewars.com/kata/546e2562b03326a88e000020/train/python


def square_digits(num):
    res = ''

    for d in str(num):
        sum = pow(int(d), 2)
        res += str(sum)

    return int(res)


def square_digits(num):
    nums = [int(n) for n in str(num)]
    return int(''.join(str(pow(n, 2)) for n in nums))


def square_digits(num):
    return int(''.join(str(pow(int(digit), 2)) for digit in str(num)))


print(square_digits(9119), 811181)
print(square_digits(0), 0)
