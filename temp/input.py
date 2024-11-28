# n = input()  # "10 20" for a single line input

# a = input().split()  # ['10', '20'] for converting the string to list of string

# b = map(int, input().split()) # [10, 20] for converting this list items to integers


# _ = input()


# l = list(map(int, input().split()))
# d = {}

# for i in l:
#     if d.get(i):
#         d[i] = 1
#     else:
#         d[i] = 1

# print(d)

import collections
_ = input()


l = list(map(int, input().split()))
d = collections.Counter(l)

print(d)
