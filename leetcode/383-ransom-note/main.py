class Solution:

    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        if len(ransomNote) > len(magazine):
            return False

        for letter in set(ransomNote):
            if ransomNote.count(letter) > magazine.count(letter):
                return False

        return True


print(Solution().canConstruct('a', 'b'))
print(Solution().canConstruct('aa', 'ab'))
print(Solution().canConstruct('aa', 'aab'))
print(Solution().canConstruct(
    'bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj'))
