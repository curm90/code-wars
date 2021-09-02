# https://www.codewars.com/kata/56747fd5cb988479af000028/train/python


def get_middle(s):
    if len(s) < 3:
        return s
    elif len(s) % 2 == 0:
        return s[(len(s) - 1) // 2: (len(s) + 2) // 2]
    else:
        return s[(len(s)) // 2]


def get_middle(s):
    return s[(len(s) - 1) // 2: (len(s) + 2) // 2]


print(get_middle('test'), 'es')
print(get_middle('testing'), 't')
print(get_middle('middle'), 'dd')
print(get_middle('A'), 'A')
print(get_middle('of'), 'of')
