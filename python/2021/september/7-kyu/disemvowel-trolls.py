# https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python


def disemvowel(str):
    res = ''
    for letter in str:
        if letter.lower() not in 'aeiou':
            res += letter

    return res


def disemvowel(str):
    return ''.join(letter for letter in str if letter.lower() not in 'aeiou')


print(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
